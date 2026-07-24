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

export default function TransformEnterpriseCTA() {
  return (
    <section className="w-full bg-gradient-to-r from-[#44c3b8] via-[#379c93] to-[#2a756f] text-white px-6 md:px-12 lg:px-20 py-20 md:py-28 overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Main Section Heading */}
        <motion.h2
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-3xl sm:text-4xl md:text-[44px] font-bold tracking-tight mb-4 leading-tight text-white"
        >
          Transform Your Enterprise with AI
        </motion.h2>

        {/* Subtitle / Description */}
        <motion.p
          custom={0.2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-white/90 text-[16px] sm:text-[18px] font-normal leading-relaxed mb-10 max-w-2xl"
        >
          Experience the power of governed AI automation with ZoikoAxis
          enterprise solutions
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          custom={0.3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full sm:w-auto"
        >
          {/* Request Enterprise Consultation Button */}
          <Link
            href="/consultation?product=zoikoaxis"
            className="w-full sm:w-auto min-w-[240px] text-center bg-white text-[#3ba8a0] font-semibold text-[15px] px-7 py-3.5 rounded-lg shadow-xs hover:bg-slate-50 transition-all duration-300"
          >
            Request Enterprise Consultation
          </Link>

          {/* Download Technical Specifications Button */}
          <Link
            href="/docs/zoikoaxis-tech-specs.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-w-[260px] text-center bg-transparent border-2 border-white text-white font-semibold text-[15px] px-7 py-3.5 rounded-lg hover:bg-white/10 transition-all duration-300"
          >
            Download Technical Specifications
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
