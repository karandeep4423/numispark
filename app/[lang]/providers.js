'use client';
import { useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/lib/i18n';

export function Providers({ children, lang }) {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    // Only change language if it's different from current language
    if (lang && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }

    // Ensure the HTML lang attribute is set
    document.documentElement.lang = lang || 'fr';
    
    // Save the language preference in a cookie
    if (lang) {
      document.cookie = `userLocale=${lang}; path=/; max-age=31536000; SameSite=Strict`;
    }

    setInitialized(true);
  }, [lang]);

  if (!initialized && typeof window !== 'undefined') {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <I18nextProvider i18n={i18n}>
      {children}
    </I18nextProvider>
  );
}