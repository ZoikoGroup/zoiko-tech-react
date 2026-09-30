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

const siloIssues = [
  {
    title: "Assets are unknown",
    description:
      "Show discovery, ownership and criticality, with an honest Unknown state instead of a pretend-complete inventory.",
  },
  {
    title: "Access outlives purpose",
    description:
      "Connect identity, entitlement, review and revocation to least privilege.",
  },
  {
    title: "Controls have no owner",
    description:
      "Every control and exception shows an accountable owner and review date.",
  },
  {
    title: "Alerts lack business context",
    description:
      "Tie each signal to the affected asset, identity, service and business dependency.",
  },
  {
    title: "Incidents end at containment",
    description:
      "Recovery, validation, lessons and evidence are part of the incident lifecycle.",
  },
  {
    title: "Continuity plans are disconnected",
    description:
      "Map critical services to dependencies and recovery priorities.",
  },
  {
    title: "Trust claims drift from evidence",
    description:
      "Use governed registries and explicit evidence states.",
  },
];

export default function WhySilosFailSection() {
  return (
    <section
      id="why-silos-fail"
      className="relative w-full overflow-hidden text-white py-16 sm:py-20 lg:py-24"
      style={{
        background:
          "linear-gradient(155deg, rgba(0, 0, 0, 1) 0%, rgba(28, 92, 98, 1) 100%)",
      }}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[130px]">
        {/* Section Heading (Figma itemSpacing: 22px) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          custom={0.1}
          className="mb-6 lg:mb-[22px]"
        >
          <h2 className="font-poppins text-[28px] sm:text-[32px] lg:text-[35.2px] font-bold text-white leading-[40.5px] tracking-[-0.02em]">
            Why security fails in silos
          </h2>
        </motion.div>

        {/* Content Row: Left Column 623px with outer container, Right Column 538px Diagram */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-[18px]">
          {/* Left Column: Outer Cyan Bordered Container (Figma: rounded-20px, border-[#6FD0F6], p-[21px]) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            custom={0.15}
            className="w-full lg:w-[623px] rounded-[20px] border border-[#6FD0F6] p-4 sm:p-[21px]"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[18px]">
              {siloIssues.map((item, idx) => (
                <div
                  key={item.title}
                  className={`bg-white/[0.06] border border-[#7FD0D9]/35 rounded-[14px] p-5 flex flex-col gap-2 backdrop-blur-sm hover:border-[#7FD0D9] hover:bg-white/[0.1] transition-all duration-200 min-h-[160px] ${
                    idx === 6 ? "sm:col-span-2 sm:max-w-[282px] sm:mx-auto" : ""
                  }`}
                >
                  <h3 className="font-poppins text-[16px] font-bold text-white tracking-[-0.01em] leading-[25.6px]">
                    {item.title}
                  </h3>
                  <p className="text-[13.8px] sm:text-[14px] text-[#A3B8B9] leading-[22.4px]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Visual Diagram Image (Figma 538x360 clean graphic without wrapper) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            custom={0.25}
            className="w-full lg:w-[538px] flex justify-center items-center pt-2 lg:pt-6"
          >
            <div className="relative w-full max-w-[538px]">
              <Image
                src="/cybersecurity-resilience/silos-security-architecture.png"
                alt="Why security fails in silos architecture diagram"
                width={538}
                height={360}
                className="w-full h-auto object-contain drop-shadow-2xl"
                sizes="(max-width: 1024px) 100vw, 538px"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
