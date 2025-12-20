"use client";
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
  ShoppingCart,
  Smartphone,
  Globe,
  Store,
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
    name: "Woo Commerce",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/woocommerce/woocommerce-original.svg",
  },
  {
    name: "Shopify",
    logo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTYiIGhlaWdodD0iMjkyIiB2aWV3Qm94PSIwIDAgMjU2IDI5MiI+PHBhdGggZmlsbD0iIzk1YmY0NiIgZD0iTTIyMy43NzQgNTcuMzRjLS4yMDEtMS40Ni0xLjQ4LTIuMjY4LTIuNTM3LTIuMzU3YTE5NjE0IDE5NjE0IDAgMCAwLTIzLjM4My0xLjc0M3MtMTUuNTA3LTE1LjM5NS0xNy4yMDktMTcuMDk5Yy0xLjcwMy0xLjcwMy01LjAyOS0xLjE4NS02LjMyLS44MDVjLS4xOS4wNTYtMy4zODggMS4wNDMtOC42NzggMi42OGMtNS4xOC0xNC45MDYtMTQuMzIyLTI4LjYwNC0zMC40MDUtMjguNjA0Yy0uNDQ0IDAtLjkwMS4wMTgtMS4zNTguMDQ0QzEyOS4zMSAzLjQwNyAxMjMuNjQ0Ljc3OSAxMTguNzUuNzc5Yy0zNy40NjUgMC01NS4zNjQgNDYuODM1LTYwLjk3NiA3MC42MzVjLTE0LjU1OCA0LjUxMS0yNC45IDcuNzE4LTI2LjIyMSA4LjEzM2MtOC4xMjYgMi41NDktOC4zODMgMi44MDUtOS40NSAxMC40NjJDMjEuMyA5NS44MDYuMDM4IDI2MC4yMzUuMDM4IDI2MC4yMzVsMTY1LjY3OCAzMS4wNDJsODkuNzctMTkuNDJTMjIzLjk3MyA1OC44IDIyMy43NzUgNTcuMzRNMTU2LjQ5IDQwLjg0OGwtMTQuMDE5IDQuMzM5Yy4wMDUtLjk4OC4wMS0xLjk2LjAxLTMuMDIzYzAtOS4yNjQtMS4yODYtMTYuNzIzLTMuMzQ5LTIyLjYzNmM4LjI4NyAxLjA0IDEzLjgwNiAxMC40NjkgMTcuMzU4IDIxLjMybS0yNy42MzgtMTkuNDgzYzIuMzA0IDUuNzczIDMuODAyIDE0LjA1OCAzLjgwMiAyNS4yMzhjMCAuNTcyLS4wMDUgMS4wOTUtLjAxIDEuNjI0Yy05LjExNyAyLjgyNC0xOS4wMjQgNS44OS0yOC45NTMgOC45NjZjNS41NzUtMjEuNTE2IDE2LjAyNS0zMS45MDggMjUuMTYxLTM1LjgyOG0tMTEuMTMxLTEwLjUzN2MxLjYxNyAwIDMuMjQ2LjU0OSA0LjgwNSAxLjYyMmMtMTIuMDA3IDUuNjUtMjQuODc3IDE5Ljg4LTMwLjMxMiA0OC4yOTdsLTIyLjg4NiA3LjA4OEM3NS42OTQgNDYuMTYgOTAuODEgMTAuODI4IDExNy43MiAxMC44MjgiLz48cGF0aCBmaWxsPSIjNWU4ZTNlIiBkPSJNMjIxLjIzNyA1NC45ODNhMTk2MTQgMTk2MTQgMCAwIDAtMjMuMzgzLTEuNzQzcy0xNS41MDctMTUuMzk1LTE3LjIwOS0xNy4wOTljLS42MzctLjYzNC0xLjQ5Ni0uOTU5LTIuMzk0LTEuMDk5bC0xMi41MjcgMjU2LjIzM2w4OS43NjItMTkuNDE4UzIyMy45NzIgNTguOCAyMjMuNzc0IDU3LjM0Yy0uMjAxLTEuNDYtMS40OC0yLjI2OC0yLjUzNy0yLjM1NyIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xMzUuMjQyIDEwNC41ODVsLTExLjA2OSAzMi45MjZzLTkuNjk4LTUuMTc2LTIxLjU4Ni01LjE3NmMtMTcuNDI4IDAtMTguMzA1IDEwLjkzNy0xOC4zMDUgMTMuNjkzYzAgMTUuMDM4IDM5LjIgMjAuOCAzOS4yIDU2LjAyNGMwIDI3LjcxMy0xNy41NzcgNDUuNTU4LTQxLjI3NyA0NS41NThjLTI4LjQ0IDAtNDIuOTg0LTE3LjctNDIuOTg0LTE3LjdsNy42MTUtMjUuMTZzMTQuOTUgMTIuODM1IDI3LjU2NSAxMi44MzVjOC4yNDMgMCAxMS41OTYtNi40OSAxMS41OTYtMTEuMjMyYzAtMTkuNjE2LTMyLjE2LTIwLjQ5MS0zMi4xNi01Mi43MjRjMC0yNy4xMjkgMTkuNDcyLTUzLjM4MiA1OC43NzgtNTMuMzgyYzE1LjE0NSAwIDIyLjYyNyA0LjMzOCAyMi42MjcgNC4zMzgiLz48L3N2Zz4=",
  },
  {
    name: "PrestaShop",
    logo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiB2aWV3Qm94PSIwIDAgMjU2IDI1NiI+PHBhdGggZmlsbD0iI0RGMDA2NyIgZD0iTTIwOC4zOSA4MS4yNWMtMTEuNDctMy41NC0yNC4zNy01Ljk2LTM4LjUxLTYuOTNjLTExLjU5LS43OS0yNC4xNy0uNTgtMzUuMTEgMS41MWMtOS42MyAxLjg0LTE4LjU5IDUuNDItMjYuMjMgMTAuMDdjLTguNDggNS4xNy0xNS4wNSAxMS44LTE5LjY1IDE5LjI3Yy02LjM2IDEwLjMzLTkuMjQgMjMuMTMtNy43NyAzNS4zOWMxLjg4IDE1LjcxIDkuNTMgMjcuNDMgMjAuMTYgMzUuNTRjOC4yIDYuMjQgMTcuNjMgMTAuMzMgMjcuNzMgMTIuNjdjNy42NCAxLjc3IDE1LjU3IDIuNTEgMjMuMjIgMi43OWMxMC40NC4zOSAyMC42My0uMTQgMzAuMTgtMS45MmM4LjAzLTEuNDkgMTUuNi0zLjg1IDIyLjQyLTcuMzJjNi43NC0zLjQzIDEyLjc0LTcuOTggMTcuNTMtMTMuOGM1LjctNi45MyA5Ljc0LTE1LjMyIDExLjYxLTI0Ljg1YzIuMjUtMTEuNSAxLjI4LTIzLjc1LTMuMjctMzUuMDNjLTMuNjUtOS4wNS05LjM1LTE2LjgtMTYuNzItMjIuNjVjLTEuNjItMS4yOS0zLjMxLTIuNTEtNS4wOC0zLjY1bC0uNTEtLjA5Wm0tMzAuNjcgNzkuNjNjLTguMzggMi4xLTE3LjEyIDIuNTUtMjUuNzggMS44NmMtOC42NS0uNjktMTcuMDQtMi44My0yNC41LTYuNzVjLTYuMDEtMy4xNS0xMS4yNC03LjQ5LTE1LjA5LTEyLjgyYy00Ljg4LTYuNzYtNy4zNS0xNC44OC02Ljk4LTIzLjE3Yy4yNi01Ljc1IDEuNjUtMTEuMzYgNC4zMy0xNi40YzIuNjItNC45MyA2LjM4LTkuMjMgMTEuMTEtMTIuNTZjNS4yNS0zLjcgMTEuMzMtNi4yMyAxNy44My03LjUyYzcuNzMtMS41NCAxNS44NC0xLjU0IDIzLjU2LS43NWM4Ljg1LjkgMTcuMzIgMi45IDI0Ljc1IDYuMzFjNS40NSAyLjUgMTAuMjggNS44NyAxNC4wNSAxMC4wOGM0LjQ5IDUuMDIgNy41NCAxMS4yIDguNjQgMTcuODljMS40NSA4Ljg0LS4xIDE3LjktNC40OCAyNS42N2MtMy45IDYuOTMtOS42MSAxMi42LTE2LjYzIDE2LjM5Yy0zLjQxIDEuODQtNy4wNCAzLjI4LTEwLjgxIDQuMjdaIi8+PHBhdGggZmlsbD0iI0RGMDA2NyIgZD0iTTk2LjgyIDIwNi4yOGMtNy41OC0xLjY4LTE0LjktNC4zNi0yMS42Mi04LjM1Yy05LjU1LTUuNjctMTcuNDctMTMuOTctMjIuNzQtMjMuOTFjLTYuNDItMTIuMTMtOC42Mi0yNi40MS02LjI1LTQwLjE5YzEuNzctMTAuMjggNS45LTIwLjA2IDEyLjU2LTI4LjE2YzYuNTYtNy45OCAxNS4yMi0xNC4xNCAyNC45Mi0xOC4wNWM3Ljk5LTMuMjIgMTYuNjEtNS4xMSAyNS40NC01LjgxYzExLjI0LS44OSAyMi44OS0uMDYgMzMuNTkgMi40OGM4LjQzIDIgMTYuMzggNS4xMSAyMy4zMiA5LjM3YzMuNzEgMi4yOCA3LjEyIDQuOTEgMTAuMTggNy44OWMtMTMuODctLjUtMjcuMzIgMS4xOS0zOS40OSA1Ljk2Yy0xMS4xNiA0LjM4LTIwLjcyIDExLjUxLTI3Ljg4IDIwLjY3Yy01LjQyIDYuOTMtOS4yMiAxNS4xLTEwLjg4IDIzLjc5Yy0yLjE3IDExLjM2LS42NyAyMy4zNCA0LjggMzMuNjJjNC4yOCA4LjA1IDEwLjY2IDE0Ljc3IDE4LjU2IDE5LjQ0Yy4zNi4yMS43Mi40MS4xLjYybC0yNC41MS4yNloiLz48L3N2Zz4=",
  },
  {
    name: "BigCommerce",
    logo: "https://cdn.brandfetch.io/idjqrHQc8M/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
  },
];

