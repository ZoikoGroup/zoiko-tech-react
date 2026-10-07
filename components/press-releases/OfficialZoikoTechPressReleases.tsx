import React from "react";
import { ArrowDown } from "lucide-react";

export default function OfficialZoikoTechPressReleases() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-[#000000] via-[#0A2528] to-[#247780] text-white overflow-hidden font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Content & Buttons */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Category Breadcrumb */}
            <span className="text-xs uppercase tracking-widest text-[#6FD0F6] font-semibold mb-4">
              RESOURCES &bull; PRESS RELEASES
            </span>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-white">
              Official Zoiko Tech <br />
              <span className="text-white">press releases.</span>
            </h1>

            {/* Description */}
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
              Read source-approved company releases with publication dates,
              clear attribution, currentness and correction history. Press
              Releases is separate from broader Newspaper content and approved
              Media Resources.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <button className="bg-white text-gray-900 font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-gray-100 transition-all flex items-center gap-2 text-sm">
                Browse latest releases{" "}
                <ArrowDown className="w-4 h-4 text-gray-900" />
                
              </button>

              <button
                style={{
                  backgroundColor: "#FFFFFF0F",
                  borderColor: "#7FD0D959",
                }}
                className="border text-white font-semibold px-6 py-3 rounded-xl backdrop-blur-md hover:bg-white/20 transition-all text-sm"
              >
                Browse archive context
              </button>
            </div>

            {/* Footer Note */}
            <p className="text-gray-400 text-xs">
              Draft, scheduled, embargoed, withdrawn or unverified releases do
              not appear as current public statements.
            </p>
          </div>

          {/* Right Column: Isometric 3D Illustration Graphic (/press/1.png) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-lg">
              <img
                src="/press/1.png"
                alt="Official Zoiko Tech Press Releases 3D Illustration"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
