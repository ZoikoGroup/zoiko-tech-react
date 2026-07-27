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

export default function CaseStudiesHeader() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-16">
      <div className="max-w-6xl mx-auto flex flex-col w-full">
        <motion.div
          custom={0.05}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="max-w-[920px]"
        >
          {/* Main Section Title */}
          <h2 className="text-[#1D2939] font-inter font-bold text-[36px] md:text-[44px] leading-[44px] md:leading-[52px] tracking-[-0.02em] mb-4">
            Case Studies
            <br />& Success Stories
          </h2>

          {/* Subtitle / Descriptive Text */}
          <p className="text-[#667085] font-inter font-normal text-[15px] md:text-[16px] leading-[24px]">
            Each success story demonstrates how ZoikoTech solutions — including
            ZoikoAxis™, ZoikoNex™, ZoikoAssure™, ZoikoShield™, ZoikoSuite™,
            ZoikoPal™, and Zoiko Web Services™ — are powering scalable
            innovation across telecommunications, finance, healthcare,
            eldercare, compliance, conservation, and the public sector.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
