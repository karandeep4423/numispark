import SocialMediaMarketing from '@/components/social-media-marketing/page';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://numispark.com';
const hiddenLocale = 'fr';

function buildAlternates(lang, pagePath) {
  const canonicalPath = lang === hiddenLocale ? pagePath : `/${lang}${pagePath}`;
  return {
    canonical: `${siteUrl}${canonicalPath}`,
    languages: {
      'fr': `${siteUrl}${pagePath}`,
      'en': `${siteUrl}/en${pagePath}`,
      'de': `${siteUrl}/de${pagePath}`,
      'x-default': `${siteUrl}${pagePath}`,
    },
  };
}

export async function generateMetadata({ params}) {
  // Load translations directly from JSON files
  const paramData = await params;
  const lang = paramData?.lang || 'fr';
  const translations = await import(
    `@/public/locales/${lang}/metaData.json`
  );

  return {
    title: translations.metaData['social-media-marketing'].title,
    description: translations.metaData['social-media-marketing'].description,
    keywords: translations.metaData['social-media-marketing'].keywords,
    alternates: buildAlternates(lang, '/marketing-digital'),
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