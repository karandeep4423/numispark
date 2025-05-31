"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Globe,
  Smartphone,
  ShoppingCart,
  Cpu,
  Activity,
  Edit,
  Image,
  Search,
  Share,
  Menu,
  X,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/LanguageSwitcher/page";
import { MdRocket } from "react-icons/md";

const Navbar = () => {
  const { t } = useTranslation("navbar");
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const pathname = usePathname();
  const [stateNav, setStateNav] = useState({
    scrollDirection: "up",
    isScrolled: false,
    lastScrollTop: 0,
  });

  const [state, setState] = useState({
    isMenuOpen: false,
    activeDropdown: null, // Change initial state to null
  });

  // toggleMenu(parent) function to open and close the menu for mobile view.
  const toggleMenu = () => {
    setState((prevState) => ({
      ...prevState,
      isMenuOpen: !prevState.isMenuOpen,
    }));
  };

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1024);
    };
    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Reset activeDropdown when pathname changes
    setState((prev) => ({ ...prev, activeDropdown: null }));
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      setStateNav((prev) => {
        const newScrollDirection =
          currentScrollTop > prev.lastScrollTop ? "down" : "up";
        const isScrolled = currentScrollTop > 100; // Adjust this value to control when navbar changes

        return {
          ...prev,
          scrollDirection: newScrollDirection,
          isScrolled: isScrolled,
          lastScrollTop: currentScrollTop,
        };
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // toggleDropdown function to open and close the dropdown for services.
  const toggleDropdown = (id) => {
    setState((prevState) => ({
      ...prevState,
      activeDropdown: prevState.activeDropdown === id ? null : id,
    }));
  };

  const DropdownIcon = ({ isOpen }) => (
    <svg
      className="w-6 h-6 mt-0.5 text-black"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d={isOpen ? "M5 15L12 8l7 7" : "M19 9L12 16l-7-7"}
      />
    </svg>
  );

  // Define service items using translations for labels.
  const serviceItems = [
    {
      category: t("navbar.dropdown.developmentServices.title"),
      items: [
        {
          label: t(
            "navbar.dropdown.developmentServices.items.websiteDevelopment"
          ),
          link: "/agence-creation-site-web",
          icon: <Globe />,
        },
        {
          label: t(
            "navbar.dropdown.developmentServices.items.mobileAppDevelopment"
          ),
          link: "/developpement-application-mobile",
          icon: <Smartphone />,
        },
        {
          label: t(
            "navbar.dropdown.developmentServices.items.ecommerceDevelopment"
          ),
          link: "/developpement-ecommerce",
          icon: <ShoppingCart />,
        },
        {
          label: t("navbar.dropdown.developmentServices.items.saasDevelopment"),
          link: "/developpement-saas",
          icon: <Cpu />,
        },
        {
          label: t("navbar.dropdown.developmentServices.items.aiAndAutomation"),
          link: "/agence-automatisation-ia",
          icon: <Activity />,
        },
      ],
    },
    {
      category: t("navbar.dropdown.uiUxDesign.title"),
      items: [
        {
          label: t("navbar.dropdown.uiUxDesign.items.websiteMobileAppDesign"),
          link: "/web-et-mobile-design",
          icon: <Edit />,
        },
        {
          label: t(
            "navbar.dropdown.uiUxDesign.items.socialMediaPostLogoDesign"
          ),
          link: "/design-logo-et-posts-reseaux-sociaux",
          icon: <Image />,
        },
      ],
    },
    {
      category: t("navbar.dropdown.digitalMarketing.title"),
      items: [
        {
          label: t("navbar.dropdown.digitalMarketing.items.seo"),
          link: "/seo",
          icon: <Search />,
        },
        {
          label: t(
            "navbar.dropdown.digitalMarketing.items.socialMediaMarketing"
          ),
          link: "/marketing-digital",
          icon: <Share />,
        },
      ],
    },
  ];

  // Render the dropdown using the "services" id but display the translated label.
  const renderDropdown = (id, data) => {
    const isDropdownOpen = state.activeDropdown === id;
    return (
      <div className="dropdown group">
        {/*Button to toggle the dropdown for services for mobile view. */}
        <button
          onMouseEnter={() => {
            // Always allow hover to open dropdown on larger screens
            if (window.innerWidth >= 1024) {
              setState((prev) => ({ ...prev, activeDropdown: id }));
            }
          }}
          onClick={() => toggleDropdown(id)}
          className="flex items-center hover:font-bold relative lg:py-5 cursor-pointer"
        >
          {t("navbar.links.services")}
          <span className="block lg:hidden">
            <DropdownIcon isOpen={isDropdownOpen} />
          </span>
        </button>

        <div
          className={`${
            isDropdownOpen ? "block lg:group-hover:visible" : "hidden"
          } grid-flow-col xl:left-56 2xl:right-56 2xl:left-auto lg:left-32 lg:absolute lg:invisible z-50 h-fit rounded-xl bg-[rgba(191,219,254,0.9)] border-blue-600 border-2 text-blue-600 py-5 lg:py-10 divide-gray-300 lg:divide-x lg:grid items-start justify-start`}
        >
          {data.map(({ category, items }, categoryIndex) => (
            <div key={`category-${categoryIndex}`} className="category-section">
              <h4 className="relative font-semibold px-7 mb-2">{category}</h4>
              {items.map(({ label, link, icon }, itemIndex) => (
                <div
                  className="flex px-7 flex-col justify-start items-start"
                  key={`item-${itemIndex}-${label}`}
                >
                  <div className="flex gap-4 py-2 hover:font-bold items-center">
                    <div className="border-2 border-blue-600 p-2.5 rounded-2xl">
                      <span className="w-8 font-extrabold text-blue-600 h-8">
                        {icon}
                      </span>
                    </div>
                    <Link
                      href={link}
                      onClick={() => {
                        toggleMenu();
                        // Close dropdown only on mobile
                        if (window.innerWidth < 1024) {
                          toggleDropdown(id);
                        }
                      }}
                    >
                      {label}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="invisible pl-6 lg:group-hover:visible absolute rounded-sm before:-top-2 before:absolute before:h-4 before:w-4 before:-rotate-45 before:transform before:border-blue-600 before:border-t-2 before:border-r-2 before:bg-blue-200"></div>
      </div>
    );
  };

  return (
    <div
      className={`
        fixed  top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
        ${
          isLargeScreen &&
          stateNav.isScrolled &&
          stateNav.scrollDirection === "down"
            ? "opacity-70 h-20 my-4  -mt-2  px-4 mx-6 rounded-full translate-y-0"
            : "opacity-100 h-20  translate-y-0"
        }
        ${
          isLargeScreen && stateNav.isScrolled
            ? "bg-blue-200/70  backdrop-blur-sm my-4 px-4 mx-6 rounded-full"
            : "bg-blue-200 relative"
        }
      `}
      style={{
        transform:
          isLargeScreen &&
          stateNav.isScrolled &&
          stateNav.scrollDirection === "down"
            ? "translateY(-100%)"
            : "translateY(0)",
        transition: "transform 0.3s ease-in-out, opacity 0.3s ease-in-out",
      }}
    >
      <nav className="z-30 flex justify-between gap-5 h-20 px-4 xl:px-0 max-w-screen-xl m-auto">
        <div className="flex  items-center">
          <Link className="w-44 h-8 font-extrabold text-2xl" href="/">
            <span className="border-4 text-gray-800 border-blue-600 ">
              Numi
            </span>
            <span className="text-blue-600">Spark</span>
          </Link>
        </div>

        <div className="z-50 flex items-center lg:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {state.isMenuOpen ? (
              <X className="w-6 h-6 text-black" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6 text-black" aria-hidden="true" />
            )}
          </button>
        </div>

        <div
          className={`lg:space-x-5 gap-y-4 text-lg absolute justify-between flex flex-col items-center lg:flex-row z-50 lg:static lg:w-auto lg:py-0 pb-6 w-full left-0 ${
            state.isMenuOpen && window.innerWidth < 1024
              ? "top-[64px] z-50 overflow-scroll lg:overflow-hidden bg-blue-200 pt-6"
              : "hidden  lg:flex"
          }`}
        >
          <Link onClick={toggleMenu} href="/">
            {t("navbar.links.home")}
          </Link>
          {renderDropdown("services", serviceItems)}
          <Link onClick={toggleMenu} href="/portfolio">
            {t("navbar.links.portfolio")}
          </Link>
          <Link onClick={toggleMenu} href="/a-propos-de-nous">
            {t("navbar.links.aboutUs")}
          </Link>
          <Link onClick={toggleMenu} href="/blog">
            Blog
          </Link>
          <Link
            className="hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] font-medium px-4 py-3 rounded-full bg-blue-600 text-white transition-all duration-300 flex items-center gap-2"
            onClick={toggleMenu}
            href="/audit-seo-gratuit"
          >
            <span>{t("navbar.links.startProject")}</span>
            <MdRocket className="w-5 h-5" />
          </Link>
          <LanguageSwitcher />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
