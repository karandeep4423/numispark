import React from "react";
import Portfolio from "@/components/Portfolio/page";

// export async function generateMetadata({ params}) {
//   // Load translations directly from JSON files
//   const paramData = await params;
//   const lang = paramData?.lang;
//   const translations = await import(
//     `@/public/locales/${lang}/metaData.json`
//   );

//   return {
//     title: translations.metaData['contact-us'].title,
//     description: translations.metaData['contact-us'].description,
//     keywords: translations.metaData['contact-us'].keywords,
//   };
// }

const PortFolio = () => {
  return (
    <div>
        <Portfolio />
    </div>
  );
};

export default PortFolio;
