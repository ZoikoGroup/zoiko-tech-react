"use client";

import React from "react";
import { motion } from "framer-motion";

const legalItems = [
  {
    title: "Governing Law",
    content: (
      <>
        <p className="mb-2">
          <strong className="font-semibold text-[#0f1124]">Primary:</strong>{" "}
          Delaware (U.S.) for contract and liability jurisdiction
        </p>
        <p>
          <strong className="font-semibold text-[#0f1124]">Reciprocal:</strong>{" "}
          London (U.K.) for arbitration and AI ethics oversight
        </p>
      </>
    ),
  },
  {
    title: "Arbitration Framework",
    content: (
      <p>
        ICC/LCIA hybrid arbitration system providing flexible dispute resolution
        across international jurisdictions with specialized AI governance
        provisions.
      </p>
    ),
  },
  {
    title: "Data Governance",
    content: (
      <p>
        Comprehensive compliance with GDPR, CCPA, SOC2 Type II, and ISO 42001
        with automated data protection and privacy controls.
      </p>
    ),
  },
  {
    title: "Ethical AI Assurance",
    content: (
      <p>
        ZRE + ZAFE monitoring ensuring transparent, explainable, and ethical AI
        operations with comprehensive audit trails and accountability
        mechanisms.
      </p>
    ),
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

export default function LegalCommercialFramework() {
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
            Legal &amp; Commercial Framework
          </h2>
          <p className="text-[#64748b] text-[14.5px] sm:text-[15.5px] font-normal leading-relaxed">
            Enterprise-grade legal structure with comprehensive compliance and
            governance
          </p>
        </motion.div>

        {/* 3-Column Grid Layout (4 Items Total) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          {legalItems.map((item, idx) => (
            <motion.div
              key={idx}
              custom={0.1 * (idx + 1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUpVariant}
              className="bg-white rounded-[10px] p-7 sm:p-8 shadow-[0_4px_12px_0_#0000001A] border border-slate-200/80 flex flex-col items-start hover:shadow-md transition-all duration-300 min-h-[220px]"
            >
              {/* Card Title */}
              <h3 className="text-[19px] sm:text-[20px] font-bold text-[#0f1124] mb-4 leading-snug">
                {item.title}
              </h3>

              {/* Card Content */}
              <div className="text-[#64748b] text-[14px] leading-relaxed font-normal">
                {item.content}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
