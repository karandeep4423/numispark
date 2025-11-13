import ServicesPage from "@/components/services/page";

export async function generateMetadata({ params }) {
  const { lang } = params;
  
  const titles = {
    fr: "Nos Services Digitaux | Numispark - Agence Web & Mobile",
    en: "Our Digital Services | Numispark - Web & Mobile Agency",
    de: "Unsere Digitalen Dienstleistungen | Numispark - Web & Mobile Agentur"
  };

  const descriptions = {
    fr: "Découvrez nos services digitaux : développement mobile, e-commerce, SaaS, IA, design, SEO et marketing digital. Solutions sur-mesure pour votre entreprise.",
    en: "Discover our digital services: mobile development, e-commerce, SaaS, AI, design, SEO and digital marketing. Custom solutions for your business.",
    de: "Entdecken Sie unsere digitalen Dienstleistungen: Mobile-Entwicklung, E-Commerce, SaaS, KI, Design, SEO und digitales Marketing. Maßgeschneiderte Lösungen für Ihr Unternehmen."
  };

  return {
    title: titles[lang] || titles.fr,
    description: descriptions[lang] || descriptions.fr,
    keywords: "services digitaux, développement web, développement mobile, e-commerce, SaaS, IA, design, SEO, marketing digital",
    alternates: {
      canonical: `https://numispark.com/${lang}/services`,
      languages: {
        'fr': 'https://numispark.com/services',
        'en': 'https://numispark.com/en/services',
        'de': 'https://numispark.com/de/services',
      },
    },
  };
}

export default async function Services({ params }) {
  const { lang } = params;

  return <ServicesPage lng={lang} />;
}

