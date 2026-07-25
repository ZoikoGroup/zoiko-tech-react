"use client";

import React from "react";
import { motion } from "framer-motion";

// Motion animation variants with typed custom easing
const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (customDelay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.21, 0.47, 0.32, 0.98] as const,
      delay: customDelay,
    },
  }),
};

const zoikoEcosystemApps = [
  "ZoikoPay",
  "ZoikoSuite",
  "ZoikoNex",
  "ZoikoTime",
  "ZoikoAxis",
];

const thirdPartyIntegrations = [
  "Okta",
  "Auth0",
  "Azure AD",
  "Google Workspace",
  "Microsoft 365",
  "Cloudflare",
  "Slack",
  "SIEM Systems",
];

export default function ZoikoSecurityIntegrations() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-16 min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto flex flex-col items-center w-full">
        {/* Top Header Badge */}
        <motion.div
          custom={0.05}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="mb-6"
        >
          <span className="bg-[#E8F2F2] text-[#006666] px-4 py-1.5 rounded-full text-[13px] font-medium tracking-wide">
            Integrations
          </span>
        </motion.div>

        {/* Section Header */}
        <motion.div
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-center mb-16 max-w-3xl"
        >
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold tracking-tight text-[#1A202C] leading-tight">
            Seamless Security Integration
          </h2>
        </motion.div>

        {/* First Row: Zoiko Ecosystem */}
        <motion.div
          custom={0.15}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeUpVariant}
          className="w-full mb-12"
        >
          <h3 className="text-xl md:text-2xl font-bold text-[#1A202C] mb-6 text-left">
            Zoiko Ecosystem
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 w-full">
            {zoikoEcosystemApps.map((app, index) => (
              <motion.div
                key={app}
                custom={0.2 + index * 0.05}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeUpVariant}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_4px_12px_#0000001A] hover:shadow-[0_12px_24px_rgba(0,0,0,0.06)] transition-all duration-300 flex items-center justify-center min-h-[100px]"
              >
                <span className="text-[14px] md:text-[15px] font-bold text-[#2D3748]">
                  {app}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Second Row: Third-Party Integrations */}
        <motion.div
          custom={0.25}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeUpVariant}
          className="w-full"
        >
          <h3 className="text-xl md:text-2xl font-bold text-[#1A202C] mb-6 text-left">
            Third-Party Integrations
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 w-full">
            {thirdPartyIntegrations.map((service, index) => (
              <motion.div
                key={service}
                custom={0.3 + index * 0.04}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeUpVariant}
                className="bg-white rounded-2xl p-5 border border-gray-100 shadow-[0_4px_12px_#0000001A] hover:shadow-[0_12px_24px_rgba(0,0,0,0.06)] transition-all duration-300 flex items-center justify-center text-center min-h-[100px]"
              >
                <span className="text-[13px] md:text-[14px] font-bold text-[#2D3748]">
                  {service}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
