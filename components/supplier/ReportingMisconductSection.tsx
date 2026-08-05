"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ReportingMisconductSection() {
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

  const reportingConcerns = [
    "Fraud, bribery, or corruption",
    "Discrimination or harassment",
    "Unsafe working conditions",
    "Environmental violations",
    "Breaches of confidentiality",
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
          {/* Section Heading & Introductory Paragraph */}
          <motion.div variants={itemVariants} className="space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-[2rem] font-bold text-[#111827] leading-tight">
              7. Reporting Misconduct
            </h2>

            <p className="text-[#272727] text-sm sm:text-base font-normal leading-relaxed">
              ZoikoTech provides a secure, anonymous Ethics Reporting Channel
              for suppliers and their employees to report concerns about:
            </p>
          </motion.div>

          {/* Dash Bullet List */}
          <div className="space-y-2 pt-1">
            {reportingConcerns.map((text, idx) => (
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

          {/* Contact Information & Additional Paragraphs */}
          <motion.div variants={itemVariants} className="space-y-4 pt-2">
            <div className="space-y-1 text-[#272727] text-sm sm:text-base font-normal leading-relaxed">
              <p>
                Email:{" "}
                <a
                  href="mailto:ethics@zoikotech.com"
                  className="hover:underline transition-colors"
                >
                  ethics@zoikotech.com
                </a>
              </p>
              <p>Phone (Toll-Free USA): 800-484-5564</p>
            </div>

            <p className="text-[#272727] text-sm sm:text-base font-normal leading-relaxed pt-2">
              We take all reports seriously. No individual will face retaliation
              for raising concerns in good faith.
            </p>

            <p className="text-[#272727] text-sm sm:text-base font-normal leading-relaxed pt-2">
              By working with ZoikoTech, each supplier affirms their
              understanding of and commitment to this Code of Conduct. Upholding
              these principles protects our mutual reputation, strengthens our
              partnerships, and enables us to build a smarter, more ethical
              digital future together.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
