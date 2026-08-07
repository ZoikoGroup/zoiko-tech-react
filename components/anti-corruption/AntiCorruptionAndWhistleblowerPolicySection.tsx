"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AntiCorruptionAndWhistleblowerPolicySection() {
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

  const prohibitedConduct = [
    "Offering, soliciting, or accepting bribes, kickbacks, or improper payments",
    "Providing or accepting gifts, travel, entertainment, or hospitality that may influence a business or regulatory decision",
    "Making facilitation payments to expedite or secure routine actions",
    "Engaging in political or charitable contributions to gain business advantage",
    "Using third-party intermediaries to conceal unethical behavior",
    "Falsifying financial records or concealing transactions",
  ];

  const antiCorruptionLaws = [
    "The U.S. Foreign Corrupt Practices Act (FCPA)",
    "The UK Bribery Act",
    "The United Nations Convention against Corruption (UNCAC)",
    "Relevant regional legislation and international treaties",
  ];

  const prohibitedGifts = [
    "Cash or cash equivalents (e.g., gift cards)",
    "Lavish meals, luxury accommodations, or unreported expenses",
    "Non-disclosure of familial, financial, or personal relationships impacting objectivity",
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
          {/* Main Title & Overview Paragraphs */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold text-[#111827] leading-tight">
              Anti-Corruption &amp; Whistleblower Policy
            </h1>

            <div className="space-y-4 text-[#272727] text-sm sm:text-base font-normal leading-relaxed">
              <p>
                ZoikoTech is uncompromising in its commitment to ethical
                business practices and global integrity. As a multinational
                technology company serving telecoms, fintech, government, and
                compliance-intensive sectors, we uphold a zero-tolerance policy
                toward corruption, bribery, fraud, or any unethical conduct
                &mdash; wherever we operate.
              </p>

              <p>
                This policy is binding for all employees, contractors, vendors,
                suppliers, and business affiliates across all ZoikoTech
                platforms and subsidiaries, including ZoikoNex&trade;,
                ZoikoAssure&trade;, ZoikoPal&trade;, ZoikoTime&trade;,
                BookingOrbit&trade;, and Zoiko Web Services&trade;.
              </p>
            </div>
          </motion.div>

          {/* Section: Anti-Corruption Standards */}
          <motion.div variants={itemVariants} className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl md:text-[2rem] font-bold text-[#111827] leading-tight">
              Anti-Corruption Standards
            </h2>

            {/* Prohibited Conduct Sub-section */}
            <div className="space-y-3">
              <p className="text-[#111827] text-sm sm:text-base font-bold leading-relaxed">
                ZoikoTech strictly prohibits:
              </p>

              <div className="space-y-2 pt-1">
                {prohibitedConduct.map((text, idx) => (
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
            </div>

            {/* Applicable Laws Sub-section */}
            <div className="space-y-3 pt-3">
              <p className="text-[#111827] text-sm sm:text-base font-bold leading-relaxed">
                All employees and partners must comply with applicable
                anti-corruption laws, including:
              </p>

              <div className="space-y-2 pt-1">
                {antiCorruptionLaws.map((text, idx) => (
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
            </div>

            <p className="text-[#272727] text-sm sm:text-base font-normal leading-relaxed pt-2">
              We implement rigorous due diligence on high-risk relationships and
              contracts, especially those involving public sector officials,
              joint ventures, or government procurements.
            </p>

            {/* Gifts, Hospitality, and Conflicts of Interest Sub-section */}
            <div className="space-y-3 pt-4">
              <p className="text-[#111827] text-sm sm:text-base font-bold leading-relaxed">
                Gifts, Hospitality, and Conflicts of Interest
              </p>

              <p className="text-[#272727] text-sm sm:text-base font-normal leading-relaxed">
                ZoikoTech permits only modest and appropriate hospitality in
                line with local laws and ethical norms. Prohibited conduct
                includes:
              </p>

              <div className="space-y-2 pt-1">
                {prohibitedGifts.map((text, idx) => (
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
                All actual or perceived conflicts of interest must be declared
                and documented through our Ethics Office.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
