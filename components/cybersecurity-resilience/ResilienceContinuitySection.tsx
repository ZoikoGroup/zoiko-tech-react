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

const resiliencePillars = [
  {
    title: "Critical service",
    description:
      "A process that must continue or recover within an approved priority.",
  },
  {
    title: "Dependencies",
    description:
      "Applications, identity, data, integrations, infrastructure, third parties, roles.",
  },
  {
    title: "Degraded mode",
    description:
      "What continues safely, what stops, and the approved alternate path.",
  },
  {
    title: "Recovery priority & owner",
    description:
      "Order or tier, with a named accountable role. RTO / RPO only if formally approved.",
  },
  {
    title: "Validation",
    description:
      "Evidence that recovered operation works and residual issues are understood.",
  },
];

export default function ResilienceContinuitySection() {
  return (
    <section
      id="resilience-continuity"
      className="relative w-full overflow-hidden text-white py-14 sm:py-20 lg:py-24"
      style={{
        background:
          "linear-gradient(155deg, rgba(0, 0, 0, 1) 0%, rgba(28, 92, 98, 1) 100%)",
      }}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[130px]">
        {/* Content Row: Left Column 636px with 2-column cards, Right Column 500px Photo */}
        <div className="w-full max-w-[1180px] mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-[44px]">
          {/* Left Column (Figma width: 636px) */}
          <div className="w-full lg:w-[636px] flex flex-col">
            {/* Header (Figma max-w-[480px], itemSpacing: 20px) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              custom={0.1}
              className="mb-6 lg:mb-[20px]"
            >
              <h2 className="font-poppins text-[26px] sm:text-[32px] lg:text-[35.2px] font-bold text-white leading-[1.2] lg:leading-[40.5px] tracking-[-0.02em] mb-3 max-w-[460px]">
                Resilience and business continuity
              </h2>
              <p className="text-[14.5px] sm:text-[16px] text-[#A3B8B9] leading-[24px] sm:leading-[26px] max-w-[580px]">
                Resilience is broader than backup. Show dependencies, minimum viable
                operation, recovery priorities and a controlled return to normal.
              </p>
            </motion.div>

            {/* 5 Pillar Cards in 2-Column Grid (Figma: 309px x 142px cards, gap: 18px) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[18px]">
              {resiliencePillars.map((pillar, idx) => (
                <motion.div
                  key={pillar.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUpVariant}
                  custom={0.15 + idx * 0.05}
                  className="bg-white/[0.06] border border-[#7FD0D9]/35 rounded-[14px] p-4 sm:p-5 flex flex-col gap-2 backdrop-blur-sm hover:border-[#7FD0D9] hover:bg-white/[0.1] transition-all duration-200 min-h-[130px] sm:min-h-[142px]"
                >
                  <h3 className="font-poppins text-[15.5px] sm:text-[16px] font-bold text-white tracking-[-0.01em] leading-[24px] sm:leading-[25.6px]">
                    {pillar.title}
                  </h3>
                  <p className="text-[13.5px] sm:text-[14px] text-[#A3B8B9] leading-[21px] sm:leading-[22px]">
                    {pillar.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Resilience Photo Panel (Figma: 500x634, rounded-[14px], border-[#7FD0D9]/35) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            custom={0.25}
            className="w-full lg:w-[500px] shrink-0 flex justify-center"
          >
            <div className="relative w-full max-w-[500px] h-[280px] sm:h-[420px] lg:h-[634px] rounded-[14px] lg:rounded-[16px] overflow-hidden border border-[#7FD0D9]/35 shadow-2xl">
              <Image
                src="/cybersecurity-resilience/resilience-business-continuity.png"
                alt="Business continuity and resilience operational team conference"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 500px"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
