"use client";

import React from "react";
import { motion } from "framer-motion";

export default function RnDHeaderSection() {
  return (
    <section className="relative w-full min-h-[500px] bg-[#050B14] text-white overflow-hidden font-sans antialiased flex items-center">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="/innovation-hub/hero.png"
          alt="Research and Development Engineering Background"
          className="w-full h-full object-cover object-right sm:object-center"
        />
        {/* Subtle Dark Vignette Tint */}
        <div className="absolute inset-0 bg-[#050B14]/30" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Floating Message Card - Not connected to bottom, rounded-[10px], bg-[#082C4ACC] */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="md:col-span-7 lg:col-span-6 bg-[#082C4ACC] backdrop-blur-md rounded-[10px] p-8 sm:p-10 md:p-12 shadow-2xl border border-[#104A7B]/40"
          >
            <p className="text-[#E2E8F0] text-sm sm:text-base md:text-[1.05rem] font-normal leading-relaxed tracking-wide">
              At ZoikoTech, innovation is not confined to product cycles or
              engineering teams &mdash; it is embedded in our corporate DNA. Our
              Research &amp; Development (R&amp;D) Hub is a strategic command
              center dedicated to solving complex global challenges through
              AI-driven, geo-agnostic technologies. We invest not just in new
              ideas, but in the ecosystems, methodologies, and regulatory
              frameworks that will shape the future of enterprise technology.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
