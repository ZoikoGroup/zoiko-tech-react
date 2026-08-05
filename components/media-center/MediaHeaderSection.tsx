"use client";

import { motion } from "framer-motion";

export default function MediaHeaderSection() {
  return (
    <section className="relative w-full min-h-[500px] bg-[#050B14] text-white overflow-hidden font-sans antialiased flex flex-col justify-end">

      {/* Full-width Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="/media-center/hero.png"
          alt="Hero"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-16 pt-16 flex flex-col justify-end h-full">
        <div className="relative grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
          {/* Main Card (Connected/Anchored to the Bottom) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="md:col-span-7 lg:col-span-6 bg-[#0E2841]/90 backdrop-blur-md rounded-t-2xl p-8 sm:p-10 md:p-12 border-t border-x border-[#1E3A5F]/60 shadow-2xl"
          >
            <p className="text-[#D1D5DB] text-base sm:text-lg md:text-[1.125rem] font-normal leading-relaxed tracking-wide">
              At ZoikoTech, communication is a strategic function of leadership.
              Our Media Center is the definitive source for verified
              information, global updates, and insights into the innovations
              shaping our company and the industries we serve. We believe in
              proactive transparency, timely disclosures, and content that
              informs both our stakeholders and the world.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
