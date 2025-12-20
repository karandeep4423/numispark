import React, { useRef, useEffect } from 'react';

// Client logo data with proper alt text for SEO
const clientLogoData = [
  { src: "/client/client.jpeg", alt: "Client partenaire Numispark" },
  { src: "/client/client2.jpeg", alt: "Client entreprise Numispark" },
  { src: "/client/client3.jpeg", alt: "Partenaire commercial Numispark" },
  { src: "/client/client4.jpeg", alt: "Client professionnel Numispark" },
  { src: "/client/client5.jpeg", alt: "Entreprise cliente Numispark" },
  { src: "/client/client6.jpeg", alt: "Partenaire Numispark" },
  { src: "/client/client7.jpeg", alt: "Client Numispark" },
  { src: "/client/client8.jpeg", alt: "Société partenaire Numispark" },
  { src: "/client/client9.jpeg", alt: "Client digital Numispark" },
  { src: "/client/client10.jpeg", alt: "Entreprise partenaire Numispark" },
  { src: "/client/client11.jpeg", alt: "Client web Numispark" },
  { src: "/client/client12.jpeg", alt: "Partenaire agence Numispark" },
  { src: "/client/13.jpeg", alt: "Client marketing Numispark" },
  { src: "/client/14.jpeg", alt: "Société cliente Numispark" },
  { src: "/client/15.jpeg", alt: "Partenaire SEO Numispark" },
  { src: "/client/16.jpeg", alt: "Client développement Numispark" },
  { src: "/client/17.jpeg", alt: "Entreprise digitale Numispark" },
];

const LogoCarousel = ({ logos }) => {
  const innerRef = useRef(null);
  const offsetRef = useRef(0);
  const setWidthRef = useRef(0);

  // Build logo objects with alt text
  const logoObjects = logos.map((logo, index) => {
    const matchingClient = clientLogoData.find(c => c.src === logo);
    return {
      src: logo,
      alt: matchingClient?.alt || `Logo client partenaire Numispark ${index + 1}`
    };
  });

  // Calculate the width of one set of logos when the component mounts or logos change
  useEffect(() => {
    if (innerRef.current) {
      const totalWidth = innerRef.current.scrollWidth;
      setWidthRef.current = totalWidth / 2; // Width of one set of logos
    }
  }, [logos]);

  // Set up continuous scrolling animation
  useEffect(() => {
    let animationFrame;

    const animate = () => {
      offsetRef.current -= 1; // Adjust this value to control speed (smaller = slower)
      if (offsetRef.current <= -setWidthRef.current) {
        offsetRef.current += setWidthRef.current; // Reset for seamless loop
      }
      if (innerRef.current) {
        innerRef.current.style.transform = `translateX(${offsetRef.current}px)`;
      }
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    // Cleanup animation frame on unmount
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  // Handle left arrow click to move logos right
  const handleLeftClick = () => {
    offsetRef.current += 100; // Move right by 100px
    if (innerRef.current) {
      innerRef.current.style.transform = `translateX(${offsetRef.current}px)`;
    }
  };

  // Handle right arrow click to move logos left
  const handleRightClick = () => {
    offsetRef.current -= 100; // Move left by 100px
    if (innerRef.current) {
      innerRef.current.style.transform = `translateX(${offsetRef.current}px)`;
    }
  };

  return (
    <div className="relative  w-full">
      {/* Left Arrow Button */}
      <button
        onClick={handleLeftClick}
        className="absolute left-1 top-1/2 transform -translate-y-1/2 z-10 bg-blue-200 text-white p-2 rounded-full hover:bg-blue-600 transition-colors"
      >
        ←
      </button>

      {/* Viewport containing the scrolling logos */}
      <div className="overflow-hidden">
        <div ref={innerRef} className="flex py-3 flex-nowrap gap-8">
          {/* First set of logos */}
          {logoObjects.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              className="h-20"
              alt={logo.alt}
            />
          ))}
          {/* Second set of logos for seamless looping */}
          {logoObjects.map((logo, index) => (
            <img
              key={index + logoObjects.length}
              src={logo.src}
              className="h-20"
              alt={logo.alt}
            />
          ))}
          {/* Third set of logos for seamless looping */}
          {logoObjects.map((logo, index) => (
            <img
              key={index + logoObjects.length * 2}
              src={logo.src}
              className="h-20"
              alt={logo.alt}
            />
          ))}
          {/* Fourth set of logos for seamless looping */}
          {logoObjects.map((logo, index) => (
            <img
              key={index + logoObjects.length * 3}
              src={logo.src}
              className="h-20"
              alt={logo.alt}
            />
          ))}
        </div>
      </div>

      {/* Right Arrow Button */}
      <button
        onClick={handleRightClick}
        className="absolute right-1 top-1/2 transform -translate-y-1/2 z-10 bg-blue-200 text-white p-2 rounded-full hover:bg-blue-600 transition-colors"
      >
        →
      </button>
    </div>
  );
};

export default LogoCarousel;