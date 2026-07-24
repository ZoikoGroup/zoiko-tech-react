"use client";

import React from "react";
import { motion } from "framer-motion";

const transparencyCards = [
  {
    title: "What ZoikoTime Tracks",
    description:
      "Apps usage, task duration, focus periods, and meeting density for productivity optimization while respecting privacy.",
  },
  {
    title: "What ZoikoTime Never Tracks",
    description:
      "Screenshots, keystrokes, webcam feeds, or private messages — maintaining complete personal privacy and dignity.",
  },
  {
    title: "AI Governance Logs",
    description:
      "'Why this recommendation?' feature with explainable reasoning and complete decision transparency for every AI suggestion.",
  },
  {
    title: "Compliance Framework",
    description:
      "GDPR, CCPA, SOC2 Type II, ISO/IEC 42001 compliant with comprehensive data protection and privacy controls.",
  },
];

const complianceBadges = [
  "GDPR",
  "CCPA",
  "SOC2 Type II",
  "ISO/IEC 42001",
  "Privacy by Default",
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

export default function EthicsTransparency() {
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
            Ethics &amp; Transparency
          </h2>
          <p className="text-[#64748b] text-[14.5px] sm:text-[15.5px] font-normal leading-relaxed">
            Complete transparency in data usage and AI decision-making
          </p>
        </motion.div>

        {/* 4 Cards Grid Layout (3 Columns Upper, Left Aligned Lower) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full mb-12">
          {transparencyCards.map((item, idx) => (
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

        {/* Compliance Pill Badges Row */}
        <motion.div
          custom={0.5}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 max-w-4xl pt-4"
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
      </div>
    </section>
  );
}
