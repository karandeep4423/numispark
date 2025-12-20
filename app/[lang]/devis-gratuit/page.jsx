import DevisGratuitClient from "@/components/devis-gratuit/DevisGratuitClient";
import { buildAlternates } from "@/lib/seo-helpers";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://numispark.com";
const hiddenLocale = "fr";

const localeMetadata = {
  fr: {
    title: "Devis Gratuit Création Site Web | NumiSpark",
    description: "Obtenez un devis gratuit et sans engagement pour la création de votre site web professionnel. Sites vitrines, e-commerce, développement sur mesure.",
    keywords: "devis gratuit, création site web, site vitrine, e-commerce, développement web, NumiSpark",
  },
  en: {
    title: "Free Website Quote | NumiSpark",
    description: "Get a free, no-obligation quote for your professional website creation. Showcase sites, e-commerce, custom development.",
    keywords: "free quote, website creation, showcase site, e-commerce, web development, NumiSpark",
  },
  de: {
    title: "Kostenloses Angebot Webseite | NumiSpark",
    description: "Erhalten Sie ein kostenloses und unverbindliches Angebot für Ihre professionelle Website-Erstellung. Präsentation-Websites, E-Commerce, maßgeschneiderte Entwicklung.",
    keywords: "kostenloses Angebot, Website-Erstellung, Präsentation-Website, E-Commerce, Webentwicklung, NumiSpark",
  },
};

export async function generateMetadata({ params }) {
  const paramData = await params;
  const lang = paramData?.lang || hiddenLocale;
  const localized = localeMetadata[lang] || localeMetadata[hiddenLocale];

  return {
    title: localized.title,
    description: localized.description,
    keywords: localized.keywords,
    alternates: buildAlternates(lang, "/devis-gratuit"),
    openGraph: {
      title: localized.title,
      description: localized.description,
      url: lang === hiddenLocale ? `${siteUrl}/devis-gratuit` : `${siteUrl}/${lang}/devis-gratuit`,
      siteName: "NumiSpark",
      type: "website",
    },
  };
}

export default function DevisGratuitPage() {
  return <DevisGratuitClient />;
}
