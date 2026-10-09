import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ComplianceLadderHero() {
  return (
    <div className="w-full bg-gradient-to-r from-[#241C59] via-[#35235F] to-[#733557] py-16 px-6 md:px-12 lg:px-16 flex items-center justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Eyebrow */}
          <span className="text-[#F0596B] font-semibold text-xs md:text-sm tracking-widest uppercase mb-4">
            COMPLIANCE LADDER
          </span>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
            Turn obligations <br />
            into{" "}
            <span className="text-[#FFAFBA]">
              accountable, <br /> re viewable work.
            </span>{" "}
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8 max-w-xl">
            Explore a proposed governance approach for defining scope,
            coordinating owners, reviewing controls, resolving exceptions and
            preparing decision-ready evidence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-6">
            <a
              href="#context"
              className="bg-white text-[#241C59] font-medium text-sm px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition duration-200 inline-flex items-center"
            >
              Compliance governance demo context
            </a>
            <a
              href="#six-steps"
              className="text-[#FFB8C2] font-medium text-sm border-b border-[#FFB8C2] pb-0.5 hover:text-white hover:border-white transition duration-200 inline-flex items-center gap-1.5"
            >
              Explore the six steps <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right Column: 3D Illustration */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md aspect-[4/3] flex items-center justify-center">
            <Image
              src="/comp/1.png"
              alt="Compliance Ladder 3D Illustration"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
