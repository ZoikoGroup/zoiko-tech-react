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

export default function ZoikoPalHero() {
  return (
    <section className="w-full bg-gradient-to-r from-[#0D8074] via-[#1AA192] to-[#25B4A4] py-28 px-6 md:px-12 lg:px-16 min-h-screen flex items-center justify-center text-white">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center w-full">
        {/* Main Title Heading */}
        <motion.h1
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-4xl sm:text-5xl md:text-[56px] lg:text-[72px] font-bold tracking-tight text-white mb-6 leading-[1.15] max-w-3xl"
        >
          Dignity. Safety. Independence — Powered by Intelligent Support.
        </motion.h1>

        {/* Subtitle Description */}
        <motion.p
          custom={0.2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-white/90 text-[15px] sm:text-[17px] md:text-[18px] font-normal leading-relaxed max-w-152 mb-12"
        >
          ZoikoPal is an AI-enhanced companion platform supporting older adults
          with daily living, safety cues, social engagement, and wellbeing
          awareness — without replacing human care.
        </motion.p>

        {/* Action Buttons Group */}
        <motion.div
          custom={0.3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 w-full"
        >
          {/* Primary Solid Dark Teal Button */}
          <button className="px-7 py-3.5 bg-[#1B6258] hover:bg-[#155048] text-white font-medium text-[15px] rounded-lg shadow-[0_4px_12px_#0000001A] transition-colors duration-200 active:scale-95">
            Explore ZoikoPal
          </button>

          {/* Secondary Solid Light Teal Button */}
          <button className="px-7 py-3.5 bg-[#22BBA9] hover:bg-[#1fa394] text-white font-medium text-[15px] rounded-lg shadow-[0_4px_12px_#0000001A] transition-colors duration-200 active:scale-95">
            View Family Portal
          </button>

          {/* Outlined Border Button */}
          <button className="px-7 py-3.5 border border-white/40 hover:bg-white/10 hover:text-white text-[#20B2AA] font-medium text-[15px] rounded-lg transition-colors duration-200 active:scale-95">
            Request Partnership
          </button>
        </motion.div>
      </div>
    </section>
  );
}
