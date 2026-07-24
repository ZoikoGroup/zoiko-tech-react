"use client";

import React from "react";
import { motion } from "framer-motion";

const complianceJurisdictions = [
  {
    title: "United States",
    description:
      "FTC Safeguards Rule, GLBA financial protection, CCPA privacy compliance, and NIST 800-53 security controls with automated reporting.",
  },
  {
    title: "United Kingdom",
    description:
      "U.K. GDPR data protection, FCA Cyber Resilience frameworks, and Ofcom Security Code compliance for telecommunications.",
  },
  {
    title: "European Union",
    description:
      "NIS 2 Directive implementation, EU AI Act (high-risk system) compliance, and comprehensive GDPR data protection frameworks.",
  },
  {
    title: "Asia-Pacific",
    description:
      "Singapore PDPA, India DPDPA 2023, Australia Privacy Act framework with localized compliance automation and reporting.",
  },
];

const complianceBadges = [
  "SOC 2 Type II",
  "ISO 27001",
  "NIST AI RMF",
  "GDPR",
  "PCI DSS",
  "HIPAA",
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

export default function MultiJurisdictionCompliance() {
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
            Multi-Jurisdiction Compliance
          </h2>
          <p className="text-[#64748b] text-[14.5px] sm:text-[15.5px] font-normal leading-relaxed">
            Comprehensive regulatory framework support across global markets
          </p>
        </motion.div>

        {/* 3-Column Grid Layout (4 Items Total) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full mb-14">
          {complianceJurisdictions.map((item, idx) => (
            <motion.div
              key={idx}
              custom={0.1 * (idx + 1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUpVariant}
              className="bg-white rounded-[10px] p-7 sm:p-8 shadow-[0_4px_12px_0_#0000001A] border border-slate-200/80 flex flex-col justify-start hover:shadow-md transition-all duration-300 min-h-[220px]"
            >
              {/* Card Title */}
              <h3 className="text-[19px] sm:text-[20px] font-bold text-[#0f1124] mb-3 leading-snug">
                {item.title}
              </h3>

              {/* Card Description */}
              <p className="text-[#64748b] text-[13.5px] sm:text-[14px] leading-relaxed font-normal">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Compliance Badges with Checkmarks */}
        <motion.div
          custom={0.6}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-5xl"
        >
          {complianceBadges.map((badge, idx) => (
            <span
              key={idx}
              className="bg-[#4FD1C7] text-white font-semibold text-[13px] sm:text-[14px] px-5 py-2 rounded-full shadow-xs tracking-wide flex items-center gap-1.5 transition-transform hover:scale-105 duration-200"
            >
              {badge} <span className="text-[12px]">✓</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
