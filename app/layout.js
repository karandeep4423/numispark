import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { GoogleTagManager } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://numispark.com"),
};

// Schema data must be defined before use
const schemaData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Numispark - Agence web communication SEO",
  alternateName:
    "Numispark – agence communication création web & mobile marketing digital & référencement SEO",
  url: "https://numispark.com/",
  telephone: "+33-602528771",
  email: "contact@numispark.com",
  description:
    "Numispark, votre partenaire digital de confiance, transforme vos idées en réalités numériques impactantes à travers la France. Spécialisés en création de sites web, développement web et mobile, SEO, marketing digital et design, nous offrons des solutions sur mesure. Nos concepteurs de sites web et experts en design web créent des interfaces captivantes. En tant qu'agence SEO et de référencement, nos consultants en marketing boostent votre visibilité. Notre agence de marketing, de publicité et de communication forge une image de marque forte.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "FR",
    addressRegion: "France",
    streetAddress: "Hidden for SAB",
    postalCode: "N/A",
    addressLocality: "N/A",
  },
  image: "https://numispark.com/logo.png",
  areaServed: {
    "@type": "Country",
    name: "France",
  },
  sameAs: [
    "https://www.instagram.com/numisparkk",
    "https://www.facebook.com/profile.php?id=61575081451563&locale=fr_FR",
    "https://www.tiktok.com/@numispark",
    "https://www.linkedin.com/company/numispark",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services Numispark",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Création de Sites Web",
          description: "Concevez un site web professionnel et sur mesure avec Numispark.",
          serviceType: "Website Design",
          areaServed: { "@type": "Country", name: "France" },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Développement Web",
          description: "Bénéficiez de solutions de développement web personnalisées avec Numispark.",
          serviceType: "Web Development",
          areaServed: { "@type": "Country", name: "France" },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Développement Mobile",
          description: "Transformez vos idées en applications mobiles innovantes avec Numispark.",
          serviceType: "Mobile App Development",
          areaServed: { "@type": "Country", name: "France" },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Référencement SEO",
          description: "Boostez votre visibilité avec l'expertise SEO de Numispark.",
          serviceType: "SEO Services",
          areaServed: { "@type": "Country", name: "France" },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Marketing Digital",
          description: "Propulsez votre marque avec les stratégies de marketing digital de Numispark.",
          serviceType: "Digital Marketing",
          areaServed: { "@type": "Country", name: "France" },
        },
      },
    ],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Numispark",
  url: "https://numispark.com",
  logo: "https://numispark.com/logo.png",
  sameAs: [
    "https://www.instagram.com/numisparkk",
    "https://www.facebook.com/profile.php?id=61575081451563&locale=fr_FR",
    "https://www.tiktok.com/@numispark",
    "https://www.linkedin.com/company/numispark",
  ],
};

export default async function RootLayout({ children, params }) {
  // Get the language from params (passed from LangLayout)
  const lang = params?.lang || "fr";

  return (
    <html lang={lang}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([schemaData, organizationSchema]),
          }}
        />
      </head>
      <GoogleTagManager gtmId="GTM-M5MSM548" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ToastContainer autoClose={false} />
        {children}
      </body>
    </html>
  );
}
