"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SandboxAccessSection() {
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

  return (
    <section className="w-full bg-white text-[#1D1D1F] py-24 px-6 sm:px-12 md:px-16 lg:px-24 font-sans antialiased overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-6 text-left"
        >
          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold text-[#111827] leading-tight"
          >
            Sandbox Access
          </motion.h1>

          {/* Body Paragraphs */}
          <motion.div
            variants={itemVariants}
            className="space-y-4 text-[#272727] text-sm sm:text-base font-normal leading-relaxed"
          >
            <p>
              At ZoikoTech, we believe that innovation must be built on
              precision, security, and trust. Our dedicated Sandbox Environments
              offer developers, system architects, and technology partners a
              secure and intelligent space to test, simulate, and validate
              real-world use cases &mdash; without the risks or constraints of
              production.
            </p>

            <p>
              Each sandbox is architected to mirror live operational conditions
              while maintaining complete data isolation, compliance simulation,
              and cross-platform interoperability. Whether you&apos;re testing
              telecom billing flows, AI integrations, or compliance automation
              &mdash; our sandbox is where enterprise ideas become
              deployment-ready.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
