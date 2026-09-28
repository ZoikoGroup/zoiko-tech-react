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

export default function BuildOnFoundationCTA() {
  return (
    <section
      className="w-full px-4 md:px-[100px] py-[48px] md:py-[84px]"
      style={{
        backgroundImage:
          "linear-gradient(148.59deg, rgb(6, 25, 27) 44.585%, rgb(18, 70, 63) 83.622%)",
      }}
    >
      <div className="max-w-[1240px] mx-auto px-4 md:px-[24px] w-full">
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-[40px] items-center w-full">
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
              Build on a foundation designed to be reused, operated and governed.
            </h2>
            <p className="font-segoe font-normal text-[#87c7aa] text-[16px] leading-[25.6px] w-full pt-[3px]">
              Talk with Zoiko Tech about the systems you need to connect, the developer workflows
              you want to standardize, the operating controls you require, and the right technical
              path to evaluate fit.
            </p>
            <div className="flex flex-wrap gap-[14px] items-center pt-[14px] w-full">
              <button
                type="button"
                className="bg-[#0a7a57] border border-[#18555c] border-solid flex items-center justify-center min-h-[44px] px-[22px] py-[7.2px] rounded-[8px]"
              >
                <span className="font-segoe font-normal text-white text-[16px] leading-[25.6px] text-center whitespace-nowrap">
                  Contact Sales
                </span>
              </button>
              <button
                type="button"
                className="border border-white border-solid flex items-center justify-center min-h-[44px] px-[22px] py-[7.2px] rounded-[8px]"
              >
                <span className="font-segoe font-normal text-white text-[16px] leading-[25.6px] text-center whitespace-nowrap">
                  Explore Developer Platform
                </span>
              </button>
              <span className="font-segoe font-bold text-white text-[14px] leading-[22.4px] whitespace-nowrap">
                Read Documentation →
              </span>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.15}
            className="bg-[#06191b] border border-[#1f7a6c] border-solid flex flex-col gap-[16px] items-start p-[24px] rounded-[14px] w-full"
          >
            <div className="flex flex-col gap-[16px] items-start w-full">
              <div className="flex flex-col md:flex-row gap-[16px] items-start w-full">
                <div className="flex flex-1 flex-col gap-[6px] items-start min-w-0 w-full">
                  <label className="font-segoe font-bold text-[#4b6b5f] text-[12px] whitespace-nowrap">
                    Work email
                  </label>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    className="bg-[#15503d] border border-[#c3e6d6] border-solid flex h-[44px] items-center px-[14px] rounded-[8px] w-full font-segoe font-normal text-[13px] text-white placeholder:text-[#c3e6d6] outline-none"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-[6px] items-start min-w-0 w-full">
                  <label className="font-segoe font-bold text-[#4b6b5f] text-[12px] whitespace-nowrap">
                    Company
                  </label>
                  <input
                    type="text"
                    placeholder="Company name"
                    className="bg-[#15503d] border border-[#c3e6d6] border-solid flex h-[44px] items-center px-[14px] rounded-[8px] w-full font-segoe font-normal text-[13px] text-white placeholder:text-[#c3e6d6] outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-[16px] items-start w-full">
                <div className="flex flex-1 flex-col gap-[6px] items-start min-w-0 w-full">
                  <label className="font-segoe font-bold text-[#4b6b5f] text-[12px] whitespace-nowrap">
                    Role / function (optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Platform Engineer"
                    className="bg-[#15503d] border border-[#c3e6d6] border-solid flex h-[44px] items-center px-[14px] rounded-[8px] w-full font-segoe font-normal text-[13px] text-white placeholder:text-[#c3e6d6] outline-none"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-[6px] items-start min-w-0 w-full">
                  <label className="font-segoe font-bold text-[#4b6b5f] text-[12px] whitespace-nowrap">
                    Country / region
                  </label>
                  <input
                    type="text"
                    placeholder="Select region"
                    className="bg-[#15503d] border border-[#c3e6d6] border-solid flex h-[44px] items-center px-[14px] rounded-[8px] w-full font-segoe font-normal text-[13px] text-white placeholder:text-[#c3e6d6] outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-[16px] items-start w-full">
                <div className="flex flex-1 flex-col gap-[6px] items-start min-w-0 w-full">
                  <label className="font-segoe font-bold text-[#4b6b5f] text-[12px] whitespace-nowrap">
                    Solution
                  </label>
                  <div className="bg-[#15503d] border border-[#c3e6d6] border-solid flex h-[44px] items-center justify-between px-[14px] rounded-[8px] w-full">
                    <span className="font-segoe font-normal text-[13px] text-white whitespace-nowrap">
                      Cloud &amp; Developer Infrastructure
                    </span>
                    <img
                      src="/solution-zoiko-cloud-developer-infrastructure/chevron-down.svg"
                      alt=""
                      className="size-[16px]"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-[6px] items-start min-w-0 w-full">
                  <label className="font-segoe font-bold text-[#4b6b5f] text-[12px] whitespace-nowrap">
                    Technical intent
                  </label>
                  <div className="bg-[#15503d] border border-[#c3e6d6] border-solid flex h-[44px] items-center justify-between px-[14px] rounded-[8px] w-full">
                    <span className="font-segoe font-normal text-[13px] text-white whitespace-nowrap">
                      Build
                    </span>
                    <img
                      src="/solution-zoiko-cloud-developer-infrastructure/chevron-down.svg"
                      alt=""
                      className="size-[16px]"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-[6px] items-start w-full">
                <label className="font-segoe font-bold text-[#4b6b5f] text-[12px] whitespace-nowrap">
                  Message (optional)
                </label>
                <textarea
                  placeholder="Tell us about the systems you need to connect, the developer workflows you want to standardize, the operating controls you require, and the right technical path to evaluate fit."
                  className="bg-[#15503d] border border-[#c3e6d6] border-solid flex h-[96px] items-start p-[14px] rounded-[8px] w-full font-segoe font-normal text-[13px] leading-[1.5] text-[#c3e6d6] outline-none resize-none"
                />
                <p className="font-segoe font-normal text-[#4b6b5f] text-[12px] leading-[1.5] w-full">
                  Please don&apos;t include credentials, secrets or confidential system details.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-[12px] items-start w-full">
              <label className="flex gap-[12px] items-center w-full cursor-pointer">
                <span className="bg-[#0b2a20] border border-[#767676] border-solid flex flex-col items-center justify-center rounded-[4px] shrink-0 size-[16px]">
                  <img
                    src="/solution-zoiko-cloud-developer-infrastructure/checkbox-check.svg"
                    alt=""
                    className="size-[12px]"
                  />
                </span>
                <span className="flex-1 font-segoe font-normal text-[#c3e6d6] text-[12px]">
                  I acknowledge the Privacy Notice.
                </span>
              </label>
              <label className="flex gap-[12px] items-center w-full cursor-pointer">
                <span className="bg-[#0b2a20] border border-[#767676] border-solid rounded-[4px] shrink-0 size-[16px]" />
                <span className="flex-1 font-segoe font-normal text-[#c3e6d6] text-[12px]">
                  Send me Zoiko Tech updates (optional).
                </span>
              </label>
            </div>

            <div className="flex flex-col items-center pt-[8px] w-full">
              <button
                type="submit"
                className="bg-[#0a7a57] flex h-[44px] items-center justify-center px-[24px] rounded-[8px] w-full font-segoe font-bold text-[14px] text-white"
              >
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
