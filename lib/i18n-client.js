// lib/i18n-client.js
'use client';

import { useTranslation as useTranslationBase } from 'react-i18next';
import { useEffect, useState } from 'react';
import i18n from './i18n';

export function useTranslation(lang, ns = 'home') {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
    setInitialized(true);
  }, [lang]);

  if (!initialized && typeof window !== 'undefined') {
    return {
      t: (key) => key,
      i18n,
    };
  }

  return useTranslationBase(ns);
}