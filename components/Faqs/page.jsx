 "use client";
import { useState, useEffect } from "react";
import { PlusCircle, MinusCircle } from "lucide-react";

const FAQs = ({ faqData, title }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const [language, setLanguage] = useState('fr'); // default to French

  const FAQItem = ({ question, children, isOpen, onClick }) => {
    return (
      <div className="border-l-4 border-blue-300 bg-white rounded-lg shadow-sm mb-4 overflow-hidden">
        <button
          onClick={onClick}
          className="w-full p-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
        >
          <span className="text-gray-700 text-lg font-medium">{question}</span>
          {isOpen ? (
            <MinusCircle className="text-blue-600 w-6 h-6 flex-shrink-0" />
          ) : (
            <PlusCircle className="text-blue-600 w-6 h-6 flex-shrink-0" />
          )}
        </button>
        <div
          className={`overflow-hidden transition-all duration-200 ${
            isOpen ? "max-h-96 p-4" : "max-h-0"
          }`}
        >
          <div className="text-gray-600">{children}</div>
        </div>
      </div>
    );
  };

  // Translation object for the title
  const translations = {
    en: "Frequently Asked Questions",
    de: "Häufig gestellte Fragen",
    fr: "Questions fréquemment posées"
  };

  useEffect(() => {
    // Get language from URL
    const path = window.location.pathname;
    if (path.includes('/en')) {
      setLanguage('en');
    } else if (path.includes('/de')) {
      setLanguage('de');
    } else {
      setLanguage('fr'); // default for root path
    }
  }, []);

  return (
    <div className="max-w-3xl mb-5 mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-gray-800 text-center my-12">
        {title || translations[language]}
      </h1>
      <div className="space-y-6">
        {faqData.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            {faq.answer}
          </FAQItem>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
