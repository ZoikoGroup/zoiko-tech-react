"use client";

import React from "react";

export default function HeroAiControl() {
  return (
    <section className="relative w-full min-h-[500px] md:min-h-[650px] flex items-end justify-center px-6 md:px-12 py-16 md:py-20 overflow-hidden text-white">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="/about-us/hero.png"
          alt="Engineering Intelligence"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark gradient overlay at the bottom to make text pop */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />
      </div>

      {/* Hero Text Overlay */}
      <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="text-2xl sm:text-3xl md:text-[40px] font-bold tracking-tight text-white mb-4 leading-tight">
          Engineering Intelligence. Empowering Industries.
        </h1>

        <p className="text-[13.5px] sm:text-[14.5px] md:text-[15.5px] text-gray-200 leading-relaxed font-normal max-w-3xl">
          At ZoikoTech, we build secure, AI-powered platforms that transform how
          enterprises, telecoms, and institutions operate across borders. From
          productivity and fintech to digital infrastructure, our technologies
          scale globally &mdash; and deliver locally.
        </p>
      </div>
    </section>
  );
}
