"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: (customDelay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
      delay: customDelay,
    },
  }),
};

const platforms = [
  {
    name: "ZoikoTime",
    desc: "Governed workforce time, productivity and provenance; workforce assurance, verification and performance intelligence.",
    tag: "Approved live features only",
  },
  {
    name: "Zoiko HR",
    desc: "Employee and workforce master context, policy, leave and organizational handoffs.",
    tag: "HR / people-system evidence",
  },
  {
    name: "Zoiko Sema",
    desc: "Meetings, messaging and calling; governed business communications for intelligent workflows.",
    tag: "With policy boundaries",
  },
  {
    name: "Zoiko One",
    desc: "Mapped to this solution in the source.",
    tag: "Hidden until approved",
  },
];

export default function PlatformEvidenceSection() {
  return (
    <section
      id="platform-evidence"
      className="w-full text-white py-16 lg:py-24"
      style={{
        background:
          "linear-gradient(155deg, rgba(0, 0, 0, 1) 0%, rgba(28, 92, 98, 1) 100%)",
      }}
    >
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[130px]">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          className="mb-10"
        >
          <h2 className="text-[28px] sm:text-[32px] lg:text-[35.2px] font-bold leading-[1.15] text-white mb-3">
            Platform evidence
          </h2>
          <p className="text-[16px] leading-[25.6px] text-[#DCECEE] max-w-[820px]">
            Product names are supporting evidence, shown within each platform’s
            approved public scope and maturity.
          </p>
        </motion.div>

        {/* 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {platforms.map((p, idx) => (
            <motion.div
              key={p.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              custom={idx * 0.08}
              className="p-5 rounded-[14px] bg-white/[0.06] border border-[#7FD0D9]/35 backdrop-blur-sm flex flex-col justify-between min-h-[200px]"
            >
              <div>
                <h3 className="text-[16.8px] font-bold text-white mb-2">
                  {p.name}
                </h3>
                <p className="text-[14.5px] sm:text-[15.2px] leading-[24px] text-[#DCECEE] mb-4">
                  {p.desc}
                </p>
              </div>

              <div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full border border-[#7FD0D9] text-[#7FD0D9] text-[12.8px] font-semibold leading-[20px]">
                  {p.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Buttons */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          custom={0.3}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href="/solutions-zoikotime"
            className="inline-flex items-center justify-center px-6 py-3 rounded-[10px] bg-white text-black font-semibold text-[16px] hover:bg-[#DCECEE] transition-colors"
          >
            Explore ZoikoTime
          </a>
          <a
            href="/about-us"
            className="inline-flex items-center justify-center px-6 py-3 rounded-[10px] border-2 border-[#7FD0D9] text-white font-semibold text-[16px] hover:bg-[#7FD0D9]/10 transition-colors"
          >
            Explore Zoiko HR
          </a>
        </motion.div>
      </div>
    </section>
  );
}
