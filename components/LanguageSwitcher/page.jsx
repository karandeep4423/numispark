"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("fr");
  const [mounted, setMounted] = useState(false);
  const buttonRef = useRef(null);
  const dropdownRef = useRef(null);

  const languages = [
    { code: "fr", label: "Français" },
    { code: "en", label: "English" },
    { code: "de", label: "Deutsch" },
  ];

  // Set mounted state once component is mounted
  useEffect(() => {
    setMounted(true);
    
    // Initialize current language correctly
    const cookieLang = getCookieLocale();
    const pathLang = getPathLocale(pathname);
    
    if (pathLang) {
      setCurrentLang(pathLang);
    } else if (cookieLang && languages.some(l => l.code === cookieLang)) {
      setCurrentLang(cookieLang);
    } else {
      setCurrentLang("fr");
    }
    
    return () => setMounted(false);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(event.target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Update current language whenever pathname changes
  useEffect(() => {
    const pathLang = getPathLocale(pathname);
    if (pathLang) {
      setCurrentLang(pathLang);
    } else {
      // If no language in path, assume it's French
      setCurrentLang("fr");
    }
  }, [pathname]);

  // Helper function to read the userLocale cookie
  const getCookieLocale = () => {
    if (typeof document === "undefined") return null;
    
    const cookieString = document.cookie || "";
    const cookies = cookieString.split("; ").reduce((acc, cookie) => {
      if (cookie.includes("=")) {
        const [key, value] = cookie.split("=");
        acc[key] = value;
      }
      return acc;
    }, {});
    
    return cookies.userLocale;
  };

  // Helper function to get locale from path
  const getPathLocale = (path) => {
    const pathSegments = path.split("/");
    if (
      pathSegments.length > 1 &&
      languages.some((l) => l.code === pathSegments[1])
    ) {
      return pathSegments[1];
    }
    return null;
  };

  // Helper to extract the path without locale
  const getPathWithoutLocale = (path) => {
    const segments = path.split("/");
    if (segments.length > 1 && languages.some((l) => l.code === segments[1])) {
      // Remove the locale segment and join the rest
      return "/" + segments.slice(2).join("/");
    }
    // If no locale is present, return the original path
    return path;
  };

  // Handle language switch with forced hard navigation
  const handleLanguageChange = (code) => {
    // If the language is already current, do nothing
    if (code === currentLang) {
      setIsOpen(false);
      return;
    }

    // Set the current language state
    setCurrentLang(code);
    
    // Always persist the selected language in a cookie (expires in 1 year)
    document.cookie = `userLocale=${code}; path=/; max-age=31536000; SameSite=Strict`;

    // Extract the path without locale
    const pathWithoutLocale = getPathWithoutLocale(pathname);
    
    // Construct the new URL with appropriate prefix
    let newPath;
    if (code === "fr") {
      // For French, we don't add a locale prefix
      newPath = pathWithoutLocale;
    } else {
      // For other languages, we add the locale prefix
      // Ensure we don't have double slashes
      const cleanPath = pathWithoutLocale.startsWith('/') 
        ? pathWithoutLocale 
        : `/${pathWithoutLocale}`;
      newPath = `/${code}${cleanPath}`;
    }

    // Close dropdown first
    setIsOpen(false);
    
    // Perform a hard navigation by changing window.location
    // This bypasses Next.js router caching issues
    window.location.href = newPath;
  };

  // Get the label for the current language
  const currentLanguageObj = languages.find(
    (lang) => lang.code === currentLang
  );
  const currentLabel = currentLanguageObj
    ? currentLanguageObj.label
    : "Select Language";

  // Calculate dropdown position
  const getDropdownPosition = () => {
    if (!buttonRef.current) return { top: 0, left: 0, width: 0 };
    
    const rect = buttonRef.current.getBoundingClientRect();
    return {
      top: rect.bottom + window.scrollY,
      left: rect.left + window.scrollX,
      width: rect.width
    };
  };

  return (
    <div className="relative inline-block text-left">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-expanded={isOpen}
        aria-haspopup="true"
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

      {mounted && isOpen && createPortal(
        <div 
          ref={dropdownRef}
          style={{
            position: 'absolute',
            zIndex: 99999,
            top: getDropdownPosition().top,
            left: getDropdownPosition().left,
            width: getDropdownPosition().width,
            mixBlendMode: 'normal',
            isolation: 'isolate'
          }}
          className="rounded-md mt-1.5 shadow-lg bg-white ring-1 ring-black ring-opacity-5"
        >
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
                className={`w-full text-left block px-4 py-2 text-sm ${
                  lang.code === currentLang
                    ? "bg-blue-100 text-blue-900 rounded-2xl"
                    : "text-gray-700 rounded-2xl hover:bg-blue-600 hover:text-gray-100"
                }`}
                role="menuitem"
              >
                {lang.label}
              </button>
            ))}
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}