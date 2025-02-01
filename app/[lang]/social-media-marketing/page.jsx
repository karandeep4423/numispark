"use client";
import {
  UserPlus,
  Map,
  ArrowUpRight, Search,
  PieChart,
  Headphones,
  Eye,
  Mic,
  Heart,
  Video,
  Activity,
  BarChart2,
  Edit3,
  DollarSign,
  Smile,
  FileText,
  Image,
  Instagram,
  TrendingUp,
  MessageCircle,
  Globe,
  Brain,
  Target,
  BarChart,
  Play,
} from "lucide-react";
import Contact from "@/components/contact-us/page";
import HeroButtons from "@/components/HeroButtons/page";
import FAQs from "@/components/Faqs/page";
import Technologies from "@/components/Technologies/page";
import HowAgencyWorks from "@/components/Process/page";
const Services = [
  {
    serviceName: "Content Creation",
    serviceIcon: Edit3,
    serviceDes:
      "Create visually engaging and impactful posts, videos, and stories tailored to your brand and audience.",
  },
  {
    serviceName: "Campaign Management",
    serviceIcon: Activity,
    serviceDes:
      "Plan, execute, and monitor social media campaigns to drive meaningful engagement and conversions.",
  },
  {
    serviceName: "Analytics & Reporting",
    serviceIcon: BarChart2,
    serviceDes:
      "Analyze performance metrics to optimize strategies and provide actionable insights.",
  },
  {
    serviceName: "Influencer Marketing",
    serviceIcon: UserPlus,
    serviceDes:
      "Partner with influencers to amplify your brand's voice and reach targeted audiences.",
  },
  {
    serviceName: "Social Media Strategy Development",
    serviceIcon: Map,
    serviceDes:
      "Craft a custom strategy to align with your business goals and social media objectives.",
  },
  {
    serviceName: "Paid Advertising Management",
    serviceIcon: DollarSign,
    serviceDes:
      "Optimize paid ads on platforms like Facebook, Instagram, and LinkedIn for maximum ROI.",
  },
  {
    serviceName: "Competitor Analysis",
    serviceIcon: Eye,
    serviceDes:
      "Gain insights into competitors' strategies to stay ahead in the market and refine your approach.",
  },
  {
    serviceName: "Performance Optimization",
    serviceIcon: TrendingUp,
    serviceDes:
      "Continuously improve your campaigns for better engagement, reach, and results.",
  },
];
const features = [
  {
    serviceName: "Platform-Specific Expertise",
    serviceIcon: Globe,
    serviceDes:
      "Our team understands the nuances of each social media platform, tailoring strategies to maximize engagement and reach on Facebook, Instagram, LinkedIn, TikTok, and more.",
  },
  {
    serviceName: "Creative Content Creation",
    serviceIcon: Image,
    serviceDes:
      "Develop visually appealing graphics, videos, and written content that align with your brand and captivate your audience.",
  },
  {
    serviceName: "Engagement Optimization",
    serviceIcon: MessageCircle,
    serviceDes:
      "Boost interactions with your audience by fostering conversations, responding to comments, and creating engaging polls and stories.",
  },
  {
    serviceName: "Real-Time Analytics & Reporting",
    serviceIcon: PieChart,
    serviceDes:
      "Monitor the performance of your social media campaigns in real-time and receive detailed reports to inform strategic decisions.",
  },
  {
    serviceName: "Brand Voice Consistency",
    serviceIcon: Mic,
    serviceDes:
      "Maintain a consistent tone and message across platforms, reinforcing your brand identity and values.",
  },
  {
    serviceName: "Social Listening & Sentiment Analysis",
    serviceIcon: Headphones,
    serviceDes:
      "Monitor online conversations about your brand and industry to stay responsive to trends and customer sentiment.",
  },
  {
    serviceName: "Video Marketing",
    serviceIcon: Video,
    serviceDes:
      "Create impactful video content, including reels, live sessions, and ads, to capture your audience’s attention and drive engagement.",
  },
  {
    serviceName: "Trend Utilization",
    serviceIcon: TrendingUp,
    serviceDes:
      "Stay ahead by leveraging the latest trends, challenges, and viral content to keep your brand relevant and relatable.",
  },
  {
    serviceName: "Advanced Targeting",
    serviceIcon: Target,
    serviceDes:
      "Reach the right audience by leveraging precise demographic, geographic, and interest-based targeting options for organic and paid campaigns.",
  },
];
const TECHNOLOGIES = [
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
    question: "Which social media platforms do you specialize in?",
    answer:
      "We specialize in managing campaigns across popular platforms such as Facebook, Instagram, LinkedIn, Twitter, TikTok, Pinterest, and YouTube. Our team tailors strategies to suit the unique features and audience of each platform.",
  },
  {
    question: "Can you manage paid social media ads for us?",
    answer:
      "Absolutely! We create and manage targeted ad campaigns, including audience research, ad design, and performance optimization, to maximize your ROI on platforms like Facebook Ads, Instagram Ads, LinkedIn Ads, and TikTok Ads.",
  },
  {
    question: "How often will you post on our social media accounts?",
    answer:
      "The posting frequency depends on your specific goals and chosen plan. Typically, we recommend 3-5 posts per week per platform to maintain consistent engagement with your audience.",
  },
  {
    question: "Do you provide content creation as part of your service?",
    answer:
      "Yes, we handle content creation, including designing graphics, writing captions, producing videos, and curating content that aligns with your brand’s voice and engages your audience effectively.",
  },
  {
    question: "How do you measure the success of social media campaigns?",
    answer:
      "We track metrics such as follower growth, engagement rates, click-through rates, reach, impressions, and conversions. Additionally, we provide detailed reports with actionable insights to optimize future campaigns.",
  },
  {
    question:
      "How long does it take to see results from social media marketing?",
    answer:
      "Results vary based on your goals and the competitive landscape. While you may see initial engagement improvements within a few weeks, consistent efforts over 3-6 months typically yield significant growth in brand awareness and ROI.",
  },
  {
    question: "Do you offer social media management for small businesses?",
    answer:
      "Yes, our services are tailored to businesses of all sizes. We create cost-effective strategies designed to meet the needs and budgets of small businesses while delivering measurable results.",
  },
  {
    question: "Will I have input in the social media content and strategy?",
    answer:
      "Of course! We work collaboratively with you to ensure the content and strategies align with your brand’s vision and goals. Your feedback is an integral part of the process.",
  },
  {
    question: "Can you help grow our follower count organically?",
    answer:
      "Yes, we use proven techniques like engaging content creation, strategic posting, hashtags, collaborations, and community interaction to grow your follower base organically over time.",
  },
  {
    question: "What tools do you use for social media management?",
    answer:
      "We utilize industry-leading tools such as Hootsuite, Buffer, Facebook Ads Manager, and other analytics tools to schedule posts, monitor performance, and optimize campaigns.",
  },
];
const WhyUs = [
  {
    serviceName: "Increased Brand Awareness",
    serviceIcon: Globe,
    serviceDes:
      "Enhance your brand's visibility and recognition through tailored strategies and campaigns.",
  },
  {
    serviceName: "Targeted Campaigns for Higher ROI",
    serviceIcon: Target,
    serviceDes:
      "Reach the right audience with data-driven targeting for better campaign performance.",
  },
  {
    serviceName: "Consistent Engagement with Followers",
    serviceIcon: Heart,
    serviceDes:
      "Foster meaningful connections with your audience through regular and interactive content.",
  },
  {
    serviceName: "Real-Time Analytics",
    serviceIcon: BarChart,
    serviceDes:
      "Monitor campaign performance and make informed decisions with up-to-date analytics.",
  },
  {
    serviceName: "Enhanced Customer Loyalty",
    serviceIcon: Smile,
    serviceDes:
      "Build long-term relationships with your audience through authentic and responsive interactions.",
  },
  {
    serviceName: "Cost-Effective Marketing",
    serviceIcon: DollarSign,
    serviceDes:
      "Maximize your marketing budget by focusing on strategies that deliver measurable results.",
  },
];
const steps = [
  {
    icon: <Brain className="text-white" size={80} />,
    title: "Understanding Your Goals",
    description: "We start by thoroughly understanding your business objectives, target audience, and market dynamics to ensure our strategies are aligned with your goals. This foundational step is crucial for tailoring an effective digital marketing approach."
  },
  {
    icon: <Search className="text-white" size={80} />,
    title: "Market Research & Analysis",
    description: "In-depth market research helps us identify industry trends, competitor strategies, and consumer behavior, providing valuable insights that inform our marketing tactics and campaign planning."
  },
  {
    icon: <FileText className="text-white" size={80} />,
    title: "Strategy Development",
    description: "We develop a comprehensive digital marketing strategy that includes channel selection, campaign objectives, and a detailed content plan to engage your audience effectively and meet your business goals."
  },
  {
    icon: <Play className="text-white" size={80} />,
    title: "Implementation & Campaign Launch",
    description: "Once the strategy and content are ready, we implement the campaigns across selected digital channels. This phase involves setting up ads, scheduling posts, and ensuring everything is optimized for maximum impact."
  },
  {
    icon: <FileText className="text-white" size={80} />,
    title: "Reporting & Analysis",
    description: "We provide detailed reports that analyze campaign performance, including key metrics and insights. This transparency helps you understand the impact of our efforts and informs future marketing strategies."
  }
];

export default function SocialMediaMarketing() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-blue-200 ">
        <div className="max-w-screen-xl m-auto  p-5 flex flex-col sm:flex-row  h-screen gap-5 justify-center items-center">
          <div className=" w-full flex flex-col items-center">
            <span className="text-5xl text-gray-800 sm:text-6xl text-center font-extrabold">
              Build Your Brand on Social Media Platforms
            </span>
            <span className=" text-gray-800 text-2xl text-center font-bold">
              Empower your business with tailored strategies
            </span>
            {/* buttons */}
            <HeroButtons />
          </div>
          <img className="w-2/4 h-96" src="/social-marketing.gif"></img>
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
          of Social Media Marketing
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
