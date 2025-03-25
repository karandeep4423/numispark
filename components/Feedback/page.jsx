// import { useState, useEffect } from "react";
// import Image from "next/image";

// export default function Feedback() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAutoplay, setIsAutoplay] = useState(true);
//   const [slidesPerView, setSlidesPerView] = useState(1);

//   const images = [
//     {
//       src: "/gallery/seo-cours.jpeg",
//       alt: "Conference 2",
//       name: "Paul ceo of xyz",
//       feedback:
//         "Zaryab Birmingham,UKunjabi Lesson teachers are cooperative and helpful with myself when it comes to learning Punjabi; currently, we are focusing on writing, and I am enjoying it.",
//     },
//     {
//       src: "/gallery/seo-cours.jpeg",
//       alt: "Conference 1",
//       name: "Ruksar ceo of MOtivation",
//       feedback:
//         "Zaryab Birmingham,UKunjabi Lesson teachers are cooperative and helpful with myself when it comes to learning Punjabi; currently, we are focusing on writing, and I am enjoying it.",
//     },
//     {
//         src: "/gallery/seo-cours.jpeg",
//         alt: "Conference 2",
//         name: "Paul ceo of xyz",
//         feedback:
//           "Zaryab Birmingham,UKunjabi Lesson teachers are cooperative and helpful with myself when it comes to learning Punjabi; currently, we are focusing on writing, and I am enjoying it.",
//       },
//       {
//         src: "/gallery/seo-cours.jpeg",
//         alt: "Conference 1",
//         name: "Ruksar ceo of MOtivation",
//         feedback:
//           "Zaryab Birmingham,UKunjabi Lesson teachers are cooperative and helpful with myself when it comes to learning Punjabi; currently, we are focusing on writing, and I am enjoying it.",
//       },
//   ];

//   // Responsive slides per view
//   const updateSlidesPerView = () => {
//     if (window.innerWidth >= 1024) {
//       setSlidesPerView(1);
//     } else if (window.innerWidth >= 640) {
//       setSlidesPerView(1);
//     } else {
//       setSlidesPerView(1);
//     }
//   };

//   useEffect(() => {
//     updateSlidesPerView();
//     window.addEventListener("resize", updateSlidesPerView);
//     return () => window.removeEventListener("resize", updateSlidesPerView);
//   }, []);

//   // Navigation
//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => {
//       const nextIndex = prevIndex + 1;
//       if (nextIndex > images.length - slidesPerView) {
//         return 0; // Reset to the first slide
//       }
//       return nextIndex;
//     });
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
//   };

//   // Pagination
//   const goToSlide = (index) => {
//     setCurrentIndex(index * slidesPerView);
//   };

//   const totalPages = Math.ceil(images.length / slidesPerView);

//   // Autoplay
//   useEffect(() => {
//     if (isAutoplay) {
//       const timer = setInterval(nextSlide, 6000);
//       return () => clearInterval(timer);
//     }
//   }, [currentIndex, isAutoplay]);

//   return (
//     <div className="max-w-7xl relative mx-auto overflow-x-hidden px-2">
//       <h2 className="text-4xl text-center mt-5 font-bold text-gray-800">
//         Our Clients Feedback
//       </h2>
//       <div
//         className="flex transition-transform duration-300"
//         style={{
//           transform: `translateX(-${(currentIndex * 100) / slidesPerView}%)`,
//         }}
//       >
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className="flex-shrink-0"
//             style={{ width: `${100 / slidesPerView}%` }}
//           >
//             <div className="sm:p-8 rounded-2xl lg:p-14 py-14 border-y-2 sm:border-2 relative mx-0 sm:mx-14 lg:mx-20 mt-5 border-blue-200">
//               <span className="absolute pt-4 pl-4 sm:pl-0 sm:pt-6 -top-1 sm:-left-4 -left-0.5 w-14 text-left text-4xl md:text-7xl text-blue-600 bg-white">
//                 ❝
//               </span>
//               <div className="max-w-screen-xl flex p-6 md:flex-row flex-col gap-6 w-11/12 m-auto max-h-fit rounded-2xl shadow-[5px_5px_0px_4px_rgb(147,197,253),_-5px_-5px_0px_rgba(255,255,255,1)]">
//                 <div className="w-32 h-32 md:m-6 m-auto relative">
//                   {" "}
//                   {/* Added 'relative' here */}
//                   <Image
//                     className="w-full h-full rounded-full shadow-[5px_5px_0px_4px_rgb(147,197,253),_-5px_-5px_0px_rgba(255,255,255,1)]"
//                     width={300}
//                     height={300}
//                     alt={image.alt}
//                     src={image.src}
//                     priority
//                   />
//                 </div>
//                 <div className="md:w-8/12 flex flex-col justify-center items-center md:items-start text-lg">
//                   <p className="text-gray-600">{image.name}</p>
//                   <p>{image.feedback}</p>
//                 </div>
//               </div>
//               <span className="absolute -bottom-1 sm:-right-4 pr-4 sm:pr-0 -right-0.5 w-14 pt-4 sm:pt-6 text-right text-4xl md:text-7xl text-blue-600 bg-white">
//                 ❞
//               </span>
//             </div>
//           </div>
//         ))}
//       </div>
//       <button
//         onClick={prevSlide}
//         disabled={currentIndex === 0}
//         className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-blue-300 hover:bg-blue-600 text-white p-2 rounded-full disabled:opacity-50"
//       >
//         {"<"}
//       </button>
//       <button
//         onClick={nextSlide}
//         disabled={false} // Always enable since it loops
//         className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-blue-300 hover:bg-blue-600 text-white p-2 rounded-full"
//       >
//         {">"}
//       </button>

