"use client";
import { useInView } from "react-intersection-observer";
import {
  PlusCircle,
  MinusCircle,
  ArrowUpRight,
  Code,
  Layout,
  Brain,
  RefreshCw,
  Target,
  CreditCard,
  Layers,
  BarChart,
  Wrench,
  Rocket,
  Shield,
  Monitor,
  Archive,
  PieChart,
} from "lucide-react";
import { useState } from "react";
import Contact from "@/components/contact-us/page";

const Benefits = [
  {
    serviceName: "Easy Integration with Payment Systems",
    serviceIcon: "CreditCard", // Icon for payment systems
    serviceDes:
      "We enable seamless integration with multiple payment gateways to ensure secure and hassle-free transactions for your customers.",
  },
  {
    serviceName: "Scalable Platforms",
    serviceIcon: "Layers", // Icon for scalability and layers
    serviceDes:
      "Our solutions are built to scale with your business, accommodating growth without compromising performance.",
  },
  {
    serviceName: "Enhanced Conversion Rates",
    serviceIcon: "BarChart", // Icon for analytics and growth
    serviceDes:
      "We optimize your store for higher conversion rates, ensuring that visitors turn into loyal customers.",
  },
  {
    serviceName: "Seamless User Experience",
    serviceIcon: "Layout", // Icon for design and user interface
    serviceDes:
      "We craft user-friendly interfaces for effortless navigation, enhancing the overall shopping experience.",
  },
  {
    serviceName: "Post-Launch Support & Maintenance",
    serviceIcon: "Wrench", // Icon for tools and maintenance
    serviceDes:
      "Our team provides regular updates and maintenance to ensure your platform remains secure and up-to-date.",
  },
];

const Features = [
  {
    serviceName: "Secure Payment Gateways",
    serviceIcon: "Shield", // Icon for security
    serviceDes:
      "We implement robust security measures to protect customer data and provide secure transactions.",
  },
  {
    serviceName: "User-Friendly Design",
    serviceIcon: "Monitor", // Icon for interface and design
    serviceDes:
      "Our designs are intuitive and responsive, ensuring a seamless shopping experience on any device.",
  },
  {
    serviceName: "Inventory Management",
    serviceIcon: "Archive", // Icon for inventory
    serviceDes:
      "Our systems make it easy to track and manage your inventory in real-time, minimizing stock issues.",
  },
  {
    serviceName: "Advanced Analytics & Reporting",
    serviceIcon: "PieChart", // Icon for analytics
    serviceDes:
      "We provide detailed analytics to help you make data-driven decisions and optimize performance.",
  },
];

