"use client";
import React from "react";

const AnimatedCircle = ({ text }) => {
  return (
    <div className="relative w-28 h-28 fixed bottom-6 right-6 z-50">
      {/* Fond vert fluo */}
      <div className="absolute w-full h-full rounded-full bg-lime-300"></div>

      {/* Texte circulaire tournant (2x) */}
      <div className="absolute w-full h-full animate-spin-slow">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <path
              id="circlePath"
              d="M50,50 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0"
            />
          </defs>
          <text
            fill="black"
            fontSize="7"
            fontWeight="bold"
            letterSpacing="1"
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
