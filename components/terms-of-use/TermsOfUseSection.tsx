"use client";

import React from "react";
import { motion } from "framer-motion";

export default function TermsOfUseSection() {
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

  const prohibitedActivities = [
    "Use ZoikoTech Services to violate any local, national, or international regulation",
    "Engage in unauthorized access, reverse-engineering, or data scraping",
    "Introduce malware, bots, or other automated systems that degrade service performance",
    "Exploit or misuse the platform for fraud, manipulation, disinformation, or unlawful surveillance",
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
          {/* Section 1: Header / Introductory Legal Text */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold text-[#111827] leading-tight">
              Terms of Use
            </h1>

            <div className="space-y-4 text-[#272727] text-sm sm:text-base font-normal leading-relaxed">
              <p>
                By accessing or using any ZoikoTech platform, website, API, or
                service (collectively the &ldquo;Services&rdquo;), you agree to
                be bound by these Terms of Use. These Terms form a legal
                agreement between you and ZoikoTech Inc.
                (&ldquo;ZoikoTech&rdquo;), a U.S.-based global technology
                company providing AI-powered SaaS, telecom infrastructure,
                compliance automation, and public-sector digital transformation
                solutions.
              </p>

              <p>
                These Terms apply to all users, clients, partners, developers,
                and third-party integrators, and are subject to applicable
                jurisdictional laws.
              </p>
            </div>
          </motion.div>

          {/* Section 2: 1. Use of Services */}
          <motion.div variants={itemVariants} className="space-y-6 pt-2">
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl md:text-[2rem] font-bold text-[#111827] leading-tight">
                1. Use of Services
              </h2>

              <p className="text-[#272727] text-sm sm:text-base font-normal leading-relaxed">
                You agree to use ZoikoTech Services in a lawful, secure, and
                professional manner that aligns with applicable laws and
                regulatory frameworks.
              </p>
            </div>

            {/* Checklist Items */}
            <div className="space-y-3 pt-1">
              {prohibitedActivities.map((text, idx) => (
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
              ZoikoTech reserves the right to suspend access or terminate
              accounts without prior notice in the event of suspected abuse,
              breach, or legal obligation.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
