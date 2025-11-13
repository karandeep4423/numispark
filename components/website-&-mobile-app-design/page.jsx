"use client";
import {
  Monitor,
  Smartphone,
  Layers,
  Users,
  Target,
  Accessibility,
  Briefcase,
  Handshake,
  HeartHandshake,
  Lightbulb,
  CheckCircle2,
  BookOpen,
  Layout,
  Code,
  CloudUpload,
  ArrowUpRight,
} from "lucide-react";
import FormCTA from "@/components/Form-CTA/page";
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

const Services = [
  { serviceIcon: Monitor, translationKey: 0 },
  { serviceIcon: Smartphone, translationKey: 1 },
  { serviceIcon: Layers, translationKey: 2 },
  { serviceIcon: Users, translationKey: 3 },
  { serviceIcon: Target, translationKey: 4 },
  { serviceIcon: Accessibility, translationKey: 5 },
];

const AppTypes = [
  { serviceIcon: Briefcase, translationKey: 0 },
  { serviceIcon: Monitor, translationKey: 1 },
  { serviceIcon: Smartphone, translationKey: 2 },
  { serviceIcon: Layout, translationKey: 3 },
  { serviceIcon: Layers, translationKey: 4 },
];

const WhyUs = [
  { serviceIcon: Briefcase, translationKey: 0 },
  { serviceIcon: Handshake, translationKey: 1 },
  { serviceIcon: HeartHandshake, translationKey: 2 },
  { serviceIcon: Target, translationKey: 3 },
  { serviceIcon: Users, translationKey: 4 },
];

const getSteps = (processSteps) => [
  { icon: <BookOpen size={80} />, title: processSteps[0]?.title, description: processSteps[0]?.description },
  { icon: <Layout size={80} />, title: processSteps[1]?.title, description: processSteps[1]?.description },
  { icon: <Code size={80} />, title: processSteps[2]?.title, description: processSteps[2]?.description },
  { icon: <Users size={80} />, title: processSteps[3]?.title, description: processSteps[3]?.description },
  { icon: <CloudUpload size={80} />, title: processSteps[4]?.title, description: processSteps[4]?.description },
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
  const { t } = useTranslation(["webDesign", "websiteMobileDesign"]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedModal, setSelectedModal] = useState("");

  // Get process steps from translations
  const processSteps = t("webDesign:process.steps", { returnObjects: true });
  const steps = getSteps(processSteps);

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
        <h2 className="text-2xl max-w-screen-xl text-gray-800 text-center font-bold z-10">
          {t("webDesign:hero.subtitle")}
        </h2>
        <h1 className="text-5xl max-w-screen-xl px-4 text-gray-800 sm:text-6xl text-center font-extrabold z-10">
          {t("webDesign:hero.title")}
        </h1>
        <p className="max-w-3xl px-4 text-gray-700 text-lg text-center font-medium z-10">
          {t("webDesign:hero.description")}
        </p>
        <HeroButtons />
      </div>

      {/* Technologies Section */}
      <Technologies technologies={TECHNOLOGIES} />

      {/* Services Section */}
      <div className="py-16 bg-gray-50">
        <h2 className="text-4xl px-2 text-center font-bold text-gray-800 mb-12">
          Nos services de{" "}
          <span className="text-blue-600 bg-blue-200 p-1.5 rounded-2xl">
            web & mobile design
          </span>
        </h2>
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-4">
          {Services.map((service, index) => {
            const Icon = service.serviceIcon;
            const serviceData = t("webDesign:services.items", {
              returnObjects: true,
            })[service.translationKey];

            return (
              <div
                key={index}
                className="p-6 bg-white shadow-[5px_5px_0px_4px_rgb(147,197,253),_-5px_-5px_0px_rgba(255,255,255,1)] rounded-2xl border border-gray-200 transition-shadow duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center justify-center p-3 bg-blue-200 rounded-xl">
                    <Icon className="text-blue-600 w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {serviceData.name}
                  </h3>
                </div>
                <p className="text-gray-700 mb-4">{serviceData.description}</p>
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Lightbulb className="w-5 h-5 text-blue-600" />
                    <h4 className="font-semibold text-gray-800">
                      {serviceData.expertiseTitle}
                    </h4>
                  </div>
                  <ul className="space-y-2">
                    {serviceData.expertise.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-sm italic text-gray-700 bg-blue-50 p-3 rounded-lg">
                  {serviceData.conclusion}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Process Section */}
      <HowAgencyWorks 
        steps={steps} 
        namespace="webDesign"
        title={t("webDesign:process.title")}
      />

      {/* App Types Section */}
      <div className="py-16 bg-gray-50">
        <h2 className="text-4xl px-2 text-center font-bold text-gray-800 mb-12">
          {t("webDesign:appTypes.title")}
        </h2>
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-4">
          {AppTypes.map((type, index) => {
            const Icon = type.serviceIcon;
            const typeData = t("webDesign:appTypes.types", {
              returnObjects: true,
            })[type.translationKey];

            return (
              <div
                key={index}
                className="p-6 bg-white shadow-[5px_5px_0px_4px_rgb(147,197,253),_-5px_-5px_0px_rgba(255,255,255,1)] rounded-2xl border border-gray-200 transition-shadow duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center justify-center p-3 bg-blue-200 rounded-xl">
                    <Icon className="text-blue-600 w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {typeData.name}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {typeData.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16 bg-white">
        <h2 className="text-4xl px-2 text-center font-bold text-gray-800 mb-12">
          {t("webDesign:whyUs.title")}
        </h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {WhyUs.map((reason, index) => {
            const Icon = reason.serviceIcon;
            const reasonData = t("webDesign:whyUs.reasons", {
              returnObjects: true,
            })[reason.translationKey];

            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-gray-50 shadow-[5px_5px_0px_4px_rgb(147,197,253),_-5px_-5px_0px_rgba(255,255,255,1)] rounded-2xl border border-gray-200 transition-shadow duration-300"
              >
                <div className="flex items-center justify-center p-4 bg-blue-200 rounded-2xl mb-4">
                  <Icon className="text-blue-600 w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {reasonData.title}
                </h3>
                <p className="text-gray-600">{reasonData.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Portfolio Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 bg-gray-50">
        <h2 className="text-4xl text-center font-bold text-gray-800">
          {t("websiteMobileDesign:websiteMobileDesign.portfolio.title")}{" "}
          <span className="text-blue-600 bg-blue-200 p-2.5 rounded-2xl">
            {t(
              "websiteMobileDesign:websiteMobileDesign.portfolio.titleHighlight"
            )}
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
                  alt={t(`websiteMobileDesign:${item.translationName}`)}
                  className="w-full h-full object-fill"
                />
              </div>
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">
                  {t(`websiteMobileDesign:${item.translationName}`)}
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
        t={(key) => t(`websiteMobileDesign:${key}`)}
      />

      {/* FAQs Section */}
      <FAQs
        title={t("webDesign:faq.title")}
        faqData={Object.keys(
          t("webDesign:faq.items", { returnObjects: true })
        ).map((key) => ({
          question: t(`webDesign:faq.items.${key}.question`),
          answer: t(`webDesign:faq.items.${key}.answer`),
        }))}
      />

      {/* Contact Section */}
      <FormCTA />
    </div>
  );
}
