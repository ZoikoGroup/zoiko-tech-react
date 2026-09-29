"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: (customDelay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
      delay: customDelay,
    },
  }),
};

const practiceCards = [
  {
    title: "Workforce operations",
    desc: "Operational problem, source systems, workforce context, policy and review, workflow result.",
    tag: "Evidence pending",
  },
  {
    title: "Time / assurance",
    desc: "Signal, verification and exception process, handoff, measurable result if evidence-approved.",
    tag: "Evidence pending",
  },
  {
    title: "Coordination",
    desc: "Team or workflow problem, communication and action path, ownership, outcome.",
    tag: "Evidence pending",
  },
  {
    title: "Reference architecture",
    desc: "Time, HR and communications through identity and policy to workflow, exceptions and evidence.",
    tag: "Available",
  },
];

export default function TechInPracticeSection() {
  return (
    <section
      id="tech-in-practice"
      className="w-full text-white py-16 lg:py-24"
      style={{
        background:
          "linear-gradient(158deg, rgba(0, 0, 0, 1) 0%, rgba(28, 92, 98, 1) 100%)",
      }}
    >
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[130px]">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          className="mb-10"
        >
          <h2 className="text-[28px] sm:text-[32px] lg:text-[35.2px] font-bold leading-[1.15] text-white mb-3">
            Technology in practice
          </h2>
          <p className="text-[16px] leading-[25.6px] text-[#DCECEE]">
            Proof appears only when approved for public use.
          </p>
        </motion.div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {practiceCards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              custom={idx * 0.08}
              className="p-5 rounded-[14px] bg-white/[0.06] border border-[#7FD0D9]/35 backdrop-blur-sm flex flex-col justify-between min-h-[190px]"
            >
              <div>
                <h3 className="text-[16.8px] font-bold text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-[14.5px] sm:text-[15.2px] leading-[24px] text-[#DCECEE] mb-4">
                  {card.desc}
                </p>
              </div>

              <div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full border border-[#7FD0D9] text-[#7FD0D9] text-[12.8px] font-semibold leading-[20px]">
                  {card.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Button */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          custom={0.3}
        >
          <a
            href="#contact-sales"
            className="inline-flex items-center justify-center px-6 py-3 rounded-[10px] bg-white text-black font-semibold text-[16px] hover:bg-[#DCECEE] transition-colors"
          >
            Read evidence
          </a>
        </motion.div>
      </div>
    </section>
  );
}
