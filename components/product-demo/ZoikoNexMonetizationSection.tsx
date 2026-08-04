"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface ShowcasePoint {
  text: string;
}

const showcasePoints: ShowcasePoint[] = [
  { text: "Configuring real-time usage, subscription, and milestone billing" },
  { text: "Cross-border tax mapping and compliance orchestration" },
  { text: "Multi-entity, multi-currency dashboards for CFOs and audit teams" },
  { text: "Payment gateway integrations and disbursement workflows" },
  {
    text: "Smart alerts for revenue leakage, threshold breaches, and chargeback risk",
  },
];

export default function ZoikoNexMonetizationSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  } as const;

  return (
    <section className="w-full bg-white text-[#1D1D1F] py-24 px-6 sm:px-12 md:px-16 lg:px-24 font-sans antialiased overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Title and Checklist */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Section Headline */}
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold tracking-tight text-[#111827] leading-[1.18]"
            >
              ZoikoNex&trade; &ndash; Monetization, <br />
              Billing &amp; Revenue Automation
            </motion.h2>

            {/* Intro Lead */}
            <motion.p
              variants={itemVariants}
              className="text-[#6B7280] text-sm sm:text-base font-normal leading-relaxed max-w-xl"
            >
              Interactive demos showcase:
            </motion.p>

            {/* Checklist items */}
            <motion.ul
              variants={containerVariants}
              className="space-y-3.5 pt-1"
            >
              {showcasePoints.map((point, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-[#56B810] flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                    <Check
                      className="w-3.5 h-3.5"
                      color="#FFFFFF"
                      strokeWidth={3}
                    />
                  </div>
                  <span className="text-[#4B5563] text-sm sm:text-base font-medium leading-normal">
                    {point.text}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Right Column: Overlapping Image Stack (Strictly sharp corners, no border-radius) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end items-center pt-6 lg:pt-0"
          >
            {/* Background Base Image (Square/Sharp Edges) */}
            <div className="relative w-full max-w-[460px] h-[320px] sm:h-[380px] overflow-hidden shadow-xl">
              <img
                src="/product-demo/3.png"
                alt="Business executives discussing financial metrics in office"
                className="w-full h-full object-cover object-center block"
              />
            </div>

            {/* Foreground Overlapping Floating Card with White Border (Square/Sharp Edges) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="absolute -bottom-8 -right-2 sm:-right-4 w-[80%] max-w-[360px] h-[200px] sm:h-[240px] overflow-hidden shadow-2xl border-4 border-white bg-white"
            >
              <img
                src="/product-demo/4.png"
                alt="Financial growth chart with coins and digital upwards arrows"
                className="w-full h-full object-cover object-center block"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
