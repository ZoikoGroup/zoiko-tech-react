"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PrivacyPolicySection() {
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

  const complianceFrameworks = [
    "The General Data Protection Regulation (GDPR) – European Union",
    "The California Consumer Privacy Act (CCPA) – United States",
    "The UK Data Protection Act 2018",
    "Applicable regional and sector-specific data protection laws relevant to telecommunications, SaaS, compliance, and public-sector infrastructure",
  ];

  const collectionReasons = [
    "Authentication and identity verification for secure platform access",
    "Transaction data for billing, provisioning, and audit compliance",
    "Usage analytics to optimize performance, reliability, and user experience",
    "Communication logs for customer support and regulatory record-keeping",
    "Enterprise configuration data for deployment, integration, and automation",
  ];

  return (
    <section className="w-full bg-white text-[#1D1D1F] py-24 px-6 sm:px-12 md:px-16 lg:px-24 font-sans antialiased overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-12 text-left"
        >
          {/* Section 1: Privacy Policy */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold text-[#111827] leading-tight">
                Privacy Policy
              </h2>

              <p className="text-[#272727] text-sm sm:text-base font-normal leading-relaxed">
                At ZoikoTech, privacy is more than a regulatory mandate &mdash;
                it is a foundational commitment embedded into every product,
                platform, and partnership we deliver. We engineer our systems to
                uphold the highest standards of data protection, regulatory
                compliance, and digital dignity across all jurisdictions.
              </p>

              <p className="text-[#272727] text-sm sm:text-base font-normal leading-relaxed pt-1">
                Our Privacy Policy governs how we collect, use, store, and
                safeguard personal and enterprise data in accordance with
                leading international frameworks, including:
              </p>
            </div>

            {/* Checklist Items */}
            <div className="space-y-3 pt-1">
              {complianceFrameworks.map((text, idx) => (
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
          </motion.div>

          {/* Section 2: Data Collection & Usage */}
          <motion.div variants={itemVariants} className="space-y-6 pt-4">
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold text-[#111827] leading-tight">
                Data Collection &amp; Usage
              </h2>

              <p className="text-[#272727] text-sm sm:text-base font-normal leading-relaxed">
                ZoikoTech collects data only for lawful, transparent, and
                purpose-driven reasons. This includes:
              </p>
            </div>

            {/* Checklist Items */}
            <div className="space-y-3 pt-1">
              {collectionReasons.map((text, idx) => (
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
              We do not sell, lease, or trade personal or enterprise data under
              any circumstance.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
