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

const secondaryLinks = [
  { label: "Download Technical Overview", href: "#" },
  { label: "View Integrations", href: "#" },
  { label: "Book Platform Architecture Call", href: "#" },
  { label: "Become a Channel Partner", href: "#" },
];

export default function ZoikoPayCTA() {
  return (
    <section className="w-full bg-gradient-to-r from-[#006059] via-[#0D8274] to-[#25A18E] py-24 px-6 md:px-12 lg:px-16 text-white min-h-[480px] flex items-center justify-center">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center w-full">
        {/* Header Title */}
        <motion.h2
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-3xl sm:text-4xl md:text-[42px] font-bold tracking-tight mb-4 leading-tight"
        >
          Ready to Transform Your Payment Infrastructure?
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          custom={0.2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-white/90 text-[15px] sm:text-[16px] md:text-[17px] max-w-2xl mb-10 leading-relaxed font-normal"
        >
          Join leading businesses worldwide who trust ZoikoPay for their
          financial operations
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
          {/* Primary Orange Accent Button */}
          <button className="w-full sm:w-auto px-8 py-3.5 bg-[#FF6B35] hover:bg-[#E85A24] text-white font-semibold rounded-lg text-[15px] transition-all shadow-md active:scale-95">
            Create Business Account
          </button>

          {/* Secondary Teal Button */}
          <button className="w-full sm:w-auto px-8 py-3.5 bg-[#25A18E]/80 hover:bg-[#25A18E] text-white font-semibold rounded-lg text-[15px] border border-white/20 transition-all shadow-md active:scale-95">
            Request API Key
          </button>
        </motion.div>

        {/* Secondary Navigation Links */}
        <motion.div
          custom={0.4}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center items-center w-full max-w-4xl"
        >
          {secondaryLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[14px] text-white/90 hover:text-white transition-colors duration-200 underline-offset-4 hover:underline font-normal"
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
