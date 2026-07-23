"use client";

import React from "react";

export default function BottomCtaBanner() {
  return (
    <section className="w-full bg-gradient-to-r from-[#4FD1C7] via-[#3BA8A0] to-[#2B6063] text-white px-6 md:px-12 lg:px-20 py-20 md:py-24 overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight">
          Ready to Experience Connected Life?
        </h2>

        {/* Subtitle */}
        <p className="text-white/90 text-[15px] sm:text-[16.5px] font-normal leading-relaxed max-w-2xl mb-10">
          Join thousands of satisfied customers and verified providers across
          the UK
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          {/* Primary CTA Button - Uses strict text-[#4FD1C7] requirement */}
          <button className="w-full sm:w-auto bg-white text-[#4FD1C7] font-semibold text-[15px] px-8 py-3.5 rounded-lg shadow-md hover:bg-slate-50 transition-all duration-300">
            Book Your First Service
          </button>

          {/* Secondary Outline CTA Button */}
          <button className="w-full sm:w-auto bg-transparent border-2 border-white text-white font-medium text-[15px] px-8 py-3.5 rounded-lg hover:bg-white/10 transition-all duration-300">
            Join as Provider
          </button>
        </div>
      </div>
    </section>
  );
}
