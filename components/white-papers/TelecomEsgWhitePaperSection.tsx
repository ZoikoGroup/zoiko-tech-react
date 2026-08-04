"use client";

import React from "react";
import { motion } from "framer-motion";

export default function TelecomEsgWhitePaperSection() {
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
    <section className="w-full bg-[#D9D9D933] text-[#1D1D1F] py-24 px-6 sm:px-12 md:px-16 lg:px-24 font-sans antialiased overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        {/* Content Grid (5/7 Split) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          {/* Image Container - Left Side (col-span-5) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-[360px] sm:max-w-[400px] h-auto overflow-hidden">
              <img
                src="/white-papers/9.png"
                alt="Scuba diver holding GoLite Mobile sign under water highlighting telecom ESG and conservation model"
                className="w-full h-auto object-contain block"
              />
            </div>
          </motion.div>

          {/* Description Text Block - Left-Aligned (col-span-7) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 space-y-3 text-left flex flex-col items-start"
          >
            <h3 className="text-lg sm:text-xl font-bold text-[#374151] leading-snug max-w-xl">
              Telecom Meets ESG: <br />
              The GoLite Mobile Conservation Model
            </h3>

            <p className="text-[#6B7280] text-sm sm:text-base font-normal leading-relaxed max-w-xl">
              An exploration of how digital infrastructure can support
              biodiversity funding and environmental accountability through
              telco revenue-sharing frameworks.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
