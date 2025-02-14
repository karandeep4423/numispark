"use client";
import React, { useState } from "react";
import {
  Mail,
  User,
  Phone,
  MapPin,
  ChevronDown,
  Briefcase,
  BadgeEuro,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

const INITIAL_FORM_STATE = {
  email: "",
  name: "",
  phone: "",
  message: "",
  city: "",
  serviceType: "",
  budget: "",
};

const Contact = () => {
  const { t } = useTranslation("contact");
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[\d\s-]{10,}$/;

    // Email validation
    if (!emailRegex.test(formData.email)) {
      errors.email = t("contact.form.errors.invalidEmail");
    }

    // Phone validation
    if (!phoneRegex.test(formData.phone)) {
      errors.phone = t("contact.form.errors.invalidPhone");
    }

    // Required field validation
    Object.entries(formData).forEach(([key, value]) => {
      if (!value.trim()) {
        errors[key] = t(`contact.form.errors.required`);
      }
    });

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
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
      toast.error(t("contact.form.errors.pleaseFixErrors"));
      return;
    }

    setIsSubmitting(true);
    console.log("formData", formData);

    try {
      const res = await fetch(`http://localhost:3000/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      console.log(result);
      if (result.success === true) {
        toast.success(t("contact.form.errors.success"));
        resetForm();
      } else {
        toast.error(t("contact.form.errors.server"));
      }
    } catch (error) {
      toast.error(t("contact.form.errors.server"));
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputFields = [
    {
      name: "email",
      type: "email",
      placeholder: t("contact.form.input.email"),
      Icon: Mail,
    },
    {
      name: "name",
      type: "text",
      placeholder: t("contact.form.input.name"),
      Icon: User,
    },
    {
      name: "phone",
      type: "tel",
      placeholder: t("contact.form.input.phone"),
      Icon: Phone,
    },
    {
      name: "city",
      type: "text",
      placeholder: t("contact.form.input.city"),
      Icon: MapPin,
    },
  ];

  const dropdownFields = [
    {
      name: "serviceType",
      placeholder: t("contact.form.select.serviceType"),
      Icon: Briefcase,
      options: [
        {
          value: t("contact.form.select.options.serviceType.webDevelopment"),
          label: t("contact.form.select.options.serviceType.webDevelopment"),
        },
        {
          value: t("contact.form.select.options.serviceType.appDevelopment"),
          label: t("contact.form.select.options.serviceType.appDevelopment"),
        },
        {
          value: t(
            "contact.form.select.options.serviceType.SocialMediaMarketing"
          ),
          label: t(
            "contact.form.select.options.serviceType.SocialMediaMarketing"
          ),
        },
        {
          value: t("contact.form.select.options.serviceType.seoServices"),
          label: t("contact.form.select.options.serviceType.seoServices"),
        },
        {
          value: t(
            "contact.form.select.options.serviceType.ecommerceDevelopment"
          ),
          label: t(
            "contact.form.select.options.serviceType.ecommerceDevelopment"
          ),
        },
        {
          value: t("contact.form.select.options.serviceType.SaasDevelopment"),
          label: t("contact.form.select.options.serviceType.SaasDevelopment"),
        },
        {
          value: t("contact.form.select.options.serviceType.AIandAutomation"),
          label: t("contact.form.select.options.serviceType.AIandAutomation"),
        },
        {
          value: t(
            "contact.form.select.options.serviceType.WebsiteMobileAppDesign"
          ),
          label: t(
            "contact.form.select.options.serviceType.WebsiteMobileAppDesign"
          ),
        },
        {
          value: t(
            "contact.form.select.options.serviceType.SocialMediaPost&LogoDesign"
          ),
          label: t(
            "contact.form.select.options.serviceType.SocialMediaPost&LogoDesign"
          ),
        },
      ],
    },
    {
      name: "budget",
      placeholder: t("contact.form.select.budget"),
      Icon: BadgeEuro,
      options: [
        {
          value: t("contact.form.select.options.budget.below1000"),
          label: t("contact.form.select.options.budget.below1000"),
        },
        {
          value: t("contact.form.select.options.budget.1000to5000"),
          label: t("contact.form.select.options.budget.1000to5000"),
        },
        {
          value: t("contact.form.select.options.budget.5000to10000"),
          label: t("contact.form.select.options.budget.5000to10000"),
        },
        {
          value: t("contact.form.select.options.budget.above10000"),
          label: t("contact.form.select.options.budget.above10000"),
        },
      ],
    },
  ];

  return (
    <div className="bg-gray-50">
      <div className="m-auto pt-8 max-w-screen-xl">
        <div className="mx-5 lg:mx-32 flex flex-col items-center">
          <div className="flex flex-col mx-10">
            <div className="flex items-center justify-center">
              <h1 className="text-gray-800 text-center my-10 sm:mb-0 text-4xl sm:text-5xl font-bold">
                {t("contact.heading")}
              </h1>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="shadow-[5px_5px_0px_4px_rgb(147,197,253),_-5px_-5px_0px_rgba(255,255,255,1)] h-fit w-full md:w-10/12 mt-8 rounded-3xl mx-10 p-6 md:p-10 mb-16 border-2 border-gray-200"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Input Fields */}
              {inputFields.map(({ name, type, placeholder, Icon }) => (
                <div key={name} className="w-full flex flex-col">
                  <div className="relative">
                    <input
                      name={name}
                      type={type}
                      value={formData[name]}
                      onChange={handleChange}
                      required
                      placeholder={placeholder}
                      aria-label={placeholder}
                      disabled={isSubmitting}
                      className={`border ${
                        fieldErrors[name] ? "border-red-500" : "border-gray-400"
                      } outline-blue-600 rounded-lg p-4 pl-12 w-full`}
                    />
                    <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-600" />
                  </div>
                  {fieldErrors[name] && (
                    <span className="text-red-500 text-sm mt-1">
                      {fieldErrors[name]}
                    </span>
                  )}
                </div>
              ))}

              {/* Dropdowns */}
              {dropdownFields.map(({ name, placeholder, Icon, options }) => (
                <div key={name} className="w-full  flex flex-col">
                  <div className="relative">
                    <select
                      name={name}
                      value={formData[name]}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className={`border ${
                        fieldErrors[name] ? "border-red-500" : "border-gray-400"
                      } outline-blue-600 rounded-lg p-4 pl-12 w-full bg-white appearance-none`}
                    >
                      <option value="" disabled>
                        {placeholder}
                      </option>
                      {options.map(({ value, label }) => (
                        <option key={value} value={value}>
                          {label}
                        </option>
                      ))}
                    </select>
                    <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-600" />
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-600" />
                  </div>
                  {fieldErrors[name] && (
                    <span className="text-red-500 text-sm mt-1">
                      {fieldErrors[name]}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Message */}
            <div className="w-full mt-4">
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  placeholder={t("contact.form.textarea.placeholder")}
                  aria-label={t("contact.form.textarea.placeholder")}
                  className={`rounded-xl w-full outline-blue-600 h-32 p-4 text-xl border-2 ${
                    fieldErrors.message ? "border-red-500" : ""
                  }`}
                ></textarea>
              </div>
              {fieldErrors.message && (
                <span className="text-red-500 text-sm mt-1">
                  {fieldErrors.message}
                </span>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex pt-10 justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="text-lg font-medium w-3/4 py-2 rounded-xl text-center bg-blue-600 text-white transition-all ease-out duration-300 hover:bg-blue-500 hover:ring-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting
                  ? t("contact.form.submitting")
                  : t("contact.form.submit")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
