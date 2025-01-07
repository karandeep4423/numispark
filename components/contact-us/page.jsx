"use client";

import React, { useState } from "react";
import {
  Mail,
  User,
  Phone,
  MapPin,
  ChevronDown,
  Briefcase,
  DollarSign,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    message: "",
    city: "",
    serviceType: "",
    budget: "",
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
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
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
          budget: "",
        });

        console.log("Your message has been sent successfully");
      } catch (error) {
        console.error("Something went wrong. Try again.", error);
      }
    }
  };

  return (
    <div className="mt-20 bg-gray-50">
      <div className="m-auto max-w-screen-xl items-center flex flex-col md:flex-row">
        <div className="flex flex-col mx-10">
          <div className="flex items-center justify-center">
            <h1 className=" text-gray-800text-center mb-8 sm:mb-0 mt-14 text-3xl sm:text-5xl font-bold">
              Prêt à commencer?
            </h1>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)] h-fit w-full md:w-10/12 mt-8 rounded-3xl mx-10 p-6 md:p-10 mb-16 border-2 border-gray-200"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Input Fields */}
            {[
              {
                name: "email",
                type: "email",
                placeholder: "Email",
                Icon: Mail,
              },
              {
                name: "name",
                type: "text",
                placeholder: "Nom complet",
                Icon: User,
              },
              {
                name: "phone",
                type: "tel",
                placeholder: "Numéro de téléphone",
                Icon: Phone,
              },
              {
                name: "city",
                type: "text",
                placeholder: "Ville",
                Icon: MapPin,
              },
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
                placeholder: "Select Service Type",
                Icon: Briefcase,
                options: [
                  { value: "webDevelopment", label: "Web Development" },
                  { value: "appDevelopment", label: "App Development" },
                  { value: "digitalMarketing", label: "Digital Marketing" },
                  { value: "seoServices", label: "SEO Services" },
                ],
              },
              {
                name: "budget",
                placeholder: "Your Budget",
                Icon: DollarSign,
                options: [
                  { value: "below1000", label: "$0 - $1,000" },
                  { value: "1000to5000", label: "$1,000 - $5,000" },
                  { value: "5000to10000", label: "$5,000 - $10,000" },
                  { value: "above10000", label: "Above $10,000" },
                ],
              },
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
              placeholder="Tell us about your project"
              aria-label="Message"
              className="rounded-xl w-full outline-sky-600 hover:outline-offset-2 h-32 p-4 text-xl border-2"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex pt-10 justify-center">
            <button
              type="submit"
              className="text-lg font-medium w-3/4 py-2 rounded-xl text-center bg-[#784F33] text-white transition-all ease-out duration-300 hover:bg-gradient-to-r hover:from-[#E0C49D] hover:to-[#E0C49D] hover:ring-2 hover:ring-offset-2 hover:ring-white"
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
