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
    title: "Discover",
    lines: [
      "Browse approved APIs, SDKs and model interfaces",
      "by platform, capability, maturity and availability.",
    ],
  },
  {
    title: "Start",
    lines: [
      "Quickstart with prerequisites, auth, a first request",
      "and a success check, where docs exist.",
    ],
  },
  {
    title: "Handle failure",
    lines: [
      "Error and status behavior, retry guidance and",
      "idempotency safeguards.",
    ],
  },
];

const contractRows = [
  { term: "Name", details: "Canonical technical name" },
  { term: "Purpose", details: "One-sentence developer outcome" },
  {
    term: "Status",
    details: "Live / Preview / In development / Retired, per registry",
  },
  { term: "Auth", details: "Link to approved authentication method" },
  { term: "Environment", details: "Only confirmed availability" },
  {
    term: "Version",
    details:
      "Current public version, plus changelog and deprecation policy when they exist",
  },
  {
    term: "Docs · Support",
    details: "Reference, SDK docs, quickstart, developer support route and status link",
  },
];

export default function DeveloperEntryPoints() {
  return (
    <section
      className="w-full py-16 md:pt-[83px] md:pb-[84px] md:px-[100px]"
      style={{
        backgroundImage:
          "linear-gradient(249.98deg, rgb(0, 85, 74) 10.6%, rgb(3, 11, 11) 89.4%)",
      }}
    >
      <div className="max-w-[1240px] mx-auto px-4 md:px-[24px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
        >
          <p className="font-segoe font-bold text-[13px] leading-[20.8px] tracking-[1.3px] text-[#8bf2c8] uppercase">
            BUILD · APIS, SDKS &amp; SERVICES
          </p>
          <h2 className="font-segoe font-bold text-white text-[32px] md:text-[40px] leading-[38px] md:leading-[46px] mt-3 max-w-[534px]">
            Developer entry points with clear contracts.
          </h2>
          <p className="font-segoe font-normal text-[#87c7aa] text-[16px] leading-[25.6px] mt-3 max-w-[640px]">
            Each API or SDK card shows what it is, its status and where the
            authoritative reference lives.
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
              className="bg-[#ffffff17] border border-[#ffffff3d] rounded-[14px] p-[22px] flex flex-col gap-[6px]"
            >
              <h3 className="font-segoe font-bold text-white text-[17px] leading-[27.2px]">
                {card.title}
              </h3>
              <div className="font-segoe font-normal text-[#87c7aa] text-[14.5px] leading-[23.2px]">
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
          className="bg-[#ffffff17] border border-[#ffffff3d] rounded-[14px] px-[22px] pt-[30px] pb-[22px] mt-[18px] w-full"
        >
          <span className="inline-flex items-center border border-[#8bf2c8] rounded-[99px] px-[10px] pt-[2px] pb-[3.19px]">
            <span className="font-segoe font-normal text-[#8bf2c8] text-[12px] leading-[19.2px]">
              Card contract
            </span>
          </span>

          <div className="mt-5 flex flex-col w-full">
            {contractRows.map((row) => (
              <div
                key={row.term}
                className="border-t border-[#ffffff3d] flex flex-col md:flex-row md:items-center gap-1 md:gap-2 py-[10px] md:py-[5px] w-full"
              >
                <div className="min-w-[84px] md:w-[84px] shrink-0">
                  <p className="font-segoe font-bold text-white text-[13.5px] leading-[21.6px]">
                    {row.term}
                  </p>
                </div>
                <div className="flex-1">
                  <p className="font-segoe font-normal text-[#87c7aa] text-[13.5px] leading-[21.6px]">
                    {row.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
