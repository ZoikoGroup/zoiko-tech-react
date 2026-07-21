"use client";

import React from "react";

export default function EthicalAiCompliance() {
  return (
    <section className="w-full bg-[#F9F4FF] text-[#0f1124] px-6 md:px-12 lg:px-20 py-20 md:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Heading and Copy Paragraphs */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-bold text-[#0e1726] tracking-tight leading-tight mb-6">
            Ethical AI &amp; Compliance-
            <br />
            Driven Technology
          </h2>

          <p className="text-[#64748b] text-[14.5px] md:text-[15.5px] leading-relaxed mb-6 font-normal">
            As a leader in AI-powered systems, ZoikoTech holds itself to the
            highest global standards for algorithmic accountability,
            transparency, and fairness. Our internal AI Ethics Council ensures
            that our platforms align with evolving regulatory landscapes,
            including the EU AI Act, GDPR, CCPA, and other emerging global
            norms.
          </p>

          <p className="text-[#64748b] text-[14.5px] md:text-[15.5px] leading-relaxed font-normal">
            We build systems that are explainable, auditable, and defensible.
            Clients using platforms like ZoikoComply&trade; can automatically
            flag anomalies, configure jurisdiction-specific compliance controls,
            and manage risk through real-time dashboards &mdash; turning
            governance from a burden into a strategic advantage.
          </p>
        </div>

        {/* Right Column: AI Security Graphic Image */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[540px]">
            {/* Subtle background offset layer */}
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-[#eceef7] rounded-xl -z-10 hidden sm:block" />

            <div className="w-full rounded-xl overflow-hidden shadow-xl border border-[#e2e8f0]/80">
              <img
                src="/leadership-and-governance/ethical-ai.png"
                alt="Ethical AI and Compliance Security"
                className="w-full h-auto object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
