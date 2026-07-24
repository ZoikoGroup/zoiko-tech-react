"use client";

import React from "react";
import { motion } from "framer-motion";

const architectureFeatures = [
  {
    title: "Cloud-Native Infrastructure",
    description:
      "Kubernetes-based microservices architecture with auto-scaling, high availability, and disaster recovery capabilities.",
  },
  {
    title: "API-First Design",
    description:
      "RESTful APIs and GraphQL endpoints enabling seamless integration with existing systems and third-party services.",
  },
  {
    title: "Multi-Tenant Security",
    description:
      "Zero-trust security model with end-to-end encryption, role-based access control, and comprehensive audit logging.",
  },
  {
    title: "Global Compliance",
    description:
      "Multi-jurisdiction compliance framework supporting telecom and financial services regulations across 50+ countries.",
  },
  {
    title: "Real-Time Processing",
    description:
      "Event-driven architecture with real-time data processing, streaming analytics, and sub-second response times.",
  },
  {
    title: "Ecosystem Integration",
    description:
      "Native Integration with Zoiko AI, ZoikoPay, ZoikoAssure, and ZWS for comprehensive platform synergy.",
  },
];

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

export default function EnterpriseArchitecture() {
  return (
    <section className="w-full bg-white text-[#0f1124] px-6 md:px-12 lg:px-20 py-20 md:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <motion.div
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-center mb-16 md:mb-20 max-w-3xl"
        >
          <h2 className="text-3xl sm:text-4xl md:text-[38px] font-bold text-[#1e293b] tracking-tight mb-4 leading-tight">
            Enterprise Architecture
          </h2>
          <p className="text-[#64748b] text-[14.5px] sm:text-[15.5px] font-normal leading-relaxed">
            Scalable, secure, and compliant infrastructure built for global
            operations
          </p>
        </motion.div>

        {/* 4-Column Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 sm:gap-y-14 w-full">
          {architectureFeatures.map((item, idx) => (
            <motion.div
              key={idx}
              custom={0.1 * (idx + 1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUpVariant}
              className="flex flex-col h-full"
            >
              <div className="border-l-[3px] border-[#4FD1C7] pl-5 md:pl-6 h-full flex flex-col justify-start">
                {/* Feature Title */}
                <h3 className="text-[17px] md:text-[18px] font-bold text-[#1e293b] mb-3 leading-snug">
                  {item.title}
                </h3>

                {/* Feature Description */}
                <p className="text-[#64748b] text-[13.5px] md:text-[14px] leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
