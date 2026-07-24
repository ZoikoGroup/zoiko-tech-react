"use client";

import React from "react";
import { motion } from "framer-motion";

const lawSuiteFeatures = [
  {
    title: "Cyber Contract Composer",
    description:
      "Generates SLA-compliant cybersecurity clauses with jurisdictional language adaptation and automated legal compliance verification.",
  },
  {
    title: "Incident Ledger",
    description:
      "Immutable ledger of security breach events for insurance claims and legal defense with forensic-grade evidence preservation.",
  },
  {
    title: "Insurance Validator",
    description:
      "Verifies cyber insurance coverage limits and policy exclusions with automated claim preparation and documentation.",
  },
  {
    title: "Invoice & Quote Guard",
    description:
      "Confirms billing accuracy, tax compliance, and export control adherence within digital contracts and procurement processes.",
  },
  {
    title: "Vendor Risk Register",
    description:
      "Centralized repository for third-party risk assessment and contractual security obligations with continuous monitoring.",
  },
  {
    title: "Legal Documentation",
    description:
      "Automated generation of incident reports, breach notifications, and regulatory filings with legal review workflows.",
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

export default function CommercialLawSecuritySuite() {
  return (
    <section className="w-full bg-[#F5F5F5] text-[#0f1124] px-6 md:px-12 lg:px-20 py-20 md:py-28 overflow-hidden">
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
            Commercial-Law Security Suite
          </h2>
          <p className="text-[#64748b] text-[14.5px] sm:text-[15.5px] font-normal leading-relaxed">
            Integrated enterprise contract and evidence management powered by
            ZWS
          </p>
        </motion.div>

        {/* 3-Column Grid Layout (6 Items Total) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          {lawSuiteFeatures.map((feature, idx) => (
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
                {feature.title}
              </h3>

              {/* Card Description */}
              <p className="text-[#64748b] text-[13.5px] sm:text-[14px] leading-relaxed font-normal">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
