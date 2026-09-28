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

type Stage = {
  title: string;
  activity: string;
  gate: string;
};

const stages: Stage[] = [
  {
    title: "Select work",
    activity:
      "Choose a repeatable workflow with owner, data, tools, outcome and risk profile.",
    gate: "Business owner identified; scope bounded.",
  },
  {
    title: "Define authority",
    activity:
      "Pick assist, recommend, prepare, approval-required or bounded execution.",
    gate: "Human authority and action classes approved.",
  },
  {
    title: "Connect context & tools",
    activity:
      "Integrate only required data and systems, with least privilege.",
    gate: "Access and data boundaries approved.",
  },
  {
    title: "Evaluate",
    activity:
      "Test quality, policy, tool behavior, exceptions, operations and failures.",
    gate: "Acceptance criteria met in the defined environment.",
  },
  {
    title: "Controlled pilot",
    activity:
      "Run with limited users, scope and transactions, with visible review.",
    gate: "Pilot evidence reviewed; open risks addressed.",
  },
  {
    title: "Production release",
    activity:
      "Promote a version with controls, monitoring, support and rollback.",
    gate: "Release owner and runbook approved.",
  },
  {
    title: "Ongoing review",
    activity:
      "Monitor outcomes, drift, exceptions and changes; find expansion paths.",
    gate: "Periodic review done; changes re-evaluated.",
  },
];

export default function PilotToProductionJourney() {
  return (
    <section
      className="w-full flex flex-col items-start justify-center px-4 md:px-[100px] border-t border-solid border-[#0d3632] py-16 md:pt-[83px] md:pb-[84px]"
      style={{
        backgroundImage: "linear-gradient(to bottom, #04201d, #020d0c)",
      }}
    >
      <div className="w-full max-w-[1240px] mx-auto flex flex-col items-start gap-[10px] px-0 md:px-[24px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
          className="w-full"
        >
          <p className="font-segoe font-bold text-[13px] leading-[20.8px] tracking-[1.3px] text-[#10b981] uppercase">
            Pilot-to-production journey
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.1}
          className="w-full max-w-[513.75px]"
        >
          <h2 className="font-segoe font-bold text-[28px] md:text-[42px] leading-[34px] md:leading-[48.3px] text-white">
            Seven stages. A gate at every one.
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
            Adopt in stages. Nothing moves forward until its gate is met.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.2}
          className="w-full flex flex-col gap-[14px] pt-[28px]"
        >
          {stages.map((stage) => (
            <div
              key={stage.title}
              className="w-full bg-[#0b2a20] border border-solid border-[#15503d] rounded-[12px] flex flex-col md:flex-row md:items-center gap-[16px] p-[22px]"
            >
              <div className="size-[40px] rounded-full bg-[#10b981] shrink-0" />
              <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-x-[24px] gap-y-[10px]">
                <h3 className="font-segoe font-bold text-[18px] leading-[28.8px] text-white">
                  {stage.title}
                </h3>
                <div className="flex flex-col gap-[2px]">
                  <p className="font-segoe font-normal text-[12px] leading-[19.2px] text-[#10b981]">
                    Activity
                  </p>
                  <p className="font-segoe font-normal text-[14px] leading-[22.4px] text-[#87c7aa]">
                    {stage.activity}
                  </p>
                </div>
                <div className="flex flex-col gap-[2px]">
                  <p className="font-segoe font-normal text-[12px] leading-[19.2px] text-[#10b981]">
                    Gate
                  </p>
                  <p className="font-segoe font-normal text-[14px] leading-[22.4px] text-[#87c7aa]">
                    {stage.gate}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.25}
          className="w-full pt-[8px]"
        >
          <a
            href="#discuss-a-pilot"
            className="inline-flex items-center justify-center rounded-[8px] px-[22px] min-h-[44px] font-segoe font-bold text-[15px] leading-[24px] text-[#0b2a20] hover:opacity-90 transition-opacity duration-200"
            style={{
              backgroundImage:
                "linear-gradient(133deg, #22d3a4 0%, #0fa585 100%)",
            }}
          >
            Discuss a pilot
          </a>
        </motion.div>
      </div>
    </section>
  );
}
