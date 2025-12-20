import About from "@/components/about-us/page";
import { buildAlternates } from "@/lib/seo-helpers";

export async function generateMetadata({ params }) {
  // Load translations directly from JSON files
  const paramData = await params;
  const lang = paramData?.lang || 'fr';
  const translations = await import(`@/public/locales/${lang}/metaData.json`);

  return {
    title: translations.metaData["about-us"].title,
    description: translations.metaData["about-us"].description,
    keywords: translations.metaData["about-us"].keywords,
    alternates: buildAlternates(lang, '/a-propos-de-nous'),
  };
}

const AboutUs = () => {
  return (
    <div>
      <About />
    </div>
  );
};

export default AboutUs;
