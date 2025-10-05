const siteUrl = 'https://numispark.com';

// Define all your pages
const pages = [
  '', // homepage
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
  const sitemapEntries = [];
  
  // Add French pages (default language at root)
  pages.forEach((path) => {
    sitemapEntries.push({
      url: `${siteUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: path === '' ? 1.0 : 0.8,
      alternates: {
        languages: {
          fr: `${siteUrl}${path}`,
          en: `${siteUrl}/en${path}`,
          de: `${siteUrl}/de${path}`,
          'x-default': `${siteUrl}${path}`,
        },
      },
    });
  });
  
  // Add English pages
  pages.forEach((path) => {
    sitemapEntries.push({
      url: `${siteUrl}/en${path}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
      alternates: {
        languages: {
          fr: `${siteUrl}${path}`,
          en: `${siteUrl}/en${path}`,
          de: `${siteUrl}/de${path}`,
          'x-default': `${siteUrl}${path}`,
        },
      },
    });
  });
  
  // Add German pages
  pages.forEach((path) => {
    sitemapEntries.push({
      url: `${siteUrl}/de${path}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
      alternates: {
        languages: {
          fr: `${siteUrl}${path}`,
          en: `${siteUrl}/en${path}`,
          de: `${siteUrl}/de${path}`,
          'x-default': `${siteUrl}${path}`,
        },
      },
    });
  });

  return sitemapEntries;
}
