// import Link from "next/link";
// import { Search, MessageCircleCode } from "lucide-react";
// import { useTranslation } from "react-i18next";

// function HeroButtons() {
//     const { t } = useTranslation("homeBtn");
  
//   return (
//     <div className="flex flex-col  sm:gap-10 sm:flex-row items-center justify-center ">
//       {/* First Button: Get a Free Consultation */}
//       <Link
//         href="/contact-us"
//         className="relative inline-block mt-10 text-base sm:text-lg group w-64 sm:w-auto"
//       >
//         <span className="relative z-10 block px-6 py-3 sm:px-8 sm:py-4 overflow-hidden font-semibold leading-tight text-blue-600  transition-colors duration-300 ease-out border-2 border-blue-600 rounded-3xl group-hover:text-white">
//           <span className="absolute inset-0 w-full h-full bg-blue-200 rounded-3xl"></span>
//           <span className="absolute left-0 w-full h-72  transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-blue-600 group-hover:-rotate-180 ease"></span>
//           <span className="relative flex items-center gap-2">
//             <MessageCircleCode />
//             <span> {t("homeBtn.Consultation")}</span>
//           </span>
//         </span>
//         <span className="absolute bottom-0 right-0 w-full h-12 sm:h-14 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-blue-600 rounded-3xl group-hover:mb-0 group-hover:mr-0"></span>
//       </Link>

//       {/* Second Button: Explore Our Services */}
//       <Link
//         href="/#services"
//         className="relative inline-block mt-10 text-base sm:text-lg group w-64 sm:w-auto"
//       >
//         <span className="relative z-10 block px-6 py-3 sm:px-8 sm:py-4 overflow-hidden font-semibold leading-tight text-blue-600  transition-colors duration-300 ease-out border-2 border-blue-600 rounded-3xl group-hover:text-white">
//           <span className="absolute inset-0 w-full h-full bg-blue-200 rounded-3xl"></span>
//           <span className="absolute left-0 w-full h-72  transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-blue-600 group-hover:-rotate-180 ease"></span>
//           <span className="relative flex items-center gap-2">
//             {/* Phone Icon */}
//             <Search />
//             <span> {t("homeBtn.Services")}</span>
//           </span>
//         </span>
//         <span className="absolute bottom-0 right-0 w-full h-12 sm:h-14 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-blue-600 rounded-3xl group-hover:mb-0 group-hover:mr-0"></span>
//       </Link>
//     </div>
//   );
// }

// export default HeroButtons;


"use client";
import Link from "next/link";
import { Search, MessageCircleCode } from "lucide-react";
import { useTranslation } from "react-i18next";

// Reusable button component
const HeroButton = ({ href, icon: Icon, text }) => (
  <Link
    href={href}
    className="inline-flex whitespace-nowrap"
  >
    <span className="relative z-10 flex items-center gap-2 justify-center px-6 py-3  font-extrabold text-blue-600 border-2 border-blue-600 rounded-3xl transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-xl hover:bg-blue-600 hover:text-white min-w-fit">
      <Icon className="w-5 h-5 flex-shrink-0" />
      <span className="inline-block">{text}</span>
    </span>
  </Link>
);

function HeroButtons() {
  const { t } = useTranslation("homeBtn");

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
      <HeroButton 
        href="/contactez-nous"
        icon={MessageCircleCode}
        text={t("homeBtn.Consultation")}
      />
      <HeroButton 
        href="/#services"
        icon={Search}
        text={t("homeBtn.Services")}
      />
    </div>
  );
}

export default HeroButtons;

