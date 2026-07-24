"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
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

export default function ZoikoPayHero() {
  const router = useRouter();

  return (
    <section className="w-full bg-gradient-to-r from-[#44c3b8] via-[#379c93] to-[#2a756f] text-white px-6 md:px-12 lg:px-20 py-24 md:py-32 overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Main Hero Heading */}
        <motion.h1
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-3xl sm:text-4xl md:text-[50px] font-bold tracking-tight mb-4 leading-tight text-white"
        >
          Intelligence in Every Transaction
        </motion.h1>

        {/* Product Tagline */}
        <motion.p
          custom={0.2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-white/95 text-[18px] sm:text-[21px] font-medium leading-relaxed mb-3"
        >
          ZoikoPay - Where Payments, Compliance &amp; AI Converge
        </motion.p>

        {/* Secondary Subtitle */}
        <motion.p
          custom={0.25}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-white/80 text-[14px] sm:text-[15px] italic font-normal leading-relaxed mb-8"
        >
          Process, protect, and predict — all in one U.S.-governed platform.
        </motion.p>

        {/* Brand Entity Badge Line */}
        <motion.div
          custom={0.3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="flex flex-wrap items-center justify-center gap-1.5 text-white/90 text-[14px] sm:text-[15px] font-medium mb-10"
        >
          <span>Part of</span>
          <span className="bg-[#FFDE59] text-[#0f1124] font-bold px-2.5 py-0.5 rounded-[4px] text-[13.5px]">
            Zoiko Tech
          </span>
          <span>Inc. — Where Life Meets Logic™</span>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          custom={0.35}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full sm:w-auto"
        >
          {/* Start Free Sandbox Button */}
          <Link
            href="/sandbox"
            className="w-full sm:w-auto min-w-[200px] text-center bg-white text-[#3ba8a0] font-semibold text-[15px] px-7 py-3.5 rounded-lg shadow-xs hover:bg-slate-50 transition-all duration-300"
          >
            Start Free Sandbox
          </Link>

          {/* Request Enterprise Demo Button */}
          <Link
            href="/request-demo?product=zoikopay"
            className="w-full sm:w-auto min-w-[220px] text-center bg-transparent border-2 border-white text-white font-semibold text-[15px] px-7 py-3.5 rounded-lg hover:bg-white/10 transition-all duration-300"
          >
            Request Enterprise Demo
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
