"use client";

import React from "react";
import Link from "next/link";
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

export default function ZoikoAxisHero() {
  return (
    <section className="w-full bg-gradient-to-r from-[#44c3b8] via-[#379c93] to-[#2a756f] text-white px-6 md:px-12 lg:px-20 py-24 md:py-32 overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Main Title */}
        <motion.h1
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold tracking-tight text-white mb-4 leading-tight"
        >
          Enterprise AI Backbone
        </motion.h1>

        {/* Product Subtitle */}
        <motion.h2
          custom={0.2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-lg sm:text-xl md:text-[22px] font-medium text-white/90 mb-6 tracking-wide"
        >
          ZoikoAxis &mdash; Enterprise AI Solutions
        </motion.h2>

        {/* Product Description */}
        <motion.p
          custom={0.3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-white/80 text-[14.5px] sm:text-[16px] italic max-w-3xl leading-relaxed mb-6 font-normal"
        >
          Engineered for multi-jurisdiction operations, delivering agentic
          automation, workflow intelligence, and governed autonomy for
          enterprise clients in telecoms, fintech, and multi-national MVNO
          sectors
        </motion.p>

        {/* Company & Legal Notice Bar */}
        <motion.div
          custom={0.4}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-white/80 text-[13.5px] sm:text-[14.5px] font-medium mb-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
        >
          <span>Zoiko Tech Inc.</span>
          <span className="text-white/40 font-light">|</span>
          <span>United States</span>
          <span className="text-white/40 font-light">|</span>
          <span>
            Confidential &mdash; For Enterprise Procurement Review Only
          </span>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          custom={0.5}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full sm:w-auto"
        >
          {/* Explore Solutions Button */}
          <Link
            href="/solutions?product=zoikoaxis"
            className="w-full sm:w-auto min-w-[180px] text-center bg-white text-[#3ba8a0] font-semibold text-[15px] px-7 py-3 rounded-lg shadow-xs hover:bg-slate-50 transition-all duration-300"
          >
            Explore Solutions
          </Link>

          {/* Enterprise Consultation Button */}
          <Link
            href="/consultation?product=zoikoaxis"
            className="w-full sm:w-auto min-w-[210px] text-center bg-transparent border-2 border-white text-white font-semibold text-[15px] px-7 py-3 rounded-lg hover:bg-white/10 transition-all duration-300"
          >
            Enterprise Consultation
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
