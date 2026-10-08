import React from "react";
import { ArrowDown } from "lucide-react";

export default function TrustYouCanInspectHero() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-[#000000] via-[#0A2528] to-[#247780] text-white overflow-hidden font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text Content and Action Buttons */}
          <div className="lg:col-span-6 flex flex-col items-start text-left space-y-6">
            <div>
              <span className="text-[11px] tracking-widest text-[#6FD0F6] uppercase font-semibold block mb-3">
                TRUST CENTER
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] text-white">
                Trust you can inspect,{" "}
                <span className="text-[#91D0D6]"> not just accept. </span>
              </h1>
            </div>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl">
              Review Zoiko Tech security, privacy, compliance, Responsible AI,
              accessibility and resilience evidence through clear authority,
              scope, currentness and evidence boundaries.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#trust-areas"
                className="bg-white text-gray-900 font-semibold px-6 py-3 rounded-xl flex items-center space-x-2 text-sm transition-all hover:bg-gray-100 shadow-lg"
              >
                <span>Review trust areas</span>
                <ArrowDown className="w-4 h-4 text-gray-900" />
              </a>

              <a
                href="#review-context"
                style={{
                  borderColor: "#7FD0D959",
                }}
                className="border text-white font-semibold px-6 py-3 rounded-xl backdrop-blur-md text-sm transition-all hover:bg-white/20 shadow-lg"
              >
                Trust review context
              </a>
            </div>
          </div>

          {/* Right Column: 3D Illustration Graphic (/trust/1.png) */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <div className="relative w-full">
              <img
                src="/trust/1.png"
                alt="Trust Center 3D isometric compliance and data documentation graphic"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
