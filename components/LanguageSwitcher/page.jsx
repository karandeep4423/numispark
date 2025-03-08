"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import i18n from '@/lib/i18n';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("fr"); // default to French

  const languages = [
    { code: "fr", label: "Français" },
    { code: "en", label: "English" },
    { code: "de", label: "Deutsch" },
  ];

  // Helper function to read the userLocale cookie
  const getCookieLocale = () => {
    if (typeof document === "undefined") return null;
    
    const cookieString = document.cookie || "";
    const cookies = cookieString.split("; ").reduce((acc, cookie) => {
      const [key, value] = cookie.split("=");
      acc[key] = value;
      return acc;
    }, {});
    return cookies.userLocale;
  };

  // Determine the current language
  useEffect(() => {
    // Check for explicit locale in path
    let langFromPath = "";
    const pathSegments = pathname.split("/");
    if (
      pathSegments.length > 1 &&
      languages.some((l) => l.code === pathSegments[1])
    ) {
      langFromPath = pathSegments[1];
    }

    // Get the cookie locale
    const cookieLang = getCookieLocale();
    let lang;

    if (langFromPath) {
      // If URL has an explicit locale, it takes precedence
      lang = langFromPath;
    } else if (cookieLang && languages.some((l) => l.code === cookieLang)) {
      // If cookie is set and valid, use it
      lang = cookieLang;
    } else {
      // Default to French if no explicit locale is specified
      lang = "fr";
    }

    setCurrentLang(lang);

    // Make sure i18n is synchronized
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [pathname, i18n]);

  // Handle language switch
  const handleLanguageChange = (code) => {
    // If the language is already current, do nothing
    if (code === currentLang) {
      setIsOpen(false);
      return;
    }

    // Always persist the selected language in a cookie (expires in 1 year)
    document.cookie = `userLocale=${code}; path=/; max-age=31536000; SameSite=Strict`;

    // Update i18n immediately
    i18n.changeLanguage(code);
    setCurrentLang(code);

    // Construct the new URL
    let newPath;
    const pathWithoutLocale = removeLocaleFromPath(pathname);
    
    if (code === "fr") {
      // For French, we don't add a locale prefix
      newPath = pathWithoutLocale;
    } else {
      // For other languages, we add the locale prefix
      newPath = `/${code}${pathWithoutLocale}`;
    }

    router.push(newPath);
    setIsOpen(false);
  };

  // Helper to remove locale from path
  const removeLocaleFromPath = (path) => {
    const segments = path.split("/");
    if (segments.length > 1 && languages.some((l) => l.code === segments[1])) {
      // Remove the locale segment
      segments.splice(1, 1);
      return segments.join("/") || "/";
    }
    return path;
  };

  // Get the label for the current language
  const currentLanguageObj = languages.find(
    (lang) => lang.code === currentLang
  );
  const currentLabel = currentLanguageObj
    ? currentLanguageObj.label
    : "Select Language";

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {currentLabel}
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="origin-top-right z-auto absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full z-auto rounded-2xl text-left block px-4 py-2 text-sm ${
                  lang.code === currentLang
                    ? "bg-blue-100 text-blue-900"
                    : "text-gray-700 hover:bg-blue-600 hover:text-gray-100"
                }`}
                role="menuitem"
              >
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}