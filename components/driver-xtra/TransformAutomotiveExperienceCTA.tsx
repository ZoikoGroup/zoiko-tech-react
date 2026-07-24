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

export default function TransformAutomotiveExperienceCTA() {
  return (
    <section className="w-full bg-gradient-to-r from-[#4FD1C7] to-[#2C5F5D] py-20 px-6 md:px-12 lg:px-16 overflow-hidden flex items-center justify-center min-h-[380px]">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Main Heading */}
        <motion.h2
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-3xl sm:text-4xl md:text-[40px] font-bold tracking-tight text-white mb-4 leading-snug"
        >
          Transform Your Automotive Experience
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          custom={0.15}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-white/90 text-[15px] sm:text-[16px] font-normal mb-10 max-w-2xl leading-relaxed"
        >
          Join millions of automotive enthusiasts, professionals, and fleet
          operators discovering the future of parts commerce
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          custom={0.2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          {/* Primary Filled Button */}
          <button className="w-full sm:w-auto bg-white text-[#4FD1C7] font-bold py-3 px-8 rounded-lg shadow-md hover:bg-opacity-95 transition-all duration-200 text-[14px]">
            Start Shopping
          </button>

          {/* Secondary Outline Button */}
          <button className="w-full sm:w-auto bg-transparent border border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white/10 transition-all duration-200 text-[14px]">
            Join Professional Network
          </button>
        </motion.div>
      </div>
    </section>
  );
}
