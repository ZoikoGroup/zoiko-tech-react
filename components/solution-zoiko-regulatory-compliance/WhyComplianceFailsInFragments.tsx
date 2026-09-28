"use client";

import React from "react";
import { motion } from "framer-motion";

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

type FailureCard = {
  title: string[];
  description: string[];
};

const cards: FailureCard[] = [
  {
    title: ["Rules change outside the", "system"],
    description: ["Authoritative-source intake with", "change ownership."],
  },
  {
    title: ["Applicability lives in memory"],
    description: ["Explicit entity, jurisdiction, product", "and process records."],
  },
  {
    title: ["Controls without evidence"],
    description: ["Controls bound to current evidence", "and accountable owners."],
  },
  {
    title: ["Evidence goes stale"],
    description: ["Freshness states; stale proof is", "never silently reused."],
  },
  {
    title: ["Unknown becomes “clear”"],
    description: ["Unknown, Unsupported and Partial", "stay visible."],
  },
  {
    title: ["Deadlines detached"],
    description: ["Due dates linked to approved", "obligations where supported."],
  },
  {
    title: ["Findings don’t close"],
    description: ["Finding → owner → remediation →", "retest → closure."],
  },
];

export default function WhyComplianceFailsInFragments() {
  return (
    <section
      className="w-full border-t border-solid border-[#0b5c54] px-4 md:px-[100px] py-[60px] md:py-[79px]"
      style={{
        backgroundImage:
          "radial-gradient(circle at 50% 50%, rgba(2,90,81,1) 0%, rgba(2,52,46,1) 50%, rgba(2,32,29,1) 75%, rgba(2,13,12,1) 100%)",
      }}
    >
      <div className="max-w-[1240px] mx-auto px-0 md:px-[24px] flex flex-col items-start gap-[10px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
          className="w-full flex flex-col items-start"
        >
          <p className="font-segoe font-bold text-[13px] leading-[20.8px] tracking-[1.3px] text-[#8bf2c8] w-full">
            WHY COMPLIANCE FAILS IN FRAGMENTS
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.1}
          className="w-full md:max-w-[533.75px]"
        >
          <h2 className="font-segoe font-bold text-[28px] md:text-[40px] leading-[34px] md:leading-[46px] text-white">
            Gaps appear where source, owner and evidence separate.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.15}
          className="w-full md:max-w-[640.5px] pt-[3px]"
        >
          <p className="font-segoe font-normal text-[16px] leading-[25.6px] text-[#87c7aa]">
            Each failure mode below has a matching treatment in the page architecture.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.2}
          className="w-full pt-[24px]"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[18px]">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="border border-[#26dca2] border-solid rounded-[14px] flex flex-col items-start gap-[6px] p-[22px]"
                style={{
                  backgroundImage:
                    "linear-gradient(160deg, rgb(10, 47, 42) 0%, rgb(6, 35, 31) 100%)",
                }}
              >
                <h3 className="font-segoe font-bold text-[17px] leading-[27.2px] text-white w-full">
                  {card.title.map((line, i) => (
                    <p key={i} className="mb-0">
                      {line}
                    </p>
                  ))}
                </h3>
                <div className="font-segoe font-normal text-[14.5px] leading-[23.2px] text-[#87c7aa] w-full">
                  {card.description.map((line, i) => (
                    <p key={i} className="mb-0">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
