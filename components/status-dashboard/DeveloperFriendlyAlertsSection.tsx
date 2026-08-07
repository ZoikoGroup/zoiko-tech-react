"use client";

import React from "react";
import { motion } from "framer-motion";

export default function DeveloperFriendlyAlertsSection() {
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
    "Subscribe to service notifications via email, Slack, Microsoft Teams, or webhook",
    "Access incident timelines, root cause analyses (RCA), and remediation updates",
    "Embed dashboard widgets into internal NOC dashboards or CI/CD workflows",
    "Export logs and metrics for compliance reporting, audits, or SLA verification",
  ];

  return (
    <section className="w-full bg-white text-[#1D1D1F] py-24 px-6 sm:px-12 md:px-16 lg:px-24 font-sans antialiased overflow-hidden">
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
            className="lg:col-span-6 flex justify-center items-center"
          >
            <img
              src="/status-dashboard/4.png"
              alt="Developer-Friendly Alerts & Integrations"
              className="w-full h-auto"
            />
          </motion.div>

          {/* Right Column: Title & Checkmark List */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-6 space-y-6 text-left"
          >
            <h2 className="text-2xl sm:text-3xl md:text-[2.25rem] font-bold text-[#111827] leading-tight">
              Developer-Friendly
              <br />
              Alerts & Integrations
            </h2>

            <div className="space-y-3 pt-2">
              {features.map((text, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#56B810] flex items-center justify-center mt-0.5">
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
                  <span className="text-xs sm:text-sm text-[#374151] leading-relaxed font-normal">
                    {text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
