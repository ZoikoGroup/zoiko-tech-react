import React from "react";
import { ArrowRight } from "lucide-react";

export default function CybersecurityHeroSection() {
  return (
    <section className="relative w-full py-28 px-6 md:px-12 lg:px-20 font-sans overflow-hidden flex items-center justify-center min-h-[600px]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/cyber/1.jpg"
          alt="Cybersecurity landscape background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#00131599] to-[#001315F0]"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-[65px] font-extrabold text-white tracking-tight leading-[1.1] mb-6">
          Protect critical systems without losing sight of{" "}
          <span className="text-[#4DDCAD]">state, ownership or recovery</span>
          .
        </h1>

        {/* Description */}
        <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-3xl mb-10">
          Cybersecurity architecture should make protected scope,
          security-relevant signals, incident and resilience state, responsible
          ownership, response and recovery, and evidence visible, without
          implying tools or service coverage that have not been approved.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3.5 rounded-xl bg-[#2b7a78] text-white text-sm font-semibold shadow-lg hover:bg-[#236361] transition-colors"
          >
            Explore cybersecurity architecture{" "}
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
          <a
            href="#"
            className="inline-flex items-center px-6 py-3.5 rounded-xl bg-transparent border border-white/45 text-white text-sm font-semibold shadow-sm hover:bg-white/10 transition-colors"
          >
            Discuss your security architecture
          </a>
        </div>
      </div>
    </section>
  );
}
