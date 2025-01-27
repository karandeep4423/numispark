"use client";
import {
  Users,
  Smile,
  ArrowUpRight,
  TrendingUp,
  MessageCircle,
  Clock,
  Code,
  Smartphone,
  Megaphone,
  Layout,
  Cloud,
  Zap,
  RefreshCw,
  ShoppingCart,
  Brain,
  Target,
  Rocket,
} from "lucide-react";
import Contact from "@/components/contact-us/page";
import FAQs from "@/components/Faqs/page";
import Technologies from "@/components/Technologies/page";
import HowAgencyWorks from "@/components/Process/page";
import Hero from "@/components/HomeHero/page";
const steps = [
  {
    icon: <Brain className="text-white" size={80} />,
    title: "Understanding Your Vision",
    description: "We collaborate closely to understand your objectives, challenges, and goals, ensuring a clear path forward for your project. Our focus is to align with your vision right from the start."
  },
  {
    icon: <Target className="text-white" size={80} />,
    title: "Strategic Planning",
    description:"Using insights from our discussions, we craft a detailed strategy that outlines actionable steps. Our tailored approach ensures measurable success for your project."
  },
  {
    icon: <Code className="text-white" size={80} />,
    title: "Design & Development",
    description:"Our creative and technical teams work together to bring your ideas to life. We deliver visually stunning designs paired with high-performing development."
  },
  {
    icon: <Rocket className="text-white" size={80} />,
    title: "Launch & Deployment",
    description:
      "After rigorous testing, we launch your project with precision. Our seamless deployment ensures that your solution is ready to perform flawlessly.",
  },
  {
    icon: <RefreshCw className="text-white" size={80} />,
    title: "Ongoing Support",
    description:
      "We provide post-launch support to ensure your project stays ahead of the curve. Our team is always here to assist and innovate further.",
  },
];

