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

export default function TraceObligationToEvidenceCTA() {
  return (
    <section
      className="w-full border-t border-[#0b5c54] px-4 md:px-[100px] py-[48px] md:py-[80px]"
      style={{
        backgroundImage: "linear-gradient(180deg, #04201d 0%, #020d0c 100%)",
      }}
    >
      <div className="max-w-[1240px] mx-auto px-4 md:px-[24px] w-full">
        <div
          className="border border-[#10b981] rounded-[20px] p-[24px] md:p-[44px] grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-[32px] md:gap-[40px] items-center w-full"
          style={{
            backgroundImage: "linear-gradient(135deg, #0a3a33 0%, #04201d 100%)",
          }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.05}
            className="flex flex-col gap-[10px] items-start"
          >
            <p className="font-segoe font-bold text-[#8bf2c8] text-[13px] leading-[20.8px] tracking-[1.3px] uppercase">
              Final Conversion
            </p>
            <h2 className="font-segoe font-bold text-white text-[28px] md:text-[40px] leading-[34px] md:leading-[46px] max-w-[356px]">
              Make regulatory work easier to trace from obligation to evidence.
            </h2>
            <p className="font-segoe font-normal text-[#87c7aa] text-[16px] leading-[25.6px] w-full pt-[3px]">
              Talk with Zoiko Tech about the jurisdictions and regulated processes you
              operate, how obligations are interpreted and assigned, where control evidence
              lives, and the right path to evaluate a governed compliance architecture.
            </p>
            <div className="flex flex-wrap gap-[14px] items-center pt-[14px] w-full">
              <button
                type="button"
                className="flex items-center justify-center min-h-[44px] px-[22px] py-[8.5px] rounded-[8px]"
                style={{
                  backgroundImage: "linear-gradient(133deg, #22d3a4 0%, #0fa585 100%)",
                }}
              >
                <span className="font-segoe font-bold text-[#0b2a20] text-[15px] leading-[24px] text-center whitespace-nowrap">
                  Contact Sales
                </span>
              </button>
              <button
                type="button"
                className="border border-[#8bf2c8] border-solid flex items-center justify-center min-h-[44px] px-[22px] py-[8.5px] rounded-[8px]"
              >
                <span className="font-segoe font-bold text-[#8bf2c8] text-[15px] leading-[24px] text-center whitespace-nowrap">
                  Explore Regulatory Technology
                </span>
              </button>
            </div>
            <p className="font-segoe font-bold text-[#8bf2c8] text-[14px] leading-[22.4px] pt-[4px] whitespace-nowrap">
              Open Trust Center →
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.15}
            className="bg-[#0b2a20] border border-[#26dca2] border-solid flex flex-col gap-[16px] items-start p-[22px] rounded-[14px] w-full"
          >
            <div className="flex flex-col gap-[16px] items-start w-full">
              <div className="flex flex-col md:flex-row gap-[16px] items-start w-full">
                <div className="flex flex-1 flex-col gap-[4.8px] items-start min-w-0 w-full">
                  <label className="font-segoe font-normal text-[#87c7aa] text-[13px] leading-[20.8px] whitespace-nowrap">
                    Work email
                  </label>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    className="bg-[#0b2a20] border border-[#26dca2] border-solid flex h-[44px] items-center px-[14px] rounded-[8px] w-full font-segoe font-normal text-[13px] text-white placeholder:text-[#87c7aa] outline-none"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-[4.8px] items-start min-w-0 w-full">
                  <label className="font-segoe font-normal text-[#87c7aa] text-[13px] leading-[20.8px] whitespace-nowrap">
                    Company
                  </label>
                  <input
                    type="text"
                    placeholder="Company name"
                    className="bg-[#0b2a20] border border-[#26dca2] border-solid flex h-[44px] items-center px-[14px] rounded-[8px] w-full font-segoe font-normal text-[13px] text-white placeholder:text-[#87c7aa] outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-[16px] items-start w-full">
                <div className="flex flex-1 flex-col gap-[4.8px] items-start min-w-0 w-full">
                  <label className="font-segoe font-normal text-[#87c7aa] text-[13px] leading-[20.8px] whitespace-nowrap">
                    Role / function (optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Compliance Officer"
                    className="bg-[#0b2a20] border border-[#26dca2] border-solid flex h-[44px] items-center px-[14px] rounded-[8px] w-full font-segoe font-normal text-[13px] text-white placeholder:text-[#87c7aa] outline-none"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-[4.8px] items-start min-w-0 w-full">
                  <label className="font-segoe font-normal text-[#87c7aa] text-[13px] leading-[20.8px] whitespace-nowrap">
                    Country / region
                  </label>
                  <input
                    type="text"
                    placeholder="Select region"
                    className="bg-[#0b2a20] border border-[#26dca2] border-solid flex h-[44px] items-center px-[14px] rounded-[8px] w-full font-segoe font-normal text-[13px] text-white placeholder:text-[#87c7aa] outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-[4.8px] items-start w-full">
                <label className="font-segoe font-normal text-[#87c7aa] text-[13px] leading-[20.8px] whitespace-nowrap">
                  Primary objective
                </label>
                <div className="bg-[#0b2a20] border border-[#26dca2] border-solid flex h-[44px] items-center px-[16px] rounded-[8px] w-full">
                  <span className="font-segoe font-normal text-[13px] text-white">
                    Regulatory intelligence
                  </span>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-[16px] items-start w-full">
                <div className="flex flex-1 flex-col gap-[4.8px] items-start min-w-0 w-full">
                  <label className="font-segoe font-normal text-[#87c7aa] text-[13px] leading-[20.8px] whitespace-nowrap">
                    Regulatory scope
                  </label>
                  <div className="bg-[#0b2a20] border border-[#26dca2] border-solid flex h-[44px] items-center px-[16px] rounded-[8px] w-full">
                    <span className="font-segoe font-normal text-[13px] text-white">
                      Single jurisdiction
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-[4.8px] items-start min-w-0 w-full">
                  <label className="font-segoe font-normal text-[#87c7aa] text-[13px] leading-[20.8px] whitespace-nowrap">
                    Domain
                  </label>
                  <div className="bg-[#0b2a20] border border-[#26dca2] border-solid flex h-[44px] items-center px-[16px] rounded-[8px] w-full">
                    <span className="font-segoe font-normal text-[13px] text-white">
                      Tax / finance
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-[4.8px] items-start w-full">
                <label className="font-segoe font-normal text-[#87c7aa] text-[13px] leading-[20.8px] whitespace-nowrap">
                  Evaluation stage
                </label>
                <div className="bg-[#0b2a20] border border-[#26dca2] border-solid flex h-[44px] items-center px-[16px] rounded-[8px] w-full">
                  <span className="font-segoe font-normal text-[13px] text-white">
                    Exploring
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-[4px] items-start w-full">
                <label className="font-segoe font-normal text-[#87c7aa] text-[13px] leading-[20.8px] whitespace-nowrap">
                  Message (optional)
                </label>
                <textarea
                  placeholder="Tell us about the jurisdictions and regulated processes you operate, how obligations are interpreted and assigned, and where control evidence lives."
                  className="bg-[#0b2a20] border border-[#26dca2] border-solid flex h-[87px] items-start p-[14px] rounded-[8px] w-full font-segoe font-normal text-[13px] leading-[1.5] text-white placeholder:text-[#87c7aa] outline-none resize-none"
                />
                <p className="font-segoe font-normal text-[#87c7aa] text-[10.8px] leading-[17.33px] w-full">
                  Please don&apos;t submit privileged legal advice, tax records, regulated
                  personal data, credentials, audit evidence or confidential regulatory
                  documents.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-[8px] items-start w-full">
              <label className="flex gap-[8px] items-center w-full cursor-pointer">
                <span className="bg-white border border-[#767676] border-solid rounded-[2.5px] shrink-0 size-[13px]" />
                <span className="font-segoe font-normal text-[#87c7aa] text-[12.5px] leading-[20px]">
                  I acknowledge the Privacy Notice.
                </span>
              </label>
              <label className="flex gap-[8px] items-center w-full cursor-pointer">
                <span className="bg-white border border-[#767676] border-solid rounded-[2.5px] shrink-0 size-[13px]" />
                <span className="font-segoe font-normal text-[#87c7aa] text-[12.5px] leading-[20px]">
                  Send me Zoiko Tech updates (optional).
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="flex h-[44px] items-center justify-center px-[24px] rounded-[8px] w-full font-segoe font-bold text-[15px] text-[#0b2a20]"
              style={{
                backgroundImage: "linear-gradient(130deg, #22d3a4 0%, #0fa585 100%)",
              }}
            >
              Discuss your compliance architecture
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
