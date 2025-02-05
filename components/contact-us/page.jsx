"use client";
import React, { useState } from "react";
import {
  Mail,
  User,
  Phone,
  MapPin,
  ChevronDown,
  Briefcase,
  BadgeEuro
} from "lucide-react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation("contact");

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    message: "",
    city: "",
    serviceType: "",
    budget: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, name, phone, message, city, serviceType, budget } = formData;

    if (email && name && phone && message && city && serviceType && budget) {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/contact`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        });

        const result = await res.json();
        if (result.err) {
          console.error("Server error, Try again");
          return;
        }

        // Reset form
        setFormData({
          email: "",
          name: "",
          phone: "",
          message: "",
          city: "",
          serviceType: "",
          budget: ""
        });

        console.log("Your message has been sent successfully");
      } catch (error) {
        console.error("Something went wrong. Try again.", error);
      }
    }
  };

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
              {[
                {
                  name: "email",
                  type: "email",
                  placeholder: t("contact.form.input.email"),
                  Icon: Mail
                },
                {
                  name: "name",
                  type: "text",
                  placeholder: t("contact.form.input.name"),
                  Icon: User
                },
                {
                  name: "phone",
                  type: "tel",
                  placeholder: t("contact.form.input.phone"),
                  Icon: Phone
                },
                {
                  name: "city",
                  type: "text",
                  placeholder: t("contact.form.input.city"),
                  Icon: MapPin
                }
              ].map(({ name, type, placeholder, Icon }) => (
                <div key={name} className="w-full flex items-center relative">
                  <input
                    name={name}
                    type={type}
                    value={formData[name]}
                    onChange={handleChange}
                    required
                    placeholder={placeholder}
                    aria-label={placeholder}
                    className="border border-gray-400 rounded-lg p-4 pl-12 w-full"
                  />
                  <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-600" />
                </div>
              ))}

              {/* Dropdowns */}
              {[
                {
                  name: "serviceType",
                  placeholder: t("contact.form.select.serviceType"),
                  Icon: Briefcase,
                  options: [
                    { value: "webDevelopment", label: t("contact.form.select.options.serviceType.webDevelopment") },
                    { value: "appDevelopment", label: t("contact.form.select.options.serviceType.appDevelopment") },
                    { value: "digitalMarketing", label: t("contact.form.select.options.serviceType.digitalMarketing") },
                    { value: "seoServices", label: t("contact.form.select.options.serviceType.seoServices") }
                  ]
                },
                {
                  name: "budget",
                  placeholder: t("contact.form.select.budget"),
                  Icon: BadgeEuro,
                  options: [
                    { value: "below1000", label: t("contact.form.select.options.budget.below1000") },
                    { value: "1000to5000", label: t("contact.form.select.options.budget.1000to5000") },
                    { value: "5000to10000", label: t("contact.form.select.options.budget.5000to10000") },
                    { value: "above10000", label: t("contact.form.select.options.budget.above10000") }
                  ]
                }
              ].map(({ name, placeholder, Icon, options }) => (
                <div key={name} className="w-full flex items-center relative">
                  <select
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    required
                    className="border border-gray-400 rounded-lg p-4 pl-12 w-full bg-white appearance-none"
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
              ))}
            </div>

            {/* Message */}
            <div className="w-full mt-4">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder={t("contact.form.textarea.placeholder")}
                aria-label={t("contact.form.textarea.placeholder")}
                className="rounded-xl w-full outline-sky-600 hover:outline-offset-2 h-32 p-4 text-xl border-2"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex pt-10 justify-center">
              <button
                type="submit"
                className="text-lg font-medium w-3/4 py-2 rounded-xl text-center bg-blue-600 text-white transition-all ease-out duration-300 hover:bg-blue-500 hover:ring-white"
              >
                {t("contact.form.submit")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

