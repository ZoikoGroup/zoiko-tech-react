"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AnalystReportsMarketTrendsSection() {
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
    <section className="w-full text-[#1D1D1F] py-24 px-6 sm:px-12 md:px-16 lg:px-40 font-sans antialiased overflow-hidden">
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
            Analyst Reports &amp; Market Trends
          </motion.h2>

          {/* Paragraph Content */}
          <div className="space-y-4 text-[#6B7280] text-sm sm:text-base font-normal leading-relaxed">
            <motion.p variants={itemVariants}>
              At ZoikoTech, we don&rsquo;t simply react to market trends &mdash;
              we anticipate them, shape them, and build infrastructure around
              them. Our Analyst Reports &amp; Market Trends deliver timely,
              strategic, and deeply contextual intelligence on the shifts
              shaping regulated industries worldwide.
            </motion.p>

            <motion.p variants={itemVariants}>
              Through our Strategic Intelligence Lab (ZSIL), we curate original
              research, cross-sector analysis, and regulatory foresight &mdash;
              empowering investors, policymakers, institutional analysts, and
              transformation leaders to make confident, data-informed decisions
              in volatile and compliance-intensive markets.
            </motion.p>

            <motion.p variants={itemVariants}>
              Our insights are anchored in active deployments across telecom,
              fintech, AI-powered wellness, public infrastructure, and
              compliance automation &mdash; giving ZoikoTech a unique vantage
              point on what&rsquo;s next.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
