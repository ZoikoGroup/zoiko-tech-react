"use client";

import React from "react";
import { motion } from "framer-motion";

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

const badges = [
  "GDPR",
  "CCPA",
  "COPPA",
  "DMCA",
  "ISO/IEC 42001",
  "ADA",
  "NIST AI RMF",
];

const frameworkItems = [
  {
    title: "Content Moderation",
    description:
      "AI-powered content moderation ensuring family-friendly, educational, and inspiring content while maintaining editorial independence.",
  },
  {
    title: "Privacy Protection",
    description:
      "Comprehensive privacy protection with minimal data collection, transparent usage policies, and user control over personal information.",
  },
  {
    title: "Accessibility Standards",
    description:
      "Full ADA compliance with audio descriptions, closed captions, and accessibility features ensuring content is available to all users.",
  },
  {
    title: "Zoiko Assure ChainLedger",
    description:
      "Immutable content licensing and rights management ledger ensuring transparent ownership and usage tracking for all content.",
  },
];

export default function GovernanceAndCompliance() {
  return (
    <section className="w-full bg-[#FFFFFF] py-20 px-6 md:px-12 lg:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Section Heading */}
        <motion.h2
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-3xl sm:text-4xl md:text-[44px] font-bold tracking-tight text-[#2B2B2B] text-center mb-4 leading-tight"
        >
          Governance &amp; Compliance Framework
        </motion.h2>

        {/* Section Subtitle */}
        <motion.p
          custom={0.15}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-[#7A7A7A] text-[16px] sm:text-[18px] font-normal text-center mb-10"
        >
          Ethical content delivery with comprehensive regulatory compliance
        </motion.p>

        {/* Badges Pill Row */}
        <motion.div
          custom={0.2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="flex flex-wrap items-center justify-center gap-3.5 max-w-4xl mb-14"
        >
          {badges.map((badge) => (
            <span
              key={badge}
              className="bg-[#52D4B9] text-white text-xs sm:text-[13px] font-semibold px-5 py-2 rounded-full tracking-wide"
            >
              {badge}
            </span>
          ))}
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
          {frameworkItems.map((item, index) => (
            <motion.div
              key={item.title}
              custom={0.25 + index * 0.08}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUpVariant}
              className="bg-white rounded-2xl p-8 shadow-[0_4px_12px_#0000001A] border border-slate-100 flex flex-col justify-start hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] transition-all duration-300 min-h-[230px]"
            >
              {/* Card Title */}
              <h3 className="text-xl font-bold text-[#2B2B2B] mb-4 tracking-tight leading-snug">
                {item.title}
              </h3>

              {/* Card Description */}
              <p className="text-[#7A7A7A] text-[14px] sm:text-[15px] leading-relaxed font-normal">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
