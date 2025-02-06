import { NextResponse } from 'next/server';

const supportedLocales = ['fr', 'en', 'de'];
const hiddenLocale = 'fr';

export function middleware(request) {
  const { pathname } = request.nextUrl;
  
  // Early exit: if the request is for a static asset, skip localization.
  if (/\.(gif|png|jpg|jpeg|svg|mp4)$/.test(pathname)) {
    return NextResponse.next();
  }

  // Determine user's locale from cookie or Accept-Language header.
  const cookieLocale = request.cookies.get('userLocale')?.value;
  let locale;
  if (cookieLocale && supportedLocales.includes(cookieLocale)) {
    locale = cookieLocale;
  } else {
    const acceptLanguage = request.headers.get('accept-language') || '';
    const lowerAcceptLanguage = acceptLanguage.toLowerCase();

    if (lowerAcceptLanguage.includes('fr')) {
      locale = 'fr';
    } else if (lowerAcceptLanguage.includes('de')) {
      locale = 'de';
    } else {
      locale = 'en';
    }
  }

  // Split the pathname to check if it already contains a locale prefix.
  const pathSegments = pathname.split('/');
  const pathLocale = pathSegments[1];

  if (supportedLocales.includes(pathLocale)) {
    // URL already contains a locale prefix.
    if (pathLocale === hiddenLocale) {
      // Remove the prefix for the hidden locale (French).
      const newPathname = pathname.replace(`/${hiddenLocale}`, '') || '/';
      return NextResponse.redirect(new URL(newPathname, request.url));
    }
    return NextResponse.next();
  } else {
    // URL does not contain any locale prefix.
    if (locale === hiddenLocale) {
      // Rewrite internally for the hidden locale (French).
      return NextResponse.rewrite(new URL(`/${hiddenLocale}${pathname}`, request.url));
    } else {
      // Redirect externally for non-hidden locales (e.g. '/en' or '/de').
      return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
    }
  }
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};
