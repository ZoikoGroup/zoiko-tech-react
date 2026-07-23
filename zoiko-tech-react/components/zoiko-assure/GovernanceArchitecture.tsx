"use client";

import React from "react";
import { motion } from "framer-motion";

const architectureLayers = [
  {
    title: "ZAI Cognitive Layer",
    description:
      "Interprets and maps laws into machine-readable logic for automated compliance monitoring.",
  },
  {
    title: "ZRE (Regulatory Engine)",
    description:
      "Applies rules and monitors for violations across multiple jurisdictions in real-time.",
  },
  {
    title: "ZKG (Knowledge Graph)",
    description:
      "Connects statutes, contracts, and data flows to maintain comprehensive compliance relationships.",
  },
  {
    title: "ZAFE (Adaptive Feedback Engine)",
    description:
      "Learns from audits and updates policies automatically for continuous improvement.",
  },
  {
    title: "ZWS (Document Automation Layer)",
    description:
      "Manages contracts, invoices, quotes, and SLAs with embedded AI audit trails.",
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

export default function GovernanceArchitecture() {
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
            Five-Layer Governance Architecture
          </h2>
          <p className="text-[#64748b] text-[14.5px] sm:text-[15.5px] font-normal leading-relaxed">
            Powered by Zoiko AI for comprehensive regulatory compliance
          </p>
        </motion.div>

        {/* Grid Layout (4 top, 1 bottom left) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 w-full">
          {architectureLayers.map((layer, idx) => (
            <motion.div
              key={idx}
              custom={0.1 * (idx + 1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUpVariant}
              className="bg-white rounded-[10px] p-7 sm:p-8 border-y border-r border-slate-200/80 border-l-4 border-l-[#4FD1C7] flex flex-col justify-start hover:shadow-md transition-all duration-300 min-h-[200px]"
            >
              {/* Card Title */}
              <h3 className="text-[19px] font-bold text-[#0f1124] mb-3 leading-snug">
                {layer.title}
              </h3>

              {/* Card Description */}
              <p className="text-[#64748b] text-[13.5px] sm:text-[14px] leading-relaxed font-normal">
                {layer.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
