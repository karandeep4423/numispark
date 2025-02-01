import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translations directly
import enTranslations from '@/public/locales/en/home.json';
import frTranslations from '@/public/locales/fr/home.json';
import deTranslations from '@/public/locales/de/home.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations
      },
      fr: {
        translation: frTranslations
      },
      de: {
        translation: deTranslations
      }
    },
    lng: 'fr', // default language
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;