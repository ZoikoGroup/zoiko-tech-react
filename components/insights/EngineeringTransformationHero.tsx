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

export default function EngineeringTransformationHero() {
  return (
    <section className="relative w-full min-h-[480px] md:min-h-[560px] flex items-center justify-center overflow-hidden py-16 px-6 md:px-12 lg:px-16">
      {/* Background Image Container with Overlay */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
        <img
          src="/insights/hero.png"
          alt="Hero Background"
          className="w-full h-full object-cover object-center opacity-95"
        />
        {/* Soft edge gradients to ensure text legibility and smooth section transition */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#030914]/90 via-[#030914]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030914] via-transparent to-[#030914]/40" />
      </div>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between w-full relative z-10 gap-12 lg:gap-16">
        {/* Left Side Text Content */}
        <motion.div
          custom={0.05}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="w-full lg:w-1/2 flex flex-col items-start"
        >
          <p className="text-white/90 font-inter font-normal text-[16px] sm:text-[17px] md:text-[18px] leading-[28px] sm:leading-[30px] md:leading-[32px] tracking-wide">
            At ZoikoTech, we don't just build technology — we engineer
            transformation. Our case studies highlight how regulated
            enterprises, public institutions, and mission-driven brands across
            the globe achieve operational excellence, compliance certainty, and
            digital resilience with our platforms.
          </p>
        </motion.div>

        {/* Right Side Spacer for Hero Layout Alignment */}
        <div className="w-full lg:w-1/2 hidden lg:block" />
      </div>
    </section>
  );
}
