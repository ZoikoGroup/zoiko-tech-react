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

const complianceCards = [
  {
    title: "Trade Compliance",
    description:
      "Automated customs classification, tariff calculation, and warranty enforcement ensuring consistent global operation under international trade laws.",
  },
  {
    title: "Data Protection",
    description:
      "GDPR, CCPA, and ISO/IEC 27001 compliance with comprehensive privacy protection and transparent data usage policies.",
  },
  {
    title: "WTO Alignment",
    description:
      "Full compliance with World Trade Organization regulations for cross-border automotive parts commerce and international standards.",
  },
  {
    title: "Regional Regulations",
    description:
      "Compliance with U.S., UK, EU, and Asia-Pacific regulatory regimes including automotive safety standards and consumer protection laws.",
  },
];

const badges = [
  "ISO/IEC 27001",
  "WTO Compliant",
  "GDPR",
  "CCPA",
  "Automotive Standards",
];

export default function GlobalComplianceTrust() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-16 overflow-hidden min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto flex flex-col items-center w-full">
        {/* Section Heading */}
        <motion.h2
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-3xl sm:text-4xl md:text-[40px] font-bold tracking-tight text-[#222222] text-center mb-3 leading-tight"
        >
          Global Compliance & Trust
        </motion.h2>

        {/* Section Subtitle */}
        <motion.p
          custom={0.15}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-[#7A7A7A] text-[15px] sm:text-[16px] font-normal text-center mb-16 max-w-xl leading-relaxed"
        >
          Multi-jurisdictional compliance with comprehensive consumer protection
        </motion.p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mb-12">
          {complianceCards.map((card, index) => (
            <motion.div
              key={card.title}
              custom={0.2 + index * 0.08}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUpVariant}
              className="bg-white rounded-2xl p-8 shadow-[0_4px_12px_#0000001A] flex flex-col justify-between hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] transition-all duration-300 min-h-[220px]"
            >
              <div>
                {/* Card Title */}
                <h3 className="text-xl font-bold text-[#222222] mb-4 leading-snug">
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="text-[#555555] text-[14px] leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Compliance Badges Row */}
        <motion.div
          custom={0.55}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="flex flex-wrap items-center justify-center gap-3 w-full"
        >
          {badges.map((badge) => (
            <span
              key={badge}
              className="bg-[#52D4B9] text-white text-[13px] font-medium px-5 py-2 rounded-full shadow-sm"
            >
              {badge}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
