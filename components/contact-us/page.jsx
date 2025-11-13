"use client";
import { useTranslation } from "react-i18next";
import FAQs from "@/components/Faqs/page";
import HeroButtons from "@/components/HeroButtons/page";
import FormCTA from "@/components/Form-CTA/page";

const Contact = () => {
  const { t } = useTranslation("contact");

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-screen bg-blue-200">
        <div className="relative z-10 flex flex-col h-screen gap-8 justify-center items-center px-4">
          <h1 className="text-5xl max-w-screen-xl text-gray-800 sm:text-6xl text-center font-extrabold">
            {t("contact.hero.title")}
          </h1>

          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-center text-gray-800 mb-6">
              {t("contact.intro.description")}
            </p>
            <p className="text-lg text-center text-gray-700 mb-8">
              {t("contact.intro.cta")}
            </p>
          </div>

          <HeroButtons />
        </div>
      </div>
      
      {/* Form CTA Section */}
      <FormCTA />

      {/* FAQ Section */}
      <div className="bg-gray-50  pb-8 -mt-12 pt-4">
        <FAQs
          faqData={Object.keys(
            t("contact.faq.items", { returnObjects: true })
          ).map((key) => ({
            question: t(`contact.faq.items.${key}.question`),
            answer: t(`contact.faq.items.${key}.answer`),
          }))}
        />
      </div>
    </div>
  );
};

export default Contact;
