"use client";
import {
  FileType,
  ArrowUpRight,
  Search,
  Award,
  Copy,
  Instagram,
  Palette,
  TrendingUp,
  MessageCircle,
  Clock,
  Layout,
  Cloud,
  Brain,
  Target,
  PenTool,
  Pen,
  CloudDownload,
} from "lucide-react";
import Contact from "@/components/contact-us/page";
import HeroButtons from "@/components/HeroButtons/page";
import FAQs from "@/components/Faqs/page";
import Technologies from "@/components/Technologies/page";
import HowAgencyWorks from "@/components/Process/page";
const steps = [
  {
    icon: <Brain className="text-white" size={80} />,
    title: "Understanding Your Vision",
    description: "We start by discussing your goals, brand identity, and audience preferences to align our designs with your social media and logo needs."
  },
  {
    icon: <Search className="text-white" size={80} />,
    title: "Research & Inspiration",
    description: "We analyze trends, competitors, and market dynamics to gather inspiration for crafting compelling social media visuals and memorable logos."
  },
  {
    icon: <Pen className="text-white" size={80} />,
    title: "Concept Creation",
    description: "Our designers draft unique concepts, including layouts for social media posts and initial logo sketches, to establish a creative direction."
  },
  {
    icon: <Palette className="text-white" size={80} />,
    title: "Design & Refinement",
    description: "Using your feedback, we finalize polished designs with eye-catching visuals for social media and a logo that represents your brand authentically."
  },
  {
    icon: <CloudDownload className="text-white" size={80} />,
    title: "Final Delivery",
    description: "We provide high-quality files for your social media posts and logos, ready to enhance your brand's online presence and identity."
  }
];
const Services = [
  {
    serviceName: "Social Media Design",
    serviceIcon: Instagram,
    serviceDes:
      "Create eye-catching social media posts that boost engagement. Our designs are optimized for each platform's unique requirements and audience preferences.",
  },
  {
    serviceName: "Logo & Brand Identity",
    serviceIcon: PenTool, // Pen tool icon for design
    serviceDes:
      "Professional logo design with multiple concepts and variations, plus complete brand identity guidelines for consistent presentation.",
  },
  {
    serviceName: "Brand Kit Design",
    serviceIcon: Palette,
    serviceDes:
      "Build comprehensive brand kits including color palettes, typography, and design elements that ensure consistency across all platforms.",
  },
  {
    serviceName: "Social Strategy",
    serviceIcon: Target,
    serviceDes:
      "Get expert guidance on content strategy, posting schedules, and engagement techniques to maximize your social media presence.",
  },
  {
    serviceName: "Social Media Templates",
    serviceIcon: Copy, // Copy/template icon
    serviceDes:
      "Reusable templates for stories, posts, and carousels that your team can easily customize while maintaining brand consistency.",
  },
];
const features = [
  {
    serviceName: "Platform Optimization",
    serviceIcon: Layout,
    serviceDes:
      "Designs perfectly sized and optimized for each social platform's specifications and best practices.",
  },
  {
    serviceName: "Brand Consistency",
    serviceIcon: Palette,
    serviceDes:
      "Maintain strong visual identity across all posts and platforms while allowing creative flexibility.",
  },
  {
    serviceName: "Engagement Focus",
    serviceIcon: MessageCircle,
    serviceDes:
      "Create designs that drive likes, comments, and shares through strategic visual hierarchy and call-to-actions.",
  },
  {
    serviceName: "Multi-Format Delivery",
    serviceIcon: FileType, // File type icon
    serviceDes:
      "Receive your designs in all necessary formats - from web-ready files to print-quality vectors.",
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
    question:
      "How many logo concepts will I receive in the initial design phase?",
    answer:
      "Our standard logo package includes 3-5 unique concepts. Each concept comes with different variations and applications to help you visualize how the logo will work across various platforms.",
  },
  {
    question: "What's included in the social media template package?",
    answer:
      "The package includes customizable templates for: Instagram posts (feed, stories, and reels), Facebook posts and cover images, LinkedIn company page graphics, Twitter posts and header images, plus basic animation templates for stories and reels.",
  },
  {
    question: "Do you provide editable templates for our team to use?",
    answer:
      "Yes! We create easy-to-edit templates in Canva or similar platforms, allowing your team to maintain consistent branding while creating day-to-day social media content.",
  },
  {
    question: "What's the turnaround time for social media content?",
    answer:
      "Regular posts are delivered within 24-48 hours. For monthly content packages (15-20 posts), we deliver the full package within 5-7 business days.",
  },
  {
    question: "Do you offer rush delivery for urgent social media posts?",
    answer:
      "Yes, we offer same-day delivery for urgent social media posts at an additional fee, subject to availability.",
  },
  {
    question: "What's included in the brand style guide?",
    answer:
      "The comprehensive guide includes: logo usage rules, color palettes with all codes (RGB, CMYK, HEX), typography guidelines, image style guidelines, social media post templates, and best practices for maintaining brand consistency.",
  },
  {
    question: "Can you help with seasonal social media campaigns?",
    answer:
      "Yes! We create themed content packages for holidays, special events, and seasonal promotions, including both static and animated posts.",
  },
  {
    question: "Do you provide social media content calendars?",
    answer:
      "Yes, we can provide a strategic content calendar along with your designs, suggesting optimal posting times and content mix for maximum engagement.",
  },
  {
    question: "Can I make revisions to the designs?",
    answer:
      "Absolutely! We offer unlimited revisions during the design process until you're completely satisfied. For logos, revisions are included until final approval. For social media posts, we offer 2 rounds of revisions per post.",
  },
  {
    question: "Do you provide guidance on logo and brand asset usage?",
    answer:
      "Yes, every logo package includes a detailed brand guidelines document explaining proper usage, minimum sizes, spacing requirements, and do's and don'ts for your logo and brand assets.",
  },
];

