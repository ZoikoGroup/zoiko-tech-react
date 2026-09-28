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

type PracticeCard = {
  title: string;
  description: string[];
};

const cards: PracticeCard[] = [
  {
    title: "Regulatory intelligence",
    description: ["Source change → scope → review", "→ update → approved outcome."],
  },
  {
    title: "Compliance operations",
    description: ["Evidence problem → control and", "workflow → approved result."],
  },
  {
    title: "Audit / assurance",
    description: ["Scope → testing → finding →", "remediation → validated closure."],
  },
  {
    title: "Tax / regulated workflow",
    description: [
      "Obligation → workflow → evidence,",
      "within approved ZoikoTax scope.",
    ],
  },
];

export default function TechnologyInPractice() {
  return (
    <section className="w-full bg-white border-t border-[#0b5c54] px-4 md:px-[100px] py-[79px] md:pb-[80px]">
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
            TECHNOLOGY IN PRACTICE
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
            Proof, when it can be attributed.
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
          <p className="font-segoe font-normal text-[16px] leading-[25.6px] text-[#446a58]">
            Case studies appear only with approved public evidence.
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-[18px]">
            {cards.map((card) => (
              <div
                key={card.title}
                className="border border-[#26dca2] rounded-[14px] flex flex-col items-start gap-[6px] p-[22px]"
                style={{
                  backgroundImage:
                    "linear-gradient(159.6deg, rgb(10, 47, 42) 0%, rgb(6, 35, 31) 100%)",
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
          className="w-full pt-[18px]"
        >
          <div
            className="border border-[#26dca2] rounded-[14px] w-full flex flex-col items-center px-6 md:px-0 py-[24px] md:py-0 md:h-[247.56px] md:justify-center gap-[18px] md:gap-0 text-center"
            style={{
              backgroundImage:
                "linear-gradient(159.1deg, rgb(10, 47, 42) 0%, rgb(6, 35, 31) 100%)",
            }}
          >
            <div className="border border-[#f5c451] rounded-[99px] flex items-center justify-center px-[10px] pt-[2px] pb-[3.19px]">
              <p className="font-segoe font-normal text-[12px] leading-[19.2px] text-[#f5c451] whitespace-nowrap">
                Evidence pending
              </p>
            </div>

            <h3 className="font-segoe font-bold text-[17px] leading-[27.2px] text-white max-w-[600px] md:pt-[18px]">
              No approved public case study is available yet.
            </h3>

            <p className="font-segoe font-normal text-[14.5px] leading-[23.2px] text-[#87c7aa] max-w-[600px] md:pt-[8px]">
              Explore the architecture above, the platform descriptors and
              the Trust Center, or talk to us about your scope.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-[12px] md:pt-[18px] w-full">
              <a
                href="#contact-sales"
                className="font-segoe font-bold text-[15px] leading-[24px] text-[#0b2a20] rounded-[8px] px-[22px] pt-[8.5px] pb-[9.5px] min-h-[44px] flex items-center justify-center text-center transition-opacity duration-200 hover:opacity-90"
                style={{
                  backgroundImage:
                    "linear-gradient(133.2deg, rgb(34, 211, 164) 0%, rgb(15, 165, 133) 100%)",
                }}
              >
                Contact Sales
              </a>
              <a
                href="#regulatory-technology"
                className="font-segoe font-bold text-[15px] leading-[24px] text-[#8bf2c8] border border-[#8bf2c8] rounded-[8px] px-[22px] pt-[8.5px] pb-[9.5px] min-h-[44px] flex items-center justify-center text-center hover:bg-white/10 transition-colors duration-200"
              >
                Explore Regulatory Technology
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
