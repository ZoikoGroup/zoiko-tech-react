"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SupplierCodeOfConductSection() {
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

  const compliancePoints = [
    "Anti-bribery and anti-corruption laws (e.g., U.S. Foreign Corrupt Practices Act, UK Bribery Act)",
    "Export control, trade compliance, and economic sanctions",
    "Data protection and privacy legislation (e.g., GDPR, CCPA, DPDP)",
    "Telecommunications, AI, and cybersecurity regulations",
    "Environmental, health, and safety standards",
    "Labor and employment laws, including wage, hour, and benefits compliance",
  ];

  return (
    <section className="w-full text-[#1D1D1F] py-24 px-6 sm:px-12 md:px-16 lg:px-24 font-sans antialiased overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-12 text-left"
        >
          {/* Main Title & Introductory Paragraphs */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold text-[#111827] leading-tight">
              Supplier Code of Conduct
            </h1>

            <div className="space-y-4 text-[#272727] text-sm sm:text-base font-normal leading-relaxed">
              <p>
                At ZoikoTech, we hold ourselves and our partners to the highest
                standards of integrity, compliance, and responsible innovation.
                As a global leader in AI-powered platforms, telecom
                infrastructure, enterprise compliance, and data governance, we
                expect every supplier, contractor, and service provider in our
                ecosystem to reflect our core values.
              </p>

              <p>
                This Supplier Code of Conduct outlines the ethical, legal, and
                operational expectations we require of all third parties
                conducting business with or on behalf of ZoikoTech Inc. or its
                affiliated entities.
              </p>
            </div>
          </motion.div>

          {/* Core Ethical Principles */}
          <motion.div variants={itemVariants} className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl md:text-[2rem] font-bold text-[#111827] leading-tight">
              Core Ethical Principles
            </h2>

            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-[#111827] leading-snug">
                1. Legal, Regulatory &amp; Contractual Compliance
              </h3>

              <p className="text-[#272727] text-sm sm:text-base font-normal leading-relaxed">
                Suppliers must conduct all activities in full compliance with
                applicable international, federal, state, and local laws and
                regulations. This includes, but is not limited to:
              </p>

              {/* Hyphen / Dash Bullet List */}
              <div className="space-y-2 pt-1">
                {compliancePoints.map((text, idx) => (
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

              <p className="text-[#272727] text-sm sm:text-base font-normal leading-relaxed pt-2">
                All contractual obligations to ZoikoTech must be fulfilled with
                transparency and precision. Misrepresentation of capability,
                credentials, or output will result in contract review or
                termination.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
