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
  { endpoint: "/time-entries", description: "Create, read, update, delete" },
  { endpoint: "/projects", description: "CRUD operations" },
  { endpoint: "/tes-scores", description: "Current and historical values" },
  { endpoint: "/pattern-summaries", description: "Work Pattern DNA™ metadata" },
  { endpoint: "/reports", description: "Trigger and retrieve reports" },
];

const sdkItems = [
  "JavaScript SDK for web integrations",
  "Python SDK for data and automation",
  "Mobile SDKs (iOS and Android roadmap)",
];

const authItems = [
  "OAuth2-based authentication",
  "API keys for server-to-server communication",
  "SSO integration (SAML, OpenID Connect)",
  "Rate limiting and quota strategies",
];

const dxItems = [
  "Clear, well-structured API documentation",
  "Copy-pasteable code snippets",
  "Postman collections for quick testing",
  "Sandbox environment for development",
];

export default function DeveloperApiHub() {
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
            Developer & API Hub
          </h2>
          <p className="text-[#666666] text-[15px] sm:text-[16px]">
            Comprehensive APIs and tools for integration
          </p>
        </motion.div>

        {/* Content Grid: Left Column (API Coverage) & Right Column (SDKs, Auth, DX) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full items-start">
          {/* Left Column: API Coverage */}
          <motion.div
            custom={0.15}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUpVariant}
            className="lg:col-span-6 flex flex-col gap-4"
          >
            <h3 className="text-2xl font-bold text-[#25A18E] mb-2">
              API Coverage
            </h3>

            <div className="flex flex-col gap-3.5">
              {apiEndpoints.map((item) => (
                <div
                  key={item.endpoint}
                  className="bg-white rounded-xl p-4 px-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-100 flex items-center justify-between transition-all duration-300 hover:shadow-md"
                >
                  <span className="font-mono text-[14px] md:text-[15px] font-bold text-[#25A18E]">
                    {item.endpoint}
                  </span>
                  <span className="text-[12px] md:text-[13px] text-[#777777] font-normal">
                    {item.description}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: SDKs & Authentication */}
          <motion.div
            custom={0.25}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUpVariant}
            className="lg:col-span-6 flex flex-col gap-8"
          >
            <h3 className="text-2xl font-bold text-[#25A18E]">
              SDKs & Authentication
            </h3>

            {/* SDKs Section */}
            <div className="flex flex-col items-start">
              <h4 className="text-[17px] font-bold text-[#2D3748] mb-3">
                SDKs
              </h4>
              <ul className="space-y-2.5">
                {sdkItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[13px] md:text-[14px] text-[#555555] leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#25A18E] shrink-0 mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Authentication & Security Section */}
            <div className="flex flex-col items-start">
              <h4 className="text-[17px] font-bold text-[#2D3748] mb-3">
                Authentication & Security
              </h4>
              <ul className="space-y-2.5">
                {authItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[13px] md:text-[14px] text-[#555555] leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#25A18E] shrink-0 mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Developer Experience Section */}
            <div className="flex flex-col items-start">
              <h4 className="text-[17px] font-bold text-[#2D3748] mb-3">
                Developer Experience
              </h4>
              <ul className="space-y-2.5">
                {dxItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[13px] md:text-[14px] text-[#555555] leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#25A18E] shrink-0 mt-2" />
                    <span>{item}</span>
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
