"use client";

import React from "react";
import { motion } from "framer-motion";

const complianceBadges = [
  "PCI-DSS 4.0",
  "SOC 2 Type II",
  "GDPR",
  "CCPA",
  "FinCEN MSB",
  "ISO/IEC 42001",
];

const governanceCards = [
  {
    title: "Delaware Jurisdiction",
    description:
      "Governed by Delaware law with New York arbitration seat for enterprise-grade legal protection.",
  },
  {
    title: "Privacy & Data Protection",
    description:
      "CCPA/GDPR compliant with minimal data retention. Zoiko AI never stores PII beyond operational need.",
  },
  {
    title: "Automated Compliance",
    description:
      "AI-generated compliance certificates with monthly attestations and full audit trail capabilities.",
  },
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

export default function ComplianceLegalGovernance() {
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
          className="text-center mb-8 text-slate-800 max-w-3xl"
        >
          <h2 className="text-3xl sm:text-4xl md:text-[38px] font-bold text-[#1e293b] tracking-tight mb-4 leading-tight">
            Compliance &amp; Legal Governance
          </h2>
          <p className="text-[#64748b] text-[14.5px] sm:text-[15.5px] font-normal leading-relaxed">
            Built with regulatory compliance at its core
          </p>
        </motion.div>

        {/* Compliance Badges Row */}
        <motion.div
          custom={0.2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-14 md:mb-16 max-w-4xl"
        >
          {complianceBadges.map((badge, idx) => (
            <span
              key={idx}
              className="bg-[#4FD1C7] text-white text-[13px] font-semibold px-4 py-1.5 rounded-full shadow-xs"
            >
              {badge}
            </span>
          ))}
        </motion.div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          {governanceCards.map((item, idx) => (
            <motion.div
              key={idx}
              custom={0.1 * (idx + 1) + 0.2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUpVariant}
              className="bg-white rounded-[10px] p-7 sm:p-8 shadow-[0_4px_12px_0_#0000001A] border border-slate-200/80 flex flex-col items-start hover:shadow-md transition-all duration-300 min-h-[220px]"
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
      </div>
    </section>
  );
}
