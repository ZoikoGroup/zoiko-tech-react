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

const identityPillars = [
  {
    title: "Authentication",
    description: "Only methods platform documentation supports.",
  },
  {
    title: "Authorization",
    description: "Roles, entitlements, scopes, permission boundaries.",
  },
  {
    title: "Privileged access",
    description: "High-impact authority kept separate from routine access.",
  },
  {
    title: "Service identity",
    description: "Non-human identities and integrations as governed actors.",
  },
  {
    title: "Delegated authority",
    description: "Who can act on behalf of whom, and within what scope.",
  },
  {
    title: "Review & revocation",
    description:
      "Periodic recertification, and rapid removal when role, risk or incident conditions require it.",
  },
];

export default function IdentityAccessSection() {
  return (
    <section id="identity-access" className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[130px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Heading, Lead, Image & CTA */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            custom={0.1}
            className="lg:col-span-6 flex flex-col items-start"
          >
            <h2 className="text-[26px] sm:text-[32px] lg:text-[35.2px] font-bold text-[#0B282B] leading-[1.2] tracking-[-0.02em] mb-4">
              Identity, access and least privilege
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#4D6468] leading-[26px] mb-6">
              Identity is where much of the risk sits. The deeper authentication
              and entitlement architecture lives on the Identity &amp; Access page.
            </p>

            {/* Datacenter Server Equipment Image */}
            <div className="relative w-full aspect-[16/9] rounded-[14px] overflow-hidden border border-[#D5E3E5] shadow-sm mb-6 bg-gray-100">
              <Image
                src="/cybersecurity-resilience/identity-datacenter-servers.png"
                alt="Rows of network equipment in an enterprise data center"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 568px"
              />
            </div>

            <a
              href="#contact-sales"
              className="inline-flex items-center justify-center w-full sm:w-auto px-6 h-[48px] rounded-[10px] bg-[#247780] hover:bg-[#1C5C62] text-white font-semibold text-[15px] sm:text-[16px] transition-colors duration-200 text-center"
            >
              Explore Identity &amp; Access
            </a>
          </motion.div>

          {/* Right Column: 6 Principle Cards in 2x3 Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {identityPillars.map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUpVariant}
                custom={0.12 + idx * 0.06}
                className="bg-[#F3F9FA] border border-[#D5E3E5] hover:border-[#7FD0D9] rounded-[14px] p-5 flex flex-col justify-start transition-all duration-200 hover:shadow-sm"
              >
                <h3 className="text-[16.8px] font-bold text-[#0B282B] mb-2 tracking-[-0.01em]">
                  {pillar.title}
                </h3>
                <p className="text-[14.5px] sm:text-[15px] text-[#4D6468] leading-[23px]">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
