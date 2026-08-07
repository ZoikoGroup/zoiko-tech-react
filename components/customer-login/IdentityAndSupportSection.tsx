"use client";

import React from "react";
import { motion } from "framer-motion";

export default function IdentityAndSupportSection() {
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

  const identityPoints = [
    "SSO & Federated Login Support – Integrates with enterprise identity systems (SAML, SCIM, Azure AD, Google Workspace)",
    "Multi-Factor Authentication (MFA) – Optional but recommended for all user tiers",
    "RBAC (Role-Based Access Control) – Restrict access based on department, geography, or regulatory classification",
    "Session Security & Monitoring – Enforced idle timeouts, login alerts, and suspicious activity detection",
  ];

  const supportPoints = [
    "99.99% uptime SLA with geo-redundant login nodes",
    "24/7 login support and credential recovery",
    "Custom domain login pages for white-labeled platforms or resellers",
    "API-based token provisioning for enterprise DevOps and IT teams",
    "Intelligent retry protocols during system maintenance or upgrades",
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
          {/* Section 1: Enterprise-Grade Identity & Access Management */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-[2rem] font-bold text-[#111827] leading-tight">
              Enterprise-Grade Identity &amp; Access Management
            </h2>

            {/* Dash Bullet List */}
            <div className="space-y-2 pt-1">
              {identityPoints.map((text, idx) => (
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

            <div className="space-y-2 pt-2 text-[#272727] text-sm sm:text-base font-normal leading-relaxed">
              <p>
                Our login experience is compliant with global standards,
                including:
              </p>
              <p className="font-normal text-[#272727]">
                ISO 27001 / SOC 2 Type II / HIPAA / GDPR / CCPA
              </p>
            </div>
          </motion.div>

          {/* Section 2: Support & Availability */}
          <motion.div variants={itemVariants} className="space-y-4 pt-2">
            <h2 className="text-2xl sm:text-3xl md:text-[2rem] font-bold text-[#111827] leading-tight">
              Support &amp; Availability
            </h2>

            {/* Dash Bullet List */}
            <div className="space-y-2 pt-1">
              {supportPoints.map((text, idx) => (
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
          </motion.div>

          {/* Divider line & Closing Statement */}
          <motion.div variants={itemVariants} className="pt-6">
            <div className="w-full border-t border-gray-200 mb-8" />
            <p className="text-[#272727] text-sm sm:text-base font-normal leading-relaxed">
              The ZoikoTech Customer Login isn&apos;t just an entry point
              &mdash; it&apos;s the secure foundation of your digital
              operations. Always protected, always available, and always one
              step ahead.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
