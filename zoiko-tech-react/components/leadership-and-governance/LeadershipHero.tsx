"use client";

import React from "react";

export default function LeadershipHero() {
  return (
    <section className="relative w-full min-h-[480px] md:min-h-[580px] flex items-center justify-start px-6 md:px-12 lg:px-20 py-16 overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="/leadership-and-governance/hero.png"
          alt="Leadership & Governance"
          className="w-full h-full object-cover object-center"
        />
        {/* Subtle dark overlay across the image for enhanced text contrast */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />
      </div>

      {/* Hero Text Overlay (Left-aligned) */}
      <div className="relative z-10 w-full max-w-[580px]">
        <p className="text-[15px] sm:text-[16px] md:text-[17.5px] leading-relaxed font-light text-slate-100 drop-shadow-sm">
          At <strong className="font-semibold text-white">ZoikoTech</strong>, we
          believe technology must be a force for planetary stewardship, social
          inclusion, and principled governance. Our global vision reflects this
          ethos &mdash; a future where intelligent platforms advance human
          well-being, protect the environment, and enable cross-border
          innovation with integrity.
        </p>
      </div>
    </section>
  );
}
