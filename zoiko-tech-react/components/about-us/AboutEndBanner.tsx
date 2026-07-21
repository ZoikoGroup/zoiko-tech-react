"use client";

import React from "react";

export default function AboutEndBanner() {
  return (
    <section className="relative w-full min-h-[480px] md:min-h-[560px] flex items-center justify-end px-6 md:px-12 lg:px-20 py-16 overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="/about-us/second.png"
          alt="ZoikoTech Infrastructure & Vision"
          className="w-full h-full object-cover object-center"
        />
        {/* Subtle dark overlay across the image for optimal contrast */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      </div>

      {/* Content Container (Right-aligned Blue Card) */}
      <div className="relative z-10 w-full max-w-[620px] bg-[#122e4a]/85 backdrop-blur-xs p-8 sm:p-10 md:p-12 text-white shadow-2xl rounded-none md:rounded-sm">
        {/* Paragraph 1 */}
        <p className="text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed font-light text-slate-100 mb-6">
          We don&apos;t just build technology. We build tomorrow&apos;s digital
          infrastructure: with precision, empathy, and purpose.
        </p>

        {/* Paragraph 2 */}
        <p className="text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed font-light text-slate-100">
          Guided by the vision of{" "}
          <strong className="font-bold text-white">Lennox McLeod</strong>,
          ZoikoTech remains relentless in its pursuit of global transformation
          through intelligent innovation.
        </p>
      </div>
    </section>
  );
}
