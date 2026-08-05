"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SecureInvestorAccessSection() {
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

  const points = [
    "Investment presentations, board-level insights, and internal briefings",
    "Market traction dashboards and product roadmap previews",
    "Strategic investment or co-development opportunities within the ZoikoTech and Zoiko",
  ];

  return (
    <section className="w-full bg-white text-[#1D1D1F] py-24 px-6 sm:px-12 md:px-16 lg:px-24 font-sans antialiased overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Header Block */}
          <div className="space-y-4">
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold tracking-tight text-[#111827] leading-[1.18]"
            >
              Secure Investor Access
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-[#6B7280] text-sm sm:text-base font-normal leading-relaxed"
            >
              Qualified investors may request secure access to:
            </motion.p>
          </div>

          {/* Checklist items */}
          <div className="space-y-3 pt-1">
            {points.map((text, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="flex items-start gap-3"
              >
                <div className="flex-shrink-0 mt-1">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="10" cy="10" r="10" fill="#56B810" />
                    <path
                      d="M6 10L9 13L14 7"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed">
                  {text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Subtext Paragraph */}
          <motion.div variants={itemVariants} className="pt-2 space-y-1">
            <p className="text-[#6B7280] font-semibold text-sm sm:text-base">
              Group ecosystem
            </p>
            <p className="text-[#6B7280] text-sm sm:text-base font-normal leading-relaxed">
              Access is governed by multi-layered authentication, non-disclosure
              protocols, and institutional investor qualification standards.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
