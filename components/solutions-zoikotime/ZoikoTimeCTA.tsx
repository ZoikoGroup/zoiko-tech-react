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

const secondaryLinksRow1 = [
  { label: "View Integrations", href: "#" },
  { label: "See How TES™ Works", href: "#" },
  { label: "Compare Teams vs Enterprise", href: "#" },
];

const secondaryLinksRow2 = [
  { label: "Download Product Overview\n(PDF)", href: "#" },
  { label: "Talk to a ZoikoTime Specialist", href: "#" },
  { label: "Join the ZoikoTime Partner\nProgramme", href: "#" },
];

export default function ZoikoTimeCTA() {
  return (
    <section className="w-full bg-gradient-to-r from-[#006059] via-[#0D8274] to-[#25A18E] py-24 px-6 md:px-12 lg:px-16 text-white min-h-[500px] flex items-center justify-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center w-full">
        {/* Header Title */}
        <motion.h2
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-3xl sm:text-4xl md:text-[42px] font-bold tracking-tight mb-4 leading-tight"
        >
          Ready to Transform Your Productivity?
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          custom={0.2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-white/90 text-[15px] sm:text-[16px] md:text-[17px] mb-10 leading-relaxed font-normal"
        >
          Join thousands of teams already optimizing their time with
          ZoikoTime&apos;s intelligent productivity platform
        </motion.p>

        {/* Main CTA Buttons */}
        <motion.div
          custom={0.3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16"
        >
          <button className="w-full sm:w-auto px-20 py-3.5 bg-white text-[#006059] hover:bg-gray-50 font-semibold rounded-[6px] text-[15px] transition-all shadow-md active:scale-95">
            Start Free Trial
          </button>
          <button className="w-full sm:w-auto px-25 py-3.5 bg-[#25A18E]/80 hover:bg-[#25A18E] text-white font-semibold rounded-[6px] text-[15px] border border-white/20 transition-all shadow-md active:scale-95">
            Book Enterprise Demo
          </button>
        </motion.div>

        {/* Secondary Navigation Links */}
        <motion.div
          custom={0.4}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="flex flex-col gap-6 w-full max-w-3xl"
        >
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center items-center">
            {secondaryLinksRow1.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[14px] text-white/90 hover:text-white transition-colors duration-200 font-normal"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center items-center">
            {secondaryLinksRow2.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[14px] text-white/90 hover:text-white transition-colors duration-200 font-normal whitespace-pre-line"
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
