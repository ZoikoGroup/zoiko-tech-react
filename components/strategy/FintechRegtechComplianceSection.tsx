"use client";

import React from "react";
import { motion } from "framer-motion";

export default function FintechRegtechComplianceSection() {
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
    <section className="w-full bg-[#0070BB14] text-[#1D1D1F] py-24 px-6 sm:px-12 md:px-16 lg:px-24 font-sans antialiased overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
        >
          {/* Image Container - Left Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full flex justify-center lg:justify-start lg:pr-4"
          >
            <div className="relative w-full max-w-[600px] aspect-[4/3] overflow-hidden rounded-[8px]">
              <img
                src="/strategy/5.png"
                alt="Business professional presenting compliance and financial strategy on whiteboard during team meeting"
                className="w-full h-full object-cover object-center block"
              />
            </div>
          </motion.div>

          {/* Text Content Block - Right Side */}
          <motion.div variants={itemVariants} className="space-y-6 text-left">
            <h3 className="text-2xl sm:text-3xl md:text-[2.25rem] font-bold text-[#111827] leading-tight">
              Fintech, RegTech &amp; <br />
              Compliance Innovators
            </h3>

            <p className="text-[#6B7280] text-sm sm:text-base font-normal leading-relaxed">
              We integrate with digital payment, KYC/AML, and audit trail
              providers to enhance platforms such as ZoikoSuite&trade;,
              BookingOrbit&trade;, and ZoikoNex&trade; &mdash; bringing
              automation and accountability to financial, HR, and legal
              operations across sectors.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
