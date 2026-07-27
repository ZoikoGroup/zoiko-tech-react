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

const pricingTiers = [
  {
    title: "ZoikoNex Core",
    description: "OSS + BSS foundation, Rating, billing, provisioning",
  },
  {
    title: "ZoikoNex Professional",
    description:
      "Multi-brand enablement, Enhanced analytics, Workflow automation",
  },
  {
    title: "ZoikoNex Enterprise",
    description:
      "Full DCC + Fabric + Elasticity Engine, Dedicated infrastructure, SSO + priority support",
  },
];

const addOns = [
  "Travel eSIM Engine",
  "IoT Billing Module",
  "White-label portal",
];

export default function PricingAndMonetisation() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-16 overflow-hidden min-h-screen flex items-center justify-center">
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
          Pricing & Monetisation
        </motion.h2>

        {/* Pricing Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-16">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.title}
              custom={0.2 + index * 0.1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUpVariant}
              className="bg-white rounded-2xl p-8 shadow-[0_4px_12px_#0000001A] hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] border-t-4 border-[#FF6B4A] transition-all duration-300 flex flex-col items-center text-center justify-center min-h-[220px]"
            >
              {/* Tier Title */}
              <h3 className="text-xl font-bold text-[#25A18E] mb-4">
                {tier.title}
              </h3>

              {/* Tier Description */}
              <p className="text-[#666666] text-[14px] leading-relaxed max-w-xs">
                {tier.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Add-Ons Sub-section */}
        <motion.div
          custom={0.5}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="flex flex-col items-center w-full"
        >
          <h3 className="text-xl font-bold text-[#222222] mb-6">Add-Ons</h3>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {addOns.map((addOn) => (
              <span
                key={addOn}
                className="bg-[#4FD1C7] text-white font-medium text-[13px] px-6 py-2.5 rounded-full shadow-sm hover:opacity-90 transition-opacity cursor-pointer"
              >
                {addOn}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
