import WebsiteDevelopment from '@/components/website-development/page';

export async function generateMetadata({ params: { lang } }) {
  // Load translations directly from JSON files
  const translations = await import(
    `@/public/locales/${lang}/metaData.json`
  );

  return {
    title: translations.metaData['website-development'].title,
    description: translations.metaData['website-development'].description,
    keywords: translations.metaData['website-development'].keywords,
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