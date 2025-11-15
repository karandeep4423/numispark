import ServicesPage from "@/components/services/page";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://numispark.com";
const defaultLocale = "fr";

const titles = {
  fr: "Nos Services Digitaux | Numispark - Agence Web & Mobile",
  en: "Our Digital Services | Numispark - Web & Mobile Agency",
  de: "Unsere Digitalen Dienstleistungen | Numispark - Web & Mobile Agentur",
};

const descriptions = {
  fr: "Découvrez nos services digitaux : développement mobile, e-commerce, SaaS, IA, design, SEO et marketing digital. Solutions sur-mesure pour votre entreprise.",
  en: "Discover our digital services: mobile development, e-commerce, SaaS, AI, design, SEO and digital marketing. Custom solutions for your business.",
  de: "Entdecken Sie unsere digitalen Dienstleistungen: Mobile-Entwicklung, E-Commerce, SaaS, KI, Design, SEO und digitales Marketing. Maßgeschneiderte Lösungen für Ihr Unternehmen.",
};

const languagePaths = {
  fr: `${siteUrl}/services`,
  en: `${siteUrl}/en/services`,
  de: `${siteUrl}/de/services`,
};

export async function generateMetadata({ params }) {
  const { lang = defaultLocale } = params;
  const canonicalUrl = lang === defaultLocale ? languagePaths.fr : languagePaths[lang] || languagePaths.fr;

  return {
    title: titles[lang] || titles.fr,
    description: descriptions[lang] || descriptions.fr,
    keywords:
      "services digitaux, développement web, développement mobile, e-commerce, SaaS, IA, design, SEO, marketing digital",
    alternates: {
      canonical: canonicalUrl,
      languages: {
        fr: languagePaths.fr,
        en: languagePaths.en,
        de: languagePaths.de,
        "x-default": languagePaths.fr,
      },
    },
    openGraph: {
      title: titles[lang] || titles.fr,
      description: descriptions[lang] || descriptions.fr,
      url: canonicalUrl,
      type: "website",
    },
  };
}

export default async function Services({ params }) {
  const { lang = defaultLocale } = params;
  const canonicalUrl = lang === defaultLocale ? languagePaths.fr : languagePaths[lang] || languagePaths.fr;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Numispark Digital Services",
    description: descriptions[lang] || descriptions.fr,
    url: canonicalUrl,
    areaServed: ["France", "Europe"],
    provider: {
      "@type": "Organization",
      name: "Numispark",
      url: siteUrl,
      logo: `${siteUrl}/logo.png`,
    },
    serviceType: "Digital strategy, design, development, marketing & SEO",
    inLanguage: lang,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServicesPage lng={lang} />
    </>
  );
}

