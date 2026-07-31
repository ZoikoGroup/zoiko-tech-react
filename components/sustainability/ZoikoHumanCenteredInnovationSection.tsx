"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Check } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ZoikoHumanCenteredInnovationSection() {
  return (
    <section className="relative w-full bg-[#F0F0F0] py-16 md:py-24 px-6 font-sans">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-14 items-center justify-between"
      >
        {/* Left Column: Single Image Overlay Composition */}
        <motion.div
          variants={itemVariants}
          className="w-full lg:w-[45%] order-2 lg:order-1 flex items-center justify-center lg:justify-start"
        >
          <div className="relative w-full max-w-[480px] aspect-[4/5] overflow-hidden rounded-md shadow-sm">
            <img
              src="/sustainability/group.png"
              alt="Diverse professionals overlaid with city skyline and futuristic digital lighting"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </motion.div>

        {/* Right Column: Text Content & Bullet Points */}
        <div className="w-full lg:w-[55%] order-1 lg:order-2 space-y-6 flex flex-col justify-center">
          {/* Section Header */}
          <motion.div variants={itemVariants} className="space-y-3">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-[#1a1a1a]">
              Human-Centered <br className="hidden sm:inline" />
              Innovation at Scale
            </h2>
            <p className="text-[18px] leading-relaxed text-[#272727]">
              We build for real-world human impact — not hypothetical use cases.
              Every ZoikoTech solution is engineered to support societal
              well-being, digital inclusion, and emotional connectivity.
            </p>
          </motion.div>

          {/* Bulleted Feature List using Lucide Check Icons */}
          <motion.div variants={itemVariants} className="space-y-4 pt-2">
            <div className="flex items-start gap-3">
              <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#63C313] shrink-0">
                <Check
                  className="h-3 w-3 text-white"
                  strokeWidth={3.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </div>
              <p className="text-[18px] leading-relaxed text-[#272727]">
                <strong className="font-bold text-[#1a1a1a]">ZoikoPal™</strong>{" "}
                provides intelligent companionship and wellness support to
                elderly individuals, helping them age with dignity and autonomy.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#63C313] shrink-0">
                <Check
                  className="h-3 w-3 text-white"
                  strokeWidth={3.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </div>
              <p className="text-[18px] leading-relaxed text-[#272727]">
                <strong className="font-bold text-[#1a1a1a]">ZoikoTime™</strong>{" "}
                transforms how people manage productivity, prioritizing mental
                health, balance, and responsible time governance.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#63C313] shrink-0">
                <Check
                  className="h-3 w-3 text-white"
                  strokeWidth={3.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </div>
              <p className="text-[18px] leading-relaxed text-[#272727]">
                <strong className="font-bold text-[#1a1a1a]">
                  ZoikoSocial™
                </strong>{" "}
                creates safe, respectful spaces for animal lovers, wildlife
                advocates, and conservation communities to connect across
                borders.
              </p>
            </div>
          </motion.div>

          {/* Bottom Concluding Paragraph */}
          <motion.p
            variants={itemVariants}
            className="text-[18px] leading-relaxed text-[#272727] pt-2"
          >
            We develop for accessibility, neurodiversity, and localized
            relevance — ensuring that our technology is not just available, but
            meaningfully usable to those it serves.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
