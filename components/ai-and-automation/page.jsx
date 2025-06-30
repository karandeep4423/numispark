"use client";
import {
  Users,
  ArrowUpRight,
  RefreshCcw,
  DollarSign,
  MessageSquareText,
  Globe,
  Zap,
  Settings,
  Brain,
  Target,
  PenTool,
  Rocket,
  Cog,
  LineChart,
} from "lucide-react";
import Contact from "@/components/contact-us/page";
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
const steps = [
  {
    translationKey: "vision",
    icon: <Brain className="text-white" size={80} />,
  },
  {
    translationKey: "planning",
    icon: <Target className="text-white" size={80} />,
  },
  {
    translationKey: "development",
    icon: <PenTool className="text-white" size={80} />,
  },
  {
    translationKey: "launch",
    icon: <Rocket className="text-white" size={80} />,
  },
  {
    translationKey: "support",
    icon: <RefreshCcw className="text-white" size={80} />,
  },
];

// Services array
const Services = [
  {
    translationKey: "services.items.customAI",
    serviceIcon: Brain,
  },
  {
    translationKey: "services.items.chatbot",
    serviceIcon: MessageSquareText,
  },
  {
    translationKey: "services.items.automation",
    serviceIcon: Cog,
  },
  {
    translationKey: "services.items.analytics",
    serviceIcon: LineChart,
  },
];

// Features array
const features = [
  {
    translationKey: "features.items.nlu",
    serviceIcon: Brain,
  },
  {
    translationKey: "features.items.multilingual",
    serviceIcon: Globe,
  },
  {
    translationKey: "features.items.integration",
    serviceIcon: Users,
  },
  {
    translationKey: "features.items.realtime",
    serviceIcon: LineChart,
  },
];

// WhyUs array
const WhyUs = [
  {
    translationKey: "whyUs.items.cuttingEdge",
    serviceIcon: Brain,
  },
  {
    translationKey: "whyUs.items.customSolutions",
    serviceIcon: Settings,
  },
  {
    translationKey: "whyUs.items.costEffective",
    serviceIcon: DollarSign,
  },
  {
    translationKey: "whyUs.items.speedOptimization",
    serviceIcon: Zap,
  },
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
            <span className="max-w-screen-xl text-gray-200 text-2xl text-center font-bold">
              {t("aiDevelopment.hero.subtitle")}
            </span>
            <HeroButtons />
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="pt-16 bg-gray-50">
        <h2 className="text-4xl px-2 text-center font-bold text-gray-800">
          {t("aiDevelopment.services.sectionTitle")}{" "}
          <span className="text-blue-600 bg-blue-200 p-1.5 rounded-2xl">
            {t("aiDevelopment.services.sectionTitle")}
          </span>
        </h2>
        <p className="px-2 text-xl text-center font-medium text-gray-600 mt-4">
          {t("aiDevelopment.services.sectionSubtitle")}
        </p>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-4">
          {Services.map((service, index) => {
            const Icon = service.serviceIcon;
            const key = service.translationKey;
            return (
              <div
                key={index}
                className="flex flex-col items-center p-6 shadow-[5px_5px_0px_4px_rgb(147,197,253),_-5px_-5px_0px_rgba(255,255,255,1)] rounded-2xl border border-gray-200 md:hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center justify-center p-2 bg-blue-200 rounded-2xl mb-4">
                  <Icon className="text-blue-600 w-14 h-14" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
                  {t(`aiDevelopment.${key}.serviceName`)}
                </h3>
                <p className="text-gray-600 text-center">
                  {t(`aiDevelopment.${key}.serviceDes`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Technologies Section */}
      <Technologies technologies={TECHNOLOGIES} />

      {/* Features Section */}
      <div className="pb-16 bg-gray-50">
        <h2 className="text-4xl text-center font-bold text-gray-800">
          {t("aiDevelopment.features.sectionTitle")}{" "}
          <span className="text-blue-600 bg-blue-200 p-2.5 rounded-2xl">
            {t("aiDevelopment.features.sectionSubtitle")}
          </span>
        </h2>
        <p className="text-xl text-center font-medium text-gray-600 mt-4">
          {t("aiDevelopment.features.sectionTagline")}
        </p>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-4">
          {features.map((feature, index) => {
            const Icon = feature.serviceIcon;
            const key = feature.translationKey;
            return (
              <div
                key={index}
                className="flex flex-col items-center shadow-[5px_5px_0px_4px_rgb(147,197,253),_-5px_-5px_0px_rgba(255,255,255,1)] p-6 rounded-2xl border border-slate-200 md:hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center justify-center p-2 bg-blue-200 rounded-2xl mb-4">
                  <Icon className="text-blue-600 w-14 h-14" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
                  {t(`aiDevelopment.${key}.serviceName`)}
                </h3>
                <p className="text-gray-600 text-center">
                  {t(`aiDevelopment.${key}.serviceDes`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Why Us Section */}
      <div className="pb-16 bg-gray-50">
        <h2 className="text-4xl text-center font-bold text-gray-800">
          <span className="text-blue-600 bg-blue-200 p-2.5 rounded-2xl">
            {t("aiDevelopment.whyUs.sectionTitle")}
          </span>{" "}
          {t("aiDevelopment.whyUs.sectionSubtitle")}
        </h2>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-4">
          {WhyUs.map((service, index) => {
            const Icon = service.serviceIcon;
            const key = service.translationKey;
            return (
              <div
                key={index}
                className="flex flex-col items-center shadow-[5px_5px_0px_4px_rgb(147,197,253),_-5px_-5px_0px_rgba(255,255,255,1)] p-6 rounded-2xl border border-slate-200 md:hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center justify-center p-2 bg-blue-200 rounded-2xl mb-4">
                  <Icon className="text-blue-600 w-14 h-14" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
                  {t(`aiDevelopment.${key}.serviceName`)}
                </h3>
                <p className="text-gray-600 text-center">
                  {t(`aiDevelopment.${key}.serviceDes`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Process Section */}
      <HowAgencyWorks steps={steps} namespace="aiDevelopment" />

      {/* FAQs Section */}
      <FAQs
        faqData={Object.keys(
          t("aiDevelopment.faq.items", { returnObjects: true })
        ).map((key) => ({
          question: t(`aiDevelopment.faq.items.${key}.question`),
          answer: t(`aiDevelopment.faq.items.${key}.answer`),
        }))}
      />

      {/* Contact Section */}
      <Contact />
    </div>
  );
}
