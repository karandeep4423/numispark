import React from "react";
import {
  User,
  Users,
  Award,
  Clock,
  Cpu,
  Shield,
  MessageCircle,
  Settings,
} from "lucide-react";
import Contact from "@/components/contact-us/page";
import HeroButtons from "@/components/HeroButtons/page";
const teamMembers = [
  {
    name: "Jessica Dobrev",
    role: "Backend Lead",
    image: "/api/placeholder/400/400",
  },
  {
    name: "Drew Cano",
    role: "Head of UX",
    image: "/api/placeholder/400/400",
  },
  {
    name: "Sasha Kindred",
    role: "VP of Marketing",
    image: "/api/placeholder/400/400",
  },
  {
    name: "Emily Donnavan",
    role: "Product Lead",
    image: "/api/placeholder/400/400",
  },
  {
    name: "Orlando Diggs",
    role: "Co-Founder and COO",
    image: "/api/placeholder/400/400",
  },
  {
    name: "Sophie Chamberlain",
    role: "Head of Sales",
    image: "/api/placeholder/400/400",
  },
  {
    name: "Lana Steiner",
    role: "VP of Customer Success",
    image: "/api/placeholder/400/400",
  },
  {
    name: "Emmy Rosum",
    role: "Co-Founder and CEO",
    image: "/api/placeholder/400/400",
  },
];

const whyChooseUs = [
  {
    serviceIcon: User,
    title: "Dedicated Team of Experts",
    description:
      "Our team comprises industry veterans, certified professionals, and creative minds who bring diverse expertise to every project.",
  },
  {
    serviceIcon: Settings,
    title: "Tailored Solutions for Every Client",
    description:
      "We understand that every business is unique. Our approach focuses on creating customized solutions that align perfectly with your specific needs.",
  },
  {
    serviceIcon: Award,
    title: "Proven Track Record of Success",
    description:
      "Our portfolio speaks for itself, with numerous successful projects across various industries. We've helped businesses achieve their digital goals.",
  },
  {
    serviceIcon: MessageCircle,
    title: "Transparent Communication",
    description:
      "We believe in building trust through transparency. Our clear communication channels and well-defined processes ensure you're always informed.",
  },
];

const coreValues = [
  {
    serviceIcon: Shield,
    title: "Quality First",
    description:
      "We never compromise on quality, ensuring every project meets our high standards of excellence.",
  },
  {
    serviceIcon: Clock,
    title: "Timely Delivery",
    description:
      "We respect deadlines and ensure projects are delivered on time without sacrificing quality.",
  },
  {
    serviceIcon: Cpu,
    title: "Innovation",
    description:
      "We stay ahead of technological trends to provide cutting-edge solutions for our clients.",
  },
  {
    serviceIcon: Users,
    title: "Client Partnership",
    description:
      "We build lasting relationships with our clients, becoming their trusted technology partners.",
  },
];
const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-blue-200">
      <div className="flex mx-3 flex-col h-screen gap-5 justify-center items-center">
        <span className="text-gray-800 text-4xl text-center font-bold">
          Empowering Your Business with
        </span>

        <span className="text-5xl text-gray-800 sm:text-6xl text-center font-extrabold">
          Innovative Digital Solutions
        </span>
        <span className="text-xl max-w-screen-xl  text-gray-800 sm:text-2xl text-center font-bold">
          We're a team of passionate digital craftsmen, turning innovative ideas
          into powerful digital solutions that drive business growth.
        </span>
        <HeroButtons />
      </div>
      </div>
      {/* core values Section */}
      <div className="py-16 bg-gray-50">
        <h2 className="text-4xl px-2 text-center font-bold text-gray-800">
          Our Core{" "}
          <span className="text-blue-600 bg-blue-200 p-1.5 rounded-2xl">
            Values
          </span>
        </h2>
        <p className="px-2 text-xl text-center font-medium text-gray-600 mt-4">
          Comprehensive Solutions Tailored to Your Needs
        </p>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-4">
          {coreValues.map((service, index) => {
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
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      {/* Meet our team */}
      <div className="pb-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl px-2 text-center font-bold text-gray-800">
              Meet Our
              <span className="text-blue-600 m-1 bg-blue-200 p-1.5 rounded-2xl">
                Team
              </span>
            </h2>
            <p className="px-2 text-xl text-center font-medium text-gray-600 mt-4">
              Meet the talented individuals who make our digital innovation
              possible.{" "}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-center p-6 shadow-[5px_5px_0px_4px_rgb(147,197,253),_-5px_-5px_0px_rgba(255,255,255,1)] rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="aspect-square overflow-hidden rounded-lg bg-white">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 ">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Why Partner With Us */}
      <div className="pb-16 bg-gray-50">
        <h2 className="text-4xl px-2 text-center font-bold text-gray-800">
          Why
          <span className="text-blue-600 m-1 bg-blue-200 p-1.5 rounded-2xl">
            Partner
          </span>
          With Us{" "}
        </h2>
        <p className="px-2 text-xl text-center font-medium text-gray-600 mt-4">
          Comprehensive Solutions Tailored to Your Needs
        </p>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-4">
          {whyChooseUs.map((service, index) => {
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
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      {/* Contact us */}
      <Contact />
    </div>
  );
};

export default About;
