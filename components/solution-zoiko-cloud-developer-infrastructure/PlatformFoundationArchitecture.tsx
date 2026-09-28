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

type Layer = {
  id: string;
  name: string;
  description: string[];
  question: string;
};

const layers: Layer[] = [
  {
    id: "L1",
    name: "Developer entry",
    description: [
      "APIs, SDKs, tooling where approved, model interfaces,",
      "webhooks, authentication.",
    ],
    question: "How do teams build?",
  },
  {
    id: "L2",
    name: "Integration",
    description: [
      "API contracts, events, webhooks, connectors, identity federation,",
      "data exchange.",
    ],
    question: "How do systems connect?",
  },
  {
    id: "L3",
    name: "Shared controls",
    description: [
      "Identity, security, policy, credentials, audit, evidence,",
      "governance.",
    ],
    question: "How is access and change controlled?",
  },
  {
    id: "L4",
    name: "Platform operations",
    description: [
      "Usage, observability, status, changelog, support, incident",
      "communication.",
    ],
    question: "How is it operated?",
  },
  {
    id: "L5",
    name: "Infrastructure foundation",
    description: ["Cloud and digital infrastructure, at approved specificity."],
    question: "Where does it run?",
  },
  {
    id: "L6",
    name: "Platform consumers",
    description: [
      "Enterprise, financial, communications, AI, commerce and",
      "industry platforms, as approved.",
    ],
    question: "What can reuse the foundation?",
  },
];

export default function PlatformFoundationArchitecture() {
  return (
    <section className="w-full bg-white py-[83px] px-4 md:px-[100px]">
      <div className="max-w-[1240px] mx-auto px-0 md:px-[24px] flex flex-col items-start gap-[10px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
          className="w-full"
        >
          <p className="font-segoe font-bold text-[13px] leading-[20.8px] tracking-[1.3px] text-[#0d3632] w-full">
            PLATFORM FOUNDATION ARCHITECTURE
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.1}
          className="w-full"
        >
          <h2 className="font-segoe font-bold text-[28px] md:text-[40px] leading-[34px] md:leading-[46px] text-[#0b2a20]">
            Six layers, from developer entry to platform consumers.
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
          <p className="font-segoe font-normal text-[16px] leading-[25.6px] text-[#4b6b5f]">
            Each layer answers one buyer question. Details appear only at the level approved
            in product records.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.2}
          className="w-full flex flex-col items-start gap-[10px] pt-[24px] pb-[16px]"
        >
          {layers.map((layer) => (
            <div
              key={layer.id}
              className="bg-[#deffef] border border-[#0a7a57] border-l-4 rounded-[10px] flex flex-col md:flex-row items-start gap-[8px] md:gap-[16px] px-[18px] py-[14px] w-full"
            >
              <div className="w-full md:w-[60px] shrink-0">
                <p className="font-segoe font-bold text-[14px] leading-[22.4px] text-[#0d3632]">
                  {layer.id}
                </p>
              </div>
              <div className="w-full md:w-[240px] shrink-0">
                <p className="font-segoe font-bold text-[14px] leading-[22.4px] text-[#0b2a20]">
                  {layer.name}
                </p>
              </div>
              <div className="flex-1 min-w-0">
                {layer.description.map((line, i) => (
                  <p
                    key={i}
                    className="font-segoe font-normal text-[14px] leading-[22.4px] text-[#4b6b5f] mb-0"
                  >
                    {line}
                  </p>
                ))}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-segoe font-normal text-[14px] leading-[22.4px] text-[#4b6b5f]">
                  {layer.question}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.25}
          className="w-full"
        >
          <div className="border border-dashed border-[#0d3632] rounded-[12px] px-[20px] py-[15.7px] w-full">
            <p className="font-segoe text-[14px] leading-[22.4px]">
              <span className="font-segoe font-bold text-[#0d3632]">
                Architecture truth rule:{" "}
              </span>
              <span className="font-segoe font-normal text-[#4b6b5f]">
                no public catalog of compute, storage, database, network, region or SLA
                products appears unless drawn from approved service records.
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
