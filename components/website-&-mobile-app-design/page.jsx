"use client";
import {
  Users,
  Play,
  GitBranch,
  Zap,
  Timer,
  Heart,
  Box,
  ArrowUpRight,
  Search,
  Palette,
  TrendingUp,
  Smartphone,
  PenTool,
  Rocket,
  Maximize,
  Eye,
  Mouse,
} from "lucide-react";
import Contact from "@/components/contact-us/page";
import HeroButtons from "@/components/HeroButtons/page";
import FAQs from "@/components/Faqs/page";
import Technologies from "@/components/Technologies/page";
import HowAgencyWorks from "@/components/Process/page";
import { useTranslation } from "next-i18next";
import PortfolioModal from "@/components/PortfolioModal/page";
import React, { useState } from "react";

const TECHNOLOGIES = [
  {
    name: "Figma",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
  },
  {
    name: "Sketch",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sketch/sketch-original.svg",
  },
  {
    name: "Adobe XD",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xd/xd-original.svg",
  },
];
// Update data arrays to use translation keys
const Services = [
  { serviceIcon: Palette, translationKey: "websiteDesign" },
  { serviceIcon: Smartphone, translationKey: "mobileAppDesign" },
  { serviceIcon: Users, translationKey: "uiUxConsulting" },
  { serviceIcon: Box, translationKey: "designSystems" },
];

const features = [
  { serviceIcon: Maximize, translationKey: "responsiveDesign" },
  { serviceIcon: Play, translationKey: "interactivePrototypes" },
  { serviceIcon: GitBranch, translationKey: "userFlowOptimization" },
  { serviceIcon: Zap, translationKey: "performanceFocus" },
];

const WhyUs = [
  { serviceIcon: Mouse, translationKey: "intuitiveInterfaces" },
  { serviceIcon: Eye, translationKey: "optimizedAccessibility" },
  { serviceIcon: Palette, translationKey: "brandConsistency" },
  { serviceIcon: Timer, translationKey: "rapidDevelopment" },
  { serviceIcon: Heart, translationKey: "userSatisfaction" },
  { serviceIcon: TrendingUp, translationKey: "higherConversions" },
];

const steps = [
  { icon: <Search size={80} />, translationKey: "research" },
  { icon: <Box size={80} />, translationKey: "wireframing" },
  { icon: <Palette size={80} />, translationKey: "visualDesign" },
  { icon: <PenTool size={80} />, translationKey: "prototyping" },
  { icon: <Rocket size={80} />, translationKey: "testingLaunch" },
];

const portfolioItems = [
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
];

export default function WebsiteMobileDesign() {
  const { t } = useTranslation("websiteMobileDesign");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedModal, setSelectedModal] = useState("");

  const openModal = (item) => {
    setSelectedModal(item);
    setIsModalOpen(true);
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="flex relative bg-blue-200 flex-col h-screen gap-5 justify-center items-center">
        <video
          title="web-et-mobile-design-hero-animation"
          autoPlay
          loop
          muted
          playsInline
          className="absolute opacity-60 inset-0 w-full h-full object-cover mix-blend-multiply"
        >
          <source
            src="https://d3h46s6jorvpfj.cloudfront.net/web-et-mobile-design-hero-animation.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <h1 className="text-5xl max-w-screen-xl text-gray-800 sm:text-6xl text-center font-extrabold">
          {t("websiteMobileDesign.hero.title")}{" "}
          <span className="text-blue-600 p-1.5 rounded-2xl">
            {t("websiteMobileDesign.hero.titleHighlight")}
          </span>
        </h1>
        {/* <span className="max-w-screen-xl text-gray-800 text-2xl text-center font-bold">
          {t("websiteMobileDesign.hero.subtitle")}
        </span> */}
        <HeroButtons />
      </div>

      {/* Services Section */}
      <div className="pt-16 bg-gray-50">
        <h2 className="text-4xl px-2 text-center font-bold text-gray-800">
          {t("websiteMobileDesign.services.title")}{" "}
          <span className="text-blue-600 bg-blue-200 p-1.5 rounded-2xl">
            {t("websiteMobileDesign.services.titleHighlight")}
          </span>
        </h2>
        <p className="px-2 text-xl text-center font-medium text-gray-600 mt-4">
          {t("websiteMobileDesign.services.subtitle")}
        </p>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-4">
          {Services.map((service, index) => {
            const Icon = service.serviceIcon;
            const key = `websiteMobileDesign.services.items.${service.translationKey}`;

            return (
              <div
                key={index}
                className="flex flex-col items-center p-6 shadow-[5px_5px_0px_4px_rgb(147,197,253),_-5px_-5px_0px_rgba(255,255,255,1)] rounded-2xl border border-gray-200 md:hover:shadow-lg transition-shadow duration-300"
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

      {/* Technologies Section */}
      <Technologies technologies={TECHNOLOGIES} />

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <h2 className="text-4xl text-center font-bold text-gray-800">
          {t("websiteMobileDesign.features.title")}{" "}
          <span className="text-blue-600 bg-blue-200 p-2.5 rounded-2xl">
            {t("websiteMobileDesign.features.titleHighlight")}
          </span>
          {t("websiteMobileDesign.features.titleEnd")}{" "}
        </h2>
        <p className="text-xl text-center font-medium text-gray-600 mt-4">
          {t("websiteMobileDesign.features.subtitle")}
        </p>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-4">
          {features.map((feature, index) => {
            const Icon = feature.serviceIcon;
            const key = `websiteMobileDesign.features.items.${feature.translationKey}`;

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
            {t("websiteMobileDesign.benefits.title")}
          </span>
          {t("websiteMobileDesign.benefits.titleEnd")}
        </h2>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-4">
          {WhyUs.map((benefit, index) => {
            const Icon = benefit.serviceIcon;
            const key = `websiteMobileDesign.benefits.items.${benefit.translationKey}`;

            return (
              <div
                key={index}
                className="flex flex-col items-center shadow-[5px_5px_0px_4px_rgb(147,197,253),_-5px_-5px_0px_rgba(255,255,255,1)] p-6 rounded-2xl border border-slate-200 md:hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center justify-center p-2 bg-blue-200 rounded-2xl mb-4">
                  <Icon className="text-blue-600 w-14 h-14" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
                  {t(`${key}.title`)}
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
      <HowAgencyWorks steps={steps} namespace="websiteMobileDesign" />

      {/* Portfolio Section */}
      <div className="max-w-7xl mx-auto px-4 pt-12">
        <h2 className="text-4xl text-center font-bold text-gray-800">
          {t("websiteMobileDesign.portfolio.title")}{" "}
          <span className="text-blue-600 bg-blue-200 p-2.5 rounded-2xl">
            {t("websiteMobileDesign.portfolio.titleHighlight")}
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
          t("websiteMobileDesign.faq.items", { returnObjects: true })
        ).map((key) => ({
          question: t(`websiteMobileDesign.faq.items.${key}.question`),
          answer: t(`websiteMobileDesign.faq.items.${key}.answer`),
        }))}
      />

      {/* Contact Section */}
      <Contact />
    </div>
  );
}
