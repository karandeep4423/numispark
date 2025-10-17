// lib/slugs.js - URL slug mappings for each language

export const slugMappings = {
  // Home
  home: {
    fr: '',
    en: '',
    de: ''
  },
  
  // About Us
  'about-us': {
    fr: 'a-propos-de-nous',
    en: 'about-us',
    de: 'uber-uns'
  },
  
  // Contact
  'contact': {
    fr: 'contactez-nous',
    en: 'contact-us',
    de: 'kontakt'
  },
  
  // AI Automation
  'ai-automation': {
    fr: 'agence-automatisation-ia',
    en: 'ai-automation-agency',
    de: 'ki-automatisierung-agentur'
  },
  
  // Website Creation
  'website-creation': {
    fr: 'agence-creation-site-web',
    en: 'website-creation-agency',
    de: 'website-erstellung-agentur'
  },
  
  // SEO Audit
  'seo-audit': {
    fr: 'audit-seo-gratuit',
    en: 'free-seo-audit',
    de: 'kostenloses-seo-audit'
  },
  
  // Logo Design
  'logo-design': {
    fr: 'design-logo-et-posts-reseaux-sociaux',
    en: 'logo-design-social-media-posts',
    de: 'logo-design-social-media-beitrage'
  },
  
  // Mobile Development
  'mobile-development': {
    fr: 'developpement-application-mobile',
    en: 'mobile-app-development',
    de: 'mobile-app-entwicklung'
  },
  
  // Ecommerce
  'ecommerce': {
    fr: 'developpement-ecommerce',
    en: 'ecommerce-development',
    de: 'ecommerce-entwicklung'
  },
  
  // SaaS
  'saas': {
    fr: 'developpement-saas',
    en: 'saas-development',
    de: 'saas-entwicklung'
  },
  
  // Free Quote
  'quote': {
    fr: 'devis-gratuit',
    en: 'free-quote',
    de: 'kostenloses-angebot'
  },
  
  // Digital Marketing
  'marketing': {
    fr: 'marketing-digital',
    en: 'digital-marketing',
    de: 'digital-marketing'
  },
  
  // Legal Notice
  'legal': {
    fr: 'mentions-legales',
    en: 'legal-notice',
    de: 'impressum'
  },
  
  // Privacy Policy
  'privacy': {
    fr: 'politique-de-confidentialite',
    en: 'privacy-policy',
    de: 'datenschutz'
  },
  
  // Portfolio
  'portfolio': {
    fr: 'portfolio',
    en: 'portfolio',
    de: 'portfolio'
  },
  
  // SEO
  'seo': {
    fr: 'seo',
    en: 'seo',
    de: 'seo'
  },
  
  // Web & Mobile Design
  'design': {
    fr: 'web-et-mobile-design',
    en: 'web-mobile-design',
    de: 'web-mobile-design'
  },
  
  // Blog
  'blog': {
    fr: 'blog',
    en: 'blog',
    de: 'blog'
  }
};

// Helper function to get slug for a specific language
export function getSlug(key, lang = 'fr') {
  return slugMappings[key]?.[lang] || slugMappings[key]?.fr || '';
}

// Helper function to find key by slug
export function getKeyBySlug(slug, lang = 'fr') {
  for (const [key, langs] of Object.entries(slugMappings)) {
    if (langs[lang] === slug) {
      return key;
    }
  }
  return null;
}

// Helper function to get alternate URLs (for hreflang tags)
export function getAlternateUrls(key, baseUrl = 'https://numispark.com') {
  const mapping = slugMappings[key];
  if (!mapping) return {};
  
  return {
    fr: `${baseUrl}/${mapping.fr}`,
    en: `${baseUrl}/en/${mapping.en}`,
    de: `${baseUrl}/de/${mapping.de}`,
    'x-default': `${baseUrl}/${mapping.fr}` // French as default
  };
}
