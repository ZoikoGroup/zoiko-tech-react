"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AiForAgingPopulationsSection() {
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
    <section className="w-full bg-white text-[#1D1D1F] py-24 px-6 sm:px-12 md:px-16 lg:px-24 font-sans antialiased overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          {/* Text Content Block - Right-Aligned (col-span-7) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 text-left lg:text-right space-y-4"
          >
            <h3 className="text-2xl sm:text-3xl md:text-[2.25rem] font-bold text-[#111827] leading-tight">
              AI for Aging <br />
              Populations
            </h3>

            <p className="text-[#6B7280] text-sm sm:text-base font-normal leading-relaxed ml-auto max-w-xl">
              Market outlook on the intersection of eldercare policy, wellness
              technology, and national healthcare infrastructure.
              ZoikoPal&trade; is profiled as a leading AI-driven platform for
              aging with dignity and financial safety.
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
            <div className="relative w-full max-w-[480px] h-auto overflow-hidden rounded-[5px]">
              <img
                src="/analyst-reports/4.png"
                alt="Person holding tablet projecting artificial intelligence icon and digital connections"
                className="w-full h-auto object-cover block rounded-[5px]"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
