"use client";
import React, { useState } from "react";
import {
  TrendingUp,
  CloudUpload,
  BookOpen,
  CheckCircle,
  ShieldCheck,
  Code,
  Smartphone,
  Layout,
  UserCheck,
  Layers,
  Zap,
  RefreshCw,
  Shield,
  ArrowUpRight,
} from "lucide-react";
import Contact from "@/components/contact-us/page";
import HeroButtons from "@/components/HeroButtons/page";
import FAQs from "@/components/Faqs/page";
import Technologies from "@/components/Technologies/page";
import HowAgencyWorks from "@/components/Process/page";
import { useTranslation } from "next-i18next";
import PortfolioModal from "@/components/PortfolioModal/page";

const TECHNOLOGIES = [
  {
    name: "React Native",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "Kotlin",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg",
  },
  {
    name: "Swift",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg",
  },
  {
    name: "Flutter",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
  },
];

// Update data arrays
const steps = [
  { translationKey: "analysis", icon: <BookOpen size={80} /> },
  { translationKey: "wireframing", icon: <Layout size={80} /> },
  { translationKey: "development", icon: <Code size={80} /> },
  { translationKey: "testing", icon: <CheckCircle size={80} /> },
  { translationKey: "deployment", icon: <CloudUpload size={80} /> },
];

const Features = [
  { translationKey: "nativeApps", serviceIcon: "Smartphone" },
  { translationKey: "crossPlatform", serviceIcon: "Layers" },
  { translationKey: "scalableSecure", serviceIcon: "Shield" },
  { translationKey: "speedOptimization", serviceIcon: "Zap" },
];

const Benefits = [
  { translationKey: "userExperience", serviceIcon: "UserCheck" },
  { translationKey: "expertDevelopers", serviceIcon: "Code" },
  { translationKey: "appStoreSuccess", serviceIcon: "TrendingUp" },
  { translationKey: "fastSecure", serviceIcon: "ShieldCheck" },
  { translationKey: "updatesMaintenance", serviceIcon: "RefreshCw" },
];

const portfolioItems = [
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
];

const MobileDevelopment = () => {
  const { t } = useTranslation("mobileDevelopment");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedModal, setSelectedModal] = useState("");

  const openModal = (item) => {
    setSelectedModal(item);
    setIsModalOpen(true);
  };
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-screen flex flex-col sm:flex-row justify-center items-center overflow-hidden bg-blue-200">
        <video
          title="developpement-et-creation-applications-mobiles"
          autoPlay
          loop
          muted
          playsInline
          className="absolute opacity-60 inset-0 w-full h-full object-contain z-20 mix-blend-multiply"
        >
          <source
            src="https://d3h46s6jorvpfj.cloudfront.net/developpement-et-creation-applications-mobiles.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-20 flex w-full h-screen gap-5 justify-center items-center">
          <div className="mt-10 sm:mt-0 flex flex-col justify-center items-center">
            <h1 className="text-5xl max-w-screen-xl text-gray-800 sm:text-6xl text-center font-extrabold">
              {t("mobileDevelopment.hero.title")}
            </h1>
            <span className="max-w-screen-xl my-3 text-gray-800 text-2xl text-center font-bold">
              {t("mobileDevelopment.hero.subtitle")}
            </span>
            <HeroButtons />
          </div>
        </div>
      </div>

      {/* Technologies Section */}
      <Technologies technologies={TECHNOLOGIES} />

      {/* Key Features */}
      <div className="py-16 bg-gray-50">
        <h2 className="text-4xl text-center font-bold text-gray-800">
          {t("mobileDevelopment.keyFeatures.title")}
          <span className="text-blue-600 bg-blue-200 p-2.5 rounded-2xl">
            {t("mobileDevelopment.keyFeatures.titleHighlight")}
          </span>{" "}
          {t("mobileDevelopment.keyFeatures.titleEnd")}
        </h2>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-4">
          {Features.map((feature, index) => {
            const Icon = {
              Smartphone,
              Layers,
              Shield,
              Zap,
            }[feature.serviceIcon];
            const key = `mobileDevelopment.keyFeatures.items.${feature.translationKey}`;

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
            {t("mobileDevelopment.benefits.title")}
          </span>{" "}
          {t("mobileDevelopment.benefits.titleEnd")}
        </h2>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-4">
          {Benefits.map((benefit, index) => {
            const Icon = {
              UserCheck,
              Code,
              TrendingUp,
              ShieldCheck,
              RefreshCw,
            }[benefit.serviceIcon];
            const key = `mobileDevelopment.benefits.items.${benefit.translationKey}`;

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
      <HowAgencyWorks steps={steps} namespace="mobileDevelopment" />

      {/* Portfolio Section */}
      <div className="max-w-7xl mx-auto px-4 pt-12">
        <h2 className="text-4xl text-center font-bold text-gray-800">
          {t("mobileDevelopment.portfolio.title")}{" "}
          <span className="text-blue-600 bg-blue-200 p-2.5 rounded-2xl">
            {t("mobileDevelopment.portfolio.titleHighlight")}
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
          t("mobileDevelopment.faq.items", { returnObjects: true })
        ).map((key) => ({
          question: t(`mobileDevelopment.faq.items.${key}.question`),
          answer: t(`mobileDevelopment.faq.items.${key}.answer`),
        }))}
      />

      {/* Contact Section */}
      <Contact />
    </div>
  );
};

export default MobileDevelopment;
