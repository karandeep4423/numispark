import React, { useRef, useEffect } from 'react';

const LogoCarousel = ({ logos }) => {
  const innerRef = useRef(null);
  const offsetRef = useRef(0);
  const setWidthRef = useRef(0);

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
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              className="h-20" // No margin or padding to ensure no space between logos
              alt={`Company logo ${index + 1}`}
            />
          ))}
          {/* Second set of logos for seamless looping */}
          {logos.map((logo, index) => (
            <img
              key={index + logos.length}
              src={logo}
              className="h-20"
              alt={`Company logo ${index + 1}`}
            />
          ))}
          {/* Second set of logos for seamless looping */}
          {logos.map((logo, index) => (
            <img
              key={index + logos.length}
              src={logo}
              className="h-20"
              alt={`Company logo ${index + 1}`}
            />
          ))}
          {/* Second set of logos for seamless looping */}
          {logos.map((logo, index) => (
            <img
              key={index + logos.length}
              src={logo}
              className="h-20"
              alt={`Company logo ${index + 1}`}
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