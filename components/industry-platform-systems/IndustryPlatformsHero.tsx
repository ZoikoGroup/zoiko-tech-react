import { ArrowDown } from "lucide-react";
import React from "react";

export default function IndustryPlatformsHero() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-[#000000] via-[#0A2528] to-[#247780] text-white overflow-hidden font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Heading, Subtitle & CTA Buttons */}
        <div className="lg:col-span-6 flex flex-col items-start text-left">
          <span className="text-[11px] uppercase tracking-wider text-teal-300 font-semibold mb-3">
            Industry platforms and systems
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-[58px] font-extrabold tracking-tight leading-[1.1] mb-6 text-white">
            Build industry systems around real operating rules,{" "}
            <span className="text-[#93CFD5]">
              {" "}
              authoritative state and accountable technology boundaries.
            </span>
          </h1>
          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-8 max-w-2xl">
            Zoiko Tech applies shared AI, digital infrastructure, enterprise
            operations, communications, integration, security and evidence
            foundations to industry-specific systems — preserving domain rules,
            operator ownership, jurisdiction, maturity and authoritative state.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#explore-architecture"
              className="px-6 py-3 rounded-xl bg-white hover:bg-gray-100 text-gray-900 font-medium text-sm transition-colors shadow-lg flex items-center gap-2"
            >
              Explore architecture <ArrowDown className="h-5 w-5" />
            </a>
            <a
              href="#discuss-industry-systems"
              style={{
                borderColor: "#7FD0D959",
              }}
              className="px-6 py-3 rounded-xl border text-white font-medium text-sm transition-colors hover:bg-white/[0.15] backdrop-blur-md shadow-lg"
            >
              Discuss your industry systems
            </a>
          </div>
        </div>

        {/* Right Column: Isometric Industry Graphic (/industry/1.png) */}
        <div className="lg:col-span-6 w-full flex justify-center">
          <div className="w-full overflow-hidden">
            <img
              src="/ind/1.png"
              alt="Industry platforms and systems isometric nodes showing domain rules, operator ownership, jurisdiction, authoritative state and accountable technology"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
