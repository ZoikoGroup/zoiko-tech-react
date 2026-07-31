"use client";

import React from "react";

export default function LeadershipHero() {
  return (
    <section className="relative w-full min-h-[480px] md:min-h-[580px] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/leadership-and-governance/hero.png"
          alt="Leadership & Governance"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[480px] md:min-h-[580px] max-w-6xl items-center px-6 sm:px-8 lg:px-10">
        <div className="max-w-[580px]">
          <p className="text-[15px] sm:text-[16px] md:text-[17.5px] leading-relaxed font-light text-slate-100 drop-shadow-sm">
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
