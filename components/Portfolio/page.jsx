"use client";
import { ArrowUpRight } from "lucide-react";
import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import PortfolioModal from "@/components/PortfolioModal/page";

const portfolioItems = [
  {
    image: "/portfolio/web-development-cover1.png",
    src: "https://aid-calculation.vercel.app/",
    translationName: "webDevelopment.portfolio.categories.solulec.name",
    translationContent: "webDevelopment.portfolio.categories.solulec.content",
    translationdesign: "webDevelopment.portfolio.categories.solulec.design",
    translationfrontendDevelopment:
      "webDevelopment.portfolio.categories.solulec.frontendDevelopment",
    translationbackendDevelopment:
      "webDevelopment.portfolio.categories.solulec.backendDevelopment",
    translationDatabase: "webDevelopment.portfolio.categories.solulec.database",
    bgColor: "bg-violet-100",
    dotColor: "bg-violet-500",
  },
  {
    image: "/portfolio/website1.png",
    src: "https://www.privatehonors.com/",
    translationName: "webDevelopment.portfolio.categories.private.name",
    translationContent: "webDevelopment.portfolio.categories.private.content",
    translationdesign: "webDevelopment.portfolio.categories.private.design",
    translationfontendDevelopment:
      "webDevelopment.portfolio.categories.private.frontendDevelopment",
    translationbackendDevelopment:
      "webDevelopment.portfolio.categories.private.backendDevelopment",
    translationDatabase: "webDevelopment.portfolio.categories.private.database",
    translationKey: "appDesign",
    bgColor: "bg-emerald-600",
    dotColor: "bg-emerald-500",
  },
  {
    image: "/portfolio/green-website-cover.png",
    src: "https://greenackors.com/",
    translationName: "webDevelopment.portfolio.categories.wiefly.name",
    translationContent: "webDevelopment.portfolio.categories.wiefly.content",
    translationdesign: "webDevelopment.portfolio.categories.wiefly.design",
    translationfrontendDevelopment:
      "webDevelopment.portfolio.categories.wiefly.frontendDevelopment",
    translationKey: "appDesign",
    bgColor: "bg-amber-400",
    dotColor: "bg-amber-500",
  },
  {
    image: "/portfolio/website1.png",
    src: "https://privatehonors.com/",
    translationName: "saas.portfolio.categories.private.name",
    translationContent: "saas.portfolio.categories.private.content",
    translationdesign: "saas.portfolio.categories.private.design",
    translationfontendDevelopment:
      "saas.portfolio.categories.private.frontendDevelopment",
    translationbackendDevelopment:
      "saas.portfolio.categories.private.backendDevelopment",
    translationDatabase: "saas.portfolio.categories.private.database",
    bgColor: "bg-violet-100",
    dotColor: "bg-violet-500",
  },
  {
    image: "/portfolio/ecommerce-black-cover.png",
    src: ["/portfolio/saas.jpeg"],
    translationName: "saas.portfolio.categories.aviators.name",
    translationContent: "saas.portfolio.categories.aviators.content",
    translationdesign: "saas.portfolio.categories.aviators.design",
    translationfrontendDevelopment:
      "saas.portfolio.categories.aviators.frontendDevelopment",
    translationbackendDevelopment:
      "saas.portfolio.categories.aviators.backendDevelopment",
    translationDatabase: "saas.portfolio.categories.aviators.database",
    translationKey: "appDesign",
    bgColor: "bg-emerald-600",
    dotColor: "bg-emerald-500",
  },
  {
    image: "/portfolio/ecommerce-funding-cover.png",
    src: ["/portfolio/saas3.webp"],
    translationName: "saas.portfolio.categories.funding.name",
    translationContent: "saas.portfolio.categories.funding.content",
    translationdesign: "saas.portfolio.categories.funding.design",
    translationfrontendDevelopment:
      "saas.portfolio.categories.funding.frontendDevelopment",
    translationbackendDevelopment:
      "saas.portfolio.categories.funding.backendDevelopment",
    translationDatabase: "saas.portfolio.categories.funding.database",
    bgColor: "bg-amber-400",
    dotColor: "bg-amber-500",
  },
  {
    image: "/portfolio/ecommerce-cover.png",
    src: ["/portfolio/ecommerce3.webp"],
    translationName: "ecommerce.portfolio.categories.cloth.name",
    translationContent: "ecommerce.portfolio.categories.cloth.content",
    translationdesign: "ecommerce.portfolio.categories.cloth.design",
    translationfontendDevelopment:
      "ecommerce.portfolio.categories.cloth.frontendDevelopment",
    translationbackendDevelopment:
      "ecommerce.portfolio.categories.cloth.backendDevelopment",
    bgColor: "bg-violet-100",
    dotColor: "bg-violet-500",
  },
  {
    image: "/portfolio/ecommerce.webp",
    src: ["/portfolio/ecommerce.webp"],
    translationName: "ecommerce.portfolio.categories.beauty.name",
    translationContent: "ecommerce.portfolio.categories.beauty.content",
    translationdesign: "ecommerce.portfolio.categories.beauty.design",
    translationfontendDevelopment:
      "ecommerce.portfolio.categories.beauty.frontendDevelopment",
    translationbackendDevelopment:
      "ecommerce.portfolio.categories.beauty.backendDevelopment",
    bgColor: "bg-emerald-600",
    dotColor: "bg-emerald-500",
  },
  {
    image: "/portfolio/ecommerce2.webp",
    src: ["/portfolio/ecommerce2.webp"],
    translationName: "ecommerce.portfolio.categories.porto.name",
    translationContent: "ecommerce.portfolio.categories.porto.content",
    translationdesign: "ecommerce.portfolio.categories.porto.design",
    translationfrontendDevelopment:
      "ecommerce.portfolio.categories.porto.frontendDevelopment",
    translationbackendDevelopment:
      "ecommerce.portfolio.categories.porto.backendDevelopment",
    translationDatabase: "ecommerce.portfolio.categories.porto.database",
    bgColor: "bg-amber-400",
    dotColor: "bg-amber-500",
  },
  {
    image: "/portfolio/appdesign1.jpg",
    src: ["/portfolio/appdesign1.jpg"],
    translationName: "websiteMobileDesign.portfolio.categories.fuzzed.name",
    translationContent:
      "websiteMobileDesign.portfolio.categories.fuzzed.content",
    translationdesign: "websiteMobileDesign.portfolio.categories.fuzzed.design",
    bgColor: "bg-violet-100",
    dotColor: "bg-violet-500",
  },
  {
    image: "/portfolio/mastery-design-cover.png",
    src: ["/portfolio/website-design3.jpeg"],
    translationName: "websiteMobileDesign.portfolio.categories.mastery.name",
    translationContent:
      "websiteMobileDesign.portfolio.categories.mastery.content",
    translationdesign:
      "websiteMobileDesign.portfolio.categories.mastery.design",
    bgColor: "bg-emerald-600",
    dotColor: "bg-emerald-500",
  },
  {
    image: "/portfolio/website-design1.1.webp",
    src: [
      "/portfolio/website-design1.1.webp",
      "/portfolio/website-design1.2.webp",
    ],
    translationName: "websiteMobileDesign.portfolio.categories.wiefly.name",
    translationContent:
      "websiteMobileDesign.portfolio.categories.wiefly.content",
    translationdesign: "websiteMobileDesign.portfolio.categories.wiefly.design",
    translationKey: "appDesign",
    bgColor: "bg-amber-400",
    dotColor: "bg-amber-500",
  },
  {
    image: "/portfolio/app2.0.webp",
    src: ["/portfolio/app2.0.webp", "/portfolio/app2.1.webp"],
    translationName: "mobileDevelopment.portfolio.categories.taskers.name",
    translationContent:
      "mobileDevelopment.portfolio.categories.taskers.content",
    translationdesign: "mobileDevelopment.portfolio.categories.taskers.design",
    translationfrontendDevelopment:
      "mobileDevelopment.portfolio.categories.taskers.frontendDevelopment",
    translationbackendDevelopment:
      "mobileDevelopment.portfolio.categories.taskers.backendDevelopment",
    translationDatabase:
      "mobileDevelopment.portfolio.categories.taskers.database",
    bgColor: "bg-violet-100",
    dotColor: "bg-violet-500",
  },
  {
    image: "/portfolio/home-app.webp",
    src: ["/portfolio/home-app.webp"],
    translationName: "mobileDevelopment.portfolio.categories.aviators.name",
    translationContent:
      "mobileDevelopment.portfolio.categories.aviators.content",
    translationdesign: "mobileDevelopment.portfolio.categories.aviators.design",
    translationfrontendDevelopment:
      "mobileDevelopment.portfolio.categories.aviators.frontendDevelopment",
    translationbackendDevelopment:
      "mobileDevelopment.portfolio.categories.aviators.backendDevelopment",
    translationDatabase:
      "mobileDevelopment.portfolio.categories.aviators.database",
    bgColor: "bg-emerald-600",
    dotColor: "bg-emerald-500",
  },
  {
    image: "/portfolio/app3.0.webp",
    src: ["/portfolio/app3.0.webp", "/portfolio/app3.1.webp"],
    translationName: "mobileDevelopment.portfolio.categories.wiefly.name",
    translationContent: "mobileDevelopment.portfolio.categories.wiefly.content",
    translationdesign: "mobileDevelopment.portfolio.categories.wiefly.design",
    translationfrontendDevelopment:
      "mobileDevelopment.portfolio.categories.wiefly.frontendDevelopment",
    translationbackendDevelopment:
      "mobileDevelopment.portfolio.categories.wiefly.backendDevelopment",
    translationDatabase:
      "mobileDevelopment.portfolio.categories.wiefly.database",
    bgColor: "bg-amber-400",
    dotColor: "bg-amber-500",
  },
  {
    image: "/portfolio/logo.webp",
    src: [
      "/portfolio/logo3.webp",
      "/portfolio/logo.webp",
      "/portfolio/logo2.webp",
    ],
    translationName: "socialMediaLogoDesign.portfolio.categories.logo",
    bgColor: "bg-violet-100",
    dotColor: "bg-violet-500",
  },
  {
    image: "/portfolio/socialposter.png",
    src: ["/portfolio/social1.jpg", "/portfolio/social2.jpg"],
    translationName: "socialMediaLogoDesign.portfolio.categories.social",
    bgColor: "bg-amber-400",
    dotColor: "bg-amber-500",
  },
  {
    image: "/portfolio/other-design1.webp",
    src: [
      "/portfolio/other-design1.webp",
      "/portfolio/other-design2.webp",
      "/portfolio/other-design3.jpg",
    ],
    translationName: "socialMediaLogoDesign.portfolio.categories.other",
    bgColor: "bg-emerald-600",
    dotColor: "bg-emerald-500",
  },
  {
    image: "/portfolio/seo-agence-de-immobilier.png",
    src: ["/portfolio/seo-agence-de-immobilier.png"],
    translationName: "seo.portfolio.categories.immobilier.name",
    translationContent:
      "seo.portfolio.categories.immobilier.content",
    bgColor: "bg-violet-100",
    dotColor: "bg-violet-500",
  },
  {
    image: "/portfolio/seo-agence-ecommerce.png",
    src: ["/portfolio/seo-agence-ecommerce.png"],
    translationName: "seo.portfolio.categories.ecommerce.name",
    translationContent:
      "seo.portfolio.categories.ecommerce.content",
    bgColor: "bg-emerald-600",
    dotColor: "bg-emerald-500",
  },
  {
    image: "/portfolio/seo-experte-referencement.png",
    src: ["/portfolio/seo-experte-referencement.png"],
    translationName: "seo.portfolio.categories.SFA.name",
    translationContent:
      "seo.portfolio.categories.SFA.content",
    translationdesign: "seo.portfolio.categories.SFA.design",
    bgColor: "bg-amber-400",
    dotColor: "bg-amber-500",
  },
];

