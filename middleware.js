import { NextResponse } from 'next/server';

const supportedLocales = ['fr', 'en', 'de'];
const defaultLocale = 'fr';

export function middleware(request) {
  const { pathname } = request.nextUrl;
  
  // Handle root path detection
  if (pathname === '/') {
    const acceptLanguage = request.headers.get('accept-language') || defaultLocale;
    const detectedLocale = acceptLanguage.split(',')[0].split('-')[0].toLowerCase();
    const locale = supportedLocales.includes(detectedLocale) ? detectedLocale : defaultLocale;

    // For French: rewrite to /fr but keep URL as /
    if (locale === defaultLocale) {
      return NextResponse.rewrite(new URL(`/fr`, request.url));
    }
    
    // Redirect other languages to their subpath
    return NextResponse.redirect(new URL(`/${locale}`, request.url));
  }

  // Validate locale in path
  const pathLocale = pathname.split('/')[1];
  if (!supportedLocales.includes(pathLocale)) {
    return NextResponse.redirect(new URL(`/fr${pathname}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};