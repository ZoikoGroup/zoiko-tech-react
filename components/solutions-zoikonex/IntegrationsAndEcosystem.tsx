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

const ecosystemCategories = [
  {
    title: "MNO/MVNE Integrations",
    description:
      "AT&T, T-Mobile, BT Wholesale, EE, MasOrange Spain, Plintron, MVNO-C",
  },
  {
    title: "Zoiko Ecosystem",
    description: "ZoikoTime, ZoikoPay, ZoikoSuite, ZoikoAxis, BookingOrbit",
  },
  {
    title: "Third Party",
    description:
      "KYC/KYB tools, Payment gateways, CRM integrations, Tax engines",
  },
];

export default function IntegrationsAndEcosystem() {
  return (
    <section className="w-full bg-white py-15 px-6 md:px-12 lg:px-16 overflow-hidden flex items-center justify-center">
      <div className="max-w-6xl mx-auto flex flex-col items-center w-full">
        {/* Main Section Title */}
        <motion.h2
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-3xl sm:text-4xl md:text-[40px] font-bold tracking-tight text-[#222222] text-center mb-16 leading-tight"
        >
          Integrations & Ecosystem
        </motion.h2>

        {/* 3-Column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {ecosystemCategories.map((card, index) => (
            <motion.div
              key={card.title}
              custom={0.2 + index * 0.1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUpVariant}
              className="bg-white rounded-2xl p-8 shadow-[0_4px_12px_#0000001A] hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] border border-[#25A18E]/40 hover:border-[#25A18E] transition-all duration-300 flex flex-col items-center text-center min-h-[200px] justify-center"
            >
              {/* Category Title */}
              <h3 className="text-lg font-bold text-[#25A18E] mb-4">
                {card.title}
              </h3>

              {/* Description / Partner List */}
              <p className="text-[#666666] text-[14px] leading-relaxed max-w-xs">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
