import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Analytics } from '@vercel/analytics/next';
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
  const lang = params?.lang || 'fr';
  
  return (
    <html lang={lang}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Cache-Control" content="no-store" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ToastContainer autoClose={false} />
        {children}
        <Analytics />
      </body>
    </html>
  );
}


const schemaData =

{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Numispark - Agence web communication SEO",
  "alternateName": "Numispark – agence communication création web & mobile marketing digital & référencement SEO",
  "url": "https://numispark.com/",
  "telephone": "+33-602528771",
  "email": "contact@numispark.com",
  "description": "Numispark, votre partenaire digital de confiance, transforme vos idées en réalités numériques impactantes à travers la France. Spécialisés en création de sites web, développement web et mobile, SEO, marketing digital et design, nous offrons des solutions sur mesure. Nos concepteurs de sites web et experts en design web créent des interfaces captivantes. En tant qu’agence SEO et de référencement, nos consultants en marketing boostent votre visibilité. Notre agence de marketing, de publicité et de communication forge une image de marque forte.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "FR",
    "addressRegion": "France",
    "streetAddress": "Hidden for SAB",
    "postalCode": "N/A",
    "addressLocality": "N/A"
  },
  "image": "https://numispark.com/logo.png",
  "areaServed": {
    "@type": "Country",
    "name": "France"
  },
  "sameAs": [
    "https://www.instagram.com/numisparkk",
    "https://www.facebook.com/profile.php?id=61575081451563&locale=fr_FR",
    "https://www.tiktok.com/@numispark",
    "https://www.linkedin.com/company/numispark"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services Numispark",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Création de Sites Web",
          "description": "Concevez un site web professionnel et sur mesure avec Numispark. Nos experts en création de sites web livrent des interfaces modernes, optimisées pour tous les appareils, pour booster votre présence en ligne à travers la France.",
          "serviceType": "Website Design",
          "areaServed": {
            "@type": "Country",
            "name": "France"
          }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Développement Web",
          "description": "Bénéficiez de solutions de développement web personnalisées avec Numispark. Nous créons des plateformes performantes et sécurisées, adaptées à vos besoins, pour une présence numérique forte en France.",
          "serviceType": "Web Development",
          "areaServed": {
            "@type": "Country",
            "name": "France"
          }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Développement Mobile",
          "description": "Transformez vos idées en applications mobiles innovantes avec Numispark. Notre agence développement mobile conçoit des apps intuitives et performantes pour iOS et Android, disponibles partout en France.",
          "serviceType": "Mobile App Development",
          "areaServed": {
            "@type": "Country",
            "name": "France"
          }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Référencement SEO",
          "description": "Boostez votre visibilité avec l’expertise SEO de Numispark. Notre agence de référencement optimise votre site pour les moteurs de recherche, attirant un trafic qualifié à travers la France.",
          "serviceType": "SEO Services",
          "areaServed": {
            "@type": "Country",
            "name": "France"
          }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Marketing Digital",
          "description": "Propulsez votre marque avec les stratégies de marketing digital de Numispark. Nos consultants en marketing créent des campagnes sur mesure pour engager votre audience et maximiser votre ROI en France.",
          "serviceType": "Digital Marketing",
          "areaServed": {
            "@type": "Country",
            "name": "France"
          }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Campagnes Publicitaires",
          "description": "Attirez vos clients avec des campagnes publicitaires percutantes par Numispark. Notre agence de publicité conçoit des annonces en ligne et sur réseaux sociaux pour un impact maximal en France.",
          "serviceType": "Advertising",
          "areaServed": {
            "@type": "Country",
            "name": "France"
          }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Conception Graphique",
          "description": "Sublimez votre marque avec la conception graphique de Numispark. Nos graphistes créent des visuels saisissants, du logo à l’interface utilisateur, pour une identité visuelle forte en France.",
          "serviceType": "Graphic Design",
          "areaServed": {
            "@type": "Country",
            "name": "France"
          }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Stratégie de Communication",
          "description": "Renforcez votre image avec Numispark, votre entreprise de communication. Notre agence de communication élabore des stratégies pour engager votre audience et bâtir une marque mémorable en France.",
          "serviceType": "Communication Strategy",
          "areaServed": {
            "@type": "Country",
            "name": "France"
          }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Gestion des Réseaux Sociaux",
          "description": "Engagez votre audience avec la gestion des réseaux sociaux par Numispark. Notre agence de marketing digital crée du contenu captivant pour renforcer votre présence sur les plateformes sociales en France.",
          "serviceType": "Social Media Marketing",
          "areaServed": {
            "@type": "Country",
            "name": "France"
          }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Création de Contenu Digital",
          "description": "Captez l’attention avec le contenu digital de Numispark. Notre agence de communication produit des textes, vidéos et visuels engageants pour enrichir votre stratégie digitale en France.",
          "serviceType": "Content Marketing",
          "areaServed": {
            "@type": "Country",
            "name": "France"
          }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Software Development",
          "description": "Développez l’avenir avec le développement logiciel de Numispark. Notre agence excelle en SaaS développement, AI development et solutions logicielles sur mesure. De l’agence développement web aux applications innovantes, nous créons des technologies performantes pour votre entreprise à travers la France.",
          "serviceType": "Software Development",
          "areaServed": {
            "@type": "Country",
            "name": "France"
          }
        }
      }
    ]
  },
  "mainEntityOfPage": {
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Quels services propose Numispark en tant qu’agence de création site web ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Numispark, votre agence de création site web, conçoit des sites web sur mesure, modernes et optimisés pour tous les appareils. Nos concepteurs de sites web excellent en design web et développement web, créant des vitrines ou boutiques en ligne performantes. Basés en France, nous servons des clients à travers le pays avec des solutions adaptées."
        }
      },
      {
        "@type": "Question",
        "name": "Comment Numispark aide-t-il avec le SEO et le référencement ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "En tant qu’agence SEO et agence de référencement, Numispark booste votre visibilité sur Google. Nos experts en optimisation digitale analysent votre marché, optimisent vos mots-clés et créent des stratégies de marketing digital pour un trafic qualifié à travers la France. Comptez sur nous pour des résultats durables !"
        }
      },
      {
        "@type": "Question",
        "name": "Numispark propose-t-il du développement logiciel ou des applications mobiles ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui, Numispark, une agence développement web et développeur de logiciels, excelle en SaaS développement, AI development, et création application mobile. Nous concevons des solutions logicielles sur mesure et des apps performantes pour iOS et Android, disponibles partout en France."
        }
      },
      {
        "@type": "Question",
        "name": "Quelles sont les compétences de Numispark en communication et publicité ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Numispark, une agence de communication et entreprise de communication, forge une image de marque forte. Notre agence de publicité crée des campagnes publicitaires percutantes, incluant publicité en ligne et réseaux sociaux. Nos services de stratégie digitale engagent votre audience à travers la France."
        }
      },
      {
        "@type": "Question",
        "name": "Numispark offre-t-il des services de design graphique ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolument ! Numispark, votre agence de web design, excelle en conception graphique. Nos graphistes créent des visuels saisissants, de logos à des interfaces UI/UX, pour une identité visuelle forte. Nos services de design web séduisent vos clients à travers la France."
        }
      },
      {
        "@type": "Question",
        "name": "Qu’est-ce que le SEO, la création de site web et l’agence de communication ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Le SEO booste votre visibilité via notre agence de référencement, la création de site web produit des sites modernes par notre agence création site web, et l’agence de communication forge une image de marque forte avec des stratégies digitales à travers la France."
        }
      }
    ]
  }
}