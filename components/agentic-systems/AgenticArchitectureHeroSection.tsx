import React from "react";
import { ArrowRight } from "lucide-react";

export default function AgenticArchitectureHeroSection() {
  return (
    <section className="relative w-full bg-gradient-to-r from-[#001315F5] via-[#001315EB] to-[#001315] py-20 px-6 md:px-12 lg:px-20 font-sans text-white flex items-center overflow-hidden">
      {/* Background Image (/age/1.png) */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src="/age/1.png"
          alt="Railway tracks and tunnel background"
          className="w-full h-full object-cover opacity-20 block m-0 p-0"
        />
        {/* Dark overlay for text contrast */}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Heading, Description, and Buttons */}
        <div className="lg:col-span-7 flex flex-col items-start">
          <h1 className="text-3xl md:text-5xl lg:text-[58px] font-extrabold tracking-tight leading-[1.1] mb-6">
            Put agents to work without losing{" "}
            <span className="text-[#4DDCAD]">authority , approvals or
            evidence.</span>
          </h1>
          <p className="text-gray-300 text-xs md:text-sm leading-relaxed mb-8 max-w-xl">
            Agentic systems turn bounded intent into controlled actions across
            approved tools and systems while keeping delegated authority,
            policy, human accountability, execution state and evidence
            visible.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="inline-flex items-center bg-[#247780] hover:bg-[#1d6168] text-white text-xs font-semibold px-6 py-3.5 rounded-full transition-colors shadow-lg border border-[#34D4CA44]"
            >
              Explore agentic architecture{" "}
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              
            </a>
            <a
              href="#"
              className="inline-flex items-center bg-transparent hover:bg-white/10 text-white text-xs font-semibold px-6 py-3.5 rounded-full transition-colors border border-white/30"
            >
              Talk to Zoiko Tech
            </a>
          </div>
        </div>

        {/* Right Column: Image Specimen (/age/2.png) */}
        <div className="lg:col-span-5 w-full">
          <div className="w-full rounded-3xl overflow-hidden h-[360px]">
            <img
              src="/age/2.png"
              alt="Professional working on laptop with multi-monitor dashboard"
              className="w-full h-full object-cover block m-0 p-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
