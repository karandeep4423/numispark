import LegalNotice from "@/components/mentionsLegales/page";

export async function generateMetadata({ params}) {
  // Load translations directly from JSON files
  const paramData = await params;
  const lang = paramData?.lang;
  const translations = await import(
    `@/public/locales/${lang}/metaData.json`
  );

  return {
    title: translations.metaData['mentions-legales'].title,
    description: translations.metaData['mentions-legales'].description,
    keywords: translations.metaData['mentions-legales'].keywords,
    alternates: {
      canonical: translations.metaData['mentions-legales'].canonical,
    },
  };
}

const  MentionsLegales=()=> {
  return (
    <div>
      <LegalNotice />
    </div>
  );
}

export default MentionsLegales;