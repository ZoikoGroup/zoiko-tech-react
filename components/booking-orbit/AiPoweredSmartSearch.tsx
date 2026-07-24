"use client";

import React from "react";

const searchFeatures = [
  {
    title: "Predictive Autofill",
    description:
      "Zoiko AI learns your preferences and predicts your needs with intelligent search suggestions and contextual recommendations.",
  },
  {
    title: "Smart Filters",
    description:
      "Advanced filtering by type, location, time, rating, and instant confirmation with real-time availability updates.",
  },
  {
    title: "AI Recommender",
    description:
      "Intelligent service suggestions \u2014 book a hotel and get automatic recommendations for airport transfers and local dining.",
  },
  {
    title: "Availability Intelligence",
    description:
      "Predictive availability analysis and optimal slot timing recommendations based on historical data and demand patterns.",
  },
];

export default function AiPoweredSmartSearch() {
  return (
    <section className="w-full bg-[#F5F5F5] text-[#0f1124] px-6 md:px-12 lg:px-20 py-20 md:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center mb-14 md:mb-16 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-[38px] font-bold text-[#1e293b] tracking-tight mb-4 leading-tight">
            AI-Powered Smart Search
          </h2>
          <p className="text-[#64748b] text-[14.5px] sm:text-[15.5px] font-normal leading-relaxed">
            Intelligent discovery and booking with predictive recommendations
          </p>
        </div>

        {/* 4-Card Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          {searchFeatures.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-7 sm:p-8 shadow-[0_4px_12px_0_#0000001A] border border-slate-200/80 flex flex-col justify-start hover:shadow-md transition-all duration-300"
            >
              {/* Card Title */}
              <h3 className="text-[19px] font-bold text-[#0f1124] mb-3 leading-snug">
                {item.title}
              </h3>

              {/* Card Description */}
              <p className="text-[#64748b] text-[14px] leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
