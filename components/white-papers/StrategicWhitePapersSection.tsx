"use client";

import React from "react";
import { motion } from "framer-motion";

export default function StrategicWhitePapersSection() {
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
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  } as const;

  return (
    <section className="w-full bg-[#D9D9D933] text-[#1D1D1F] py-24 px-6 sm:px-12 md:px-16 lg:px-24 font-sans antialiased overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Header Block */}
          <div className="space-y-4 max-w-4xl">
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold tracking-tight text-[#111827] leading-[1.18]"
            >
              Strategic White Papers
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-[#6B7280] text-sm sm:text-base font-normal leading-relaxed"
            >
              Our flagship white papers explore systemic transformation through
              the lens of infrastructure, regulation, and emerging technologies:
            </motion.p>
          </div>

          {/* Content Grid (7/5 Split) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pt-4">
            {/* Image Container (col-span-5) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="lg:col-span-5 flex justify-center lg:justify-start"
            >
              <div className="relative w-full max-w-[360px] sm:max-w-[400px] h-auto overflow-hidden">
                <img
                  src="/white-papers/5.png"
                  alt="AI for Aging Populations - Caregiver with senior citizen overlayed with digital healthcare graphics"
                  className="w-full h-auto object-contain block"
                />
              </div>
            </motion.div>

            {/* Description Text Block (col-span-7) */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-7 space-y-3"
            >
              <h3 className="text-lg sm:text-xl font-bold text-[#374151] leading-snug">
                AI for Aging Populations: <br />
                The Future of Financial Safety and Digital Dignity
              </h3>

              <p className="text-[#6B7280] text-sm sm:text-base font-normal leading-relaxed max-w-xl">
                Featuring ZoikoPal&trade;, this paper explores inclusive,
                voice-first, and multilingual AI companions that offer
                real-world support for seniors and caregivers.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
