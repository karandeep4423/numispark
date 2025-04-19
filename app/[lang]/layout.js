import { Providers } from "./providers";
import "../globals.css";
import Navbar from "@/components/Navbar/page";
import Footer from "@/components/Footer/page";
export default async function LangLayout({ children, params }) {
  const paramData = await params;
  const lang = paramData?.lang;
  return (
    <Providers lang={lang}>
      <Navbar />
      {children}
      <Footer />
    </Providers>
  );
}

export async function generateMetadata({ params }) {
  // Load translations directly from JSON files
  const paramData = await params;
  const lang = paramData?.lang;
  const translations = await import(`@/public/locales/${lang}/metaData.json`);

  if (!lang) {
    return {
      title: "Default Title",
      description: "Default Description",
    };
  } else {
    return {
      title: translations.metaData["home"].title,
      description:
        translations.metaData["home"].description,
      keywords: translations.metaData["home"].keywords,
      alternates: {
        canonical:
          translations.metaData["home"].canonical,
      },
    };
  }
}
