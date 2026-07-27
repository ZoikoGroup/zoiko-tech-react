"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function FinanceSection() {
  return (
    <section className="relative w-full max-w-6xl mx-auto py-12 font-sans bg-white text-[#666666]">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="space-y-6 max-w-6xl"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-[32px] font-bold tracking-tight text-[#111111] leading-tight"
        >
          Finance, Banking &amp; Fintech
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-[18px] leading-relaxed text-[#272727]"
        >
          ZoikoTech delivers the digital foundation for the future of finance —
          empowering banks, fintechs, payroll platforms, digital lenders, and
          financial wellness providers to operate with intelligence, speed, and
          trust.
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-[18px] leading-relaxed text-[#272727]"
        >
          We serve a broad range of financial actors — from neobanks and B2B
          payment processors to underbanked market innovators — with a full
          suite of platforms that combine global-scale infrastructure, embedded
          compliance, advanced monetization, and zero-trust cybersecurity.
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-[18px] leading-relaxed text-[#272727]"
        >
          Whether you're building a real-time payroll engine, expanding a
          digital banking ecosystem, managing multi-currency payments, or
          launching a financial wellness app — ZoikoTech delivers the backbone
          for growth, resilience, and regulation.
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-[18px] leading-relaxed text-[#272727]"
        >
          We also power ZoikoPal™, our flagship AI-powered financial wellness
          companion for seniors and caregivers — enabling secure,
          voice-activated financial assistance, bill management, and fraud
          prevention for aging populations and their support networks.
        </motion.p>
      </motion.div>
    </section>
  );
}
