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
  try {
    const paramData = await params;
    const lang = paramData?.lang || 'fr';
    
    // Use dynamic import with proper error handling
    let translations;
    try {
      translations = await import(`@/public/locales/${lang}/metaData.json`);
    } catch (error) {
      console.error(`Failed to load metadata for language ${lang}:`, error);
      return {
        title: "Default Title",
        description: "Default Description",
      };
    }
    
    // Check if the structure exists before accessing it
    if (translations?.metaData?.home) {
      return {
        title: translations.metaData.home.title,
        description: translations.metaData.home.description,
        keywords: translations.metaData.home.keywords,
        alternates: {
          canonical: translations.metaData.home.canonical,
        },
      };
    } else {
      return {
        title: "Default Title",
        description: "Default Description",
      };
    }
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Default Title",
      description: "Default Description",
    };
  }
}
