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

const initiatives: string[] = [
  "Animal and environmental conservation",
  "Humanitarian relief and education access",
  "Public health, elder care, and social inclusion",
  "Government service modernization",
  "Cross-border transparency and accountability initiatives",
];

export default function ZoikoTechSupportInitiativesSection() {
  return (
    <section className="relative w-full bg-white py-16 md:py-24 px-6 font-sans text-[#555555]">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-14 items-center justify-between"
      >
        {/* Left Content Area */}
        <div className="w-full lg:w-[55%] order-1 space-y-6 flex flex-col justify-center py-2">
          <motion.div variants={itemVariants} className="space-y-4">
            <p className="text-sm md:text-[15px] leading-relaxed text-[#666666]">
              Whether you&apos;re advocating for environmental protection,
              managing donor programs, providing elder support services, or
              delivering digital government services — ZoikoTech equips you with
              the tools to scale operations, protect sensitive data, and advance
              your mission with confidence.
            </p>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-sm font-medium text-[#666666]"
          >
            We proudly support initiatives across:
          </motion.p>

          {/* Feature List */}
          <motion.ul variants={itemVariants} className="space-y-3">
            {initiatives.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#52B61B] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-white stroke-[3]" />
                </div>
                <span className="text-xs md:text-[15px] text-[#555555] leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Right Image Area */}
        <motion.div
          variants={itemVariants}
          className="w-full lg:w-[45%] order-2 flex items-center justify-center lg:justify-end"
        >
          <div className="relative w-full h-full overflow-hidden rounded-sm">
            <img
              src="/social/second.png"
              alt="Volunteers packing food donation bags outdoors"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
