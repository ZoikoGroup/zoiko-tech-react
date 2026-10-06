import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative w-full overflow-hidden text-white"
      style={{
        background:
          "linear-gradient(140deg, rgba(0, 0, 0, 1) 0%, rgba(10, 37, 40, 1) 48%, rgba(36, 119, 128, 1) 100%)",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8">
          {/* Left Column Content */}
          <div className="flex-1 max-w-[650px] flex flex-col items-start w-full">
            {/* Eyebrow Breadcrumb */}
            <div className="mb-4">
              <span className="font-poppins text-[10px] md:text-xs font-normal tracking-[0.16em] text-[#A6D2D7] uppercase">
                ZOIKO TECH / RESOURCES
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[64px] leading-[1.12] tracking-[-0.0156em] text-white mb-6">
              Technical research, with the evidence and{" "}
              <span className="text-[#6FD0F6]">current state kept visible.</span>
            </h1>

            {/* Description */}
            <p className="font-poppins text-sm sm:text-base leading-[25.6px] text-[#C4D7D9] max-w-[612px] mb-8 font-normal">
              Browse approved technical papers, benchmarks and research outputs.
              See what each artifact is, whether it is current, where the
              authoritative version lives and what limitations apply before you
              rely on it.
            </p>

            {/* CTA Button */}
            <Link
              href="#intent"
              className="inline-flex items-center justify-center px-[21px] py-[11.5px] rounded-[5px] bg-white hover:bg-[#EAF5F6] text-[#0A3639] font-poppins font-bold text-sm leading-[22.4px] transition-colors duration-200 shadow-sm"
            >
              Browse research ↓
            </Link>
          </div>

          {/* Right Column Graphic */}
          <div className="w-full max-w-[500px] lg:max-w-[539px] flex-shrink-0 flex justify-center">
            <div className="relative w-full aspect-square max-w-[539px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/research/hero-technical-research.png"
                alt="Technical Research Visualization"
                width={539}
                height={539}
                priority
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
