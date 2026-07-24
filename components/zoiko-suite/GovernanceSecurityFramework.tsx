"use client";

import React from "react";

const frameworkItems = [
  {
    title: "Enterprise Compliance",
    description:
      "SOC2 Type II, ISO/IEC 42001, GDPR, and NIST AI RMF compliant with continuous monitoring and automated reporting.",
  },
  {
    title: "Access Control",
    description:
      "Field-level access control for Finance, HR, and Legal teams with role-based permissions and audit logging.",
  },
  {
    title: "Decision Transparency",
    description:
      "Full reasoning and decision logs for every AI action with explainable AI and human oversight capabilities.",
  },
  {
    title: "Data Residency",
    description:
      "US data residency options for regulated industries with flexible deployment and sovereignty controls.",
  },
];

const badges = ["SOC2 Type II", "ISO/IEC 42001", "GDPR", "NIST AI RMF"];

export default function GovernanceSecurityFramework() {
  return (
    <section className="w-full bg-white text-[#0f1124] px-6 md:px-12 lg:px-20 py-20 md:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center mb-14 md:mb-16 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-[38px] font-bold text-[#1e293b] tracking-tight mb-4 leading-tight">
            Governance &amp; Security Framework
          </h2>
          <p className="text-[#64748b] text-[14.5px] sm:text-[15.5px] font-normal leading-relaxed">
            Enterprise-grade security with comprehensive compliance and
            transparency
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full mb-12">
          {frameworkItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-7 sm:p-8 shadow-sm border border-slate-200/80 flex flex-col justify-start hover:shadow-md transition-all duration-300"
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

        {/* Compliance Badges Row */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {badges.map((badge, idx) => (
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
