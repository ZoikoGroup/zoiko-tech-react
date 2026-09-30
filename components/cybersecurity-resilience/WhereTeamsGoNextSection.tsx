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

const expansionPaths = [
  {
    title: "Cybersecurity / Zoiko Shield",
    flow: "Identity & Access → Regulatory & Compliance → AI Governance & Assurance",
  },
  {
    title: "Identity-heavy program",
    flow: "Identity & Access → Cybersecurity & Resilience → Platform administration",
  },
  {
    title: "Cloud / developer foundation",
    flow: "Cloud & Developer Infrastructure → Cybersecurity & Resilience → Modernization & Integration",
  },
  {
    title: "AI / agent deployment",
    flow: "AI Governance & Assurance → Identity & Access → Cybersecurity & Resilience",
  },
];

export default function WhereTeamsGoNextSection() {
  return (
    <section
      id="where-teams-go-next"
      className="relative w-full overflow-hidden text-white py-16 sm:py-20 lg:py-24"
      style={{
        background:
          "linear-gradient(155deg, rgba(0, 0, 0, 1) 0%, rgba(28, 92, 98, 1) 100%)",
      }}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[130px]">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          custom={0.1}
          className="w-full max-w-[1180px] mx-auto mb-8 sm:mb-10"
        >
          <h2 className="font-sora text-[28px] sm:text-[32px] lg:text-[35.2px] font-bold text-white leading-[1.2] tracking-[-0.02em] mb-3">
            Where teams go next
          </h2>
          <p className="text-[15px] sm:text-[16px] text-[#DCECEE] leading-[26px] max-w-[707px]">
            Routes are contextual and never appear during an active incident,
            security exception or sensitive evidence review.
          </p>
        </motion.div>

        {/* 4 Path Cards Grid */}
        <div className="w-full max-w-[1180px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px] mb-8 lg:mb-[32px]">
          {expansionPaths.map((path, idx) => (
            <motion.div
              key={path.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              custom={0.1 + idx * 0.06}
              className="bg-white/[0.06] border border-[#7FD0D9]/35 rounded-[14px] p-5 flex flex-col justify-start backdrop-blur-sm hover:border-[#7FD0D9] hover:bg-white/[0.1] transition-all duration-200 min-h-[161px]"
            >
              <h3 className="font-sora text-[16px] font-bold text-white mb-2 leading-snug">
                {path.title}
              </h3>
              <p className="text-[13.8px] text-[#DCECEE]/90 leading-[22px]">
                {path.flow}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stock Image Banner Graphic */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          custom={0.3}
          className="w-full max-w-[1180px] mx-auto relative h-[200px] sm:h-[280px] lg:h-[320px] rounded-[14px] sm:rounded-[16px] overflow-hidden border border-[#7FD0D9]/40 shadow-2xl bg-black/40"
        >
          <Image
            src="/cybersecurity-resilience/expansion-where-teams-go.png"
            alt="Multi-system enterprise solution adjacent pathway map"
            fill
            className="object-cover"
            sizes="(max-width: 1440px) 100vw, 1180px"
          />
        </motion.div>
      </div>
    </section>
  );
}
