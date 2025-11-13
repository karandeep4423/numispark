import { useEffect, useState, useCallback, useRef } from "react";
import HeroButtons from "../HeroButtons/page";
import { useTranslation } from "react-i18next";

// Separate component for animated background
const AnimatedBackground = ({ technologies }) => {
  const [icons, setIcons] = useState([]);
  const animationFrameRef = useRef();
  const lastUpdateTimeRef = useRef(Date.now());

  // Initialize icons only once
  useEffect(() => {
    const initialIcons = technologies.map((tech, index) => ({
      ...tech,
      id: index,
      x: Math.random() * 100,
      y: Math.random() * 100,
      speedX: (Math.random() - 0.5) * 0.1, // Reduced speed
      speedY: (Math.random() - 0.5) * 0.1, // Reduced speed
      rotation: Math.random() * 360,
    }));
    setIcons(initialIcons);
  }, [technologies]);

  // Optimized animation function using requestAnimationFrame
  const moveIcons = useCallback(() => {
    const currentTime = Date.now();
    const deltaTime = currentTime - lastUpdateTimeRef.current;

    if (deltaTime > 50) {
      // Update every 50ms
      setIcons((prevIcons) =>
        prevIcons.map((icon) => {
          let newX = icon.x + icon.speedX;
          let newY = icon.y + icon.speedY;

          // Bounce off edges
          if (newX < 0 || newX > 100) {
            newX = Math.max(0, Math.min(100, newX));
            icon.speedX *= -1;
          }
          if (newY < 0 || newY > 100) {
            newY = Math.max(0, Math.min(100, newY));
            icon.speedY *= -1;
          }

          return {
            ...icon,
            x: newX,
            y: newY,
            rotation: (icon.rotation + 0.9) % 360, // Reduced rotation speed
          };
        })
      );
      lastUpdateTimeRef.current = currentTime;
    }

    animationFrameRef.current = requestAnimationFrame(moveIcons);
  }, []);

  // Start and cleanup animation
  useEffect(() => {
    animationFrameRef.current = requestAnimationFrame(moveIcons);
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [moveIcons]);

  return (
    <div className="absolute inset-0 opacity-60 pointer-events-none">
      {icons.map((icon) => (
        <div
          key={icon.id}
          className="absolute transform transition-transform duration-1000 ease-linear will-change-transform"
          style={{
            left: `${icon.x}%`,
            top: `${icon.y}%`,
            transform: `rotate(${icon.rotation}deg)`,
            width: "48px",
            height: "48px",
          }}
        >
          <img
            src={icon.logo}
            alt={icon.name}
            className="w-12 h-12 object-contain"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
};

// Main Hero component
const Hero = ({ technologies }) => {
  const { t } = useTranslation();

  return (
    <div className="relative h-screen overflow-hidden bg-blue-200">
      <AnimatedBackground technologies={technologies} />

      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-opacity-60" />

      {/* Hero content */}
      <div className="relative z-10 flex flex-col h-screen gap-5 justify-center items-center px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-gray-800 text-3xl sm:text-4xl md:text-5xl text-center font-extrabold mb-4">
            {t("home.hero.title")}
          </h1>

          <p className="text-gray-800 text-xl sm:text-2xl text-center font-bold mb-6">
            {t("home.hero.subtitle")}
          </p>

          <p className="text-gray-700 text-lg sm:text-xl text-center font-medium mb-4 max-w-4xl mx-auto">
            {t("home.hero.description")}
          </p>

          <p className="text-gray-700 text-base sm:text-lg text-center mb-8 max-w-4xl mx-auto">
            {t("home.hero.details")}
          </p>
        </div>
        <HeroButtons />
      </div>
    </div>
  );
};

export default Hero;
