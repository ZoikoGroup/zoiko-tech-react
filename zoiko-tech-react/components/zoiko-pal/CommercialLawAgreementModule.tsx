"use client";

import React from "react";
import { motion } from "framer-motion";

const agreementFeatures = [
  {
    title: "Insurer Integration",
    description:
      "Automated coordination with health insurance providers for seamless claims processing and coverage verification.",
  },
  {
    title: "Caregiver Coordination",
    description:
      "Professional caregiver network integration with verified credentials and performance tracking systems.",
  },
  {
    title: "Patient Rights Management",
    description:
      "Comprehensive patient data rights protection with transparent consent management and data portability.",
  },
  {
    title: "Legal Compliance Automation",
    description:
      "Delaware governing law with New York arbitration seat, plus ADA/508 certification for accessibility compliance.",
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

export default function CommercialLawAgreementModule() {
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
          className="text-center mb-14 md:mb-16 flex flex-col items-center"
        >
          <h2 className="text-3xl md:text-[38px] font-bold text-[#1e293b] tracking-tight mb-4 leading-tight">
            Commercial-Law &amp; Health Agreement Module
          </h2>
          <p className="text-[#64748b] text-[14.5px] sm:text-[15.5px] max-w-120 font-normal leading-relaxed">
            Smart Tri-Party Health Agreement Templates and ZWS escrow for
            comprehensive healthcare management
          </p>
        </motion.div>

        {/* 4-Card Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          {agreementFeatures.map((item, idx) => (
            <motion.div
              key={idx}
              custom={0.12 * (idx + 1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUpVariant}
              className="bg-white rounded-[10px] p-7 sm:p-8 shadow-[0_4px_12px_0_#0000001A] border border-slate-200/80 flex flex-col justify-start hover:shadow-md transition-all duration-300"
            >
              {/* Card Title */}
              <h3 className="text-[19px] font-bold text-[#0f1124] mb-3 leading-snug">
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
