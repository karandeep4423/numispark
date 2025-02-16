import { Providers } from "./providers";

export default async function LangLayout({ children, params }) {
  const lang = await params?.lang; // Simply access the lang parameter
  return <Providers lang={lang}>{children}</Providers>;
}

export async function generateMetadata({ params: { lang } }) {
  const language = await lang;
  if (!language) {
    return {
      title: "Default Title",
      description: "Default Description",
    };
  } else if (language === "en") {
    return {
      title: "Digital Solutions for IT & Marketing | Your Agency Name",
      description:
        "Empowering businesses with innovative IT and marketing services. From web development and mobile app creation to SEO and digital campaigns, our experienced team delivers creative and scalable solutions tailored to your needs.",
      keywords:
        "IT services, digital marketing, web development, mobile app development, SEO, social media marketing, digital transformation, Your Agency Name",
    };
  } else if (language === "fr") {
    return {
      title: "Solutions Digitales pour IT & Marketing | Your Agency Name",
      description:
        "Nous dynamisons les entreprises grâce à des services IT et marketing innovants. De la création de sites web et d'applications mobiles au SEO et aux campagnes digitales, notre équipe expérimentée propose des solutions créatives et évolutives, parfaitement adaptées à vos besoins.",
      keywords:
        "services IT, marketing digital, développement web, création d'applications mobiles, SEO, marketing sur les réseaux sociaux, transformation digitale, Your Agency Name",
    };
  } else if (language === "de") {
    return {
      title: "Digitale Lösungen für IT & Marketing | Your Agency Name",
      description:
        "Wir unterstützen Unternehmen mit innovativen IT- und Marketingdienstleistungen. Von Webentwicklung und mobiler App-Entwicklung bis hin zu SEO und digitalem Marketing – unser erfahrenes Team liefert kreative, skalierbare Lösungen, die exakt auf Ihre Bedürfnisse zugeschnitten sind.",
      keywords:
        "IT-Dienstleistungen, digitales Marketing, Webentwicklung, mobile App-Entwicklung, SEO, Social Media Marketing, digitale Transformation, Your Agency Name",
    };
  }
}
