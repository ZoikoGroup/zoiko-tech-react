"use client";

import React from "react";

const complianceFeatures = [
  {
    title: "Zoiko Pay Integration",
    description:
      "Secure escrow payments with instant settlement, protecting both consumers and providers with transparent fee structures.",
  },
  {
    title: "FCA-Aligned Protection",
    description:
      "Full compliance with Financial Conduct Authority regulations ensuring comprehensive consumer rights protection.",
  },
  {
    title: "Automated Legal Compliance",
    description:
      "Zoiko Assure automatically generates contracts, invoices, and refund terms compliant with UK Consumer Rights Act 2015.",
  },
  {
    title: "GDPR & Data Protection",
    description:
      "Complete GDPR compliance with transparent data usage, user consent management, and right to deletion.",
  },
];

const complianceBadges = [
  "FCA Compliant",
  "GDPR Protected",
  "Consumer Rights Act 2015",
  "ISO/IEC 27001",
];

export default function PaymentsAndCompliance() {
  return (
    <section className="w-full bg-white text-[#0f1124] px-6 md:px-12 lg:px-20 py-20 md:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center mb-14 md:mb-16 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-[38px] font-bold text-[#1e293b] tracking-tight mb-4 leading-tight">
            Payments &amp; Compliance
          </h2>
          <p className="text-[#64748b] text-[14.5px] sm:text-[15.5px] font-normal leading-relaxed">
            Secure, compliant transactions with comprehensive consumer
            protection
          </p>
        </div>

        {/* 4-Card Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full mb-12">
          {complianceFeatures.map((item, idx) => (
            <div
              key={idx}
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

        {/* Bottom Compliance Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 w-full">
          {complianceBadges.map((badge, idx) => (
            <span
              key={idx}
              className="bg-[#4FD1C7] text-white font-medium text-[13px] sm:text-[14px] px-5 py-2 rounded-full shadow-xs tracking-wide"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
