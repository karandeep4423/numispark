"use client";
import React from "react";
import {
  CloudUpload,
  Code,
  CheckCircle,
  Smile,
  TrendingUp,
  Gauge,
  Server,
  Smartphone,
  Layout,
  Zap,
  Brain,
  Target,
  LifeBuoy,
  Search,
  ArrowUpRight,
} from "lucide-react";
import Contact from "@/components/contact-us/page";
import HeroButtons from "@/components/HeroButtons/page";
import FAQs from "@/components/Faqs/page";
import Technologies from "@/components/Technologies/page";
import HowAgencyWorks from "@/components/Process/page";

const steps = [
  {
    step: 1,
    title: "Requirement Analysis",
    description:
      "Collaborate to understand objectives, challenges, and goals. This ensures alignment with your website vision from the beginning.",
    icon: <Brain className="text-white" size={80} />,
  },
  {
    step: 2,
    title: "Wireframing & Prototyping",
    description:
      "Translate ideas into structured plans with prototypes to visualize the final website and ensure strategic clarity.",
    icon: <Target className="text-white" size={80} />,
  },
  {
    step: 3,
    title: "Development",
    description:
      "Transform concepts into a fully functional website with seamless design and robust development for optimal performance.",
    icon: <Code className="text-white" size={80} />,
  },
  {
    step: 4,
    title: "Testing",
    description:
      "Conduct rigorous testing to ensure your website is free of issues, optimized, and ready for seamless launch.",
    icon: <CheckCircle className="text-white" size={80} />,
  },
  {
    step: 5,
    title: "Deployment",
    description:
      "Deploy the website with precision and provide post-launch support to keep it running smoothly and effectively.",
    icon: <CloudUpload className="text-white" size={80} />,
  },
];

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
    name: "Ruby on Rails",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-plain-wordmark.svg",
  },
  {
    name: "Laravel",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
  },
  {
    name: "Webflow",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webflow/webflow-original.svg",
  },
  {
    name: "Wordpress",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg",
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
];

const Benefits = [
  {
    serviceName: "Enhanced User Experience",
    serviceIcon: "Layout", // Icon for design and usability
    serviceDes:
      "We deliver intuitive and engaging websites designed to provide seamless navigation and a superior user experience.",
  },
  {
    serviceName: "Faster Loading Times",
    serviceIcon: "Zap", // Icon for speed and performance
    serviceDes:
      "Our development process ensures optimized loading speeds, improving user retention and satisfaction.",
  },
  {
    serviceName: "Scalability for Future Growth",
    serviceIcon: "TrendingUp", // Icon for growth and expansion
    serviceDes:
      "We build scalable solutions that grow with your business, ensuring your website remains robust as traffic increases.",
  },
  {
    serviceName: "Dedicated Post-Launch Support",
    serviceIcon: "LifeBuoy", // Icon for support and maintenance
    serviceDes:
      "Our team provides ongoing support and maintenance to ensure your website stays secure, updated, and functional.",
  },
];

const WhyUs = [
  {
    serviceName: "Mobile Responsive Design",
    serviceIcon: "Smartphone", // Icon for mobile and responsiveness
    serviceDes:
      "We create mobile-friendly designs that ensure your website looks great and functions perfectly on all devices.",
  },
  {
    serviceName: "SEO-Friendly Development",
    serviceIcon: "Search", // Icon for search optimization
    serviceDes:
      "Our websites are optimized for search engines, helping you rank higher and attract more organic traffic.",
  },
  {
    serviceName: "Easy-to-Manage CMS",
    serviceIcon: "Server", // Icon for content management
    serviceDes:
      "We integrate user-friendly CMS platforms, empowering you to update and manage your website effortlessly.",
  },
  {
    serviceName: "Speed Optimization",
    serviceIcon: "Gauge", // Icon for speed and efficiency
    serviceDes:
      "We implement advanced optimization techniques to enhance your website's speed and performance.",
  },
];

const faqData = [
  {
    question: "Do you provide website hosting services?",
    answer:
      "While we don’t directly host websites, we can assist you in selecting and setting up reliable hosting solutions like AWS, Bluehost, or SiteGround.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Absolutely. We offer website redesign services to improve aesthetics, functionality, and performance while maintaining your brand identity.",
  },
  {
    question: "Do you provide content for websites?",
    answer:
      "Yes, we offer content creation services, including copywriting, SEO-optimized content, and multimedia content for your website.",
  },
  {
    question: "Will my website be optimized for search engines?",
    answer:
      "Yes, all websites we develop are SEO-friendly, ensuring faster indexing and improved search engine rankings.",
  },
  {
    question: "Do you offer maintenance and updates after the website launch?",
    answer:
      "Yes, we offer post-launch support, including regular updates, security patches, and performance monitoring to keep your website running smoothly.",
  },
  {
    question: "Can you provide training on how to manage my website?",
    answer:
      "Yes, we provide training sessions and user guides to help you manage your website efficiently using the CMS or other tools we've implemented.",
  },
  {
    question: "Do you support multilingual websites?",
    answer:
      "Yes, we can develop websites with multilingual support, allowing you to reach a global audience effectively.",
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

const WebsiteDevelopment = () => {

  return (
    <div>
      {/* Hero Section */}
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), url('web.gif')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="flex bg-blue-300 flex-col h-screen gap-5 justify-center items-center"
      >
        <span className="text-5xl max-w-screen-xl  opacity-100 text-gray-800 sm:text-6xl text-center font-extrabold">
          Custom Websites Tailored to Your Business Needs
        </span>
        <span className="max-w-screen-xl  text-gray-900 text-2xl text-center font-bold">
          Emphasizing scalability, responsiveness, and performance.
        </span>
        {/* buttons */}
        <HeroButtons />
      </div>
      {/* Technologies Section */}
      <Technologies technologies={TECHNOLOGIES} />
      {/*  Key Features */}
      <div className="pb-16 bg-gray-50">
        <h2 className="text-4xl text-center font-bold text-gray-800">
          <span className="text-blue-600 bg-blue-200 p-2.5 rounded-2xl">
            Key Features{" "}
          </span>{" "}
          of our websites
        </h2>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-4">
          {WhyUs.map((service, index) => {
            const Icon = {
              Search,
              Smartphone,
              Gauge,
              Server,
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
              Zap,
              LifeBuoy,
              Smile,
              Layout,
              TrendingUp,
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

export default WebsiteDevelopment;
