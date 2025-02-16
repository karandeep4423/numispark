import MobileDevelopment from '@/components/mobile-app-development/page';

export async function generateMetadata({ params: { lang } }) {
  // Load translations directly from JSON files
  const translations = await import(
    `@/public/locales/${lang}/metaData.json`
  );

  return {
    title: translations.metaData['mobile-app-development'].title,
    description: translations.metaData['mobile-app-development'].description,
    keywords: translations.metaData['mobile-app-development'].keywords,
  };
}

const MobileDevel = () => {
  return (
    <div>
      <MobileDevelopment />
    </div>
  );
};

export default MobileDevel;
