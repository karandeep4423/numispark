"use client";
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import {
  Users,
  Smile,
  TrendingUp,
  MessageCircle,
  Clock,
  Code,
  Smartphone,
  Megaphone,
  Layout,
  Cloud,
  Zap,
  ShoppingCart,
  Brain,
  Target,
  PenTool,
  Rocket,
} from "lucide-react";
import { PlusCircle, MinusCircle, ArrowUpRight } from "lucide-react";
import Contact from "@/components/contact-us/page";

const TECHNOLOGIES = [
  {
    name: "React Js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "Angular Js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg",
  },
  {
    name: "Vue Js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
  },
  {
    name: "Tailwind css",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Node js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
  },
  {
    name: "Django",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
  },
  {
    name: "Laravel",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "MySQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  },
  {
    name: "PostgreSQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Aws",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },
  {
    name: "Google Cloud",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg",
  },
  {
    name: "Microsoft Azure",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg",
  },
];

const Benefits = [
  {
    serviceName: "Reduced Time-to-Market",
    serviceIcon: "Users", // Icon for team and collaboration
    serviceDes:
      "Our experienced team of experts delivers platform-independent business solutions for maximum availability.",
  },
  {
    serviceName: "User-Friendly Interfaces",
    serviceIcon: "Code", // Icon for development and tools
    serviceDes:
      "We use the latest technologies to build robust and scalable solutions tailored to your needs.",
  },
  {
    serviceName: "Cost Savings with Optimized Architecture",
    serviceIcon: "Code", // Icon for development and tools
    serviceDes:
      "We use the latest technologies to build robust and scalable solutions tailored to your needs.",
  },
  {
    serviceName: "Scalability for Future Growth",
    serviceIcon: "Smile", // Icon for customer satisfaction
    serviceDes:
      "We prioritize your success and ensure every solution aligns with your unique goals.",
  },
  {
    serviceName: "Dedicated Post-Launch Support",
    serviceIcon: "TrendingUp", // Icon for growth and performance
    serviceDes:
      "Our proven track record ensures measurable results and consistent success for your business.",
  },
];
const WhyUs = [
  {
    serviceName: "Expertise in Multi-Tenant Architecture",
    serviceIcon: "Users", // Icon for team and collaboration
    serviceDes:
      "Our experienced team of experts delivers platform-independent business solutions for maximum availability.",
  },
  {
    serviceName: "Secure and Scalable Cloud Solutions",
    serviceIcon: "Code", // Icon for development and tools
    serviceDes:
      "We use the latest technologies to build robust and scalable solutions tailored to your needs.",
  },
  {
    serviceName: "Agile Development Process for Quick Delivery",
    serviceIcon: "Smile", // Icon for customer satisfaction
    serviceDes:
      "We prioritize your success and ensure every solution aligns with your unique goals.",
  },
  {
    serviceName: "24/7 Post-Launch Support",
    serviceIcon: "TrendingUp", // Icon for growth and performance
    serviceDes:
      "Our proven track record ensures measurable results and consistent success for your business.",
  },
];
const faqData = [
  {
    question: "How can I request a quote for a project?",
    answer:
      "You can request a quote by filling out our online form or contacting our sales team directly. We'll get back to you within 24 hours with a detailed proposal based on your project requirements.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We serve a wide range of industries including technology, healthcare, finance, retail, education, and manufacturing. Our solutions are customized to meet the specific needs of each sector.",
  },
  {
    question: "What is the typical timeline for a project?",
    answer:
      "Project timelines vary depending on scope and complexity. Typically, small projects take 2-4 weeks, medium projects 1-3 months, and large projects 3-6 months. We'll provide a detailed timeline during the initial consultation.",
  },
];
const portfolioItems = [
  {
    image: "/api/placeholder/400/400",
    category: "UI/ UX Design",
    bgColor: "bg-violet-100",
    dotColor: "bg-violet-500",
  },
  {
    image: "/api/placeholder/400/400",
    category: "App Design",
    bgColor: "bg-emerald-600",
    dotColor: "bg-emerald-500",
  },
  {
    image: "/api/placeholder/400/400",
    category: "App Design",
    bgColor: "bg-amber-400",
    dotColor: "bg-amber-500",
  },
];

const SaaSDevelopment = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const { ref: first, inView: firstSectionIsVisible } = useInView({
    rootMargin: "-200px 0px",
    triggerOnce: "true",
    delay: 200,
  });
  const { ref: second, inView: secondSectionIsVisible } = useInView({
    rootMargin: "-200px 0px",
    triggerOnce: "true",
    delay: 200,
  });
  const { ref: third, inView: thirdSectionIsVisible } = useInView({
    rootMargin: "-200px 0px",
    triggerOnce: "true",
    delay: 200,
  });
  const { ref: fourth, inView: fourthSectionIsVisible } = useInView({
    rootMargin: "-200px 0px",
    triggerOnce: "true",
    delay: 200,
  });
  const { ref: fifth, inView: fifthSectionIsVisible } = useInView({
    rootMargin: "-200px 0px",
    triggerOnce: "true",
    delay: 200,
  });

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
    <div>
      {/* Hero Section */}
      <div className="flex flex-col h-screen gap-5 justify-center items-center">
        <span className="text-2xl text-gray-800 sm:text-6xl text-center font-extrabold">
          Build Scalable SaaS Solutions Tailored to Your Business
        </span>
        <span className="text-xs text-gray-800 sm:text-2xl text-center font-bold">
          From concept to deployment, we create robust SaaS platforms that
          deliver results
        </span>
        <div className="flex flex-col gap-4 mt-5">
          <button className="w-fit text-gray-200 font-bold text-xs sm:text-lg h-fit border-2 rounded-full p-4 bg-blue-600 ">
            Get a Free SaaS Consultation
          </button>
          <button className="w-fit text-gray-200 font-bold text-xs sm:text-lg h-fit border-2 rounded-full p-4 bg-blue-600 ">
            View Our SaaS Portfolio
          </button>
        </div>
      </div>
      {/* Technologies Section */}
      <div className="py-16 bg-gray-50">
        <h2 className="text-4xl text-center font-bold text-gray-800">
          <span className="text-blue-600 m-1 p-2.5 rounded-2xl bg-blue-200">
            Technologies
          </span>
          We Excel In
        </h2>
        <p className="text-xl px-2 text-center font-medium text-gray-600 mt-4">
          The Backbone of Our High Quality Solutions
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4  container mt-10 mx-auto px-4">
          {TECHNOLOGIES.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="shadow-[5px_5px_0px_0px_rgb(147,197,253)] p-4 md:p-8"
            >
              <div className=" flex flex-col items-center justify-center h-24 md:h-16">
                <div className="w-14 h-14 md:w-16 md:h-16 mb-2">
                  <img
                    src={tech.logo}
                    alt={`${tech.name} icon`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-lg md:text-xl text-center font-light">
                  {tech.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Key features*/}
      <div className="pb-16 bg-gray-50">
        <h2 className="text-4xl text-center font-bold text-gray-800">
          Key
          <span className="text-blue-600 bg-blue-200 p-2 m-1 rounded-2xl">
            Features{" "}
          </span>{" "}
          of our SaaS
        </h2>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-4">
          {WhyUs.map((service, index) => {
            const Icon = {
              Users,
              Code,
              Smile,
              TrendingUp,
              MessageCircle,
              Clock,
            }[service.serviceIcon];

            return (
              <div
                key={index}
                className="flex flex-col items-center shadow-[5px_5px_0px_4px_rgb(147,197,253),_-5px_-5px_0px_rgba(255,255,255,1)] p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center justify-center p-2 bg-blue-200 rounded-2xl mb-4">
                  <Icon className="text-blue-600 w-14 h-14" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
                  {service.serviceName}
                </h3>
                <p className="text-gray-600 text-center">
                  {service.serviceDes}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      {/* Benefits of Choosing Us */}
      <div className="pb-16 bg-gray-50">
        <h2 className="text-4xl text-center font-bold text-gray-800">
          <span className="text-blue-600 bg-blue-200 p-2.5 rounded-2xl">
            Benefits
          </span>{" "}
          of Choosing Us
        </h2>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-4">
          {Benefits.map((service, index) => {
            const Icon = {
              Users,
              Code,
              Smile,
              TrendingUp,
              MessageCircle,
              Clock,
            }[service.serviceIcon];

            return (
              <div
                key={index}
                className="flex flex-col items-center shadow-[5px_5px_0px_4px_rgb(147,197,253),_-5px_-5px_0px_rgba(255,255,255,1)] p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center justify-center p-2 bg-blue-200 rounded-2xl mb-4">
                  <Icon className="text-blue-600 w-14 h-14" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
                  {service.serviceName}
                </h3>
                <p className="text-gray-600 text-center">
                  {service.serviceDes}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      {/* Process  */}
      <div className="bg-black  text-white">
        <div className="flex items-center justify-center">
          <h2 className=" relative mt-16 text-center text-5xl font-bold">
            Development Process
          </h2>
          <div className="bg-blue-600 mt-16 absolute   mix-blend-multiply filter blur-2xl h-16 w-56 "></div>
        </div>
        <div className="flex text-lg xl:text-xl max-w-screen-xl m-auto  justify-center items-center mt-10 flex-col">
          <div>
            <span className=" text-black absolute pt-1 -mt-5 -ml-5 text-center text-xl bg-white z-10  rounded-full h-10 w-10">
              {" "}
              1
            </span>
          </div>
          <div
            ref={first}
            className={
              firstSectionIsVisible
                ? " rounded-xl lg:p-6 p-3  opacity-100 w-10/12 relative  flex flex-col lg:flex-row justify-center items-center  border-2 border-white"
                : "rounded-xl lg:p-6 p-3  opacity-50 w-10/12 relative  flex flex-col lg:flex-row justify-center items-center  border-2 border-white"
            }
          >
            <div className="mt-3 lg:mt-0 flex-shrink-0 bg-gray-700 rounded-xl p-6 flex justify-center items-center">
              <Brain className="text-white" size={80} />
            </div>
            <div>
              <h3 className="mt-2 lg:mt-0 text-3xl px-3 text-center font-bold">
                Requirement Analysis
              </h3>
              <p className="ml-3 lg:ml-6 lg:pr-4 p-4 sm:pb-10 sm:px-10 lg:p-0 lg:py-4">
                We collaborate closely to understand your objectives,
                challenges, and goals, ensuring a clear path forward for your
                project. Our focus is to align with your vision right from the
                start.
              </p>
            </div>
          </div>
          <div
            ref={second}
            className={
              secondSectionIsVisible
                ? "w-1 h-24 relative opacity-100  bg-white"
                : "w-1 h-24 relative opacity-50  bg-white"
            }
          ></div>
          <div className="z-40  bg-white">
            <span
              ref={second}
              className={
                secondSectionIsVisible
                  ? "z-40 opacity-100 absolute pt-1 -mt-5 -ml-5 text-center text-xl bg-white  border-2 border-white text-black rounded-full h-10 w-10 z-100"
                  : "z-40 opacity-80 absolute pt-1 -mt-5 -ml-5 text-center text-xl bg-white  border-2 border-white text-black rounded-full h-10 w-10"
              }
            >
              2
            </span>
          </div>
          <div
            ref={second}
            className={
              secondSectionIsVisible
                ? "rounded-xl p-3 lg:p-6 opacity-100 w-10/12 relative  flex flex-col lg:flex-row justify-center items-center  border-2 border-white"
                : "rounded-xl p-3 lg:p-6 opacity-50 w-10/12 relative  flex flex-col lg:flex-row justify-center items-center border-2 border-white"
            }
          >
            <div className="mt-3 lg:mt-0 flex-shrink-0 bg-gray-700 rounded-xl p-6 flex justify-center items-center">
              <Target className="text-white" size={80} />
            </div>
            <div>
              <h3 className="mt-2 lg:mt-0 text-3xl  text-center font-bold">
                Wireframing & Prototyping
              </h3>
              <p className="ml-3 lg:ml-6 lg:pr-4 p-4 sm:pb-10 sm:px-10 lg:p-0 lg:py-4">
                Using insights from our discussions, we craft a detailed
                strategy that outlines actionable steps. Our tailored approach
                ensures measurable success for your project.
              </p>
            </div>
          </div>
          <div
            ref={third}
            className={
              thirdSectionIsVisible
                ? "w-1 h-24 relative opacity-100  bg-white"
                : "w-1 h-24 relative opacity-50  bg-white"
            }
          ></div>
          <div className="h-0 w-0 z-50 	  bg-white">
            <span
              ref={third}
              className={
                thirdSectionIsVisible
                  ? "opacity-100 absolute pt-1 -mt-5 -ml-5 text-center text-xl bg-white  border-2 border-white text-black rounded-full h-10 w-10 "
                  : "	 opacity-80 absolute -mt-5 pt-1 -ml-5 text-center text-xl bg-white  border-2 border-white text-black rounded-full h-10 w-10"
              }
            >
              3
            </span>
          </div>
          <div
            ref={third}
            className={
              thirdSectionIsVisible
                ? "rounded-xl p-3 lg:p-6 opacity-100 w-10/12 relative  flex flex-col lg:flex-row justify-center items-center  border-2 border-white"
                : "rounded-xl p-3 lg:p-6 opacity-50 w-10/12 relative  flex flex-col lg:flex-row justify-center items-center  border-2 border-white"
            }
          >
            <div className=" mt-3 lg:mt-0 flex-shrink-0 bg-gray-700 rounded-xl p-6 flex justify-center items-center">
              <PenTool className="text-white" size={80} />
            </div>
            <div>
              <h3 className="mt-3 lg:mt-0 text-3xl  text-center font-bold">
                Building a secure and scalable SaaS platform
              </h3>
              <p className=" ml-3 lg:ml-6 lg:pr-4 p-4 sm:pb-10 sm:px-10 lg:p-0 lg:py-4">
                Our creative and technical teams work together to bring your
                ideas to life. We deliver visually stunning designs paired with
                high-performing development.
              </p>
            </div>
          </div>
          <div
            ref={fourth}
            className={
              fourthSectionIsVisible
                ? "w-1 h-24 relative opacity-100  bg-white"
                : "w-1 h-24 relative opacity-50  bg-white"
            }
          ></div>
          <div className="h-0 w-0 z-50 	  bg-white">
            <span
              ref={fourth}
              className={
                fourthSectionIsVisible
                  ? "opacity-100 absolute pt-1 -mt-5 -ml-5 text-center text-xl bg-white  border-2 border-white text-black rounded-full h-10 w-10 "
                  : "	 opacity-80 absolute pt-1 -mt-5 -ml-5 text-center text-xl bg-white  border-2 border-white text-black rounded-full h-10 w-10"
              }
            >
              4
            </span>
          </div>
          <div
            ref={fourth}
            className={
              fourthSectionIsVisible
                ? "rounded-xl p-3 lg:p-6 opacity-100 w-10/12 relative  flex flex-col lg:flex-row justify-center items-center h-fit border-2 border-white"
                : "rounded-xl p-3 lg:p-6 opacity-50 w-10/12 relative  flex flex-col lg:flex-row justify-center items-center h-fit border-2 border-white"
            }
          >
            <div className="mt-3 lg:mt-0 flex-shrink-0 bg-gray-700 rounded-xl p-6 flex justify-center items-center">
              <Rocket className="text-white" size={80} />
            </div>
            <div>
              <h3 className="mt-3 lg:mt-0 text-3xl text-center font-bold">
                Testing
              </h3>
              <p className="ml-3 lg:ml-6 lg:pr-4 p-4 sm:pb-10 sm:px-10 lg:p-0 lg:py-4">
                After rigorous testing, we launch your project with precision.
                Our seamless deployment ensures that your solution is ready to
                perform flawlessly.
              </p>
            </div>
          </div>
          <div
            ref={fifth}
            className={
              fifthSectionIsVisible
                ? "w-1 h-24 relative opacity-100  bg-white"
                : "w-1 h-24 relative opacity-50  bg-white"
            }
          ></div>
          <div className="h-0 w-0 z-50 	  bg-white">
            <span
              ref={fifth}
              className={
                fifthSectionIsVisible
                  ? "opacity-100 absolute pt-1 -mt-5 -ml-5 text-center text-xl bg-white  border-2 border-white text-black rounded-full h-10 w-10 "
                  : "	 opacity-80 absolute pt-1 -mt-5 -ml-5 text-center text-xl bg-white  border-2 border-white text-black rounded-full h-10 w-10"
              }
            >
              5
            </span>
          </div>
          <div
            ref={fifth}
            className={
              fifthSectionIsVisible
                ? "rounded-xl p-3 lg:p-6 opacity-100 mb-16 w-10/12 relative  flex flex-col lg:flex-row justify-center items-center  h-fit border-2 border-white"
                : "rounded-xl p-3 lg:p-6 opacity-50 w-10/12 relative mb-16 flex flex-col lg:flex-row justify-center items-center h-fit border-2 border-white"
            }
          >
            <div className="mt-3 lg:mt-0  flex-shrink-0 bg-gray-700 rounded-xl p-6 flex justify-center items-center">
              <Users className="text-white" size={80} />
            </div>
            <div>
              <h3 className="mt-3 lg:mt-0 text-3xl px-3 text-center font-bold">
                Deployment
              </h3>
              <p className="ml-3 lg:ml-6 lg:pr-4 p-4 sm:pb-10 sm:px-10 lg:p-0 lg:py-4">
                We provide post-launch support to ensure your project stays
                ahead of the curve. Our team is always here to assist and
                innovate further.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Our recent works */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-4xl text-center font-bold text-gray-800">
          Our Recent{" "}
          <span className="text-blue-600 bg-blue-200 p-2.5 rounded-2xl">
            Work
          </span>
        </h2>{" "}
        <div className="grid mt-10 grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className={`shadow-[5px_5px_0px_4px_rgb(147,197,253),_-5px_-5px_0px_rgba(255,255,255,1)] relative rounded-3xl p-6 ${item.bgColor}`}
            >
              {/* Project Image */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                <img
                  src={item.image}
                  alt={item.category}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom Section */}
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">{item.category}</h3>
                <button className="w-12 h-12 bg-blue-400 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Faqs */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-12">
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
      {/* Contact us */}
      <Contact />
    </div>
  );
};

export default SaaSDevelopment;
