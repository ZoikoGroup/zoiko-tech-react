"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

// Staggered motion animation variants with typed custom easing
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

export default function WorldFirstMarketplaceHero() {
  const router = useRouter();

  const handleHireClick = () => {
    // Standard router navigation example
    router.push("/hire-with-confidence");
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
          className="text-3xl sm:text-4xl md:text-[44px] font-bold tracking-tight mb-4 leading-tight text-white max-w-3xl"
        >
          The World's First AI-Governed Marketplace for Professionals
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          custom={0.2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-white/90 text-[16px] sm:text-[18px] font-medium leading-relaxed mb-6"
        >
          Where Trust Meets Intelligence
        </motion.p>

        {/* Ecosystem Description */}
        <motion.p
          custom={0.3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-white/80 text-[13.5px] sm:text-[14.5px] font-normal italic leading-relaxed mb-6 max-w-2xl"
        >
          A multi-jurisdictional, enterprise-grade marketplace powered by Zoiko
          AI, Zoiko Assure, Zoiko Pay, and Zoiko Web Services
        </motion.p>

        {/* Entity Info Line with Yellow Highlight Badge */}
        <motion.p
          custom={0.35}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-white/90 text-[13.5px] font-normal leading-normal mb-10 flex items-center justify-center gap-1 flex-wrap"
        >
          <span>©</span>
          <span className="bg-[#FFE600] text-black font-bold px-1.5 py-0.5 rounded-[3px] text-[13px] leading-none inline-block">
            Zoiko Tech
          </span>
          <span>Inc. | USA | Fortune 10 / MIT-Sloan Edition</span>
        </motion.p>

        {/* Action Buttons with Routing Integration */}
        <motion.div
          custom={0.4}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full sm:w-auto"
        >
          {/* Join as Professional (Using Next.js Link) */}
          <Link
            href="/join-professional"
            className="w-full sm:w-auto min-w-[190px] text-center bg-white text-[#3ba8a0] font-semibold text-[15px] px-7 py-3.5 rounded-lg shadow-xs hover:bg-slate-50 transition-all duration-300"
          >
            Join as Professional
          </Link>

          {/* Hire with Confidence (Using Next.js Link / router.push option) */}
          <Link
            href="/hire-with-confidence"
            className="w-full sm:w-auto min-w-[190px] text-center bg-transparent border-2 border-white text-white font-semibold text-[15px] px-7 py-3.5 rounded-lg hover:bg-white/10 transition-all duration-300"
          >
            Hire with Confidence
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
