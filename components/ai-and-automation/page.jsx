"use client";
import React from "react";
import {
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
  Bot,
  TrendingUp,
  Zap,
  BarChart3,
  ShoppingBag,
  Building2,
  Store,
  Sparkles,
} from "lucide-react";
import FormCTA from "@/components/Form-CTA/page";
import HeroButtons from "@/components/HeroButtons/page";
import FAQs from "@/components/Faqs/page";
import Technologies from "@/components/Technologies/page";
import HowAgencyWorks from "@/components/Process/page";
import { useTranslation } from "react-i18next";

const TECHNOLOGIES = [
  {
    name: "Python",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  {
    name: "Tensorflow",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
  },
  {
    name: "PyTorch",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg",
  },
  {
    name: "Zapier",
    logo: "https://cdn.brandfetch.io/idNMs_nMA0/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B",
  },
  {
    name: "UiPath",
    logo: "https://cdn.brandfetch.io/idEaAShmlC/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
  },
  {
    name: "Django",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
  },
  {
    name: "OpenAI",
    logo: "https://cdn.brandfetch.io/idR3duQxYl/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B",
  },
];

const Services = [
  { translationKey: "marketing", icon: TrendingUp },
  { translationKey: "chatbots", icon: Bot },
  { translationKey: "bpa", icon: Zap },
  { translationKey: "analytics", icon: BarChart3 },
];

const AppTypes = [
  { translationKey: "ecommerce", icon: ShoppingBag },
  { translationKey: "enterprise", icon: Building2 },
  { translationKey: "marketplace", icon: Store },
  { translationKey: "innovative", icon: Sparkles },
];

const WhyUs = [
  { translationKey: "expertise", icon: Briefcase },
  { translationKey: "roi", icon: Rocket },
  { translationKey: "methodology", icon: Handshake },
  { translationKey: "vision", icon: HeartHandshake },
  { translationKey: "support", icon: Lightbulb },
  { translationKey: "accessible", icon: CheckCircle2 },
];

export default function AiDevelopment() {
  const { t } = useTranslation("aiDevelopment");

  return (
    <div>
      {/* Hero Section */}

      <div className="relative h-screen flex flex-col sm:flex-row justify-center items-center overflow-hidden bg-blue-200">
        <video
          title="agence-automatisation-ia-hero-seaction-animation"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-20 mix-blend-multiply"
        >
          <source
            src="https://d3h46s6jorvpfj.cloudfront.net/agence-automatisation-ia-hero-seaction-animation.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-20 flex w-full h-screen gap-5 justify-center items-center">
          <div className="mt-10 sm:mt-0 flex flex-col justify-center items-center">
            <h1 className="text-5xl max-w-screen-xl text-gray-200 sm:text-6xl text-center font-extrabold">
              {t("aiDevelopment.hero.title")}
            </h1>
            <span className="max-w-screen-xl my-3 text-gray-200 text-2xl text-center font-bold">
              {t("aiDevelopment.hero.subtitle")}
            </span>
            {t("aiDevelopment.hero.description") && (
              <p className="max-w-3xl text-center text-gray-200 text-lg my-4">
                {t("aiDevelopment.hero.description")}
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
          {t("aiDevelopment.services.title")}
        </h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 px-4 max-w-6xl">
          {Services.map((service, index) => {
            const Icon = service.icon;
            const serviceData = t("aiDevelopment.services.items", {
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
        namespace="aiDevelopment"
      />

      {/* App Types / Solutions Section */}
      <div className="py-16 bg-gray-50">
        <h2 className="text-4xl text-center font-bold text-gray-800 mb-12 px-4">
          {t("aiDevelopment.appTypes.title")}
        </h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 max-w-6xl">
          {AppTypes.map((appType, index) => {
            const Icon = appType.icon;
            const typeData = t("aiDevelopment.appTypes.types", {
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
          {t("aiDevelopment.whyUs.title")}
        </h2>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-4">
          {WhyUs.map((reason, index) => {
            const Icon = reason.icon;
            const reasonData = t("aiDevelopment.whyUs.reasons", {
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

      {/* FAQs Section */}
      <FAQs
        title={t("aiDevelopment.faq.title")}
        faqData={Object.keys(
          t("aiDevelopment.faq.items", { returnObjects: true })
        ).map((key) => ({
          question: t(`aiDevelopment.faq.items.${key}.question`),
          answer: t(`aiDevelopment.faq.items.${key}.answer`),
        }))}
      />

      {/* Contact Section */}
      <FormCTA />
    </div>
  );
}
