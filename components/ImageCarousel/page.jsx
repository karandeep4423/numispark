import { useState, useEffect } from "react";
import Image from "next/image";

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [slidesPerView, setSlidesPerView] = useState(1);

  const images = [
    {
      src: "/gallery/seo-cours.jpeg",
      alt: "Conference 1",
      caption: "SEO Conference 2023",
    },
    {
      src: "/gallery/seo-lecture.jpeg",
      alt: "Lecture 1",
      caption: "Copywriting Lecture at School",
    },
    {
      src: "/gallery/seo-lecture1.jpeg",
      alt: "Lecture 1",
      caption: "Copywriting Lecture at School",
    },
    {
      src: "/gallery/copywriting1.jpeg",
      alt: "Lecture 1",
      caption: "Copywriting Lecture at School",
    },
    {
      src: "/gallery/copy-writing.jpeg",
      alt: "Conference 1",
      caption: "SEO Conference 2023",
    },
    {
      src: "/gallery/conference.jpeg",
      alt: "Lecture 1",
      caption: "Copywriting Lecture at School",
    },
    {
      src: "/gallery/web-dev.jpeg",
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
    <div className="max-w-7xl relative mx-auto  overflow-x-hidden  px-2 ">
      <h2 className="text-4xl text-center mt-5  font-bold text-gray-800">
        Our Gallery
      </h2>
      <p className="text-center  text-gray-600 pb-5"> Team members in school lectures and conferences for Development,Marketing and Design.</p>
      <div
        className="flex  transition-transform duration-300"
        style={{
          transform: `translateX(-${(currentIndex * 100) / slidesPerView}%)`,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 "
            style={{ width: `${100 / slidesPerView}%` }}
          >
            <div className="flex flex-col  items-center px-4">
              <div className="relative h-80 w-full shadow-[5px_5px_0px_4px_rgb(147,197,253),_-5px_-5px_0px_rgba(255,255,255,1)] rounded-3xl  transition-transform duration-300 hover:scale-105">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover rounded-3xl"
                />
              </div>
              {/* <p className="mt-2 text-center text-gray-700">{image.caption}</p> */}
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        disabled={currentIndex === 0}
        className="absolute left-1 bottom-1/3 transform -translate-y-1/3 bg-blue-300 hover:bg-blue-600 text-white p-2 rounded-full disabled:opacity-50"
      >
        {"<"}
      </button>
      <button
        onClick={nextSlide}
        disabled={false} // Always enable since it loops
        className="absolute right-1 bottom-1/3 transform -translate-y-1/3 bg-blue-300 hover:bg-blue-600 text-white p-2 rounded-full"
      >
        {">"}
      </button>

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
