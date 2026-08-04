"use client";

import React from "react";
import { motion } from "framer-motion";

export default function DigitizingGovernmentWhitePaperSection() {
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
    hidden: { opacity: 0, x: -20 },
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
        {/* Content Grid (7/5 Split) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          {/* Description Text Block - Right-Aligned (col-span-7) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 space-y-3 text-right flex flex-col items-end"
          >
            <h3 className="text-lg sm:text-xl font-bold text-[#374151] leading-snug max-w-xl">
              Digitizing Government: <br />
              From Bureaucracy to Automation
            </h3>

            <p className="text-[#6B7280] text-sm sm:text-base font-normal leading-relaxed">
              A comprehensive look at ZoikoSuite&apos;s role in modernizing
              public payroll, procurement, <br className="hidden sm:inline" />
              and HR systems &mdash; while ensuring regional compliance and
              fiscal control.
            </p>
          </motion.div>

          {/* Image Container (col-span-5) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[360px] sm:max-w-[400px] h-auto overflow-hidden">
              <img
                src="/white-papers/8.png"
                alt="Government official working on laptop and reviewing paper documents"
                className="w-full h-auto object-contain block"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
