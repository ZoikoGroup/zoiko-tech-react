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
          "linear-gradient(138deg, rgba(0, 0, 0, 1) 0%, rgba(10, 37, 40, 1) 48%, rgba(36, 119, 128, 1) 100%)",
      }}
    >
      <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 lg:pt-[37px] pb-12 sm:pb-14 lg:pb-[57px]">
        {/* Eyebrow - Clean uppercase text matching Figma (CUSTOMER STORIES) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-4 sm:mb-6"
        >
          <span className="font-poppins font-bold text-xs uppercase tracking-[0.2em] text-[#86D4D8]">
            CUSTOMER STORIES
          </span>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4 xl:gap-8">
          {/* Left Column Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full lg:w-[560px] xl:w-[610px] shrink-0 flex flex-col items-start"
          >
            {/* Headline with exact 4 lines and 2-tone coloring matching Figma */}
            <h1 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[54px] leading-[1.12] tracking-[-0.025em] text-white mb-5 sm:mb-6">
              <span className="block sm:whitespace-nowrap">See real operating</span>
              <span className="block sm:whitespace-nowrap">context behind</span>
              <span className="block sm:whitespace-nowrap text-[#8FCED4]">approved customer</span>
              <span className="block sm:whitespace-nowrap text-[#8FCED4]">outcomes.</span>
            </h1>

            {/* Description */}
            <p className="font-poppins text-sm sm:text-base leading-[25.6px] text-[#C4D7D9] max-w-[580px] mb-7 sm:mb-8 font-normal">
              Explore evidence-led stories that connect an approved customer context, operating
              challenge, Zoiko Tech technology or platform involvement, implementation reality and
              verified outcomes — with scope, attribution and currentness kept visible.
            </p>

            {/* CTA Button - White pill/button with dark teal text matching Figma */}
            <Link
              href="#pathways"
              className="inline-flex items-center justify-center px-[21px] py-[11.5px] rounded-[5px] bg-white hover:bg-[#EAF5F6] text-[#0A3639] font-poppins font-bold text-sm leading-[22.4px] transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Explore customer stories ↓
            </Link>
          </motion.div>

          {/* Right Column Visual - Floating 3D illustration matching Figma */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="w-full lg:flex-1 relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[540px] lg:max-w-[620px] xl:max-w-[700px] aspect-[738/492]">
              <Image
                src="/customer-stories/hero-stories.png"
                alt="See real operating context behind approved customer outcomes"
                fill
                priority
                className="w-full h-full object-contain object-center lg:object-right"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
