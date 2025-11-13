"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import {
  Mail,
  User,
  Phone,
  Globe,
  Briefcase,
  CheckCircle2,
  AlertCircle,
  Search,
  FileText,
  BarChart,
  Link2,
  Settings,
  TrendingUp,
  Target,
  Users,
  Building2,
  Rocket,
  RefreshCcw,
  Lightbulb,
} from "lucide-react";
import HeroButtons from "@/components/HeroButtons/page";
import FAQs from "@/components/Faqs/page";

const INITIAL_FORM_STATE = {
  email: "",
  name: "",
  phone: "",
  company: "",
  website: "",
  message: "",
};

const SeoAuditPage = ({ translations }) => {
  const t = (key) => {
    const keys = key.split(".");
    let value = translations;
    for (const k of keys) {
      value = value?.[k] ?? key;
      if (typeof value !== "object") break;
    }
    return value;
  };

  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    const urlRegex = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/;

    if (!emailRegex.test(formData.email)) {
      errors.email = t("seoAudit.form.errors.invalidEmail");
    }

    if (!phoneRegex.test(formData.phone)) {
      errors.phone = t("seoAudit.form.errors.invalidPhone");
    }

    if (!urlRegex.test(formData.website)) {
      errors.website = t("seoAudit.form.errors.invalidWebsite");
    }

    Object.entries(formData).forEach(([key, value]) => {
      if (!value.trim() && key !== "message") {
        errors[key] = t("seoAudit.form.errors.required");
      }
    });

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const resetForm = () => {
    setFormData(INITIAL_FORM_STATE);
    setFieldErrors({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error(t("seoAudit.form.errors.pleaseFixErrors"));
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch(`https://numispark.com/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (result.success === true) {
        toast.success(t("seoAudit.form.success"));
        resetForm();
      } else {
        toast.error(t("seoAudit.form.server"));
      }
    } catch (error) {
      toast.error(t("seoAudit.form.server"));
    } finally {
      setIsSubmitting(false);
    }
  };

  const pillarsData = t("seoAudit.pillars.items", { returnObjects: true });
  const benefits = t("seoAudit.hero.benefits", { returnObjects: true });
  const problemIssues = t("seoAudit.problem.issues", { returnObjects: true });
  const benefitsItems = t("seoAudit.benefits.items", { returnObjects: true });
  const processSteps = t("seoAudit.process.steps", { returnObjects: true });
  const whyChooseReasons = t("seoAudit.whyChooseUs.reasons", {
    returnObjects: true,
  });
  const forWhoTargets = t("seoAudit.forWho.targets", { returnObjects: true });
  const faqItems = t("seoAudit.faq.items", { returnObjects: true });

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-screen flex flex-col sm:flex-row justify-center items-center overflow-hidden bg-blue-200">
        <video
          title="seo-audit-hero-video"
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
            {t("seoAudit.hero.title")}
          </h1>
          <p className="max-w-3xl text-gray-800 text-lg text-center font-medium">
            {t("seoAudit.hero.subtitle")}
          </p>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl">
            {Array.isArray(benefits) &&
              benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-md"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm font-semibold text-gray-700">
                    {benefit}
                  </span>
                </div>
              ))}
          </div>
          <HeroButtons />
        </div>
      </div>
      
      {/* Form Section */}
      <div
        id="audit-form"
        className="py-16 bg-gradient-to-br from-blue-50 to-blue-100"
      >
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {t("seoAudit.hero.cta")}
            </h2>
          </div>

          <form
            onSubmit={handleSubmit}
            className="shadow-[5px_5px_0px_4px_rgb(147,197,253),_-5px_-5px_0px_rgba(255,255,255,1)] bg-white rounded-3xl p-6 md:p-10 border-2 border-gray-200"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: "email", type: "email", Icon: Mail },
                { name: "name", type: "text", Icon: User },
                { name: "phone", type: "tel", Icon: Phone },
                { name: "company", type: "text", Icon: Briefcase },
              ].map(({ name, type, Icon }) => (
                <div key={name} className="relative">
                  <input
                    name={name}
                    type={type}
                    value={formData[name]}
                    onChange={handleChange}
                    required
                    placeholder={t(`seoAudit.form.input.${name}`)}
                    disabled={isSubmitting}
                    className={`w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10 ${
                      fieldErrors[name] ? "border-red-500" : ""
                    }`}
                  />
                  <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-600 w-5 h-5" />
                  {fieldErrors[name] && (
                    <span className="text-red-500 text-sm mt-1">
                      {fieldErrors[name]}
                    </span>
                  )}
                </div>
              ))}
              <div className="relative md:col-span-2">
                <input
                  name="website"
                  type="url"
                  value={formData.website}
                  onChange={handleChange}
                  required
                  placeholder={t("seoAudit.form.input.website")}
                  disabled={isSubmitting}
                  className={`w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10 ${
                    fieldErrors.website ? "border-red-500" : ""
                  }`}
                />
                <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-600 w-5 h-5" />
                {fieldErrors.website && (
                  <span className="text-red-500 text-sm mt-1">
                    {fieldErrors.website}
                  </span>
                )}
              </div>
            </div>

            <div className="mt-4">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t("seoAudit.form.input.textarea.placeholder")}
                disabled={isSubmitting}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
              ></textarea>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-lg"
              >
                {isSubmitting
                  ? t("seoAudit.form.submitting")
                  : t("seoAudit.form.submit")}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Problem Section */}
      <div className="py-16 bg-white">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-4xl px-2 text-center font-bold text-gray-800 mb-8">
            {t("seoAudit.problem.title")}
          </h2>
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            {t("seoAudit.problem.intro")}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {Array.isArray(problemIssues) &&
              problemIssues.map((issue, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-6 bg-red-50 border-l-4 border-red-500 rounded-lg shadow-md"
                >
                  <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{issue}</p>
                </div>
              ))}
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg shadow-md max-w-4xl mx-auto">
            <p className="text-lg text-gray-800 font-medium">
              {t("seoAudit.problem.solution")}
            </p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-4xl px-2 text-center font-bold text-gray-800 mb-12">
            {t("seoAudit.benefits.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Array.isArray(benefitsItems) &&
              benefitsItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-white shadow-[5px_5px_0px_4px_rgb(147,197,253),_-5px_-5px_0px_rgba(255,255,255,1)] rounded-2xl border border-gray-200 transition-shadow duration-300"
                >
                  <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-lg">{item}</p>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* 3 Pillars Section */}
      <div className="py-16 bg-white">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-4xl px-2 text-center font-bold text-gray-800 mb-12">
            {t("seoAudit.pillars.title")}
          </h2>
          <div className="space-y-12">
            {Array.isArray(pillarsData) &&
              pillarsData.map((pillar, index) => {
                const icons = [Settings, FileText, Link2];
                const Icon = icons[index];

                return (
                  <div
                    key={index}
                    className="p-8 bg-gray-50 shadow-[5px_5px_0px_4px_rgb(147,197,253),_-5px_-5px_0px_rgba(255,255,255,1)] rounded-2xl border border-gray-200 transition-shadow duration-300"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-4 bg-blue-200 rounded-2xl">
                        <Icon className="w-10 h-10 text-blue-600" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                        {pillar.name}
                      </h3>
                    </div>
                    <p className="text-lg text-gray-700 mb-6">
                      {pillar.description}
                    </p>

                    <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                      <Lightbulb className="w-5 h-5 text-blue-600" />
                      {pillar.subtitle}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                      {Array.isArray(pillar.sections) &&
                        pillar.sections.map((section, secIndex) => (
                          <div
                            key={secIndex}
                            className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm"
                          >
                            <h5 className="font-bold text-gray-800 mb-3">
                              {section.title}
                            </h5>
                            <ul className="space-y-2">
                              {Array.isArray(section.points) &&
                                section.points.map((point, pointIndex) => (
                                  <li
                                    key={pointIndex}
                                    className="flex items-start gap-2"
                                  >
                                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-gray-600">
                                      {point}
                                    </span>
                                  </li>
                                ))}
                            </ul>
                          </div>
                        ))}
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                      <p className="text-gray-800 font-medium italic">
                        {pillar.outcome}
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-4xl px-2 text-center font-bold text-gray-800 mb-12">
            {t("seoAudit.process.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {Array.isArray(processSteps) &&
              processSteps.map((step, index) => {
                const icons = [User, Search, FileText, Users];
                const Icon = icons[index];

                return (
                  <div
                    key={index}
                    className="text-center p-6 bg-white shadow-[5px_5px_0px_4px_rgb(147,197,253),_-5px_-5px_0px_rgba(255,255,255,1)] rounded-2xl border border-gray-200 transition-shadow duration-300"
                  >
                    <div className="flex justify-center mb-4">
                      <div className="p-4 bg-blue-200 rounded-full">
                        <Icon className="w-8 h-8 text-blue-600" />
                      </div>
                    </div>
                    <div className="text-4xl font-bold text-blue-600 mb-2">
                      0{index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-3">{step.description}</p>
                    <div className="text-sm font-medium text-blue-600">
                      {step.duration}
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-700 font-medium bg-blue-50 inline-block px-6 py-3 rounded-lg">
              {t("seoAudit.process.note")}
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16 bg-white">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-4xl px-2 text-center font-bold text-gray-800 mb-12">
            {t("seoAudit.whyChooseUs.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.isArray(whyChooseReasons) &&
              whyChooseReasons.map((reason, index) => {
                const icons = [BarChart, Users, Target, FileText, TrendingUp];
                const Icon = icons[index];

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

      {/* For Who Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-4xl px-2 text-center font-bold text-gray-800 mb-12">
            {t("seoAudit.forWho.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.isArray(forWhoTargets) &&
              forWhoTargets.map((target, index) => {
                const icons = [
                  Building2,
                  Rocket,
                  Globe,
                  Briefcase,
                  RefreshCcw,
                  Target,
                ];
                const Icon = icons[index];

                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-6 bg-white shadow-[5px_5px_0px_4px_rgb(147,197,253),_-5px_-5px_0px_rgba(255,255,255,1)] rounded-2xl border border-gray-200 transition-shadow duration-300"
                  >
                    <div className="p-3 bg-blue-200 rounded-xl flex-shrink-0">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">
                        {target.name}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {target.description}
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div
        id="audit-form"
        className="py-16 bg-gradient-to-br from-blue-50 to-blue-100"
      >
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {t("seoAudit.hero.cta")}
            </h2>
          </div>

          <form
            onSubmit={handleSubmit}
            className="shadow-[5px_5px_0px_4px_rgb(147,197,253),_-5px_-5px_0px_rgba(255,255,255,1)] bg-white rounded-3xl p-6 md:p-10 border-2 border-gray-200"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: "email", type: "email", Icon: Mail },
                { name: "name", type: "text", Icon: User },
                { name: "phone", type: "tel", Icon: Phone },
                { name: "company", type: "text", Icon: Briefcase },
              ].map(({ name, type, Icon }) => (
                <div key={name} className="relative">
                  <input
                    name={name}
                    type={type}
                    value={formData[name]}
                    onChange={handleChange}
                    required
                    placeholder={t(`seoAudit.form.input.${name}`)}
                    disabled={isSubmitting}
                    className={`w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10 ${
                      fieldErrors[name] ? "border-red-500" : ""
                    }`}
                  />
                  <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-600 w-5 h-5" />
                  {fieldErrors[name] && (
                    <span className="text-red-500 text-sm mt-1">
                      {fieldErrors[name]}
                    </span>
                  )}
                </div>
              ))}
              <div className="relative md:col-span-2">
                <input
                  name="website"
                  type="url"
                  value={formData.website}
                  onChange={handleChange}
                  required
                  placeholder={t("seoAudit.form.input.website")}
                  disabled={isSubmitting}
                  className={`w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10 ${
                    fieldErrors.website ? "border-red-500" : ""
                  }`}
                />
                <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-600 w-5 h-5" />
                {fieldErrors.website && (
                  <span className="text-red-500 text-sm mt-1">
                    {fieldErrors.website}
                  </span>
                )}
              </div>
            </div>

            <div className="mt-4">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t("seoAudit.form.input.textarea.placeholder")}
                disabled={isSubmitting}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
              ></textarea>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-lg"
              >
                {isSubmitting
                  ? t("seoAudit.form.submitting")
                  : t("seoAudit.form.submit")}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* FAQ Section */}
      <FAQs
        title={t("seoAudit.faq.title")}
        faqData={Object.keys(faqItems).map((key) => ({
          question: faqItems[key].question,
          answer: faqItems[key].answer,
        }))}
      />
    </div>
  );
};

export default SeoAuditPage;
