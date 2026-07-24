"use client";

import React from "react";
import { motion } from "framer-motion";

const jurisdictionalItems = [
  {
    title: "Delaware (U.S.)",
    description:
      "Contract and liability jurisdiction with comprehensive corporate law framework and established precedents for AI governance and liability.",
  },
  {
    title: "London (U.K.)",
    description:
      "Arbitration and AI ethics oversight with specialized courts and regulatory frameworks for emerging technology governance and dispute resolution.",
  },
  {
    title: "EU/APAC",
    description:
      "Data localization and regulatory compliance with GDPR, AI Act, and regional privacy frameworks ensuring global operational capability.",
  },
  {
    title: "Tax & Financial",
    description:
      "Cross-border harmonization via Zoiko Financial Group with transfer pricing optimization and comprehensive tax compliance across jurisdictions.",
  },
  {
    title: "AI Governance Oversight",
    description:
      "ZOL, ZRE, ZKG operations under Zoiko AI Governance Board with continuous monitoring, bias testing, and ethical AI assurance.",
  },
];

const complianceBadges = [
  "SOC 2 Type II",
  "ISO 27001",
  "ISO 42001",
  "GDPR",
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

export default function MultiJurisdictionalHighlights() {
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
            Multi-Jurisdictional Highlights
          </h2>
          <p className="text-[#64748b] text-[14.5px] sm:text-[15.5px] font-normal leading-relaxed">
            Global compliance and operational framework
          </p>
        </motion.div>

        {/* 4-Column Grid Layout (5 Items Total) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 w-full mb-14">
          {jurisdictionalItems.map((item, idx) => (
            <motion.div
              key={idx}
              custom={0.1 * (idx + 1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUpVariant}
              className="bg-white rounded-[10px] p-6 sm:p-7 border-l-[4px] border-l-[#4FD1C7] border-y border-r border-slate-200/80 flex flex-col justify-start hover:shadow-md transition-all duration-300 min-h-[250px]"
            >
              {/* Title */}
              <h3 className="text-[18px] md:text-[19px] font-bold text-[#0f1124] mb-3 leading-snug">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[#64748b] text-[13.5px] md:text-[14px] leading-relaxed font-normal">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Compliance Badges */}
        <motion.div
          custom={0.6}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-4xl"
        >
          {complianceBadges.map((badge, idx) => (
            <span
              key={idx}
              className="bg-[#44c3b8] text-white font-semibold text-[13px] sm:text-[14px] px-5 py-2 rounded-full shadow-xs tracking-wide transition-transform hover:scale-105 duration-200"
            >
              {badge}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
