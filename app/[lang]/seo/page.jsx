import SEO from '@/components/seo/page';

export async function generateMetadata({ params}) {
  // Load translations directly from JSON files
  const paramData = await params;
  const lang = paramData?.lang;
  const translations = await import(
    `@/public/locales/${lang}/metaData.json`
  );

  return {
    title: translations.metaData['seo'].title,
    description: translations.metaData['seo'].description,
    keywords: translations.metaData['seo'].keywords,
    alternates: {
      canonical: translations.metaData['seo'].canonical,
    },
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