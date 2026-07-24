"use client";

import React from "react";
import { motion } from "framer-motion";

const complianceBadges = [
  "HIPAA (US)",
  "PIPEDA (Canada)",
  "GDPR (EU)",
  "LGPD (Brazil)",
  "ISO 13485",
  "SOC 2 Type II",
  "ADA/508",
];

// Motion animation variants with typed easing
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

export default function MultiJurisdictionCompliance() {
  return (
    <section className="w-full bg-white text-[#0f1124] px-6 md:px-12 lg:px-20 py-20 md:py-28 overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Section Header */}
        <motion.div
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="mb-8 max-w-3xl"
        >
          <h2 className="text-3xl sm:text-4xl md:text-[38px] font-bold text-[#1e293b] tracking-tight mb-4 leading-tight">
            Multi-Jurisdiction Compliance
          </h2>
          <p className="text-[#64748b] text-[14.5px] sm:text-[15.5px] font-normal leading-relaxed">
            Comprehensive regulatory coverage for global healthcare operations
          </p>
        </motion.div>

        {/* Compliance Badges List */}
        <motion.div
          custom={0.25}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 mb-10 max-w-6xl"
        >
          {complianceBadges.map((badge, idx) => (
            <span
              key={idx}
              className="bg-[#4FD1C7] text-white text-[13px] sm:text-[14px] font-medium px-5 py-2.5 rounded-full shadow-xs tracking-wide hover:brightness-105 transition-all duration-300"
            >
              {badge}
            </span>
          ))}
        </motion.div>

        {/* Extended Description Note */}
        <motion.p
          custom={0.4}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-[#64748b] text-[13.5px] sm:text-[14.5px] font-normal italic leading-relaxed max-w-6xl"
        >
          Extended compliance coverage to include Canada (PIPEDA/PHIPA) and
          Brazil (LGPD) with automated regulatory adaptation.
        </motion.p>
      </div>
    </section>
  );
}
