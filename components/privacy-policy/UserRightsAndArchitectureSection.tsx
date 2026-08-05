"use client";

import React from "react";
import { motion } from "framer-motion";

export default function UserRightsAndArchitectureSection() {
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

  const userRights = [
    "The right to access and correct personal information",
    "The right to request erasure or restriction of processing",
    "The right to data portability",
    "The right to withdraw consent for data processing",
    "The right to file complaints with data protection authorities",
  ];

  const architectureControls = [
    "Role- and jurisdiction-based data access management",
    "Configurable audit trails for data interactions",
    "User-consent frameworks and opt-in/opt-out settings",
    "Automated alerts for data access anomalies and misuse",
    "Integration of AI-based monitoring to ensure proactive privacy enforcement",
  ];

  return (
    <section className="w-full bg-white text-[#1D1D1F] py-24 px-6 sm:px-12 md:px-16 lg:px-24 font-sans antialiased overflow-hidden relative">
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-12 text-left"
        >
          {/* Section 1: User Rights & Data Access */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold text-[#111827] leading-tight">
                User Rights &amp; Data Access
              </h2>

              <p className="text-[#272727] text-sm sm:text-base font-normal leading-relaxed">
                ZoikoTech upholds all user rights established under applicable
                law, including:
              </p>
            </div>

            {/* Checklist Items */}
            <div className="space-y-3 pt-1">
              {userRights.map((text, idx) => (
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

            <div className="text-[#272727] text-sm sm:text-base font-normal leading-relaxed pt-2 space-y-1">
              <p>
                Privacy-related requests can be submitted to:{" "}
                <a
                  href="mailto:privacy@zoikotech.com"
                  className="text-[#0070BB] hover:underline transition-colors"
                >
                  privacy@zoikotech.com
                </a>
              </p>
              <p>
                We respond in compliance with statutory timelines for each
                jurisdiction.
              </p>
            </div>
          </motion.div>

          {/* Section 2: Privacy-First Platform Architecture */}
          <motion.div variants={itemVariants} className="space-y-6 pt-4">
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold text-[#111827] leading-tight">
                Privacy-First Platform Architecture
              </h2>

              <p className="text-[#272727] text-sm sm:text-base font-normal leading-relaxed">
                All ZoikoTech platforms are built with embedded privacy controls
                that include:
              </p>
            </div>

            {/* Checklist Items */}
            <div className="space-y-3 pt-1">
              {architectureControls.map((text, idx) => (
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
              Our systems undergo regular third-party audits and internal
              compliance reviews to maintain the trust of regulators, clients,
              and users worldwide.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
