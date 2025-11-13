"use client";
import React, { useState } from "react";
import {
  Users,
  Award,
  Clock,
  Cpu,
  Shield,
  MessageCircle,
  Target,
  TrendingUp,
  Heart,
  Lightbulb,
  CheckCircle,
  Quote,
  Star,
  MapPin,
  Mail,
  Phone,
  Code,
  Smartphone,
  Database,
  Cloud,
  Palette,
  BarChart,
  Briefcase
} from "lucide-react";
import FormCTA from "@/components/Form-CTA/page";
import HeroButtons from "@/components/HeroButtons/page";
import { useTranslation } from "next-i18next";

const About = () => {
  const { t } = useTranslation("about");
  const [activeTab, setActiveTab] = useState("dev");

  const teamMembers = {
    dev: [
      { key: "samuel", image: "/team/Samuel.png" },
      { key: "lucas", image: "/team/Lucas.png" },
      { key: "metheo", image: "/team/Matheo.png" },
      { key: "antoine", image: "/team/Antoine.png" },
      { key: "louis", image: "/team/Louis.png" },
    ],
    design: [
      { key: "charlotte", image: "/team/Charlotte.png" },
      { key: "amelie", image: "/team/Amelie.png" },
      { key: "sophia", image: "/team/Sophia.png" },
    ],
    
  };

  const stats = [
    { label: t("about.story.stats.years"), icon: Award },
    { label: t("about.story.stats.projects"), icon: Target },
    { label: t("about.story.stats.experts"), icon: Users },
    { label: t("about.story.stats.satisfaction"), icon: Star },
    { label: t("about.story.stats.retention"), icon: Heart },
  ];

  const sectors = [
    { key: "tourism", icon: MapPin },
    { key: "ecommerce", icon: BarChart },
    { key: "education", icon: Lightbulb },
    { key: "b2b", icon: Briefcase },
    { key: "coaching", icon: Users },
    { key: "industry", icon: Cpu },
  ];

  const techCategories = [
    { key: "frontend", icon: Code },
    { key: "backend", icon: Database },
    { key: "mobile", icon: Smartphone },
    { key: "cms", icon: Palette },
    { key: "infrastructure", icon: Cloud },
    { key: "tools", icon: Target },
  ];

  const values = [
    { key: "quality", icon: Shield },
    { key: "deadlines", icon: Clock },
    { key: "innovation", icon: Lightbulb },
    { key: "partnership", icon: Heart },
    { key: "transparency", icon: MessageCircle },
    { key: "education", icon: Award },
  ];

  const whyChooseUs = [
    { key: "expertise", icon: Award },
    { key: "local", icon: MapPin },
    { key: "humanSize", icon: Users },
    { key: "roi", icon: TrendingUp },
    { key: "support", icon: Shield },
  ];

  const testimonials = ["privateHonors", "lydia", "olivier", "leo"];

  const futureGoals = [
    { key: "territorial", icon: MapPin },
    { key: "innovation", icon: Lightbulb },
    { key: "education", icon: Award },
    { key: "impact", icon: Heart },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-blue-200">
        <div className="flex flex-col h-screen gap-5 justify-center items-center mx-3 sm:mx-6 lg:mx-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center font-extrabold text-gray-800 max-w-5xl">
            {t("about.hero.subtitle")}
          </h1>
          <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4 text-base sm:text-lg text-gray-700 text-center px-4">
            <p>{t("about.hero.description1")}</p>
            <p className="font-semibold text-gray-800">{t("about.hero.description2")}</p>
            <p>{t("about.hero.description3")}</p>
          </div>
          <HeroButtons />
        </div>
      </div>

      {/* Story Section */}
      <div className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl text-center font-bold text-gray-800 mb-4">
            {t("about.story.title")}
          </h2>
          <h3 className="text-xl sm:text-2xl text-center text-blue-600 font-semibold mb-6">
            {t("about.story.subtitle")}
          </h3>
          <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto mb-8">
            {t("about.story.description")}
          </p>

          {/* Founders */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-blue-50 p-6 rounded-2xl border-2 border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden rounded-xl bg-blue-100 mb-4">
                <img
                  src="/team/Karan.png"
                  alt={t("about.story.founders.karan.name")}
                  className="w-full h-full object-contain mix-blend-multiply"
                />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">
                {t("about.story.founders.karan.name")}
              </h4>
              <p className="text-blue-600 font-semibold mb-3">
                {t("about.story.founders.karan.role")}
              </p>
              <p className="text-gray-600">
                {t("about.story.founders.karan.description")}
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-2xl border-2 border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden rounded-xl bg-blue-100 mb-4">
                <img
                  src="/team/Thomas.png"
                  alt={t("about.story.founders.thomas.name")}
                  className="w-full h-full object-contain mix-blend-multiply"
                />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">
                {t("about.story.founders.thomas.name")}
              </h4>
              <p className="text-blue-600 font-semibold mb-3">
                {t("about.story.founders.thomas.role")}
              </p>
              <p className="text-gray-600">
                {t("about.story.founders.thomas.description")}
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="mb-12">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 text-center mb-8">
              {t("about.story.stats.title")}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="flex flex-col items-center p-4 sm:p-6 bg-white rounded-2xl shadow-[5px_5px_0px_4px_rgb(147,197,253),_-5px_-5px_0px_rgba(255,255,255,1)] border border-gray-200 hover:shadow-lg transition-shadow duration-300 hover:border-blue-400">
                    <div className="flex items-center justify-center p-3 sm:p-4 bg-blue-200 rounded-2xl mb-3 mx-auto">
                      <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />
                    </div>
                    <p className="text-sm sm:text-base text-gray-800 font-semibold text-center">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto">
            {t("about.story.location")}
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl text-center font-bold text-gray-800 mb-8 sm:mb-12">
            {t("about.mission.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-blue-600 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Mission</h3>
              <p className="text-lg text-gray-600">{t("about.mission.mission")}</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-blue-600">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Vision</h3>
              <p className="text-lg text-gray-600">{t("about.mission.vision")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl text-center font-bold text-gray-800 mb-8 sm:mb-12">
            {t("about.team.title")}
          </h2>

          {/* Team Tabs */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
            <button
              onClick={() => setActiveTab("dev")}
              className={`px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base rounded-full font-semibold transition-all ${
                activeTab === "dev"
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {t("about.team.devTeam")}
            </button>
            <button
              onClick={() => setActiveTab("design")}
              className={`px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base rounded-full font-semibold transition-all ${
                activeTab === "design"
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {t("about.team.designTeam")}
            </button>
            
          </div>

          {/* Team Members */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers[activeTab].map((member, index) => {
              const key = `about.team.members.${member.key}`;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="aspect-square bg-blue-100 overflow-hidden">
                    <img
                      src={member.image}
                      alt={t(`${key}.name`)}
                      className="w-full h-full object-contain mix-blend-multiply"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">
                      {t(`${key}.name`)}
                    </h3>
                    <p className="text-blue-600 font-semibold mb-3">
                      {t(`${key}.role`)}
                    </p>
                    <p className="text-gray-600 mb-4 text-sm">
                      {t(`${key}.description`)}
                    </p>
                    {t(`${key}.quote`, { defaultValue: "" }) && (
                      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                        <Quote className="w-5 h-5 text-blue-600 mb-2" />
                        <p className="text-sm italic text-gray-700">
                          {t(`${key}.quote`, { defaultValue: "" })}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Sectors Section */}
      <div className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl text-center font-bold text-gray-800 mb-4">
            {t("about.sectors.title")}
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            {t("about.sectors.subtitle")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {sectors.map((sector, index) => {
              const Icon = sector.icon;
              const key = `about.sectors.items.${sector.key}`;
              
              return (
                <div
                  key={index}
                  className="bg-white p-5 sm:p-6 rounded-2xl shadow-[5px_5px_0px_4px_rgb(147,197,253),_-5px_-5px_0px_rgba(255,255,255,1)] border border-gray-200 hover:shadow-lg hover:border-blue-400 transition-all duration-300"
                >
                  <div className="flex items-center justify-center p-3 sm:p-4 bg-blue-200 rounded-2xl mb-4 mx-auto w-fit">
                    <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">
                    {t(`${key}.title`)}
                  </h3>
                  <p className="text-gray-600 text-center">{t(`${key}.description`)}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-blue-600 text-white p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              {t("about.sectors.approach.title")}
            </h3>
            <p className="text-lg">{t("about.sectors.approach.description")}</p>
          </div>
        </div>
      </div>

      {/* Technologies Section */}
      <div className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl text-center font-bold text-gray-800 mb-8 sm:mb-12">
            {t("about.technologies.title")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {techCategories.map((category, index) => {
              const Icon = category.icon;
              const key = `about.technologies.${category.key}`;
              const items = t(`${key}.items`, { returnObjects: true });
              
              return (
                <div
                  key={index}
                  className="bg-white p-5 sm:p-6 rounded-2xl shadow-[5px_5px_0px_4px_rgb(147,197,253),_-5px_-5px_0px_rgba(255,255,255,1)] border border-gray-200 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center p-3 bg-blue-200 rounded-2xl">
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">
                      {t(`${key}.title`)}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {Array.isArray(items) && items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl text-center font-bold text-gray-800 mb-8 sm:mb-12">
            {t("about.values.title")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              const key = `about.values.items.${value.key}`;
              
              return (
                <div
                  key={index}
                  className="bg-white p-5 sm:p-6 rounded-2xl shadow-[5px_5px_0px_4px_rgb(147,197,253),_-5px_-5px_0px_rgba(255,255,255,1)] border border-gray-200 hover:shadow-lg hover:border-blue-400 transition-all duration-300"
                >
                  <div className="flex items-center justify-center p-3 sm:p-4 bg-blue-200 rounded-2xl mb-4 mx-auto w-fit">
                    <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                    {t(`${key}.title`)}
                  </h3>
                  <p className="text-gray-600 mb-4 text-center">{t(`${key}.description`)}</p>
                  {t(`${key}.quote`, { defaultValue: "" }) && (
                    <div className="bg-blue-50 p-4 rounded-lg italic text-gray-700 text-sm">
                      "{t(`${key}.quote`, { defaultValue: "" })}"
                    </div>
                  )}
                  {t(`${key}.testimonial`, { defaultValue: "" }) && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-sm text-gray-600 italic">
                        "{t(`${key}.testimonial`, { defaultValue: "" })}"
                      </p>
                      {t(`${key}.author`, { defaultValue: "" }) && (
                        <p className="text-sm font-semibold text-blue-600 mt-1">
                          - {t(`${key}.author`, { defaultValue: "" })}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl text-center font-bold text-gray-800 mb-8 sm:mb-12">
            {t("about.whyChooseUs.title")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              const key = `about.whyChooseUs.items.${item.key}`;
              
              return (
                <div
                  key={index}
                  className="bg-white p-5 sm:p-6 rounded-2xl shadow-[5px_5px_0px_4px_rgb(147,197,253),_-5px_-5px_0px_rgba(255,255,255,1)] border border-gray-200 hover:shadow-lg hover:border-blue-400 transition-all duration-300"
                >
                  <div className="flex items-center justify-center p-3 sm:p-4 bg-blue-200 rounded-2xl mb-4 mx-auto w-fit">
                    <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center">{t(`${key}.title`)}</h3>
                  <p className="text-gray-600 text-center">{t(`${key}.description`)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl text-center font-bold text-gray-800 mb-8 sm:mb-12">
            {t("about.testimonials.title")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => {
              const key = `about.testimonials.items.${testimonial}`;
              
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-blue-600 hover:shadow-xl hover:border-blue-400 transition-all duration-300"
                >
                  <Quote className="w-10 h-10 text-blue-600 mb-4" />
                  <p className="text-gray-700 mb-6 italic text-lg">
                    "{t(`${key}.text`, { defaultValue: "" })}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xl">
                        {(t(`${key}.name`, { defaultValue: "" }) || "?").charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-gray-800">{t(`${key}.name`, { defaultValue: "" })}</p>
                      <p className="text-sm text-gray-600">{t(`${key}.role`, { defaultValue: "" })}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Future Vision Section */}
      <div className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl text-center font-bold text-gray-800 mb-4">
            {t("about.future.title")}
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            {t("about.future.subtitle")}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {futureGoals.map((goal, index) => {
              const Icon = goal.icon;
              const key = `about.future.items.${goal.key}`;
              
              return (
                <div
                  key={index}
                  className="bg-white p-5 sm:p-6 rounded-2xl shadow-[5px_5px_0px_4px_rgb(147,197,253),_-5px_-5px_0px_rgba(255,255,255,1)] border border-gray-200 hover:shadow-lg hover:border-blue-400 transition-all duration-300"
                >
                  <div className="flex items-center justify-center p-3 sm:p-4 bg-blue-200 rounded-2xl mb-4 mx-auto w-fit">
                    <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center">{t(`${key}.title`)}</h3>
                  <p className="text-gray-600 text-center">{t(`${key}.description`)}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-[5px_5px_0px_4px_rgb(147,197,253),_-5px_-5px_0px_rgba(255,255,255,1)] border border-gray-200 max-w-4xl mx-auto text-center hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-4">Ambition</h3>
            <p className="text-lg text-gray-700">{t("about.future.ambition")}</p>
          </div>
        </div>
      </div>

      

      <FormCTA />
    </div>
  );
};

export default About;
