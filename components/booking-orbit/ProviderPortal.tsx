"use client";

import React from "react";

const providerFeatures = [
  {
    title: "Secure Registration & Verification",
    description:
      "KYC verification via Zoiko Assure with comprehensive business credential checks and ongoing compliance monitoring.",
  },
  {
    title: "Live Calendar Management",
    description:
      "Real-time availability updates, pricing control, automated reminders, and intelligent scheduling optimization.",
  },
  {
    title: "Smart No-Show Protection",
    description:
      "Zoiko Pay escrow system protects against cancellations and no-shows with automated compensation processing.",
  },
  {
    title: "Business Analytics",
    description:
      "Comprehensive insights into conversions, peak hours, repeat rates, and customer satisfaction with actionable recommendations.",
  },
  {
    title: "Traffic-Light Verification System",
    description: (
      <>
        🟢 Green = Verified | 🟡 Amber = Pending | 🔴 Red = Suspended with
        transparent status indicators for customers.
      </>
    ),
  },
  {
    title: "Marketing & Promotion Tools",
    description:
      "Sponsored listings, banner placements, and performance analytics with tiered advertising packages for verified partners.",
  },
];

export default function ProviderPortal() {
  return (
    <section className="w-full bg-white text-[#0f1124] px-6 md:px-12 lg:px-20 py-20 md:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center mb-14 md:mb-16 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-[38px] font-bold text-[#1e293b] tracking-tight mb-4 leading-tight">
            Provider Portal
          </h2>
          <p className="text-[#64748b] text-[14.5px] sm:text-[15.5px] font-normal leading-relaxed">
            Comprehensive business management powered by Zoiko Web Services
          </p>
        </div>

        {/* 6-Card Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          {providerFeatures.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-7 sm:p-8 shadow-[0_4px_12px_0_#0000001A] border border-slate-200/80 flex flex-col justify-start hover:shadow-md transition-all duration-300"
            >
              {/* Card Title */}
              <h3 className="text-[19px] font-bold text-[#0f1124] mb-3 leading-snug">
                {item.title}
              </h3>

              {/* Card Description */}
              <div className="text-[#64748b] text-[14px] leading-relaxed font-normal">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
