import { NextResponse } from 'next/server';

const supportedLocales = ['fr', 'en', 'de'];
const hiddenLocale = 'fr';
const fallbackLocale = 'en'; // Fallback for unsupported browser languages

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

export function middleware(request) {
  const { pathname, host } = request.nextUrl;

  // Redirect www to non-www for SEO
  if (host === 'www.numispark.com') {
    const newUrl = new URL(pathname, 'https://numispark.com');
    return NextResponse.redirect(newUrl, 301);
  }
  
  
  // Skip static assets and API routes
  if (
    /\.(gif|png|jpg|jpeg|svg|mp4|webp|css|js|txt|xml|ico)$/.test(pathname) ||
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/api/')
  ) {
    return NextResponse.next();
  }

  // Get userLocale from cookie
  const cookieLocale = request.cookies.get('userLocale')?.value;
  
  // Get browser language from Accept-Language header
  const acceptLanguage = request.headers.get('Accept-Language');
  const browserLanguage = detectBrowserLanguage(acceptLanguage);

  // Determine the locale to use with priority:
  // 1. Cookie locale (user's explicit choice)
  // 2. Browser language (if supported)
  // 3. Fallback to English for unsupported browser languages
  let locale;
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
      if (!cookieLocale && browserLanguage === locale) {
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
      // If URL locale doesn't match the determined locale, redirect to correct locale
      const pathWithoutLocale = pathSegments.slice(2).join('/');
      const newPathname = locale === hiddenLocale
        ? `/${pathWithoutLocale}`
        : `/${locale}/${pathWithoutLocale}`;
      
      const response = NextResponse.redirect(new URL(newPathname, request.url));
      
      // Set cookie if locale was determined from browser language
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
      if (!cookieLocale && browserLanguage === locale) {
        response.cookies.set('userLocale', locale, {
          path: '/',
          maxAge: 31536000, // 1 year
          sameSite: 'strict'
        });
      }
      
      return response;
    } else {
      // For other locales, redirect to add the locale prefix
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
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};