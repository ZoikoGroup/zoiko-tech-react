"use client";

import React from "react";
import { motion } from "framer-motion";

export default function InvestorRelationsDisclosuresSection() {
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
    <section className="w-full text-[#1D1D1F] py-24 px-6 sm:px-12 md:px-16 lg:px-24 font-sans antialiased overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Main Title */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold tracking-tight text-[#111827] leading-[1.18]"
          >
            Investor Relations &amp; Disclosures
          </motion.h2>

          {/* Paragraph Content */}
          <div className="space-y-4 text-[#6B7280] text-sm sm:text-base font-normal leading-relaxed">
            <motion.p variants={itemVariants}>
              At ZoikoTech, we believe that long-term enterprise value is
              created through transparency, resilience, innovation, and
              purposeful execution. Our Investor Relations &amp; Disclosures
              portal serves as a strategic touchpoint for stakeholders seeking
              to understand our business performance, growth strategy, and
              governance standards.
            </motion.p>

            <motion.p variants={itemVariants}>
              We welcome engagement from institutional investors, family
              offices, sovereign partners, development finance institutions,
              venture funds, and strategic co-builders aligned with our mission:
              to power secure, scalable, and compliance-driven digital
              infrastructure for regulated industries worldwide.
            </motion.p>

            <motion.p variants={itemVariants}>
              Whether you&rsquo;re launching a multi-jurisdictional MVNO,
              digitizing government services, or engineering AI-powered
              solutions for underserved communities &mdash; our thought
              leadership is designed to guide policy and practice.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
