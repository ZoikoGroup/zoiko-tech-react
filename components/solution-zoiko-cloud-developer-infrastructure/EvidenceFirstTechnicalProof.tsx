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

const cards = [
  {
    title: "Architecture case study",
    lines: ["Problem → systems → pattern →", "controls → result → approval."],
  },
  {
    title: "Developer adoption story",
    lines: ["Task → friction → pattern → result,", "only if evidence-approved."],
  },
  {
    title: "Reliability proof",
    lines: ["Context → issue → response →", "result → current control."],
  },
  {
    title: "Benchmark",
    lines: ["Method → environment → metric →", "limits → date → owner."],
  },
];

export default function EvidenceFirstTechnicalProof() {
  return (
    <section className="w-full bg-white pt-[48px] pb-[48px] md:pt-[83px] md:pb-[84px] px-4 md:px-[100px]">
      <div className="max-w-[1240px] mx-auto px-4 md:px-[24px] flex flex-col gap-[10px] items-start w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
          className="flex flex-col gap-[10px] w-full"
        >
          <p className="font-segoe font-bold text-[#0d3632] text-[13px] leading-[20.8px] tracking-[1.3px] uppercase">
            Technology in Practice
          </p>
          <h2 className="font-segoe font-bold text-[#0b2a20] text-[28px] md:text-[40px] leading-[34px] md:leading-[46px] max-w-[534px]">
            Evidence-first technical proof.
          </h2>
          <p className="font-segoe font-normal text-[#4b6b5f] text-[16px] leading-[25.6px] max-w-[640px] pt-[3px]">
            Only approved, attributable evidence appears here.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.15}
          className="flex flex-col md:flex-row gap-[18px] items-stretch justify-center pt-[24px] w-full"
        >
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-[#deffef] border border-[#cfe9dc] border-solid flex flex-1 flex-col gap-[6px] items-start p-[22px] rounded-[14px] min-w-0"
            >
              <h3 className="font-segoe font-bold text-[#0b2a20] text-[17px] leading-[27.2px] w-full">
                {card.title}
              </h3>
              <p className="font-segoe font-normal text-[#4b6b5f] text-[14.5px] leading-[23.2px] w-full">
                {card.lines[0]}
                <br />
                {card.lines[1]}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.25}
          className="bg-[#deffef] border border-[#cfe9dc] border-solid rounded-[14px] w-full mt-[24px] flex flex-col items-center px-[24px] py-[46px] text-center"
        >
          <div className="border border-dashed border-[#0d3632] rounded-[99px] px-[10px] pt-[2px] pb-[3.19px] mb-[24px]">
            <p className="font-segoe font-normal text-[#0d3632] text-[12px] leading-[19.2px] text-center whitespace-nowrap">
              Evidence pending
            </p>
          </div>
          <h3 className="font-segoe font-bold text-[#0b2a20] text-[17px] leading-[27.2px] text-center max-w-[600px]">
            No approved public infrastructure evidence is available yet.
          </h3>
          <p className="font-segoe font-normal text-[#4b6b5f] text-[14.5px] leading-[23.2px] text-center max-w-[600px] mt-[8px]">
            See the architecture patterns, documentation and System Status, or talk to us.
          </p>
          <div className="flex flex-wrap gap-[14px] items-center justify-center mt-[24px]">
            <button
              type="button"
              className="bg-[#0d3632] border border-[#0d3632] border-solid flex items-center justify-center min-h-[44px] px-[22px] py-[7.21px] rounded-[8px]"
            >
              <span className="font-segoe font-normal text-white text-[16px] leading-[25.6px] text-center whitespace-nowrap">
                Contact Sales
              </span>
            </button>
            <button
              type="button"
              className="border border-[#0d3632] border-solid flex items-center justify-center min-h-[44px] px-[22px] py-[7.21px] rounded-[8px]"
            >
              <span className="font-segoe font-normal text-[#0d3632] text-[16px] leading-[25.6px] text-center whitespace-nowrap">
                Read Documentation
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
