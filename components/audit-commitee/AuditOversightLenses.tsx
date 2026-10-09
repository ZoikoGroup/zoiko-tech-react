import React from "react";

export default function AuditOversightLenses() {
  const items = [
    { code: "AC-01", title: "Oversight Scope & Priorities" },
    { code: "AC-02", title: "Evidence & Provenance" },
    { code: "AC-03", title: "Findings, Exceptions & Risks" },
    { code: "AC-04", title: "Management Responses & Remediation" },
    { code: "AC-05", title: "Committee Questions & Decisions" },
    { code: "AC-06", title: "Reporting, Handoffs & Follow-Through" },
  ];

  return (
    <div id="responsibilities" className="w-full bg-gradient-to-r from-[#241C59] via-[#35235F] to-[#733557] py-20 px-6 md:px-12 lg:px-16 flex items-center justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Title & Description */}
        <div className="lg:col-span-5 flex flex-col items-start text-left">
          {/* Eyebrow */}
          <span className="text-[#F0596B] font-semibold text-xs md:text-sm tracking-widest uppercase mb-4">
            SIX OVERSIGHT LENSES
          </span>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
            Ask the question. <br />
            Inspect the basis.
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-sm">
            Proposed modules explain a governance concept. They <br />
            are not a live audit workflow.
          </p>
        </div>

        {/* Right Column: List of Items */}
        <div className="lg:col-span-7 flex flex-col w-full">
          {items.map((item, index) => (
            <div
              key={index}
              className="relative flex items-center py-5 border-b border-white/10 group"
            >
              {/* Dot indicator */}
              <div className="absolute -left-4 w-1.5 h-1.5 rounded-full bg-white opacity-80" />

              {/* Code */}
              <span className="text-[#FFB3BF] font-mono text-sm tracking-wider w-20">
                {item.code}
              </span>

              {/* Title */}
              <span className="text-white font-semibold text-base md:text-lg tracking-wide">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
