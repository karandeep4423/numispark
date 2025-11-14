import { NextResponse } from 'next/server';

const supportedLocales = ['fr', 'en', 'de'];
const hiddenLocale = 'fr';
const fallbackLocale = 'en'; // Fallback for unsupported browser languages

// Helper function to detect if request is from a search engine crawler
function isBot(userAgent) {
  if (!userAgent) return false;
  
  const botPatterns = [
    'googlebot',
    'bingbot',
    'slurp', // Yahoo
    'duckduckbot',
    'baiduspider',
    'yandexbot',
    'facebot', // Facebook
    'ia_archiver', // Alexa
    'crawler',
    'spider',
    'bot',
    'crawl',
    'Google-InspectionTool', // Google Search Console
    'lighthouse' // Google Lighthouse
  ];
  
  const lowerUserAgent = userAgent.toLowerCase();
  return botPatterns.some(pattern => lowerUserAgent.includes(pattern));
}

// Helper function to detect browser language from Accept-Language header
function detectBrowserLanguage(acceptLanguageHeader) {
  if (!acceptLanguageHeader) return null;

  // Parse the Accept-Language header
  const languages = acceptLanguageHeader
    .split(',')
    .map(lang => {
      const [code, q = '1'] = lang.trim().split(';q=');
      return {
        code: code.toLowerCase().split('-')[0], // Get primary language code (e.g., 'en' from 'en-US')
        quality: parseFloat(q)
      };
    })
    .sort((a, b) => b.quality - a.quality); // Sort by preference (quality)

  // Find the first supported language
  for (const lang of languages) {
    if (supportedLocales.includes(lang.code)) {
      return lang.code;
    }
  }

  return null;
}

// Helper function to detect locale from URL path
function detectLocaleFromPath(pathname) {
  // Map of French paths to detect French content
  const frenchPaths = [
    '/a-propos-de-nous',
    '/agence-automatisation-ia',
    '/agence-creation-site-web',
    '/audit-seo-gratuit',
    '/contactez-nous',
    '/design-logo-et-posts-reseaux-sociaux',
    '/developpement-application-mobile',
    '/developpement-ecommerce',
    '/developpement-saas',
    '/marketing-digital',
    '/mentions-legales',
    '/politique-de-confidentialite',
    '/portfolio',
    '/seo',
    '/web-et-mobile-design',
    '/devis-gratuit',
    '/blog'
  ];
  
  // Check if path starts with any French path
  for (const frPath of frenchPaths) {
    if (pathname === frPath || pathname.startsWith(frPath + '/')) {
      return 'fr';
    }
  }
  
  // Check if path already has a locale prefix
  const pathSegments = pathname.split('/');
  const firstSegment = pathSegments[1] || '';
  if (supportedLocales.includes(firstSegment)) {
    return firstSegment;
  }
  
  // Default to French for root paths without clear indicators
  return 'fr';
}

