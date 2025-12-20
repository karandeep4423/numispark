import React from "react";
import Contact from "@/components/contact-us/page";
import { buildAlternates } from "@/lib/seo-helpers";

export async function generateMetadata({ params}) {
  // Load translations directly from JSON files
  const paramData = await params;
  const lang = paramData?.lang || 'fr';
  const translations = await import(
    `@/public/locales/${lang}/metaData.json`
  );

  return {
    title: translations.metaData['contact-us'].title,
    description: translations.metaData['contact-us'].description,
    keywords: translations.metaData['contact-us'].keywords,
    alternates: buildAlternates(lang, '/contactez-nous'),
  };
}

const ContactUs = () => {
  return (
    <div>
        <Contact />
    </div>
  );
};

export default ContactUs;
