import { Providers } from "./providers";
import "../globals.css";
import Navbar from "@/components/Navbar/page";
import Footer from "@/components/Footer/page";
import AnimatedCircle from "@/components/AnimatedCircle";
import Google from "@/components/google-login/page"; // Import Google component
async function loadTranslations(locale) {
  const translations = await import(
    `@/public/locales/${locale}/rdv.json`
  ).catch(() => ({
    default: {},
  }));
  return translations.default;
}

export default async function LangLayout({ children, params }) {
  const paramData = await params;
  const lang = paramData?.lang || "fr"; // Fallback à "fr" si lang est undefined
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
      <Navbar />
      {children}
      <Google />
      <Footer />
      <div className="fixed-circle">
        <AnimatedCircle
        />
      </div>
    </Providers>
  );
}

export async function generateMetadata({ params }) {
  const paramData = await params;
  const language = paramData?.lang;
  if (!language) {
    return {
      title: "Default Title",
      description: "Default Description",
    };
  } else if (language === "en") {
    return {
      title: "Digital Solutions for IT & Marketing | NumiSpark",
      description:
        "Empowering businesses with innovative IT and marketing services. From web development and mobile app creation to SEO and digital campaigns, our experienced team delivers creative and scalable solutions tailored to your needs.",
      keywords:
        "IT services, digital marketing, web development, mobile app development, SEO, social media marketing, digital transformation, Numispark",
      alternates: {
        canonical: `https://numispark.com/en${paramData.pathname || ''}`,
      },
    };
  } else if (language === "fr") {
    return {
      title:
        "Numispark | Agence Communication, création Web & Mobile, SEO & Marketing Digital à Caen, Bernay et Rennes Normandie",
      description:
        "Numispark, agence digitale, propose des solutions innovantes en développement web & mobile, marketing digital, SEO et design, adaptées à vos besoins  à Caen, Bernay et Rennes Normandie.",
      keywords:
        "services IT, marketing digital, développement web, création d'applications mobiles, SEO, marketing sur les réseaux sociaux, transformation digitale, Numispark",
      alternates: {
        canonical: `https://numispark.com${paramData.pathname || ''}`,
      },
    };
  } else if (language === "de") {
    return {
      title: "Digitale Lösungen für IT & Marketing | NumiSpark",
      description:
        "Wir unterstützen Unternehmen mit innovativen IT- und Marketingdienstleistungen. Von Webentwicklung und mobiler App-Entwicklung bis hin zu SEO und digitalem Marketing – unser erfahrenes Team liefert kreative, skalierbare Lösungen, die exakt auf Ihre Bedürfnisse zugeschnitten sind.",
      keywords:
        "IT-Dienstleistungen, digitales Marketing, Webentwicklung, mobile App-Entwicklung, SEO, Social Media Marketing, digitale Transformation, Numispark",
      alternates: {
        canonical: `https://numispark.com/de${paramData.pathname || ''}`,
      },
    };
  }
}
