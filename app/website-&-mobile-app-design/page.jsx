"use client";
import { useInView } from "react-intersection-observer";
import { PlusCircle, MinusCircle, ArrowUpRight, Search } from "lucide-react";
import {
  Users,
  DollarSign,
  Smile,
  Box,
  Palette,
  TrendingUp,
  MessageCircle,
  MessageSquareText,
  Clock,
  Code,
  Globe,
  Connection,
  Smartphone,
  Megaphone,
  Layout,
  Cloud,
  Zap,
  Settings,
  ShoppingCart,
  Brain,
  Target,
  PenTool,
  Rocket,
  BarChart,
  Cog,
  LineChart,
  Maximize,
  Play,
  GitBranch,
  Timer,
  Heart,
  Eye,
  Mouse,
} from "lucide-react";
import { useState } from "react";
import Contact from "@/components/contact-us/page";

const Services = [
  {
    serviceName: "Website Design",
    serviceIcon: Palette,
    serviceDes:
      "Create stunning, responsive websites that captivate your audience. Our designs combine visual appeal with intuitive navigation to drive engagement and conversions.",
  },
  {
    serviceName: "Mobile App Design",
    serviceIcon: Smartphone,
    serviceDes:
      "Craft seamless mobile experiences that users love. We design native and cross-platform apps that combine beautiful interfaces with smooth functionality.",
  },
  {
    serviceName: "UI/UX Consulting",
    serviceIcon: Users,
    serviceDes:
      "Optimize your digital products with expert UI/UX guidance. We analyze user behavior and implement data-driven design improvements to boost user satisfaction.",
  },
  {
    serviceName: "Design Systems",
    serviceIcon: Box,
    serviceDes:
      "Build scalable design frameworks that maintain consistency across all platforms. Our design systems accelerate development and ensure brand coherence.",
  },
];
const features = [
  {
    serviceName: "Responsive Design",
    serviceIcon: Maximize,
    serviceDes:
      "Designs that adapt perfectly to all screen sizes, ensuring a consistent experience across desktop, tablet, and mobile devices.",
  },
  {
    serviceName: "Interactive Prototypes",
    serviceIcon: Play,
    serviceDes:
      "Test and validate your designs before development with high-fidelity prototypes that simulate the real user experience.",
  },
  {
    serviceName: "User Flow Optimization",
    serviceIcon: GitBranch,
    serviceDes:
      "Create intuitive user journeys that guide visitors naturally through your digital product, improving conversion rates.",
  },
  {
    serviceName: "Performance Focus",
    serviceIcon: Zap,
    serviceDes:
      "Fast-loading, efficient interfaces optimized for speed and performance to keep users engaged and satisfied.",
  },
];
const TECHNOLOGIES = [
  {
    name: "Figma",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
  },
  {
    name: "Sketch",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sketch/sketch-original.svg",
  },
  {
    name: "Adobe XD",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xd/xd-original.svg",
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
const faqData = [
  {
    question: "Can you work with our development team?",
    answer:
      "Yes, we seamlessly integrate with your team, providing clear documentation and maintaining open communication throughout the project.",
  },
  {
    question: "Do you offer design revisions?",
    answer:
      "We include multiple revision rounds to ensure your complete satisfaction with the final design.",
  },
  {
    question: "What's your typical project timeline?",
    answer:
      "Most projects take 4-8 weeks from concept to completion, depending on scope and complexity.",
  },
  {
    question: "Do you provide design systems?",
    answer:
      "Yes, we create comprehensive design systems to maintain consistency and accelerate future development.",
  },
];
const WhyUs = [
  {
    serviceName: "Intuitive User Interfaces",
    serviceIcon: Mouse,
    serviceDes:
      "Deliver seamless user experiences with interfaces that feel natural and effortless to navigate. Our designs minimize learning curves and maximize user engagement.",
  },
  {
    serviceName: "Optimized Accessibility",
    serviceIcon: Eye,
    serviceDes:
      "Create inclusive experiences that work for all users. Our designs follow WCAG guidelines ensuring your product is accessible to everyone.",
  },
  {
    serviceName: "Brand Consistency",
    serviceIcon: Palette,
    serviceDes:
      "Maintain strong brand identity across all touchpoints. Every design element aligns perfectly with your brand guidelines and values.",
  },
  {
    serviceName: "Rapid Development",
    serviceIcon: Timer,
    serviceDes:
      "Accelerate your time-to-market with our streamlined design process. Clean handoffs and detailed documentation speed up development.",
  },
  {
    serviceName: "User Satisfaction",
    serviceIcon: Heart,
    serviceDes:
      "Delight users with thoughtful interactions and smooth experiences. Happy users become loyal customers and brand advocates.",
  },
  {
    serviceName: "Higher Conversions",
    serviceIcon: TrendingUp,
    serviceDes:
      "Transform visitors into customers with conversion-focused designs. Strategic UX patterns guide users naturally toward desired actions.",
  },
];
export default function websiteMobileDesign() {
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
      <div 
       style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), url('logo.gif')`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="flex bg-blue-200 flex-col h-screen gap-5 justify-center items-center">
        <span className="text-2xl text-gray-800 sm:text-6xl text-center font-extrabold">
          User-Centric Designs for Stunning Website & Mobile Experiences
        </span>
        <span className="text-xs text-gray-800 sm:text-2xl text-center font-bold">
          Transform your digital presence with designs that convert visitors
          into loyal customers
        </span>
        <div className="flex flex-col gap-4 mt-5">
          <button className="w-fit text-gray-200 font-bold text-xs sm:text-lg h-fit border-2 rounded-full p-4 bg-blue-600 ">
            Start Your AI Journey
          </button>
          <button className="w-fit text-gray-200 font-bold text-xs sm:text-lg h-fit border-2 rounded-full p-4 bg-blue-600 ">
            Request a Free Consultation
          </button>
        </div>
      </div>
      {/* Services Section */}
      <div className="py-16 bg-gray-50">
        <h2 className="text-4xl px-2 text-center font-bold text-gray-800">
          Our Core{" "}
          <span className="text-blue-600 bg-blue-200 p-1.5 rounded-2xl">
            Services
          </span>
        </h2>
        <p className="px-2 text-xl text-center font-medium text-gray-600 mt-4">
          Comprehensive Solutions Tailored to Your Needs
        </p>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-4">
          {Services.map((service, index) => {
            const Icon = service.serviceIcon;

            return (
              <div
                key={index}
                className="flex flex-col items-center p-6 shadow-[5px_5px_0px_4px_rgb(147,197,253),_-5px_-5px_0px_rgba(255,255,255,1)] rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow duration-300"
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
      {/* Technologies Section */}
      <div className="pb-16 bg-gray-50">
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
      {/* Key Features */}
      <div className="pb-16 bg-gray-50">
        <h2 className="text-4xl text-center font-bold text-gray-800">
          Key{" "}
          <span className="text-blue-600 bg-blue-200 p-2.5 rounded-2xl">
            Features
          </span>{" "}
          of Our Designs
        </h2>
        <p className="text-xl text-center font-medium text-gray-600 mt-4">
          Your Success Is Our Priority
        </p>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-4">
          {features.map((service, index) => {
            const Icon = service.serviceIcon;
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
      {/* Why partner with us */}
      <div className="pb-16 bg-gray-50">
        <h2 className="text-4xl text-center font-bold text-gray-800">
          <span className="text-blue-600 bg-blue-200 p-2.5 rounded-2xl">
            Benefits{" "}
          </span>{" "}
          of Choosing Us
        </h2>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-4">
          {WhyUs.map((service, index) => {
            const Icon = service.serviceIcon;
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
            How agency works
          </h2>
          <div className="bg-sky-400 mt-16 absolute   mix-blend-multiply filter blur-2xl h-16 w-56 "></div>
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
              <Search className="text-white" size={80} />
            </div>
            <div>
              <h3 className="mt-2 lg:mt-0 text-3xl px-3 text-center font-bold">
                Research & Discovery
              </h3>
              <p className="ml-3 lg:ml-6 lg:pr-4 p-4 sm:pb-10 sm:px-10 lg:p-0 lg:py-4">
                Deep dive into your users'needs, market trends, and competitive
                landscape to inform our design decisions.
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
              <Box className="text-white" size={80} />
            </div>
            <div>
              <h3 className="mt-2 lg:mt-0 text-3xl  text-center font-bold">
                Wireframing
              </h3>
              <p className="ml-3 lg:ml-6 lg:pr-4 p-4 sm:pb-10 sm:px-10 lg:p-0 lg:py-4">
                Create structured layouts and user flows that form the
                foundation of intuitive navigation and content hierarchy.
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
              <Palette className="text-white" size={80} />
            </div>
            <div>
              <h3 className="mt-3 lg:mt-0 text-3xl  text-center font-bold">
                Visual Design
              </h3>
              <p className=" ml-3 lg:ml-6 lg:pr-4 p-4 sm:pb-10 sm:px-10 lg:p-0 lg:py-4">
                Transform wireframes into stunning visual designs that align
                with your brand and engage your users.
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
              <PenTool className="text-white" size={80} />
            </div>
            <div>
              <h3 className="mt-3 lg:mt-0 text-3xl text-center font-bold">
                Prototyping
              </h3>
              <p className="ml-3 lg:ml-6 lg:pr-4 p-4 sm:pb-10 sm:px-10 lg:p-0 lg:py-4">
                Rigorous testing across devices and platforms to ensure a
                flawless launch of your digital product.
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
              <Rocket className="text-white" size={80} />
            </div>
            <div>
              <h3 className="mt-3 lg:mt-0 text-3xl px-3 text-center font-bold">
                Testing & Launch
              </h3>
              <p className="ml-3 lg:ml-6 lg:pr-4 p-4 sm:pb-10 sm:px-10 lg:p-0 lg:py-4">
              Rigorous testing across devices and platforms to ensure a
              flawless launch of your digital product.
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
      <div className="max-w-3xl mx-auto  px-4 sm:px-6 lg:px-8">
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
}
