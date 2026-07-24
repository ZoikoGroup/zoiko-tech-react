"use client";

import React from "react";

const useCases = [
  {
    title: "Financial Intelligence",
    description:
      "Automatically detects financial anomalies and validates invoices against contracts with AI-powered fraud detection and compliance checking.",
  },
  {
    title: "HR Analytics",
    description:
      "Monitors contract inconsistencies and predicts compliance risks with employee performance analytics and retention modeling.",
  },
  {
    title: "Legal Automation",
    description:
      "Identifies clause conflicts and missing protections automatically with comprehensive contract risk assessment and legal compliance monitoring.",
  },
  {
    title: "Compliance Mapping",
    description:
      "Maps all workflows to AI governance frameworks ensuring audit readiness with automated compliance reporting and risk assessment.",
  },
  {
    title: "Predictive Analytics",
    description:
      "AI forecasting for cash flow, employee turnover, and regulatory changes with actionable business intelligence and strategic recommendations.",
  },
  {
    title: "Process Optimization",
    description:
      "Continuous workflow improvement through AI analysis with bottleneck identification and efficiency enhancement suggestions.",
  },
];

export default function AiPoweredUseCases() {
  return (
    <section className="w-full bg-white text-[#0f1124] px-6 md:px-12 lg:px-20 py-20 md:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center mb-14 md:mb-16 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-[38px] font-bold text-[#1e293b] tracking-tight mb-4 leading-tight">
            AI-Powered Use Cases
          </h2>
          <p className="text-[#64748b] text-[14.5px] sm:text-[15.5px] font-normal leading-relaxed">
            Practical AI applications across every business function
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          {useCases.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-7 sm:p-8 shadow-sm border border-slate-200/80 flex flex-col justify-start hover:shadow-md transition-all duration-300"
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
