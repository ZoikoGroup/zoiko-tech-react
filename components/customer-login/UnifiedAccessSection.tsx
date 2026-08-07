"use client";

import React from "react";
import { motion } from "framer-motion";

export default function UnifiedAccessSection() {
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

  const platforms = [
    {
      name: "ZoikoNex™",
      description:
        "Telecom subscriber lifecycle management, mediation reports, real-time billing, invoicing, and dispute resolution dashboards",
    },
    {
      name: "ZoikoSuite™",
      description:
        "Payroll operations, accounting workflows, tax compliance automation, and HR systems integration",
    },
    {
      name: "ZoikoAssure™",
      description:
        "Legal document workflows, smart contract approvals, risk reports, and regulatory audit trails",
    },
    {
      name: "ZoikoPal™",
      description:
        "Elder wellness updates, behavior analytics, emotional AI insights, and caregiver coordination tools",
    },
    {
      name: "ZoikoTime™",
      description:
        "Time tracking dashboards, productivity scoring, trend analytics, and attendance summaries",
    },
    {
      name: "BookingOrbit™",
      description:
        "Scheduling interfaces, service routing engines, booking logs, and client engagement workflows",
    },
    {
      name: "DriverXtra",
      description:
        "Driver wallet data, insurance interfaces, vehicle diagnostics, gig-economy analytics, and support transactions",
    },
  ];

  return (
    <section className="w-full bg-white text-[#1D1D1F] pb-24 px-6 sm:px-12 md:px-16 lg:px-24 font-sans antialiased overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-8 text-left"
        >
          {/* Main Title */}
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-[2rem] font-bold text-[#111827] leading-tight"
          >
            Unified Access Across All ZoikoTech Platforms
          </motion.h2>

          {/* Platforms List */}
          <div className="space-y-3 pt-2">
            {platforms.map((platform, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="text-sm sm:text-base leading-relaxed text-[#272727]"
              >
                <span className="font-medium text-[#111827]">
                  {platform.name}
                </span>
                {" \u2013 "}
                <span>{platform.description}</span>
              </motion.div>
            ))}
          </div>

          {/* Closing Summary Paragraph */}
          <motion.p
            variants={itemVariants}
            className="text-[#272727] text-sm sm:text-base font-normal leading-relaxed pt-6"
          >
            All logins are synchronized across platforms for single-point access
            &mdash; optimized for enterprise IT governance and user-level
            configurability.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
