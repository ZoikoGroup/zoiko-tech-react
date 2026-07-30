"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

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

export default function NgosConservationPublicSectorSection() {
  return (
    <section className="relative w-full bg-[#F5F5F5] py-16 md:py-24 px-6 font-sans text-[#555555]">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-14 items-center justify-between"
      >
        {/* Left Image Area */}
        <motion.div
          variants={itemVariants}
          className="w-full lg:w-[45%] order-2 lg:order-1 flex items-center justify-center lg:justify-start"
        >
          <div className="relative w-full h-full overflow-hidden rounded-sm">
            <img
              src="/social/hero.png"
              alt="Volunteers smiling and holding donation boxes outdoors"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </motion.div>

        {/* Right Content Area */}
        <div className="w-full lg:w-[55%] order-1 lg:order-2 space-y-6 flex flex-col justify-center py-2">
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-[#1a1a1a] leading-tight">
              NGOs, Conservation & Public Sector
            </h2>
            <p className="text-sm md:text-[15px] leading-relaxed text-[#666666]">
              ZoikoTech supports mission-driven organizations, public
              institutions, and conservation networks with technology that is
              secure, accessible, and impact-focused. From international NGOs
              and educational nonprofits to government agencies and biodiversity
              initiatives — we deliver enterprise-grade digital infrastructure
              that aligns with purpose, policy, and people.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
