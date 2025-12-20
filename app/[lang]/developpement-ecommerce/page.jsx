import EcommerceDevelopment from '@/components/ecommerce-development/page';

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
    title: translations.metaData['ecommerce-development'].title,
    description: translations.metaData['ecommerce-development'].description,
    keywords: translations.metaData['ecommerce-development'].keywords,
    alternates: buildAlternates(lang, '/developpement-ecommerce'),
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
