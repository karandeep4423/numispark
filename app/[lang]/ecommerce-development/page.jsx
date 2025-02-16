import EcommerceDevelopment from '@/components/ecommerce-development/page';

export async function generateMetadata({ params: { lang } }) {
  // Load translations directly from JSON files
  const translations = await import(
    `@/public/locales/${lang}/metaData.json`
  );

  return {
    title: translations.metaData['ecommerce-development'].title,
    description: translations.metaData['ecommerce-development'].description,
    keywords: translations.metaData['ecommerce-development'].keywords,
  };
}

const EcommerceDevel = () => {
  return (
    <div>
      <EcommerceDevelopment />
    </div>
  );
};

export default EcommerceDevel;
