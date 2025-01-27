"use client";
import {
  Users,
  ArrowUpRight,
  RefreshCcw,
  DollarSign,
  MessageSquareText,
  Globe,
  Zap,
  Settings,
  Brain,
  Target,
  PenTool,
  Rocket,
  BarChart,
  Cog,
  LineChart,
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
    description: "We dive deep into your business needs and challenges through focused discovery sessions. Our team ensures we're not just understanding your requirements, but uncovering opportunities for innovation and growth."
  },
  {
    icon: <Target className="text-white" size={80} />,
    title: "Strategic Planning",
    description: "Transforming insights into actionable strategies, we create a clear roadmap for your project. Our detailed planning ensures efficient development, timeline adherence, and measurable outcomes."
  },
  {
    icon: <PenTool className="text-white" size={80} />,
    title: "Design & Development",
    description: "Our expert team brings your vision to life using cutting-edge AI technologies and clean code. Regular updates and demonstrations keep you involved throughout the development process."
  },
  {
    icon: <Rocket className="text-white" size={80} />,
    title: "Launch & Deployment",
    description: "We ensure a smooth transition from development to deployment with comprehensive testing and optimization. Your solution launches with confidence, backed by thorough quality assurance."
  },
  {
    icon: <RefreshCcw className="text-white" size={80} />,
    title: "Ongoing Support",
    description: "We provide continuous support, regular updates, and proactive maintenance to keep your solution performing at its best."
  }
];
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
