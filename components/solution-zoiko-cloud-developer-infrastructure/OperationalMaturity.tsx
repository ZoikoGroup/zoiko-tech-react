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
  description: React.ReactNode;
};

const cards: Card[] = [
  {
    title: "Usage",
    description: (
      <>
        Shown only where an approved
        <br />
        metering surface exists.
      </>
    ),
  },
  {
    title: "Observability",
    description: (
      <>
        Logs, events, traces or signals at the
        <br />
        approved level.
      </>
    ),
  },
  {
    title: "Service status",
    description: <>Direct route to System Status.</>,
  },
  {
    title: "Changelog",
    description: (
      <>
        Dated product and API changes
        <br />
        where maintained.
      </>
    ),
  },
  {
    title: "Incident communication",
    description: (
      <>
        Where service-impacting updates
        <br />
        are published.
      </>
    ),
  },
  {
    title: "Developer support",
    description: (
      <>
        Routes by issue: docs, technical,
        <br />
        enterprise, status.
      </>
    ),
  },
  {
    title: "Change control",
    description: (
      <>
        Version, deprecation and migration
        <br />
        notices for public interfaces.
      </>
    ),
  },
];

export default function OperationalMaturity() {
  return (
    <section
      className="w-full py-[83px] px-4 md:px-[100px]"
      style={{
        backgroundImage:
          "linear-gradient(160.01deg, rgb(18, 70, 63) 0%, rgb(6, 35, 31) 100%)",
      }}
    >
      <div className="max-w-[1240px] mx-auto px-0 md:px-[24px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
        >
          <p className="font-segoe font-bold text-[13px] tracking-[1.3px] leading-[20.8px] text-[#8bf2c8] uppercase">
            OPERATE · USAGE, OBSERVABILITY &amp; STATUS
          </p>

          <h2 className="font-segoe font-bold text-[28px] md:text-[40px] leading-[34px] md:leading-[46px] text-white mt-2 max-w-[534px]">
            Operational maturity you can check.
          </h2>

          <p className="font-segoe font-normal text-[16px] leading-[25.6px] text-[#87c7aa] mt-3 max-w-[640.5px]">
            Live status lives on the authoritative System Status page, never as hard-coded claims here.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.15}
          className="grid grid-cols-1 md:grid-cols-4 gap-[18px] mt-6"
        >
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-[#ffffff17] border border-[#ffffff3d] rounded-[14px] p-[22px] flex flex-col gap-[6px]"
            >
              <h3 className="font-segoe font-bold text-[17px] leading-[27.2px] text-white">
                {card.title}
              </h3>
              <p className="font-segoe font-normal text-[14.5px] leading-[23.2px] text-[#87c7aa]">
                {card.description}
              </p>
            </div>
          ))}

          <div className="bg-[#ffffff17] border border-[#ffffff3d] rounded-[14px] p-[22px] flex items-center justify-center">
            <a
              href="#"
              className="w-full bg-white border border-white rounded-[8px] min-h-[44px] flex items-center justify-center px-[22px] py-[7.2px]"
            >
              <span className="font-segoe font-normal text-[16px] leading-[25.6px] text-[#0f3c37] text-center whitespace-nowrap">
                System Status
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
