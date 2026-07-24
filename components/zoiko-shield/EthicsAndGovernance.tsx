"use client";

import React from "react";
import { motion } from "framer-motion";

const governanceCards = [
  {
    title: "Algorithmic Transparency",
    description:
      "Complete algorithmic transparency dashboard with detailed decision reasoning and bias detection for all AI security decisions.",
  },
  {
    title: "Bias & Fairness Audits",
    description:
      "Continuous bias and fairness audit trails with automated correction protocols and human oversight for critical security decisions.",
  },
  {
    title: "Human-in-Command",
    description:
      "Always maintain human oversight and control with immediate escalation workflows and manual override capabilities for all automated responses.",
  },
  {
    title: "ISO/IEC 42001 Alignment",
    description:
      "Full compliance with AI management system standards ensuring responsible AI deployment and continuous improvement.",
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

export default function EthicsAndGovernance() {
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
          className="text-center mb-10 max-w-3xl"
        >
          <h2 className="text-3xl sm:text-4xl md:text-[38px] font-bold text-[#1e293b] tracking-tight mb-4 leading-tight">
            Ethics &amp; Governance
          </h2>
          <p className="text-[#64748b] text-[14.5px] sm:text-[15.5px] font-normal leading-relaxed">
            Responsible AI security with comprehensive transparency and
            oversight
          </p>
        </motion.div>

        {/* Featured Quote Callout Banner */}
        <motion.div
          custom={0.2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="w-full max-w-4xl mb-14 text-center flex flex-col items-center"
        >
          <div className="bg-[#eeeeee]/80 border-l-[4px] border-l-[#4FD1C7] px-8 py-5 rounded-r-[6px] max-w-3xl">
            <p className="text-[#334155] text-[15px] sm:text-[16px] italic font-medium leading-relaxed">
              &ldquo;Cybersecurity must protect both systems and societies.
              Autonomy without ethics is a threat.&rdquo;
            </p>
          </div>
          <span className="text-[#4FD1C7] text-[13.5px] sm:text-[14px] font-bold mt-4 tracking-wide">
            &mdash; Zoiko AI Governance Council
          </span>
        </motion.div>

        {/* 3-Column Grid Layout (4 Items Total) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          {governanceCards.map((item, idx) => (
            <motion.div
              key={idx}
              custom={0.1 * (idx + 3)}
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
      </div>
    </section>
  );
}
