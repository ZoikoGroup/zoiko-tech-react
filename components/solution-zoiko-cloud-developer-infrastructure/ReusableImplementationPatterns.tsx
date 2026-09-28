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

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white border border-[#cfe9dc] flex flex-col items-start px-[10px] py-[4px] rounded-[8px] shrink-0">
      <p className="font-segoe font-normal text-[13px] leading-[20.8px] text-[#0b2a20] whitespace-nowrap">
        {children}
      </p>
    </div>
  );
}

function Sep({ children = "→" }: { children?: string }) {
  return (
    <span className="font-segoe font-normal text-[13px] leading-[20.8px] text-[#0d3632] shrink-0">
      {children}
    </span>
  );
}

const patterns: {
  title: string;
  steps: { label: string; sep?: string }[];
}[] = [
  {
    title: "API-first application integration",
    steps: [
      { label: "Client" },
      { label: "Auth" },
      { label: "API interface" },
      { label: "Service" },
      { label: "Observability / audit" },
    ],
  },
  {
    title: "Event-driven workflow",
    steps: [
      { label: "Producer" },
      { label: "Event / webhook" },
      { label: "Consumers" },
      { label: "Retry / failure path" },
    ],
  },
  {
    title: "Enterprise identity integration",
    steps: [
      { label: "Identity source" },
      { label: "Federation layer" },
      { label: "Platform / API access" },
      { label: "Audit" },
    ],
  },
  {
    title: "Developer paved path",
    steps: [
      { label: "Template" },
      { label: "Environment" },
      { label: "Build / test" },
      { label: "Review" },
      { label: "Production" },
      { label: "Observe", sep: "" },
    ],
  },
  {
    title: "Multi-platform foundation",
    steps: [
      { label: "Shared identity", sep: "+" },
      { label: "Integration", sep: "+" },
      { label: "Observability", sep: "+" },
      { label: "Governance" },
      { label: "Many platforms", sep: "" },
    ],
  },
];

export default function ReusableImplementationPatterns() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1240px] mx-auto px-4 md:px-[24px] py-[60px] md:py-[83px] md:pb-[84px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
          className="flex flex-col items-start gap-2.5 w-full"
        >
          <p className="font-segoe font-bold text-[13px] tracking-[1.3px] leading-[20.8px] text-[#0d3632]">
            REFERENCE ARCHITECTURES
          </p>
          <h2 className="font-segoe font-bold text-[28px] md:text-[40px] leading-[34px] md:leading-[46px] text-[#0b2a20] max-w-[533.76px] mt-2">
            Reusable implementation patterns.
          </h2>
          <p className="font-segoe font-normal text-[15px] md:text-[16px] leading-[22px] md:leading-[25.6px] text-[#4b6b5f] max-w-[640.5px] mt-1">
            Conceptual patterns unless linked to an approved product
            reference architecture.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.15}
          className="grid grid-cols-1 md:grid-cols-2 gap-[18px] w-full pt-6"
        >
          {patterns.map((pattern) => (
            <div
              key={pattern.title}
              className="bg-[#deffef] border border-[#cfe9dc] flex flex-col gap-2.5 items-start p-[22px] rounded-[14px]"
            >
              <h3 className="font-segoe font-bold text-[17px] leading-[27.2px] text-[#0b2a20] w-full">
                {pattern.title}
              </h3>
              <div className="flex flex-wrap gap-x-[6px] gap-y-[6px] items-center w-full">
                {pattern.steps.map((step, idx) => (
                  <React.Fragment key={step.label}>
                    <Pill>{step.label}</Pill>
                    {idx < pattern.steps.length - 1 && (
                      <Sep>{step.sep !== undefined ? step.sep : "→"}</Sep>
                    )}
                  </React.Fragment>
                ))}
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
            className="bg-[#0d3632] border border-[#0d3632] flex items-center justify-center min-h-[44px] py-[7.2px] px-[22px] rounded-[8px] shrink-0"
          >
            <span className="font-segoe font-normal text-[16px] leading-[25.6px] text-white text-center whitespace-nowrap">
              View architecture
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
