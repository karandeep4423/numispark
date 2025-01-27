"use client";
import React from "react";
import {
  Clock,
  Code,
  CheckCircle,
  Users,
  TrendingUp,
  Layout,
  Cloud,
  DollarSign,
  Headphones,
  Brain,
  PenTool,
  ArrowUpRight,
  Rocket,
} from "lucide-react";
import Contact from "@/components/contact-us/page";
import HeroButtons from "@/components/HeroButtons/page";
import FAQs from "@/components/Faqs/page";
import Technologies from "@/components/Technologies/page";
import HowAgencyWorks from "@/components/Process/page";
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
    serviceIcon: "Clock", // Icon for quick delivery and launch
    serviceDes:
      "Our experienced team specializes in SaaS development, delivering platform-independent solutions quickly for maximum availability.",
  },
  {
    serviceName: "User-Friendly Interfaces",
    serviceIcon: "Layout", // Icon for user interfaces and design
    serviceDes:
      "We leverage the latest technologies in SaaS development to create intuitive and scalable user interfaces tailored to your needs.",
  },
  {
    serviceName: "Cost Savings with Optimized Architecture",
    serviceIcon: "DollarSign", // Icon for cost optimization and analysis
    serviceDes:
      "Our SaaS solutions utilize optimized architecture to minimize costs while providing robust and scalable applications.",
  },
  {
    serviceName: "Scalability for Future Growth",
    serviceIcon: "TrendingUp", // Icon for growth and expansion
    serviceDes:
      "We prioritize your success in SaaS development by ensuring every solution is scalable and aligns with your unique business goals.",
  },
  {
    serviceName: "Dedicated Post-Launch Support",
    serviceIcon: "Headphones", // Icon for support and assistance
    serviceDes:
      "Our commitment to your SaaS project continues post-launch, with dedicated support ensuring measurable results and ongoing success.",
  },
];
const WhyUs = [
  {
    serviceName: "Expertise in Multi-Tenant Architecture",
    serviceIcon: "Users", // Icon for collaboration and team
    serviceDes:
      "Our skilled team excels in SaaS development, delivering secure and efficient multi-tenant architecture for maximum availability.",
  },
  {
    serviceName: "Secure and Scalable Cloud Solutions",
    serviceIcon: "Cloud", // Icon for cloud technology
    serviceDes:
      "We build secure and scalable cloud-based SaaS solutions, utilizing the latest technologies tailored to meet your business needs.",
  },
  {
    serviceName: "Agile Development Process for Quick Delivery",
    serviceIcon: "Clock", // Icon for time efficiency
    serviceDes:
      "Our agile SaaS development process ensures quick delivery while prioritizing your success and aligning with your unique goals.",
  },
  {
    serviceName: "24/7 Post-Launch Support",
    serviceIcon: "Headphones", // Icon for customer support
    serviceDes:
      "We provide 24/7 support after launching your SaaS solution, ensuring consistent success and measurable results for your business.",
  },
];
const faqData = [
  {
    question: "What is included in your SaaS development services?",
    answer:
      "Our SaaS development services include requirement analysis, UX/UI design, backend and frontend development, quality assurance testing, deployment, and ongoing support. We ensure that your SaaS application is scalable, secure, and tailored to your business needs.",
  },
  {
    question:
      "Can you help with migrating my existing software to a SaaS model?",
    answer:
      "Yes, we offer migration services to help you transition your existing software to a SaaS model. Our team will assess your current setup, develop a migration plan, and ensure a smooth transition to the cloud without disrupting your business operations.",
  },
  {
    question: "What technologies do you use for SaaS development?",
    answer:
      "We utilize modern technologies and frameworks suitable for SaaS development, including cloud platforms like AWS or Azure, programming languages such as JavaScript, Python, and Ruby, and frontend libraries like React or Angular. We choose the best technology stack based on your specific requirements.",
  },
  {
    question: "How long does it take to develop a SaaS application?",
    answer:
      "The timeline for developing a SaaS application varies based on complexity and features. Typically, it can take anywhere from a few weeks to several months. We will provide you with a detailed timeline after discussing your project requirements during our initial consultation.",
  },
  {
    question:
      "How do you handle ongoing support and maintenance for SaaS applications?",
    answer:
      "We offer comprehensive post-launch support and maintenance packages to ensure your SaaS application runs smoothly. Our support includes bug fixes, updates, feature enhancements, and technical assistance to help you address any issues that may arise.",
  },
  {
    question:
      "Can you integrate my SaaS application with other tools or platforms?",
    answer:
      "Yes, we can integrate your SaaS application with various third-party tools and platforms, such as payment gateways, CRM systems, and marketing automation tools. Our team will work with you to identify the best integration options for your business.",
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
const steps = [
  {
    icon: <Brain className="text-white" size={80} />,
    title: "Requirement Analysis",
    description: "We collaborate closely to understand your objectives, challenges, and goals, ensuring a clear path forward for your project. Our focus is to align with your vision right from the start."
  },
  {
    icon: <PenTool className="text-white" size={80} />,
    title: "Wireframing & Prototyping",
    description: "Using insights from our discussions, we craft a detailed strategy that outlines actionable steps. Our tailored approach ensures measurable success for your project."
  },
  {
    icon: <Code className="text-white" size={80} />,
    title: "Building a secure and scalable SaaS platform",
    description: "Our creative and technical teams work together to bring your ideas to life. We deliver visually stunning designs paired with high-performing development."
  },
  {
    icon: <CheckCircle className="text-white" size={80} />,
    title: "Testing",
    description: "After rigorous testing, we launch your project with precision. Our seamless deployment ensures that your solution is ready to perform flawlessly."
  },
  {
    icon: <Rocket className="text-white" size={80} />,
    title: "Deployment",
    description: "We provide post-launch support to ensure your project stays ahead of the curve. Our team is always here to assist and innovate further."
  }
];
const SaaSDevelopment = () => {


  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-screen bg-blue-200">
        {/* Video Background with blend mode */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover mix-blend-darken"
        >
          <source src="/saas.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Content */}
        <div className="relative z-20 flex w-full h-screen justify-center items-center">
          <div className="w-full px-4 flex flex-col items-center gap-6">
            <h1 className="text-5xl max-w-screen-xl sm:text-4xl lg:text-6xl text-center font-extrabold text-gray-200">
              Build Scalable SaaS Solutions Tailored to Your Business
            </h1>
            <p className=" max-w-screen-xl text-2xl text-center font-bold text-gray-200">
              From concept to deployment, we create robust SaaS platforms that
              deliver results
            </p>
            {/* buttons */}
            <HeroButtons />
          </div>
        </div>
      </div>
      {/* Technologies Section */}
      <Technologies technologies={TECHNOLOGIES} />
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
              Cloud,
              Headphones,
              Clock,
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
              Layout,
              Headphones,
              DollarSign,
              TrendingUp,
              Clock,
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

export default SaaSDevelopment;
