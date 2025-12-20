import React from "react";
import Portfolio from "@/components/Portfolio/page";
import { buildAlternates } from "@/lib/seo-helpers";

export async function generateMetadata({ params}) {
  // Load translations directly from JSON files
  const paramData = await params;
  const lang = paramData?.lang || 'fr';
  const translations = await import(
    `@/public/locales/${lang}/metaData.json`
  );

  return {
    title: translations.metaData['portfolio'].title,
    description: translations.metaData['portfolio'].description,
    keywords: translations.metaData['portfolio'].keywords,
    alternates: buildAlternates(lang, '/portfolio'),
  };
}

const PortFolio = () => {
  return (
    <div>
        <Portfolio />
    </div>
  );
};

export default PortFolio;
