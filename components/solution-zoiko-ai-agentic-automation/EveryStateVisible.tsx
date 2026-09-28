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

type ShapeType = "dot" | "square" | "ring" | "diamond";

type StateCard = {
  shape: ShapeType;
  color: string;
  title: string;
  description: string;
};

const states: StateCard[] = [
  {
    shape: "dot",
    color: "#10b981",
    title: "Healthy",
    description:
      "Operating inside approved bounds; observability and evidence visible.",
  },
  {
    shape: "square",
    color: "#f5c451",
    title: "Review required",
    description:
      "A quality, exception, policy or data signal needs a human before continuing.",
  },
  {
    shape: "square",
    color: "#f5c451",
    title: "Approval pending",
    description:
      "Action prepared but blocked until an authorized approver acts.",
  },
  {
    shape: "ring",
    color: "#87c7aa",
    title: "Tool unavailable",
    description:
      "Downstream API is down; the workflow pauses safely and records state.",
  },
  {
    shape: "ring",
    color: "#87c7aa",
    title: "Context stale / missing",
    description:
      "Outside freshness policy; the workflow never proceeds silently.",
  },
  {
    shape: "diamond",
    color: "#ff7a7a",
    title: "Policy blocked",
    description:
      "Action violates a boundary; shows the policy reason and escalation path.",
  },
  {
    shape: "diamond",
    color: "#ff7a7a",
    title: "Evaluation failed",
    description:
      "New version missed release criteria; stays on the approved version.",
  },
  {
    shape: "diamond",
    color: "#ff7a7a",
    title: "Contained / stopped",
    description:
      "An operator stopped it; evidence and affected-work state preserved.",
  },
  {
    shape: "diamond",
    color: "#ff7a7a",
    title: "Incident",
    description:
      "Security, privacy, operational or agent incident follows the defined process.",
  },
];

function StateShape({ shape, color }: { shape: ShapeType; color: string }) {
  if (shape === "dot") {
    return (
      <div
        className="size-[12px] rounded-[6px] shrink-0 mt-[7px]"
        style={{ backgroundColor: color }}
      />
    );
  }
  if (shape === "square") {
    return (
      <div
        className="size-[12px] rounded-[2px] shrink-0 mt-[7px]"
        style={{ backgroundColor: color }}
      />
    );
  }
  if (shape === "ring") {
    return (
      <div
        className="size-[12px] rounded-[6px] border-2 border-solid shrink-0 mt-[7px]"
        style={{ borderColor: color }}
      />
    );
  }
  return (
    <div className="flex items-center justify-center size-[17px] shrink-0 mt-[4px]">
      <div
        className="size-[12px] rounded-[2px] rotate-45"
        style={{ backgroundColor: color }}
      />
    </div>
  );
}

export default function EveryStateVisible() {
  return (
    <section className="w-full bg-white border-t border-solid border-[#0d3632] px-4 md:px-[100px] py-16 md:pt-[83px] md:pb-[84px]">
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
            AI operations & lifecycle
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
          <h2 className="font-segoe font-bold text-[28px] md:text-[42px] leading-[34px] md:leading-[48.3px] text-[#06231f]">
            Every state is visible, named and owned.
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
          <p className="font-segoe font-normal text-[16px] leading-[25.6px] text-[#324b40]">
            Each state pairs a shape and a text label with its color, so none
            depends on color alone.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.2}
          className="w-full grid grid-cols-1 md:grid-cols-3 gap-[18px] pt-[28px]"
        >
          {states.map((state) => (
            <div
              key={state.title}
              className="rounded-[14px] border border-solid border-[#15503d] p-[24px] flex items-start gap-[12px]"
              style={{
                backgroundImage:
                  "linear-gradient(160deg, #0a2f2a 0%, #06231f 100%)",
              }}
            >
              <StateShape shape={state.shape} color={state.color} />
              <div className="flex flex-col gap-0">
                <h3 className="font-segoe font-bold text-[16px] leading-[25.6px] text-white">
                  {state.title}
                </h3>
                <p className="font-segoe font-normal text-[14.5px] leading-[23.2px] text-[#87c7aa]">
                  {state.description}
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
          className="w-full pt-[8px]"
        >
          <a
            href="#explore-operations"
            className="inline-flex items-center justify-center rounded-[8px] px-[22px] min-h-[44px] font-segoe font-bold text-[15px] leading-[24px] text-[#10b981] border border-solid border-[#10b981] hover:bg-[#10b981]/10 transition-colors duration-200"
          >
            Explore operations
          </a>
        </motion.div>
      </div>
    </section>
  );
}
