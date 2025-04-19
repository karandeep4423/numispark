import WebsiteMobileDesign from '@/components/website-&-mobile-app-design/page';

export async function generateMetadata({ params }) {
  // Load translations directly from JSON files
  const paramData = await params;
  const lang = paramData?.lang;
  const translations = await import(
    `@/public/locales/${lang}/metaData.json`
  );

  return {
    title: translations.metaData['website-&-mobile-app-design'].title,
    description: translations.metaData['website-&-mobile-app-design'].description,
    keywords: translations.metaData['website-&-mobile-app-design'].keywords,
    alternates: {
      canonical: translations.metaData['website-&-mobile-app-design'].canonical,
    },
  };
}

const WebsiteMobile = () => {
  return (
    <div>
      <WebsiteMobileDesign />
    </div>
  );
};

export default WebsiteMobile;