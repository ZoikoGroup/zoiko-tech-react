"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, Handshake, CreditCard } from "lucide-react";

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

const payFeatures = [
  {
    title: "Global Transaction Fabric™",
    description:
      "Unified payment infrastructure spanning multiple currencies, regions, and payment methods with intelligent routing optimization.",
    icon: Globe,
  },
  {
    title: "Unified Merchant Graph™",
    description:
      "Comprehensive merchant relationship mapping with integrated onboarding, compliance, and risk management across all touchpoints.",
    icon: Handshake,
  },
  {
    title: "Multi-Currency Smart Wallets™",
    description:
      "Intelligent wallet system with automatic FX routing, multi-currency balances, and seamless cross-border transactions.",
    icon: CreditCard,
  },
];

export default function ZoikoPayFeatures() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-16 min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto w-full">
        {/* Responsive 3-Column Grid matching the mockup structure */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-stretch">
          {payFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.title}
                custom={0.15 + index * 0.1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeUpVariant}
                className="bg-white rounded-2xl p-8 md:p-10 shadow-[0_4px_12px_#0000001A] hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col items-center text-center border border-gray-100"
              >
                {/* Circular Teal Icon Container */}
                <div className="w-14 h-14 rounded-full bg-[#25A18E] flex items-center justify-center mb-6 shadow-sm shrink-0">
                  <IconComponent className="w-7 h-7 text-white" />
                </div>

                {/* Card Title */}
                <h3 className="text-xl md:text-2xl font-bold text-[#2D3748] mb-4 leading-snug">
                  {feature.title}
                </h3>

                {/* Card Description */}
                <p className="text-[14px] md:text-[15px] text-[#666666] leading-relaxed font-normal">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
