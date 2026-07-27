"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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
    title: "Experience Layer",
    description: "(Portal/App/Admin)",
  },
  {
    title: "Application Layer",
    description: "(Rating, Billing, Provisioning, Mediation)",
  },
  {
    title: "Integration Layer",
    description: "(MNO/MVNE connectors)",
  },
  {
    title: "Data Layer",
    description: "(Subscriber DB, Billing DB, CDR Store)",
  },
  {
    title: "Security Layer",
    description: "(Encryption, IAM/SSO, RBAC, Audit trails)",
  },
];

const engineeringPriorities = [
  "High-volume CDR throughput",
  "Event-driven microservices",
  "Auto-scaling infrastructure",
  "Sub-second rating latency",
];

export default function ArchitectureAndEngineering() {
  return (
    <section className="w-full bg-[#F8F9FA] py-20 px-6 md:px-12 lg:px-16 overflow-hidden min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto flex flex-col items-center w-full">
        {/* Main Section Title */}
        <motion.h2
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-3xl sm:text-4xl md:text-[40px] font-bold tracking-tight text-[#222222] text-center mb-16 leading-tight"
        >
          Architecture & Engineering
        </motion.h2>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full items-start">
          {/* Left Column: Layered Architecture */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <motion.h3
              custom={0.15}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUpVariant}
              className="text-xl font-bold text-[#222222] mb-2"
            >
              Layered Architecture
            </motion.h3>

            {architectureLayers.map((layer, index) => (
              <motion.div
                key={layer.title}
                custom={0.2 + index * 0.08}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeUpVariant}
                className="bg-white rounded-xl p-5 shadow-[0_4px_12px_#0000001A] hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)] transition-all duration-300 border-l-4 border-[#25A18E] flex flex-col justify-center"
              >
                <h4 className="text-[16px] font-bold text-[#222222] leading-snug">
                  {layer.title}
                </h4>
                <p className="text-[#777777] text-[13px] font-normal mt-0.5">
                  {layer.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Engineering Priorities */}
          <div className="lg:col-span-5 flex flex-col pt-0 lg:pt-0">
            <motion.h3
              custom={0.15}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUpVariant}
              className="text-xl font-bold text-[#222222] mb-6"
            >
              Engineering Priorities
            </motion.h3>

            <motion.div
              custom={0.25}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUpVariant}
              className="flex flex-col gap-5"
            >
              {engineeringPriorities.map((priority) => (
                <div
                  key={priority}
                  className="flex items-center text-[15px] font-medium text-[#444444] pb-4 border-b border-gray-200 last:border-none"
                >
                  <ArrowRight className="w-4 h-4 text-[#FF6B4A] mr-3 shrink-0 stroke-[2.5]" />
                  <span>{priority}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
