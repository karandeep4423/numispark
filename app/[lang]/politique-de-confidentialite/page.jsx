import PrivacyPolicy from "@/components/privacyPolicy/page";

export async function generateMetadata({ params}) {
  // Load translations directly from JSON files
  const paramData = await params;
  const lang = paramData?.lang;
  const translations = await import(
    `@/public/locales/${lang}/metaData.json`
  );

  return {
    title: translations.metaData['privacy-policy'].title,
    description: translations.metaData['privacy-policy'].description,
    keywords: translations.metaData['privacy-policy'].keywords,
    alternates: {
      canonical: translations.metaData['privacy-policy'].canonical,
    },
  };
}

const  Politique=()=> {
  return (
    <div>
      <PrivacyPolicy />
    </div>
  );
}

export default Politique;