import { Providers } from "./providers";
import "../globals.css";
import LayoutWrapper from "./LayoutWrapper";
import { GoogleTagManager } from "@next/third-parties/google";
async function loadTranslations(locale) {
  const translations = await import(
    `@/public/locales/${locale}/rdv.json`
  ).catch(() => ({
    default: {},
  }));
  return translations.default;
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://numispark.com";
const hiddenLocale = "fr";

const baseAlternates = {
  languages: {
    fr: siteUrl,
    en: `${siteUrl}/en`,
    de: `${siteUrl}/de`,
    "x-default": siteUrl,
  },
};

const localeMetadata = {
  en: {
    title: "Digital Solutions for IT & Marketing | NumiSpark",
    description:
      "Empowering businesses with innovative IT and marketing services. From web development and mobile app creation to SEO and digital campaigns, our experienced team delivers creative and scalable solutions tailored to your needs.",
    keywords:
      "IT services, digital marketing, web development, mobile app development, SEO, social media marketing, digital transformation, Numispark",
    openGraph: {
      locale: "en_US",
    },
  },
  fr: {
    title:
      "Numispark | Agence Communication, création Web & Mobile, SEO & Marketing Digital à Caen, Bernay et Rennes Normandie",
    description:
      "Numispark, agence digitale, propose des solutions innovantes en développement web & mobile, marketing digital, SEO et design, adaptées à vos besoins  à Caen, Bernay et Rennes Normandie.",
    keywords:
      "services IT, marketing digital, développement web, création d'applications mobiles, SEO, marketing sur les réseaux sociaux, transformation digitale, Numispark",
    openGraph: {
      locale: "fr_FR",
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
    },
  },
};

export default async function LangLayout({ children, params }) {
  const paramData = await params;
  const lang = paramData?.lang || hiddenLocale; // Fallback à "fr" si lang est undefined
  const translations = await loadTranslations(lang);

  const t = (key) => {
    const keys = key.split(".");
    let value = translations;
    for (const k of keys) {
      value = value?.[k] ?? key;
      if (typeof value !== "object") break;
    }
    return value;
  };

  return (
    <Providers lang={lang}>
      <GoogleTagManager gtmId="GTM-M5MSM548" />
      <LayoutWrapper>
        {children}
      </LayoutWrapper>
    </Providers>
  );
}

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
      ...baseAlternates,
      canonical: canonicalUrl,
    },
    openGraph: {
      title: localized.title,
      description: localized.description,
      url: canonicalUrl,
      siteName: "NumiSpark",
      locale: localized.openGraph.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: localized.title,
      description: localized.description,
    },
  };
}
