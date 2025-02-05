import { NextResponse } from 'next/server';

const supportedLocales = ['fr', 'en', 'de'];
const defaultLocale = 'fr';

export function middleware(request) {
  const { pathname } = request.nextUrl;
  
  // Handle root path detection
  if (pathname === '/') {
    // First, try to read the cookie set by the language switcher
    const cookieLocale = request.cookies.get('userLocale')?.value;
    // If cookie is set and valid, use it; otherwise, use accept-language header.
    let locale;
    if (cookieLocale && supportedLocales.includes(cookieLocale)) {
      locale = cookieLocale;
    } else {
      const acceptLanguage = request.headers.get('accept-language') || defaultLocale;
      const detectedLocale = acceptLanguage.split(',')[0].split('-')[0].toLowerCase();
      locale = supportedLocales.includes(detectedLocale) ? detectedLocale : defaultLocale;
    }

    // For default language (for example, French) use a rewrite if desired
    if (locale === defaultLocale) {
      return NextResponse.rewrite(new URL(`/${defaultLocale}`, request.url));
    }
    // Redirect other languages to their subpath
    return NextResponse.redirect(new URL(`/${locale}`, request.url));
  }

  // Validate locale in path
  const pathLocale = pathname.split('/')[1];
  if (!supportedLocales.includes(pathLocale)) {
    // Use the cookie or accept-language to determine the locale.
    const cookieLocale = request.cookies.get('userLocale')?.value;
    let locale;
    if (cookieLocale && supportedLocales.includes(cookieLocale)) {
      locale = cookieLocale;
    } else {
      const acceptLanguage = request.headers.get('accept-language') || defaultLocale;
      const detectedLocale = acceptLanguage.split(',')[0].split('-')[0].toLowerCase();
      locale = supportedLocales.includes(detectedLocale) ? detectedLocale : defaultLocale;
    }
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
