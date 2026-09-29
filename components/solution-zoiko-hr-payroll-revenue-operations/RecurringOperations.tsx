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

type Card = {
  title: string;
  lines: string[];
};

const cards: Card[] = [
  {
    title: "Scheduled work",
    lines: ["Cadence, owner, prerequisites,", "due state and completion."],
  },
  {
    title: "Event-driven work",
    lines: ["A business event starts a", "governed process with an owner", "and exceptions."],
  },
  {
    title: "Checklist & close",
    lines: ["Required tasks, evidence,", "approvals and open blockers."],
  },
  {
    title: "Cross-functional handoff",
    lines: ["Source team, receiving team,", "expected decision and status."],
  },
  {
    title: "Policy-driven review",
    lines: ["Rules determine when review or", "approval is required."],
  },
  {
    title: "Evidence & close",
    lines: ["Completion evidence, exceptions", "and an accountable owner."],
  },
];

export default function RecurringOperations() {
  return (
    <section className="w-full">
      {/* ============ DESKTOP (lg and up) — 1440w design, fully independent from tablet ============ */}
      <div
        className="hidden lg:flex lg:flex-col lg:items-start lg:pt-[99.16px] lg:pb-[100px] lg:px-[130px] w-full"
        style={{
          backgroundImage:
            "linear-gradient(135.03deg, rgb(0, 0, 0) 0%, rgb(28, 92, 98) 100%)",
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
          className="w-full max-w-[1180px] mx-auto flex flex-col items-start gap-[16px] pb-[12px]"
        >
          <div className="max-w-[729.97px] w-full">
            <h2 className="font-sora font-bold text-[36.8px] leading-[42.32px] text-white">
              Recurring business processes share
              <br />
              one control pattern
            </h2>
          </div>

          <div className="max-w-[706.56px] w-full pt-[4.875px]">
            <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#dcecee]">
              ZoikoSuite is described as governed business operations. It supports a shared recurring-
              <br />
              process pattern within its approved public scope.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-[16px] w-full">
            {cards.map((card) => (
              <div
                key={card.title}
                className="bg-[rgba(255,255,255,0.06)] border border-[rgba(127,208,217,0.35)] rounded-[14px] p-[20px] flex flex-col gap-[5.88px]"
              >
                <h3 className="font-sora font-bold text-[16.8px] leading-[19.32px] text-white">
                  {card.title}
                </h3>
                <p className="font-inter font-normal text-[15.2px] leading-[24.32px] text-[#dcecee]">
                  {card.lines.map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < card.lines.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            ))}
          </div>

          <a
            href="#explore-operations-platforms"
            className="inline-flex items-center min-h-[48px] px-[24px] rounded-[10px] bg-white border-2 border-white font-inter font-semibold text-[16px] leading-[25.6px] text-black hover:bg-white/90 transition-colors duration-200"
          >
            Explore operations
          </a>
        </motion.div>
      </div>

      {/* ============ TABLET & MOBILE (below lg) — 768w design, fully independent from desktop ============ */}
      <div
        className="flex lg:hidden flex-col items-start pt-[60.65px] pb-[61.43px] px-[38.4px] w-full"
        style={{
          backgroundImage:
            "linear-gradient(135.01deg, rgb(0, 0, 0) 0%, rgb(28, 92, 98) 100%)",
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
          className="w-full max-w-[1180px] mx-auto flex flex-col items-start gap-[14.2px] pb-[12px]"
        >
          <div className="max-w-[507.72px] w-full pb-[0.63px]">
            <h2 className="font-sora font-bold text-[25.6px] leading-[29.44px] text-white">
              Recurring business processes share
              <br />
              one control pattern
            </h2>
          </div>

          <div className="w-full">
            <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#dcecee]">
              ZoikoSuite is described as governed business operations. It supports a shared recurring-
              process pattern within its approved public scope.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-[16px] w-full pt-[1.8px] pb-[5.8px]">
            {cards.map((card) => (
              <div
                key={card.title}
                className="bg-[rgba(255,255,255,0.06)] border border-[rgba(127,208,217,0.35)] rounded-[14px] p-[20px] flex flex-col gap-[5.88px]"
              >
                <h3 className="font-sora font-bold text-[16.8px] leading-[19.32px] text-white">
                  {card.title}
                </h3>
                <p className="font-inter font-normal text-[15.2px] leading-[24.32px] text-[#dcecee]">
                  {card.lines.map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < card.lines.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            ))}
          </div>

          <a
            href="#explore-operations-platforms"
            className="inline-flex items-center min-h-[48px] px-[24px] rounded-[10px] bg-white border-2 border-white font-inter font-semibold text-[16px] leading-[25.6px] text-black hover:bg-white/90 transition-colors duration-200"
          >
            Explore operations
          </a>
        </motion.div>
      </div>
    </section>
  );
}
