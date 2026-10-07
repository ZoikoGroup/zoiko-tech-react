import React from "react";
import { ArrowRight } from "lucide-react";

export default function GovernedWorkOrchestrationHeroSection() {
  return (
    <section className="relative w-full min-h-[600px] lg:min-h-[700px] flex items-center bg-[#00191E] overflow-hidden font-sans px-6 md:px-12 lg:px-20 py-20">
      {/* Background Image with Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/gov/1.jpg"
          alt="Governed work orchestration background infrastructure"
          className="w-full h-full object-cover block m-0 p-0"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#00191E]/95 via-[#00191E]/80 to-[#00191E]/40"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Heading & Description */}
        <div className="lg:col-span-8 flex flex-col items-start">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center space-x-2 bg-[#00191E]/80 backdrop-blur-md text-[#34D4CA] text-xs font-mono font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full border border-[#34D4CA]/30 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#34D4CA]"></span>
            <span>GOVERNED WORK ORCHESTRATION</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-[64px] font-extrabold text-white tracking-tight leading-[1.08] mb-6">
            Coordinate complex work without losing <span className="text-[#4DDCAD]">state, authority or evidence.</span>
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-2xl mb-8">
            Governed work orchestration keeps long-running work coherent across
            people, agents and systems by making ownership, stage, dependencies,
            approvals, exceptions and authoritative completion visible.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#"
              className="inline-flex items-center bg-[#34D4CA] text-[#00191E] hover:bg-[#2bc2b8] text-xs md:text-sm font-bold px-6 py-3 rounded-xl transition-colors shadow-lg"
            >
              Explore orchestration architecture{" "}
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            <a
              href="#"
              className="inline-flex items-center bg-transparent hover:bg-white/10 text-white border border-white/30 text-xs md:text-sm font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Talk to Zoiko Tech
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
