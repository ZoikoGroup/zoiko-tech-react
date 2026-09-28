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

export default function MoveToGovernedOperationalWorkCTA() {
  return (
    <section className="w-full border-t border-[#0d3632] px-4 md:px-[100px] py-[48px] md:py-[84px]">
      <div className="max-w-[1240px] mx-auto px-0 md:px-[24px] w-full">
        <div
          className="border border-[#10b981] rounded-[20px] p-[24px] md:p-[44px] grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-[32px] md:gap-[40px] items-center w-full"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgb(10, 58, 51) 0%, rgb(4, 32, 29) 100%)",
          }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.05}
            className="flex flex-col gap-[9.4px] items-start"
          >
            <p className="font-segoe font-bold text-[13px] leading-[20.8px] tracking-[1.3px] text-[#10b981] uppercase">
              Final Conversion
            </p>
            <h2 className="font-segoe font-bold text-[28px] md:text-[42px] leading-[34px] md:leading-[48.3px] text-white max-w-[374px]">
              Move from AI experimentation to governed operational work.
            </h2>
            <p className="font-segoe font-normal text-[16px] leading-[25.6px] text-[#87c7aa] w-full pt-[4px]">
              Tell us the workflow you want to improve, the systems and data it depends on, the
              actions it may take, the controls it requires, and the evidence needed to evaluate
              it safely.
            </p>
            <div className="flex flex-wrap gap-[12px] items-center pt-[16px] w-full">
              <button
                type="button"
                className="flex items-center justify-center min-h-[44px] px-[22px] py-[9px] rounded-[8px]"
                style={{
                  backgroundImage:
                    "linear-gradient(133deg, rgb(34, 211, 164) 0%, rgb(15, 165, 133) 100%)",
                }}
              >
                <span className="font-segoe font-bold text-[15px] leading-[24px] text-[#0b2a20] text-center whitespace-nowrap">
                  Contact Sales
                </span>
              </button>
              <button
                type="button"
                className="border border-[#10b981] flex items-center justify-center min-h-[44px] px-[22px] py-[9px] rounded-[8px]"
              >
                <span className="font-segoe font-bold text-[15px] leading-[24px] text-[#10b981] text-center whitespace-nowrap">
                  Explore AI &amp; Technology
                </span>
              </button>
              <button
                type="button"
                className="border border-[#10b981] flex items-center justify-center min-h-[44px] px-[22px] py-[9px] rounded-[8px]"
              >
                <span className="font-segoe font-bold text-[15px] leading-[24px] text-[#10b981] text-center whitespace-nowrap">
                  Responsible AI →
                </span>
              </button>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.15}
            className="bg-[#0b2a20] border border-[#15503d] flex flex-col gap-[12px] items-start p-[22px] rounded-[14px] w-full"
          >
            <div className="flex flex-col gap-[12px] items-start w-full">
              <div className="flex flex-col md:flex-row gap-[12px] items-start w-full">
                <div className="flex flex-1 flex-col gap-[4.8px] items-start min-w-0 w-full">
                  <label className="font-segoe font-normal text-[#87c7aa] text-[13px] leading-[20.8px] whitespace-nowrap">
                    Work email
                  </label>
                  <input
                    type="email"
                    className="bg-[#0b2a20] border border-[#15503d] flex h-[44px] items-center px-[14px] rounded-[8px] w-full font-segoe font-normal text-[13px] text-white outline-none"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-[4.8px] items-start min-w-0 w-full">
                  <label className="font-segoe font-normal text-[#87c7aa] text-[13px] leading-[20.8px] whitespace-nowrap">
                    Company
                  </label>
                  <input
                    type="text"
                    className="bg-[#0b2a20] border border-[#15503d] flex h-[44px] items-center px-[14px] rounded-[8px] w-full font-segoe font-normal text-[13px] text-white outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-[12px] items-start w-full">
                <div className="flex flex-1 flex-col gap-[4.8px] items-start min-w-0 w-full">
                  <label className="font-segoe font-normal text-[#87c7aa] text-[13px] leading-[20.8px] whitespace-nowrap">
                    Role / function (optional)
                  </label>
                  <input
                    type="text"
                    className="bg-[#0b2a20] border border-[#15503d] flex h-[44px] items-center px-[14px] rounded-[8px] w-full font-segoe font-normal text-[13px] text-white outline-none"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-[4.8px] items-start min-w-0 w-full">
                  <label className="font-segoe font-normal text-[#87c7aa] text-[13px] leading-[20.8px] whitespace-nowrap">
                    Country / region
                  </label>
                  <input
                    type="text"
                    className="bg-[#0b2a20] border border-[#15503d] flex h-[44px] items-center px-[14px] rounded-[8px] w-full font-segoe font-normal text-[13px] text-white outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-[4.8px] items-start w-full">
                <label className="font-segoe font-normal text-[#87c7aa] text-[13px] leading-[20.8px] whitespace-nowrap">
                  Solution
                </label>
                <div className="bg-[#0b2a20] border border-[#15503d] flex items-center min-h-[44px] px-[16px] rounded-[8px] w-full">
                  <span className="font-segoe font-normal text-[13px] text-white">
                    AI &amp; Agentic Automation
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-[4.8px] items-start w-full">
                <label className="font-segoe font-normal text-[#87c7aa] text-[13px] leading-[20.8px] whitespace-nowrap">
                  Primary objective
                </label>
                <div className="bg-[#0b2a20] border border-[#15503d] flex items-center min-h-[44px] px-[16px] rounded-[8px] w-full">
                  <span className="font-segoe font-normal text-[13px] text-white">
                    AI assistance
                  </span>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-[12px] items-start w-full">
                <div className="flex flex-1 flex-col gap-[4.8px] items-start min-w-0 w-full">
                  <label className="font-segoe font-normal text-[#87c7aa] text-[13px] leading-[20.8px] whitespace-nowrap">
                    Action sensitivity
                  </label>
                  <div className="bg-[#0b2a20] border border-[#15503d] flex items-center min-h-[44px] px-[16px] rounded-[8px] w-full">
                    <span className="font-segoe font-normal text-[13px] text-white">
                      Read / analyze only
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-[4.8px] items-start min-w-0 w-full">
                  <label className="font-segoe font-normal text-[#87c7aa] text-[13px] leading-[20.8px] whitespace-nowrap">
                    Evaluation stage
                  </label>
                  <div className="bg-[#0b2a20] border border-[#15503d] flex items-center min-h-[44px] px-[16px] rounded-[8px] w-full">
                    <span className="font-segoe font-normal text-[13px] text-white">
                      Exploring
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-[4px] items-start w-full">
                <label className="font-segoe font-normal text-[#87c7aa] text-[13px] leading-[20.8px] whitespace-nowrap">
                  Workflow summary
                </label>
                <textarea
                  className="bg-[#0b2a20] border border-[#15503d] flex h-[87px] items-start p-[14px] rounded-[8px] w-full font-segoe font-normal text-[13px] text-white outline-none resize-none"
                />
                <p className="font-segoe font-normal text-[#87c7aa] text-[10.8px] leading-[17.33px] w-full">
                  Please don&apos;t include secrets, credentials, regulated personal data or
                  confidential records.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-[8px] items-start w-full">
              <label className="flex gap-[8px] items-center w-full cursor-pointer">
                <span className="bg-white border border-[#767676] rounded-[2.5px] shrink-0 size-[13px]" />
                <span className="font-segoe font-normal text-[#87c7aa] text-[12.5px] leading-[20px]">
                  I acknowledge the Privacy Notice.
                </span>
              </label>
              <label className="flex gap-[8px] items-center w-full cursor-pointer">
                <span className="bg-white border border-[#767676] rounded-[2.5px] shrink-0 size-[13px]" />
                <span className="font-segoe font-normal text-[#87c7aa] text-[12.5px] leading-[20px]">
                  Send me Zoiko Tech updates (optional).
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="flex items-center justify-center min-h-[44px] px-[22px] py-[13px] rounded-[8px] w-full"
              style={{
                backgroundImage:
                  "linear-gradient(130deg, rgb(34, 211, 164) 0%, rgb(15, 165, 133) 100%)",
              }}
            >
              <span className="font-segoe font-bold text-[15px] text-[#0b2a20] text-center whitespace-nowrap">
                Discuss an AI use case
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
