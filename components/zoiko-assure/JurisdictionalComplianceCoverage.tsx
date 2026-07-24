"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const jurisdictions = [
  {
    title: "United States",
    description:
      "Delaware Governing Law, FTC data privacy regulations, and AI Bill of Rights integration for comprehensive U.S. compliance.",
  },
  {
    title: "United Kingdom",
    description:
      "UK-GDPR compliance and Ofcom Telecom regulations with automated monitoring and reporting.",
  },
  {
    title: "European Union",
    description:
      "EU AI Act (high-risk system category) compliance with comprehensive data protection frameworks.",
  },
  {
    title: "Asia-Pacific",
    description:
      "Singapore PDPA and Australia Privacy Act framework support with localized compliance automation.",
  },
];

const complianceBadges = [
  "GDPR",
  "SOC 2 Type II",
  "ISO/IEC 42001",
  "NIST AI RMF",
];

// Motion animation variants with typed custom easing
const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (customDelay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.21, 0.47, 0.32, 0.98] as const,
      delay: customDelay,
    },
  }),
};

export default function JurisdictionalComplianceCoverage() {
  return (
    <section className="w-full bg-white text-[#0f1124] px-6 md:px-12 lg:px-20 py-20 md:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <motion.div
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-center mb-14 md:mb-16 max-w-3xl"
        >
          <h2 className="text-3xl sm:text-4xl md:text-[38px] font-bold text-[#1e293b] tracking-tight mb-4 leading-tight">
            Jurisdictional Compliance Coverage
          </h2>
          <p className="text-[#64748b] text-[14.5px] sm:text-[15.5px] font-normal leading-relaxed">
            Global regulatory framework support
          </p>
        </motion.div>

        {/* 4 Cards Grid (3 on top row, 1 on bottom row matching design layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full mb-12">
          {jurisdictions.map((item, idx) => (
            <motion.div
              key={idx}
              custom={0.1 * (idx + 1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUpVariant}
              className="bg-white rounded-[10px] p-7 sm:p-8 shadow-[0_4px_12px_0_#0000001A] border border-slate-200/80 flex flex-col justify-start hover:shadow-md transition-all duration-300 min-h-[200px]"
            >
              {/* Card Title */}
              <h3 className="text-[20px] font-bold text-[#0f1124] mb-3 leading-snug">
                {item.title}
              </h3>

              {/* Card Description */}
              <p className="text-[#64748b] text-[14px] leading-relaxed font-normal">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Compliance Badges Row */}
        <motion.div
          custom={0.5}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          {complianceBadges.map((badge, idx) => (
            <div
              key={idx}
              className="bg-[#4FD1C7] text-white text-[13px] font-semibold px-4 py-2 rounded-full flex items-center gap-1.5 shadow-xs"
            >
              <span>{badge}</span>
              <Check className="w-3.5 h-3.5 stroke-[2.5]" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
