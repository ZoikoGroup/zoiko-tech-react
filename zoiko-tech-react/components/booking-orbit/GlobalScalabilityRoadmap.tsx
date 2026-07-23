"use client";

import React from "react";

const roadmapPhases = [
  {
    phase: "Phase 1: United Kingdom",
    description:
      "Complete UK market penetration with full regulatory compliance and comprehensive service coverage.",
  },
  {
    phase: "Phase 2: Canada",
    description:
      "Canadian market entry with provincial compliance adaptation and bilingual French-English support.",
  },
  {
    phase: "Phase 3: Caribbean",
    description:
      "Caribbean expansion focusing on tourism and hospitality sectors with multi-island coverage.",
  },
  {
    phase: "Phase 4: Australia",
    description:
      "Australian market launch with state-specific compliance and comprehensive service provider network.",
  },
];

export default function GlobalScalabilityRoadmap() {
  return (
    <section className="w-full bg-white text-[#0f1124] px-6 md:px-12 lg:px-20 py-20 md:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center mb-14 md:mb-16 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-[38px] font-bold text-[#1e293b] tracking-tight mb-4 leading-tight">
            Global Scalability Roadmap
          </h2>
          <p className="text-[#64748b] text-[14.5px] sm:text-[15.5px] font-normal leading-relaxed">
            Planned expansion with localized compliance and cultural adaptation
          </p>
        </div>

        {/* 4-Column Roadmap Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 w-full">
          {roadmapPhases.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-r-2xl rounded-l-xs p-6 sm:p-7 border-l-4 border-[#4FD1C7] flex flex-col justify-start hover:shadow-md transition-all duration-300"
            >
              {/* Phase Title */}
              <h3 className="text-[17px] sm:text-[18px] font-bold text-[#0f1124] mb-3 leading-snug">
                {item.phase}
              </h3>

              {/* Description */}
              <p className="text-[#64748b] text-[13.5px] sm:text-[14px] leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
