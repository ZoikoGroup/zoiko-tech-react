"use client";

import React from "react";
import { motion } from "framer-motion";

export default function CodeOfEthicsSection() {
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

  const ethicalPrinciples = [
    {
      number: "1.",
      title: "Uncompromising Integrity",
      desc: "We uphold honesty, fairness, and transparency in every action we take. We reject shortcuts and speak the truth, even when it is difficult. Every employee, officer, and partner is expected to act in a manner that reflects ZoikoTech's integrity-first culture.",
    },
    {
      number: "2.",
      title: "Respect for People and Human Rights",
      desc: "We champion a workplace of dignity, diversity, and inclusion. We embrace all individuals regardless of gender, ethnicity, background, religion, age, ability, or identity. We support international human rights frameworks and prohibit child labor, forced labor, and any form of discrimination or harassment.",
    },
    {
      number: "3.",
      title: "Legal and Regulatory Compliance",
      desc: "We comply with all applicable laws in every jurisdiction where we operate – including those governing data privacy, anti-money laundering, telecom regulation, cybersecurity, intellectual property, employment, and procurement. ZoikoTech has dedicated compliance teams to ensure proactive alignment with evolving global mandates.",
    },
    {
      number: "4.",
      title: "Anti-Bribery and Anti-Corruption",
      desc: "We have zero tolerance for bribery, kickbacks, embezzlement, or improper influence. We prohibit facilitation payments and any gifts or hospitality that may create a conflict of interest or the appearance of impropriety.",
    },
    {
      number: "5.",
      title: "Data Ethics & Confidentiality",
      desc: "As custodians of sensitive client, user, and institutional data, we commit to responsible data stewardship. We do not exploit data for unauthorized purposes, and we protect intellectual property and confidential information under strict controls. This applies across all of our platforms – including ZoikoNex™, ZoikoAssure™, ZoikoPal™, and Zoiko Web Services™.",
    },
    {
      number: "6.",
      title: "Responsible AI & Innovation",
      desc: "Our AI and automation systems are developed in accordance with ethical frameworks that emphasize fairness, explainability, non-discrimination, and accountability. We regularly assess the social, legal, and reputational implications of our algorithms, APIs, and integrations.",
    },
    {
      number: "7.",
      title: "Whistleblower Protection & Non-Retaliation",
      desc: "ZoikoTech maintains a secure, anonymous Ethics Reporting Channel for employees and third parties to report concerns about misconduct. Retaliation against whistleblowers is strictly prohibited and subject to disciplinary action.",
    },
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
          {/* Section 1: Code of Ethics & Integrity */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold text-[#111827] leading-tight">
              Code of Ethics &amp; Integrity
            </h1>

            <div className="space-y-4 text-[#272727] text-sm sm:text-base font-normal leading-relaxed">
              <p>
                At ZoikoTech, our Code of Ethics &amp; Integrity is more than a
                compliance document &mdash; it is the moral compass that shapes
                our decision-making, guides our innovation, and protects the
                trust placed in us by clients, governments, partners, and
                communities worldwide.
              </p>

              <p>
                As a global leader in AI-powered platforms, telecom billing,
                enterprise SaaS, and compliance automation, we understand that
                our influence comes with responsibility. We are committed to
                maintaining the highest standards of ethical conduct across
                every region, industry, and product line.
              </p>
            </div>
          </motion.div>

          {/* Section 2: Core Ethical Principles */}
          <motion.div variants={itemVariants} className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl md:text-[2rem] font-bold text-[#111827] leading-tight">
              Core Ethical Principles
            </h2>

            {/* Numbered List Items */}
            <div className="space-y-6 pt-1">
              {ethicalPrinciples.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="space-y-1"
                >
                  <p className="text-[#111827] text-sm sm:text-base font-bold leading-relaxed">
                    {item.number} {item.title}
                  </p>
                  <p className="text-[#272727] text-sm sm:text-base font-normal leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
