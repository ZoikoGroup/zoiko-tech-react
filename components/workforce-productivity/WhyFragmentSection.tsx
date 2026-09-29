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
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
      delay: customDelay,
    },
  }),
};

const fragmentReasons = [
  {
    title: "Time is isolated",
    text: "Time signals without workforce or workflow context create exceptions and manual reconciliation.",
  },
  {
    title: "People data is isolated",
    text: "HR system context is governed reference information, not a monitoring layer.",
  },
  {
    title: "Collaboration is isolated",
    text: "Meetings, messages and decisions count as operational context only when tied to legitimate work.",
  },
  {
    title: "Policies live outside workflows",
    text: "Policy is a visible rule and review layer, not after-the-fact enforcement.",
  },
  {
    title: "Ownership is unclear",
    text: "Review, approval and exception ownership are explicit.",
  },
  {
    title: "Evidence is fragmented",
    text: "Provenance, verification and audit evidence are kept where required.",
  },
];

export default function WhyFragmentSection() {
  return (
    <section
      className="w-full text-white py-16 lg:py-24"
      style={{
        background:
          "linear-gradient(158deg, rgba(0, 0, 0, 1) 0%, rgba(28, 92, 98, 1) 100%)",
      }}
    >
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[130px]">
        {/* Section Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          className="mb-10"
        >
          <h2 className="text-[28px] sm:text-[32px] lg:text-[35.2px] font-bold leading-[1.15] text-white">
            Why workforce operations fragment
          </h2>
        </motion.div>

        {/* Content Row: 6 Cards Left + Image Right */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10">
          {/* Left Cards Grid (3 columns on md/lg) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 flex-1">
            {fragmentReasons.map((item, index) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUpVariant}
                custom={index * 0.08}
                className="p-5 rounded-[14px] bg-white/[0.06] border border-[#7FD0D9]/35 backdrop-blur-sm flex flex-col justify-start min-h-[175px] hover:border-[#7FD0D9]/60 transition-colors"
              >
                <h3 className="text-[16.8px] font-bold leading-[1.25] text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-[15.2px] font-normal leading-[24px] text-[#DCECEE]">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right Illustrative Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            custom={0.3}
            className="w-full max-w-[332px] shrink-0"
          >
            <div className="relative w-full h-[380px] sm:h-[398px] rounded-[14px] overflow-hidden shadow-xl border border-white/10">
              <Image
                src="/workforce-productivity/fragment-operations.png"
                alt="Why workforce operations fragment"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
