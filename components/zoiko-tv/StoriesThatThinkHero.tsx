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

export default function StoriesThatThinkHero() {
  return (
    <section className="w-full bg-gradient-to-r from-[#44c3b8] via-[#338781] to-[#255755] text-white px-6 md:px-12 lg:px-16 py-20 md:py-24 overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Main Section Heading */}
        <motion.h1
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-3xl sm:text-4xl md:text-[48px] font-bold tracking-tight mb-4 leading-tight text-white max-w-3xl"
        >
          Stories That Think, Inspire, and Protect
        </motion.h1>

        {/* Subtitle / Primary Description */}
        <motion.p
          custom={0.2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-white text-[17px] sm:text-[19px] font-medium leading-relaxed mb-4 max-w-2xl"
        >
          Streaming with Purpose. Governed by Intelligence.
        </motion.p>

        {/* Secondary Italic Description */}
        <motion.p
          custom={0.25}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-white/80 italic text-[13px] sm:text-[14px] font-light leading-relaxed mb-6 max-w-2xl"
        >
          Where intelligent storytelling meets ethical governance — powered by
          Zoiko AI for wildlife, innovation, and sustainability content that
          matters
        </motion.p>

        {/* Tagline / Meta text */}
        <motion.p
          custom={0.3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-white/90 text-[13px] font-medium leading-relaxed mb-8"
        >
          Zoiko Tech Inc. | United States | Multi-Jurisdiction OTT Governance
          Edition
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          custom={0.35}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          {/* Primary Button */}
          <Link
            href="/watch-free"
            className="w-full sm:w-auto text-center bg-white text-[#3ba8a0] font-semibold text-[15px] px-8 py-3 rounded-md shadow-xs hover:bg-slate-50 transition-all duration-300 min-w-[140px]"
          >
            Watch Free
          </Link>

          {/* Secondary Outline Button */}
          <Link
            href="/subscribe"
            className="w-full sm:w-auto text-center border border-white text-white font-medium text-[15px] px-8 py-3 rounded-md hover:bg-white/10 transition-all duration-300 min-w-[140px]"
          >
            Subscribe
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
