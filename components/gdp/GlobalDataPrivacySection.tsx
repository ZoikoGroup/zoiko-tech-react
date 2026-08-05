"use client";

import React from "react";
import { motion } from "framer-motion";

export default function GlobalDataPrivacySection() {
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

  const regulatoryFrameworks = [
    "The General Data Protection Regulation (GDPR) – European Union",
    "The California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA) – United States",
    "The UK GDPR and the Data Protection Act 2018 – United Kingdom",
    "Brazil’s Lei Geral de Proteção de Dados (LGPD)",
    "Canada’s Personal Information Protection and Electronic Documents Act (PIPEDA)",
    "Singapore’s Personal Data Protection Act (PDPA)",
    "India’s Digital Personal Data Protection Act (DPDP)",
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
          {/* Section 1: Global Data Privacy */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold text-[#111827] leading-tight">
              Global Data Privacy (GDPR, CCPA)
            </h1>

            <div className="space-y-4 text-[#272727] text-sm sm:text-base font-normal leading-relaxed">
              <p>
                At ZoikoTech, data privacy is a foundational principle woven
                into the core of our technology, infrastructure, and governance
                practices. As a multinational provider of AI-powered software,
                telecom platforms, and compliance automation tools, we operate
                in full alignment with the world&rsquo;s most advanced data
                protection regulations.
              </p>

              <p>
                Our global privacy program ensures that our platforms are
                secure, auditable, and jurisdiction-aware &mdash; enabling our
                clients, partners, and users to operate confidently in regulated
                markets.
              </p>
            </div>
          </motion.div>

          {/* Section 2: Regulatory Alignment */}
          <motion.div variants={itemVariants} className="space-y-6 pt-2">
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl md:text-[2rem] font-bold text-[#111827] leading-tight">
                Regulatory Alignment
              </h2>

              <p className="text-[#272727] text-sm sm:text-base font-normal leading-relaxed">
                We comply with a comprehensive set of global privacy laws,
                including but not limited to:
              </p>
            </div>

            {/* List Items */}
            <div className="space-y-3 pt-1">
              {regulatoryFrameworks.map((text, idx) => (
                <motion.div key={idx} variants={itemVariants} className="pl-1">
                  <p className="text-[#272727] text-sm sm:text-base leading-relaxed">
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>

            <p className="text-[#272727] text-sm sm:text-base font-normal leading-relaxed pt-2">
              We continuously monitor and adapt to regional updates and
              cross-border data transfer requirements to ensure sustained
              compliance.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
