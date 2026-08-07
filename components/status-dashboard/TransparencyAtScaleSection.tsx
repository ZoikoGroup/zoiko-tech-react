"use client";

import React from "react";
import { motion } from "framer-motion";

export default function TransparencyAtScaleSection() {
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
    <section className="w-full bg-white text-[#1D1D1F] pb-24 px-6 sm:px-12 md:px-16 lg:px-24 font-sans antialiased overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-6 text-left"
        >
          {/* Main Title */}
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-[2.25rem] font-bold text-[#111827] leading-tight"
          >
            Designed for Transparency at Scale
          </motion.h2>

          {/* Body Paragraphs */}
          <motion.div
            variants={itemVariants}
            className="space-y-4 text-[#4B5563] text-sm sm:text-base font-normal leading-relaxed"
          >
            <p>
              Our Status Dashboard isn&apos;t just a support tool &mdash;
              it&apos;s a strategic visibility platform that empowers developers
              and organizations to stay ahead of issues, reduce MTTR, and
              maintain confidence in every integration, deployment, and
              transaction.
            </p>

            <p>
              Stay informed. Stay connected. Stay resilient &mdash; with the
              ZoikoTech Status Dashboard.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
