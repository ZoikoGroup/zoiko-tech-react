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

export default function ZoikoJoinMovementCTA() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-16 min-h-[60vh] flex items-center justify-center">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          custom={0.05}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="w-full bg-gradient-to-r from-[#006666] to-[#20B2AA] rounded-[24px] py-16 px-8 sm:px-12 md:px-16 text-center text-white shadow-xl flex flex-col items-center justify-center relative overflow-hidden"
        >
          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold tracking-tight mb-4 leading-tight">
            Join the Movement
          </h2>

          {/* Subtitle Description */}
          <p className="text-[15px] sm:text-[17px] text-teal-50/90 max-w-2xl font-normal leading-relaxed mb-10">
            Watch, connect, and be part of stories that inspire change.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            {/* Primary Button */}
            <button className="w-full sm:w-auto min-w-[170px] px-7 py-3.5 bg-white text-[#006059] hover:bg-teal-50 font-semibold rounded-xl text-[15px] transition-all duration-200 shadow-md hover:shadow-lg active:scale-95">
              Explore ZoikoTV
            </button>

            {/* Secondary Outlined Button */}
            <button className="w-full sm:w-auto min-w-[170px] px-7 py-3.5 bg-transparent border-2 border-white/80 text-white hover:bg-white/10 font-semibold rounded-xl text-[15px] transition-all duration-200 active:scale-95">
              Join ZoikoSocial
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
