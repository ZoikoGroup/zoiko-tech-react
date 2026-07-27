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

export default function ZoikoCtaSection() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-16 min-h-[500px] flex items-center justify-center">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          custom={0.05}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="w-full rounded-[28px] bg-gradient-to-r from-[#005B5C] via-[#007D7E] to-[#14B8A6] p-10 sm:p-14 md:p-20 shadow-[0_4px_12px_#0000001A] text-center flex flex-col items-center justify-center"
        >
          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl md:text-[46px] font-bold text-white tracking-tight leading-tight mb-4">
            Secure Your Business Today
          </h2>

          {/* Subtitle Description */}
          <p className="text-white/90 text-base sm:text-lg md:text-[19px] font-normal max-w-2xl mb-10 leading-relaxed">
            Don't wait for a breach. Get enterprise-grade security that's built
            for SMEs.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full sm:w-auto">
            {/* Primary Filled Button */}
            <button className="w-full sm:w-auto bg-white text-[#006666] hover:bg-gray-50 active:bg-gray-100 font-semibold px-8 py-3.5 rounded-xl text-[15px] transition-all duration-200 shadow-sm">
              Protect Your Business
            </button>

            {/* Secondary Outlined Button */}
            <button className="w-full sm:w-auto bg-transparent border border-white/80 text-white hover:bg-white/10 active:bg-white/20 font-semibold px-8 py-3.5 rounded-xl text-[15px] transition-all duration-200">
              Run Free Security Scan
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
