"use client";

import React from "react";

export default function ZoikoSuiteHero() {
  return (
    <section className="relative w-full min-h-[520px] md:min-h-[600px] bg-gradient-to-r from-[#32c5af] via-[#229789] to-[#1c5d58] text-white flex flex-col items-center justify-center px-6 md:px-12 py-20 overflow-hidden text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center z-10">
        {/* Main Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold tracking-tight leading-tight mb-4 text-white drop-shadow-sm">
          Governed Autonomy in Business <br className="hidden sm:block" />
          Operations
        </h1>

        {/* Subtitle / Powered By */}
        <p className="text-lg sm:text-xl md:text-[22px] font-medium text-teal-50 mb-6 tracking-wide">
          ZoikoSuite &mdash; Powered by Zoiko AI
        </p>

        {/* Description Paragraph */}
        <p className="text-[15.2px] italic text-teal-50 font-light max-w-3xl leading-relaxed mb-6">
          AI-powered enterprise suite unifying Accounting, HR, Compliance, and
          Commercial Operations with explainable, safe, and auditable automation
        </p>

        {/* Tagline / Grade */}
        <p className="text-xs sm:text-sm md:text-[14px] text-teal-50 font-normal tracking-wide mb-10">
          <span>Zoiko Tech </span>Inc. | USA | Fortune 10 / Tier-1 Grade
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          {/* Book a Demo Button */}
          <button className="w-full sm:w-auto bg-white text-[#4FD1C7] hover:bg-slate-100 font-semibold text-[15px] px-8 py-3.5 rounded-lg shadow-md transition-all duration-200 cursor-pointer">
            Book a Demo
          </button>

          {/* Contact Enterprise Sales Button */}
          <button className="w-full sm:w-auto bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold text-[15px] px-8 py-3.5 rounded-lg transition-all duration-200 cursor-pointer">
            Contact Enterprise Sales
          </button>
        </div>
      </div>
    </section>
  );
}
