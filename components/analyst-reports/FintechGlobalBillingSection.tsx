"use client";

import React from "react";
import { motion } from "framer-motion";

export default function FintechGlobalBillingSection() {
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
          {/* Image Container - Left Side (col-span-5) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-[480px] h-auto overflow-hidden rounded-[5px]">
              <img
                src="/analyst-reports/5.png"
                alt="Two corporate professionals reviewing digital billing analytics on tablets"
                className="w-full h-auto object-cover block rounded-[5px]"
              />
            </div>
          </motion.div>

          {/* Text Content Block - Right Side (col-span-7) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 space-y-4 text-left"
          >
            <h3 className="text-2xl sm:text-3xl md:text-[2.25rem] font-bold text-[#111827] leading-tight">
              Fintech &amp; Global <br />
              Billing Infrastructure
            </h3>

            <p className="text-[#6B7280] text-sm sm:text-base font-normal leading-relaxed max-w-xl">
              Industry briefings on digital payments, tax-compliant billing, and
              cross-border financial infrastructure. ZoikoNex&trade; is
              highlighted as a revenue engine built to address regulatory
              complexity, real-time billing events, and multi-currency
              monetization.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
