"use client";

import React from "react";
import { motion } from "framer-motion";

export default function RiskEcosystemAndGovernanceSection() {
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

  const keyRiskDomains = [
    "Strategic Risk: Industry disruption, global expansion, geopolitical volatility",
    "Regulatory Risk: Telecom and data compliance (GDPR, CCPA, CPRA, DPDP), export controls",
    "Financial Risk: Tax structuring, FX exposure, credit risk, audit variances",
    "Operational Risk: Supply chain dependencies, SaaS uptime, human capital risk",
    "Technological Risk: AI bias, algorithmic liability, platform vulnerabilities",
    "Cybersecurity Risk: Insider threats, ransomware, phishing, third-party access",
    "Reputational Risk: Social responsibility breaches, ethics violations, ESG misalignment",
  ];

  const controlAreas = [
    "Financial Controls: Audit readiness, SOX alignment, real-time transaction monitoring",
    "Technology Controls: Secure development lifecycle (SDLC), change management, DevSecOps integration",
    "Information Governance: Role-based access control, data classification, encryption standards",
    "Privacy & Data Compliance: Multi-region data flows, DPIAs, cross-border safeguards",
    "Vendor & Third-Party Governance: Onboarding protocols, continuous monitoring, anti-bribery clauses",
    "AML & Anti-Corruption: Integrated screening, escalation triggers, reporting requirements",
  ];

  const globalGovernanceItems = [
    "Legal entities with jurisdiction-specific oversight frameworks",
    "In-region compliance officers and legal counsel",
    "Data residency and infrastructure controls tailored to local requirements",
    "Strategic partnerships with global advisory firms, regulators, and industry coalitions",
    "Dynamic policy orchestration via Zoiko Web Services™ and ZoikoAssure™",
  ];

  const portfolioItems = [
    "MVNOs and telecom infrastructure: Zoiko Mobile, GoLite Mobile, Sable Mobile, Avivo Mobile, HavenZ Mobile, EverGuard Mobile",
    "AI-driven platforms: ZoikoPal™, ZoikoTime™, ZoikoAssure™, BookingOrbit™",
    "Enterprise compliance and billing: ZoikoNex™, ZoikoSuite™",
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
          {/* Section 1: Key Risk Domains */}
          <motion.div variants={itemVariants} className="space-y-4">
            <p className="text-[#111827] text-sm sm:text-base font-bold leading-relaxed">
              Key risk domains include:
            </p>

            <div className="space-y-2 pt-1">
              {keyRiskDomains.map((text, idx) => (
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
              Risk scenarios are stress-tested using predictive modeling and
              escalated through structured risk registers reviewed quarterly at
              the Board level
            </p>
          </motion.div>

          {/* Section 2: Internal Controls & Compliance Ecosystem */}
          <motion.div variants={itemVariants} className="space-y-4 pt-2">
            <p className="text-[#111827] text-sm sm:text-base font-bold leading-relaxed">
              Internal Controls &amp; Compliance Ecosystem
            </p>

            <p className="text-[#272727] text-sm sm:text-base font-normal leading-relaxed">
              ZoikoTech&apos;s internal control environment is built for both
              agility and robustness. It is anchored by global compliance
              protocols and automated workflows powered by our own platforms
              &mdash; including ZoikoAssure&trade; and ZoikoNex&trade;.
            </p>

            <p className="text-[#272727] text-sm sm:text-base font-normal leading-relaxed pt-1">
              Control areas include:
            </p>

            <div className="space-y-2 pt-1">
              {controlAreas.map((text, idx) => (
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
              Our global Code of Ethics and suite of governance policies are
              reviewed and updated annually to reflect emerging regulatory and
              industry developments.
            </p>
          </motion.div>

          {/* Section 3: Global Governance Infrastructure */}
          <motion.div variants={itemVariants} className="space-y-4 pt-2">
            <p className="text-[#111827] text-sm sm:text-base font-bold leading-relaxed">
              Global Governance Infrastructure
            </p>

            <p className="text-[#272727] text-sm sm:text-base font-normal leading-relaxed">
              Operating across North America, Europe, Asia, and the Caribbean,
              ZoikoTech implements a decentralized yet unified governance model.
              This includes:
            </p>

            <div className="space-y-2 pt-1">
              {globalGovernanceItems.map((text, idx) => (
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

            <div className="space-y-3 pt-4">
              <p className="text-[#111827] text-sm sm:text-base font-bold leading-relaxed">
                This governance system supports a diversified business portfolio
                that includes:
              </p>

              <div className="space-y-2 pt-1">
                {portfolioItems.map((text, idx) => (
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

            <p className="text-[#272727] text-sm sm:text-base font-normal leading-relaxed pt-3">
              ZoikoTech&apos;s governance practices ensure that innovation never
              outpaces accountability &mdash; and that growth is always grounded
              in global trust.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
