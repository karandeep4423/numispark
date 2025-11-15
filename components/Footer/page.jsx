"use client";
import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { PiTiktokLogoBold } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa6";
import { FiLinkedin, FiFacebook } from "react-icons/fi";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const Footer = () => {
  const { t } = useTranslation("footer");
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <div className="bg-blue-200 text-lg xl:text-xl text-left rounded-t-3xl">
        <div className="-mt-4 max-w-screen-xl m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-5  px-10">
          {/* Brand Section - fixed vertical alignment */}
          <div className="flex flex-col text-gray-800 font-medium space-y-4 pt-10">
            <Link className="inline-block" href="/">
              <div className="font-extrabold text-2xl">
                <span className="border-4 border-blue-600 ">Numi</span>
                <span className="text-blue-600 ">Spark</span>
              </div>
              <p className="text-sm p-1.5 text-gray-700">SIREN: 943468926</p>
            </Link>

            <p className="text-gray-700">{t("footer.tagline")}</p>

            {/* Social Icons */}
            <div className="flex gap-5">
              <Link
                href="https://www.instagram.com/numisparkk"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram className="w-8 h-8 text-blue-500 hover:text-blue-700 transition-colors" />
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=61575081451563&locale=fr_FR"
                target="_blank"
                aria-label="Facebook"
              >
                <FiFacebook className="w-8 h-8 text-blue-500 hover:text-blue-700 transition-colors" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/numispark"
                target="_blank"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-8 h-8 text-blue-500 hover:text-blue-700 transition-colors" />
              </Link>
              <Link
                href="https://www.tiktok.com/@numispark"
                target="_blank"
                aria-label="TikTok"
              >
                <PiTiktokLogoBold className="w-8 h-8 text-blue-500 hover:text-blue-700 transition-colors" />
              </Link>
            </div>
          </div>

          {/* Navigation Section */}
          <div className="flex flex-col text-gray-800 font-medium space-y-4 pt-10">
            <h2 className="text-xl font-bold text-gray-800">
              {t("footer.navigation.heading")}
            </h2>
            <Link href="/" className="hover:text-blue-600 transition-colors">
              {t("footer.navigation.links.home")}
            </Link>
            <Link
              href="/a-propos-de-nous"
              className="hover:text-blue-600 transition-colors"
            >
              {t("footer.navigation.links.aboutUs")}
            </Link>
            <Link
              href="/blog"
              className="hover:text-blue-600 transition-colors"
            >
              Blogs
            </Link>
            <Link
              href="/portfolio"
              className="hover:text-blue-600 transition-colors"
            >
              {t("footer.navigation.links.portfolio")}
            </Link>
            <Link
              href="/contactez-nous"
              className="hover:text-blue-600 transition-colors"
            >
              {t("footer.navigation.links.contactUs")}
            </Link>
          </div>

          {/* Development Services Section */}
          <div className="flex flex-col text-gray-800 font-medium space-y-4 pt-10">
            <h2 className="text-xl font-bold text-gray-800">
              {t("footer.developmentServices.heading")}
            </h2>
            <Link
              href="/agence-creation-site-web"
              className="hover:text-blue-600 transition-colors"
            >
              {t("footer.developmentServices.links.websiteDevelopment")}
            </Link>
            <Link
              href="/developpement-application-mobile"
              className="hover:text-blue-600 transition-colors"
            >
              {t("footer.developmentServices.links.mobileAppDevelopment")}
            </Link>
            <Link
              href="/developpement-ecommerce"
              className="hover:text-blue-600 transition-colors"
            >
              {t("footer.developmentServices.links.ecommerceDevelopment")}
            </Link>
            <Link
              href="/developpement-saas"
              className="hover:text-blue-600 transition-colors"
            >
              {t("footer.developmentServices.links.saasDevelopment")}
            </Link>
            <Link
              href="/agence-automatisation-ia"
              className="hover:text-blue-600 transition-colors"
            >
              {t("footer.developmentServices.links.aiAndAutomation")}
            </Link>
          </div>

          {/* Design Services Section */}
          <div className="flex flex-col text-gray-800 font-medium space-y-4 pt-10">
            <h2 className="text-xl font-bold text-gray-800">
              {t("footer.designServices.heading")}
            </h2>
            <Link
              href="/web-et-mobile-design"
              className="hover:text-blue-600 transition-colors"
            >
              {t("footer.designServices.links.websiteMobileAppDesign")}
            </Link>
            <Link
              href="/design-logo-et-posts-reseaux-sociaux"
              className="hover:text-blue-600 transition-colors"
            >
              {t("footer.designServices.links.socialMediaPostLogoDesign")}
            </Link>
          </div>

          {/* Digital Marketing Section */}
          <div className="flex flex-col text-gray-800 font-medium space-y-4 pt-10">
            <h2 className="text-xl font-bold text-gray-800">
              {t("footer.digitalMarketing.heading")}
            </h2>
            <Link href="/seo" className="hover:text-blue-600 transition-colors">
              {t("footer.digitalMarketing.links.seo")}
            </Link>
            <Link
              href="/marketing-digital"
              className="hover:text-blue-600 transition-colors"
            >
              {t("footer.digitalMarketing.links.socialMediaMarketing")}
            </Link>
          </div>

          {/* Contact Info Section */}
          <div className="flex flex-col text-gray-800 font-medium space-y-4 pt-10">
            <h2 className="text-xl text-gray-800 font-bold">
              {t("footer.contactInfo.heading")}
            </h2>
            <address className="flex items-center gap-2">
              <MdLocationOn className="text-blue-600 flex-shrink-0" />
              <p>{t("footer.contactInfo.location")}</p>
            </address>
            <div className="flex items-center gap-2">
              <MdEmail className="text-blue-600 flex-shrink-0" />
              <a
                href="mailto:contact@numispark.com"
                className="hover:text-blue-600 transition-colors"
              >
                {t("footer.contactInfo.email")}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MdPhone className="text-blue-600 flex-shrink-0" />
              <a
                href="tel:+33602528771"
                className="hover:text-blue-600 transition-colors"
              >
                +33 6 02 52 87 71
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-300 my-8"></div>

        {/* Bottom Footer - fixed max width and padding */}
        <div className="max-w-screen-xl mx-auto px-10 pb-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-700 text-sm">
            © {currentYear} NumiSpark. {t("footer.copyright")}
          </p>
          <div className="flex gap-6 text-sm">
            <Link
              href="/mentions-legales"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {t("footer.termsOfService")}
            </Link>
            <Link
              href="/politique-de-confidentialite"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {t("footer.privacyPolicy")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
