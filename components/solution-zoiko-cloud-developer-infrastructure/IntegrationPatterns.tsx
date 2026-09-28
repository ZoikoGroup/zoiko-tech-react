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

const cards = [
  {
    title: "Request / response API",
    lines: [
      "Synchronous integration. Shows auth, version, error",
      "model and usage policy where approved.",
    ],
  },
  {
    title: "Webhook",
    lines: [
      "Outbound event notification with event type,",
      "verification pattern and retry behavior when",
      "documented.",
    ],
  },
  {
    title: "Event-driven",
    lines: [
      "Loose coupling with an event contract and delivery",
      "semantics where supported.",
    ],
  },
  {
    title: "Identity federation",
    lines: [
      "Routes to approved identity and access",
      "documentation. No invented protocol support.",
    ],
  },
  {
    title: "Connector / app",
    lines: [
      "Rendered from the integration registry with status,",
      "owner, configuration and support.",
    ],
  },
  {
    title: "File / batch exchange",
    lines: [
      "Described as a pattern only if supported, not as",
      "universal availability.",
    ],
  },
];

export default function IntegrationPatterns() {
  return (
    <section className="w-full bg-white py-16 md:pt-[83px] md:pb-[84px] md:px-[100px]">
      <div className="max-w-[1240px] mx-auto px-4 md:px-[24px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
        >
          <p className="font-segoe font-bold text-[13px] leading-[20.8px] tracking-[1.3px] text-[#0d3632] uppercase">
            INTEGRATE · APIS, EVENTS &amp; IDENTITY
          </p>
          <h2 className="font-segoe font-bold text-[#0b2a20] text-[32px] md:text-[40px] leading-[38px] md:leading-[46px] mt-3 max-w-[534px]">
            Six patterns for connecting systems.
          </h2>
          <p className="font-segoe font-normal text-[#4b6b5f] text-[16px] leading-[25.6px] mt-3 max-w-[640px]">
            Interfaces and protocols come from authoritative technical
            documentation, never invented here.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.15}
          className="grid grid-cols-1 md:grid-cols-3 gap-[18px] pt-6"
        >
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-[#deffef] border border-[#cfe9dc] rounded-[14px] p-[22px] flex flex-col gap-[6px]"
            >
              <h3 className="font-segoe font-bold text-[#0b2a20] text-[17px] leading-[27.2px]">
                {card.title}
              </h3>
              <div className="font-segoe font-normal text-[#4b6b5f] text-[14.5px] leading-[23.2px]">
                {card.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
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
          className="pt-[14px]"
        >
          <button
            type="button"
            className="inline-flex items-center justify-center min-h-[44px] px-[22px] pt-[7.2px] pb-[8.8px] rounded-[8px] bg-[#0d3632] border border-[#0d3632] cursor-pointer"
          >
            <span className="font-segoe font-normal text-white text-[16px] leading-[25.6px] text-center">
              View integrations
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
