import { Providers } from "./providers";

export default async function LangLayout({ children, params }) {
  const lang = await params?.lang; // Simply access the lang parameter
  return <Providers lang={lang}>{children}</Providers>;
}

// export async function generateMetadata({ params: { lang } }) {
//   // Load translations directly from JSON files
//   const translations = await import(
//     `@/public/locales/${lang}/metaData.json`
//   );

//   return {
//     title: translations?.metaData['home'].title,
//     description: translations?.metaData['home'].description,
//     keywords: translations?.metaData['home'].keywords,
//   };
// }