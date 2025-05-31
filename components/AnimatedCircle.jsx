"use client";
import React from "react";

const AnimatedCircle = ({ text }) => {
  return (
    <div className="w-24 h-24 sm:w-28 sm:h-28 fixed bottom-4 sm:bottom-6 sm:right-6 right-4 z-50">
      {/* Fond vert fluo */}
      <div className="absolute w-full h-full  rounded-full bg-blue-200"></div>

      {/* Texte circulaire tournant (2x) */}
      <div className="absolute w-full h-full animate-spin-slow">
        <svg viewBox="0 0 100 100" className="p-2 w-full h-full">
          <defs>
            <path
              id="circlePath"
              d="M50,50 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0"
            />
          </defs>
          <text
            fill="black"
            fontSize="15"
            fontWeight="bold"
          >
            <textPath href="#circlePath" startOffset="0%">
              {text} • {text}
            </textPath>
          </text>
        </svg>
      </div>

      {/* Icône centrale */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-3xl">👀</span>
      </div>
    </div>
  );
};

export default AnimatedCircle;
