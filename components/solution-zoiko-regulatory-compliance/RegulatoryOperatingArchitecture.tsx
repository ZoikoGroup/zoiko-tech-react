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

type Layer = {
  code: string;
  title: string;
  description: string;
  question: string;
};

const layers: Layer[] = [
  {
    code: "L1",
    title: "Authoritative source",
    description: "Law, regulation, guidance, standard or policy source.",
    question: "Where did the requirement come from?",
  },
  {
    code: "L2",
    title: "Source evidence / extraction",
    description:
      "Exact quote, structured field, metadata, date; inferences stay distinguishable.",
    question: "What does the source actually say?",
  },
  {
    code: "L3",
    title: "Applicability decision",
    description: "Entity, jurisdiction, product, process; qualified reviewer and rationale.",
    question: "Does it apply here?",
  },
  {
    code: "L4",
    title: "Obligation",
    description: "Approved internal requirement, dates, owner, cadence.",
    question: "What must the organization do?",
  },
  {
    code: "L5",
    title: "Control",
    description:
      "Policy, process, technical or operational control mapped to the obligation.",
    question: "How is it addressed?",
  },
  {
    code: "L6",
    title: "Evidence",
    description: "Artifact, state, approval or log at a defined time and scope.",
    question: "What proves the control?",
  },
  {
    code: "L7",
    title: "Workflow / review",
    description: "Task, approval, filing, attestation or remediation where supported.",
    question: "What action is required?",
  },
  {
    code: "L8",
    title: "Audit / history",
    description: "Changes, tests, findings, exceptions and prior states retained.",
    question: "Can we reconstruct the decision?",
  },
];

export default function RegulatoryOperatingArchitecture() {
  return (
    <section className="w-full bg-white border-t border-solid border-[#0b5c54] px-4 md:px-[100px] py-[60px] md:py-[79px]">
      <div className="max-w-[1240px] mx-auto px-0 md:px-[24px] flex flex-col items-start gap-[10px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
          className="w-full flex flex-col items-start"
        >
          <p className="font-segoe font-bold text-[13px] leading-[20.8px] tracking-[1.3px] text-[#007042] w-full">
            REGULATORY OPERATING ARCHITECTURE
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
          <h2 className="font-segoe font-bold text-[28px] md:text-[40px] leading-[34px] md:leading-[46px] text-[#06231f]">
            From external source to internal evidence, in eight layers.
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
          <p className="font-segoe font-normal text-[16px] leading-[25.6px] text-[#0c7646]">
            Every layer answers one buyer question, and every link between layers can be
            reviewed.
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
          {layers.map((layer) => (
            <div
              key={layer.code}
              className="bg-[#15503d] border-y border-r border-solid border-[#22d3a4] border-l-4 rounded-[10px] flex flex-col md:flex-row gap-[10px] md:gap-[16px] items-start px-[18px] py-[14px] w-full"
            >
              <div className="text-[#8bf2c8] text-[12px] font-normal w-full md:w-[70px] shrink-0">
                {layer.code}
              </div>
              <div className="text-white text-[12px] font-normal w-full md:w-[220px] shrink-0">
                {layer.title}
              </div>
              <div className="text-white text-[12px] font-normal flex-1 min-w-0 w-full">
                {layer.description}
              </div>
              <div className="text-white text-[12px] font-normal flex-1 min-w-0 w-full">
                {layer.question}
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
          className="w-full pt-[16px]"
        >
          <div className="border border-dashed border-[#10b981] rounded-[12px] px-[20px] py-[15.5px] w-full">
            <p className="font-segoe text-[14px] leading-[22.4px]">
              <span className="font-bold text-[#22d3a4]">Evidence weight: </span>
              <span className="font-normal text-[#020d0c]">
                an exact quotation, a structured field and an inferred relationship carry
                different weight, and the interface labels them distinctly.
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
