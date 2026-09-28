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

type Card = {
  title: string;
  description: string[];
};

const cards: Card[] = [
  {
    title: "Models & intelligence",
    description: ["Model and intelligence interfaces, as", "approved."],
  },
  {
    title: "APIs & SDKs",
    description: ["Entry points, authentication, docs", "and versioning when live."],
  },
  {
    title: "Tools & connectors",
    description: [
      "How approved tools are registered,",
      "scoped, invoked and monitored.",
    ],
  },
  {
    title: "Events & triggers",
    description: ["Event-driven starts with safe retry", "and idempotency."],
  },
  {
    title: "Identity",
    description: [
      "Service identity, delegated user",
      "authority, credential scope, audit",
      "attribution.",
    ],
  },
  {
    title: "Observability",
    description: [
      "Logs, traces, tool calls, policy",
      "decisions, workflow state, metrics.",
    ],
  },
  {
    title: "Environments",
    description: [
      "Development, test and production",
      "separation with promotion controls.",
    ],
  },
];

export default function IntegrationDeveloperLayer() {
  return (
    <section
      className="w-full border-t border-[#0d3632] py-[84px] px-4 md:px-[100px]"
      style={{ backgroundImage: "linear-gradient(to bottom, #04201d, #020d0c)" }}
    >
      <div className="max-w-[1240px] mx-auto px-0 md:px-[24px] flex flex-col items-start gap-[10px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
          className="w-full flex flex-col items-start"
        >
          <p className="font-segoe font-bold text-[13px] leading-[20.8px] tracking-[1.3px] text-[#10b981] w-full">
            INTEGRATION &amp; DEVELOPER LAYER
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.1}
          className="w-full md:max-w-[513.73px]"
        >
          <h2 className="font-segoe font-bold text-[28px] md:text-[42px] leading-[34px] md:leading-[48.3px] text-white">
            Connect AI to the systems you already run.
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
          <p className="font-segoe font-normal text-[16px] leading-[25.6px] text-[#87c7aa]">
            Every interface below is described only at the level publicly approved. Anything not
            yet live is labeled Preview, Coming or In development.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.2}
          className="w-full pt-[28px] pb-[18px]"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[18px]">
            {cards.map((card) => (
              <div
                key={card.title}
                className="border border-[#15503d] border-solid rounded-[14px] flex flex-col items-start gap-[6px] p-[24px]"
                style={{
                  backgroundImage: "linear-gradient(160deg, #0a2f2a 0%, #062621 100%)",
                }}
              >
                <h3 className="font-segoe font-bold text-[18px] leading-[28.8px] text-white w-full">
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

            <div className="flex flex-col items-start gap-[10px] p-[24px] rounded-[14px] border border-[#15503d] border-solid" style={{ backgroundImage: "linear-gradient(160deg, #0a2f2a 0%, #062621 100%)" }}>
              <a
                href="#developer-platform"
                className="w-full min-h-[44px] rounded-[8px] flex flex-col items-center justify-center px-[22px] font-segoe font-bold text-[15px] leading-[24px] text-[#0b2a20] text-center hover:opacity-90 transition-opacity duration-200"
                style={{
                  backgroundImage:
                    "linear-gradient(134deg, #22d3a4 0%, #0fa585 100%)",
                }}
              >
                <span>Explore Developer</span>
                <span>Platform</span>
              </a>
              <a
                href="#documentation"
                className="w-full min-h-[44px] rounded-[8px] border border-[#10b981] border-solid flex items-center justify-center px-[22px] font-segoe font-bold text-[15px] leading-[24px] text-[#10b981] text-center hover:bg-white/5 transition-colors duration-200"
              >
                Read Documentation
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.25}
          className="w-full"
        >
          <div className="border border-dashed border-[#10b981] rounded-[12px] px-[20px] pt-[15.5px] pb-[16px] w-full">
            <p className="text-[14px] leading-[22.4px]">
              <span className="font-segoe font-bold text-[#22d3a4]">Sandbox rule:</span>{" "}
              <span className="font-segoe font-normal text-[#8fb5ac]">
                no self-service sandbox CTA appears unless external sandbox access is confirmed
                live.
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
