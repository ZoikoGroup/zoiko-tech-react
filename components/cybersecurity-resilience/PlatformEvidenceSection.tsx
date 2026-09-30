"use client";

import React from "react";
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

const platforms = [
  {
    title: "Zoiko Shield",
    description:
      "Primary delivery evidence for this solution. Public descriptor, maturity, operator, capabilities and markets only as approved.",
  },
  {
    title: "Shared security capabilities",
    description:
      "Controls embedded across Zoiko platforms, described only where platform owners approve.",
  },
  {
    title: "Identity & Access",
    description: "Adjacent control layer. Cross-linked, not duplicated.",
  },
  {
    title: "Trust Center",
    description:
      "Authoritative route for security, privacy, compliance, evidence and disclosure.",
  },
  {
    title: "System Status",
    description:
      "Authoritative route for service health. No hard-coded incident or uptime claims.",
  },
];

export default function PlatformEvidenceSection() {
  return (
    <section
      id="platform-evidence"
      className="relative w-full overflow-hidden text-white py-14 sm:py-20 lg:py-[96px]"
      style={{
        background:
          "linear-gradient(155deg, rgba(0, 0, 0, 1) 0%, rgba(28, 92, 98, 1) 100%)",
      }}
    >
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
          <h2 className="font-poppins text-[26px] sm:text-[32px] lg:text-[35.2px] font-bold text-white leading-[1.2] lg:leading-[40.5px] tracking-[-0.02em] mb-2.5 max-w-[480px]">
            Platform evidence
          </h2>
          <p className="text-[14.5px] sm:text-[16px] text-[#A3B8B9] leading-[24px] sm:leading-[26px] max-w-[620px]">
            Named platforms appear only within approved descriptor, maturity, operator and evidence records.
          </p>
        </motion.div>

        {/* 5 Platform Cards in 4-Column Grid (Figma: 282px cards, 18px gap) */}
        <div className="w-full max-w-[1180px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px]">
          {platforms.map((platform, idx) => (
            <motion.div
              key={platform.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              custom={0.1 + idx * 0.04}
              className="bg-white/[0.06] border border-[#7FD0D9]/35 rounded-[14px] p-4 sm:p-5 flex flex-col gap-2 backdrop-blur-sm hover:border-[#7FD0D9] hover:bg-white/[0.1] transition-all duration-200 min-h-[150px] sm:min-h-[165px]"
            >
              <h3 className="font-poppins text-[15.5px] sm:text-[16px] font-bold text-white tracking-[-0.01em] leading-[24px] sm:leading-[25.6px]">
                {platform.title}
              </h3>
              <p className="text-[13.5px] sm:text-[14px] text-[#A3B8B9] leading-[21px] sm:leading-[22px]">
                {platform.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Standalone Button (Figma: rounded-10px, 48px height, px-6, text-black bg-white) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          custom={0.3}
          className="w-full max-w-[1180px] mx-auto mt-6 lg:mt-[24px]"
        >
          <a
            href="/solutions-zoikoshield"
            className="w-full sm:w-auto inline-flex items-center justify-center h-[48px] px-6 rounded-[10px] bg-white text-black font-semibold text-[16px] hover:bg-[#DCECEE] transition-colors shadow-md text-center"
          >
            Explore Zoiko Shield
          </a>
        </motion.div>
      </div>
    </section>
  );
}
