"use client";
import React, { useState } from "react";
import {
  Pen,
  Instagram,
  Palette,
  ArrowUpRight,
  Search,
  Brain,
  Target,
  PenTool,
  CloudDownload,
  Briefcase,
  Handshake,
  HeartHandshake,
  Users,
  Lightbulb,
  CheckCircle2,
} from "lucide-react";
import FormCTA from "@/components/Form-CTA/page";
import HeroButtons from "@/components/HeroButtons/page";
import FAQs from "@/components/Faqs/page";
import Technologies from "@/components/Technologies/page";
import HowAgencyWorks from "@/components/Process/page";
import { useTranslation } from "next-i18next";
import PortfolioModal from "@/components/PortfolioModal/page";

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
  { serviceIcon: PenTool, translationKey: 0 },
  { serviceIcon: Instagram, translationKey: 1 },
  { serviceIcon: Palette, translationKey: 2 },
];

const WhyUs = [
  { serviceIcon: Briefcase, translationKey: 0 },
  { serviceIcon: Handshake, translationKey: 1 },
  { serviceIcon: HeartHandshake, translationKey: 2 },
  { serviceIcon: Users, translationKey: 3 },
];

const getSteps = (processSteps) => [
  { icon: <Brain size={80} />, title: processSteps[0]?.title, description: processSteps[0]?.description },
  { icon: <Search size={80} />, title: processSteps[1]?.title, description: processSteps[1]?.description },
  { icon: <Pen size={80} />, title: processSteps[2]?.title, description: processSteps[2]?.description },
  { icon: <CloudDownload size={80} />, title: processSteps[3]?.title, description: processSteps[3]?.description },
];

// Portfolio items remain static if only images/categories are needed
const portfolioItems = [
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
];

export default function SocialMediaLogoDesign() {
  const { t } = useTranslation("socialMediaLogoDesign");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedModal, setSelectedModal] = useState("");

  // Get process steps from translations
  const processSteps = t("socialMediaLogoDesign.process.steps", { returnObjects: true });
  const steps = getSteps(processSteps);

  const openModal = (item) => {
    setSelectedModal(item);
    setIsModalOpen(true);
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-screen flex flex-col sm:flex-row justify-center items-center overflow-hidden bg-blue-200">
        <video
          title="design-logo-et-posts-reseaux-sociaux"
          autoPlay
          loop
          muted
          playsInline
          className="absolute opacity-60 inset-0 w-full h-full object-contain z-20 mix-blend-multiply"
        >
          <source
            src="https://d3h46s6jorvpfj.cloudfront.net/design-logo-et-posts-reseaux-sociaux.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-20 flex w-full h-screen gap-5 justify-center items-center flex-col px-4">
          <h2 className="text-2xl max-w-screen-xl text-gray-800 text-center font-bold">
            {t("socialMediaLogoDesign.hero.subtitle")}
          </h2>
          <h1 className="text-5xl max-w-screen-xl text-gray-800 sm:text-6xl text-center font-extrabold">
            {t("socialMediaLogoDesign.hero.title")}
          </h1>
          <p className="max-w-3xl text-gray-700 text-lg text-center font-medium">
            {t("socialMediaLogoDesign.hero.description")}
          </p>
          <HeroButtons />
        </div>
      </div>

      {/* Technologies Section */}
      <Technologies technologies={TECHNOLOGIES} />

      {/* Services Section */}
      <div className="py-16 bg-gray-50">
        <h2 className="text-4xl px-2 text-center font-bold text-gray-800 mb-12">
          Nos services de{" "}
          <span className="text-blue-600 bg-blue-200 p-1.5 rounded-2xl">
            design graphique
          </span>
        </h2>
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-4">
          {Services.map((service, index) => {
            const Icon = service.serviceIcon;
            const serviceData = t("socialMediaLogoDesign.services.items", {
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
        namespace="socialMediaLogoDesign"
        title={t("socialMediaLogoDesign.process.title")}
      />

      {/* Why Choose Us Section */}
      <div className="py-16 bg-white">
        <h2 className="text-4xl px-2 text-center font-bold text-gray-800 mb-12">
          {t("socialMediaLogoDesign.whyUs.title")}
        </h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 px-4">
          {WhyUs.map((reason, index) => {
            const Icon = reason.serviceIcon;
            const reasonData = t("socialMediaLogoDesign.whyUs.reasons", {
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
          {t("socialMediaLogoDesign.portfolio.sectionTitle")}{" "}
          <span className="text-blue-600 bg-blue-200 p-2.5 rounded-2xl">
            {t("socialMediaLogoDesign.portfolio.sectionHighlight")}
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
        title={t("socialMediaLogoDesign.faq.title")}
        faqData={Object.keys(
          t("socialMediaLogoDesign.faq.items", { returnObjects: true })
        ).map((key) => ({
          question: t(`socialMediaLogoDesign.faq.items.${key}.question`),
          answer: t(`socialMediaLogoDesign.faq.items.${key}.answer`),
        }))}
      />

      {/* Contact Section */}
      <FormCTA />
    </div>
  );
}
