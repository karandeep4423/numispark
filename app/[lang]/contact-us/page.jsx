import React from "react";
import Contact from "@/components/contact-us/page";

export async function generateMetadata({ params: { lang } }) {
  // Load translations directly from JSON files
  const translations = await import(
    `@/public/locales/${lang}/metaData.json`
  );

  return {
    title: translations.metaData['contact-us'].title,
    description: translations.metaData['contact-us'].description,
    keywords: translations.metaData['contact-us'].keywords,
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
