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

export default function ZoikoTimeHero() {
  return (
    <section className="relative w-full bg-[#006059] py-20 px-6 md:px-12 lg:px-16 min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Decorative Abstract Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-12 left-12 w-32 h-20 rounded-xl border border-white/10" />
        <div className="absolute top-28 left-[32%] w-40 h-16 rounded-xl border border-white/10" />
        <div className="absolute top-44 left-[18%] w-28 h-28 rounded-2xl border border-white/10" />
        <div className="absolute top-48 left-[48%] w-32 h-32 rounded-full border border-white/10" />
        <div className="absolute top-16 right-[12%] w-24 h-36 rounded-xl border border-white/10" />
      </div>

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-18 items-center relative z-10">
        {/* Left Column: Dashboard Preview Card */}
        <motion.div
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="lg:col-span-5 flex justify-center lg:justify-start"
        >
          <div className="w-full max-w-[400px] bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden">
            {/* Header Bar */}
            <div className="bg-[#25A18E] py-3.5 px-6 text-center">
              <span className="text-white font-semibold text-[15px] tracking-wide">
                ZoikoTime Dashboard
              </span>
            </div>

            <div className="p-6 space-y-6">
              {/* Score Box */}
              <div className="bg-[#F8F9FA] rounded-xl p-5 text-center">
                <span className="text-[11px] font-bold tracking-wider text-[#888888] uppercase block mb-1">
                  Time Efficiency Score
                </span>
                <span className="text-4xl font-extrabold text-[#FF6B35]">
                  87
                </span>
              </div>

              {/* Work Pattern DNA Chart Mock */}
              <div>
                <span className="text-[11px] font-bold tracking-wider text-[#888888] uppercase block mb-3">
                  Work Pattern DNA™
                </span>
                <div className="flex items-end justify-between gap-2 h-16 pt-2">
                  <div className="w-full bg-[#38C6B1] rounded-t h-[60%]" />
                  <div className="w-full bg-[#38C6B1] rounded-t h-[85%]" />
                  <div className="w-full bg-[#38C6B1] rounded-t h-[45%]" />
                  <div className="w-full bg-[#38C6B1] rounded-t h-[95%]" />
                  <div className="w-full bg-[#38C6B1] rounded-t h-[70%]" />
                </div>
              </div>

              {/* Activity Heatmap Mock */}
              <div>
                <span className="text-[11px] font-bold tracking-wider text-[#888888] uppercase block mb-3">
                  Activity Heatmap
                </span>
                <div className="grid grid-cols-4 gap-2">
                  <div className="h-6 bg-[#62D8C5] rounded-sm" />
                  <div className="h-6 bg-[#25A18E] rounded-sm" />
                  <div className="h-6 bg-[#BCECE4] rounded-sm" />
                  <div className="h-6 bg-[#25A18E] rounded-sm" />
                  <div className="h-6 bg-[#62D8C5] rounded-sm" />
                  <div className="h-6 bg-[#25A18E] rounded-sm" />
                  <div className="h-6 bg-[#0E5248] rounded-sm" />
                  <div className="h-6 bg-[#62D8C5] rounded-sm" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Hero Typography and CTA */}
        <div className="lg:col-span-7 flex flex-col text-left">
          {/* Main Heading */}
          <motion.h1
            custom={0.2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            className="text-4xl md:text-[64px] max-w-145 font-bold text-white leading-[76px] mb-6"
          >
            Master Your Time. <br />
            Elevate Your Work. <br />
            Transform Your Team.
          </motion.h1>

          {/* Subheading Paragraph */}
          <motion.p
            custom={0.3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            className="text-white/85 text-[18px] leading-relaxed max-w-xl font-normal mb-8"
          >
            ZoikoTime is the next evolution of intelligent productivity —
            blending beautifully designed time management, project clarity,
            behavioural science, and AI-enhanced insights into one unified
            system that helps you do the right work, at the right time, at your
            highest level.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            custom={0.4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4"
          >
            <a
              href="#"
              className="w-full sm:w-auto min-w-[200px] bg-[#FF6B35] hover:bg-[#E85A24] text-white font-semibold py-3.5 px-8 rounded-lg text-[15px] transition-all duration-200 text-center shadow-md active:scale-95"
            >
              Start Free Trial
            </a>

            <a
              href="#"
              className="w-full sm:w-auto min-w-[220px] bg-[#25A18E] hover:bg-[#1F8F7E] text-white font-semibold py-3.5 px-8 rounded-lg text-[15px] transition-all duration-200 text-center shadow-md active:scale-95"
            >
              Book an Enterprise Demo
            </a>
          </motion.div>

          {/* Micro-copy Note */}
          <motion.p
            custom={0.5}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            className="text-white/60 text-[13px] italic"
          >
            No credit card required. Get started in under 2 minutes.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
