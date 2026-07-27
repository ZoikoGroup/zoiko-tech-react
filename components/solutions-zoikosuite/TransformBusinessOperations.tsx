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
  "Download Overview",
  "View Case Studies",
  "Talk to Solution Architect",
  "Join Partner Programme",
];

export default function TransformBusinessOperations() {
  return (
    <section className="w-full bg-gradient-to-r from-[#00695C] via-[#00897B] to-[#26A69A] py-24 px-6 md:px-12 lg:px-16 flex items-center justify-center text-white">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center w-full">
        {/* Main Heading & Subtitle */}
        <motion.div
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="mb-8 max-w-3xl"
        >
          <h2 className="text-3xl sm:text-4xl md:text-[36px] font-bold tracking-tight text-white mb-4 leading-tight">
            Transform Your Business Operations Today
          </h2>
          <p className="text-white/90 text-[15px] sm:text-[17px] font-normal leading-relaxed">
            Join thousands of companies streamlining their compliance and
            operations with ZoikoSuite
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          custom={0.25}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="flex flex-wrap items-center justify-center gap-4 mb-10"
        >
          <button className="px-8 py-3 bg-[#FF6B35] hover:bg-[#f05a24] text-white font-medium text-[15px] rounded-lg shadow-[0_4px_14px_rgba(255,107,53,0.4)] transition-all duration-200 active:scale-95">
            Request Demo
          </button>
          <button className="px-8 py-3 bg-[#20B2AA]/80 hover:bg-[#20B2AA] text-white font-medium text-[15px] rounded-lg transition-all duration-200 border border-white/20 active:scale-95">
            Explore Pricing
          </button>
        </motion.div>

        {/* Bottom Text Links */}
        <motion.div
          custom={0.35}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-white/90 text-[13px] sm:text-[14px] font-medium"
        >
          {secondaryLinks.map((link, index) => (
            <React.Fragment key={link}>
              <a
                href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                className="hover:text-white hover:underline underline-offset-4 transition-all duration-200"
              >
                {link}
              </a>
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
