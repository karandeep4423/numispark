import { useState } from "react";
import { PlusCircle, MinusCircle } from "lucide-react";

const FAQs = ({ faqData }) => {
  const [openIndex, setOpenIndex] = useState(null);

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

  return (
    <div className="max-w-3xl mb-5 mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-gray-800 text-center my-12">
        Frequently Asked Questions
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
