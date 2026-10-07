"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CaseStudiesComparisonSection() {
  return (
    <section
      id="case-studies"
      className="w-full text-white pt-16 sm:pt-20 lg:pt-[74px] pb-20 sm:pb-24 lg:pb-[88px]"
      style={{
        background:
          "linear-gradient(141deg, rgba(0, 0, 0, 1) 0%, rgba(10, 37, 40, 1) 48%, rgba(36, 119, 128, 1) 100%)",
      }}
    >
      <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-[820px] mb-10 sm:mb-12 lg:mb-14"
        >
          <h2 className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[47px] leading-[1.16] tracking-[-0.015em] text-white mb-3 sm:mb-4">
            Customer Stories and Case Studies <br className="hidden sm:inline" />
            have different jobs.
          </h2>
          <p className="font-poppins text-base sm:text-[17px] leading-relaxed text-[#C4D7D9]">
            One discovery layer; a separate destination for deep implementation evidence.
          </p>
        </motion.div>

        {/* 2-Column Split: Vertically Stacked Cards (Left) + 3D Isometric Visual (Right) */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 lg:gap-12">
          {/* Left Column: Stacked Cards */}
          <div className="w-full lg:w-[440px] shrink-0 flex flex-col gap-6 sm:gap-8">
            {/* Card 1: Customer Stories */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="border border-[#8EBCC5]/35 rounded-[10px] px-6 sm:px-8 py-7 sm:py-8 bg-transparent flex flex-col justify-start hover:border-[#8EBCC5]/60 transition-colors"
            >
              <div className="mb-3.5">
                <span className="font-poppins text-[11px] sm:text-xs font-semibold tracking-[0.14em] text-[#A9D6DB] uppercase">
                  DISCOVER / COMPARE
                </span>
              </div>
              <h3 className="font-poppins font-bold text-2xl sm:text-[30px] text-white mb-3 leading-snug">
                Customer Stories
              </h3>
              <p className="font-poppins text-sm sm:text-base leading-relaxed text-[#C4D7D9]">
                Cross-format proof discovery: short story, video, spotlight, quotation and case-study summary.
              </p>
            </motion.div>

            {/* Card 2: Case Studies */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="border border-[#8EBCC5]/35 rounded-[10px] px-6 sm:px-8 py-7 sm:py-8 bg-transparent flex flex-col justify-start hover:border-[#8EBCC5]/60 transition-colors"
            >
              <div className="mb-3.5">
                <span className="font-poppins text-[11px] sm:text-xs font-semibold tracking-[0.14em] text-[#A9D6DB] uppercase">
                  INSPECT / EVALUATE
                </span>
              </div>
              <h3 className="font-poppins font-bold text-2xl sm:text-[30px] text-white mb-3 leading-snug">
                Case Studies
              </h3>
              <p className="font-poppins text-sm sm:text-base leading-relaxed text-[#C4D7D9]">
                Canonical long-form context, architecture, implementation and evidence detail. Summarize here; never duplicate the full artifact.
              </p>
            </motion.div>
          </div>

          {/* Right Column: 3D Isometric Visual side-by-side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:flex-1 relative flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[680px] lg:max-w-[720px] aspect-[769/513]">
              <Image
                src="/customer-stories/case-studies-deepdive.png"
                alt="Customer Stories and Case Studies architecture illustration"
                fill
                className="object-contain object-center"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
