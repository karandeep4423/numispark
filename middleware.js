import { NextResponse } from 'next/server';

const supportedLocales = ['fr', 'en', 'de'];
const hiddenLocale = 'fr';

export function middleware(request) {
  const { pathname } = request.nextUrl;
  
  // Skip static assets and API routes
  if (
    /\.(gif|png|jpg|jpeg|svg|mp4|webp|css|js)$/.test(pathname) ||
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/api/')
  ) {
    return NextResponse.next();
  }

  // Get userLocale from cookie
  const cookieLocale = request.cookies.get('userLocale')?.value;
  
  // Determine the locale to use
  let locale;
  if (cookieLocale && supportedLocales.includes(cookieLocale)) {
    // If cookie exists and is valid, use it
    locale = cookieLocale;
  } else {
    // Default to French if no cookie exists
    locale = hiddenLocale;
  }

  // Parse the pathname to check for locale prefix
  const pathSegments = pathname.split('/');
  const firstSegment = pathSegments[1] || '';
  const hasLocalePrefix = supportedLocales.includes(firstSegment);
  const pathLocale = hasLocalePrefix ? firstSegment : null;

  // Case 1: URL already has a locale prefix
  if (hasLocalePrefix) {
    // Check if the URL locale matches the desired locale from cookie
    if (pathLocale === locale) {
      // If URL locale matches the desired locale, proceed normally
      if (pathLocale === hiddenLocale) {
        // For French, rewrite internally without modifying the URL
        // This ensures French pages are served correctly but without /fr/ in URL
        const newUrl = new URL(request.url);
        return NextResponse.next();
      }
      return NextResponse.next();
    } else {
      // If URL locale doesn't match the cookie locale, redirect to correct locale
      const pathWithoutLocale = pathSegments.slice(2).join('/');
      const newPathname = locale === hiddenLocale
        ? `/${pathWithoutLocale}`
        : `/${locale}/${pathWithoutLocale}`;
      return NextResponse.redirect(new URL(newPathname, request.url));
    }
  }
  
  // Case 2: URL doesn't have a locale prefix
  else {
    if (locale === hiddenLocale) {
      // For French (hidden locale), rewrite internally to include /fr/
      // This makes Next.js find the correct page without changing the URL
      const newUrl = new URL(`/${hiddenLocale}${pathname}`, request.url);
      return NextResponse.rewrite(newUrl);
    } else {
      // For other locales, redirect to add the locale prefix
      const newPath = `/${locale}${pathname}`;
      return NextResponse.redirect(new URL(newPath, request.url));
    }
  }
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};