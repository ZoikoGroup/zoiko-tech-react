"use client";

import React from "react";

export default function BookingOrbitHero() {
  return (
    <section className="relative w-full bg-gradient-to-r from-[#32c5af] via-[#229789] to-[#1c5d58] text-white flex flex-col items-center justify-center px-6 md:px-12 py-24 md:py-32 overflow-hidden text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center z-10">
        
        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[56px] font-bold tracking-tight leading-[1.15] mb-6 text-white drop-shadow-sm">
          Book Anything. Anywhere.
          <br />
          Instantly.
        </h1>

        {/* Subtitle Line 1 */}
        <p className="text-lg sm:text-xl md:text-[22px] text-teal-50 font-normal mb-6">
          BookingOrbit &mdash; Where the UK Connects to What Matters
        </p>

        {/* Subtitle Line 2 (Italicized context) */}
        <p className="text-xs sm:text-sm md:text-[15px] text-teal-100/90 font-light italic max-w-2xl leading-relaxed mb-6">
          The UK&apos;s most intelligent, multi-sector booking platform powered by Zoiko AI, Zoiko Pay, Zoiko Assure, and Zoiko Web Services
        </p>

        {/* Tags Row */}
        <p className="text-xs sm:text-sm text-teal-100 font-medium tracking-wide mb-10 opacity-90">
          Under Zoiko Orbit &nbsp;|&nbsp; British English &nbsp;|&nbsp; Fortune 10 Standard
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          {/* Book Now Button */}
          <button className="w-full sm:w-auto bg-white text-[#4FD1C7] hover:bg-slate-100 font-semibold text-[15px] px-8 py-3.5 rounded-lg shadow-md transition-all duration-200 cursor-pointer">
            Book Now
          </button>

          {/* Join as Provider Button */}
          <button className="w-full sm:w-auto bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold text-[15px] px-8 py-3.5 rounded-lg transition-all duration-200 cursor-pointer">
            Join as Provider
          </button>
        </div>

      </div>
    </section>
  );
}