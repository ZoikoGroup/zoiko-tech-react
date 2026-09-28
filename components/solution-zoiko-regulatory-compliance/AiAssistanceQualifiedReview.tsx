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

type ReviewCard = {
  title: string;
  description: string[];
};

const cards: ReviewCard[] = [
  {
    title: "Source summarization",
    description: [
      "Summaries carry citations; exact legal text stays",
      "authoritative.",
    ],
  },
  {
    title: "Change comparison",
    description: [
      "AI finds candidate differences; the reviewer",
      "determines material impact.",
    ],
  },
  {
    title: "Applicability support",
    description: [
      "AI may suggest affected scope but never declares",
      "applicability.",
    ],
  },
  {
    title: "Control & evidence mapping",
    description: [
      "Recommendations show evidence and support",
      "context.",
    ],
  },
  {
    title: "Drafting",
    description: ["Generated tasks and summaries remain reviewable."],
  },
  {
    title: "Gap support",
    description: [
      "Surfaces missing, stale or conflicting evidence;",
      "never infers “compliant” from silence.",
    ],
  },
];

export default function AiAssistanceQualifiedReview() {
  return (
    <section className="w-full border-t border-solid border-[#0b5c54] bg-white px-4 md:px-[100px] py-[80px]">
      <div className="max-w-[1240px] mx-auto px-0 md:px-[24px] flex flex-col items-start gap-[10px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
          className="w-full flex flex-col items-start"
        >
          <p className="font-segoe font-bold text-[13px] leading-[20.8px] tracking-[1.3px] text-[#00bd80] w-full">
            AI ASSISTANCE &amp; QUALIFIED REVIEW
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
          <h2 className="font-segoe font-bold text-[28px] md:text-[40px] leading-[34px] md:leading-[46px] text-[#06231f]">
            AI speeds up review. People decide.
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
          <p className="font-segoe font-normal text-[16px] leading-[25.6px] text-[#3e5b4e]">
            AI output stays labeled as derived until a qualified reviewer
            approves it.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.2}
          className="w-full pt-[24px] pb-[16px]"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px]">
            {cards.map((card) => (
              <div
                key={card.title}
                className="rounded-[14px] flex flex-col items-start gap-[8px] p-[22px]"
                style={{
                  backgroundImage:
                    "linear-gradient(160deg, #0a2f2a 0%, #06231f 100%)",
                }}
              >
                <h3 className="font-segoe font-bold text-[17px] leading-[27.2px] text-white w-full">
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

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.25}
          className="w-full"
        >
          <div className="border border-dashed border-[#10b981] rounded-[12px] px-[20px] pt-[15.5px] pb-[15.89px] w-full">
            <p className="font-segoe text-[14px] leading-[22.4px]">
              <span className="font-bold text-[#00bd80]">Rule</span>
              <span className="font-bold text-[#22d3a4]">:</span>
              <span className="font-normal text-[#3e5b4e]">
                {" "}a source change does not alter applicability until a
                qualified reviewer approves it.
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
