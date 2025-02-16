import { Providers } from "./providers";

export default async function LangLayout({ children, params }) {
  const lang = await params?.lang; // Simply access the lang parameter
  return <Providers lang={lang}>{children}</Providers>;
}

export async function generateMetadata({ params: { lang } }) {
  try {
    const translations = await import(`@/public/locales/${lang}/metaData.json`);
    return {
      title: translations?.metaData['home']?.title || "Default Title",
      description: translations?.metaData['home']?.description || "Default Description",
      keywords: translations?.metaData['home']?.keywords || [],
    };
  } catch {
    return {
      title: "home - Default Title",
      description: "Default Description",
    };
  }
}