"use client";

import React from "react";
import {
  Banknote,
  Users,
  ShieldCheck,
  FileText,
  BarChart3,
  Search,
} from "lucide-react";

const features = [
  {
    title: "Accounting & Finance",
    description:
      "Unified general ledger, smart invoicing, and automated close processes with real-time financial insights and compliance monitoring.",
    icon: <Banknote className="w-5 h-5 text-white" />,
  },
  {
    title: "HR & Payroll",
    description:
      "Full employee lifecycle management with ZoikoTime integration for comprehensive workforce analytics and compliance automation.",
    icon: <Users className="w-5 h-5 text-white" />,
  },
  {
    title: "Compliance & Risk",
    description:
      "Automated controls with ISO/NIST alignment and ZoikoAssure synchronization for continuous compliance monitoring and reporting.",
    icon: <ShieldCheck className="w-5 h-5 text-white" />,
  },
  {
    title: "Commercial Law & Contracts",
    description:
      "Complete CLM suite with AI clause validation, audit trails, and automated contract lifecycle management.",
    icon: <FileText className="w-5 h-5 text-white" />,
  },
  {
    title: "Invoicing & Quotes",
    description:
      "AI-verified quote-to-cash processes linked to governing law and contract metadata with automated reconciliation.",
    icon: <BarChart3 className="w-5 h-5 text-white" />,
  },
  {
    title: "Business Intelligence",
    description:
      "Real-time dashboards, predictive analytics, and automated reporting with AI-powered insights and recommendations.",
    icon: <Search className="w-5 h-5 text-white" />,
  },
];

export default function UnifiedBusinessIntelligence() {
  return (
    <section className="w-full bg-white text-[#0f1124] px-6 md:px-12 lg:px-20 py-20 md:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center mb-14 md:mb-16 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-[38px] font-bold text-[#1e293b] tracking-tight mb-4 leading-tight">
            Unified Business Intelligence
          </h2>
          <p className="text-[#64748b] text-[14.5px] sm:text-[15.5px] font-normal leading-relaxed">
            Comprehensive enterprise suite combining financial truth, legal
            defensibility,
            <br className="hidden sm:inline" /> and human oversight
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-7 sm:p-8 shadow-[0_4px_12px_0_#0000001A] border border-slate-200/80 flex flex-col justify-start hover:shadow-md transition-all duration-300"
            >
              {/* Teal Circle Badge for Icon */}
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#38b2ac] to-[#2c7a7b] flex items-center justify-center mb-6 shadow-xs shrink-0">
                {feature.icon}
              </div>

              {/* Card Title */}
              <h3 className="text-[19px] font-bold text-[#0f1124] mb-3 leading-snug">
                {feature.title}
              </h3>

              {/* Card Description */}
              <p className="text-[#64748b] text-[14px] leading-relaxed font-normal">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
