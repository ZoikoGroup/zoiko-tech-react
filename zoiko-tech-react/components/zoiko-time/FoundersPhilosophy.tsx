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

export default function FoundersPhilosophy() {
  return (
    <section className="w-full bg-[#F5F5F5] text-[#0f1124] px-6 md:px-12 lg:px-20 py-20 md:py-28 overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <motion.div
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-center mb-12 md:mb-14 max-w-2xl"
        >
          <h2 className="text-3xl sm:text-4xl md:text-[38px] font-bold text-[#1e293b] tracking-tight mb-3 leading-tight">
            Founder&apos;s Philosophy
          </h2>
          <p className="text-[#64748b] text-[14.5px] sm:text-[15.5px] font-normal leading-relaxed">
            Leadership perspective on ethical productivity intelligence
          </p>
        </motion.div>

        {/* Quote Card */}
        <motion.div
          custom={0.2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="w-full bg-white rounded-r-[10px] rounded-l-[2px] p-8 sm:p-10 border-l-4 border-l-[#4FD1C7] border-y border-r border-slate-200/80 mb-8"
        >
          <blockquote className="text-center text-[#334155] text-[16px] sm:text-[18px] italic font-normal leading-relaxed">
            &ldquo;True productivity doesn&apos;t come from surveillance &mdash;
            it comes from understanding. ZoikoTime uses AI to protect time, not
            invade it.&rdquo;
          </blockquote>
        </motion.div>

        {/* Founder Attribution */}
        <motion.p
          custom={0.3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-[#4FD1C7] text-[14px] sm:text-[15px] font-bold tracking-wide text-center"
        >
          &mdash; Lennox McLeod, Founder &amp; Executive Chairman, Zoiko Group
          Inc.
        </motion.p>
      </div>
    </section>
  );
}
