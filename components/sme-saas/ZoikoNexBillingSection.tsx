"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Check } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
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

const capabilities: string[] = [
  "Real-time usage metering and tiered pricing logic",
  "Subscription, seat-based, hybrid, and consumption models",
  "Global tax rules (VAT, GST, DST, withholding)",
  "Secure integration with Stripe, ACH, and payment gateways",
  "Deferred revenue, MRR/ARR analytics, and investor-grade reporting",
];

export default function ZoikoNexBillingSection() {
  return (
    <section className="relative w-full bg-white py-12 md:py-16 px-6 font-sans text-[#555555]">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-12 lg:gap-20 items-center"
      >
        {/* Left Logo Area */}
        <motion.div
          variants={itemVariants}
          className="order-2 lg:order-1 flex items-center justify-center lg:justify-start"
        >
          <img
            src="/telecom/nex.png"
            alt="ZoikoNex - Next-Gen Borderless Billing Logo"
            className="w-full max-w-[320px] h-auto object-contain"
          />
        </motion.div>

        {/* Right Content Area */}
        <div className="order-1 lg:order-2 space-y-6 flex flex-col justify-center">
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-2xl md:text-[28px] font-bold tracking-tight text-[#1a1a1a] leading-tight">
              ZoikoNex™ — Enterprise Billing & Revenue Orchestration
            </h2>

            <p className="text-sm md:text-[15px] leading-relaxed text-[#666666] max-w-3xl">
              ZoikoNex™ is the intelligent billing platform powering global SaaS
              revenue. Built to handle complexity at scale, it supports all
              modern pricing models — while ensuring complete visibility and
              auditability for finance and operations.
            </p>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-sm font-medium text-[#666666]"
          >
            Capabilities include:
          </motion.p>

          {/* Feature List */}
          <motion.ul variants={itemVariants} className="space-y-3">
            {capabilities.map((capability, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#52B61B] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-white stroke-[3]" />
                </div>

                <span className="text-xs md:text-[15px] text-[#555555] leading-relaxed">
                  {capability}
                </span>
              </li>
            ))}
          </motion.ul>

          <motion.p
            variants={itemVariants}
            className="text-sm text-[#666666] pt-2 max-w-3xl"
          >
            ZoikoNex™ doesn't just manage billing — it turns it into a strategic
            engine.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
