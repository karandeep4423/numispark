import HomePageClient from "@/components/home-page/HomePageClient";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://numispark.com";
const hiddenLocale = "fr";

const localeMetadata = {
  en: {
    title: "Digital Solutions for IT & Marketing | NumiSpark",
    description:
      "Empowering businesses with innovative IT and marketing services. From web development and mobile app creation to SEO and digital campaigns, our experienced team delivers creative and scalable solutions tailored to your needs.",
    keywords:
      "IT services, digital marketing, web development, mobile app development, SEO, social media marketing, digital transformation, Numispark",
    openGraph: {
      locale: "en_US",
      images: [
        {
          url: "https://numispark.com/og-image.png",
          width: 1200,
          height: 630,
          alt: "NumiSpark - Digital Solutions for IT & Marketing",
        },
      ],
    },
  },
  fr: {
    title:
      "Numispark | Agence Communication, création Web & Mobile, SEO & Marketing Digital à Caen, Bernay et Rennes Normandie",
    description:
      "Numispark, agence digitale, propose des solutions innovantes en développement web & mobile, marketing digital, SEO et design, adaptées à vos besoins à Caen, Bernay et Rennes Normandie.",
    keywords:
      "services IT, marketing digital, développement web, création d'applications mobiles, SEO, marketing sur les réseaux sociaux, transformation digitale, Numispark",
    openGraph: {
      locale: "fr_FR",
      images: [
        {
          url: "https://numispark.com/og-image.png",
          width: 1200,
          height: 630,
          alt: "Numispark - Agence Communication & Marketing Digital",
        },
      ],
    },
  },
  de: {
    title: "Digitale Lösungen für IT & Marketing | NumiSpark",
    description:
      "Wir unterstützen Unternehmen mit innovativen IT- und Marketingdienstleistungen. Von Webentwicklung und mobiler App-Entwicklung bis hin zu SEO und digitalem Marketing – unser erfahrenes Team liefert kreative, skalierbare Lösungen, die exakt auf Ihre Bedürfnisse zugeschnitten sind.",
    keywords:
      "IT-Dienstleistungen, digitales Marketing, Webentwicklung, mobile App-Entwicklung, SEO, Social Media Marketing, digitale Transformation, Numispark",
    openGraph: {
      locale: "de_DE",
      images: [
        {
          url: "https://numispark.com/og-image.png",
          width: 1200,
          height: 630,
          alt: "NumiSpark - Digitale Lösungen für IT & Marketing",
        },
      ],
    },
  },
};

export async function generateMetadata({ params }) {
  const paramData = await params;
  const language = paramData?.lang && localeMetadata[paramData.lang] ? paramData.lang : hiddenLocale;

  const localized = localeMetadata[language];
  if (!localized) {
    return {
      title: "Numispark",
      description: "Agence digitale Numispark",
    };
  }

  const canonicalPath = language === hiddenLocale ? "" : `/${language}`;
  const canonicalUrl = `${siteUrl}${canonicalPath}`;

  return {
    title: localized.title,
    description: localized.description,
    keywords: localized.keywords,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        fr: siteUrl,
        en: `${siteUrl}/en`,
        de: `${siteUrl}/de`,
        "x-default": siteUrl,
      },
    },
    openGraph: {
      title: localized.title,
      description: localized.description,
      url: canonicalUrl,
      siteName: "NumiSpark",
      locale: localized.openGraph.locale,
      type: "website",
      images: localized.openGraph.images,
    },
    twitter: {
      card: "summary_large_image",
      site: "@numispark",
      creator: "@numispark",
      title: localized.title,
      description: localized.description,
      images: localized.openGraph.images,
    },
  };
}

export default async function Home({ params }) {
  return <HomePageClient />;
}
