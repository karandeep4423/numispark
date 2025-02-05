"use client";
import {
  UserPlus,
  Map,
  ArrowUpRight,
  Search,
  Palette,
  CloudDownload,
  PieChart,
  Headphones,
  Eye,
  Pen,
  Mic,
  Heart,
  Video,
  Activity,
  BarChart2,
  Edit3,
  DollarSign,
  Smile,
  FileText,
  Image,
  Instagram,
  TrendingUp,
  MessageCircle,
  Globe,
  Brain,
  Target,
  BarChart,
  Play,
} from "lucide-react";
import Contact from "@/components/contact-us/page";
import HeroButtons from "@/components/HeroButtons/page";
import FAQs from "@/components/Faqs/page";
import Technologies from "@/components/Technologies/page";
import HowAgencyWorks from "@/components/Process/page";
import { useTranslation } from "react-i18next";

const TECHNOLOGIES = [
  {
    name: "Google Analytics",
    logo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTYiIGhlaWdodD0iMjg0IiB2aWV3Qm94PSIwIDAgMjU2IDI4NCI+PHBhdGggZmlsbD0iI2Y5YWIwMCIgZD0iTTI1Ni4wMDMgMjQ3LjkzM2EzNS4yMjQgMzUuMjI0IDAgMCAxLTM5LjM3NiAzNS4xNjFjLTE4LjA0NC0yLjY3LTMxLjI2Ni0xOC4zNzEtMzAuODI2LTM2LjYwNlYzNi44NDVDMTg1LjM2NSAxOC41OTEgMTk4LjYyIDIuODgxIDIxNi42ODcuMjRhMzUuMjIgMzUuMjIgMCAwIDEgMzkuMzE2IDM1LjE2eiIvPjxwYXRoIGZpbGw9IiNlMzc0MDAiIGQ9Ik0zNS4xMDEgMjEzLjE5M2MxOS4zODYgMCAzNS4xMDEgMTUuNzE2IDM1LjEwMSAzNS4xMDFjMCAxOS4zODYtMTUuNzE1IDM1LjEwMS0zNS4xMDEgMzUuMTAxUzAgMjY3LjY4IDAgMjQ4LjI5NXMxNS43MTUtMzUuMTAyIDM1LjEwMS0zNS4xMDJtOTIuMzU4LTEwNi4zODdjLTE5LjQ3NyAxLjA2OC0zNC41OSAxNy40MDYtMzQuMTM3IDM2LjkwOHY5NC4yODVjMCAyNS41ODggMTEuMjU5IDQxLjEyMiAyNy43NTUgNDQuNDMzYTM1LjE2IDM1LjE2IDAgMCAwIDQyLjE0Ni0zNC41NlYxNDIuMDg5YTM1LjIyIDM1LjIyIDAgMCAwLTM1Ljc2NC0zNS4yODIiLz48L3N2Zz4=",
  },
  {
    name: "Semrush",
    logo: "https://cdn.brandfetch.io/idt3n8W3ef/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B",
  },
  {
    name: "Ahrefs",
    logo: "https://cdn.brandfetch.io/idxB1p5kuP/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
  },
  {
    name: "Meta Ads",
    logo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNTUuNyIgaGVpZ2h0PSIxMDQiIHZpZXdCb3g9IjAgMCAyNTYgMTcxIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImxvZ29zTWV0YUljb24wIiB4MT0iMTMuODc4JSIgeDI9Ijg5LjE0NCUiIHkxPSI1NS45MzQlIiB5Mj0iNTguNjk0JSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzAwNjRlMSIvPjxzdG9wIG9mZnNldD0iNDAlIiBzdG9wLWNvbG9yPSIjMDA2NGUxIi8+PHN0b3Agb2Zmc2V0PSI4MyUiIHN0b3AtY29sb3I9IiMwMDczZWUiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwMDgyZmIiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0ibG9nb3NNZXRhSWNvbjEiIHgxPSI1NC4zMTUlIiB4Mj0iNTQuMzE1JSIgeTE9IjgyLjc4MiUiIHkyPSIzOS4zMDclIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMDA4MmZiIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDA2NGUwIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZmlsbD0iIzAwODFmYiIgZD0iTTI3LjY1MSAxMTIuMTM2YzAgOS43NzUgMi4xNDYgMTcuMjggNC45NSAyMS44MmMzLjY3NyA1Ljk0NyA5LjE2IDguNDY2IDE0Ljc1MSA4LjQ2NmM3LjIxMSAwIDEzLjgwOC0xLjc5IDI2LjUyLTE5LjM3MmMxMC4xODUtMTQuMDkyIDIyLjE4Ni0zMy44NzQgMzAuMjYtNDYuMjc1bDEzLjY3NS0yMS4wMWM5LjQ5OS0xNC41OTEgMjAuNDkzLTMwLjgxMSAzMy4xLTQxLjgwNkMxNjEuMTk2IDQuOTg1IDE3Mi4yOTggMCAxODMuNDcgMGMxOC43NTggMCAzNi42MjUgMTAuODcgNTAuMyAzMS4yNTdDMjQ4LjczNSA1My41ODQgMjU2IDgxLjcwNyAyNTYgMTEwLjcyOWMwIDE3LjI1My0zLjQgMjkuOTMtOS4xODcgMzkuOTQ2Yy01LjU5MSA5LjY4Ni0xNi40ODggMTkuMzYzLTM0LjgxOCAxOS4zNjN2LTI3LjYxNmMxNS42OTUgMCAxOS42MTItMTQuNDIyIDE5LjYxMi0zMC45MjdjMC0yMy41Mi01LjQ4NC00OS42MjMtMTcuNTY0LTY4LjI3M2MtOC41NzQtMTMuMjMtMTkuNjg0LTIxLjMxMy0zMS45MDctMjEuMzEzYy0xMy4yMiAwLTIzLjg1OSA5Ljk3LTM1LjgxNSAyNy43NWMtNi4zNTYgOS40NDUtMTIuODgyIDIwLjk1Ni0yMC4yMDggMzMuOTQ0bC04LjA2NiAxNC4yODljLTE2LjIwMyAyOC43MjgtMjAuMzA3IDM1LjI3MS0yOC40MDggNDYuMDdjLTE0LjIgMTguOTEtMjYuMzI0IDI2LjA3Ni00Mi4yODcgMjYuMDc2Yy0xOC45MzUgMC0zMC45MS04LjItMzguMzI1LTIwLjU1NkMyLjk3MyAxMzkuNDEzIDAgMTI2LjIwMiAwIDExMS4xNDh6Ii8+PHBhdGggZmlsbD0idXJsKCNsb2dvc01ldGFJY29uMCkiIGQ9Ik0yMS44MDIgMzMuMjA2QzM0LjQ4IDEzLjY2NiA1Mi43NzQgMCA3My43NTcgMEM4NS45MSAwIDk3Ljk5IDMuNTk3IDExMC42MDUgMTMuODk3YzEzLjc5OCAxMS4yNjEgMjguNTA1IDI5LjgwNSA0Ni44NTMgNjAuMzY4bDYuNTggMTAuOTY3YzE1Ljg4MSAyNi40NTkgMjQuOTE3IDQwLjA3IDMwLjIwNSA0Ni40OWM2LjgwMiA4LjI0MyAxMS41NjUgMTAuNyAxNy43NTIgMTAuN2MxNS42OTUgMCAxOS42MTItMTQuNDIyIDE5LjYxMi0zMC45MjdsMjQuMzkzLS43NjZjMCAxNy4yNTMtMy40IDI5LjkzLTkuMTg3IDM5Ljk0NmMtNS41OTEgOS42ODYtMTYuNDg4IDE5LjM2My0zNC44MTggMTkuMzYzYy0xMS4zOTUgMC0yMS40OS0yLjQ3NS0zMi42NTQtMTMuMDA3Yy04LjU4Mi04LjA4My0xOC42MTUtMjIuNDQzLTI2LjMzNC0zNS4zNTJsLTIyLjk2LTM4LjM1MkMxMTguNTI4IDY0LjA4IDEwNy45NiA0OS43MyAxMDEuODQ1IDQzLjIzYy02LjU3OC02Ljk4OC0xNS4wMzYtMTUuNDI4LTI4LjUzMi0xNS40MjhjLTEwLjkyMyAwLTIwLjIgNy42NjYtMjcuOTYzIDE5LjM5eiIvPjxwYXRoIGZpbGw9InVybCgjbG9nb3NNZXRhSWNvbjEpIiBkPSJNNzMuMzEyIDI3LjgwMmMtMTAuOTIzIDAtMjAuMiA3LjY2Ni0yNy45NjMgMTkuMzljLTEwLjk3NiAxNi41NjgtMTcuNjk4IDQxLjI0NS0xNy42OTggNjQuOTQ0YzAgOS43NzUgMi4xNDYgMTcuMjggNC45NSAyMS44Mkw5LjAyNyAxNDkuNDgyQzIuOTczIDEzOS40MTMgMCAxMjYuMjAyIDAgMTExLjE0OEMwIDgzLjc3MiA3LjUxNCA1NS4yNCAyMS44MDIgMzMuMjA2QzM0LjQ4IDEzLjY2NiA1Mi43NzQgMCA3My43NTcgMHoiLz48L3N2Zz4=",
  },
];
const Services = [
  { translationKey: "services.items.contentCreation", serviceIcon: Edit3 },
  {
    translationKey: "services.items.campaignManagement",
    serviceIcon: Activity,
  },
  {
    translationKey: "services.items.analyticsReporting",
    serviceIcon: BarChart2,
  },
  {
    translationKey: "services.items.influencerMarketing",
    serviceIcon: UserPlus,
  },
  { translationKey: "services.items.socialStrategyDev", serviceIcon: Map },
  { translationKey: "services.items.paidAdvertising", serviceIcon: DollarSign },
  { translationKey: "services.items.competitorAnalysis", serviceIcon: Eye },
  {
    translationKey: "services.items.performanceOptimization",
    serviceIcon: TrendingUp,
  },
];
const features = [
  { translationKey: "features.items.platformExpertise", serviceIcon: Globe },
  { translationKey: "features.items.creativeContent", serviceIcon: Image },
  {
    translationKey: "features.items.engagementOptimization",
    serviceIcon: MessageCircle,
  },
  { translationKey: "features.items.realTimeAnalytics", serviceIcon: PieChart },
  { translationKey: "features.items.brandVoice", serviceIcon: Mic },
  { translationKey: "features.items.socialListening", serviceIcon: Headphones },
  { translationKey: "features.items.videoMarketing", serviceIcon: Video },
  {
    translationKey: "features.items.trendUtilization",
    serviceIcon: TrendingUp,
  },
  { translationKey: "features.items.advancedTargeting", serviceIcon: Map }, // using Map for targeting
];

