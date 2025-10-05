const siteUrl = 'https://numispark.com';

// Add other static paths here
const staticPaths = [
  '', // for homepage
  '/a-propos-de-nous',
  '/agence-automatisation-ia',
  '/agence-creation-site-web',
  '/audit-seo-gratuit',
  '/blog',
  '/contactez-nous',
  '/design-logo-et-posts-reseaux-sociaux',
  '/developpement-application-mobile',
  '/developpement-ecommerce',
  '/developpement-saas',
  '/marketing-digital',
  '/mentions-legales',
  '/politique-de-confidentialite',
  '/portfolio',
  '/seo',
  '/web-et-mobile-design',
];

export default function sitemap() {
  const sitemapEntries = staticPaths.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    alternates: {
      languages: {
        fr: `${siteUrl}${path}`,
        en: `${siteUrl}/en${path}`,
        'x-default': `${siteUrl}${path}`,
      },
    },
  }));

  return sitemapEntries;
}
