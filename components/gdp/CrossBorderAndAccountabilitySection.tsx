"use client";

import React from "react";
import { motion } from "framer-motion";

export default function CrossBorderAndAccountabilitySection() {
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

  const crossBorderFeatures = [
    "Standard Contractual Clauses (SCCs) approved by the European Commission",
    "UK Addendum and Swiss Addendum agreements",
    "Binding Data Processing Agreements (DPAs) with all subprocessors",
    "Technical and Organizational Measures (TOMs) aligned with EDPB guidance",
    "Multi-region cloud deployments with optional in-country data residency",
  ];

  const accountabilityFeatures = [
    "Data Protection Impact Assessments (DPIAs)",
    "Internal privacy risk audits and third-party readiness reviews",
    "Staff training and role-based compliance certifications",
    "Privacy-by-default configurations on all major platforms",
  ];

  const clientRequests = [
    "Copies of security white papers and privacy certifications",
    "Processor/sub-processor records",
    "Immediate breach notification as required under GDPR Article 33 and CCPA timelines",
  ];

  return (
    <section className="w-full bg-white text-[#1D1D1F] pb-24 px-6 sm:px-12 md:px-16 lg:px-24 font-sans antialiased overflow-hidden relative">
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-12 text-left"
        >
          {/* Section 1: Cross-Border Transfers & Jurisdictional Safeguards */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl md:text-[2rem] font-bold text-[#111827] leading-tight">
                Cross-Border Transfers &amp; Jurisdictional Safeguards
              </h2>

              <p className="text-[#272727] text-sm sm:text-base font-normal leading-relaxed">
                Every ZoikoTech product &mdash; from ZoikoNex&trade; (telecom
                billing and revenue engine) to ZoikoAssure&trade; (compliance
                automation), ZoikoPal&trade; (eldercare AI), and
                BookingOrbit&trade; (AI-powered government and event platform)
                &mdash; is built using Privacy-by-Design and Privacy-by-Default
                principles.
              </p>

              <p className="text-[#272727] text-sm sm:text-base font-normal leading-relaxed pt-1">
                Our platforms include:
              </p>
            </div>

            {/* Checklist Items */}
            <div className="space-y-3 pt-1">
              {crossBorderFeatures.map((text, idx) => (
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
              All third-party subprocessors are audited for privacy, security,
              and contractual conformity.
            </p>
          </motion.div>

          {/* Section 2: Accountability, Transparency & Client Trust */}
          <motion.div variants={itemVariants} className="space-y-6 pt-2">
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl md:text-[2rem] font-bold text-[#111827] leading-tight">
                Accountability, Transparency &amp; Client Trust
              </h2>

              <p className="text-[#272727] text-sm sm:text-base font-normal leading-relaxed">
                ZoikoTech maintains a robust Data Processing Inventory and
                regularly conducts:
              </p>

              <p className="text-[#272727] text-sm sm:text-base font-normal leading-relaxed pt-1">
                Our platforms include:
              </p>
            </div>

            {/* Checklist Items */}
            <div className="space-y-3 pt-1">
              {accountabilityFeatures.map((text, idx) => (
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

            {/* Bulleted Client Requests */}
            <div className="space-y-3 pt-4">
              <p className="text-[#272727] text-sm sm:text-base font-normal leading-relaxed">
                Clients may request:
              </p>
              <ul className="space-y-2 pl-6 list-disc text-[#272727] text-sm sm:text-base leading-relaxed">
                {clientRequests.map((text, idx) => (
                  <li key={idx}>{text}</li>
                ))}
              </ul>
            </div>

            <p className="text-[#272727] text-sm sm:text-base font-normal leading-relaxed pt-4">
              Our privacy architecture is designed to support enterprises,
              governments, NGOs, and compliance-intensive institutions across
              all industries we serve.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
