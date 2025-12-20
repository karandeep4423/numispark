const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://numispark.com';
const hiddenLocale = 'fr';

/**
 * Build alternates object with canonical and hreflang for multilingual pages
 * @param {string} lang - Current language
 * @param {string} pagePath - Page path (e.g., '/contactez-nous')
 * @returns {object} Alternates object with canonical and languages
 */
export function buildAlternates(lang, pagePath) {
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

/**
 * Build alternates for blog posts with x-default
 * @param {string} lang - Current language
 * @param {string} slug - Blog post slug
 * @param {string[]} availableLanguages - Languages available for this post
 * @returns {object} Alternates object with canonical and languages
 */
export function buildBlogAlternates(lang, slug, availableLanguages) {
  const hiddenLocale = 'fr';
  const languagesAlternates = {};
  
  const langsToUse = (availableLanguages && availableLanguages.length > 0)
    ? availableLanguages
    : [lang];

  for (const lng of langsToUse) {
    if (lng === hiddenLocale) {
      languagesAlternates[lng] = `${siteUrl}/blog/${slug}`;
    } else {
      languagesAlternates[lng] = `${siteUrl}/${lng}/blog/${slug}`;
    }
  }
  
  // Add x-default pointing to French (or first available language)
  if (langsToUse.includes(hiddenLocale)) {
    languagesAlternates['x-default'] = `${siteUrl}/blog/${slug}`;
  } else {
    languagesAlternates['x-default'] = languagesAlternates[langsToUse[0]];
  }

  // Build canonical URL
  const canonicalUrl = lang === hiddenLocale 
    ? `${siteUrl}/blog/${slug}`
    : `${siteUrl}/${lang}/blog/${slug}`;

  return {
    canonical: canonicalUrl,
    languages: languagesAlternates,
  };
}

export { siteUrl, hiddenLocale };