const TECHNOLOGIES = [
  {
    name: "Woo Commerce",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/woocommerce/woocommerce-original.svg",
  },
  {
    name: "Shopify",
    logo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTYiIGhlaWdodD0iMjkyIiB2aWV3Qm94PSIwIDAgMjU2IDI5MiI+PHBhdGggZmlsbD0iIzk1YmY0NiIgZD0iTTIyMy43NzQgNTcuMzRjLS4yMDEtMS40Ni0xLjQ4LTIuMjY4LTIuNTM3LTIuMzU3YTE5NjE0IDE5NjE0IDAgMCAwLTIzLjM4My0xLjc0M3MtMTUuNTA3LTE1LjM5NS0xNy4yMDktMTcuMDk5Yy0xLjcwMy0xLjcwMy01LjAyOS0xLjE4NS02LjMyLS44MDVjLS4xOS4wNTYtMy4zODggMS4wNDMtOC42NzggMi42OGMtNS4xOC0xNC45MDYtMTQuMzIyLTI4LjYwNC0zMC40MDUtMjguNjA0Yy0uNDQ0IDAtLjkwMS4wMTgtMS4zNTguMDQ0QzEyOS4zMSAzLjQwNyAxMjMuNjQ0Ljc3OSAxMTguNzUuNzc5Yy0zNy40NjUgMC01NS4zNjQgNDYuODM1LTYwLjk3NiA3MC42MzVjLTE0LjU1OCA0LjUxMS0yNC45IDcuNzE4LTI2LjIyMSA4LjEzM2MtOC4xMjYgMi41NDktOC4zODMgMi44MDUtOS40NSAxMC40NjJDMjEuMyA5NS44MDYuMDM4IDI2MC4yMzUuMDM4IDI2MC4yMzVsMTY1LjY3OCAzMS4wNDJsODkuNzctMTkuNDJTMjIzLjk3MyA1OC44IDIyMy43NzUgNTcuMzRNMTU2LjQ5IDQwLjg0OGwtMTQuMDE5IDQuMzM5Yy4wMDUtLjk4OC4wMS0xLjk2LjAxLTMuMDIzYzAtOS4yNjQtMS4yODYtMTYuNzIzLTMuMzQ5LTIyLjYzNmM4LjI4NyAxLjA0IDEzLjgwNiAxMC40NjkgMTcuMzU4IDIxLjMybS0yNy42MzgtMTkuNDgzYzIuMzA0IDUuNzczIDMuODAyIDE0LjA1OCAzLjgwMiAyNS4yMzhjMCAuNTcyLS4wMDUgMS4wOTUtLjAxIDEuNjI0Yy05LjExNyAyLjgyNC0xOS4wMjQgNS44OS0yOC45NTMgOC45NjZjNS41NzUtMjEuNTE2IDE2LjAyNS0zMS45MDggMjUuMTYxLTM1LjgyOG0tMTEuMTMxLTEwLjUzN2MxLjYxNyAwIDMuMjQ2LjU0OSA0LjgwNSAxLjYyMmMtMTIuMDA3IDUuNjUtMjQuODc3IDE5Ljg4LTMwLjMxMiA0OC4yOTdsLTIyLjg4NiA3LjA4OEM3NS42OTQgNDYuMTYgOTAuODEgMTAuODI4IDExNy43MiAxMC44MjgiLz48cGF0aCBmaWxsPSIjNWU4ZTNlIiBkPSJNMjIxLjIzNyA1NC45ODNhMTk2MTQgMTk2MTQgMCAwIDAtMjMuMzgzLTEuNzQzcy0xNS41MDctMTUuMzk1LTE3LjIwOS0xNy4wOTljLS42MzctLjYzNC0xLjQ5Ni0uOTU5LTIuMzk0LTEuMDk5bC0xMi41MjcgMjU2LjIzM2w4OS43NjItMTkuNDE4UzIyMy45NzIgNTguOCAyMjMuNzc0IDU3LjM0Yy0uMjAxLTEuNDYtMS40OC0yLjI2OC0yLjUzNy0yLjM1NyIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xMzUuMjQyIDEwNC41ODVsLTExLjA2OSAzMi45MjZzLTkuNjk4LTUuMTc2LTIxLjU4Ni01LjE3NmMtMTcuNDI4IDAtMTguMzA1IDEwLjkzNy0xOC4zMDUgMTMuNjkzYzAgMTUuMDM4IDM5LjIgMjAuOCAzOS4yIDU2LjAyNGMwIDI3LjcxMy0xNy41NzcgNDUuNTU4LTQxLjI3NyA0NS41NThjLTI4LjQ0IDAtNDIuOTg0LTE3LjctNDIuOTg0LTE3LjdsNy42MTUtMjUuMTZzMTQuOTUgMTIuODM1IDI3LjU2NSAxMi44MzVjOC4yNDMgMCAxMS41OTYtNi40OSAxMS41OTYtMTEuMjMyYzAtMTkuNjE2LTMyLjE2LTIwLjQ5MS0zMi4xNi01Mi43MjRjMC0yNy4xMjkgMTkuNDcyLTUzLjM4MiA1OC43NzgtNTMuMzgyYzE1LjE0NSAwIDIyLjYyNyA0LjMzOCAyMi42MjcgNC4zMzgiLz48L3N2Zz4=",
  },
  {
    name: "PrestaShop",
    logo: "https://cdn.brandfetch.io/idyLWe2HhF/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B",
  },
  {
    name: "BigCommerce",
    logo: "https://cdn.brandfetch.io/idjqrHQc8M/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
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
    question: "What e-commerce platforms do you work with?",
    answer:
      "We specialize in platforms like Shopify, WooCommerce, Magento, and custom-built solutions tailored to your business needs.",
  },
  {
    question: "What features can you include in my e-commerce website?",
    answer:
      "We can include features such as product listings, shopping cart functionality, customer reviews, wish lists, secure payment processing, order tracking, and personalized recommendations to enhance user experience.",
  },
  {
    question: "Can you help me with digital marketing for my online store?",
    answer:
      "Yes, we offer comprehensive digital marketing services, including SEO, social media marketing, email marketing, and pay-per-click advertising, to help you reach your target audience and drive traffic to your store.",
  },
  {
    question: "How do you handle SEO for e-commerce sites?",
    answer:
      "We implement SEO best practices, including keyword research, on-page optimization, product description optimization, image alt tags, and link-building strategies to improve your site's visibility in search engine results.",
  },
  {
    question:
      "What kind of ongoing support do you provide after the website launch?",
    answer:
      "We offer ongoing support that includes regular updates, maintenance, troubleshooting, and performance monitoring to ensure your e-commerce site runs smoothly and efficiently.",
  },
];

