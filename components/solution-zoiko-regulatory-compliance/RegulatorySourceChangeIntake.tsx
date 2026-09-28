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

type IntakeStage = {
  icon: string;
  alt: string;
  title: string;
  behavior: string;
  state: string;
};

const stages: IntakeStage[] = [
  {
    icon: "/solution-zoiko-regulatory-compliance/detect-ingest-database-icon.svg",
    alt: "Database",
    title: "Detect / ingest",
    behavior: "Create a source-change record with provenance and timestamp.",
    state: "New",
  },
  {
    icon: "/solution-zoiko-regulatory-compliance/triage-filter-icon.svg",
    alt: "Filter",
    title: "Triage",
    behavior: "Identify domain, jurisdiction and possible affected scope.",
    state: "Under review",
  },
  {
    icon: "/solution-zoiko-regulatory-compliance/analyze-search-icon.svg",
    alt: "Search",
    title: "Analyze",
    behavior:
      "Compare current obligations, controls and workflows; AI assists with evidence-linked analysis where approved.",
    state: "Impact assessed",
  },
  {
    icon: "/solution-zoiko-regulatory-compliance/qualified-review-check-circle-icon.svg",
    alt: "Check circle",
    title: "Qualified review",
    behavior: "Reviewer approves, rejects or requests further analysis.",
    state: "Approved / No impact",
  },
  {
    icon: "/solution-zoiko-regulatory-compliance/apply-edit3-icon.svg",
    alt: "Edit",
    title: "Apply",
    behavior: "Update applicability, obligation or workflow only after approved review.",
    state: "Effective",
  },
  {
    icon: "/solution-zoiko-regulatory-compliance/notify-assign-bell-icon.svg",
    alt: "Bell",
    title: "Notify / assign",
    behavior: "Route affected owners and tasks from the approved change.",
    state: "Assigned",
  },
  {
    icon: "/solution-zoiko-regulatory-compliance/preserve-history-archive-icon.svg",
    alt: "Archive",
    title: "Preserve history",
    behavior: "Retain the previous state and decision evidence.",
    state: "Superseded",
  },
];

export default function RegulatorySourceChangeIntake() {
  return (
    <section
      className="w-full border-t border-solid border-[#0b5c54] px-4 md:px-[100px] py-[60px] md:py-[79px]"
      style={{
        backgroundImage:
          "radial-gradient(circle at 50% 50%, rgb(0, 114, 102) 0%, rgb(1, 89, 79) 25%, rgb(1, 63, 57) 45%, rgb(2, 38, 34) 65%, rgb(2, 26, 23) 80%, rgb(2, 13, 12) 100%)",
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
            REGULATORY SOURCE &amp; CHANGE INTAKE
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
            A source change never alters applicability on its own.
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
            Changes carry provenance and reach a qualified reviewer before any obligation or
            workflow is updated.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.2}
          className="w-full flex flex-col gap-[10px] pt-[24px]"
        >
          {stages.map((stage) => (
            <div
              key={stage.title}
              className="bg-[#0b2a20] border border-[#26dca2] border-solid rounded-[12px] flex flex-col md:flex-row gap-[10px] md:items-center p-[16px] md:h-[72px] w-full"
            >
              <div className="flex flex-row gap-[10px] items-center flex-1 min-w-0">
                <div className="bg-[#8bf2c8] flex items-center justify-center rounded-[19px] shrink-0 size-[40px]">
                  <img src={stage.icon} alt={stage.alt} className="size-[20px]" />
                </div>
                <div className="flex flex-1 flex-col md:flex-row gap-[10px] items-start min-w-0 text-[12px] font-normal">
                  <p className="text-white w-full md:w-auto md:min-w-[130px]">{stage.title}</p>
                  <div className="flex flex-1 gap-[10px] items-start min-w-0">
                    <div className="flex flex-1 flex-col min-w-0">
                      <p className="text-[#8bf2c8] w-full">Behavior</p>
                      <p className="text-[#87c7aa] w-full">{stage.behavior}</p>
                    </div>
                    <div className="flex flex-col w-[160px] shrink-0">
                      <p className="text-[#8bf2c8] w-full">State</p>
                      <p className="text-[#87c7aa] w-full">{stage.state}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
