"use client";

import React from "react";
import { motion } from "framer-motion";

export default function DeveloperPortalFeaturesSection() {
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

  const features = [
    { text: "SDKs in Python, Java, Kotlin, Swift, and Node.js", isBold: false },
    {
      text: "Tokenized sandbox credentials and region-specific sample datasets",
      isBold: false,
    },
    { text: "Interactive API Console", isBold: false },
    { text: "Real-time endpoint testing using Swagger/OpenAPI", isBold: false },
    {
      text: "Step-by-step examples, response validation, error tracing, and dynamic payload generation",
      isBold: false,
    },
    { text: "Credential & Security Management", isBold: true },
    { text: "OAuth 2.0, JWT, and API key management", isBold: false },
    {
      text: "Role-based access controls (RBAC) for team-level permissioning",
      isBold: false,
    },
    {
      text: "Audit trails, session monitoring, and regulatory logging",
      isBold: false,
    },
  ];

  return (
    <section className="w-full bg-[#0070BB14] text-[#1D1D1F] pb-24 px-6 sm:px-12 md:px-16 lg:px-24 font-sans antialiased overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center"
        >
          {/* Left Column: Direct Image */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 flex justify-center items-center"
          >
            <img
              src="/developer-portal/2.png"
              alt="Developer Portal Features"
              className="w-full h-auto"
            />
          </motion.div>

          {/* Right Column: Checkmark List */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 space-y-3 text-left"
          >
            {features.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="flex items-start gap-3"
              >
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#16A34A] flex items-center justify-center mt-0.5">
                  <svg
                    className="w-3.5 h-3.5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span
                  className={`text-xs sm:text-sm leading-relaxed ${
                    item.isBold
                      ? "font-semibold text-[#111827]"
                      : "font-normal text-[#374151]"
                  }`}
                >
                  {item.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
