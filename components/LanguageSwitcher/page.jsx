"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname(); // e.g. "/en/website-development"
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("en"); // default value

  const languages = [
    { code: "fr", label: "Français" },
    { code: "en", label: "English" },
    { code: "de", label: "Deutsch" },
  ];

  // Helper function to read the userLocale cookie
  const getCookieLocale = () => {
    const cookieString = document.cookie || "";
    const cookies = cookieString.split("; ").reduce((acc, cookie) => {
      const [key, value] = cookie.split("=");
      acc[key] = value;
      return acc;
    }, {});
    return cookies.userLocale;
  };

  // Determine the current language from the URL, cookie, or browser setting.
  useEffect(() => {
    let langFromPath = "";
    const pathSegments = pathname.split("/");
    if (
      pathSegments.length > 1 &&
      languages.some((l) => l.code === pathSegments[1])
    ) {
      langFromPath = pathSegments[1];
    }
    const cookieLang = getCookieLocale();
    let lang;
    if (cookieLang && languages.some((l) => l.code === cookieLang)) {
      // If there's a cookie, use it.
      lang = cookieLang;
    } else if (langFromPath) {
      // Otherwise, if the URL contains a valid locale, use that.
      lang = langFromPath;
    } else {
      // Fallback to the browser's language (or default "fr")
      const browserLang = navigator.language.split("-")[0].toLowerCase();
      lang = languages.some((l) => l.code === browserLang) ? browserLang : "fr";
    }
    setCurrentLang(lang);
  }, [pathname]);

  // Handle language switch
  const handleLanguageChange = (code) => {
    // If the language is already current, do nothing.
    if (code === currentLang) {
      setIsOpen(false);
      return;
    }

    // Persist the selected language in a cookie (expires in 1 year)
    document.cookie = `userLocale=${code}; path=/; max-age=31536000`;

    // Replace the first path segment with the selected language.
    const segments = pathname.split("/");
    if (segments.length > 1 && languages.some((l) => l.code === segments[1])) {
      segments[1] = code;
    } else {
      // If no language segment exists, add it to the beginning.
      segments.unshift(code);
    }
    const newPath = segments.join("/") || `/${code}`;
    router.push(newPath);
    setIsOpen(false);
  };

  // Get the label for the current language to display on the button.
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
        <div className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
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
                className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
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
