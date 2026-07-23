"use client";

import React from "react";
import { motion } from "framer-motion";

const complianceBadges = [
  "3GPP Compliant",
  "PCI DSS Level 1",
  "SOC 2 Type II",
  "ISO 27001",
  "GSMA Certified",
  "FCA Authorized",
  "Ofcom Approved",
  "GDPR Compliant",
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

export default function IndustryRecognition() {
  return (
    <section className="w-full bg-[#F5F5F5] text-[#0f1124] px-6 md:px-12 lg:px-20 py-20 md:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Section Header */}
        <motion.div
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="mb-10 md:mb-12 max-w-3xl"
        >
          <h2 className="text-3xl sm:text-4xl md:text-[38px] font-bold text-[#1e293b] tracking-tight mb-4 leading-tight">
            Industry Recognition &amp; Compliance
          </h2>
          <p className="text-[#64748b] text-[14.5px] sm:text-[15.5px] font-normal leading-relaxed">
            Certified and compliant across global telecommunications and
            financial standards
          </p>
        </motion.div>

        {/* Compliance Badges Container */}
        <motion.div
          custom={0.2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12"
        >
          {complianceBadges.map((badge, idx) => (
            <span
              key={idx}
              className="bg-[#44c3b8] text-white font-semibold text-[13px] sm:text-[14px] px-5 py-2 rounded-full shadow-xs tracking-wide transition-transform hover:scale-105 duration-200"
            >
              {badge}
            </span>
          ))}
        </motion.div>

        {/* Footer Subtext */}
        <motion.p
          custom={0.3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-[#64748b] text-[14px] sm:text-[15px] italic font-normal"
        >
          Trusted by leading MVNOs, financial institutions, and telecom
          operators worldwide
        </motion.p>
      </div>
    </section>
  );
}
