"use client";

import React from "react";
import { motion } from "framer-motion";

const ethicsPrinciples = [
  {
    title: "Algorithmic Transparency",
    description:
      "Complete explainability dashboard showing how AI decisions are made with audit trails.",
  },
  {
    title: "Bias Testing & Monitoring",
    description:
      "Continuous testing for algorithmic bias with automated corrections and human oversight.",
  },
  {
    title: "Human-in-Command",
    description:
      "Always maintain human oversight and control over critical compliance decisions.",
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

export default function GovernanceEthics() {
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
            Governance & Ethics
          </h2>
          <p className="text-[#64748b] text-[14.5px] sm:text-[15.5px] font-normal leading-relaxed">
            Built on principles of transparency and responsible AI
          </p>
        </motion.div>

        {/* 3 Principles Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 w-full mb-12">
          {ethicsPrinciples.map((item, idx) => (
            <motion.div
              key={idx}
              custom={0.12 * (idx + 1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUpVariant}
              className="bg-white rounded-[10px] p-7 sm:p-8 shadow-[0_4px_12px_0_#0000001A] border border-slate-200/80 flex flex-col items-start hover:shadow-md transition-all duration-300 min-h-[200px]"
            >
              {/* Title */}
              <h3 className="text-[20px] font-bold text-[#0f1124] mb-3 leading-snug">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[#64748b] text-[14px] leading-relaxed font-normal">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Highlighted Quote Banner */}
        <motion.div
          custom={0.5}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="w-full bg-white rounded-r-[10px] p-6 sm:p-8 border-l-4 border-l-[#4FD1C7] shadow-[0_4px_12px_0_#0000000D] flex items-center justify-center text-center"
        >
          <blockquote className="text-[#64748b] text-[15px] sm:text-[16.5px] italic font-medium leading-relaxed max-w-4xl">
            &ldquo;True compliance isn&apos;t about avoiding penalties —
            it&apos;s about designing systems that respect people, data, and
            society.&rdquo;
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
