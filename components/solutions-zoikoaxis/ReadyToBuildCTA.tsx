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

export default function ReadyToBuildCTA() {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-8 min-h-[500px] flex items-center justify-center">
      <div className="max-w-[1200px] w-full mx-auto">
        <motion.div
          custom={0.05}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="relative w-full rounded-[24px] bg-[linear-gradient(135deg,#0E6A60_0%,#19A087_50%,#26B89A_100%)] p-[48px_24px] sm:p-[64px_32px] md:p-[80px_48px] text-center flex flex-col items-center justify-center shadow-[0_4px_12px_#0000001A] overflow-hidden"
        >
          {/* Main Title */}
          <h2 className="text-white font-inter font-bold text-[32px] sm:text-[40px] md:text-[48px] leading-[40px] sm:leading-[50px] md:leading-[60px] tracking-[-0.02em] mb-4 max-w-[800px]">
            Ready to Build the Future?
          </h2>

          {/* Subtitle Paragraph */}
          <p className="text-[rgba(255,255,255,0.9)] font-inter font-normal text-[15px] sm:text-[16px] md:text-[18px] leading-[24px] sm:leading-[26px] md:leading-[28px] max-w-[720px] mb-8">
            Let's discuss your project and explore how ZoikoAxis can help you
            achieve your goals.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <button
              type="button"
              className="w-full sm:w-auto px-7 py-3.5 bg-white text-[#0E6A60] font-inter font-semibold text-[16px] leading-[24px] rounded-[12px] shadow-sm hover:bg-opacity-95 transition-all duration-200 cursor-pointer text-center"
            >
              Start a Project
            </button>

            <button
              type="button"
              className="w-full sm:w-auto px-7 py-3.5 bg-transparent border border-white/80 text-white font-inter font-medium text-[16px] leading-[24px] rounded-[12px] hover:bg-white/10 transition-all duration-200 cursor-pointer text-center"
            >
              View Documentation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
