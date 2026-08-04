"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface AssetPoint {
  text: string;
}

const assetPoints: AssetPoint[] = [
  { text: "Official press releases and disclosures" },
  { text: "Executive headshots and leadership bios" },
  { text: "Product interface visuals and explainer graphics" },
  { text: "Approved logo sets and brand usage guidelines" },
  { text: "Platform demo reels and investor presentations" },
];

export default function MediaLibraryAssetsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  } as const;

  return (
    <section className="w-full bg-white text-[#1D1D1F] py-20 px-6 sm:px-12 md:px-16 lg:px-24 font-sans antialiased overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Media Library Visual Asset Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 relative flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-[560px] h-[380px] sm:h-[480px] md:h-[540px] overflow-hidden shadow-2xl">
              <img
                src="/media-center/mall.png"
                alt="Man holding smartphone in front of digital screen wall"
                className="object-cover object-center h-full w-full"
              />
            </div>
          </motion.div>

          {/* Right Column: Content and Bullet Points */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Title */}
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-[2.65rem] font-bold tracking-tight text-[#111827] leading-[1.18]"
            >
              Media Library &amp; Brand <br />
              Assets
            </motion.h2>

            {/* Intro Lead */}
            <motion.p
              variants={itemVariants}
              className="text-[#6B7280] text-sm sm:text-base font-normal leading-relaxed max-w-xl"
            >
              Our Media Center includes a comprehensive, rights-cleared archive
              of:
            </motion.p>

            {/* Bullet Points with exact #56B810 green tick badges */}
            <motion.ul
              variants={containerVariants}
              className="space-y-3.5 pt-1"
            >
              {assetPoints.map((point, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-3"
                >
                  {/* Exact #56B810 Green Badge Icon */}
                  <div className="w-5 h-5 rounded-full bg-[#56B810] flex items-center justify-center shrink-0 shadow-sm">
                    <Check
                      className="w-3.5 h-3.5"
                      color="#FFFFFF"
                      strokeWidth={3}
                    />
                  </div>
                  <span className="text-[#4B5563] text-sm sm:text-base font-medium">
                    {point.text}
                  </span>
                </motion.li>
              ))}
            </motion.ul>

            {/* Supporting Paragraph 1 */}
            <motion.p
              variants={itemVariants}
              className="text-[#6B7280] text-sm sm:text-base font-normal leading-relaxed pt-2"
            >
              All content is formatted for digital, print, and
              regulatory-compliant distribution, ensuring brand consistency
              across global markets.
            </motion.p>

            {/* Supporting Paragraph 2 */}
            <motion.p
              variants={itemVariants}
              className="text-[#6B7280] text-sm sm:text-base font-normal leading-relaxed"
            >
              A dedicated section for journalists provides immediate access to
              media contact details, company boilerplates, and embargoed content
              releases where applicable.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
