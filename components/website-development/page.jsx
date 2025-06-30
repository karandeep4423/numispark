"use client";
import React, { useState } from "react";
import {
  CloudUpload,
  Code,
  CheckCircle,
  Smile,
  TrendingUp,
  Gauge,
  Server,
  Smartphone,
  Layout,
  Zap,
  Brain,
  Target,
  LifeBuoy,
  Search,
  ArrowUpRight,
} from "lucide-react";
import Contact from "@/components/contact-us/page";
import HeroButtons from "@/components/HeroButtons/page";
import FAQs from "@/components/Faqs/page";
import Technologies from "@/components/Technologies/page";
import HowAgencyWorks from "@/components/Process/page";
import { useTranslation } from "react-i18next";
import PortfolioModal from "@/components/PortfolioModal/page";

const TECHNOLOGIES = [
  {
    name: "React Js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "Angular Js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg",
  },
  {
    name: "Vue Js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
  },
  {
    name: "Tailwind css",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Node js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
  },
  {
    name: "Django",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
  },
  {
    name: "Ruby on Rails",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-plain-wordmark.svg",
  },
  {
    name: "Laravel",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
  },
  {
    name: "Webflow",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webflow/webflow-original.svg",
  },
  {
    name: "Wordpress",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg",
  },

  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "MySQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  },
  {
    name: "PostgreSQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  },
];

const steps = [
  {
    translationKey: "analysis",
    icon: <Brain className="text-white" size={80} />,
  },
  {
    translationKey: "wireframing",
    icon: <Target className="text-white" size={80} />,
  },
  {
    translationKey: "development",
    icon: <Code className="text-white" size={80} />,
  },
  {
    translationKey: "testing",
    icon: <CheckCircle className="text-white" size={80} />,
  },
  {
    translationKey: "deployment",
    icon: <CloudUpload className="text-white" size={80} />,
  },
];

const keyFeatures = [
  {
    translationKey: "mobileResponsive",
    serviceIcon: "Smartphone",
  },
  {
    translationKey: "seoFriendly",
    serviceIcon: "Search",
  },
  {
    translationKey: "cms",
    serviceIcon: "Server",
  },
  {
    translationKey: "speedOptimization",
    serviceIcon: "Gauge",
  },
];

const benefits = [
  {
    translationKey: "userExperience",
    serviceIcon: "Layout",
  },
  {
    translationKey: "loadingTimes",
    serviceIcon: "Zap",
  },
  {
    translationKey: "scalability",
    serviceIcon: "TrendingUp",
  },
  {
    translationKey: "support",
    serviceIcon: "LifeBuoy",
  },
];

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
];

