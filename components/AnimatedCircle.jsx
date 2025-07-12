"use client";
import React from "react";
import { useTranslation } from "react-i18next";

const AnimatedCircle = () => {
  const { t } = useTranslation("rdv");

  return (
    <div className="w-24 h-24 sm:w-28 sm:h-28 fixed bottom-4 sm:bottom-6 sm:right-6 right-4 z-50">
      {/* Fond vert fluo */}
      <div className="absolute w-full h-full rounded-full bg-blue-200"></div>

      {/* Ligne de séparation circulaire */}
      <div className="absolute w-full h-full">
        <svg viewBox="0 0 100 100" className="p-2 w-full h-full">
          <circle
            cx="50"
            cy="50"
            r="37.5"
            fill="none"
            stroke="#2563eb"
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* Texte circulaire tournant (2x) */}
      <div className="absolute w-full h-full animate-spin-slow">
        <svg viewBox="0 0 100 100" className="p-1.5 w-full h-full">
          <defs>
            <path
              id="circlePath"
              d="M50,50 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0"
            />
          </defs>
          <text fill="black" fontSize="15" fontWeight="bold">
            <textPath href="#circlePath" startOffset="0%">
              {t("highlight.reimbursementText")} •{" "}
              {t("highlight.reimbursementText")}
            </textPath>
          </text>
        </svg>
      </div>

      {/* Texte statique en cercle complet - également animé */}
      <div className="absolute w-full h-full animate-spin-slow">
        <svg viewBox="0 0 100 100" className="p-5 w-full h-full">
          <defs>
            <path
              id="staticCirclePath"
              d="M50,50 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0"
            />
          </defs>
          <text fill="black" fontSize="16" fontWeight="bold">
            <textPath href="#staticCirclePath" startOffset="0%">
              {t("highlight.reimbursementTextHighlight")} •{" "}
            </textPath>
          </text>
        </svg>
      </div>

      {/* Icône centrale */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-2xl">👀</span>
      </div>
    </div>
  );
};

export default AnimatedCircle;