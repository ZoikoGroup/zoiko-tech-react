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
  activity: string[];
  outcome: string;
};

const stages: Stage[] = [
  {
    title: "Define regulatory scope",
    activity: [
      "Jurisdictions, entities, products, processes, domains and",
      "reviewers.",
    ],
    outcome: "Scope approved.",
  },
  {
    title: "Establish sources",
    activity: [
      "Authoritative source list, provenance and review",
      "ownership.",
    ],
    outcome: "Source model approved.",
  },
  {
    title: "Build applicability & obligations",
    activity: ["Reviewed applicability records and obligation registry."],
    outcome: "Obligation baseline approved.",
  },
  {
    title: "Map controls & evidence",
    activity: [
      "Controls, owners, evidence requirements and known",
      "gaps.",
    ],
    outcome: "Control map reviewed.",
  },
  {
    title: "Pilot workflows",
    activity: [
      "Validate states, reviews and evidence on a bounded",
      "scope.",
    ],
    outcome: "Acceptance criteria met.",
  },
  {
    title: "Roll out",
    activity: ["Expand with training, governance and support."],
    outcome: "Operational readiness confirmed.",
  },
  {
    title: "Review continuously",
    activity: [
      "Refresh sources, applicability, evidence, testing and",
      "exceptions.",
    ],
    outcome: "Periodic review completed.",
  },
];

export default function ImplementationAdoption() {
  return (
    <section
      className="w-full border-t border-[#0b5c54] px-4 md:px-[100px] py-[79px] md:pb-[80px]"
      style={{
        backgroundImage:
          "radial-gradient(circle at 38% 63%, rgba(0,88,79,1) 0%, rgba(1,51,45,1) 50%, rgba(2,32,29,1) 75%, rgba(2,13,12,1) 100%)",
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
            IMPLEMENTATION &amp; ADOPTION
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
            Seven stages, each with an outcome to reach.
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
            Start with a bounded scope and expand by domain, jurisdiction and
            entity.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.2}
          className="w-full flex flex-col gap-[12px] pt-[24px]"
        >
          {stages.map((stage) => (
            <div
              key={stage.title}
              className="bg-[#0b2a20] border border-[#26dca2] rounded-[12px] flex flex-col md:flex-row items-start gap-[14px] md:gap-0 p-[20px] md:py-[16px] md:px-[21px]"
            >
              <div className="flex items-center gap-[14px] md:gap-0 md:w-[350.66px] shrink-0">
                <div className="size-[38px] rounded-[19px] bg-[#8bf2c8] shrink-0 md:mr-[24px]" />
                <h3 className="font-segoe font-bold text-[17px] leading-[27.2px] text-white">
                  {stage.title}
                </h3>
              </div>

              <div className="flex flex-col md:w-[350.67px] shrink-0 pl-[52px] md:pl-0">
                <p className="font-segoe font-normal text-[12px] leading-[19.2px] text-[#8bf2c8] mb-0">
                  Activity
                </p>
                <div className="font-segoe font-normal text-[14px] leading-[22.4px] text-[#87c7aa]">
                  {stage.activity.map((line, i) => (
                    <p key={i} className="mb-0">
                      {line}
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex flex-col md:flex-1 pl-[52px] md:pl-0">
                <p className="font-segoe font-normal text-[12px] leading-[19.2px] text-[#8bf2c8] mb-0">
                  Outcome
                </p>
                <p className="font-segoe font-normal text-[14px] leading-[22.4px] text-[#87c7aa] mb-0">
                  {stage.outcome}
                </p>
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
          className="w-full pt-[12px]"
        >
          <a
            href="#contact-sales"
            className="font-segoe font-bold text-[15px] leading-[24px] text-[#0b2a20] rounded-[8px] px-[22px] pt-[8.5px] pb-[9.5px] min-h-[44px] inline-flex items-center justify-center text-center transition-opacity duration-200 hover:opacity-90"
            style={{
              backgroundImage:
                "linear-gradient(133.2deg, rgb(34, 211, 164) 0%, rgb(15, 165, 133) 100%)",
            }}
          >
            Discuss rollout
          </a>
        </motion.div>
      </div>
    </section>
  );
}
