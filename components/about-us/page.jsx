"use client";
import React from "react";
import {
  User,
  Users,
  Award,
  Clock,
  Cpu,
  Shield,
  MessageCircle,
  Settings,
} from "lucide-react";
import Contact from "@/components/contact-us/page";
import HeroButtons from "@/components/HeroButtons/page";
import { useTranslation } from "next-i18next";

const teamMembers = [
  { translationKey: "karan", image: "/team/Karan.png" },
  { translationKey: "thomas", image: "/team/Thomas.png" },
  { translationKey: "samuel", image: "/team/Samuel.png" },
  { translationKey: "lucas", image: "/team/Lucas.png" },
  { translationKey: "metheo", image: "/team/Matheo.png" },
  { translationKey: "antoine", image: "/team/Antoine.png" },
  { translationKey: "louis", image: "/team/Louis.png" },
  { translationKey: "charlotte", image: "/team/Charlotte.png" },
  { translationKey: "sophia", image: "/team/Sophia.png" },
];

const coreValues = [
  { serviceIcon: Shield, translationKey: "quality" },
  { serviceIcon: Clock, translationKey: "delivery" },
  { serviceIcon: Cpu, translationKey: "innovation" },
  { serviceIcon: Users, translationKey: "partnership" },
];

const whyChooseUs = [
  { serviceIcon: User, translationKey: "experts" },
  { serviceIcon: Settings, translationKey: "solutions" },
  { serviceIcon: Award, translationKey: "success" },
  { serviceIcon: MessageCircle, translationKey: "communication" },
];

const About = () => {
  const { t } = useTranslation("about");

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-blue-200">
        <div className="flex mx-3 flex-col h-screen gap-5 justify-center items-center">
          <span className="text-gray-800 text-4xl text-center font-bold">
            {t("about.hero.titlePart1")}
          </span>
          <span className="text-5xl text-gray-800 sm:text-6xl text-center font-extrabold">
            {t("about.hero.titlePart2")}
          </span>
          <h1 className="text-xl max-w-screen-xl text-gray-800 sm:text-2xl text-center font-bold">
            {t("about.hero.subtitle")}
          </h1>
          <HeroButtons />
        </div>
      </div>

      {/* Core Values Section */}
      <div className="py-16 bg-gray-50">
        <h2 className="text-4xl px-2 text-center font-bold text-gray-800">
          {t("about.coreValues.title")}{" "}
          <span className="text-blue-600 bg-blue-200 p-1.5 rounded-2xl">
            {t("about.coreValues.titleHighlight")}
          </span>
        </h2>
        <p className="px-2 text-xl text-center font-medium text-gray-600 mt-4">
          {t("about.coreValues.subtitle")}
        </p>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-4">
          {coreValues.map((value, index) => {
            const Icon = value.serviceIcon;
            const key = `about.coreValues.items.${value.translationKey}`;

            return (
              <div
                key={index}
                className="flex flex-col items-center p-6 shadow-[5px_5px_0px_4px_rgb(147,197,253),_-5px_-5px_0px_rgba(255,255,255,1)] rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow duration-300"
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

      {/* Team Section */}
      <div className="pb-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl px-2 text-center font-bold text-gray-800">
              {t("about.team.title")}{" "}
              <span className="text-blue-600 m-1 bg-blue-200 p-1.5 rounded-2xl">
                {t("about.team.titleHighlight")}
              </span>
            </h2>
            <p className="px-2 text-xl text-center font-medium text-gray-600 mt-4">
              {t("about.team.subtitle")}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => {
              const key = `about.team.members.${member.translationKey}`;

              return (
                <div
                  key={index}
                  className="group relative flex flex-col items-center  shadow-[5px_5px_0px_4px_rgb(147,197,253),_-5px_-5px_0px_rgba(255,255,255,1)] rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="aspect-square overflow-hidden rounded-lg bg-blue-200">
                    <img
                      src={member.image}
                      alt={t(`${key}.name`)}
                      className="w-full mix-blend-multiply h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-2">
                    <h3 className="inline-block text-lg font-semibold bg-blue-600/80 text-blue-100 px-1  rounded">
                      {t(`${key}.name`)}
                    </h3>
                    <p className="inline-block text-sm font-semibold bg-gray-100/80 text-blue-600 px-1  rounded mt-1">
                      {t(`${key}.role`)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Why Partner With Us Section */}
      <div className="pb-16 bg-gray-50">
        <h2 className="text-4xl px-2 text-center font-bold text-gray-800">
          {t("about.whyChooseUs.title")}
          <span className="text-blue-600 m-1 bg-blue-200 p-1.5 rounded-2xl">
            {t("about.whyChooseUs.titleHighlight")}
          </span>
          {t("about.whyChooseUs.titleEnd")}
        </h2>
        <p className="px-2 text-xl text-center font-medium text-gray-600 mt-4">
          {t("about.whyChooseUs.subtitle")}
        </p>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-4">
          {whyChooseUs.map((service, index) => {
            const Icon = service.serviceIcon;
            const key = `about.whyChooseUs.items.${service.translationKey}`;

            return (
              <div
                key={index}
                className="flex flex-col items-center p-6 shadow-[5px_5px_0px_4px_rgb(147,197,253),_-5px_-5px_0px_rgba(255,255,255,1)] rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow duration-300"
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

      <Contact />
    </div>
  );
};

export default About;
