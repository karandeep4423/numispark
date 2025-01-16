"use client";
import React, { useState } from "react";
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

const serviceItems = [
  {
    category: "Development Services",
    items: [
      {
        label: "Website Development",
        link: "/website-development",
        icon: <Globe />,
      },
      {
        label: "Mobile App Development",
        link: "/mobile-app-development",
        icon: <Smartphone />,
      },
      {
        label: "Ecommerce Development",
        link: "/ecommerce-development",
        icon: <ShoppingCart />,
      },
      { label: "SaaS Development", link: "/saas-development", icon: <Cpu /> },
      {
        label: "AI and Automation",
        link: "/ai-and-automation",
        icon: <Activity />,
      },
    ],
  },
  {
    category: "UI/UX Design",
    items: [
      {
        label: "Website & Mobile App Design",
        link: "/website-&-mobile-app-design",
        icon: <Edit /> ,
      },
      {
        label: "Social Media Post & Logo Design",
        link: "/social-media-post-&-logo-design",
        icon: <Image />,
      }
    ],
  },
  {
    category: "Digital Marketing",
    items: [
      { label: "SEO", link: "/seo", icon: <Search /> },
      {
        label: "Social Media Marketing",
        link: "/social-media-marketing",
        icon: <Share />,
      }
    ],
  },
];

const Navbar = () => {
  const [state, setState] = useState({
    isMenuOpen: false,
    activeDropdown: null,
  });

  const toggleMenu = () => {
    setState((prevState) => ({
      ...prevState,
      isMenuOpen: !prevState.isMenuOpen,
    }));
  };

  const toggleDropdown = (name) => {
    if (window.innerWidth < 1024) {
      setState((prevState) => ({
        ...prevState,
        activeDropdown: prevState.activeDropdown === name ? null : name,
      }));
    }
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

  const renderDropdown = (name, data) => {
    const isDropdownOpen = state.activeDropdown === name;

    return (
      <div className="dropdown group">
        <button
          onClick={() => toggleDropdown(name)}
          className="flex items-center hover:font-bold relative lg:py-5 cursor-pointer"
        >
          {name}
          <span className="block lg:hidden">
            <DropdownIcon isOpen={isDropdownOpen} />
          </span>
        </button>

        <div
          className={`${
            isDropdownOpen ? "block" : "hidden"
          } grid-flow-col xl:left-56 2xl:right-56  2xl:left-auto lg:left-32 lg:absolute lg:invisible lg:group-hover:visible z-10 h-fit rounded-xl bg-blue-50 py-5 lg:py-10 divide-gray-300 lg:divide-x lg:grid items-start justify-start`}
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
                    <div className="bg-blue-200 p-2.5 rounded-2xl">
                      <span className="w-8 font-extrabold text-blue-600 h-8">
                        {icon}
                      </span>
                    </div>
                    <Link href={link} onClick={toggleMenu}>
                      {label}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="invisible pl-6 lg:group-hover:visible absolute rounded-sm before:-top-2 before:absolute before:h-4 before:w-4 before:-rotate-45 before:transform before:border-blue-50 before:bg-blue-50"></div>
      </div>
    );
  };

  return (
    <div className=" bg-blue-200">
      <nav className="z-50 flex justify-between gap-5 h-20 px-4 xl:px-0 max-w-screen-xl m-auto">
        <div className="flex items-center">
          <Link href="/">
            <p className="w-44 h-8 font-extrabold text-xl">Digital Agency</p>
          </Link>
        </div>

        <div className="flex items-center lg:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {state.isMenuOpen ? (
              <X className="w-6 h-6 text-black" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6 text-black" aria-hidden="true" />
            )}
          </button>
        </div>

        <div
          // Mobile Responsive
          className={` lg:space-x-5 gap-y-4 text-lg absolute justify-between flex flex-col items-center lg:flex-row z-50 lg:static lg:w-auto lg:py-0 pb-6 w-full left-0 ${
            state.isMenuOpen
              ? "top-[64px] overflow-scroll lg:overflow-hidden bg-blue-200  pt-6"
              : "hidden lg:flex"
          }`}
        >
          {renderDropdown("Services", serviceItems)}
          <Link onClick={toggleMenu} href="/our-work">
            Our Work
          </Link>
          <Link onClick={toggleMenu} href="/about-us">
            About Us
          </Link>
          <Link onClick={toggleMenu} href="/contact-us">
            Contact Us
          </Link>
          <Link
            className="hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] font-medium px-4 py-3 rounded-full bg-sky-500 text-white transition-all duration-300"
            onClick={toggleMenu}
            href="/start-project"
          >
            Start a Project
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