const Services = [
  {
    serviceName: "Web Development",
    serviceIcon: Code,
    serviceDes:
      "Build scalable, platform-independent web solutions for enhanced accessibility and reach.",
  },
  {
    serviceName: "Mobile App Development",
    serviceIcon: Smartphone,
    serviceDes:
      "Create robust mobile applications tailored for Android and iOS platforms.",
  },
  {
    serviceName: "Digital Marketing",
    serviceIcon: Megaphone,
    serviceDes:
      "Boost your online presence and drive engagement with data-driven marketing strategies.",
  },
  {
    serviceName: "UI/UX Design",
    serviceIcon: Layout,
    serviceDes:
      "Design intuitive and visually appealing interfaces for a seamless user experience.",
  },
  {
    serviceName: "SaaS Development",
    serviceIcon: Cloud,
    serviceDes:
      "Develop secure, scalable, and customizable SaaS solutions for your business needs.",
  },
  {
    serviceName: "AI and Automation",
    serviceIcon: Zap,
    serviceDes:
      "Leverage AI and automation to optimize workflows and drive efficiency.",
  },
  {
    serviceName: "Ecommerce Development",
    serviceIcon: ShoppingCart,
    serviceDes:
      "Create dynamic e-commerce platforms to enhance your online retail presence.",
  },
];
const WhyUs = [
  {
    serviceName: "Experienced Team of Experts",
    serviceIcon: "Users", // Icon for team and collaboration
    serviceDes:
      "Our experienced team of experts delivers platform-independent business solutions for maximum availability.",
  },
  {
    serviceName: "Cutting-Edge Tools and Technologies",
    serviceIcon: "Code", // Icon for development and tools
    serviceDes:
      "We use the latest technologies to build robust and scalable solutions tailored to your needs.",
  },
  {
    serviceName: "Customer-Centric Approach",
    serviceIcon: "Smile", // Icon for customer satisfaction
    serviceDes:
      "We prioritize your success and ensure every solution aligns with your unique goals.",
  },
  {
    serviceName: "Proven Track Record with Measurable Results",
    serviceIcon: "TrendingUp", // Icon for growth and performance
    serviceDes:
      "Our proven track record ensures measurable results and consistent success for your business.",
  },
  {
    serviceName: "Transparent Communication",
    serviceIcon: "MessageCircle", // Icon for communication
    serviceDes:
      "We maintain transparency in our communication, keeping you informed every step of the way.",
  },
  {
    serviceName: "On-Time Delivery",
    serviceIcon: "Clock", // Icon for punctuality
    serviceDes:
      "We value your time and guarantee timely delivery of all projects, no matter the scale.",
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
  {
    name: "Google Analytics",
    logo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTYiIGhlaWdodD0iMjg0IiB2aWV3Qm94PSIwIDAgMjU2IDI4NCI+PHBhdGggZmlsbD0iI2Y5YWIwMCIgZD0iTTI1Ni4wMDMgMjQ3LjkzM2EzNS4yMjQgMzUuMjI0IDAgMCAxLTM5LjM3NiAzNS4xNjFjLTE4LjA0NC0yLjY3LTMxLjI2Ni0xOC4zNzEtMzAuODI2LTM2LjYwNlYzNi44NDVDMTg1LjM2NSAxOC41OTEgMTk4LjYyIDIuODgxIDIxNi42ODcuMjRhMzUuMjIgMzUuMjIgMCAwIDEgMzkuMzE2IDM1LjE2eiIvPjxwYXRoIGZpbGw9IiNlMzc0MDAiIGQ9Ik0zNS4xMDEgMjEzLjE5M2MxOS4zODYgMCAzNS4xMDEgMTUuNzE2IDM1LjEwMSAzNS4xMDFjMCAxOS4zODYtMTUuNzE1IDM1LjEwMS0zNS4xMDEgMzUuMTAxUzAgMjY3LjY4IDAgMjQ4LjI5NXMxNS43MTUtMzUuMTAyIDM1LjEwMS0zNS4xMDJtOTIuMzU4LTEwNi4zODdjLTE5LjQ3NyAxLjA2OC0zNC41OSAxNy40MDYtMzQuMTM3IDM2LjkwOHY5NC4yODVjMCAyNS41ODggMTEuMjU5IDQxLjEyMiAyNy43NTUgNDQuNDMzYTM1LjE2IDM1LjE2IDAgMCAwIDQyLjE0Ni0zNC41NlYxNDIuMDg5YTM1LjIyIDM1LjIyIDAgMCAwLTM1Ljc2NC0zNS4yODIiLz48L3N2Zz4=",
  },
  {
    name: "Semrush",
    logo: "https://cdn.brandfetch.io/idt3n8W3ef/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B",
  },
  {
    name: "Ahrefs",
    logo: "https://cdn.brandfetch.io/idxB1p5kuP/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
  },
  {
    name: "Meta Ads",
    logo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNTUuNyIgaGVpZ2h0PSIxMDQiIHZpZXdCb3g9IjAgMCAyNTYgMTcxIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImxvZ29zTWV0YUljb24wIiB4MT0iMTMuODc4JSIgeDI9Ijg5LjE0NCUiIHkxPSI1NS45MzQlIiB5Mj0iNTguNjk0JSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzAwNjRlMSIvPjxzdG9wIG9mZnNldD0iNDAlIiBzdG9wLWNvbG9yPSIjMDA2NGUxIi8+PHN0b3Agb2Zmc2V0PSI4MyUiIHN0b3AtY29sb3I9IiMwMDczZWUiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwMDgyZmIiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0ibG9nb3NNZXRhSWNvbjEiIHgxPSI1NC4zMTUlIiB4Mj0iNTQuMzE1JSIgeTE9IjgyLjc4MiUiIHkyPSIzOS4zMDclIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMDA4MmZiIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDA2NGUwIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZmlsbD0iIzAwODFmYiIgZD0iTTI3LjY1MSAxMTIuMTM2YzAgOS43NzUgMi4xNDYgMTcuMjggNC45NSAyMS44MmMzLjY3NyA1Ljk0NyA5LjE2IDguNDY2IDE0Ljc1MSA4LjQ2NmM3LjIxMSAwIDEzLjgwOC0xLjc5IDI2LjUyLTE5LjM3MmMxMC4xODUtMTQuMDkyIDIyLjE4Ni0zMy44NzQgMzAuMjYtNDYuMjc1bDEzLjY3NS0yMS4wMWM5LjQ5OS0xNC41OTEgMjAuNDkzLTMwLjgxMSAzMy4xLTQxLjgwNkMxNjEuMTk2IDQuOTg1IDE3Mi4yOTggMCAxODMuNDcgMGMxOC43NTggMCAzNi42MjUgMTAuODcgNTAuMyAzMS4yNTdDMjQ4LjczNSA1My41ODQgMjU2IDgxLjcwNyAyNTYgMTEwLjcyOWMwIDE3LjI1My0zLjQgMjkuOTMtOS4xODcgMzkuOTQ2Yy01LjU5MSA5LjY4Ni0xNi40ODggMTkuMzYzLTM0LjgxOCAxOS4zNjN2LTI3LjYxNmMxNS42OTUgMCAxOS42MTItMTQuNDIyIDE5LjYxMi0zMC45MjdjMC0yMy41Mi01LjQ4NC00OS42MjMtMTcuNTY0LTY4LjI3M2MtOC41NzQtMTMuMjMtMTkuNjg0LTIxLjMxMy0zMS45MDctMjEuMzEzYy0xMy4yMiAwLTIzLjg1OSA5Ljk3LTM1LjgxNSAyNy43NWMtNi4zNTYgOS40NDUtMTIuODgyIDIwLjk1Ni0yMC4yMDggMzMuOTQ0bC04LjA2NiAxNC4yODljLTE2LjIwMyAyOC43MjgtMjAuMzA3IDM1LjI3MS0yOC40MDggNDYuMDdjLTE0LjIgMTguOTEtMjYuMzI0IDI2LjA3Ni00Mi4yODcgMjYuMDc2Yy0xOC45MzUgMC0zMC45MS04LjItMzguMzI1LTIwLjU1NkMyLjk3MyAxMzkuNDEzIDAgMTI2LjIwMiAwIDExMS4xNDh6Ii8+PHBhdGggZmlsbD0idXJsKCNsb2dvc01ldGFJY29uMCkiIGQ9Ik0yMS44MDIgMzMuMjA2QzM0LjQ4IDEzLjY2NiA1Mi43NzQgMCA3My43NTcgMEM4NS45MSAwIDk3Ljk5IDMuNTk3IDExMC42MDUgMTMuODk3YzEzLjc5OCAxMS4yNjEgMjguNTA1IDI5LjgwNSA0Ni44NTMgNjAuMzY4bDYuNTggMTAuOTY3YzE1Ljg4MSAyNi40NTkgMjQuOTE3IDQwLjA3IDMwLjIwNSA0Ni40OWM2LjgwMiA4LjI0MyAxMS41NjUgMTAuNyAxNy43NTIgMTAuN2MxNS42OTUgMCAxOS42MTItMTQuNDIyIDE5LjYxMi0zMC45MjdsMjQuMzkzLS43NjZjMCAxNy4yNTMtMy40IDI5LjkzLTkuMTg3IDM5Ljk0NmMtNS41OTEgOS42ODYtMTYuNDg4IDE5LjM2My0zNC44MTggMTkuMzYzYy0xMS4zOTUgMC0yMS40OS0yLjQ3NS0zMi42NTQtMTMuMDA3Yy04LjU4Mi04LjA4My0xOC42MTUtMjIuNDQzLTI2LjMzNC0zNS4zNTJsLTIyLjk2LTM4LjM1MkMxMTguNTI4IDY0LjA4IDEwNy45NiA0OS43MyAxMDEuODQ1IDQzLjIzYy02LjU3OC02Ljk4OC0xNS4wMzYtMTUuNDI4LTI4LjUzMi0xNS40MjhjLTEwLjkyMyAwLTIwLjIgNy42NjYtMjcuOTYzIDE5LjM5eiIvPjxwYXRoIGZpbGw9InVybCgjbG9nb3NNZXRhSWNvbjEpIiBkPSJNNzMuMzEyIDI3LjgwMmMtMTAuOTIzIDAtMjAuMiA3LjY2Ni0yNy45NjMgMTkuMzljLTEwLjk3NiAxNi41NjgtMTcuNjk4IDQxLjI0NS0xNy42OTggNjQuOTQ0YzAgOS43NzUgMi4xNDYgMTcuMjggNC45NSAyMS44Mkw5LjAyNyAxNDkuNDgyQzIuOTczIDEzOS40MTMgMCAxMjYuMjAyIDAgMTExLjE0OEMwIDgzLjc3MiA3LjUxNCA1NS4yNCAyMS44MDIgMzMuMjA2QzM0LjQ4IDEzLjY2NiA1Mi43NzQgMCA3My43NTcgMHoiLz48L3N2Zz4=",
  },
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
];

export default function Home() {

  return (
    <div>
      {/* Hero Section */}
      <Hero technologies={TECHNOLOGIES}/>
      {/* Services Section */}
      <div className="py-16 bg-gray-50">
        <h2
          id="services"
          className="text-4xl px-2 text-center font-bold text-gray-800"
        >
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
      {/* Process  */}
      <HowAgencyWorks steps={steps} />
      {/* Why partner with us */}
      <div className="py-16 bg-gray-50">
        <h2 className="text-4xl text-center font-bold text-gray-800">
          Why{" "}
          <span className="text-blue-600 bg-blue-200 p-2.5 rounded-2xl">
            Partner
          </span>{" "}
          With Us
        </h2>
        <p className="text-xl text-center font-medium text-gray-600 mt-4">
          Your Success Is Our Priority
        </p>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-4">
          {WhyUs.map((service, index) => {
            const Icon = {
              Users,
              Code,
              Smile,
              TrendingUp,
              MessageCircle,
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