export default function Home() {
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
      <div  style={{
        backgroundImage: "url('/ecommerce.svg')",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }} className="flex flex-col h-screen gap-5 justify-center items-center">
        <span className="text-2xl text-gray-100 sm:text-6xl text-center font-extrabold">
          Powerful Ecommerce Solutions to Boost Your Sales
        </span>
        <div className="flex flex-col gap-4 mt-5">
          <button className="w-fit text-gray-200 font-bold text-xs sm:text-lg h-fit border-2 rounded-full p-4 bg-blue-600 ">
            Get a Free consultation
          </button>
          <button className="w-fit text-gray-200 font-bold text-xs sm:text-lg h-fit border-2 rounded-full p-4 bg-blue-600 ">
            Explore Our Services
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
      {/* Key Features */}
      <div className="pb-16 bg-gray-50">
        <h2 className="text-4xl text-center font-bold text-gray-800">
          Key
          <span className="text-blue-600 m-1 bg-blue-200 p-2.5 rounded-2xl">
            Features{" "}
          </span>{" "}
          of our Ecommerce
        </h2>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-4">
          {Features.map((service, index) => {
            const Icon = {
              Shield,
              Monitor,
              Archive,
              PieChart,
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
              CreditCard,
              Layers,
              BarChart,
              Layout,
              Wrench,
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
              <Brain className="text-white" size={80} />
            </div>
            <div>
              <h3 className="mt-2 lg:mt-0 text-3xl px-3 text-center font-bold">
                Understanding Your Vision
              </h3>
              <p className="ml-3 lg:ml-6 lg:pr-4 p-4 sm:pb-10 sm:px-10 lg:p-0 lg:py-4">
                We begin by conducting an in-depth consultation to understand
                your business goals, target audience, and unique selling
                propositions.
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
                Strategic Planning
              </h3>
              <p className="ml-3 lg:ml-6 lg:pr-4 p-4 sm:pb-10 sm:px-10 lg:p-0 lg:py-4">
                Our team creates a comprehensive strategy that outlines key
                features, functionalities, and timelines.We focus on
                establishing an intuitive user experience, optimizing conversion
                rates, and incorporating best practices for SEO and marketing.
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
              <Code className="text-white" size={80} />
            </div>
            <div>
              <h3 className="mt-3 lg:mt-0 text-3xl  text-center font-bold">
                Design & Development
              </h3>
              <p className=" ml-3 lg:ml-6 lg:pr-4 p-4 sm:pb-10 sm:px-10 lg:p-0 lg:py-4">
                Our designers craft a visually appealing and user-friendly
                interface, while our developers build a robust backend
                infrastructure.
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
                Launch & Deployment
              </h3>
              <p className="ml-3 lg:ml-6 lg:pr-4 p-4 sm:pb-10 sm:px-10 lg:p-0 lg:py-4">
                Once everything is polished, we prepare for launch. Our team
                ensures that all systems are functional and that your e-commerce
                site is ready for customers.
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
              <RefreshCw className="text-white" size={80} />
            </div>
            <div>
              <h3 className="mt-3 lg:mt-0 text-3xl px-3 text-center font-bold">
                Ongoing Support
              </h3>
              <p className="ml-3 lg:ml-6 lg:pr-4 p-4 sm:pb-10 sm:px-10 lg:p-0 lg:py-4">
                After launch, we provide continuous support to ensure your
                e-commerce store operates smoothly. We offer regular updates,
                performance monitoring, and strategies for scaling your business
                as you grow.
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
}
