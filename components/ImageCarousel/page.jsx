import { useState, useEffect } from "react";
import Image from "next/image";
import LogoCarousel from "@/components/Logo-clients/page";
import { useTranslation } from "react-i18next";

const schoolLogos = [
  "/client/school/school1.jpeg",
  "/client/school/school2.jpeg",
  "/client/school/school3.jpeg",
  "/client/school/school4.jpeg",
  "/client/school/school5.jpeg",
  "/client/school/school6.jpeg",
  "/client/school/school8.jpeg",
  "/client/school/school9.jpeg",
  "/client/school/school10.jpeg",
  "/client/school/school11.jpeg",
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const { t } = useTranslation("home");

  const images = [
    {
      src: "https://d3h46s6jorvpfj.cloudfront.net/seo-cours.jpeg",
      alt: "Conference 1",
      caption: "SEO Conference 2023",
    },
    {
      src: "https://d3h46s6jorvpfj.cloudfront.net/seo-lecture.jpeg",
      alt: "Lecture 1",
      caption: "Copywriting Lecture at School",
    },
    {
      src: "https://d3h46s6jorvpfj.cloudfront.net/seo-lecture1.jpeg",
      alt: "Lecture 1",
      caption: "Copywriting Lecture at School",
    },
    {
      src: "https://d3h46s6jorvpfj.cloudfront.net/copywriting1.jpeg",
      alt: "Lecture 1",
      caption: "Copywriting Lecture at School",
    },
    {
      src: "https://d3h46s6jorvpfj.cloudfront.net/copy-writing.jpeg",
      alt: "Conference 1",
      caption: "SEO Conference 2023",
    },
    {
      src: "https://d3h46s6jorvpfj.cloudfront.net/conference.jpeg",
      alt: "Lecture 1",
      caption: "Copywriting Lecture at School",
    },
    {
      src: "https://d3h46s6jorvpfj.cloudfront.net/web-dev.jpeg",
      alt: "Lecture 1",
      caption: "Copywriting Lecture at School",
    },
  ];

  // Responsive slides per view
  const updateSlidesPerView = () => {
    if (window.innerWidth >= 1024) {
      setSlidesPerView(3);
    } else if (window.innerWidth >= 640) {
      setSlidesPerView(2);
    } else {
      setSlidesPerView(1);
    }
  };

  useEffect(() => {
    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  // Navigation
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      if (nextIndex > images.length - slidesPerView) {
        return 0; // Reset to the first slide
      }
      return nextIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  // Pagination
  const goToSlide = (index) => {
    setCurrentIndex(index * slidesPerView);
  };

  const totalPages = Math.ceil(images.length / slidesPerView);

  // Autoplay
  useEffect(() => {
    if (isAutoplay) {
      const timer = setInterval(nextSlide, 3000);
      return () => clearInterval(timer);
    }
  }, [currentIndex, isAutoplay]);

  return (
    <div className="max-w-7xl relative mx-auto overflow-x-hidden px-2">
      <h2 className="text-4xl text-center mt-10 font-bold text-gray-800">
        {t("home.gallery.title")}
        <span className="text-blue-600 ml-2 bg-blue-200 p-1.5 rounded-2xl">
          {t("home.gallery.titleHighlight")}
        </span>
      </h2>
      <p className="text-center text-gray-600 py-3">
        {t("home.gallery.description")}
      </p>
      <LogoCarousel logos={schoolLogos} />
      <div className="relative">
        <div
          className="flex hover:scale-105 transition-transform duration-300"
          style={{
            transform: `translateX(-${(currentIndex * 100) / slidesPerView}%)`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{ width: `${100 / slidesPerView}%` }}
            >
              <div className="flex flex-col items-center px-4">
                <div className="relative h-80 w-full shadow-[5px_5px_0px_4px_rgb(147,197,253),_-5px_-5px_0px_rgba(255,255,255,1)] rounded-3xl transition-transform duration-300 hover:scale-105">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover rounded-3xl"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Centered Navigation Buttons */}
        <div className="absolute top-1/2 left-0 right-0 flex justify-between items-center transform -translate-y-1/2 px-4">
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="bg-blue-300 hover:bg-blue-600 text-white p-2 rounded-full disabled:opacity-50"
          >
            {"<"}
          </button>
          <button
            onClick={nextSlide}
            disabled={false} // Always enable since it loops
            className="bg-blue-300 hover:bg-blue-600 text-white p-2 rounded-full"
          >
            {">"}
          </button>
        </div>
      </div>

      <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 m-1 rounded-full ${
              Math.floor(currentIndex / slidesPerView) === index
                ? "bg-blue-600"
                : "bg-blue-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