//       <div className="flex justify-center mt-4">
//         {Array.from({ length: totalPages }).map((_, index) => (
//           <button
//             key={index}
//             onClick={() => goToSlide(index)}
//             className={`w-3 h-3 m-1 rounded-full ${
//               Math.floor(currentIndex / slidesPerView) === index
//                 ? "bg-blue-600"
//                 : "bg-blue-300"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function Feedback() {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const images = [
    {
      src: "/gallery/seo-cours.jpeg",
      alt: "Conference 2",
      name: "Paul ceo of xyz",
      feedback:
        "Zaryab Birmingham,UKunjabi Lesson teachers are cooperative and helpful with myself when it comes to learning Punjabi; currently, we are focusing on writing, and I am enjoying it.",
    },
    {
      src: "/gallery/seo-lecture.jpeg",
      alt: "Conference 1",
      name: "Ruksar ceo of MOtivation",
      feedback:
        "Zaryab Birmingham,UKunjabi Lesson teachers are cooperative and helpful with myself when it comes to learning Punjabi; currently, we are focusing on writing, and I am enjoying it.",
    },
    {
      src: "/gallery/seo-lecture1.jpeg",
      alt: "Conference 2",
      name: "Paul ceo of xyz",
      feedback:
        "Zaryab Birmingham,UKunjabi Lesson teachers are cooperative and helpful with myself when it comes to learning Punjabi; currently, we are focusing on writing, and I am enjoying it.",
    },
    {
      src: "/gallery/copywriting1.jpeg",
      alt: "Conference 1",
      name: "Ruksar ceo of MOtivation",
      feedback:
        "Zaryab Birmingham,UKunjabi Lesson teachers are cooperative and helpful with myself when it comes to learning Punjabi; currently, we are focusing on writing, and I am enjoying it.",
    },
  ];

  // Clone testimonials for continuous loop
  const allTestimonials = [...images, ...images];

  useEffect(() => {
    const container = containerRef.current;
    let animationFrame;
    let startPos = 0;

    // Animation function
    const animate = () => {
      if (!isHovered && container) {
        startPos -= 0.9; // Adjust this value for speed (smaller = slower)

        // When first set of testimonials is scrolled past, reset position
        if (startPos <= -container.offsetHeight / 2) {
          startPos = 0;
        }

        container.style.transform = `translateY(${startPos}px)`;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [isHovered]);

  return (
    <div className="max-w-7xl relative mx-auto px-2">
      <h2 className="text-4xl text-center mt-10 font-bold text-gray-800">
        Our Clients Feedback
      </h2>

      {/* Container with fixed height and overflow hidden */}
      <div
        className="h-96  relative overflow-hidden mt-8"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Content that scrolls */}
        <div ref={containerRef} className="absolute">
          {allTestimonials.map((image, index) => (
            <div key={index} className="mb-8">
              <div className="sm:p-8 rounded-2xl lg:p-14 py-14 border-y-2 sm:border-2 relative mx-0 sm:mx-14 lg:mx-20 border-blue-200">
                <span className="absolute pt-4 pl-4 sm:pl-0 sm:pt-6 -top-1 sm:-left-4 -left-0.5 w-14 text-left text-4xl md:text-7xl text-blue-600 bg-white">
                  ❝
                </span>
                <div className="max-w-screen-xl flex p-6 md:flex-row flex-col gap-6 w-11/12 m-auto max-h-fit rounded-2xl shadow-[5px_5px_0px_4px_rgb(147,197,253),_-5px_-5px_0px_rgba(255,255,255,1)]">
                  <div className="w-32 h-32 md:m-6 m-auto relative">
                    <Image
                      className="w-full h-full rounded-full shadow-[5px_5px_0px_4px_rgb(147,197,253),_-5px_-5px_0px_rgba(255,255,255,1)]"
                      width={300}
                      height={300}
                      alt={image.alt}
                      src={image.src}
                      priority
                    />
                  </div>
                  <div className="md:w-8/12 flex flex-col justify-center items-center md:items-start text-lg">
                    <p className="text-gray-600">{image.name}</p>
                    <p>{image.feedback}</p>
                  </div>
                </div>
                <span className="absolute -bottom-1 sm:-right-4 pr-4 sm:pr-0 -right-0.5 w-14 pt-4 sm:pt-6 text-right text-4xl md:text-7xl text-blue-600 bg-white">
                  ❞
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