const Portfolio = () => {
  // Get translation functions for each namespace
  const { t: tWeb } = useTranslation("webDevelopment");
  const { t: tSaas } = useTranslation("saas");
  const { t: tEcommerce } = useTranslation("ecommerce");
  const { t: tWebsiteMobileDesign } = useTranslation("websiteMobileDesign");
  const { t: tMobileDevelopment } = useTranslation("mobileDevelopment");
  const { t: tSocialMediaLogoDesign } = useTranslation("socialMediaLogoDesign");
  const { t: tSeo } = useTranslation("seo");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedModal, setSelectedModal] = useState(null);

  // Helper to select the proper translation function based on the translation key
  const getTranslationFunc = (translationKey) => {
    const namespace = translationKey.split(".")[0];
    switch (namespace) {
      case "webDevelopment":
        return tWeb;
      case "saas":
        return tSaas;
      case "ecommerce":
        return tEcommerce;
      case "websiteMobileDesign":
        return tWebsiteMobileDesign;
      case "mobileDevelopment":
        return tMobileDevelopment;
      case "socialMediaLogoDesign":
        return tSocialMediaLogoDesign;
      case "seo":
        return tSeo;
      default:
        return (key) => key;
    }
  };

  const openModal = (item) => {
    setSelectedModal(item);
    setIsModalOpen(true);
  };

  // Determine the translation function for the selected item, if any.
  const modalTranslation = selectedModal
    ? getTranslationFunc(selectedModal.translationName)
    : (key) => key;

  return (
    <div>
      {/* Portfolio Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl text-center font-bold text-gray-800">
          {tEcommerce("ecommerce.portfolio.title")}{" "}
          <span className="text-blue-600 bg-blue-200 p-2.5 rounded-2xl">
            {tEcommerce("ecommerce.portfolio.titleHighlight")}
          </span>
        </h1>
        <div className="grid mt-10 grid-cols-1 md:grid-cols-3 gap-10">
          {portfolioItems.map((item, index) => {
            // Get the translation function for the current item
            const currentT = getTranslationFunc(item.translationName);
            return (
              <div
                key={index}
                className={`shadow-[5px_5px_0px_4px_rgb(147,197,253),_-5px_-5px_0px_rgba(255,255,255,1)] relative rounded-3xl p-2 ${item.bgColor}`}
              >
                <div className="relative aspect-[4/3] rounded-2xl -mr-1 overflow-hidden mb-3">
                  <img
                    src={item.image}
                    alt={currentT(item.translationName)}
                    className="w-full h-full object-fill"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">
                    {currentT(item.translationName)}
                  </h3>
                  <button
                    onClick={() => openModal(item)}
                    className="w-12 h-12 bg-blue-400 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors"
                  >
                    <ArrowUpRight className="w-6 h-6 text-white" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <PortfolioModal
        item={selectedModal}
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        t={modalTranslation} // now passing a single translation function
      />
    </div>
  );
};

export default Portfolio;
