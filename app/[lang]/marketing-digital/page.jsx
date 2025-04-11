import SocialMediaMarketing from '@/components/social-media-marketing/page';

export async function generateMetadata({ params}) {
  // Load translations directly from JSON files
  const paramData = await params;
  const lang = paramData?.lang;
  const translations = await import(
    `@/public/locales/${lang}/metaData.json`
  );

  return {
    title: translations.metaData['social-media-marketing'].title,
    description: translations.metaData['social-media-marketing'].description,
    keywords: translations.metaData['social-media-marketing'].keywords,
    canonical: translations.metaData['social-media-marketing'].canonical
  };
}

const SocialMarketing = () => {
  return (
    <div>
      <SocialMediaMarketing />
    </div>
  );
};

export default SocialMarketing;