const WhyUs = [
  {
    serviceName: "Platform Expertise",
    serviceIcon: Award,
    serviceDes:
      "Deep understanding of each social platform's unique requirements and audience behaviors.",
  },
  {
    serviceName: "Brand-Focused Design",
    serviceIcon: Target,
    serviceDes:
      "Every design element carefully crafted to strengthen and promote your brand identity.",
  },
  {
    serviceName: "Engagement-Driven",
    serviceIcon: TrendingUp,
    serviceDes:
      "Strategic designs that encourage user interaction and boost social media engagement.",
  },
  {
    serviceName: "Quick Turnaround",
    serviceIcon: Clock,
    serviceDes:
      "Rapid delivery of designs to keep your social media presence fresh and consistent.",
  },
  {
    serviceName: "Unlimited Revisions",
    serviceIcon: Cloud, // Refresh/redo icon
    serviceDes:
      "We refine your logo and designs until they perfectly match your vision and brand requirements.",
  },
  {
    serviceName: "Social Media Strategy",
    serviceIcon: Target, // Target icon
    serviceDes:
      "Designs aligned with your social media strategy to help achieve your marketing goals.",
  },
];
export default function socialMediaLogoDesign() {
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
          className="absolute inset-0 w-full h-full  object-contain z-20 mix-blend-multiply"
        >
          <source src="/social-logo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Content */}
        <div className="relative z-20 flex w-full h-screen gap-5 justify-center items-center">
          <div className="mt-10 sm:mt-0 flex justify-center items-center flex-col">
            <span className="text-5xl max-w-screen-xl text-gray-900 sm:text-6xl text-center font-extrabold">
              Eye-Catching Designs for Your Brand’s Social Media & Logo
            </span>
            <span className="max-w-screen-xl text-gray-900 text-2xl text-center font-bold">
              Boost engagement and establish a unique brand identity
            </span>
            {/* buttons */}
            <HeroButtons />
          </div>
        </div>
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
