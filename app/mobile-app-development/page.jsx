"use client";
import React from "react";
import {
  TrendingUp,
  CloudUpload,
  BookOpen,
  CheckCircle,
  ShieldCheck,
  Code,
  Smartphone,
  Layout,
  UserCheck,
  Layers,
  Zap,
  RefreshCw,
  Shield,
  ArrowUpRight,
} from "lucide-react";
import Contact from "@/components/contact-us/page";
import HeroButtons from "@/components/HeroButtons/page";
import FAQs from "@/components/Faqs/page";
import Technologies from "@/components/Technologies/page";
import HowAgencyWorks from "@/components/Process/page";
const steps = [
  {
    icon: <BookOpen className="text-white" size={80} />,
    title: "Requirement Analysis",
    description: "Our team begins by understanding your mobile app's objectives, target audience, and key features. This step ensures a shared vision and sets the foundation for a successful app."
  },
  {
    icon: <Layout className="text-white" size={80} />,
    title: "Wireframing & Prototyping",
    description: "We create detailed wireframes and interactive prototypes to visualize the app's flow and user experience. This stage allows you to refine your ideas before development begins."
  },
  {
    icon: <Code className="text-white" size={80} />,
    title: "Development",
    description: "Our developers use cutting-edge technologies and frameworks to build scalable, responsive, and high-performance mobile apps tailored to your needs."
  },
  {
    icon: <CheckCircle className="text-white" size={80} />,
    title: "Testing",
    description: "We rigorously test your mobile app for functionality, performance, and compatibility across devices to ensure a seamless user experience and eliminate any bugs."
  },
  {
    icon: <CloudUpload className="text-white" size={80} />,
    title: "App Store Deployment",
    description: "Once your app is polished and tested, we handle its launch on app stores. We ensure compliance with platform guidelines and provide support to optimize your app's visibility."
  }
];
const TECHNOLOGIES = [
  {
    name: "React Native",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "Kotlin",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg",
  },
  {
    name: "Swift",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg",
  },
  {
    name: "Flutter",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
  },
];

const Benefits = [
  {
    serviceName: "Enhanced User Experience",
    serviceIcon: "UserCheck", // Icon for team and collaboration
    serviceDes:
      "Our expert team specializes in crafting seamless and intuitive mobile applications that work flawlessly across all platforms. This ensures maximum availability and usability for your target audience.",
  },
  {
    serviceName: "Expert Developers with Extensive Experience",
    serviceIcon: "Code", // Icon for development and tools
    serviceDes:
      "With years of experience and a deep understanding of the latest technologies, our developers create robust, scalable, and customized apps tailored to your unique business requirements.",
  },
  {
    serviceName: "Optimized for App Store Success",
    serviceIcon: "TrendingUp", // Icon for customer satisfaction
    serviceDes:
      "We go beyond development, focusing on strategies that make your app shine in app stores. Our solutions are designed to help your business achieve its goals and win over users.",
  },
  {
    serviceName: "Fast and Secure Apps",
    serviceIcon: "ShieldCheck", // Icon for growth and performance
    serviceDes:
      "Speed and security are at the heart of our development process. We ensure your app delivers exceptional performance while safeguarding sensitive data, giving you a competitive edge.",
  },
  {
    serviceName: "Regular Updates and Maintenance",
    serviceIcon: "RefreshCw", // Icon for updates and reliability
    serviceDes:
      "Stay ahead with apps that evolve with your needs. Our commitment to ongoing updates and maintenance ensures your app remains current, functional, and aligned with the latest industry standards.",
  },
];

const Features = [
  {
    serviceName: "Native Apps (iOS & Android)",
    serviceIcon: "Smartphone", // Icon for mobile apps
    serviceDes:
      "Take advantage of platform-specific features and performance with expertly crafted native applications for both iOS and Android. Our apps deliver the ultimate user experience.",
  },
  {
    serviceName: "Cross-Platform Apps",
    serviceIcon: "Layers", // Icon for multi-layered apps
    serviceDes:
      "Streamline your app’s development and reach a wider audience. We leverage cutting-edge frameworks to build high-performance apps that work seamlessly across platforms.",
  },
  {
    serviceName: "Scalable & Secure Apps",
    serviceIcon: "Shield", // Icon for security
    serviceDes:
      "Your growth is our priority. We build apps designed to scale as your business grows, ensuring top-notch security at every stage.",
  },
  {
    serviceName: "Speed Optimization",
    serviceIcon: "Zap", // Icon for speed and performance
    serviceDes:
      "No one likes a slow app! Our optimization techniques guarantee lightning-fast load times, enhancing user satisfaction and engagement.",
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
  {
    question: "Can you help improve my existing mobile app?",
    answer:
      "Absolutely! We offer app audit, redesign, and feature enhancement services to improve the performance and user experience of your existing mobile app.",
  },
  {
    question: "Do you assist with app store submissions?",
    answer:
      "Yes, we handle the entire app store submission process, including ensuring compliance with guidelines, creating app store assets, and managing updates.",
  },
  {
    question: "Do you offer post-launch support?",
    answer:
      "Yes, we provide ongoing support and maintenance to ensure your app remains up-to-date, secure, and functional over time.",
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

const MobileDevelopment = () => {

  return (
    <div>
      {/* Hero Section */}
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), url('mob-dev1.gif')`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="bg-blue-300 flex w-full flex-col h-screen gap-5 justify-center items-center"
      >
        <span className="text-5xl max-w-screen-xl  text-gray-800 sm:text-6xl text-center font-extrabold">
          Innovative Mobile Apps to Elevate Your Business
        </span>
        <span className="text-gray-800 max-w-screen-xl  text-2xl text-center font-bold">
          Emphasizing scalability, responsiveness, and performance.
        </span>
        {/* buttons */}
        <HeroButtons />
      </div>
      {/* Technologies Section */}
      <Technologies technologies={TECHNOLOGIES} />
      {/* Key Features */}
      <div className="pb-16 bg-gray-50">
        <h2 className="text-4xl text-center font-bold text-gray-800">
          <span className="text-blue-600 bg-blue-200 p-2.5 rounded-2xl">
            Key Features{" "}
          </span>{" "}
          of our apps
        </h2>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-4">
          {Features.map((service, index) => {
            const Icon = {
              Smartphone,
              Layers,
              Shield,
              Zap,
            }[service.serviceIcon];

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
              UserCheck,
              Code,
              TrendingUp,
              ShieldCheck,
              RefreshCw,
            }[service.serviceIcon];

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
      <HowAgencyWorks steps={steps} />
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
      <FAQs faqData={faqData} />
      {/* Contact us */}
      <Contact />
    </div>
  );
};

export default MobileDevelopment;
