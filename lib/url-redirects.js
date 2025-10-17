/**
 * URL Redirects Configuration
 * 
 * Maps old French-slug URLs to new language-specific URLs
 * Use for 301 permanent redirects in middleware or next.config.mjs
 * 
 * IMPORTANT: Only redirect AFTER new pages are created and tested!
 */

export const urlRedirects = {
  // ============================================
  // ENGLISH REDIRECTS (old French → new English)
  // ============================================
  '/en/a-propos-de-nous': '/en/about-us',
  '/en/contactez-nous': '/en/contact-us',
  '/en/agence-automatisation-ia': '/en/ai-automation-agency',
  '/en/agence-creation-site-web': '/en/website-creation-agency',
  '/en/audit-seo-gratuit': '/en/free-seo-audit',
  '/en/blog': '/en/blog', // No change
  '/en/design-logo-et-posts-reseaux-sociaux': '/en/logo-design-social-media-posts',
  '/en/developpement-application-mobile': '/en/mobile-app-development',
  '/en/developpement-ecommerce': '/en/ecommerce-development',
  '/en/developpement-saas': '/en/saas-development',
  '/en/devis-gratuit': '/en/free-quote',
  '/en/marketing-digital': '/en/digital-marketing',
  '/en/mentions-legales': '/en/legal-notice',
  '/en/politique-de-confidentialite': '/en/privacy-policy',
  '/en/portfolio': '/en/portfolio', // No change
  '/en/seo': '/en/seo', // No change
  '/en/web-et-mobile-design': '/en/web-mobile-design',

  // ============================================
  // GERMAN REDIRECTS (old French → new German)
  // ============================================
  '/de/a-propos-de-nous': '/de/uber-uns',
  '/de/contactez-nous': '/de/kontakt',
  '/de/agence-automatisation-ia': '/de/ki-automatisierung-agentur',
  '/de/agence-creation-site-web': '/de/website-erstellung-agentur',
  '/de/audit-seo-gratuit': '/de/kostenloses-seo-audit',
  '/de/blog': '/de/blog', // No change
  '/de/design-logo-et-posts-reseaux-sociaux': '/de/logo-design-social-media-beitrage',
  '/de/developpement-application-mobile': '/de/mobile-app-entwicklung',
  '/de/developpement-ecommerce': '/de/ecommerce-entwicklung',
  '/de/developpement-saas': '/de/saas-entwicklung',
  '/de/devis-gratuit': '/de/kostenloses-angebot',
  '/de/marketing-digital': '/de/digital-marketing',
  '/de/mentions-legales': '/de/impressum',
  '/de/politique-de-confidentialite': '/de/datenschutz',
  '/de/portfolio': '/de/portfolio', // No change
  '/de/seo': '/de/seo', // No change
  '/de/web-et-mobile-design': '/de/web-mobile-design',
};

/**
 * Get redirect destination for a given path
 * @param {string} pathname - The incoming URL path
 * @returns {string|null} - The redirect destination or null if no redirect needed
 */
export function getRedirectDestination(pathname) {
  return urlRedirects[pathname] || null;
}

/**
 * Check if a path needs to be redirected
 * @param {string} pathname - The incoming URL path
 * @returns {boolean} - True if redirect is needed
 */
export function shouldRedirect(pathname) {
  return pathname in urlRedirects;
}

/**
 * Convert redirects to Next.js redirects array format
 * @returns {Array} - Array of Next.js redirect objects
 */
export function toNextJsRedirects() {
  return Object.entries(urlRedirects).map(([source, destination]) => ({
    source,
    destination,
    permanent: true, // 301 permanent redirect
  }));
}

// Export for use in next.config.mjs
export default urlRedirects;
