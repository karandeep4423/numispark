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
import enhomeBtn from "@/public/locales/en/homeBtn.json";
import entechnologies from "@/public/locales/en/technologies.json";
import ennavbar from "@/public/locales/en/navbar.json";
import enfooter from "@/public/locales/en/footer.json";
import enmetaData from "@/public/locales/en/metaData.json";
import enblog from "@/public/locales/en/blog.json";
import enlegalNotice from "@/public/locales/en/legalNotice.json";
import enprivacyPolicy from "@/public/locales/en/privacyPolicy.json";
import enrdv from "@/public/locales/en/rdv.json";



// Import translations of french
import frTranslations from "@/public/locales/fr/home.json";
import frwebsiteMobileDesign from "@/public/locales/fr/websiteMobileDesign.json";
import frTranslationWeb from "@/public/locales/fr/web-development.json";
import frmobileDevelopment from "@/public/locales/fr/mobileDevelopment.json";
import frEcommerce from "@/public/locales/fr/ecommerce.json";
import frcontact from "@/public/locales/fr/contact.json";
import frSaas from "@/public/locales/fr/saas.json";
import fraiDevelopment from "@/public/locales/fr/aiDevelopment.json";
import frsocialMediaLogoDesign from "@/public/locales/fr/socialMediaLogoDesign.json";
import frseo from "@/public/locales/fr/seo.json";
import frsocialMediaMarketing from "@/public/locales/fr/socialMediaMarketing.json";
import frabout from "@/public/locales/fr/about.json";
import frhomeBtn from "@/public/locales/fr/homeBtn.json";
import frtechnologies from "@/public/locales/fr/technologies.json";
import frnavbar from "@/public/locales/fr/navbar.json";
import frfooter from "@/public/locales/fr/footer.json";
import frlegalNotice from "@/public/locales/fr/legalNotice.json";
import frprivacyPolicy from "@/public/locales/fr/privacyPolicy.json";
import frmetaData from "@/public/locales/fr/metaData.json";
import frrdv from "@/public/locales/fr/rdv.json";

// Import translations of german
import deTranslations from "@/public/locales/de/home.json";
import deTranslationWeb from "@/public/locales/de/web-development.json";
import demobileDevelopment from "@/public/locales/de/mobileDevelopment.json";
import deEcommerce from "@/public/locales/de/ecommerce.json";
import decontact from "@/public/locales/de/contact.json";
import dehomeBtn from "@/public/locales/de/homeBtn.json";
import detechnologies from "@/public/locales/de/technologies.json";
import deSaas from "@/public/locales/de/saas.json";
import deaiDevelopment from "@/public/locales/de/aiDevelopment.json";
import desocialMediaLogoDesign from "@/public/locales/de/socialMediaLogoDesign.json";
import deseo from "@/public/locales/de/seo.json";
import desocialMediaMarketing from "@/public/locales/de/socialMediaMarketing.json";
import deabout from "@/public/locales/de/about.json";
import dewebsiteMobileDesign from "@/public/locales/de/websiteMobileDesign.json";
import denavbar from "@/public/locales/de/navbar.json";
import defooter from "@/public/locales/de/footer.json";
import demetaData from "@/public/locales/de/metaData.json";
import delegalNotice from "@/public/locales/de/legalNotice.json";
import deprivacyPolicy from "@/public/locales/de/privacyPolicy.json";
import derdv from "@/public/locales/de/rdv.json";

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
      contact:encontact,
      homeBtn:enhomeBtn,
      technologies:entechnologies,
      navbar:ennavbar,
      footer:enfooter,
      metaData:enmetaData,
      legalNotice:enlegalNotice,
      privacyPolicy:enprivacyPolicy,
      blog: enblog,
      rdv: enrdv
    },
    fr: {
      home: frTranslations,
      webDevelopment: frTranslationWeb,
      websiteMobileDesign:frwebsiteMobileDesign,
      mobileDevelopment:frmobileDevelopment,
      ecommerce:frEcommerce,
      contact:frcontact,
      saas:frSaas,
      aiDevelopment:fraiDevelopment,
      socialMediaLogoDesign:frsocialMediaLogoDesign,
      seo:frseo,
      socialMediaMarketing:frsocialMediaMarketing,
      about:frabout,
      homeBtn:frhomeBtn,
      technologies:frtechnologies,
      navbar:frnavbar,
      footer:frfooter,
      legalNotice:frlegalNotice,
      privacyPolicy:frprivacyPolicy,
      metaData:frmetaData,
      rdv: frrdv,
    },
    de: {
      home: deTranslations,
      webDevelopment: deTranslationWeb,
      mobileDevelopment:demobileDevelopment,
      websiteMobileDesign:dewebsiteMobileDesign,
      ecommerce:deEcommerce,
      contact:decontact,
      homeBtn:dehomeBtn,
      technologies:detechnologies,
      saas:deSaas,
      aiDevelopment:deaiDevelopment,
      socialMediaLogoDesign:desocialMediaLogoDesign,
      seo:deseo,
      socialMediaMarketing:desocialMediaMarketing,
      about:deabout,
      navbar:denavbar,
      footer:defooter,
      legalNotice:delegalNotice,
      privacyPolicy:deprivacyPolicy,
      metaData:demetaData,
      rdv: derdv
    },
  },
  lng: "fr", // default language
  fallbackLng: "en",
  ns: ["home","webDevelopment","websiteMobileDesign","mobileDevelopment","ecommerce","saas"], // namespaces
  defaultNS: "home", // default namespace
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;


