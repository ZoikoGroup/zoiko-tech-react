"use client";

import React from "react";

export default function ContactHero() {
  return (
    <section className="relative w-full min-h-[480px] md:min-h-[560px] flex items-center justify-end px-6 md:px-12 lg:px-20 py-16 overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="/contact-us/hero.png"
          alt="Contact ZoikoTech"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay for extra contrast */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      </div>

      {/* Blue Card Overlay (Right-aligned) */}
      <div className="relative z-10 w-full max-w-[620px] bg-[#122e4a]/85 backdrop-blur-xs p-8 sm:p-10 md:p-12 text-white shadow-2xl rounded-none md:rounded-sm">
        <p className="text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed font-light text-slate-100">
          At <strong className="font-semibold text-white">ZoikoTech</strong>, we
          believe the best proof of performance is client success. Our platforms
          and solutions are trusted by businesses, nonprofits, and public
          institutions to solve real-world problems &mdash; fast, securely, and
          at scale.
        </p>
      </div>
    </section>
  );
}
