import SeoAuditPage from "@/components/seo-audit-gratuit/page";

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
    metaData: { seoAudit: { title: "Audit SEO Gratuit", description: "", keywords: "", canonical: "" } },
  }));

  return {
    title: translations.metaData["seoAudit"]?.title || "Audit SEO Gratuit",
    description: translations.metaData["seoAudit"]?.description || "",
    keywords: translations.metaData["seoAudit"]?.keywords || "",
    alternates: {
      canonical: translations.metaData["seoAudit"]?.canonical || "",
    },
  };
}

// Server Component
export default async function SeoAudit({ params }) {
  const { lang } = params;

  // Load translations for the "seoAudit" namespace
  const seoAuditTranslations = await loadTranslations(lang, "seoAudit");

  return (
    <div>
      <SeoAuditPage translations={seoAuditTranslations} lng={lang} />
    </div>
  );
}