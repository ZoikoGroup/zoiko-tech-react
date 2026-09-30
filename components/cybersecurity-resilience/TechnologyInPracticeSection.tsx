"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: (customDelay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
      delay: customDelay,
    },
  }),
};

const caseStudies = [
  {
    title: "Security architecture case study",
    description:
      "Initial risk, control architecture, rollout, evidence, approved result and limitation.",
    image: "/cybersecurity-resilience/card-code-terminal.png",
    status: "Evidence pending",
  },
  {
    title: "Incident / recovery note",
    description:
      "Context, containment and recovery, control improvement, where disclosure is legally approved.",
    image: "/cybersecurity-resilience/card-chip-hardware.png",
    status: "Evidence pending",
  },
  {
    title: "Resilience case study",
    description:
      "Critical service, dependency risk, continuity design, validation, approved outcome.",
    image: "/cybersecurity-resilience/card-analytics-telemetry.png",
    status: "Evidence pending",
  },
  {
    title: "Control evidence note",
    description:
      "Control objective, implementation, evidence, review or expiry, limitations.",
    image: "/cybersecurity-resilience/card-digital-network.png",
    status: "Evidence pending",
  },
];

export default function TechnologyInPracticeSection() {
  return (
    <section id="tech-in-practice" className="w-full bg-white py-14 sm:py-20 lg:py-24">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[130px]">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          custom={0.1}
          className="mb-8 sm:mb-10 max-w-[800px]"
        >
          <h2 className="font-sora text-[26px] sm:text-[32px] lg:text-[35.2px] font-bold text-[#0A1416] leading-[1.2] tracking-[-0.02em] mb-2">
            Technology in practice
          </h2>
          <p className="text-[15px] sm:text-[16px] text-[#4D6468] leading-[24px] sm:leading-[26px]">
            Proof appears only when approved for public use.
          </p>
        </motion.div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px] mb-8 sm:mb-10">
          {caseStudies.map((study, idx) => (
            <motion.div
              key={study.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              custom={0.1 + idx * 0.06}
              className="bg-white border border-[#D5E3E5] hover:border-[#247780] rounded-[14px] p-5 flex flex-col justify-between transition-all duration-200 hover:shadow-md group min-h-[320px] sm:min-h-[333px]"
            >
              <div>
                <div className="relative w-full h-[140px] rounded-[10px] overflow-hidden mb-4 bg-gray-100">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 280px"
                  />
                </div>
                <h3 className="font-sora text-[16px] font-bold text-[#0A1416] mb-2 leading-snug">
                  {study.title}
                </h3>
                <p className="text-[14px] text-[#4D6468] leading-[22px] mb-4">
                  {study.description}
                </p>
              </div>

              <div className="pt-2">
                <span className="inline-flex items-center px-[10px] py-[3px] rounded-full border border-[#247780] text-[#247780] text-[12.8px] font-semibold">
                  {study.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          custom={0.3}
        >
          <a
            href="#contact-sales"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 h-[48px] rounded-[10px] bg-[#247780] hover:bg-[#1C5C62] text-white font-semibold text-[16px] transition-colors text-center shadow-sm"
          >
            Talk to Zoiko Tech
          </a>
        </motion.div>
      </div>
    </section>
  );
}
