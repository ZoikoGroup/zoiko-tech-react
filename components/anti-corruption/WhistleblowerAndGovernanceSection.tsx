"use client";

import React from "react";
import { motion } from "framer-motion";

export default function WhistleblowerAndGovernanceSection() {
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

  const whistleblowerViolations = [
    "Corruption, bribery, or financial fraud",
    "Retaliation or intimidation",
    "Discrimination or harassment",
    "Security breaches or misuse of proprietary data",
    "Vendor fraud, kickbacks, or collusion",
  ];

  const investigationConsequences = [
    "Internal disciplinary actions",
    "Suspension or termination of employment or contracts",
    "Referral to law enforcement or regulatory bodies",
    "Reputational remediation and controls strengthening",
  ];

  const governanceIntegrityItems = [
    "Mandatory annual ethics and anti-bribery training",
    "Transactional audits and due diligence on partners",
    "Ethics compliance clauses in supplier and partner contracts",
    "Pre-approval requirements for hospitality and sponsorships",
    "Oversight by ZoikoTech's Legal, Compliance, and Risk departments",
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
          {/* Section 1: Whistleblower Rights & Reporting Channels */}
          <motion.div variants={itemVariants} className="space-y-4">
            <p className="text-[#111827] text-sm sm:text-base font-bold leading-relaxed">
              Whistleblower Rights &amp; Reporting Channels
            </p>

            <p className="text-[#272727] text-sm sm:text-base font-normal leading-relaxed">
              ZoikoTech fosters a culture where speaking up is safe, supported,
              and protected. Individuals may confidentially report suspected or
              known violations, including:
            </p>

            <div className="space-y-2 pt-1">
              {whistleblowerViolations.map((text, idx) => (
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

            <div className="space-y-3 pt-2 text-[#272727] text-sm sm:text-base font-normal leading-relaxed">
              <p>Reports may be submitted via:</p>

              <div className="space-y-1 pt-1">
                <p>
                  Email:{" "}
                  <a
                    href="mailto:ethics@zoikotech.com"
                    className="text-[#0070BB] hover:underline transition-colors"
                  >
                    ethics@zoikotech.com
                  </a>
                </p>
                <p>Phone (Toll-Free USA): 800-484-5564</p>
                <p>Confidential Web Portal: Available upon request</p>
              </div>

              <p className="pt-2">
                Anonymous reporting is permitted. Whistleblowers are protected
                under both ZoikoTech&apos;s internal non-retaliation policy and
                applicable federal/international laws.
              </p>
            </div>
          </motion.div>

          {/* Section 2: Investigations & Outcomes */}
          <motion.div variants={itemVariants} className="space-y-4 pt-2">
            <h2 className="text-[#111827] text-sm sm:text-base font-bold leading-relaxed">
              Investigations &amp; Outcomes
            </h2>

            <p className="text-[#272727] text-sm sm:text-base font-normal leading-relaxed">
              The ZoikoTech Ethics &amp; Compliance Committee investigates all
              concerns impartially, promptly, and discreetly. If a violation is
              confirmed, consequences may include:
            </p>

            <div className="space-y-2 pt-1">
              {investigationConsequences.map((text, idx) => (
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
              All investigations are handled confidentially and in accordance
              with legal due process.
            </p>
          </motion.div>

          {/* Section 3: Monitoring, Training & Governance */}
          <motion.div variants={itemVariants} className="space-y-4 pt-2">
            <p className="text-[#111827] text-sm sm:text-base font-bold leading-relaxed">
              Monitoring, Training &amp; Governance
            </p>

            <p className="text-[#272727] text-sm sm:text-base font-normal leading-relaxed">
              ZoikoTech ensures ongoing integrity through:
            </p>

            <div className="space-y-2 pt-1">
              {governanceIntegrityItems.map((text, idx) => (
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

            <div className="space-y-3 pt-3 text-[#272727] text-sm sm:text-base font-normal leading-relaxed">
              <p>
                We believe transparency, accountability, and vigilance are the
                foundations of long-term trust.
              </p>
              <p>
                By adhering to this policy, every ZoikoTech stakeholder plays a
                part in defending our mission to build ethical, responsible, and
                future-ready technologies for a global audience.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
