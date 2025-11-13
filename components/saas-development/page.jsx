"use client";
import React, { useState } from "react";
import {
  ArrowUpRight,
  Code,
  Rocket,
  BookOpen,
  Layout,
  CloudUpload,
  Briefcase,
  Handshake,
  HeartHandshake,
  Lightbulb,
  CheckCircle2,
  Users,
  Cloud,
  Database,
  ShieldCheck,
  CreditCard,
  Server,
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

const Services = [
  { translationKey: "custom", icon: Server },
  { translationKey: "multiTenant", icon: Users },
  { translationKey: "cloud", icon: Cloud },
  { translationKey: "integrations", icon: Code },
  { translationKey: "security", icon: ShieldCheck },
  { translationKey: "billing", icon: CreditCard },
];

const AppTypes = [
  { translationKey: "b2b", icon: Briefcase },
  { translationKey: "b2c", icon: Users },
  { translationKey: "marketplace", icon: Server },
  { translationKey: "vertical", icon: Database },
];

const WhyUs = [
  { translationKey: "expertise", icon: Briefcase },
  { translationKey: "metrics", icon: Rocket },
  { translationKey: "scalable", icon: Handshake },
  { translationKey: "product", icon: HeartHandshake },
  { translationKey: "support", icon: Lightbulb },
];

const portfolioItems = [
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
];

export default function SaaSDevelopment() {
  const { t } = useTranslation("saas");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedModal, setSelectedModal] = useState("");

  const openModal = (item) => {
    setSelectedModal(item);
    setIsModalOpen(true);
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-screen bg-blue-200">
        {/* Video Background */}
        <video
          title="creation-developpement-saas"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover mix-blend-darken"
        >
          <source src="https://d3h46s6jorvpfj.cloudfront.net/creation-developpement-saas.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay Content */}
        <div className="relative z-20 flex w-full h-screen justify-center items-center">
          <div className="w-full px-4 flex flex-col items-center gap-6">
          <h1 className="text-5xl max-w-screen-xl text-gray-200 sm:text-6xl text-center font-extrabold">
              {t("saas.hero.title")}
            </h1>
            <span className="max-w-screen-xl my-3 text-gray-200 text-2xl text-center font-bold">
              {t("saas.hero.subtitle")}
            </span>
            {t("saas.hero.description") && (
              <p className="max-w-3xl text-center text-gray-200 text-lg mt-4">
                {t("saas.hero.description")}
              </p>
            )}
            <HeroButtons />
          </div>
        </div>
      </div>

      {/* Technologies Section */}
      <Technologies technologies={TECHNOLOGIES} />

      {/* Services Section */}
      <div className="pt-16 pb-16 bg-gray-50">
        <h2 className="text-4xl px-2 text-center font-bold text-gray-800">
          {t("saas.services.title")}
        </h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 px-4 max-w-6xl">
          {Services.map((service, index) => {
            const Icon = service.icon;
            const serviceData = t("saas.services.items", {
              returnObjects: true,
            })[index];
            const expertise = serviceData?.expertise || [];
            const conclusion = serviceData?.conclusion || "";

            return (
              <div
                key={index}
                className="flex flex-col p-6 shadow-[5px_5px_0px_4px_rgb(147,197,253),_-5px_-5px_0px_rgba(255,255,255,1)] rounded-2xl border border-gray-200 bg-white"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center justify-center p-2 bg-blue-200 rounded-2xl">
                    <Icon className="text-blue-600 w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800">
                    {serviceData?.name}
                  </h3>
                </div>
                <p className="text-gray-700 mb-4">{serviceData?.description}</p>
                <div className="mt-auto">
                  <p className="text-blue-600 font-semibold mb-3 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5" />
                    {serviceData?.expertiseTitle}
                  </p>
                  <ul className="space-y-2.5 mb-4">
                    {Array.isArray(expertise) &&
                      expertise.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-gray-600 text-sm"
                        >
                          <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                  </ul>
                  {conclusion && (
                    <p className="text-sm text-gray-600 italic bg-blue-50 p-3 rounded-lg">
                      {conclusion}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Process Section */}
      <HowAgencyWorks
        steps={[
          {
            translationKey: "0",
            icon: <BookOpen className="text-white" size={80} />,
          },
          {
            translationKey: "1",
            icon: <Layout className="text-white" size={80} />,
          },
          {
            translationKey: "2",
            icon: <Code className="text-white" size={80} />,
          },
          {
            translationKey: "3",
            icon: <CheckCircle2 className="text-white" size={80} />,
          },
          {
            translationKey: "4",
            icon: <CloudUpload className="text-white" size={80} />,
          },
        ]}
        namespace="saas"
      />

      {/* App Types / Solutions Section */}
      <div className="py-16 bg-gray-50">
        <h2 className="text-4xl text-center font-bold text-gray-800 mb-12 px-4">
          {t("saas.appTypes.title")}
        </h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 max-w-6xl">
          {AppTypes.map((appType, index) => {
            const Icon = appType.icon;
            const typeData = t("saas.appTypes.types", {
              returnObjects: true,
            })[index];
            const points = typeData?.points || [];

            return (
              <div
                key={index}
                className="flex flex-col p-6 shadow-[5px_5px_0px_4px_rgb(147,197,253),_-5px_-5px_0px_rgba(255,255,255,1)] rounded-2xl border border-gray-200 bg-white"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center justify-center p-2 bg-blue-200 rounded-2xl">
                    <Icon className="text-blue-600 w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800">
                    {typeData?.name}
                  </h3>
                </div>
                <p className="text-gray-700 mb-4">{typeData?.description}</p>
                <ul className="space-y-2.5">
                  {Array.isArray(points) &&
                    points.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-gray-600 text-sm"
                      >
                        <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16 bg-gray-50">
        <h2 className="text-4xl text-center font-bold text-gray-800 mb-12 px-4">
          {t("saas.whyUs.title")}
        </h2>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-4">
          {WhyUs.map((reason, index) => {
            const Icon = reason.icon;
            const reasonData = t("saas.whyUs.reasons", {
              returnObjects: true,
            })[index];

            return (
              <div
                key={index}
                className="flex flex-col items-center shadow-[5px_5px_0px_4px_rgb(147,197,253),_-5px_-5px_0px_rgba(255,255,255,1)] p-6 rounded-2xl border border-slate-200 md:hover:shadow-lg transition-shadow duration-300 bg-white"
              >
                <div className="flex items-center justify-center p-2 bg-blue-200 rounded-2xl mb-4">
                  <Icon className="text-blue-600 w-14 h-14" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
                  {reasonData?.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {reasonData?.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

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
        title={t("saas.faq.title")}
        faqData={Object.keys(
          t("saas.faq.items", { returnObjects: true })
        ).map((key) => ({
          question: t(`saas.faq.items.${key}.question`),
          answer: t(`saas.faq.items.${key}.answer`),
        }))}
      />

      {/* Contact Section */}
      <FormCTA />
    </div>
  );
}
