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

const apiEndpoints = [
  "/ledger",
  "/journal",
  "/vendors",
  "/employees",
  "/payroll",
  "/compliance",
  "/documents",
];

const sdks = ["JavaScript", "Python", "PHP"];

const authentication = ["OAuth2", "SAML", "OIDC"];

const developerTools = [
  "Postman collections",
  "Sandbox environment",
  "Code examples",
];

export default function DeveloperHub() {
  return (
    <section className="w-full bg-[#F8F9FA] py-20 px-6 md:px-12 lg:px-16 min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto flex flex-col items-center w-full">
        {/* Section Header */}
        <motion.div
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold tracking-tight text-[#2D3748] mb-3 leading-tight">
            Developer Hub
          </h2>
          <p className="text-[#666666] text-[15px] sm:text-[16px]">
            Powerful APIs for seamless integration
          </p>
        </motion.div>

        {/* 2-Column Main Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full items-start">
          {/* Left Column: API Endpoints Card */}
          <motion.div
            custom={0.15}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUpVariant}
            className="rounded-2xl p-8 md:p-10 transition-all duration-300 flex flex-col min-h-[380px]"
          >
            <h3 className="text-2xl font-bold text-[#25A18E] mb-8 leading-snug">
              API Endpoints
            </h3>

            <div className="flex flex-wrap gap-3">
              {apiEndpoints.map((endpoint) => (
                <span
                  key={endpoint}
                  className="bg-[#00695C] text-white text-[13px] sm:text-[14px] font-mono px-4 py-2 rounded-md shadow-sm"
                >
                  {endpoint}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right Column: SDKs & Authentication Card */}
          <motion.div
            custom={0.25}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUpVariant}
            className="rounded-2xl p-8 md:p-10 transition-all duration-300 flex flex-col justify-between min-h-[380px]"
          >
            <h3 className="text-2xl font-bold text-[#25A18E] mb-8 leading-snug">
              SDKs & Authentication
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
              {/* SDKs Group */}
              <div>
                <h4 className="text-[16px] font-bold text-[#2D3748] mb-4">
                  SDKs
                </h4>
                <ul className="space-y-3">
                  {sdks.map((sdk) => (
                    <li
                      key={sdk}
                      className="text-[14px] text-[#555555] flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#718096]" />
                      {sdk}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Authentication Group */}
              <div>
                <h4 className="text-[16px] font-bold text-[#2D3748] mb-4">
                  Authentication
                </h4>
                <ul className="space-y-3">
                  {authentication.map((auth) => (
                    <li
                      key={auth}
                      className="text-[14px] text-[#555555] flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#718096]" />
                      {auth}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Developer Tools Group */}
            <div>
              <h4 className="text-[16px] font-bold text-[#2D3748] mb-4">
                Developer Tools
              </h4>
              <ul className="space-y-3">
                {developerTools.map((tool) => (
                  <li
                    key={tool}
                    className="text-[14px] text-[#555555] flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#718096]" />
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
