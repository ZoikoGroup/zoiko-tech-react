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

type RouterCard = {
  icon: string;
  alt: string;
  title: string;
  description: string[];
};

const cards: RouterCard[] = [
  {
    icon: "/solution-zoiko-cloud-developer-infrastructure/build-code-icon.svg",
    alt: "Build",
    title: "Build",
    description: [
      "Start with APIs, SDKs, authentication and reusable",
      "platform interfaces.",
    ],
  },
  {
    icon: "/solution-zoiko-cloud-developer-infrastructure/integrate-link-icon.svg",
    alt: "Integrate",
    title: "Integrate",
    description: [
      "Connect applications, events, identity and workflows",
      "across systems.",
    ],
  },
  {
    icon: "/solution-zoiko-cloud-developer-infrastructure/learn-book-icon.svg",
    alt: "Learn",
    title: "Learn",
    description: [
      "Find architecture guides, API reference, quickstarts",
      "and technical documentation.",
    ],
  },
  {
    icon: "/solution-zoiko-cloud-developer-infrastructure/test-flask-icon.svg",
    alt: "Test",
    title: "Test",
    description: [
      "Validate safely in available test or sandbox",
      "environments.",
    ],
  },
  {
    icon: "/solution-zoiko-cloud-developer-infrastructure/operate-activity-icon.svg",
    alt: "Operate",
    title: "Operate",
    description: [
      "Understand usage, observability, service status,",
      "change and support.",
    ],
  },
  {
    icon: "/solution-zoiko-cloud-developer-infrastructure/govern-shield-icon.svg",
    alt: "Govern",
    title: "Govern",
    description: ["Apply identity, access, evidence, security and", "release controls."],
  },
];

export default function TechnicalIntentRouter() {
  return (
    <section className="w-full bg-white py-[83px] px-4 md:px-[100px]">
      <div className="max-w-[1240px] mx-auto px-0 md:px-[24px] flex flex-col items-start gap-[10px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
          className="w-full flex flex-col items-start"
        >
          <p className="font-segoe font-bold text-[13px] leading-[20.8px] tracking-[1.3px] text-[#0d3632] w-full">
            TECHNICAL INTENT ROUTER
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
            Start with what you need to do.
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
            Six paths, each leading to the section that answers it.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.2}
          className="w-full flex flex-col gap-[18px] pt-[24px]"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px]">
            {cards.map((card) => (
              <div
                key={card.title}
                className="bg-[#deffef] border border-[#cfe9dc] border-solid rounded-[14px] flex flex-col items-start gap-[6px] p-[22px]"
              >
                <div className="border border-[#0d3632] border-solid rounded-[10px] flex items-center justify-center size-[38px]">
                  <img
                    src={card.icon}
                    alt={card.alt}
                    className="size-[20px]"
                  />
                </div>
                <h3 className="font-segoe font-bold text-[17px] leading-[27.2px] text-[#0b2a20] pt-[6px] w-full">
                  {card.title}
                </h3>
                <div className="font-segoe font-normal text-[14.5px] leading-[23.2px] text-[#4b6b5f] w-full">
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
      </div>
    </section>
  );
}
