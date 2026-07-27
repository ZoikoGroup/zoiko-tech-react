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
  "Download Technical Whitepaper",
  "Explore Integrations",
  "Become a ZoikoNex MVNA Partner",
];

export default function TransformTelecomCTA() {
  return (
    <section className="w-full bg-gradient-to-r from-[#056676] via-[#028090] to-[#00A896] py-24 px-6 md:px-12 lg:px-16 overflow-hidden flex items-center justify-center min-h-[360px]">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center w-full">
        {/* Main Heading */}
        <motion.h2
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-3xl sm:text-4xl md:text-[38px] font-bold tracking-tight text-white mb-10 leading-snug"
        >
          Ready to Transform Your Telecom Infrastructure?
        </motion.h2>

        {/* Primary Action Buttons */}
        <motion.div
          custom={0.2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-8"
        >
          {/* Orange Primary Button */}
          <button className="w-full sm:w-auto bg-[#FF6B4A] hover:bg-[#f05a38] text-white font-bold py-3.5 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 text-[15px]">
            Request Demo
          </button>

          {/* Teal Secondary Button */}
          <button className="w-full sm:w-auto bg-[#25A18E] hover:bg-[#1d8c7b] text-white font-semibold py-3.5 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-[15px]">
            Contact Enterprise Sales
          </button>
        </motion.div>

        {/* Secondary Links / Outline Buttons */}
        <motion.div
          custom={0.3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="flex flex-wrap items-center justify-center gap-4 w-full"
        >
          {secondaryLinks.map((link) => (
            <button
              key={link}
              className="bg-transparent border border-white/20 text-white/80 font-medium py-2.5 px-6 rounded-md hover:bg-white/10 hover:text-white transition-all duration-200 text-[13px]"
            >
              {link}
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
