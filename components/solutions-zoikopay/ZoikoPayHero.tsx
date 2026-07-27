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

export default function ZoikoPayHero() {
  return (
    <section className="w-full bg-gradient-to-r from-[#006059] via-[#0D8274] to-[#25A18E] py-28 px-6 md:px-12 lg:px-16 text-white min-h-[550px] flex items-center justify-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center w-full">
        {/* Main Headline */}
        <motion.h1
          custom={0.1}
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold tracking-tight mb-6 leading-[1.15]"
        >
          Global Payments. Real-Time
          <br className="hidden sm:inline" /> Settlements. Intelligent
          <br className="hidden sm:inline" /> Financial Infrastructure.
        </motion.h1>

        {/* Subtitle Description */}
        <motion.p
          custom={0.2}
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant}
          className="text-white/90 text-[15px] sm:text-[16px] md:text-[17px] max-w-xl mb-10 leading-relaxed font-normal"
        >
          ZoikoPay powers seamless payments, multi-currency wallets, merchant
          onboarding, invoicing, settlements, telecom billing flows, FX routing,
          and enterprise-grade financial operations.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          custom={0.3}
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          {/* Primary Action - Orange Accent */}
          <button className="w-full sm:w-auto px-7 py-3.5 bg-[#FF6B35] hover:bg-[#E85A24] text-white font-semibold rounded-lg text-[15px] transition-all shadow-md active:scale-95">
            Create a Business Account
          </button>

          {/* Secondary Action - Solid Teal Tint */}
          <button className="w-full sm:w-auto px-7 py-3.5 bg-[#25A18E]/80 hover:bg-[#25A18E] text-white font-semibold rounded-lg text-[15px] border border-white/10 transition-all shadow-md active:scale-95">
            Request Enterprise API Access
          </button>

          {/* Tertiary Action - Outlined Transparent */}
          <button className="w-full sm:w-auto px-7 py-3.5 bg-transparent hover:bg-white/10 text-[#20B2AA] hover:text-white font-semibold rounded-lg text-[15px] border border-white/30 transition-all active:scale-95">
            Become a Platform Partner
          </button>
        </motion.div>
      </div>
    </section>
  );
}
