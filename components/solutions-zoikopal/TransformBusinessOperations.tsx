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
  { label: "Download Overview", href: "#" },
  { label: "Watch Demo", href: "#" },
  { label: "Request Partnership Call", href: "#" },
];

export default function TransformBusinessOperations() {
  return (
    <section className="w-full bg-gradient-to-r from-[#1B8073] via-[#219283] to-[#25A18E] py-20 px-6 md:px-12 lg:px-16 text-white min-h-[420px] flex items-center justify-center">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center w-full">
        {/* Main Heading */}
        <motion.h2
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-3xl sm:text-4xl md:text-[42px] font-bold tracking-tight mb-4 leading-tight text-white"
        >
          Ready to Support Your Loved Ones with Dignity?
        </motion.h2>

        {/* Subtitle Paragraph */}
        <motion.p
          custom={0.2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-white/90 text-[15px] sm:text-[17px] font-normal max-w-2xl mb-10 leading-relaxed"
        >
          Join families and care organizations using ZoikoPal to enhance
          independence and peace of mind
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          custom={0.3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mb-12"
        >
          {/* Primary White Button */}
          <a
            href="#"
            className="w-full sm:w-auto min-w-[180px] bg-white text-[#1F9F94] font-semibold py-3.5 px-8 rounded-lg text-[15px] hover:bg-white/90 transition-all duration-200 shadow-sm text-center active:scale-95"
          >
            Explore ZoikoPal
          </a>

          {/* Secondary Semi-transparent Button */}
          <a
            href="#"
            className="w-full sm:w-auto min-w-[180px] bg-[#20B2AA] hover:bg-[#1B9A93] text-white font-semibold py-3.5 px-8 rounded-lg text-[15px] border border-white/20 transition-all duration-200 text-center active:scale-95 backdrop-blur-sm"
          >
            View Family Portal
          </a>
        </motion.div>

        {/* Footer Secondary Text Links */}
        <motion.div
          custom={0.4}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-[14px] text-white/90 font-medium"
        >
          {secondaryLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-white underline-offset-4 hover:underline transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
