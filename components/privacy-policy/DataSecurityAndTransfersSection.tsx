"use client";

import React from "react";
import { motion } from "framer-motion";

export default function DataSecurityAndTransfersSection() {
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

  const transferMechanisms = [
    "Standard Contractual Clauses (SCCs)",
    "Data Processing Agreements (DPAs)",
    "Binding Corporate Rules (BCRs)",
    "Region-specific certification frameworks and bilateral agreements",
  ];

  return (
    <section className="w-full bg-white text-[#1D1D1F] px-6 sm:px-12 md:px-16 lg:px-24 font-sans antialiased overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-12 text-left"
        >
          {/* Section 1: Data Security & Retention */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold text-[#111827] leading-tight">
              Data Security &amp; Retention
            </h2>

            <div className="space-y-4 text-[#272727] text-sm sm:text-base font-normal leading-relaxed">
              <p>
                ZoikoTech employs military-grade encryption, distributed
                storage, role-based access control, tokenized identifiers, and
                intrusion detection systems to protect client and user data.
              </p>

              <p>
                Data retention periods are defined by regulatory obligations,
                contract terms, and operational requirements &mdash; and are
                reviewed periodically to ensure alignment with international
                standards.
              </p>
            </div>
          </motion.div>

          {/* Section 2: Cross-Border Data Transfers */}
          <motion.div variants={itemVariants} className="space-y-6 pt-4">
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold text-[#111827] leading-tight">
                Cross-Border Data Transfers
              </h2>

              <p className="text-[#272727] text-sm sm:text-base font-normal leading-relaxed">
                ZoikoTech facilitates secure international data transfers using:
              </p>
            </div>

            {/* Checklist Items */}
            <div className="space-y-3 pt-1">
              {transferMechanisms.map((text, idx) => (
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
              These legal safeguards ensure that cross-border transfers maintain
              the same level of protection as required within each user&rsquo;s
              jurisdiction.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
