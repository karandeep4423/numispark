"use client";
import {
  FileType,
  ArrowUpRight,
  Search,
  Award,
  Copy,
  Instagram,
  Palette,
  PaletteIcon,
  TrendingUp,
  MessageCircle,
  Clock,
  Layout,
  Cloud,
  Brain,
  Target,
  PenTool,
  Pen,
  CloudDownload,
} from "lucide-react";
import Contact from "@/components/contact-us/page";
import HeroButtons from "@/components/HeroButtons/page";
import FAQs from "@/components/Faqs/page";
import Technologies from "@/components/Technologies/page";
import HowAgencyWorks from "@/components/Process/page";
import { useTranslation } from "next-i18next";

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
const steps = [
  {
    translationKey: "step1",
    icon: <Brain className="text-white" size={80} />
  },
  {
    translationKey: "step2",
    icon: <Search className="text-white" size={80} />
  },
  {
    translationKey: "step3",
    icon: <Pen className="text-white" size={80} />
  },
  {
    translationKey: "step4",
    icon: <Palette className="text-white" size={80} />
  },
  {
    translationKey: "step5",
    icon: <CloudDownload className="text-white" size={80} />
  }
];

// Services array
const Services = [
  {
    translationKey: "services.items.socialMediaDesign",
    serviceIcon: Instagram
  },
  {
    translationKey: "services.items.logoBrandIdentity",
    serviceIcon: PenTool
  },
  {
    translationKey: "services.items.brandKitDesign",
    serviceIcon: PaletteIcon
  },
  {
    translationKey: "services.items.socialStrategy",
    serviceIcon: Target
  },
  {
    translationKey: "services.items.socialMediaTemplates",
    serviceIcon: Copy
  }
];

// Features array
const features = [
  {
    translationKey: "features.items.platformOptimization",
    serviceIcon: Layout
  },
  {
    translationKey: "features.items.brandConsistency",
    serviceIcon: PaletteIcon
  },
  {
    translationKey: "features.items.engagementFocus",
    serviceIcon: MessageCircle
  },
  {
    translationKey: "features.items.multiFormatDelivery",
    serviceIcon: FileType
  }
];

// WhyUs array
const WhyUs = [
  {
    translationKey: "whyUs.items.platformExpertise",
    serviceIcon: Award
  },
  {
    translationKey: "whyUs.items.brandFocusedDesign",
    serviceIcon: Target
  },
  {
    translationKey: "whyUs.items.engagementDriven",
    serviceIcon: TrendingUp
  },
  {
    translationKey: "whyUs.items.quickTurnaround",
    serviceIcon: Clock
  },
  {
    translationKey: "whyUs.items.unlimitedRevisions",
    serviceIcon: Cloud
  },
  {
    translationKey: "whyUs.items.socialMediaStrategy",
    serviceIcon: Target
  }
];

// Portfolio items remain static if only images/categories are needed
const portfolioItems = [
  {
    image: "/api/placeholder/400/400",
    translationKey: "portfolio.categories.uiUx",
    bgColor: "bg-violet-100",
    dotColor: "bg-violet-500"
  },
  {
    image: "/api/placeholder/400/400",
    translationKey: "portfolio.categories.appDesign",
    bgColor: "bg-emerald-600",
    dotColor: "bg-emerald-500"
  },
  {
    image: "/api/placeholder/400/400",
    translationKey: "portfolio.categories.appDesign",
    bgColor: "bg-amber-400",
    dotColor: "bg-amber-500"
  }
];

export default function SocialMediaLogoDesign() {
  const { t } = useTranslation("socialMediaLogoDesign");

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-screen flex flex-col sm:flex-row justify-center items-center overflow-hidden bg-blue-200">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-contain z-20 mix-blend-multiply"
        >
          <source src="/social-logo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-20 flex w-full h-screen gap-5 justify-center items-center">
          <div className="mt-10 sm:mt-0 flex flex-col justify-center items-center">
            <span className="text-5xl max-w-screen-xl text-gray-900 sm:text-6xl text-center font-extrabold">
              {t("socialMediaLogoDesign.hero.title")}
            </span>
            <span className="max-w-screen-xl text-gray-900 text-2xl text-center font-bold">
              {t("socialMediaLogoDesign.hero.subtitle")}
            </span>
            <HeroButtons />
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="pt-16 bg-gray-50">
        <h2 className="text-4xl px-2 text-center font-bold text-gray-800">
          {t("socialMediaLogoDesign.services.sectionTitle")}{" "}
          <span className="text-blue-600 bg-blue-200 p-1.5 rounded-2xl">
            {t("socialMediaLogoDesign.services.sectionTitleHighlight")}
          </span>
        </h2>
        <p className="px-2 text-xl text-center font-medium text-gray-600 mt-4">
          {t("socialMediaLogoDesign.services.sectionSubtitle")}
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
                  {t(`socialMediaLogoDesign.${key}.serviceName`)}
                </h3>
                <p className="text-gray-600 text-center">
                  {t(`socialMediaLogoDesign.${key}.serviceDes`)}
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
          {t("socialMediaLogoDesign.features.sectionTitle")}{" "}
          <span className="text-blue-600 bg-blue-200 p-2.5 rounded-2xl">
            {t("socialMediaLogoDesign.features.sectionSubtitle")}
          </span>
        </h2>
        <p className="text-xl text-center font-medium text-gray-600 mt-4">
          {t("socialMediaLogoDesign.features.sectionTagline")}
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
                  {t(`socialMediaLogoDesign.${key}.serviceName`)}
                </h3>
                <p className="text-gray-600 text-center">
                  {t(`socialMediaLogoDesign.${key}.serviceDes`)}
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
            {t("socialMediaLogoDesign.whyUs.sectionTitle")}
          </span>{" "}
          {t("socialMediaLogoDesign.whyUs.sectionSubtitle")}
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
                  {t(`socialMediaLogoDesign.${key}.serviceName`)}
                </h3>
                <p className="text-gray-600 text-center">
                  {t(`socialMediaLogoDesign.${key}.serviceDes`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Process Section */}
      <HowAgencyWorks steps={steps} namespace="socialMediaLogoDesign" />

      {/* Portfolio Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
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
              className={`shadow-[5px_5px_0px_4px_rgb(147,197,253),_-5px_-5px_0px_rgba(255,255,255,1)] relative rounded-3xl p-6 ${item.bgColor}`}
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                <img
                  src={item.image}
                  alt={t(`socialMediaLogoDesign.${item.translationKey}`)}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">{t(`socialMediaLogoDesign.${item.translationKey}`)}</h3>
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
        faqData={Object.keys(t("socialMediaLogoDesign.faq.items", { returnObjects: true })).map((key) => ({
          question: t(`socialMediaLogoDesign.faq.items.${key}.question`),
          answer: t(`socialMediaLogoDesign.faq.items.${key}.answer`)
        }))}
      />

      {/* Contact Section */}
      <Contact />
    </div>
  );
}