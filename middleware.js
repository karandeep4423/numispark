// import { NextResponse } from 'next/server';

// const supportedLocales = ['fr', 'en', 'de'];
// const hiddenLocale = 'fr';

// export function middleware(request) {
//   const { pathname } = request.nextUrl;
  
//   // Early exit: if the request is for a static asset, skip localization.
//   if (/\.(gif|png|jpg|jpeg|svg|mp4|webp)$/.test(pathname)) {
//     return NextResponse.next();
//   }

//   // Determine user's locale from cookie or Accept-Language header.
//   const cookieLocale = request.cookies.get('userLocale')?.value;
//   let locale;
//   if (cookieLocale && supportedLocales.includes(cookieLocale)) {
//     locale = cookieLocale;
//   } else {
//     const acceptLanguage = request.headers.get('accept-language') || '';
//     const lowerAcceptLanguage = acceptLanguage.toLowerCase();

//     if (lowerAcceptLanguage.includes('fr')) {
//       locale = 'fr';
//     } else if (lowerAcceptLanguage.includes('de')) {
//       locale = 'de';
//     } else {
//       locale = 'en';
//     }
//   }

//   // Split the pathname to check if it already contains a locale prefix.
//   const pathSegments = pathname.split('/');
//   const pathLocale = pathSegments[1];

//   if (supportedLocales.includes(pathLocale)) {
//     // URL already contains a locale prefix.
//     if (pathLocale === hiddenLocale) {
//       // Remove the prefix for the hidden locale (French).
//       const newPathname = pathname.replace(`/${hiddenLocale}`, '') || '/';
//       return NextResponse.redirect(new URL(newPathname, request.url));
//     }
//     return NextResponse.next();
//   } else {
//     // URL does not contain any locale prefix.
//     if (locale === hiddenLocale) {
//       // Rewrite internally for the hidden locale (French).
//       return NextResponse.rewrite(new URL(`/${hiddenLocale}${pathname}`, request.url));
//     } else {
//       // Redirect externally for non-hidden locales (e.g. '/en' or '/de').
//       return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
//     }
//   }
// }

// export const config = {
//   matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
// };


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

  // Check if pathname already has a locale
  const pathSegments = pathname.split('/');
  const pathLocale = pathSegments[1];
  const hasLocalePrefix = supportedLocales.includes(pathLocale);

  // Case 1: URL already has a locale prefix
  if (hasLocalePrefix) {
    if (pathLocale === locale) {
      // If URL locale matches the desired locale, proceed normally
      if (pathLocale === hiddenLocale) {
        // For French, remove the prefix since it should be hidden
        const newPathname = pathname.replace(`/${hiddenLocale}`, '') || '/';
        return NextResponse.redirect(new URL(newPathname, request.url));
      }
      return NextResponse.next();
    } else {
      // If URL locale doesn't match the desired locale, redirect to the correct locale
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
      // For French (hidden locale), just proceed without modifying the URL
      return NextResponse.rewrite(new URL(`/${hiddenLocale}${pathname}`, request.url));
    } else {
      // For other locales, redirect to add the locale prefix
      return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
    }
  }
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};