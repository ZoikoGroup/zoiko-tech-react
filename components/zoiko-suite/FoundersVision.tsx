"use client";

import React from "react";

export default function FoundersVision() {
  return (
    <section className="w-full bg-[#F5F5F5] text-[#0f1124] px-6 md:px-12 lg:px-20 py-20 md:py-28 overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-14 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-[38px] font-bold text-[#1e293b] tracking-tight mb-3 leading-tight">
            Founder&apos;s Vision
          </h2>
          <p className="text-[#64748b] text-[14.5px] sm:text-[15.5px] font-normal leading-relaxed">
            Leadership perspective on ethical AI in business operations
          </p>
        </div>

        {/* Quote Container */}
        <div className="relative w-full bg-white rounded-r-xl border border-slate-200/60 p-8 sm:p-12 md:p-14 overflow-hidden mb-8">
          {/* Vertical Teal Accent Bar */}
          <div className="absolute left-0 top-0 bottom-0 w-[5px] bg-[#4cd3c0]" />

          {/* Quote Body Text */}
          <blockquote className="text-center text-[#1e293b] text-[16px] sm:text-[18px] md:text-[20px] font-normal italic leading-relaxed max-w-200 mx-auto">
            &ldquo;We built ZoikoSuite to unify finance, people, and law &mdash; but under governed intelligence. Every automated decision must be explainable, ethical, and reversible. That&apos;s the Zoiko AI standard.&rdquo;
          </blockquote>
        </div>

        {/* Author Attribution */}
        <p className="text-[#4cd3c0] font-semibold text-[14px] sm:text-[15px] tracking-wide text-center">
          &mdash; Lennox McLeod, Founder &amp; Executive Chairman, Zoiko Group Inc.
        </p>

      </div>
    </section>
  );
}