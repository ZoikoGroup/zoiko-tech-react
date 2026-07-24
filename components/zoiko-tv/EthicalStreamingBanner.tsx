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

export default function EthicalStreamingBanner() {
  return (
    <section className="w-full bg-gradient-to-r from-[#4FD1C7] to-[#2C5F5D] py-20 px-6 md:px-12 lg:px-16 overflow-hidden flex items-center justify-center">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Main Heading */}
        <motion.h1
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-3xl sm:text-4xl md:text-[42px] font-bold tracking-tight text-white mb-4 leading-tight"
        >
          Watch Smarter. Live Smarter. Stream Ethically.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          custom={0.15}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-white/90 text-[15px] sm:text-[16px] font-normal mb-8 max-w-2xl leading-relaxed"
        >
          Join millions discovering meaningful content that inspires, educates,
          and protects our planet
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          custom={0.2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          {/* Primary Button */}
          <button className="w-full sm:w-auto bg-white text-[#4FD1C7] font-semibold py-3 px-7 rounded-lg shadow-md hover:bg-opacity-90 transition-all duration-200 text-[14px]">
            Start Free Trial
          </button>

          {/* Secondary Outline Button */}
          <button className="w-full sm:w-auto bg-transparent border border-white text-white font-semibold py-3 px-7 rounded-lg hover:bg-white/10 transition-all duration-200 text-[14px]">
            Become a Partner
          </button>
        </motion.div>
      </div>
    </section>
  );
}
