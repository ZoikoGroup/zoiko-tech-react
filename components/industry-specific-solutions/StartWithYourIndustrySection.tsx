import React from "react";

export default function StartWithYourIndustrySection() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-[#000000] via-[#0A2528] to-[#247780] text-white overflow-hidden font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        {/* Eyebrow */}
        <div className="mb-6">
          <span className="text-xs font-mono tracking-widest text-teal-300 uppercase">
            INDUSTRY-SPECIFIC SOLUTIONS
          </span>
        </div>

        {/* Main Heading with two-tone text emphasis */}
        <div className="mb-10 max-w-5xl">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-white">
            Start with your industry. <br />
            <span className="text-[#89D4D8]">
              Move directly to the outcomes
            </span>
           {" "} and technology that fit how it operates.
          </h2>
        </div>

        {/* Bottom Row: Description and CTA Buttons */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pt-6 border-t border-teal-800/30">
          {/* Description (Span 7) */}
          <div className="lg:col-span-7">
            <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-2xl">
              Choose a sector to see solution directions grounded in its
              documented operating needs. Keep sector context, buyer outcomes
              and technology evidence distinct.
            </p>
          </div>

          {/* CTA Buttons (Span 5) */}
          <div className="lg:col-span-5 flex flex-wrap items-center gap-4 lg:justify-end">
            <button className="bg-white text-gray-900 font-medium text-sm px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors shadow-lg">
              Find industry solutions
            </button>
            <button className="bg-transparent border border-[#80C5CB] text-white font-medium text-sm px-6 py-3 rounded-xl hover:bg-teal-950/40 transition-colors">
              Explore all industries
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
