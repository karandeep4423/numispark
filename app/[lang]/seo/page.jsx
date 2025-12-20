import Seo from '@/components/seo/page';

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
    title: translations.metaData['seo'].title,
    description: translations.metaData['seo'].description,
    keywords: translations.metaData['seo'].keywords,
    alternates: buildAlternates(lang, '/seo'),
  };
}

const SEO = () => {
  return (
    <div>
      <Seo />
    </div>
  );
};

export default SEO;