"use client";

import React from "react";

const legalItems = [
  {
    title: "Contract Lifecycle Management",
    description:
      "Automated creation, review, signing, and archival of all commercial documents including NDAs, Sales Agreements, and Purchase Orders.",
  },
  {
    title: "AI Clause Validation",
    description:
      "Intelligent clause analysis ensuring consistency with corporate policy, regulatory obligations, and applicable governing law.",
  },
  {
    title: "Legal Audit Trails",
    description:
      "Complete audit logs generated for legal defensibility under US and international standards with immutable record keeping.",
  },
  {
    title: "Compliance Integration",
    description:
      "Direct integration with ZoikoAssure for multi-jurisdictional compliance and regulatory requirement management.",
  },
];

export default function CommercialLawOperations() {
  return (
    <section className="w-full bg-[#F5F5F5] text-[#0f1124] px-6 md:px-12 lg:px-20 py-20 md:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Header Title & Subtitle */}
        <div className="text-center mb-14 md:mb-16 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-[38px] font-bold text-[#1e293b] tracking-tight mb-4 leading-tight">
            Commercial Law &amp; Legal Operations
          </h2>
          <p className="text-[#64748b] text-[14.5px] sm:text-[15.5px] font-normal leading-relaxed">
            Integrated CLM automating the complete document lifecycle with AI
            governance
          </p>
        </div>

        {/* 4-Card Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          {legalItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-7 sm:p-8 shadow-[0_4px_12px_0_#0000001A] border border-slate-200/80 flex flex-col justify-start hover:shadow-md transition-all duration-300"
            >
              {/* Card Title */}
              <h3 className="text-[19px] font-bold text-[#0f1124] mb-3 leading-snug">
                {item.title}
              </h3>

              {/* Card Description */}
              <p className="text-[#64748b] text-[14px] leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
