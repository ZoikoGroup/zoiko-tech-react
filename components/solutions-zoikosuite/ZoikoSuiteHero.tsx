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

export default function ZoikoSuiteHero() {
  return (
    <section className="relative w-full bg-gradient-to-r from-[#00A896] via-[#028090] to-[#056676] py-24 px-6 md:px-12 lg:px-16 overflow-hidden min-h-screen flex items-center justify-center">
      {/* Background Decorative Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top-left Large Circle */}
        <div className="absolute -top-20 -left-20 w-80 h-80 border border-white/10 rounded-full" />

        {/* Center Concentric Circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/10 rounded-full" />

        {/* Right Large Circle */}
        <div className="absolute -right-24 top-1/4 w-[450px] h-[450px] border border-white/10 rounded-full" />

        {/* Top-right Rounded Rectangle */}
        <div className="absolute top-8 right-1/4 w-32 h-32 border border-white/10 rounded-2xl" />

        {/* Bottom-left Rounded Rectangle */}
        <div className="absolute bottom-16 left-12 md:left-24 w-44 h-24 border border-white/10 rounded-2xl" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Title */}
        <motion.h1
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-3xl sm:text-4xl md:text-[46px] lg:text-[64px] font-bold tracking-tight text-white mb-6 leading-[1.2] max-w-3xl"
        >
          Where Compliance, Accounting & HR Work Together — Intelligently.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          custom={0.15}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-white/85 text-[15px] sm:text-[16px] font-normal mb-10 max-w-2xl leading-relaxed"
        >
          ZoikoSuite unifies accounting, HR, compliance, payroll, risk
          monitoring, and business operations into one integrated platform.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          custom={0.2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          {/* Orange Primary Button */}
          <button className="w-full sm:w-auto bg-[#FF6B4A] hover:bg-[#f05a38] text-white font-bold py-3.5 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 text-[14px]">
            Request Demo
          </button>

          {/* Teal Secondary Button */}
          <button className="w-full sm:w-auto bg-[#25A18E] hover:bg-[#1d8c7b] text-white font-semibold py-3.5 px-8 rounded-xl transition-all duration-200 text-[14px]">
            Explore Features
          </button>
        </motion.div>
      </div>
    </section>
  );
}
