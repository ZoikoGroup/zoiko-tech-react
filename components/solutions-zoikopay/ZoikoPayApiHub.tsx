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
  { endpoint: "/payments", description: "Process payments" },
  { endpoint: "/wallets", description: "Wallet management" },
  { endpoint: "/fx", description: "Currency conversion" },
  { endpoint: "/payouts", description: "Disbursements" },
  { endpoint: "/invoices", description: "Invoicing system" },
  { endpoint: "/subscriptions", description: "Recurring billing" },
  { endpoint: "/merchants", description: "Merchant management" },
];

const sdks = ["JavaScript SDK", "Python SDK", "PHP SDK"];

const developerTools = [
  "API explorer",
  "Webhook inspector",
  "Sandbox environment",
  "Testing utilities",
];

export default function ZoikoPayApiHub() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-16 min-h-screen flex items-center justify-center">
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
            Comprehensive APIs and tools for seamless integration
          </p>
        </motion.div>

        {/* 2-Column Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full items-start">
          {/* Left Column: API Coverage */}
          <motion.div
            custom={0.15}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUpVariant}
            className="lg:col-span-7 flex flex-col gap-4"
          >
            <h3 className="text-2xl font-bold text-[#25A18E] mb-2">
              API Coverage
            </h3>

            <div className="flex flex-col gap-3">
              {apiEndpoints.map((item) => (
                <div
                  key={item.endpoint}
                  className="bg-[#F8F9FA] rounded-xl px-6 py-4 border border-gray-100/90 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-md transition-all duration-300 flex items-center justify-between"
                >
                  <code className="text-[#006059] font-mono font-semibold text-[14px] md:text-[15px]">
                    {item.endpoint}
                  </code>
                  <span className="text-[#718096] text-[13px] md:text-[14px]">
                    {item.description}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: SDKs & Tools */}
          <motion.div
            custom={0.25}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUpVariant}
            className="lg:col-span-5 flex flex-col gap-8"
          >
            <h3 className="text-2xl font-bold text-[#25A18E]">SDKs & Tools</h3>

            {/* SDKs Group */}
            <div className="flex flex-col gap-3">
              <h4 className="text-[17px] font-bold text-[#2D3748]">SDKs</h4>
              <ul className="space-y-2.5">
                {sdks.map((sdk) => (
                  <li
                    key={sdk}
                    className="flex items-center gap-2.5 text-[14px] text-[#666666]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#25A18E] shrink-0" />
                    <span>{sdk}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Developer Tools Group */}
            <div className="flex flex-col gap-3">
              <h4 className="text-[17px] font-bold text-[#2D3748]">
                Developer Tools
              </h4>
              <ul className="space-y-2.5">
                {developerTools.map((tool) => (
                  <li
                    key={tool}
                    className="flex items-center gap-2.5 text-[14px] text-[#666666]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#25A18E] shrink-0" />
                    <span>{tool}</span>
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
