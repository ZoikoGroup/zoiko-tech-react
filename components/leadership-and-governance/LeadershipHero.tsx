"use client";

import React from "react";

export default function LeadershipHero() {
  return (
    <section className="relative w-full min-h-[440px] sm:min-h-[480px] md:min-h-[580px] flex items-center overflow-hidden">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0">
        <img
          src="/leadership-and-governance/hero.png"
          alt="Leadership & Governance"
          // {/* object-[75%_center] aligns focal area (right side) into view on narrow screens */}
          className="h-full w-full object-cover object-[75%_center] md:object-center"
          decoding="async"
          // @ts-ignore
          fetchPriority="high"
        />
        {/* Base dark overlay */}
        <div className="absolute inset-0 bg-black/40 sm:bg-black/30" />
        
        {/* Mobile gradient overlay focused on left text area to preserve contrast over subject on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent md:hidden" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10 py-16 sm:py-20 md:py-24">
        <div className="max-w-[580px]">
          <p className="text-sm sm:text-[16px] md:text-[17.5px] leading-relaxed font-light text-slate-100 drop-shadow-md">
            At <strong className="font-semibold text-white">ZoikoTech</strong>,
            leadership is not merely a title — it is a responsibility to steward
            innovation with purpose, operate with discipline, and build systems
            that endure across borders, industries, and generations. Our
            governance model is designed to support complex,
            multi-jurisdictional growth while ensuring every decision we make
            reflects our unwavering commitment to ethics, transparency, and
            sustainable impact.
          </p>
        </div>
      </div>
    </section>
  );
}