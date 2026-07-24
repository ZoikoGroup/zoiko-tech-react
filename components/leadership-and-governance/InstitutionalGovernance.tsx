"use client";

import React from "react";

export default function InstitutionalGovernance() {
  const governanceCommittees = [
    "Cross-Border Regulatory Compliance",
    "Cybersecurity & Data Governance",
    "AI Ethics & Responsible Innovation",
    "ESG Risk & Oversight",
    "Anti-Corruption & Supplier Integrity",
  ];

  return (
    <section className="w-full bg-[#f8f9fd] text-[#0f1124] px-6 md:px-12 lg:px-20 py-20 md:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col gap-12 lg:gap-16">
        {/* Top Split: Image + Copy with Bullet List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Governance Tech Image */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[520px]">
              {/* Soft background offset layer matching visual reference */}
              <div className="absolute -bottom-6 -left-6 w-full h-full bg-[#eceef7] rounded-xl -z-10 hidden sm:block" />

              <div className="w-full rounded-xl overflow-hidden shadow-xl border border-[#e2e8f0]/80">
                <img
                  src="/leadership-and-governance/governance.png"
                  alt="Institutional Governance and Security"
                  className="w-full h-auto object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Section Header & Key Focus Checklist */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-bold text-[#0e1726] tracking-tight leading-tight mb-5">
              Institutional Governance. <br />
              Operational Integrity.
            </h2>

            <p className="text-[#64748b] text-[14.5px] md:text-[15.5px] leading-relaxed mb-6 font-normal">
              ZoikoTech&apos;s governance framework is enterprise-caliber
              &mdash; built for scale, risk resilience, and stakeholder
              confidence. We maintain dedicated internal committees focused on:
            </p>

            {/* Checklist items with green icons */}
            <ul className="flex flex-col gap-3.5">
              {governanceCommittees.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 text-[14.5px] md:text-[15px] text-[#0e1726] font-medium"
                >
                  <div className="w-5 h-5 rounded-full bg-[#84cc16] flex items-center justify-center shrink-0 text-white shadow-xs">
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Full-Width Paragraph Banner */}
        <div className="pt-6 border-t border-slate-200/60">
          <p className="text-[#64748b] text-[14.5px] md:text-[15.5px] leading-relaxed font-normal text-left max-w-5xl">
            Each ZoikoTech platform &mdash; from ZoikoNex&trade; (telecom
            monetization) and ZoikoSuite&trade; (accounting &amp; compliance) to
            ZoikoPal&trade; (elderly AI support) and ZoikoTime&trade;
            (intelligent workforce management) &mdash; is developed and managed
            within a robust compliance and review architecture. Governance is
            not a siloed function; it is deeply embedded into every layer of our
            product lifecycle and client relationship.
          </p>
        </div>
      </div>
    </section>
  );
}
