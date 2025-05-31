import RdvForm from "@/components/RdvForm/page";

// Helper function to load translations in a Server Component
async function loadTranslations(locale, namespace) {
  const translations = await import(`@/public/locales/${locale}/${namespace}.json`).catch(() => ({
    default: {},
  }));
  return translations.default;
}

export async function generateMetadata({ params }) {
  const { lang } = params;
  const translations = await import(`@/public/locales/${lang}/metaData.json`).catch(() => ({
    metaData: { rdv: { title: "Default Title", description: "", keywords: "", canonical: "" } },
  }));

  return {
    title: translations.metaData["rdv"].title,
    description: translations.metaData["rdv"].description,
    keywords: translations.metaData["rdv"].keywords,
    alternates: {
      canonical: translations.metaData["rdv"].canonical,
    },
  };
}

// Server Component
export default async function Rdv({ params }) {
  const { lang } = params;

  // Load translations for the "rdv" namespace
  const rdvTranslations = await loadTranslations(lang, "rdv");

  return (
    <div>
      <RdvForm translations={rdvTranslations} lng={lang} />
    </div>
  );
}