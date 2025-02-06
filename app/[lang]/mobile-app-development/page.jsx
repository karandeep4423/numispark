"use client";
import React from "react";
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
  { translationKey: "uiUx", bgColor: "bg-violet-100" },
  { translationKey: "appDesign", bgColor: "bg-emerald-600" },
  { translationKey: "appDesign", bgColor: "bg-amber-400" },
];

const MobileDevelopment = () => {
  const { t } = useTranslation("mobileDevelopment");

  return (
    <div>
      {/* Hero Section */}
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), url('/mob-dev1.gif')`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="bg-blue-300 flex w-full flex-col h-screen gap-5 justify-center items-center"
      >
        <span className="text-5xl max-w-screen-xl text-gray-800 sm:text-6xl text-center font-extrabold">
          {t("mobileDevelopment.hero.title")}
        </span>
        <span className="text-gray-800 max-w-screen-xl text-2xl text-center font-bold">
          {t("mobileDevelopment.hero.subtitle")}
        </span>
        <HeroButtons />
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
      <div className="max-w-7xl mx-auto px-4 py-12">
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
              className={`shadow-[5px_5px_0px_4px_rgb(147,197,253),_-5px_-5px_0px_rgba(255,255,255,1)] relative rounded-3xl p-6 ${item.bgColor}`}
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                <img
                  src="/api/placeholder/400/400"
                  alt={t(
                    `mobileDevelopment.portfolio.categories.${item.translationKey}`
                  )}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">
                  {t(
                    `mobileDevelopment.portfolio.categories.${item.translationKey}`
                  )}
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
