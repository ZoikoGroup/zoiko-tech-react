"use client";

import React from "react";
import { motion } from "framer-motion";

const lifecyclePillars = [
  {
    step: "1. Know",
    description:
      "Research & Compare destinations with comprehensive data on cost of living, visa requirements, and quality of life.",
  },
  {
    step: "2. Prepare",
    description:
      "Eligibility assessment, document preparation, and compliance verification across multiple jurisdictions.",
  },
  {
    step: "3. Move",
    description:
      "Travel planning, logistics coordination, and optimal timing recommendations based on AI analysis.",
  },
  {
    step: "4. Settle",
    description:
      "Housing, banking, healthcare, schooling, and digital life setup with verified local partners.",
  },
  {
    step: "5. Thrive",
    description:
      "Work opportunities, business setup, community integration, and long-term status planning.",
  },
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

export default function CompleteRelocationLifecycle() {
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
            Complete Relocation Lifecycle
          </h2>
          <p className="text-[#64748b] text-[14.5px] sm:text-[15.5px] font-normal leading-relaxed">
            Five pillars covering every aspect of international relocation
          </p>
        </motion.div>

        {/* 5 Pillars Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 w-full">
          {lifecyclePillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              custom={0.15 * (idx + 1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUpVariant}
              className="bg-white rounded-r-2xl rounded-l-xs p-7 sm:p-8 border-l-4 border-[#4FD1C7] flex flex-col justify-start hover:shadow-md transition-all duration-300"
            >
              {/* Pillar Step Title */}
              <h3 className="text-[19px] font-bold text-[#0f1124] mb-3 leading-snug">
                {pillar.step}
              </h3>

              {/* Pillar Description */}
              <p className="text-[#64748b] text-[14px] leading-relaxed font-normal">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
