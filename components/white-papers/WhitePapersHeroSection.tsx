"use client";

import React from "react";
import { motion } from "framer-motion";

export default function WhitePapersHeroSection() {
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
          className="space-y-6 max-w-6xl"
        >
          {/* Main Section Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-[3.25rem] font-bold tracking-tight text-[#111827] leading-[1.12]"
          >
            White Papers <br />
            &amp; Technical Briefs
          </motion.h1>

          {/* Core Value Proposition Paragraph */}
          <motion.p
            variants={itemVariants}
            className="text-[#4B5563] text-base sm:text-lg font-medium leading-relaxed"
          >
            At ZoikoTech, knowledge is infrastructure. Our White Papers &amp;
            Technical Briefs distill real-world experience, regulatory depth,
            and enterprise transformation insights into clear, action-oriented
            guidance for decision-makers across regulated industries.
          </motion.p>

          {/* Strategic Intelligence Lab Context */}
          <motion.p
            variants={itemVariants}
            className="text-[#6B7280] text-sm sm:text-base font-normal leading-relaxed"
          >
            Through the ZoikoTech Strategic Intelligence Lab (ZSIL), we publish
            high-impact, rigorously developed papers on the convergence of AI,
            compliance, fintech, public infrastructure, and scalable telecom
            systems. These resources are tailored for CIOs, CTOs, compliance
            executives, legal architects, and digital transformation leads
            &mdash; and are used in advisory, procurement, and implementation
            settings across the globe.
          </motion.p>

          {/* Closing Perspective Paragraph */}
          <motion.p
            variants={itemVariants}
            className="text-[#6B7280] text-sm sm:text-base font-normal leading-relaxed pt-2"
          >
            Whether you&apos;re launching a multi-jurisdictional MVNO,
            digitizing government services, or engineering AI-powered solutions
            for underserved communities &mdash; our thought leadership is
            designed to guide policy and practice.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
