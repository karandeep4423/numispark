import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import translations of english
import enTranslations from "@/public/locales/en/home.json";
import enTranslationWeb from "@/public/locales/en/web-development.json";
import enwebsiteMobileDesign from "@/public/locales/en/websiteMobileDesign.json";
import enmobileDevelopment from "@/public/locales/en/mobileDevelopment.json";
import enEcommerce from "@/public/locales/en/ecommerce.json";
import enSaas from "@/public/locales/en/saas.json";
import enaiDevelopment from "@/public/locales/en/aiDevelopment.json";
import ensocialMediaLogoDesign from "@/public/locales/en/socialMediaLogoDesign.json";
import enseo from "@/public/locales/en/seo.json";
import ensocialMediaMarketing from "@/public/locales/en/socialMediaMarketing.json";
import enabout from "@/public/locales/en/about.json";
import encontact from "@/public/locales/en/contact.json";

// Import translations of french
import frTranslations from "@/public/locales/fr/home.json";
import frTranslationWeb from "@/public/locales/fr/web-development.json";
import frmobileDevelopment from "@/public/locales/fr/mobileDevelopment.json";
import frEcommerce from "@/public/locales/fr/ecommerce.json";
import frcontact from "@/public/locales/fr/contact.json";

// Import translations of german
import deTranslations from "@/public/locales/de/home.json";
import deTranslationWeb from "@/public/locales/de/web-development.json";
import demobileDevelopment from "@/public/locales/de/mobileDevelopment.json";
import deEcommerce from "@/public/locales/de/ecommerce.json";
import decontact from "@/public/locales/de/contact.json";


i18n.use(initReactI18next).init({
  resources: {
    en: {
      home: enTranslations,
      webDevelopment: enTranslationWeb,
      websiteMobileDesign:enwebsiteMobileDesign,
      mobileDevelopment:enmobileDevelopment,
      ecommerce:enEcommerce,
      saas:enSaas,
      aiDevelopment:enaiDevelopment,
      socialMediaLogoDesign:ensocialMediaLogoDesign,
      seo:enseo,
      socialMediaMarketing:ensocialMediaMarketing,
      about: enabout,
      contact:encontact
    },
    fr: {
      home: frTranslations,
      webDevelopment: frTranslationWeb,
      mobileDevelopment:frmobileDevelopment,
      ecommerce:frEcommerce,
      contact:frcontact
    },
    de: {
      home: deTranslations,
      webDevelopment: deTranslationWeb,
      mobileDevelopment:demobileDevelopment,
      ecommerce:deEcommerce,
      contact:decontact
    },
  },
  lng: "en", // default language
  fallbackLng: "en",
  ns: ["home", "webDevelopment","websiteMobileDesign","mobileDevelopment","ecommerce","saas"], // namespaces
  defaultNS: "home", // default namespace
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;


