"use client";

import React from "react";
import { motion } from "framer-motion";

export default function StatusDashboardSection() {
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
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-6 text-left"
        >
          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold text-[#111827] leading-tight"
          >
            Status Dashboard
          </motion.h1>

          {/* Body Paragraphs */}
          <motion.div
            variants={itemVariants}
            className="space-y-4 text-[#272727] text-sm sm:text-base font-normal leading-relaxed"
          >
            <p>
              Operational integrity and trust are core to ZoikoTech&apos;s
              promise to our customers and partners. The ZoikoTech Status
              Dashboard delivers real-time transparency into the uptime, health,
              and performance of all core services &mdash; empowering
              developers, IT teams, and enterprise clients to monitor
              mission-critical systems with confidence.
            </p>

            <p>
              Across telecom, fintech, healthtech, AI, and productivity
              platforms, our dashboard is engineered for proactive
              observability, global visibility, and 24/7 resilience.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