const WhyUs = [
  { translationKey: "whyUs.items.brandAwareness", serviceIcon: Globe },
  { translationKey: "whyUs.items.targetedCampaigns", serviceIcon: Target },
  { translationKey: "whyUs.items.consistentEngagement", serviceIcon: Heart },
  { translationKey: "whyUs.items.realTimeAnalytics", serviceIcon: BarChart2 },
  { translationKey: "whyUs.items.customerLoyalty", serviceIcon: Smile },
  { translationKey: "whyUs.items.costEffective", serviceIcon: DollarSign },
];

const steps = [
  {
    translationKey: "step1",
    icon: <Brain className="text-white" size={80} />,
  },
  {
    translationKey: "step2",
    icon: <Search className="text-white" size={80} />,
  },
  {
    translationKey: "step3",
    icon: <Pen className="text-white" size={80} />,
  },
  {
    translationKey: "step4",
    icon: <Palette className="text-white" size={80} />,
  },
  {
    translationKey: "step5",
    icon: <CloudDownload className="text-white" size={80} />,
  },
];

const portfolioItems = [
  {
    image: "/api/placeholder/400/400",
    translationKey: "portfolio.categories.uiUx",
    bgColor: "bg-violet-100",
    dotColor: "bg-violet-500",
  },
  {
    image: "/api/placeholder/400/400",
    translationKey: "portfolio.categories.appDesign",
    bgColor: "bg-emerald-600",
    dotColor: "bg-emerald-500",
  },
  {
    image: "/api/placeholder/400/400",
    translationKey: "portfolio.categories.appDesign",
    bgColor: "bg-amber-400",
    dotColor: "bg-amber-500",
  },
];

