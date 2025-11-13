"use client";
import React from "react";
import {
  Smartphone,
  ShoppingCart,
  Cloud,
  Brain,
  Palette,
  PenTool,
  TrendingUp,
  Target,
  ArrowRight,
  CheckCircle2,
  Users,
  Rocket,
  HeartHandshake,
  Lightbulb,
  BarChart,
  Clock,
  Globe,
  Search,
} from "lucide-react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import HeroButtons from "@/components/HeroButtons/page";
import FormCTA from "@/components/Form-CTA/page";

// Icon mapping
const iconMap = {
  Smartphone: Smartphone,
  ShoppingCart: ShoppingCart,
  Cloud: Cloud,
  Brain: Brain,
  Palette: Palette,
  PenTool: PenTool,
  TrendingUp: TrendingUp,
  Target: Target,
  Globe: Globe,
  Search: Search,
};

export default function Services() {
  const { t, i18n } = useTranslation("services");

  const servicesData = t("services.items", { returnObjects: true });
  const whyChooseReasons = t("services.whyChooseUs.reasons", {
    returnObjects: true,
  });
  const processSteps = t("services.process.steps", { returnObjects: true });

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-screen flex flex-col sm:flex-row justify-center items-center overflow-hidden bg-blue-200">
        <video
          title="services-hero-video"
          autoPlay
          loop
          muted
          playsInline
          className="absolute opacity-60 inset-0 w-full h-full object-cover z-10 mix-blend-multiply"
        >
          <source
            src="https://d3h46s6jorvpfj.cloudfront.net/seo.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-20 flex w-full h-screen gap-5 justify-center items-center flex-col px-4">
          <h1 className="text-5xl max-w-screen-xl text-gray-800 sm:text-6xl text-center font-extrabold">
            {t("services.hero.title")}
          </h1>
          <h2 className="text-2xl max-w-3xl text-gray-800 text-center font-bold">
            {t("services.hero.subtitle")}
          </h2>
          <p className="max-w-3xl text-gray-800 text-lg text-center font-medium">
            {t("services.hero.description")}
          </p>
          <HeroButtons />
        </div>
      </div>

      {/* Services Grid Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-4xl px-2 text-center font-bold text-gray-800 mb-4">
            {t("services.servicesTitle")}{" "}
            <span className="text-blue-600 bg-blue-200 p-1.5 rounded-2xl">
              {t("services.servicesTitleHighlight")}
            </span>
          </h2>
          <p className="text-center text-gray-700 text-lg mb-12 max-w-3xl mx-auto">
            {t("services.servicesSubtitle")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.isArray(servicesData) &&
              servicesData.map((service, index) => {
                const IconComponent = iconMap[service.icon] || Target;

                return (
                  <div
                    key={index}
                    className="group bg-white shadow-[5px_5px_0px_4px_rgb(147,197,253),_-5px_-5px_0px_rgba(255,255,255,1)] rounded-2xl border border-gray-200 p-8 transition-all duration-300 hover:shadow-[8px_8px_0px_6px_rgb(147,197,253),_-8px_-8px_0px_rgba(255,255,255,1)]"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-4 bg-blue-200 rounded-2xl group-hover:bg-blue-300 transition-colors">
                        <IconComponent className="w-10 h-10 text-blue-600" />
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-800 mb-3">
                      {service.name}
                    </h3>

                    <p className="text-gray-600 mb-4">
                      {service.shortDescription}
                    </p>

                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Lightbulb className="w-5 h-5 text-blue-600" />
                        <h4 className="font-semibold text-gray-800">
                          {t("services.keyPointsTitle")}
                        </h4>
                      </div>
                      <ul className="space-y-2">
                        {Array.isArray(service.highlights) &&
                          service.highlights.map((highlight, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-sm"
                            >
                              <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-600">{highlight}</span>
                            </li>
                          ))}
                      </ul>
                    </div>

                    <Link
                      href={`/${i18n.language}${service.link}`}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors group"
                    >
                      {t("services.learnMore")}
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16 bg-white">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-4xl px-2 text-center font-bold text-gray-800 mb-12">
            {t("services.whyChooseUs.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.isArray(whyChooseReasons) &&
              whyChooseReasons.map((reason, index) => {
                const icons = [
                  Rocket,
                  Target,
                  HeartHandshake,
                  Lightbulb,
                  Users,
                  BarChart,
                ];
                const Icon = icons[index % icons.length];

                return (
                  <div
                    key={index}
                    className="text-center p-6 bg-gray-50 shadow-[5px_5px_0px_4px_rgb(147,197,253),_-5px_-5px_0px_rgba(255,255,255,1)] rounded-2xl border border-gray-200 transition-shadow duration-300"
                  >
                    <div className="flex justify-center mb-4">
                      <div className="p-4 bg-blue-200 rounded-2xl">
                        <Icon className="w-10 h-10 text-blue-600" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600">{reason.description}</p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-4xl px-2 text-center font-bold text-gray-800 mb-4">
            {t("services.process.title")}
          </h2>
          <p className="text-center text-gray-700 text-lg mb-12 max-w-3xl mx-auto">
            {t("services.process.description")}
          </p>

          <div className="relative">
            {/* Timeline Line - Hidden on mobile */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-blue-200 transform -translate-x-1/2"></div>

            <div className="space-y-8 lg:space-y-12">
              {Array.isArray(processSteps) &&
                processSteps.map((step, index) => {
                  const icons = [
                    Users,
                    Palette,
                    Rocket,
                    CheckCircle2,
                    HeartHandshake,
                  ];
                  const Icon = icons[index % icons.length];
                  const isEven = index % 2 === 0;

                  return (
                    <div
                      key={index}
                      className={`relative flex items-start ${
                        isEven
                          ? "lg:flex-row"
                          : "lg:flex-row-reverse"
                      } lg:gap-8`}
                    >
                      {/* Content Card */}
                      <div
                        className={`w-full lg:w-5/12 ${
                          isEven ? "lg:text-right" : "lg:text-left"
                        }`}
                      >
                        <div className="bg-white p-5 lg:p-6 rounded-2xl shadow-[5px_5px_0px_4px_rgb(147,197,253),_-5px_-5px_0px_rgba(255,255,255,1)] border border-gray-200">
                          <div
                            className={`flex items-center gap-3 mb-3 ${
                              isEven
                                ? "lg:justify-end"
                                : "lg:justify-start"
                            } justify-start`}
                          >
                            <div className="text-2xl lg:text-3xl font-bold text-blue-600">
                              0{index + 1}
                            </div>
                            <h3 className="text-lg lg:text-xl font-bold text-gray-800">
                              {step.title}
                            </h3>
                          </div>
                          <p className="text-gray-600 text-left text-sm lg:text-base">
                            {step.description}
                          </p>
                        </div>
                      </div>

                      {/* Desktop Center Icon */}
                      <div className="hidden lg:flex w-2/12 justify-center my-4 lg:my-0">
                        <div className="p-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                      </div>

                      {/* Empty space for alternating layout */}
                      <div className="hidden lg:block w-5/12"></div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <FormCTA />
    </div>
  );
}

