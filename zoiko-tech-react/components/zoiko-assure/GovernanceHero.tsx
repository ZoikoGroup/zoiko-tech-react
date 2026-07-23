"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
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

export default function GovernanceHero() {
  const router = useRouter();

  const handleDownloadWhitePaper = () => {
    // Standard router push example for programmatic routing
    router.push("/whitepaper/compliance");
  };

  return (
    <section className="w-full bg-gradient-to-r from-[#44c3b8] via-[#379c93] to-[#2a756f] text-white px-6 md:px-12 lg:px-20 py-24 md:py-32 overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Main Title */}
        <motion.h1
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-4xl sm:text-5xl md:text-[54px] font-bold tracking-tight mb-4 leading-tight text-white"
        >
          Governance That Thinks
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          custom={0.2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-white/95 text-[18px] sm:text-[21px] font-medium leading-relaxed mb-6"
        >
          ZoikoAssure — Governance. Assurance. Intelligence.
        </motion.p>

        {/* Description Tagline */}
        <motion.p
          custom={0.3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-white/85 text-[14.5px] sm:text-[16px] italic font-normal leading-relaxed mb-8 max-w-2xl"
        >
          The AI compliance platform that interprets laws, monitors risk in real
          time, and keeps you audit-ready across jurisdictions.
        </motion.p>

        {/* Brand Entity Tag */}
        <motion.div
          custom={0.4}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="flex items-center justify-center gap-2 text-white/90 text-[14px] sm:text-[15px] font-normal mb-10"
        >
          <span>Part of</span>
          <span className="bg-[#FFDE59] text-[#0f1124] font-bold px-2.5 py-0.5 rounded-[4px] text-[13px] shadow-xs">
            Zoiko Tech
          </span>
          <span>— Where Life Meets Logic™</span>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          custom={0.5}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full sm:w-auto"
        >
          {/* Book a Demo Button */}
          <Link
            href="/book-demo"
            className="w-full sm:w-auto min-w-[190px] text-center bg-white text-[#3ba8a0] font-semibold text-[15px] px-7 py-3.5 rounded-lg shadow-xs hover:bg-slate-50 transition-all duration-300"
          >
            Book a Demo
          </Link>

          {/* Download Compliance White Paper Button */}
          <Link
            href="/whitepaper/compliance"
            className="w-full sm:w-auto min-w-[240px] text-center bg-transparent border-2 border-white text-white font-semibold text-[15px] px-7 py-3.5 rounded-lg hover:bg-white/10 transition-all duration-300"
          >
            Download Compliance White Paper
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
