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

export default function Hero() {
  return (
    <section
      className="w-full flex flex-col items-center justify-center px-4 md:px-[100px]"
      style={{
        backgroundImage: "linear-gradient(to bottom, #00463e, #041a18)",
      }}
    >
      <div className="w-full max-w-[1240px] px-0 md:px-[24px]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-[40px] py-16 md:pt-[96px] md:pb-[100px]">
          {/* Left content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.05}
            className="flex flex-col items-start gap-[22px] min-w-0 w-full md:w-[623px] md:shrink-0"
          >
            <p className="font-segoe font-bold text-[13px] leading-[20.8px] tracking-[1.3px] text-[#87c7aa] uppercase">
              AI &amp; Agentic Automation
            </p>

            <h1 className="font-segoe font-bold text-[36px] md:text-[56px] leading-[42px] md:leading-[61.6px] text-white md:whitespace-nowrap">
              Put AI to work without<br />giving up control.
            </h1>

            <p className="font-poppins font-normal text-[16px] leading-[1.55] text-white w-full md:w-[613px]">
              Zoiko Tech helps organizations apply governed AI and agents to
              repeatable business work — with explicit authority, approved
              context and tools, human oversight, evaluation, evidence, and
              operational controls designed into the workflow.
            </p>

            <div className="flex flex-wrap items-center gap-[12px] w-full md:w-[613px]">
              <a
                href="#discuss-use-case"
                className="font-poppins font-semibold text-[13px] leading-[normal] text-white bg-[#008a5f] rounded-[8px] px-[18px] py-[12px] flex items-center gap-[8px] hover:bg-[#007050] transition-colors duration-200"
              >
                Discuss an AI use case
                <img
                  src="/solution-zoiko-ai-agentic-automation/arrow-right.svg"
                  alt=""
                  className="size-[16px]"
                />
              </a>
              <a
                href="#explore-ai-technology"
                className="font-poppins font-semibold text-[13px] leading-[normal] text-white border border-white rounded-[8px] px-[18px] py-[12px] flex items-center hover:bg-white/10 transition-colors duration-200"
              >
                Explore AI &amp; Technology
              </a>
            </div>

            <div className="w-full md:w-[623px] h-px bg-white" />

            <p className="font-poppins font-semibold text-[12px] leading-[normal] text-white md:whitespace-nowrap">
              Governed by design. Human-accountable. Evidence-aware. Built
              for real operating environments.
            </p>
          </motion.div>

          {/* Right hero image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.15}
            className="flex-1 w-full max-w-[596px] pt-[18px]"
          >
            <img
              src="/solution-zoiko-ai-agentic-automation/hero-agentic-workflow-diagram.png"
              alt="Governed AI agent workflow diagram: code and access tools, human reviewer, structured documents, verification, and control panel nodes connected around a central AI processing hub"
              className="w-full h-auto object-cover pointer-events-none"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
