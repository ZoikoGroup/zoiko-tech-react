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
  name: string;
  activity: string;
  role: string;
};

const stages: Stage[] = [
  {
    name: "Discover",
    activity:
      "Systems, teams, interfaces, data, identity, environments, constraints and outcomes.",
    role: "Qualifies the opportunity.",
  },
  {
    name: "Architect",
    activity:
      "Target interfaces, integration patterns, access, observability, environments and governance.",
    role: "Builds technical trust.",
  },
  {
    name: "Validate",
    activity:
      "Confirm interfaces and assumptions using docs or an approved test path.",
    role: "Reduces risk.",
  },
  {
    name: "Implement",
    activity:
      "Integrate in controlled increments with ownership, versioning and support.",
    role: "Supports conversion.",
  },
  {
    name: "Operate",
    activity: "Status, support, change, observability and governance processes.",
    role: "Supports retention.",
  },
  {
    name: "Reuse / expand",
    activity:
      "Apply the same foundations to more workflows and platforms once value is proven.",
    role: "Supports expansion.",
  },
];

export default function SixStagesAdoption() {
  return (
    <section
      className="w-full"
      style={{
        backgroundImage:
          "linear-gradient(160deg, rgb(18, 70, 63) 0%, rgb(5, 23, 25) 50%, rgb(5, 23, 25) 100%)",
      }}
    >
      <div className="max-w-[1240px] mx-auto px-4 md:px-[24px] py-[60px] md:py-[83px] md:pb-[84px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
          className="flex flex-col items-start gap-2.5 w-full"
        >
          <p className="font-segoe font-bold text-[13px] tracking-[1.3px] leading-[20.8px] text-[#8bf2c8]">
            IMPLEMENTATION &amp; ADOPTION
          </p>
          <h2 className="font-segoe font-bold text-[28px] md:text-[40px] leading-[34px] md:leading-[46px] text-white max-w-[533.76px] mt-2">
            Six stages from discovery to reuse.
          </h2>
          <p className="font-segoe font-normal text-[15px] md:text-[16px] leading-[22px] md:leading-[25.6px] text-[#87c7aa] max-w-[640.5px] mt-1">
            Each stage builds technical trust and lowers implementation risk.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.15}
          className="flex flex-col gap-3 items-start w-full pt-6"
        >
          {stages.map((stage) => (
            <div
              key={stage.name}
              className="bg-[#ffffff17] border border-[#ffffff3d] rounded-[12px] w-full flex flex-col md:flex-row md:items-center gap-4 p-[20px] md:py-[16px] md:px-[20px]"
            >
              <div className="flex items-center gap-4 md:w-[220px] shrink-0">
                <div className="bg-[#8bf2c8] rounded-[19px] size-[38px] shrink-0" />
                <h3 className="font-segoe font-bold text-[17px] leading-[27.2px] text-white">
                  {stage.name}
                </h3>
              </div>
              <div className="flex flex-col gap-1 md:w-[420px] shrink-0">
                <p className="font-segoe font-bold text-[12px] leading-[19.2px] text-[#8bf2c8]">
                  Activity
                </p>
                <p className="font-segoe font-normal text-[14px] leading-[22.4px] text-[#87c7aa]">
                  {stage.activity}
                </p>
              </div>
              <div className="flex flex-col gap-1 md:flex-1">
                <p className="font-segoe font-bold text-[12px] leading-[19.2px] text-[#8bf2c8]">
                  Role
                </p>
                <p className="font-segoe font-normal text-[14px] leading-[22.4px] text-[#87c7aa]">
                  {stage.role}
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
          className="flex flex-wrap items-center pt-[14px] w-full"
        >
          <button
            type="button"
            className="bg-white border border-white flex items-center justify-center min-h-[44px] py-[7.2px] px-[22px] rounded-[8px] shrink-0"
          >
            <span className="font-segoe font-normal text-[16px] leading-[25.6px] text-[#0f3c37] text-center whitespace-nowrap">
              Discuss architecture
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
