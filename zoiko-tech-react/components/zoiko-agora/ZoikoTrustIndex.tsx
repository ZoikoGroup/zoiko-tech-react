"use client";

import React from "react";
import { motion } from "framer-motion";

const governanceTiers = [
  {
    title: "Green - Verified & Ethical",
    scoreRange: "90-100 ZTI Score",
    description:
      "Fully compliant professionals eligible for all contract types. Comprehensive verification and ethical compliance maintained.",
    indicatorColor: "bg-emerald-500",
    borderColor: "border-l-emerald-500",
  },
  {
    title: "Amber - Under Review",
    scoreRange: "70-89 ZTI Score",
    description:
      "Minor compliance or delay issues identified. Limited visibility with ongoing review process and improvement pathway.",
    indicatorColor: "bg-amber-400",
    borderColor: "border-l-amber-400",
  },
  {
    title: "Red - Restricted",
    scoreRange: "Below 70 ZTI Score",
    description:
      "Breach, dispute, or suspension status. Hidden from enterprise listings with rehabilitation workflow available.",
    indicatorColor: "bg-red-500",
    borderColor: "border-l-red-500",
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

export default function ZoikoTrustIndex() {
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
          className="text-center mb-14 md:mb-16 max-w-6xl"
        >
          <h2 className="text-3xl sm:text-4xl md:text-[38px] font-bold text-[#1e293b] tracking-tight mb-4 leading-tight">
            ZoikoTrust Index (ZTI) - Traffic-Light Governance
          </h2>
          <p className="text-[#64748b] text-[14.5px] sm:text-[15.5px] font-normal leading-relaxed">
            AI-powered compliance and ethics scoring for transparent
            professional assessment
          </p>
        </motion.div>

        {/* 3 Tier Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 w-full mb-12">
          {governanceTiers.map((tier, idx) => (
            <motion.div
              key={idx}
              custom={0.12 * (idx + 1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUpVariant}
              className={`bg-white rounded-[10px] p-7 sm:p-8 border-y border-r border-slate-200/80 border-l-[6px] ${tier.borderColor} flex flex-col justify-start hover:shadow-md transition-all duration-300`}
            >
              {/* Header with Traffic Light Indicator Dot & Title */}
              <div className="flex items-start gap-3 mb-4">
                <span
                  className={`w-4 h-4 rounded-full ${tier.indicatorColor} shrink-0 mt-1 shadow-xs`}
                />
                <h3 className="text-[20px] font-bold text-[#0f1124] leading-snug">
                  {tier.title}
                </h3>
              </div>

              {/* Score Range Subheading */}
              <p className="text-[14px] font-bold text-slate-800 mb-2">
                {tier.scoreRange}
              </p>

              {/* Card Description */}
              <p className="text-[#64748b] text-[14px] leading-relaxed font-normal">
                {tier.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Footer Explanation Note */}
        <motion.p
          custom={0.5}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-center text-[#64748b] text-[13.5px] sm:text-[14.5px] italic font-normal leading-relaxed"
        >
          Each rating is dynamic, recalculated through Zoiko AI's behavioral
          analytics engine and logged immutably through Zoiko Assure.
        </motion.p>
      </div>
    </section>
  );
}