const WebsiteDevelopment = () => {
  const { t } = useTranslation("webDevelopment");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedModal, setSelectedModal] = useState("");

  const openModal = (item) => {
    setSelectedModal(item);
    setIsModalOpen(true);
  };

  return (
    <div>
      {/* Hero Section */}
      <div className=" relative h-screen flex flex-col sm:flex-row justify-center items-center overflow-hidden bg-blue-200">
        <video
          title="agence-creation-site-web-hero-animation"
          autoPlay
          loop
          muted
          playsInline
          className="absolute opacity-60 inset-0 w-full h-full object-contain z-20 mix-blend-multiply"
        >
          <source
            src="https://d3h46s6jorvpfj.cloudfront.net/agence-creation-site-web-hero-animation.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className=" relative z-20 flex w-full h-screen gap-5 justify-center items-center">
          <div className="mt-10  sm:mt-0 flex flex-col justify-center items-center">
            <h1 className="text-4xl max-w-screen-xl text-gray-800 sm:text-6xl text-center font-extrabold">
              {t("webDevelopment.hero.title")}
            </h1>
            <span className="max-w-screen-xl my-3 text-gray-800 text-2xl text-center font-bold">
              {t("webDevelopment.hero.subtitle")}
            </span>
            <HeroButtons />
          </div>
        </div>
      </div>

      {/* Technologies Section */}
      <Technologies technologies={TECHNOLOGIES} />

      {/* Key Features */}
      <div className="pb-16 bg-gray-50">
        <h2 className="text-4xl text-center font-bold text-gray-800">
          {t("webDevelopment.keyFeatures.title")}
          <span className="text-blue-600 bg-blue-200 p-2.5 rounded-2xl">
            {t("webDevelopment.keyFeatures.titleHighlight")}{" "}
          </span>{" "}
          {t("webDevelopment.keyFeatures.titleEnd")}
        </h2>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-4">
          {keyFeatures.map((feature, index) => {
            const Icon = {
              Search,
              Smartphone,
              Gauge,
              Server,
            }[feature.serviceIcon];
            const key = `webDevelopment.keyFeatures.items.${feature.translationKey}`;

            return (
              <div
                key={index}
                className="flex flex-col items-center shadow-[5px_5px_0px_4px_rgb(147,197,253),_-5px_-5px_0px_rgba(255,255,255,1)] p-6 rounded-2xl border border-slate-200 md:hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center justify-center p-2 bg-blue-200 rounded-2xl mb-4">
                  <Icon className="text-blue-600 w-14 h-14" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
                  {t(`${key}.name`)}
                </h3>
                <p className="text-gray-600 text-center">
                  {t(`${key}.description`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="pb-16 bg-gray-50">
        <h2 className="text-4xl text-center font-bold text-gray-800">
          <span className="text-blue-600 bg-blue-200 p-2.5 rounded-2xl">
            {t("webDevelopment.benefits.title")}
          </span>{" "}
          {t("webDevelopment.benefits.titleEnd")}
        </h2>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-4">
          {benefits.map((benefit, index) => {
            const Icon = {
              Zap,
              LifeBuoy,
              Layout,
              TrendingUp,
            }[benefit.serviceIcon];
            const key = `webDevelopment.benefits.items.${benefit.translationKey}`;

            return (
              <div
                key={index}
                className="flex flex-col items-center shadow-[5px_5px_0px_4px_rgb(147,197,253),_-5px_-5px_0px_rgba(255,255,255,1)] p-6 rounded-2xl border border-slate-200 md:hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center justify-center p-2 bg-blue-200 rounded-2xl mb-4">
                  <Icon className="text-blue-600 w-14 h-14" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
                  {t(`${key}.name`)}
                </h3>
                <p className="text-gray-600 text-center">
                  {t(`${key}.description`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Process Section */}
      <HowAgencyWorks steps={steps} namespace="webDevelopment" />

      {/* Portfolio Section */}
      <div className="max-w-7xl mx-auto px-4 pt-12">
        <h2 className="text-4xl text-center font-bold text-gray-800">
          {t("webDevelopment.portfolio.title")}{" "}
          <span className="text-blue-600 bg-blue-200 p-2.5 rounded-2xl">
            {t("webDevelopment.portfolio.titleHighlight")}
          </span>
        </h2>
        <div className="grid mt-10 grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className={`shadow-[5px_5px_0px_4px_rgb(147,197,253),_-5px_-5px_0px_rgba(255,255,255,1)] relative rounded-3xl p-2 ${item.bgColor}`}
            >
              <div className="relative aspect-[4/3] rounded-2xl -mr-1 overflow-hidden mb-3">
                <img
                  src={item.image}
                  alt={t(item.translationName)}
                  className="w-full h-full object-fill"
                />
              </div>
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">
                  {t(item.translationName)}
                </h3>
                <button
                  onClick={() => openModal(item)}
                  className="w-12 h-12 bg-blue-400 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors"
                >
                  <ArrowUpRight className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <PortfolioModal
        item={selectedModal}
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        t={t}
      />

      {/* FAQs Section */}
      <FAQs
        faqData={Object.keys(
          t("webDevelopment.faq.items", { returnObjects: true })
        ).map((key) => ({
          question: t(`webDevelopment.faq.items.${key}.question`),
          answer: t(`webDevelopment.faq.items.${key}.answer`),
        }))}
      />

      {/* Contact Section */}
      <Contact />
    </div>
  );
};

export default WebsiteDevelopment;
