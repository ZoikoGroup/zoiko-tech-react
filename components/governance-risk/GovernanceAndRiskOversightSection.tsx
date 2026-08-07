"use client";

import React from "react";
import { motion } from "framer-motion";

export default function GovernanceAndRiskOversightSection() {
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

  const boardOversightAreas = [
    "Corporate vision and long-range strategic planning",
    "Jurisdictional compliance, licensing, and market entry",
    "Financial reporting, transparency, and fiduciary responsibilities",
    "Risk oversight and assurance across all critical domains",
    "Oversight of innovation, digital ethics, and product lifecycle governance",
    "Executive appointments, performance, and succession planning",
    "ESG (Environmental, Social, Governance) policy and stakeholder alignment",
  ];

  const specializedCommittees = [
    "Audit & Risk Committee",
    "Ethics & Compliance Committee",
    "Innovation & Technology Oversight Committee",
    "Global Strategy & Expansion Committee",
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
          {/* Main Title & Overview Paragraph */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold text-[#111827] leading-tight">
              Governance &amp; Risk Oversight
            </h1>

            <p className="text-[#272727] text-sm sm:text-base font-normal leading-relaxed">
              At ZoikoTech, corporate governance and risk oversight are central
              to our mission to build intelligent, resilient, and trusted
              technologies for a global audience. As a multinational leader in
              AI-powered platforms, enterprise SaaS, compliance automation, and
              telecom infrastructure, our governance structure is designed to
              anticipate change, manage complexity, and uphold the highest
              standards of accountability and performance.
            </p>
          </motion.div>

          {/* Strategic Board Governance Section */}
          <motion.div variants={itemVariants} className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl md:text-[2rem] font-bold text-[#111827] leading-tight">
              Strategic Board Governance
            </h2>

            <p className="text-[#272727] text-sm sm:text-base font-normal leading-relaxed">
              ZoikoTech is governed by a multidisciplinary Board of Directors
              and Executive Leadership Team with expertise across telecom,
              finance, cybersecurity, AI, law, sustainability, and enterprise
              compliance. The Board provides oversight in the following areas:
            </p>

            {/* Board Oversight Bullet List */}
            <div className="space-y-2 pt-1">
              {boardOversightAreas.map((text, idx) => (
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

            {/* Specialized Committees Sub-section */}
            <div className="space-y-3 pt-3">
              <p className="text-[#111827] text-sm sm:text-base font-bold leading-relaxed">
                The Board operates through specialized committees including:
              </p>

              <div className="space-y-2 pt-1">
                {specializedCommittees.map((text, idx) => (
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
                Each committee receives real-time reporting from internal and
                external advisors, risk officers, and business unit leaders.
              </p>
            </div>

            {/* Enterprise Risk Management (ERM) Sub-section */}
            <div className="space-y-3 pt-4">
              <p className="text-[#111827] text-sm sm:text-base font-bold leading-relaxed">
                Enterprise Risk Management (ERM)
              </p>

              <p className="text-[#272727] text-sm sm:text-base font-normal leading-relaxed">
                ZoikoTech maintains a fully integrated Enterprise Risk
                Management (ERM) framework aligned to COSO and ISO 31000
                standards. The ERM program spans all levels of the organization
                and is embedded into strategic planning, product development,
                and day-to-day operations.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
