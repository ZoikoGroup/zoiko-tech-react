"use client";

import React from "react";
import { motion } from "framer-motion";

export default function DeveloperPortalComingSoonSection() {
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

  const aiLibraries = [
    "Privacy-by-design AI modules",
    "Edge inference support",
    "LLM embedding and context-aware prompt tuning",
    "Bias monitoring and ethical guardrails",
  ];

  return (
    <section className="w-full bg-[#0070BB14] text-[#1D1D1F] py-24 px-6 sm:px-12 md:px-16 lg:px-24 font-sans antialiased overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
        >
          {/* Image Container - Left Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full flex justify-center lg:justify-start lg:pr-4"
          >
            <div className="relative w-full max-w-[600px] aspect-[4/3] overflow-hidden rounded-[8px]">
              <img
                src="/developer-integration/3.png"
                alt="Developer working on laptop with HTML and code graphics overlay"
                className="w-full h-full object-cover object-center block"
              />
            </div>
          </motion.div>

          {/* Text Content Block - Right Side */}
          <motion.div variants={itemVariants} className="space-y-6 text-left">
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-[#111827] leading-tight">
                Developer Portal (coming soon)
              </h3>

              <p className="text-[#272727] text-sm sm:text-base font-normal leading-relaxed">
                A centralized portal for API credentials, detailed
                documentation, changelogs, testing environments, and best
                practices. Tailored for enterprise and startup developers alike.
              </p>

              <p className="text-[#272727] text-sm sm:text-base font-normal leading-relaxed pt-1">
                Extend solutions with ZoikoTech&rsquo;s responsible AI
                libraries, including:
              </p>
            </div>

            {/* Checklist Items */}
            <div className="space-y-3 pt-1">
              {aiLibraries.map((text, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 mt-1">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="10" cy="10" r="10" fill="#56B810" />
                      <path
                        d="M6 10L9 13L14 7"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="text-[#272727] text-sm sm:text-base leading-relaxed">
                    {text}
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
