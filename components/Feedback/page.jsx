import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function Feedback() {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useTranslation("home");

  const Testimonials = [
    {
      src: "/client/15.jpeg",
      alt: t("home.testimonials.feedback1.alt"),
      name: t("home.testimonials.feedback1.name"),
      feedback: t("home.testimonials.feedback1.feedback"),
    },
    {
      src: "/client/client12.jpeg",
      alt: t("home.testimonials.feedback2.alt"),
      name: t("home.testimonials.feedback2.name"),
      feedback: t("home.testimonials.feedback2.feedback"),
    },
    {
      src: "/client/13.jpeg",
      alt: t("home.testimonials.feedback3.alt"),
      name: t("home.testimonials.feedback3.name"),
      feedback: t("home.testimonials.feedback3.feedback"),
    },
    {
      src: "/client/school/school2.jpeg",
      alt: t("home.testimonials.feedback4.alt"),
      name: t("home.testimonials.feedback4.name"),
      feedback: t("home.testimonials.feedback4.feedback"),
    },
    {
      src: "/client/private-honors.png",
      alt: t("home.testimonials.feedback5.alt"),
      name: t("home.testimonials.feedback5.name"),
      feedback: t("home.testimonials.feedback5.feedback"),
    }
  ];

  // Clone testimonials for continuous loop
  const allTestimonials = [...Testimonials, ...Testimonials];

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
    <div className="max-w-7xl  relative mx-auto px-2">
      <h2 className="text-4xl text-center mt-10 font-bold text-gray-800">
        {t("home.testimonials.title")}
        <span className="text-blue-600 bg-blue-200 p-1.5 rounded-2xl">
          {t("home.testimonials.titleHighlight")}
        </span>
      </h2>

      {/* Container with fixed height and overflow hidden */}
      <div
        className="h-screen  relative overflow-hidden mt-8"
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
