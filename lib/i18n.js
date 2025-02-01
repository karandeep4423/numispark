import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Load translations
const resources = {
  fr: { translation: require('@/locales/fr/home.json') },
  en: { translation: require('@/locales/en/home.json') },
  de: { translation: require('@/locales/de/home.json') },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;