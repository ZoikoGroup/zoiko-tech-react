"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PlatformAccessibilityFeaturesSection() {
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

  const accessibilityFeatures = [
    "Keyboard-friendly navigation across interfaces",
    "Screen reader support with proper ARIA landmarks",
    "Text scaling and high-contrast display modes",
    "Descriptive alt-text for visual media",
    "Intuitive form labels and accessible input feedback",
    "Multilingual toggle and language adaptation",
    "Accessible tables, charts, and data visualizations",
  ];

  return (
    <section className="w-full text-[#1D1D1F] pb-24 px-6 sm:px-12 md:px-16 lg:px-24 font-sans antialiased overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-12 text-left"
        >
          {/* Section: Platform-Level Accessibility Features */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold text-[#111827] leading-tight">
                Platform-Level Accessibility Features
              </h2>

              <p className="text-[#272727] text-sm sm:text-base font-normal leading-relaxed">
                Our systems incorporate accessibility features at the
                infrastructure, UI/UX, and content levels, including:
              </p>

              <p className="text-[#272727] text-sm sm:text-base font-normal leading-relaxed pt-1">
                Our platforms include:
              </p>
            </div>

            {/* Checklist Items */}
            <div className="space-y-3 pt-1">
              {accessibilityFeatures.map((text, idx) => (
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
                  <p className="text-[#272727] text-sm sm:text-base leading-relaxed">
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>

            <p className="text-[#272727] text-sm sm:text-base font-normal leading-relaxed pt-2">
              These features are built directly into our development frameworks
              and refined through inclusive user testing cycles.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
