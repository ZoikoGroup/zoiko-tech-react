"use client";

import React from "react";
import { motion } from "framer-motion";

export default function BuiltInComplianceSection() {
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
    "Modules designed to support telecom (FCC, Ofcom, TRAI), fintech (KYC, AML), health (HIPAA), and privacy (GDPR, CCPA) regulatory frameworks",
    "Documentation of cross-border deployment standards and jurisdictional variance guidelines Platform-Specific Toolkits",
    "ZoikoMobile, GoLite Mobile, Sable Mobile, Avivo Mobile, EverGuard Mobile, HavenZ Mobile, and DriverX Mobile configuration guides",
    "BookingOrbit™ routing logic editors and travel behavior models",
    "ZoikoTime™ behavior tagging engine and attendance policy tools",
    "ZoikoPal™ elder behavior simulators and care model testbeds",
    "ZoikoAssure™ automated clause builder and approval routing blueprints",
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
          {/* Left Column: Title & Checkmark List */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <h2 className="text-2xl sm:text-3xl md:text-[2.25rem] font-bold text-[#111827] leading-tight">
              Built-in Compliance Tools
            </h2>

            <div className="space-y-3 pt-2">
              {features.map((text, idx) => (
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
                  <span className="text-xs sm:text-sm text-[#374151] leading-relaxed font-normal">
                    {text}
                  </span>
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
              src="/developer-portal/3.png"
              alt="Built-in Compliance Tools"
              className="w-full h-auto"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