export default function SocialMediaMarketing() {
  const { t } = useTranslation("socialMediaMarketing");

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-blue-200">
        <div className="max-w-screen-xl m-auto p-5 flex flex-col sm:flex-row h-screen gap-5 justify-center items-center">
          <div className="w-full flex flex-col items-center">
            <span className="text-5xl text-gray-800 sm:text-6xl text-center font-extrabold">
              {t("socialMediaMarketing.hero.title")}
            </span>
            <span className="text-gray-800 text-2xl text-center font-bold">
              {t("socialMediaMarketing.hero.subtitle")}
            </span>
            <HeroButtons />
          </div>
          <img
            className="w-2/4 h-96"
            src="/social-marketing.gif"
            alt="Social Media Marketing"
          />
        </div>
      </div>

      {/* Services Section */}
      <div className="pt-16 bg-gray-50">
        <h2 className="text-4xl px-2 text-center font-bold text-gray-800">
          {t("socialMediaMarketing.services.sectionTitle")}{" "}
          <span className="text-blue-600 bg-blue-200 p-1.5 rounded-2xl">
            {t("socialMediaMarketing.services.sectionTitleHighlight")}
          </span>
        </h2>
        <p className="px-2 text-xl text-center font-medium text-gray-600 mt-4">
          {t("socialMediaMarketing.services.sectionSubtitle")}
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
                  {t(`socialMediaMarketing.${key}.serviceName`)}
                </h3>
                <p className="text-gray-600 text-center">
                  {t(`socialMediaMarketing.${key}.serviceDes`)}
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
          {t("socialMediaMarketing.features.sectionTitle")}{" "}
          <span className="text-blue-600 bg-blue-200 p-2.5 rounded-2xl">
            {t("socialMediaMarketing.features.sectionHighlight")}
          </span>
          {t("socialMediaMarketing.features.sectionSubtitle")}{" "}
        </h2>
        <p className="text-xl text-center font-medium text-gray-600 mt-4">
          {t("socialMediaMarketing.features.sectionTagline")}
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
                  {t(`socialMediaMarketing.${key}.serviceName`)}
                </h3>
                <p className="text-gray-600 text-center">
                  {t(`socialMediaMarketing.${key}.serviceDes`)}
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
            {t("socialMediaMarketing.whyUs.sectionTitle")}
          </span>{" "}
          {t("socialMediaMarketing.whyUs.sectionSubtitle")}
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
                  {t(`socialMediaMarketing.${key}.serviceName`)}
                </h3>
                <p className="text-gray-600 text-center">
                  {t(`socialMediaMarketing.${key}.serviceDes`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Process Section */}
      <HowAgencyWorks steps={steps} namespace="socialMediaMarketing" />

      {/* Portfolio Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-4xl text-center font-bold text-gray-800">
          {t("socialMediaMarketing.portfolio.title")}{" "}
          <span className="text-blue-600 bg-blue-200 p-2.5 rounded-2xl">
            {t("socialMediaMarketing.portfolio.titleHighlight")}
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
                  alt={t(`socialMediaMarketing.${item.translationKey}`)}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">
                  {t(`socialMediaMarketing.${item.translationKey}`)}
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
        faqData={Object.keys(t("socialMediaMarketing.faq.items", { returnObjects: true })).map(
          (key) => ({
            question: t(`socialMediaMarketing.faq.items.${key}.question`),
            answer: t(`socialMediaMarketing.faq.items.${key}.answer`),
          })
        )}
      />

      {/* Contact Section */}
      <Contact />
    </div>
  );
}
