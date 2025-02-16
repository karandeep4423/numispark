import SaaSDevelopment from '@/components/saas-development/page';

export async function generateMetadata({ params: { lang } }) {
  // Load translations directly from JSON files
  const translations = await import(
    `@/public/locales/${lang}/metaData.json`
  );

  return {
    title: translations.metaData['saas-development'].title,
    description: translations.metaData['saas-development'].description,
    keywords: translations.metaData['saas-development'].keywords,
  };
}

const SaaS = () => {
  return (
    <div>
      <SaaSDevelopment />
    </div>
  );
};

export default SaaS;
