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
    title: "Authentication",
    description: <>Approved methods only.</>,
  },
  {
    title: "Authorization",
    description: (
      <>
        Role, scope and entitlement model
        <br />
        where supported.
      </>
    ),
  },
  {
    title: "Secrets",
    description: (
      <>
        Never shown in UI examples;
        <br />
        scoped, managed credentials.
      </>
    ),
  },
  {
    title: "Environment separation",
    description: (
      <>
        Development, test and production
        <br />
        boundaries where supported.
      </>
    ),
  },
  {
    title: "Audit / evidence",
    description: (
      <>
        Configuration changes, access and
        <br />
        integration actions.
      </>
    ),
  },
  {
    title: "Release / change",
    description: (
      <>
        Version, approval, rollout, rollback
        <br />
        and deprecation expectations.
      </>
    ),
  },
  {
    title: "Privacy / data",
    description: (
      <>
        Purpose limitation, minimization,
        <br />
        sensitive-data handling, jurisdiction.
      </>
    ),
  },
];

export default function GovernIdentitySecurityChange() {
  return (
    <section className="w-full bg-white py-[83px] px-4 md:px-[100px]">
      <div className="max-w-[1240px] mx-auto px-0 md:px-[24px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
        >
          <p className="font-segoe font-bold text-[13px] tracking-[1.3px] leading-[20.8px] text-[#0d3632] uppercase">
            GOVERN · IDENTITY, SECURITY &amp; CHANGE
          </p>

          <h2 className="font-segoe font-bold text-[28px] md:text-[40px] leading-[34px] md:leading-[46px] text-[#0b2a20] mt-2 max-w-[534px]">
            Controls throughout, not a late trust block.
          </h2>

          <p className="font-segoe font-normal text-[16px] leading-[25.6px] text-[#4b6b5f] mt-3 max-w-[640.5px]">
            Supported methods appear only where approved, with links to authoritative docs.
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
              className="bg-[#deffef] border border-[#cfe9dc] rounded-[14px] p-[22px] flex flex-col gap-[6px]"
            >
              <h3 className="font-segoe font-bold text-[17px] leading-[27.2px] text-[#0b2a20]">
                {card.title}
              </h3>
              <p className="font-segoe font-normal text-[14.5px] leading-[23.2px] text-[#4b6b5f]">
                {card.description}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.25}
          className="mt-6"
        >
          <a
            href="#"
            className="inline-flex items-center justify-center bg-[#0d3632] border border-[#0d3632] rounded-[8px] h-[44px] min-h-[44px] px-[22px] py-[7.2px] w-full sm:w-[238.5px]"
          >
            <span className="font-segoe font-normal text-[16px] leading-[25.6px] text-white text-center whitespace-nowrap">
              Trust Center
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
