"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SdksDeveloperToolkitsSection() {
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

  const toolkits = [
    "Authentication protocols (OAuth 2.0, JWT)",
    "Event hooks and webhooks for real-time system actions",
    "Pre-built integration templates for CRM, ERP, and HRIS systems",
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
          {/* Text Content Block - Left Side */}
          <motion.div
            variants={itemVariants}
            className="space-y-6 text-left order-2 lg:order-1"
          >
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl md:text-[2.25rem] font-bold text-[#111827] leading-tight">
                SDKs &amp; <br />
                Developer Toolkits
              </h3>

              <p className="text-[#272727] text-sm sm:text-base font-normal leading-relaxed">
                Access SDKs for Java, Python, Node.js, and mobile platforms to
                build and test integrations quickly. Toolkits include:
              </p>
            </div>

            {/* Checklist Items */}
            <div className="space-y-3.5 pt-1">
              {toolkits.map((text, idx) => (
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

          {/* Single Image Container - Right Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full flex justify-center lg:justify-end order-1 lg:order-2 lg:pl-4"
          >
            <div className="relative w-full max-w-[600px] aspect-[4/3] overflow-hidden rounded-[8px]">
              <img
                src="/developer-integration/2.png"
                alt="Female software developer reviewing code on laptop with code overlay"
                className="w-full h-full object-cover object-center block"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}