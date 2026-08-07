"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ResponsibleInnovationSection() {
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
    "ISO/IEC 27001, SOC 2, and HIPAA-aligned simulation frameworks",
    "Full GDPR and CCPA compliance with data minimization and audit traceability",
    "Secure environments for bias detection, AI explainability testing, and cross-border legal workflow trials",
  ];

  return (
    <section className="w-full bg-white text-[#1D1D1F] py-24 px-6 sm:px-12 md:px-16 lg:px-24 font-sans antialiased overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-12"
        >
          {/* Top Section: Grid with Image and Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Direct Image */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-6 flex justify-center items-center"
            >
              <img
                src="/sandbox-access/4.png"
                alt="Purpose-Built for Responsible Innovation"
                className="w-full h-auto rounded-2xl"
              />
            </motion.div>

            {/* Right Column: Title, Intro & Checkmark List */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-6 space-y-6 text-left"
            >
              <h2 className="text-2xl sm:text-3xl md:text-[2.25rem] font-bold text-[#111827] leading-tight">
                Purpose-Built for Responsible Innovation
              </h2>

              <p className="text-xs sm:text-sm text-[#4B5563] font-normal leading-relaxed">
                ZoikoTech&apos;s sandboxes are developed in accordance with the
                world&apos;s most stringent privacy and security mandates:
              </p>

              <div className="space-y-3 pt-1">
                {points.map((text, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#56B810] flex items-center justify-center mt-0.5">
                      <svg
                        className="w-3.5 h-3.5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-xs sm:text-sm text-[#374151] leading-relaxed font-normal">
                      {text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom Divider & Footer Text */}
          <motion.div
            variants={itemVariants}
            className="pt-8 border-t border-gray-100"
          >
            <p className="text-xs sm:text-sm text-[#6B7280] font-normal leading-relaxed">
              Developers, regulators, and partners alike use ZoikoTech sandboxes
              to accelerate deployment, de-risk innovation, and uphold
              compliance from day one. This is your proving ground for
              intelligent, scalable, and responsible technology.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
