"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: (customDelay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
      delay: customDelay,
    },
  }),
};

const engineeringCards = [
  {
    title: "Secure design",
    description:
      "Threat-aware architecture and security requirements in system design, at an approved high level.",
    image: "/cybersecurity-resilience/identity-datacenter-servers.png",
  },
  {
    title: "Environment separation",
    description:
      "Development, test and production kept apart where supported.",
    image: "/cybersecurity-resilience/card-code-terminal.png",
  },
  {
    title: "Secrets and credentials",
    description:
      "Scoped storage and handling. Real secrets never appear in screenshots.",
    image: "/cybersecurity-resilience/card-chip-hardware.png",
  },
  {
    title: "Dependency governance",
    description:
      "Third-party and open-source risk handled at the level product evidence supports.",
    image: "/cybersecurity-resilience/card-analytics-telemetry.png",
  },
  {
    title: "Configuration and hardening",
    description:
      "Secure configuration and baseline concepts, with no invented benchmark coverage.",
    image: "/cybersecurity-resilience/card-digital-network.png",
  },
  {
    title: "Change and release",
    description:
      "Security review, approval, evidence, rollback or containment, and post-release validation.",
    image: "/cybersecurity-resilience/card-cyber-lock-matrix.png",
  },
  {
    title: "Vulnerability remediation",
    description:
      "Issue ownership, prioritization, remediation and validation as a design pattern.",
    image: "/cybersecurity-resilience/identity-datacenter-servers.png",
  },
];

export default function SecureEngineeringSection() {
  return (
    <section id="secure-engineering" className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[130px]">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          custom={0.1}
          className="mb-10 sm:mb-12 max-w-[800px]"
        >
          <h2 className="text-[26px] sm:text-[32px] lg:text-[35.2px] font-bold text-[#0B282B] leading-[1.2] tracking-[-0.02em] mb-3">
            Secure engineering and change
          </h2>
          <p className="text-[15px] sm:text-[16px] text-[#4D6468] leading-[26px]">
            Prevention built into design, configuration, environments and release.
            Testing or secure-SDLC evidence is published through Trust Center, not
            generic marketing claims.
          </p>
        </motion.div>

        {/* 7 Cards Grid: Top 4 cards, Bottom 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {engineeringCards.slice(0, 4).map((card, idx) => (
            <motion.div
              key={card.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              custom={0.1 + idx * 0.05}
              className="bg-[#F3F9FA] border border-[#D5E3E5] hover:border-[#7FD0D9] rounded-[14px] p-5 flex flex-col justify-start transition-all duration-200 hover:shadow-sm group"
            >
              <div className="relative w-full h-[140px] rounded-[10px] overflow-hidden mb-4 bg-gray-100">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 280px"
                />
              </div>
              <h3 className="text-[16.8px] font-bold text-[#0B282B] mb-2 tracking-[-0.01em]">
                {card.title}
              </h3>
              <p className="text-[14.5px] sm:text-[15px] text-[#4D6468] leading-[23px]">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {engineeringCards.slice(4).map((card, idx) => (
            <motion.div
              key={card.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              custom={0.2 + idx * 0.05}
              className="bg-[#F3F9FA] border border-[#D5E3E5] hover:border-[#7FD0D9] rounded-[14px] p-5 flex flex-col justify-start transition-all duration-200 hover:shadow-sm group"
            >
              <div className="relative w-full h-[140px] rounded-[10px] overflow-hidden mb-4 bg-gray-100">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
                />
              </div>
              <h3 className="text-[16.8px] font-bold text-[#0B282B] mb-2 tracking-[-0.01em]">
                {card.title}
              </h3>
              <p className="text-[14.5px] sm:text-[15px] text-[#4D6468] leading-[23px]">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
