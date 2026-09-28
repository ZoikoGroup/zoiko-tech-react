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

type BadgeTone = "red" | "orange" | "sage";

const badgeToneClasses: Record<BadgeTone, string> = {
  red: "border-[#ff7a7a] text-[#ff7a7a]",
  orange: "border-[#f5c451] text-[#f5c451]",
  sage: "border-[#87c7aa] text-[#87c7aa]",
};

type ExceptionCard = {
  badge: string;
  tone: BadgeTone;
  title: string;
  description: string[];
};

const cards: ExceptionCard[] = [
  {
    badge: "Gap",
    tone: "red",
    title: "No applicable control",
    description: ["Owner and remediation path shown."],
  },
  {
    badge: "Missing",
    tone: "red",
    title: "Evidence missing",
    description: ["Control exists but no current", "evidence."],
  },
  {
    badge: "Stale",
    tone: "orange",
    title: "Evidence stale",
    description: ["Exceeded its freshness rule."],
  },
  {
    badge: "Unsupported",
    tone: "sage",
    title: "Unsupported jurisdiction",
    description: ["Content not approved for that scope."],
  },
  {
    badge: "Unknown",
    tone: "sage",
    title: "Applicability unknown",
    description: ["Qualified review is pending."],
  },
  {
    badge: "Exception",
    tone: "orange",
    title: "Control exception",
    description: ["Deviation approved for a bounded", "scope and period."],
  },
  {
    badge: "Failed",
    tone: "red",
    title: "Workflow failure",
    description: ["Task or approval blocked."],
  },
  {
    badge: "Overdue",
    tone: "red",
    title: "Finding overdue",
    description: ["Escalation visible."],
  },
];

export default function ExceptionsGapsRemediation() {
  return (
    <section
      className="w-full border-t border-solid border-[#0b5c54] px-4 md:px-[100px] py-[80px]"
      style={{
        backgroundImage:
          "linear-gradient(160deg, #04201d 0%, #020d0c 100%)",
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
            EXCEPTIONS, GAPS &amp; REMEDIATION
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.1}
          className="w-full md:max-w-[533.76px]"
        >
          <h2 className="font-segoe font-bold text-[28px] md:text-[40px] leading-[34px] md:leading-[46px] text-white">
            Summaries never turn unknown into green.
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
            Every dashboard summary drills down to the underlying obligation,
            control and evidence.
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
            {cards.map((card) => (
              <div
                key={card.title}
                className="border border-[#26dca2] border-solid rounded-[14px] flex flex-col items-start gap-[6px] p-[22px]"
                style={{
                  backgroundImage:
                    "linear-gradient(160deg, #0a2f2a 0%, #06231f 100%)",
                }}
              >
                <div
                  className={`border border-solid rounded-[99px] flex items-start px-[10px] pt-[2px] pb-[3.19px] ${badgeToneClasses[card.tone]}`}
                >
                  <p className="font-segoe font-normal text-[12px] leading-[19.2px] whitespace-nowrap">
                    {card.badge}
                  </p>
                </div>
                <h3 className="font-segoe font-bold text-[17px] leading-[27.2px] text-white pt-[4px] w-full">
                  {card.title}
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
