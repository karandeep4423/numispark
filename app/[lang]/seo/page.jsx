import SEO from '@/components/seo/page';

export async function generateMetadata({ params: { lang } }) {
  // Load translations directly from JSON files
  const translations = await import(
    `@/public/locales/${lang}/metaData.json`
  );

  return {
    title: translations.metaData['seo'].title,
    description: translations.metaData['seo'].description,
    keywords: translations.metaData['seo'].keywords,
  };
}

const Seo = () => {
  return (
    <div>
      <SEO />
    </div>
  );
};

export default Seo;