export function middleware(request) {
  const { pathname, host } = request.nextUrl;

  // Redirect www to non-www for SEO
  if (host === 'www.numispark.com') {
    const newUrl = new URL(pathname, 'https://numispark.com');
    return NextResponse.redirect(newUrl, 301);
  }
  
  
  // Skip static assets, API routes, and admin routes
  if (
    /\.(gif|png|jpg|jpeg|svg|mp4|webp|css|js|txt|xml|ico)$/.test(pathname) ||
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/api/') ||
    pathname.startsWith('/admin')
  ) {
    return NextResponse.next();
  }

  // Check if request is from a bot/crawler
  const userAgent = request.headers.get('user-agent') || '';
  const isCrawler = isBot(userAgent);

  // Get userLocale from cookie
  const cookieLocale = request.cookies.get('userLocale')?.value;
  
  // Get browser language from Accept-Language header
  const acceptLanguage = request.headers.get('Accept-Language');
  const browserLanguage = detectBrowserLanguage(acceptLanguage);

  // Determine the locale to use with priority:
  let locale;
  
  if (isCrawler) {
    // FOR CRAWLERS: Determine locale from the URL path itself
    // This ensures crawlers get 200 status codes, not redirects
    locale = detectLocaleFromPath(pathname);
  } else {
    // FOR REGULAR USERS: Use cookie > browser language > fallback
    if (cookieLocale && supportedLocales.includes(cookieLocale)) {
      // If cookie exists and is valid, use it (highest priority)
      locale = cookieLocale;
    } else if (browserLanguage) {
      // If no cookie but browser language is supported, use browser language
      locale = browserLanguage;
    } else {
      // Fallback to English if neither cookie nor supported browser language exists
      locale = fallbackLocale;
    }
  }

  // Parse the pathname to check for locale prefix
  const pathSegments = pathname.split('/');
  const firstSegment = pathSegments[1] || '';
  const hasLocalePrefix = supportedLocales.includes(firstSegment);
  const pathLocale = hasLocalePrefix ? firstSegment : null;

  // Case 1: URL already has a locale prefix
  if (hasLocalePrefix) {
    // If URL has /fr/ prefix, redirect to remove it (French should be on root)
    if (pathLocale === hiddenLocale) {
      const pathWithoutLocale = pathSegments.slice(2).join('/');
      const newPathname = `/${pathWithoutLocale}`;
      const response = NextResponse.redirect(new URL(newPathname, request.url));
      
      // Set cookie if locale was determined from browser language
      // Don't set cookies for crawlers
      if (!isCrawler && !cookieLocale && browserLanguage === locale) {
        response.cookies.set('userLocale', locale, {
          path: '/',
          maxAge: 31536000,
          sameSite: 'strict'
        });
      }
      
      return response;
    }
    
    // Check if the URL locale matches the desired locale
    if (pathLocale === locale) {
      // If URL locale matches the desired locale, proceed normally
      return NextResponse.next();
    } else {
      // If URL locale doesn't match the determined locale
      const pathWithoutLocale = pathSegments.slice(2).join('/');
      const newPathname = locale === hiddenLocale
        ? `/${pathWithoutLocale}`
        : `/${locale}/${pathWithoutLocale}`;
      
      // For crawlers: Use rewrite instead of redirect to avoid 307 status
      if (isCrawler) {
        return NextResponse.rewrite(new URL(newPathname, request.url));
      }
      
      // For regular users: Redirect to the correct locale
      const response = NextResponse.redirect(new URL(newPathname, request.url));
      
      // Set cookie if locale was determined from browser language
      // Don't set cookies for crawlers
      if (!cookieLocale && browserLanguage === locale) {
        response.cookies.set('userLocale', locale, {
          path: '/',
          maxAge: 31536000,
          sameSite: 'strict'
        });
      }
      
      return response;
    }
  }
  
  // Case 2: URL doesn't have a locale prefix
  else {
    if (locale === hiddenLocale) {
      // For French (hidden locale), rewrite internally to include /fr/
      // This makes Next.js find the correct page without changing the URL
      const newUrl = new URL(`/${hiddenLocale}${pathname}`, request.url);
      const response = NextResponse.rewrite(newUrl);
      
      // Set cookie if locale was determined from browser language (not from existing cookie)
      // Don't set cookies for crawlers
      if (!isCrawler && !cookieLocale && browserLanguage === locale) {
        response.cookies.set('userLocale', locale, {
          path: '/',
          maxAge: 31536000, // 1 year
          sameSite: 'strict'
        });
      }
      
      return response;
    } else {
      // For crawlers: Don't redirect, just rewrite to the locale path
      // This ensures crawlers see 200 status, not 307 redirects
      if (isCrawler) {
        const newUrl = new URL(`/${locale}${pathname}`, request.url);
        return NextResponse.rewrite(newUrl);
      }
      
      // For regular users: Redirect to add the locale prefix
      const newPath = `/${locale}${pathname}`;
      const response = NextResponse.redirect(new URL(newPath, request.url));
      
      // Set cookie if locale was determined from browser language (not from existing cookie)
      if (!cookieLocale && browserLanguage === locale) {
        response.cookies.set('userLocale', locale, {
          path: '/',
          maxAge: 31536000, // 1 year
          sameSite: 'strict'
        });
      }
      
      return response;
    }
  }
}

export const config = {
  matcher: '/((?!api|admin|_next/static|_next/image|favicon.ico).*)',
};