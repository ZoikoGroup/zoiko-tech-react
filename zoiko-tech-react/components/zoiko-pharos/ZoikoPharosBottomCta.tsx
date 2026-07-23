"use client";

import React from "react";
import { motion } from "framer-motion";

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

export default function ZoikoPharosBottomCta() {
  return (
    <section className="w-full bg-gradient-to-r from-[#4FD1C7] via-[#3BA8A0] to-[#2B6063] text-white px-6 md:px-12 lg:px-20 py-20 md:py-24 overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Title */}
        <motion.h2
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight"
        >
          Ready to Begin Your Journey?
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          custom={0.25}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-white/90 text-[15px] sm:text-[16.5px] font-normal leading-relaxed mb-10"
        >
          Transform your relocation experience with AI-guided intelligence and
          comprehensive support
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          custom={0.4}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          {/* Primary CTA - Strictly using text-[#4FD1C7] */}
          <button className="w-full sm:w-auto bg-white text-[#4FD1C7] font-semibold text-[15px] px-8 py-3.5 rounded-lg shadow-md hover:bg-slate-50 transition-all duration-300">
            Plan My Move
          </button>

          {/* Secondary Outline CTA */}
          <button className="w-full sm:w-auto bg-transparent border-2 border-white text-white font-medium text-[15px] px-8 py-3.5 rounded-lg hover:bg-white/10 transition-all duration-300">
            Enterprise Solutions
          </button>
        </motion.div>
      </div>
    </section>
  );
}
