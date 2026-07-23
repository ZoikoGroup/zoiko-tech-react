"use client";

import React from "react";
import { motion } from "framer-motion";

const modulesData = [
  {
    title: "Merchant Onboarding",
    description:
      "AI-assisted KYC + KYB workflow for fintechs and marketplaces with automated verification.",
  },
  {
    title: "Billing & Invoicing",
    description:
      "Auto-reconciliation via ZWS for MVNOs and SMBs with intelligent payment matching.",
  },
  {
    title: "International Remittance",
    description:
      "Real-time USD to multi-currency conversion with AI FX optimizer for consumers and expats.",
  },
  {
    title: "Embedded Finance API",
    description:
      "Seamlessly integrate wallets and cards into existing apps for enterprises and platforms.",
  },
  {
    title: "Treasury Dashboard",
    description:
      "Unified liquidity and compliance overview for CFOs and controllers with real-time insights.",
  },
  {
    title: "Contract Management",
    description:
      "ZWS-powered document automation including quotes, invoices, and MSAs with digital signatures.",
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

export default function CommercialModules() {
  return (
    <section className="w-full bg-[#F5F5F5] text-[#0f1124] px-6 md:px-12 lg:px-20 py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
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
            Commercial Modules
          </h2>
          <p className="text-[#64748b] text-[14.5px] sm:text-[15.5px] font-normal leading-relaxed">
            Comprehensive suite of financial services for every business need
          </p>
        </motion.div>

        {/* Grid Layout: 4 columns on large screens to fit 4 on top, 2 on bottom */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 w-full">
          {modulesData.map((item, idx) => (
            <motion.div
              key={idx}
              custom={0.08 * (idx + 1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUpVariant}
              className="bg-white rounded-r-[10px] rounded-l-[2px] p-6 sm:p-7 shadow-[0_4px_12px_0_#0000001A] border-l-4 border-l-[#4FD1C7] border-y border-r border-slate-200/80 flex flex-col justify-start hover:shadow-md transition-all duration-300 min-h-[210px]"
            >
              {/* Module Title */}
              <h3 className="text-[19px] font-bold text-[#0f1124] mb-3 leading-snug">
                {item.title}
              </h3>

              {/* Module Description */}
              <p className="text-[#64748b] text-[13.5px] leading-relaxed font-normal">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
