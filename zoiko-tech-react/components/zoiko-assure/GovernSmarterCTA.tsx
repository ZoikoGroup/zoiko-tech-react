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

export default function GovernSmarterCTA() {
  const router = useRouter();

  const handleConsultSpecialist = () => {
    // Standard router push example for programmatic routing
    router.push("/consultation");
  };

  return (
    <section className="w-full bg-gradient-to-r from-[#44c3b8] via-[#379c93] to-[#2a756f] text-white px-6 md:px-12 lg:px-20 py-20 md:py-28 overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Main Section Heading */}
        <motion.h2
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-3xl sm:text-4xl md:text-[44px] font-bold tracking-tight mb-4 leading-tight text-white"
        >
          Govern Smarter — Assure Globally
        </motion.h2>

        {/* Subtitle / Description */}
        <motion.p
          custom={0.2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-white/90 text-[16px] sm:text-[18px] font-normal leading-relaxed mb-10 max-w-2xl"
        >
          Transform your compliance operations with AI-driven governance
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          custom={0.3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full sm:w-auto"
        >
          {/* Request Enterprise Demo Button */}
          <Link
            href="/request-demo?plan=enterprise"
            className="w-full sm:w-auto min-w-[220px] text-center bg-white text-[#3ba8a0] font-semibold text-[15px] px-7 py-3.5 rounded-lg shadow-xs hover:bg-slate-50 transition-all duration-300"
          >
            Request Enterprise Demo
          </Link>

          {/* Consult Compliance Specialist Button */}
          <Link
            href="/consultation"
            className="w-full sm:w-auto min-w-[240px] text-center bg-transparent border-2 border-white text-white font-semibold text-[15px] px-7 py-3.5 rounded-lg hover:bg-white/10 transition-all duration-300"
          >
            Consult Compliance Specialist
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
