// components/blog/BlogHeader.js
"use client";
import { useTranslation } from "react-i18next";

export default function BlogHeader({ lang }) {
  const { t } = useTranslation('blog');
  
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
      <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
    </div>
  );
}