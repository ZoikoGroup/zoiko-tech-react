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

const evidenceCards = [
  {
    title: "Security overview",
    description:
      "Authoritative description of security architecture and operating principles.",
    image: "/cybersecurity-resilience/card-code-terminal.png",
  },
  {
    title: "Responsible disclosure",
    description:
      "A clear vulnerability-reporting route with safe researcher guidance.",
    image: "/cybersecurity-resilience/card-chip-hardware.png",
  },
  {
    title: "Certifications / attestations",
    description:
      "Standard, scope, legal entity, issuer and expiry, using registry wording.",
    image: "/cybersecurity-resilience/card-analytics-telemetry.png",
  },
  {
    title: "Policies / controls",
    description:
      "Aligned / Designed to language where appropriate. Never implies certification.",
    image: "/cybersecurity-resilience/card-digital-network.png",
  },
  {
    title: "Incidents / status",
    description:
      "Current incidents live on System Status, not static marketing copy.",
    image: "/cybersecurity-resilience/card-cyber-lock-matrix.png",
  },
  {
    title: "Assessment evidence",
    description:
      "Approved summary and scope only. No sensitive findings.",
    image: "/cybersecurity-resilience/identity-datacenter-servers.png",
  },
];

const trustClaimStatuses = [
  {
    status: "Certified / Attested",
    description:
      "A current certificate or attestation exists for the stated scope and legal entity.",
  },
  {
    status: "Compliant",
    description:
      "Only where legally and contractually supportable for the exact product, service and market.",
  },
  {
    status: "Aligned / Designed to",
    description:
      "Built with the standard in mind, not represented as certified.",
  },
  {
    status: "Roadmap / Target",
    description:
      "Future intention only, visually distinct, not procurement-ready.",
  },
];

export default function ResponsibleEvidenceSection() {
  return (
    <section id="evidence-disclosure" className="w-full bg-white py-14 sm:py-20 lg:py-[96px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[130px]">
        {/* Header (Figma itemSpacing: 20px) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          custom={0.1}
          className="w-full max-w-[1180px] mx-auto mb-8 lg:mb-[32px]"
        >
          <h2 className="font-poppins text-[26px] sm:text-[32px] lg:text-[35.2px] font-bold text-[#0A1416] leading-[1.2] lg:leading-[40.5px] tracking-[-0.02em] mb-2.5 max-w-[620px]">
            Responsible disclosure and security evidence
          </h2>
          <p className="text-[15px] sm:text-[16px] text-[#4D6468] leading-[24px] sm:leading-[25.6px]">
            Buyers are routed to authoritative evidence, not unverifiable marketing claims.
          </p>
        </motion.div>

        {/* 6 Evidence Cards in 3x2 Grid (Figma: width 377px, height 297px, gap: 18px) */}
        <div className="w-full max-w-[1180px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[18px] mb-10 lg:mb-[40px]">
          {evidenceCards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              custom={0.1 + idx * 0.04}
              className="bg-white border border-[#D5E3E5] hover:border-[#7FD0D9] rounded-[14px] shadow-[0_4px_16px_rgba(0,0,0,0.08),0_12px_28px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.14)] overflow-hidden flex flex-col justify-start transition-all duration-300 group"
            >
              {/* Top Image: exactly 140px, edge-to-edge */}
              <div className="relative w-full h-[140px] bg-gray-100 overflow-hidden shrink-0 rounded-t-[13px]">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 377px"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-poppins text-[16px] font-bold text-[#0A1416] mb-1.5 tracking-[-0.01em] leading-[25.6px]">
                  {card.title}
                </h3>
                <p className="text-[15.2px] text-[#4D6468] leading-[24.3px]">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Trust-Claim Status Definitions Section */}
        <div className="w-full max-w-[1180px] mx-auto">
          {/* Subheading (Outside the cards) */}
          <h3 className="font-poppins text-[18px] font-bold text-[#0A1416] mb-5 tracking-[-0.01em]">
            Trust-claim status
          </h3>

          {/* 4 Separate Status Cards (Figma: 282px x 165px, rounded-[14px], gap: 18px) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px]">
            {trustClaimStatuses.map((item, idx) => (
              <motion.div
                key={item.status}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUpVariant}
                custom={0.2 + idx * 0.05}
                className="bg-[#F4F8F9] border border-[#D5E3E5] rounded-[14px] p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex flex-col justify-start min-h-[165px]"
              >
                <h4 className="font-poppins text-[16.8px] font-bold text-[#0A1416] mb-2 leading-[1.2]">
                  {item.status}
                </h4>
                <p className="text-[15.2px] text-[#4D6468] leading-[24.3px]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
