import { Providers } from "./providers";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar/page";
import Footer from "@/components/Footer/page";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default async function RootLayout({ children, params }) {
  // Get the language from params (passed from LangLayout)
  const paramData = await params;
  const lang = paramData?.lang || 'fr';
  return (
    <html lang={lang}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ToastContainer autoClose={false} />
        <Navbar />
        <Providers lang={lang}>{children}</Providers>;
        <Footer />
      </body>
    </html>
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
