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

export default function AboutZoikoTechSection() {
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
          <div className="relative w-full max-w-[500px] aspect-[4/3] sm:aspect-[1.1/1] overflow-hidden rounded-sm">
            <img
              src="/global-vision/mahal.png"
              alt="California State Capitol Building in Sacramento"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </motion.div>

        {/* Right Content Area */}
        <div className="w-full lg:w-[55%] order-1 lg:order-2 space-y-6 flex flex-col justify-center py-2">
          <motion.div variants={itemVariants} className="space-y-4">
            <p className="md:text-[18px] leading-relaxed text-[#666666]">
              Headquartered in Sacramento, California, and supported by strategic hubs in Austin,
              Albany, and Springfield, ZoikoTech builds scalable, geo-agnostic solutions that serve
              both enterprise and community. From AI-powered SaaS platforms to digital infrastructure
              for MVNOs and social good, we embed Environmental, Social, and Governance (ESG)
              commitments into every product, every decision, and every relationship.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}