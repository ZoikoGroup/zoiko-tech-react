"use client";

import React from "react";
import { motion } from "framer-motion";

const automationSuiteItems = [
  {
    title: "Contract Composer",
    description:
      "AI-assisted generation of jurisdiction-specific agreements with automated compliance verification.",
  },
  {
    title: "Invoice Validator",
    description:
      "Comprehensive checks for tax accuracy and export clause compliance across multiple regions.",
  },
  {
    title: "Quote Builder",
    description:
      "Ensures pricing compliance with regional regulations and automatic tax calculations.",
  },
  {
    title: "SLA Lifecycle Manager",
    description:
      "Monitors performance metrics and provides alerts on potential breach conditions.",
  },
  {
    title: "Digital Signature Compliance",
    description:
      "UETA + eIDAS certified audit trail for legally binding electronic signatures.",
  },
  {
    title: "Integration Ecosystem",
    description:
      "Secure connections with Salesforce, SAP, Workday, Oracle ERP, and Zoiko ecosystem products.",
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

export default function CommercialLawAutomationSuite() {
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
            Commercial-Law Automation Suite
          </h2>
          <p className="text-[#64748b] text-[14.5px] sm:text-[15.5px] max-w-xl font-normal leading-relaxed">
            Powered by Zoiko Web Services (ZWS) for complete document lifecycle
            management
          </p>
        </motion.div>

        {/* 6 Cards Grid (2 rows x 3 columns on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          {automationSuiteItems.map((item, idx) => (
            <motion.div
              key={idx}
              custom={0.1 * (idx + 1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUpVariant}
              className="bg-white rounded-[10px] p-7 sm:p-8 shadow-[0_4px_12px_0_#0000001A] border border-slate-200/80 flex flex-col items-start hover:shadow-md transition-all duration-300 min-h-[200px]"
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
