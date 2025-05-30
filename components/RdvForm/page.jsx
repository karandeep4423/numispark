"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import {
  Mail,
  User,
  Phone,
  MapPin,
  BarChart,
  Search,
  Users,
  AlertTriangle,
  Link2,
  FileText,
  Briefcase,
  Globe,
} from "lucide-react";

const INITIAL_FORM_STATE = {
  email: "",
  name: "",
  phone: "",
  message: "",
  city: "",
  companyName: "",
  website: "",
};

const RdvForm = ({ translations, lng }) => {
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
      errors.email = t("form.errors.invalidEmail");
    }

    if (!phoneRegex.test(formData.phone)) {
      errors.phone = t("form.errors.invalidPhone");
    }

    if (formData.website && !urlRegex.test(formData.website)) {
      errors.website = t("form.errors.invalidWebsite") || "Invalid website URL";
    }

    Object.entries(formData).forEach(([key, value]) => {
      if (!value.trim() && key !== "website") {
        errors[key] = t(`form.errors.required`);
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
      toast.error(t("form.errors.pleaseFixErrors"));
      return;
    }

    setIsSubmitting(true);
    console.log("formData", formData);

    try {
      const res = await fetch(`https://www.numispark.com/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (result.success === true) {
        toast.success(t("form.success"));
        resetForm();
      } else {
        toast.error(t("form.server"));
      }
    } catch (error) {
      toast.error(t("form.server"));
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputFields = [
    {
      name: "email",
      type: "email",
      placeholder: t("form.input.email"),
      Icon: Mail,
    },
    {
      name: "name",
      type: "text",
      placeholder: t("form.input.name"),
      Icon: User,
    },
    {
      name: "phone",
      type: "tel",
      placeholder: t("form.input.phone"),
      Icon: Phone,
    },
    {
      name: "city",
      type: "text",
      placeholder: t("form.input.city"),
      Icon: MapPin,
    },
    {
      name: "companyName",
      type: "text",
      placeholder: t("form.input.companyName"),
      Icon: Briefcase,
    },
    {
      name: "website",
      type: "url",
      placeholder: t("form.input.website"),
      Icon: Globe,
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-3xl shadow-[0_0_0_4px_rgba(147,197,253,0.5)]">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-[20px] border border-blue-200 p-6 shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {inputFields.map(({ name, type, placeholder, Icon }) => (
                  <div key={name} className="relative">
                    <input
                      name={name}
                      type={type}
                      value={formData[name]}
                      onChange={handleChange}
                      required={name !== "website"}
                      placeholder={placeholder}
                      aria-label={placeholder}
                      disabled={isSubmitting}
                      className={`w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10 ${
                        fieldErrors[name] ? "border-red-500" : ""
                      }`}
                    />
                    <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-600" />
                    {fieldErrors[name] && (
                      <span className="text-red-500 text-sm mt-1">{fieldErrors[name]}</span>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  placeholder={t("form.input.textarea.placeholder")}
                  aria-label={t("form.input.textarea.placeholder")}
                  className={`w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 ${
                    fieldErrors.message ? "border-red-500" : ""
                  }`}
                ></textarea>
                {fieldErrors.message && (
                  <span className="text-red-500 text-sm mt-1">{fieldErrors.message}</span>
                )}
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? t("form.submitting") : t("form.submit")}
                </button>
              </div>
            </form>
          </div>

          <div className="flex flex-col gap-6">
            <h1 className="text-4xl font-bold text-gray-800">
              {t("title")}{" "}
              <span className="text-blue-600 bg-blue-100 p-2 rounded-2xl">
                {t("titleHighlight")}
              </span>
            </h1>
            <p className="text-gray-600">{t("description")}</p>

            {/* Reimbursement Highlight Div */}
            {/* <div className="bg-gradient-to-r from-blue-100 to-white rounded-2xl p-6 border border-blue-200 shadow-md animate-fadeIn">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                {t("highlight.title")}
              </h3>
              <p className="text-gray-700">
                {t("highlight.message")}
              </p>
            </div> */}
          </div>
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <div
            className="bg-white p-6 rounded-3xl shadow-[5px_5px_0px_4px_rgb(147,197,253)] text-center mb-6"
          >
            <h2 className="text-2xl font-semibold text-gray-800">
              {t("analysisSection.title")}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className="bg-white p-6 rounded-3xl shadow-[5px_5px_0px_4px_rgb(147,197,253)] flex items-start"
            >
              <div className="bg-blue-100 rounded-full p-3 mr-4 flex-shrink-0">
                <BarChart className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  {t("analysisSection.items.seoPerformance.title")}
                </h3>
                <p className="text-gray-600">
                  {t("analysisSection.items.seoPerformance.description")}
                </p>
              </div>
            </div>
            <div
              className="bg-white p-6 rounded-3xl shadow-[5px_5px_0px_4px_rgb(147,197,253)] flex items-start"
            >
              <div className="bg-blue-100 rounded-full p-3 mr-4 flex-shrink-0">
                <Search className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  {t("analysisSection.items.seaStrategy.title")}
                </h3>
                <p className="text-gray-600">
                  {t("analysisSection.items.seaStrategy.description")}
                </p>
              </div>
            </div>
            <div
              className="bg-white p-6 rounded-3xl shadow-[5px_5px_0px_4px_rgb(147,197,253)] flex items-start"
            >
              <div className="bg-blue-100 rounded-full p-3 mr-4 flex-shrink-0">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  {t("analysisSection.items.competitors.title")}
                </h3>
                <p className="text-gray-600">
                  {t("analysisSection.items.competitors.description")}
                </p>
              </div>
            </div>
            <div
              className="bg-white p-6 rounded-3xl shadow-[5px_5px_0px_4px_rgb(147,197,253)] flex items-start"
            >
              <div className="bg-blue-100 rounded-full p-3 mr-4 flex-shrink-0">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  {t("analysisSection.items.technicalIssues.title")}
                </h3>
                <p className="text-gray-600">
                  {t("analysisSection.items.technicalIssues.description")}
                </p>
              </div>
            </div>
            <div
              className="bg-white p-6 rounded-3xl shadow-[5px_5px_0px_4px_rgb(147,197,253)] flex items-start"
            >
              <div className="bg-blue-100 rounded-full p-3 mr-4 flex-shrink-0">
                <Link2 className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  {t("analysisSection.items.netlinking.title")}
                </h3>
                <p className="text-gray-600">
                  {t("analysisSection.items.netlinking.description")}
                </p>
              </div>
            </div>
            <div
              className="bg-white p-6 rounded-3xl shadow-[5px_5px_0px_4px_rgb(147,197,253)] flex items-start"
            >
              <div className="bg-blue-100 rounded-full p-3 mr-4 flex-shrink-0">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  {t("analysisSection.items.content.title")}
                </h3>
                <p className="text-gray-600">
                  {t("analysisSection.items.content.description")}
                </p>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeIn {
            animation: fadeIn 0.5s ease-out forwards;
          }
        `}</style>
      </div>
    </div>
  );
};

export default RdvForm;