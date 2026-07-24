"use client";

import React from "react";

export default function ZoikoSuiteCta() {
  return (
    <section className="relative w-full bg-gradient-to-r from-[#32c5af] via-[#229789] to-[#1c5d58] text-white flex flex-col items-center justify-center px-6 md:px-12 py-20 md:py-24 overflow-hidden text-center">
      <div className="max-w-6xl mx-auto flex flex-col items-center z-10">
        {/* Title Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold tracking-tight leading-tight mb-4 text-white drop-shadow-sm">
          Bring Your Back Office Into One Intelligent Suite
        </h2>

        {/* Subtitle / Description */}
        <p className="text-base sm:text-lg md:text-[18px] text-teal-50 font-light max-w-2xl leading-relaxed mb-10">
          Experience the power of governed automation with Zoiko AI
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
