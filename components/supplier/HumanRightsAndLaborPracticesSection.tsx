"use client";

import React from "react";
import { motion } from "framer-motion";

export default function HumanRightsAndLaborPracticesSection() {
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

  const humanRightsDeclarations = [
    "The Universal Declaration of Human Rights",
    "The UN Guiding Principles on Business and Human Rights",
    "The International Labour Organization's Core Conventions",
  ];

  const supplierRequirements = [
    "Prohibit the use of child labor, forced labor, or human trafficking",
    "Provide safe, hygienic, and secure working conditions",
    "Respect employees' right to freedom of association and collective bargaining",
    "Promote diversity, equity, and inclusion at all levels of employment",
    "Enforce non-discrimination in hiring, compensation, and promotion practices",
  ];

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
          {/* Section Heading & Subtext */}
          <motion.div variants={itemVariants} className="space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-[2rem] font-bold text-[#111827] leading-tight">
              2. Human Rights, Labor Practices &amp; Inclusion
            </h2>

            <p className="text-[#272727] text-sm sm:text-base font-normal leading-relaxed">
              ZoikoTech requires all suppliers to uphold internationally
              recognized human rights, as outlined in:
            </p>
          </motion.div>

          {/* First Dash Bullet List */}
          <div className="space-y-2 pt-1">
            {humanRightsDeclarations.map((text, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="flex items-start gap-2"
              >
                <span className="text-[#272727] text-sm sm:text-base font-normal leading-relaxed">
                  -
                </span>
                <p className="text-[#272727] text-sm sm:text-base leading-relaxed">
                  {text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Second Sub-section Header */}
          <motion.div variants={itemVariants} className="pt-4 space-y-3">
            <p className="text-[#111827] text-sm sm:text-base font-bold leading-relaxed">
              Suppliers must:
            </p>

            {/* Second Dash Bullet List */}
            <div className="space-y-2 pt-1">
              {supplierRequirements.map((text, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="flex items-start gap-2"
                >
                  <span className="text-[#272727] text-sm sm:text-base font-normal leading-relaxed">
                    -
                  </span>
                  <p className="text-[#272727] text-sm sm:text-base leading-relaxed">
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Closing Paragraph */}
          <motion.p
            variants={itemVariants}
            className="text-[#272727] text-sm sm:text-base font-normal leading-relaxed pt-2"
          >
            We encourage suppliers to adopt inclusive hiring and accessibility
            practices that mirror ZoikoTech&apos;s culture of innovation through
            diversity.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
