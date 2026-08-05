"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PrivacyByDesignAndSubjectRightsSection() {
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

  const designPrinciples = [
    "Role-based access controls and dynamic data permissions",
    "Jurisdiction-specific data flows and data residency logic",
    "Consent capture modules and real-time opt-out mechanisms",
    "Full data audit trails, encryption at rest and in transit",
    "Segregated environments for government, financial, and health data",
  ];

  const subjectRights = [
    {
      title: "Right to Access:",
      desc: "Obtain a copy of personal data we hold",
    },
    {
      title: "Right to Rectification:",
      desc: "Request corrections to inaccurate information",
    },
    {
      title: "Right to Erasure:",
      desc: 'Request deletion of personal data ("Right to be forgotten")',
    },
    {
      title: "Right to Restrict Processing:",
      desc: "Pause certain uses of data",
    },
    {
      title: "Right to Data Portability:",
      desc: "Receive data in structured digital formats",
    },
    {
      title: "Right to Object:",
      desc: "Challenge or opt-out of certain processing activities",
    },
    {
      title: "Right to Withdraw Consent:",
      desc: "At any time, without penalty",
    },
    { title: "Right to Avoid Automated Decisions:", desc: "Where applicable" },
  ];

  return (
    <section className="w-full bg-white text-[#1D1D1F] pb-24 px-6 sm:px-12 md:px-16 lg:px-24 font-sans antialiased overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-12 text-left"
        >
          {/* Section 1: Privacy-by-Design Engineering */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold text-[#111827] leading-tight">
                Privacy-by-Design Engineering
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
              {designPrinciples.map((text, idx) => (
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

          {/* Section 2: Data Subject Rights */}
          <motion.div variants={itemVariants} className="space-y-6 pt-4">
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold text-[#111827] leading-tight">
                Data Subject Rights
              </h2>

              <p className="text-[#272727] text-sm sm:text-base font-normal leading-relaxed">
                We empower individuals to exercise all rights provided under
                global data protection laws, including:
              </p>

              <p className="text-[#272727] text-sm sm:text-base font-normal leading-relaxed pt-1">
                Our platforms include:
              </p>
            </div>

            {/* Checklist Items with Bold Titles */}
            <div className="space-y-3 pt-1">
              {subjectRights.map((item, idx) => (
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
                    <span className="font-bold text-[#111827]">
                      {item.title}
                    </span>{" "}
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <p className="text-[#272727] text-sm sm:text-base font-normal leading-relaxed pt-2">
              To submit a data rights request, contact our Data Privacy Office
              at:{" "}
              <a
                href="mailto:privacy@zoikotech.com"
                className="text-[#0070BB] hover:underline transition-colors"
              >
                privacy@zoikotech.com
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
