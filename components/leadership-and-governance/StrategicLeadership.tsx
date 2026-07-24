"use client";

import React from "react";

export default function StrategicLeadership() {
  return (
    <section className="w-full bg-[#f8f9fd] text-[#0f1124] px-6 md:px-12 lg:px-20 py-20 md:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Heading and Paragraph Copy */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#0e1726] tracking-tight leading-tight mb-6">
            Strategic Leadership. <br />
            Global Execution.
          </h2>

          <p className="text-[#64748b] text-[14.5px] md:text-[15.5px] leading-relaxed mb-6 font-normal">
            ZoikoTech is proudly founder-led, with a leadership team that brings
            decades of cross-industry experience in artificial intelligence,
            telecommunications, financial systems, regulatory compliance, and
            enterprise software development. Our Executive Chairman, Lennox
            McLeod, leads with a unique blend of strategic foresight, legal
            acumen, and financial discipline &mdash; a combination that defines the
            organization&apos;s global trajectory.
          </p>

          <p className="text-[#64748b] text-[14.5px] md:text-[15.5px] leading-relaxed font-normal">
            Together, our executives have shaped multi-billion-dollar frameworks
            across the United States, the United Kingdom, the Caribbean, and
            Asia. This deep operational expertise allows ZoikoTech to execute
            confidently across jurisdictions, delivering regulatory-grade software
            that meets the demands of governments, corporations, and mission-critical sectors.
          </p>
        </div>

        {/* Right Column: Leadership Team Image */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[540px]">
            {/* Subtle background offset layer */}
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-[#eeeef6] rounded-xl -z-10 hidden sm:block" />

            <div className="w-full rounded-xl overflow-hidden shadow-lg border border-[#e2e8f0]/80">
              <img
                src="/leadership-and-governance/team.png"
                alt="ZoikoTech Strategic Leadership Team"
                className="w-full h-auto object-cover object-center"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}