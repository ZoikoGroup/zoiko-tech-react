"use client";

import React from "react";
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

const architectureLayers = [
  {
    title: "Core Platform",
    tags: [
      "Orbit Intelligence Engine™",
      "Global Connectivity Fabric™",
      "Mobility Commerce Hub™",
      "Inventory Engine",
      "Wallet & Payments Layer",
    ],
  },
  {
    title: "Integration Layer",
    tags: [
      "GDS Flight Platforms",
      "Hotel Aggregators",
      "Car Rentals",
      "Insurance APIs",
      "ZoikoNex (eSIM)",
      "ZoikoPay",
    ],
  },
  {
    title: "Data Layer",
    tags: [
      "Bookings",
      "Profiles",
      "eSIM Usage",
      "Wallet Balances",
      "Itinerary Data",
    ],
  },
  {
    title: "Security",
    tags: ["PCI-DSS Assist", "Encryption", "IAM/SSO", "RBAC"],
  },
];

export default function PlatformArchitecture() {
  return (
    <section className="w-full bg-[#F8F9FA] py-20 px-6 md:px-12 lg:px-16 min-h-screen flex items-center justify-center">
      <div className="max-w-5xl mx-auto flex flex-col items-center w-full">
        {/* Top Header Badge */}
        <motion.div
          custom={0.05}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="mb-6"
        >
          <span className="bg-[#E8F2F2] text-[#006666] px-4 py-1.5 rounded-full text-[13px] font-medium tracking-wide">
            Platform Architecture
          </span>
        </motion.div>

        {/* Section Header */}
        <motion.div
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-center mb-16 max-w-3xl"
        >
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold tracking-tight text-[#1A202C] leading-tight">
            Built for Scale and Reliability
          </h2>
        </motion.div>

        {/* Vertical Stacked Cards */}
        <div className="flex flex-col gap-6 w-full">
          {architectureLayers.map((layer, index) => (
            <motion.div
              key={layer.title}
              custom={0.15 + index * 0.08}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUpVariant}
              className="bg-white rounded-2xl p-6 md:p-8 border-l-[4px] border-l-[#20B2AA] max-w-4xl flex flex-col justify-center items-start transition-all duration-300 hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)]"
            >
              {/* Layer Title */}
              <h3 className="text-lg md:text-xl font-bold text-[#006059] mb-5 leading-snug">
                {layer.title}
              </h3>

              {/* Pills / Badges Container */}
              <div className="flex flex-wrap gap-3 w-full">
                {layer.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#E8F2F2] text-[#4A5F5F] px-4 py-2 rounded-xl text-[13px] md:text-[14px] font-medium tracking-tight border border-[#D5EAE8]/60 transition-colors duration-200 hover:bg-[#E2F0F0]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
