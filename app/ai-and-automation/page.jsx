"use client";
import { useInView } from "react-intersection-observer";
import {
  PlusCircle,
  MinusCircle,
  ArrowUpRight,
  RefreshCcw,
} from "lucide-react";
import {
  Users,
  DollarSign,
  Smile,
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
} from "lucide-react";
import { useState } from "react";
import Contact from "@/components/contact-us/page";
import HeroButtons from "@/components/HeroButtons/page";

const Services = [
  {
    serviceName: "Custom AI Model Development",
    serviceIcon: Brain,
    serviceDes:
      "Transform your business with tailor-made AI solutions that adapt to your unique challenges. Our custom models leverage cutting-edge technology to deliver unprecedented accuracy and efficiency in your operations.",
  },
  {
    serviceName: "Chatbot Integration",
    serviceIcon: MessageSquareText,
    serviceDes:
      "Revolutionize your customer service with intelligent chatbots that understand, learn, and evolve. Provide 24/7 support while reducing costs and improving customer satisfaction.",
  },
  {
    serviceName: "Business Process Automation",
    serviceIcon: Cog,
    serviceDes:
      "Eliminate repetitive tasks and streamline workflows with intelligent automation solutions. Our systems adapt to your business processes, reducing errors and freeing your team to focus on strategic initiatives.",
  },
  {
    serviceName: "Machine Learning and Predictive Analytics",
    serviceIcon: LineChart,
    serviceDes:
      "Harness the power of your data with advanced analytics that predict trends, identify opportunities, and drive informed decision-making. Turn insights into action with our comprehensive ML solutions.",
  },
];
const features = [
  {
    serviceName: "Natural Language Understanding (NLU)",
    serviceIcon: Brain,
    serviceDes:
      "Enable seamless human-machine interactions with our advanced NLU capabilities. Process and understand human language with unprecedented accuracy, supporting multiple use cases from customer service to data analysis.",
  },
  {
    serviceName: "Multilingual Support",
    serviceIcon: Globe,
    serviceDes:
      "Break language barriers and expand globally with our multilingual AI solutions. Support 100+ languages with native-like understanding and response capabilities.",
  },
  {
    serviceName: "Integration with Popular Platforms",
    serviceIcon: Users,
    serviceDes:
      "Seamlessly connect our AI solutions with your existing tech stack. Whether it's Slack, Microsoft Teams, or custom platforms, we ensure smooth integration and optimal performance.",
  },
  {
    serviceName: "Real-Time Analytics",
    serviceIcon: BarChart,
    serviceDes:
      "Monitor and optimize your AI solutions in real-time. Get actionable insights into performance metrics, user engagement, and system health with our comprehensive analytics dashboard.",
  },
];
const TECHNOLOGIES = [
  {
    name: "Python",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  {
    name: "Tensorflow",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
  },
  {
    name: "PyTorch",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg",
  },
  {
    name: "Zapier",
    logo: "https://cdn.brandfetch.io/idNMs_nMA0/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B",
  },
  {
    name: "UiPath",
    logo: "https://cdn.brandfetch.io/idEaAShmlC/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
  },
  {
    name: "Django",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
  },
  {
    name: "OpenAI",
    logo: "https://cdn.brandfetch.io/idR3duQxYl/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B",
  },
];
const portfolioItems = [
  {
    image: "/globe.svg",
    category: "UI/ UX Design",
    bgColor: "bg-violet-100",
    dotColor: "bg-violet-500",
  },
  {
    image: "/globe.svg",
    category: "App Design",
    bgColor: "bg-emerald-600",
    dotColor: "bg-emerald-500",
  },
  {
    image: "/globe.svg",
    category: "App Design",
    bgColor: "bg-amber-400",
    dotColor: "bg-amber-500",
  },
];
const faqData = [
  {
    question: "How can I request a quote for a project?",
    answer:
      "Start your AI journey by scheduling a free consultation through our online form or calling us directly. Within 24 hours, our experts will analyze your requirements and provide a detailed proposal including timeline, deliverables, and pricing options tailored to your needs.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We've successfully implemented AI solutions across diverse sectors including healthcare (patient care optimization), finance (risk assessment), retail (inventory management), manufacturing (predictive maintenance), and education (personalized learning). Our adaptable approach ensures effective solutions regardless of your industry.",
  },
  {
    question: "What is the typical timeline for a project?",
    answer:
      "Project timelines vary based on complexity and scope. Simple chatbot integrations typically take 2-4 weeks, while custom AI model development may require 2-3 months. Enterprise-scale automation solutions usually span 3-6 months. We provide detailed milestones and regular progress updates throughout the development cycle.",
  },
  {
    question: "How do you ensure the security of AI solutions?",
    answer:
      "Security is paramount in our development process. We implement enterprise-grade encryption, regular security audits, and comply with industry standards (GDPR, HIPAA, etc.). All our AI solutions undergo rigorous testing for potential vulnerabilities before deployment.",
  },
  {
    question: "What kind of support do you provide after deployment?",
    answer:
      "We offer comprehensive post-deployment support including 24/7 monitoring, regular performance optimization, model retraining, and dedicated technical support. Our maintenance packages ensure your AI solutions continue to evolve and improve over time.",
  },
];
const WhyUs = [
  {
    serviceName: "Expertise in Cutting-Edge AI Technologies",
    serviceIcon: Brain,
    serviceDes:
      "Partner with a team that stays ahead of AI innovation. Our experts specialize in the latest technologies including GPT-4, computer vision, and deep learning, ensuring you get future-proof solutions that drive real business value.",
  },
  {
    serviceName: "Custom Solutions for Your Business Needs",
    serviceIcon: Settings,
    serviceDes:
      "Get AI solutions perfectly aligned with your business goals. We don't believe in one-size-fits-all - our team analyzes your unique challenges and develops custom AI solutions that deliver measurable ROI.",
  },
  {
    serviceName: "Cost-Effective and Scalable Solutions",
    serviceIcon: DollarSign,
    serviceDes:
      "Maximize your investment with solutions that grow with your business. Our AI systems are built for scalability, allowing you to start small and expand capabilities as your needs evolve, all while maintaining cost efficiency.",
  },
  {
    serviceName: "Speed Optimization",
    serviceIcon: Zap,
    serviceDes:
      "Experience lightning-fast performance with our optimized AI solutions. We employ advanced techniques in model compression and edge computing to deliver rapid response times without compromising accuracy.",
  },
];
export default function AiDevelopment() {
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
      <div className="relative h-screen flex flex-col  sm:flex-row justify-center items-center overflow-hidden bg-blue-200">
        {/* Video Background with blend mode */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full  object-cover z-20 mix-blend-multiply"
        >
          <source src="/ai.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Content */}
        <div className="relative z-20 flex w-full h-screen gap-5 justify-center items-center">
          <div className="mt-10 sm:mt-0 flex justify-center items-center flex-col">
            <span className="text-5xl max-w-screen-xl  text-gray-200 sm:text-6xl text-center font-extrabold">
              Transform Your Business with AI & Automation
            </span>
            <span className="max-w-screen-xl  text-gray-200 text-2xl text-center font-bold">
              From chatbots to custom AI models, we create intelligent solutions
              to boost efficiency
            </span>
            {/* buttons */}
            <HeroButtons />
          </div>
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
                className="flex flex-col items-center p-6 shadow-[5px_5px_0px_4px_rgb(147,197,253),_-5px_-5px_0px_rgba(255,255,255,1)] rounded-2xl border border-gray-200 md:hover:shadow-lg transition-shadow duration-300"
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
          of Our Chatbots
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
                className="flex flex-col items-center shadow-[5px_5px_0px_4px_rgb(147,197,253),_-5px_-5px_0px_rgba(255,255,255,1)] p-6 rounded-2xl border border-slate-200 md:hover:shadow-lg transition-shadow duration-300"
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
                className="flex flex-col items-center shadow-[5px_5px_0px_4px_rgb(147,197,253),_-5px_-5px_0px_rgba(255,255,255,1)] p-6 rounded-2xl border border-slate-200 md:hover:shadow-lg transition-shadow duration-300"
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
                We dive deep into your business needs and challenges through
                focused discovery sessions. Our team ensures we're not just
                understanding your requirements, but uncovering opportunities
                for innovation and growth.
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
                Transforming insights into actionable strategies, we create a
                clear roadmap for your project. Our detailed planning ensures
                efficient development, timeline adherence, and measurable
                outcomes.
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
                Design & Development
              </h3>
              <p className=" ml-3 lg:ml-6 lg:pr-4 p-4 sm:pb-10 sm:px-10 lg:p-0 lg:py-4">
                Our expert team brings your vision to life using cutting-edge AI
                technologies and clean code. Regular updates and demonstrations
                keep you involved throughout the development process.
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
                We ensure a smooth transition from development to deployment
                with comprehensive testing and optimization. Your solution
                launches with confidence, backed by thorough quality assurance.
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
              <RefreshCcw className="text-white" size={80} />
            </div>
            <div>
              <h3 className="mt-3 lg:mt-0 text-3xl px-3 text-center font-bold">
                Ongoing Support
              </h3>
              <p className="ml-3 lg:ml-6 lg:pr-4 p-4 sm:pb-10 sm:px-10 lg:p-0 lg:py-4">
                We provide continuous support, regular updates, and proactive
                maintenance to keep your solution performing at its best.
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
      <div className="max-w-3xl mb-5 mx-auto  px-4 sm:px-6 lg:px-8">
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
