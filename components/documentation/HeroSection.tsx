"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative w-full overflow-hidden text-white"
      style={{
        background:
          "linear-gradient(139deg, rgba(0, 0, 0, 1) 0%, rgba(10, 37, 40, 1) 48%, rgba(36, 119, 128, 1) 100%)",
      }}
    >
      <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 lg:pt-[86px] pb-12 sm:pb-16 lg:pb-[86px]">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-4 sm:mb-5"
        >
          <span className="font-poppins font-bold text-xs uppercase tracking-[0.17em] text-[#86D4D8]">
            RESOURCES · DOCUMENTATION
          </span>
        </motion.div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] items-center gap-8 lg:gap-10 xl:gap-12">
          {/* Left Column Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-start"
          >
            {/* Headline */}
            <h1 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[60px] xl:text-[64px] leading-[1.08] tracking-[-0.025em] text-white mb-5 sm:mb-6">
              <span className="block text-white">Find the current</span>
              <span className="block text-[#96D1D6]">product and</span>
              <span className="block text-[#96D1D6]">platform answer.</span>
            </h1>

            {/* Paragraph */}
            <p className="font-poppins text-sm sm:text-base leading-[25.6px] text-[#C4D7D9] max-w-[580px] mb-8 font-normal">
              Browse source-governed Zoiko Tech documentation by goal, product or
              platform. Each public article should make scope, currentness,
              prerequisites, expected behavior and the next authoritative route
              visible.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="#start-by-goal"
                className="inline-flex items-center justify-center px-[21px] py-[12px] rounded-[5px] bg-white hover:bg-[#EAF5F6] text-[#0A3639] font-poppins font-bold text-sm leading-[22.4px] transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Browse documentation ↓
              </Link>
              <Link
                href="#start-by-goal"
                className="inline-flex items-center justify-center px-[21px] py-[12px] rounded-[5px] bg-transparent hover:bg-white/10 text-white border border-[#80C5CB] font-poppins font-bold text-sm leading-[22.4px] transition-all duration-200"
              >
                Start by goal
              </Link>
            </div>
          </motion.div>

          {/* Right Column Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="w-full relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[560px] aspect-[1536/1024] rounded-[18px] overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/documentation/hero-documentation.png"
                alt="Illustrative documentation navigation and reading panels connected to configuration, reviewed history, integration and reference modules"
                fill
                priority
                className="object-cover object-center"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
