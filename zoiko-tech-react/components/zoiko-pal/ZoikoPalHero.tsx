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

export default function ZoikoPalHero() {
  return (
    <section className="w-full min-h-[90vh] bg-gradient-to-r from-[#4FD1C7] via-[#3BA8A0] to-[#2B6063] text-white px-6 md:px-12 lg:px-20 py-24 md:py-32 flex items-center justify-center overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Main Headline */}
        <motion.h1
          custom={0.1}
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant}
          className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 leading-tight sm:leading-tight"
        >
          Bring Governed Compassion <br className="hidden sm:block" />
          Home
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          custom={0.25}
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant}
          className="text-white/95 text-[18px] sm:text-[22px] font-medium tracking-wide mb-6"
        >
          Because Intelligence Can Care — and Care Can Be Intelligent
        </motion.p>

        {/* Detailed Description */}
        <motion.p
          custom={0.4}
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant}
          className="text-white/80 text-[14px] sm:text-[15.5px] font-light italic leading-relaxed max-w-2xl mb-8"
        >
          Multi-Jurisdiction Health Compliance Edition with Human-in-Command and
          Transparent AI Reasoning
        </motion.p>

        {/* Tagline Badge */}
        <motion.div
          custom={0.55}
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant}
          className="text-[12px] sm:text-[13px] font-normal text-white/90 mb-10 tracking-wider flex items-center gap-1.5 flex-wrap justify-center"
        >
          <span className="bg-[#FFD700] text-black font-medium px-2 py-0.5 rounded-sm">
            Zoiko Tech
          </span>
          <span>Inc. | United States | HIPAA • GDPR • ISO 13485 Compliant</span>
        </motion.div>

        {/* Call to Action Buttons */}
        <motion.div
          custom={0.7}
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          {/* Primary CTA - Strictly using text-[#4FD1C7] */}
          <button className="w-full sm:w-auto bg-white text-[#4FD1C7] font-semibold text-[15px] px-8 py-3.5 rounded-lg shadow-md hover:bg-slate-50 transition-all duration-300">
            Free Trial
          </button>

          {/* Secondary CTA */}
          <button className="w-full sm:w-auto bg-transparent border-2 border-white text-white font-medium text-[15px] px-8 py-3.5 rounded-lg hover:bg-white/10 transition-all duration-300">
            Enterprise Demo
          </button>
        </motion.div>
      </div>
    </section>
  );
}
