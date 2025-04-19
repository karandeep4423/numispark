import WebsiteDevelopment from '@/components/website-development/page';

export async function generateMetadata({ params }) {
  const paramData = await params;
  const lang = paramData?.lang;
    if (!lang) {
    return {
      title: "Default Title",
      description: "Default Description",
    };
  }
  // Load translations directly from JSON files
  const translations = await import(
    `@/public/locales/${lang}/metaData.json`
  );

  return {
    title: translations.metaData['website-development'].title,
    description: translations.metaData['website-development'].description,
    keywords: translations.metaData['website-development'].keywords,
    alternates: {
      canonical: translations.metaData['website-development'].canonical,
    },
  };
}

const Website = () => {
  return (
    <div>
      <WebsiteDevelopment />
    </div>
  );
};

export default Website;