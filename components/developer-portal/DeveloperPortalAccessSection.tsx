"use client";

import React from "react";
import { motion } from "framer-motion";

export default function DeveloperPortalAccessSection() {
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

  const apiItems = [
    {
      name: "ZoikoNex™",
      description: "Telecom billing, mediation, and MVNO lifecycle",
    },
    {
      name: "ZoikoSuite™",
      description: "Finance, payroll, tax, and HR automation",
    },
    {
      name: "ZoikoAssure™",
      description: "Smart contracts, compliance logic, and legal workflows",
    },
    {
      name: "ZoikoPal™",
      description: "AI-powered eldercare and wellness interaction engines",
    },
    {
      name: "ZoikoTime™",
      description: "Behavioral analytics and workforce optimization",
    },
    {
      name: "BookingOrbit™",
      description: "Travel automation and logistics integration",
    },
    {
      name: "DriverXtra",
      description:
        "Gig economy services, vehicle insights, and driver ecosystems",
    },
  ];

  return (
    <section className="w-full bg-[#0070BB14] text-[#1D1D1F] py-24 px-6 sm:px-12 md:px-16 lg:px-24 font-sans antialiased overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-16"
        >
          {/* Centered Section Header */}
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-[2.25rem] font-bold text-[#111827] text-center leading-tight"
          >
            What the Developer Portal Provides
          </motion.h2>

          {/* Grid Layout: Content Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Content & Checkmark List */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-7 space-y-6 text-left"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-[#111827] leading-tight">
                Unified API &amp; SDK Access
              </h3>

              <p className="text-xs sm:text-sm text-[#4B5563] font-normal leading-relaxed">
                Enterprise-grade RESTful APIs and SDKs for all core platforms:
              </p>

              <div className="space-y-3 pt-2">
                {apiItems.map((item, idx) => (
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
                    <div className="text-xs sm:text-sm text-[#374151] leading-relaxed font-normal">
                      <span className="font-semibold text-[#111827]">
                        {item.name}
                      </span>
                      {" \u2013 "}
                      <span>{item.description}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column: Direct Image */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-5 flex justify-center items-center"
            >
              <img
                src="/developer-portal/1.png"
                alt="Unified API & SDK Access"
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
