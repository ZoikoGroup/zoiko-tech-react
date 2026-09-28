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

export default function WhySharedFoundations() {
  return (
    <section
      className="w-full py-[83px] px-4 md:px-[100px]"
      style={{
        backgroundImage:
          "linear-gradient(161.11deg, rgb(18,70,63) 0%, rgb(0,23,24) 100%)",
      }}
    >
      <div className="max-w-[1240px] mx-auto px-0 md:px-[24px] flex flex-col items-start gap-[10px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
          className="w-full"
        >
          <p className="font-segoe font-bold text-[13px] leading-[20.8px] tracking-[1.3px] text-[#8bf2c8] w-full">
            WHY SHARED FOUNDATIONS
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.1}
          className="w-full flex flex-col md:flex-row items-center justify-between gap-[32px] pt-[8px]"
        >
          <div className="w-full md:w-[640.5px] flex flex-col items-start">
            <h2 className="font-segoe font-bold text-[28px] md:text-[40px] leading-[34px] md:leading-[46px] text-white max-w-[534px]">
              Infrastructure should reduce fragmentation, not reproduce it.
            </h2>
            <p className="font-segoe font-normal text-[16px] leading-[25.6px] text-[#87c7aa] pt-[16px] max-w-[640.5px]">
              As organizations add APIs, SaaS platforms, AI services, integrations and data
              flows, they often duplicate identity, authentication, events, logging,
              operational tooling, governance and support paths. A shared platform foundation
              creates reusable patterns so teams can build faster without inventing the
              operating model again for every product.
            </p>
          </div>
          <div className="w-full md:w-[390px] h-[260px] shrink-0">
            <img
              src="/solution-zoiko-cloud-developer-infrastructure/shared-foundations-diagram.png"
              alt="Shared platform foundation diagram showing connected infrastructure components"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.15}
          className="w-full pt-[16px]"
        >
          <div className="border border-dashed border-[#8bf2c8] rounded-[12px] px-[20px] py-[15.7px] w-full">
            <p className="font-segoe text-[14px] leading-[22.4px]">
              <span className="font-segoe font-bold text-[#8bf2c8]">Proof principle: </span>
              <span className="font-segoe font-normal text-[#87c7aa]">
                every named capability links to an approved technical destination or is
                labeled a future-ready design contract.
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
