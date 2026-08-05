"use client";

import React from "react";
import { motion } from "framer-motion";

export default function DataProtectionAndEthicalConductSection() {
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

  const dataProtectionPoints = [
    "Protect all confidential, proprietary, or personal data against unauthorized access, loss, or misuse",
    "Comply with relevant data privacy regulations across jurisdictions",
    "Maintain enterprise-grade cybersecurity controls, including encryption, MFA, and vulnerability assessments",
    "Promptly notify ZoikoTech of any data incidents, breaches, or security risks",
    "Enter into Data Processing Agreements (DPAs) when handling regulated data",
  ];

  const ethicalConductPoints = [
    "Zero tolerance for bribery, fraud, embezzlement, or improper influence",
    "Full disclosure of any actual or potential conflicts of interest",
    "Truthful and accurate reporting of financial records, invoices, and service outputs",
    "Prohibition of price fixing, bid rigging, or anti-competitive practices",
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
          {/* Section 3: Data Protection, Cybersecurity & Confidentiality */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl md:text-[2rem] font-bold text-[#111827] leading-tight">
                3. Data Protection, Cybersecurity &amp; Confidentiality
              </h2>

              <p className="text-[#272727] text-sm sm:text-base font-normal leading-relaxed">
                Suppliers entrusted with access to ZoikoTech systems, data, or
                intellectual property must:
              </p>
            </div>

            {/* Checklist Items */}
            <div className="space-y-3 pt-1">
              {dataProtectionPoints.map((text, idx) => (
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
              Respect for intellectual property extends to software,
              documentation, processes, and platform architectures.
            </p>
          </motion.div>

          {/* Section 4: Ethical Business Conduct & Transparency */}
          <motion.div variants={itemVariants} className="space-y-6 pt-2">
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl md:text-[2rem] font-bold text-[#111827] leading-tight">
                4. Ethical Business Conduct &amp; Transparency
              </h2>

              <p className="text-[#272727] text-sm sm:text-base font-normal leading-relaxed">
                Suppliers must engage in fair, honest, and transparent business
                practices. We expect:
              </p>
            </div>

            {/* Checklist Items */}
            <div className="space-y-3 pt-1">
              {ethicalConductPoints.map((text, idx) => (
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
              Suppliers must refrain from offering gifts, entertainment, or
              favors to ZoikoTech employees that could improperly influence
              decisions.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
