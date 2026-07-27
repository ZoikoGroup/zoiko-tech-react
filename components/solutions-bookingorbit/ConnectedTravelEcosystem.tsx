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

const travelPartners = [
  "Amadeus",
  "Sabre",
  "Travelport",
  "Hotel\nAggregators",
  "Car Rental\nAPIs",
  "Insurance\nPartners",
];

const zoikoEcosystem = [
  "ZoikoNex",
  "ZoikoPay",
  "ZoikoSuite",
  "ZoikoAxis",
  "ZoikoShield",
];

export default function ConnectedTravelEcosystem() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-16 min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto flex flex-col items-center w-full">
        {/* Top Header Badge */}
        <motion.div
          custom={0.05}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="mb-6"
        >
          <span className="bg-[#E8F2F2] text-[#006666] px-4 py-1.5 rounded-full text-[13px] font-medium tracking-wide">
            Integrations
          </span>
        </motion.div>

        {/* Section Header */}
        <motion.div
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-center mb-16 max-w-3xl"
        >
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold tracking-tight text-[#1A202C] leading-tight">
            Connected Travel Ecosystem
          </h2>
        </motion.div>

        {/* Section 1: Travel Partners */}
        <div className="w-full mb-12">
          <motion.h3
            custom={0.15}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            className="text-xl md:text-[22px] font-bold text-[#1A202C] mb-6 text-left"
          >
            Travel Partners
          </motion.h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 w-full items-stretch">
            {travelPartners.map((item, index) => (
              <motion.div
                key={item}
                custom={0.2 + index * 0.05}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeUpVariant}
                className="bg-white rounded-2xl p-6 shadow-[0_4px_12px_#0000001A] hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)] transition-all duration-300 flex items-center justify-center text-center border border-gray-100/80 min-h-[120px]"
              >
                <span className="text-[14px] md:text-[15px] font-semibold text-[#333333] leading-snug whitespace-pre-line">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 2: Zoiko Ecosystem */}
        <div className="w-full">
          <motion.h3
            custom={0.45}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            className="text-xl md:text-[22px] font-bold text-[#1A202C] mb-6 text-left"
          >
            Zoiko Ecosystem
          </motion.h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 w-full items-stretch">
            {zoikoEcosystem.map((item, index) => (
              <motion.div
                key={item}
                custom={0.5 + index * 0.05}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeUpVariant}
                className="bg-white rounded-2xl p-6 shadow-[0_4px_12px_#0000001A] hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)] transition-all duration-300 flex items-center justify-center text-center border border-gray-100/80 min-h-[120px]"
              >
                <span className="text-[14px] md:text-[15px] font-semibold text-[#333333] leading-snug">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
