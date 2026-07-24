"use client";

import React from "react";

const frameworkItems = [
  {
    title: "ZOL (Logic Layer)",
    description:
      "Interprets financial, HR, and legal documents with advanced natural language processing and contextual understanding.",
  },
  {
    title: "ZKG (Knowledge Graph)",
    description:
      "Maintains entity, policy, and compliance relationships for comprehensive business context and regulatory tracking.",
  },
  {
    title: "ZRE (Regulatory Engine)",
    description:
      "Enforces company and legal rules automatically with real-time compliance monitoring and violation detection.",
  },
  {
    title: "ZAC (Agentic Cloud)",
    description:
      "Executes verified workflows with human oversight and approval processes for critical business decisions.",
  },
  {
    title: "ZAFE (Adaptive Feedback Engine)",
    description:
      "Provides continuous learning and human oversight with feedback loops for performance improvement.",
  },
];

export default function ZoikoAiIntegrationFramework() {
  return (
    <section className="w-full bg-[#F5F5F5] text-[#0f1124] px-6 md:px-12 lg:px-20 py-20 md:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Header Title & Subtitle */}
        <div className="text-center mb-14 md:mb-16 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-[38px] font-bold text-[#1e293b] tracking-tight mb-4 leading-tight">
            Zoiko AI Integration Framework
          </h2>
          <p className="text-[#64748b] text-[14.5px] sm:text-[15.5px] max-w-xl font-normal leading-relaxed">
            Every workflow powered by Zoiko AI&apos;s Agentic Intelligence Layer (AIL) for explainable automation
          </p>
        </div>

        {/* Framework Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {frameworkItems.map((item, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl p-6 sm:p-7 border border-slate-200/80 flex flex-col justify-start overflow-hidden hover:shadow-md transition-all duration-300"
            >
              {/* Vertical Teal Left Border Accent */}
              <div className="absolute left-0 top-0 bottom-0 w-[5px] bg-[#2dd4bf]" />

              {/* Card Title */}
              <h3 className="text-[17px] font-bold text-[#0f1124] mb-3 leading-snug">
                {item.title}
              </h3>

              {/* Card Description */}
              <p className="text-[#64748b] text-[13.5px] leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}