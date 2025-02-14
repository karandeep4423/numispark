"use client";
import React from "react";
import Link from "next/link";
import { Instagram, Facebook, Mail, MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation("footer");

  return (
    <div>
      <div className="bg-blue-200 text-lg xl:text-xl text-left rounded-t-3xl">
        <div className="-mt-4 max-w-screen-xl m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 space-x-5 px-5">
          {/* Brand Section */}
          <div className="flex flex-col items-center space-y-4 pt-10 w-64">
            <Link
              className="font-bold text-gray-800 text-xl p-2.5 border-2 border-gray-800"
              href="/"
            >
              {t("footer.brand")}
            </Link>
            {/* Social Icons */}
            <div className="flex gap-4">
              <Link
                href="https://www.instagram.com/privatehonors/profilecard/?igsh=MTkyeDVlZ3lvMmlhNw=="
                target="_blank"
                aria-label={t("footer.social.instagram")}
              >
                <Instagram className="w-10 h-10 text-blue-600 hover:text-blue-400 transition-colors" />
              </Link>
              <Link
                href="https://www.facebook.com/share/14GyLWh1t1/?mibextid=LQQJ4d"
                target="_blank"
                aria-label={t("footer.social.facebook")}
              >
                <Facebook className="w-10 h-10 text-blue-600 hover:text-blue-400 transition-colors" />
              </Link>
              <Link href="/" target="_blank" aria-label={t("footer.social.whatsapp")}>
                <MessageCircle className="w-10 h-10 text-blue-600 hover:text-blue-400 transition-colors" />
              </Link>
              <a href="mailto:contact@privatehonors.com" aria-label={t("footer.social.email")}>
                <Mail className="w-11 h-11 text-blue-600 hover:text-blue-400 transition-colors" />
              </a>
            </div>
          </div>

          {/* Navigation Section */}
          <div className="flex flex-col text-gray-800 font-medium space-y-4 pt-10">
            <h2 className="text-xl font-bold text-gray-800">
              {t("footer.navigation.heading")}
            </h2>
            <Link href="/">{t("footer.navigation.links.home")}</Link>
            <Link href="/about-us">{t("footer.navigation.links.aboutUs")}</Link>
            <Link href="/contact-us">{t("footer.navigation.links.contactUs")}</Link>
          </div>

          {/* Development Services Section */}
          <div className="flex flex-col text-gray-800 font-medium space-y-4 pt-10">
            <h2 className="text-xl font-bold text-gray-800">
              {t("footer.developmentServices.heading")}
            </h2>
            <Link href="/website-development">
              {t("footer.developmentServices.links.websiteDevelopment")}
            </Link>
            <Link href="/mobile-app-development">
              {t("footer.developmentServices.links.mobileAppDevelopment")}
            </Link>
            <Link href="/ecommerce-development">
              {t("footer.developmentServices.links.ecommerceDevelopment")}
            </Link>
            <Link href="/saas-development">
              {t("footer.developmentServices.links.saasDevelopment")}
            </Link>
            <Link href="/ai-and-automation">
              {t("footer.developmentServices.links.aiAndAutomation")}
            </Link>
          </div>

          {/* Design Services Section */}
          <div className="flex flex-col text-gray-800 font-medium space-y-4 pt-10">
            <h2 className="text-xl font-bold text-gray-800">
              {t("footer.designServices.heading")}
            </h2>
            <Link href="/website-&-mobile-app-design">
              {t("footer.designServices.links.websiteMobileAppDesign")}
            </Link>
            <Link href="/social-media-post-&-logo-design">
              {t("footer.designServices.links.socialMediaPostLogoDesign")}
            </Link>
          </div>

          {/* Digital Marketing Section */}
          <div className="flex flex-col text-gray-800 font-medium space-y-4 pt-10">
            <h2 className="text-xl font-bold text-gray-800">
              {t("footer.digitalMarketing.heading")}
            </h2>
            <Link href="/seo">{t("footer.digitalMarketing.links.seo")}</Link>
            <Link href="/social-media-marketing">
              {t("footer.digitalMarketing.links.socialMediaMarketing")}
            </Link>
          </div>

          {/* Contact Info Section */}
          <div className="flex flex-col text-gray-800 font-medium space-y-4 pt-10">
            <h2 className="text-xl text-gray-800 font-bold">
              {t("footer.contactInfo.heading")}
            </h2>
            <p>{t("footer.contactInfo.location")}</p>
            <a href="mailto:contact@privatehonors.com">
              {t("footer.contactInfo.email")}
            </a>
            <a href="tel:+33624610775">{t("footer.contactInfo.phone")}</a>
          </div>
        </div>
        <p className="text-center text-gray-800 py-6">
          {t("footer.copyright")}
        </p>
      </div>
    </div>
  );
};

export default Footer;
