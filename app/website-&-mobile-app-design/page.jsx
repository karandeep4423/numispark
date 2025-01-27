"use client";
import {
  Users,
  Play,
  GitBranch,
  Zap,
  Timer,
  Heart,
  Box,
  ArrowUpRight,
  Search,
  Palette,
  TrendingUp,
  Smartphone,
  PenTool,
  Rocket,
  Maximize,
  Eye,
  Mouse,
} from "lucide-react";
import Contact from "@/components/contact-us/page";
import HeroButtons from "@/components/HeroButtons/page";
import FAQs from "@/components/Faqs/page";
import Technologies from "@/components/Technologies/page";
import HowAgencyWorks from "@/components/Process/page";
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
const steps = [
  {
    icon: <Search className="text-white" size={80} />,
    title: "Research & Discovery",
    description: "Deep dive into your users'needs, market trends, and competitive landscape to inform our design decisions."
  },
  {
    icon: <Box className="text-white" size={80} />,
    title: "Wireframing",
    description: "Create structured layouts and user flows that form the foundation of intuitive navigation and content hierarchy."
  },
  {
    icon: <Palette className="text-white" size={80} />,
    title: "Visual Design",
    description: "Transform wireframes into stunning visual designs that align with your brand and engage your users."
  },
  {
    icon: <PenTool className="text-white" size={80} />,
    title: "Prototyping",
    description: "Rigorous testing across devices and platforms to ensure a flawless launch of your digital product."
  },
  {
    icon: <Rocket className="text-white" size={80} />,
    title: "Testing & Launch",
    description: "Rigorous testing across devices and platforms to ensure a flawless launch of your digital product."
  }
];
export default function websiteMobileDesign() {
  return (
    <div>
      {/* Hero Section */}
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), url('web-mob-d.gif')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="flex bg-blue-300 flex-col h-screen gap-5 justify-center items-center"
      >
        <span className="text-5xl max-w-screen-xl text-gray-800 sm:text-6xl text-center font-extrabold">
          User-Centric Designs for Stunning Website & Mobile Experiences
        </span>
        <span className=" max-w-screen-xl text-gray-800 text-2xl text-center font-bold">
          Transform your digital presence with designs that convert visitors
          into loyal customers
        </span>
        {/* buttons */}
        <HeroButtons />
      </div>
      {/* Services Section */}
      <div className="pt-16 bg-gray-50">
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
      <Technologies technologies={TECHNOLOGIES} />
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
}