const Services = [
  { translationKey: "custom", icon: Store },
  { translationKey: "prestashop", icon: ShoppingCart },
  { translationKey: "shopify", icon: Smartphone },
  { translationKey: "woocommerce", icon: Globe },
  { translationKey: "migration", icon: Rocket },
  { translationKey: "optimization", icon: Lightbulb },
];

const AppTypes = [
  { translationKey: "b2c", icon: ShoppingCart },
  { translationKey: "b2b", icon: Briefcase },
  { translationKey: "marketplace", icon: Store },
  { translationKey: "international", icon: Globe },
];

const WhyUs = [
  { translationKey: "expertise", icon: Briefcase },
  { translationKey: "conversion", icon: Rocket },
  { translationKey: "scalability", icon: Handshake },
  { translationKey: "security", icon: HeartHandshake },
  { translationKey: "datadriven", icon: Lightbulb },
];

const portfolioItems = [
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
];

export default function EcommerceDevelopment() {
  const { t } = useTranslation("ecommerce");
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
          title="création-de-sites e-commerce"
          autoPlay
          loop
          muted
          playsInline
          className="absolute opacity-60 inset-0 w-full h-full object-cover mix-blend-multiply"
        >
          <source src="https://d3h46s6jorvpfj.cloudfront.net/création-de-sites e-commerce.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-20 flex w-full h-screen gap-5 justify-center items-center">
          <div className="mt-10 sm:mt-0 flex flex-col justify-center items-center px-4">
            <h1 className="text-5xl max-w-screen-xl text-gray-800 sm:text-6xl text-center font-extrabold">
              {t("ecommerce.hero.title")}
            </h1>
            <span className="max-w-screen-xl my-3 text-gray-800 text-2xl text-center font-bold">
              {t("ecommerce.hero.subtitle")}
            </span>
            {t("ecommerce.hero.description") && (
              <p className="max-w-3xl text-center text-gray-700 text-lg mt-4">
                {t("ecommerce.hero.description")}
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
          {t("ecommerce.services.title")}
        </h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 px-4 max-w-6xl">
          {Services.map((service, index) => {
            const Icon = service.icon;
            const serviceData = t("ecommerce.services.items", { returnObjects: true })[index];
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
          { translationKey: "0", icon: <BookOpen className="text-white" size={80} /> },
          { translationKey: "1", icon: <Layout className="text-white" size={80} /> },
          { translationKey: "2", icon: <Code className="text-white" size={80} /> },
          { translationKey: "3", icon: <CheckCircle2 className="text-white" size={80} /> },
          { translationKey: "4", icon: <CloudUpload className="text-white" size={80} /> },
        ]}
        namespace="ecommerce"
      />

      {/* App Types / Solutions Section */}
      <div className="py-16 bg-gray-50">
        <h2 className="text-4xl text-center font-bold text-gray-800 mb-12 px-4">
          {t("ecommerce.appTypes.title")}
        </h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 max-w-6xl">
          {AppTypes.map((appType, index) => {
            const Icon = appType.icon;
            const typeData = t("ecommerce.appTypes.types", { returnObjects: true })[index];
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
          {t("ecommerce.whyUs.title")}
        </h2>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-4">
          {WhyUs.map((reason, index) => {
            const Icon = reason.icon;
            const reasonData = t("ecommerce.whyUs.reasons", { returnObjects: true })[index];

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
          {t("ecommerce.portfolio.title")}{" "}
          <span className="text-blue-600 bg-blue-200 p-2.5 rounded-2xl">
            {t("ecommerce.portfolio.titleHighlight")}
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
        title={t("ecommerce.faq.title")}
        faqData={Object.keys(
          t("ecommerce.faq.items", { returnObjects: true })
        ).map((key) => ({
          question: t(`ecommerce.faq.items.${key}.question`),
          answer: t(`ecommerce.faq.items.${key}.answer`),
        }))}
      />

      {/* Contact Section */}
      <FormCTA />
    </div>
  );
}
