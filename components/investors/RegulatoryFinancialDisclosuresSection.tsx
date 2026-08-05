"use client";

import React from "react";
import { motion } from "framer-motion";

export default function RegulatoryFinancialDisclosuresSection() {
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
    <>IFRS and GAAP accounting standards (where jurisdictionally applicable)</>,
    <>
      Tax transparency and statutory compliance across the United States, United
      Kingdom, and Asia-Pacific
    </>,
    <>
      GDPR, CCPA, and data sovereignty mandates governing platform operations
    </>,
    <>
      Sector-specific requirements for telecom, public-sector SaaS, eldercare
      platforms, and financial automation tools
    </>,
  ];

  return (
    <section className="w-full bg-[#F0F0F0] text-[#1D1D1F] py-24 px-6 sm:px-12 md:px-16 lg:px-24 font-sans antialiased overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          {/* Image Container - Left Side (col-span-5) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-[480px] h-auto overflow-hidden rounded-[5px]">
              <img
                src="/investors/2.png"
                alt="Desktop displaying financial analytics with computer, calculator, and phone on desk"
                className="w-full h-auto object-cover block rounded-xl"
              />
            </div>
          </motion.div>

          {/* Text Content Block - Right Side (col-span-7) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              <motion.h2
                variants={itemVariants}
                className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111827] leading-[1.18]"
              >
                Regulatory &amp; Financial Disclosures
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-[#6B7280] text-sm sm:text-base font-normal leading-relaxed"
              >
                ZoikoTech adheres to rigorous financial governance and
                cross-border regulatory protocols. Our disclosures align with:
              </motion.p>
            </div>

            {/* Checklist items */}
            <div className="space-y-4 pt-1">
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

            {/* Bottom Paragraph */}
            <motion.p
              variants={itemVariants}
              className="text-[#6B7280] text-sm sm:text-base font-normal leading-relaxed pt-2"
            >
              Audited financials, sustainability metrics, tax positions, and
              risk registers are available upon request to eligible
              institutional partners and diligence-approved investors.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
