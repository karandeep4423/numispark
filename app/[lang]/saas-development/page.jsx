"use client";
import React from "react";
import {
  Clock,
  Code,
  CheckCircle,
  Users,
  TrendingUp,
  Layout,
  Cloud,
  DollarSign,
  Headphones,
  Brain,
  PenTool,
  ArrowUpRight,
  Rocket,
} from "lucide-react";
import Contact from "@/components/contact-us/page";
import HeroButtons from "@/components/HeroButtons/page";
import FAQs from "@/components/Faqs/page";
import Technologies from "@/components/Technologies/page";
import HowAgencyWorks from "@/components/Process/page";
import { useTranslation } from "next-i18next";
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
    name: "Laravel",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
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
  {
    name: "Aws",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },
  {
    name: "Google Cloud",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg",
  },
  {
    name: "Microsoft Azure",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg",
  },
];
// Define arrays with translation keys and icon mappings
const WhyUs = [
  { translationKey: "multiTenant", serviceIcon: "Users" },
  { translationKey: "cloudSolutions", serviceIcon: "Cloud" },
  { translationKey: "agileDevelopment", serviceIcon: "Clock" },
  { translationKey: "support24", serviceIcon: "Headphones" },
];

const Benefits = [
  { translationKey: "timeToMarket", serviceIcon: "Clock" },
  { translationKey: "userFriendly", serviceIcon: "Layout" },
  { translationKey: "costSavings", serviceIcon: "DollarSign" },
  { translationKey: "scalability", serviceIcon: "TrendingUp" },
  { translationKey: "dedicatedSupport", serviceIcon: "Headphones" },
];

const portfolioItems = [
  {
    image: "/api/placeholder/400/400",
    translationKey: "uiUx",
    bgColor: "bg-violet-100",
    dotColor: "bg-violet-500",
  },
  {
    image: "/api/placeholder/400/400",
    translationKey: "appDesign",
    bgColor: "bg-emerald-600",
    dotColor: "bg-emerald-500",
  },
  {
    image: "/api/placeholder/400/400",
    translationKey: "appDesign",
    bgColor: "bg-amber-400",
    dotColor: "bg-amber-500",
  },
];

const steps = [
  {
    translationKey: "analysis",
    icon: <Brain className="text-white" size={80} />,
  },
  {
    translationKey: "wireframing",
    icon: <PenTool className="text-white" size={80} />,
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
    icon: <Rocket className="text-white" size={80} />,
  },
];

const SaaSDevelopment = () => {
  const { t } = useTranslation("saas");

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-screen bg-blue-200">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover mix-blend-darken"
        >
          <source src="/saas.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay Content */}
        <div className="relative z-20 flex w-full h-screen justify-center items-center">
          <div className="w-full px-4 flex flex-col items-center gap-6">
            <h1 className="text-5xl max-w-screen-xl sm:text-4xl lg:text-6xl text-center font-extrabold text-gray-200">
              {t("saas.hero.title")}
            </h1>
            <p className="max-w-screen-xl text-2xl text-center font-bold text-gray-200">
              {t("saas.hero.subtitle")}
            </p>
            <HeroButtons />
          </div>
        </div>
      </div>

      {/* Technologies Section */}
      <Technologies technologies={TECHNOLOGIES} />

      {/* Key Features Section */}
      <div className="pb-16 bg-gray-50">
        <h2 className="text-4xl text-center font-bold text-gray-800">
          {t("saas.keyFeatures.title")}
          <span className="text-blue-600 bg-blue-200 p-2 m-1 rounded-2xl">
            {t("saas.keyFeatures.titleHighlight")}
          </span>
          {t("saas.keyFeatures.titleEnd")}
        </h2>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-4">
          {WhyUs.map((service, index) => {
            const Icon = { Users, Cloud, Clock, Headphones }[
              service.serviceIcon
            ];
            const key = `saas.keyFeatures.items.${service.translationKey}`;
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
            {t("saas.benefits.title")}
          </span>
          {t("saas.benefits.titleEnd")}
        </h2>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-4">
          {Benefits.map((service, index) => {
            const Icon = { Layout, Headphones, DollarSign, TrendingUp, Clock }[
              service.serviceIcon
            ];
            const key = `saas.benefits.items.${service.translationKey}`;
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
      <HowAgencyWorks steps={steps} namespace="saas" />

      {/* Portfolio Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-4xl text-center font-bold text-gray-800">
          {t("saas.portfolio.title")}{" "}
          <span className="text-blue-600 bg-blue-200 p-2.5 rounded-2xl">
            {t("saas.portfolio.titleHighlight")}
          </span>
        </h2>
        <div className="grid mt-10 grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className={`shadow-[5px_5px_0px_4px_rgb(147,197,253),_-5px_-5px_0px_rgba(255,255,255,1)] relative rounded-3xl p-6 ${item.bgColor}`}
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                <img
                  src={item.image}
                  alt={t(`saas.portfolio.categories.${item.translationKey}`)}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">
                  {t(`saas.portfolio.categories.${item.translationKey}`)}
                </h3>
                <button className="w-12 h-12 bg-blue-400 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQs Section */}
      <FAQs
        faqData={Object.keys(t("saas.faq.items", { returnObjects: true })).map(
          (key) => ({
            question: t(`saas.faq.items.${key}.question`),
            answer: t(`saas.faq.items.${key}.answer`),
          })
        )}
      />

      {/* Contact Section */}
      <Contact />
    </div>
  );
};

export default SaaSDevelopment;
