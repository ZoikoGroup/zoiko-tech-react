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

export default function ZoikoImpactHeroSection() {
  return (
    <section className="relative w-full min-h-[500px] flex items-end justify-start bg-[#030914] overflow-hidden pt-12 md:pt-20 px-6 font-sans">
      {/* Background Digital Network / Earth Globe Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/sustainability/hero.png"
          alt="Digital global network and illuminated earth background"
          className="w-full h-full object-cover object-right lg:object-center opacity-80"
        />
        {/* Dark subtle gradient overlay to ensure card readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#030914]/80 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full flex items-end">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-[560px] w-full"
        >
          {/* Semi-transparent Dark Navy Glassmorphism Card (Flush with bottom border) */}
          <motion.div
            variants={itemVariants}
            className="bg-[#082C4ACC] backdrop-blur-md rounded-t-2xl rounded-b-none p-8 md:p-10 border-t border-x border-white/10 shadow-2xl"
          >
            <p className="text-[18px] leading-relaxed text-[#e0e8f0] font-normal">
              At ZoikoTech, sustainability and social impact are not add-ons —
              they are foundational principles that shape our code, our culture,
              and our contribution to the world. We believe that technology
              should uplift, restore, and equalize — not just scale. Every
              platform we engineer reflects our commitment to environmental
              resilience, human dignity, and global equity.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
