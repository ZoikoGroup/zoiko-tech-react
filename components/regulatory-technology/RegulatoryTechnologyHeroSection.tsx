import React from "react";
import { ArrowRight } from "lucide-react";

export default function RegulatoryTechnologyHeroSection() {
  return (
    <section className="relative w-full py-24 px-6 md:px-12 lg:px-20 font-sans overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/reg/1.png"
          alt="Regulatory technology background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#00191EB8]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Heading & Content */}
        <div className="lg:col-span-7 flex flex-col justify-start">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-[#2477808C] backdrop-blur-sm border border-[#34D4CA73] rounded-full px-3 py-1.5 w-fit mb-6">
            <span className="w-2 h-2 rounded-full bg-[#34D4CA]"></span>
            <span className="text-[#34D4CA] text-xs font-bold tracking-widest uppercase">
              REGULATORY TECHNOLOGY
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold text-white tracking-tight leading-[1.1] mb-6">
            Turn regulatory change into accountable work, with{" "}
            <span className="text-[#4DDCAD]">
              source, scope and evidence intact.
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-10 max-w-2xl">
            Regulatory technology connects authoritative sources, jurisdiction
            and scope, responsibility, obligations, controls, approvals,
            operational outcomes and replayable evidence while keeping legal and
            human authority explicit.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#"
              className="inline-flex items-center justify-center bg-[#2b7a78] hover:bg-[#236361] text-white text-xs font-semibold py-3.5 px-6 rounded-xl transition-colors shadow-lg"
            >
              <span>Explore regulatory architecture</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center hover:bg-[#247780] backdrop-blur-sm border border-[#34D4CA73] text-white text-xs font-semibold py-3.5 px-6 rounded-xl transition-colors shadow-lg"
            >
              <span>Talk to Zoiko Tech</span>
            </a>
          </div>
        </div>

        {/* Right Column: Featured Image Card */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <div className="p-3">
            <div className="overflow-hidden w-full h-[530px]">
              <img
                src="/reg/2.png"
                alt="Diverse team collaborating on regulatory technology"
                className="w-full h-full rounded-2xl object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
