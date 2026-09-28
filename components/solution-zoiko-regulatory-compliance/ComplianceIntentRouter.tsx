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

type RouterLink = {
  number: number;
  title: string;
  description: string[];
};

const links: RouterLink[] = [
  {
    number: 1,
    title: "Track regulatory change",
    description: [
      "Monitor authoritative sources and route material",
      "changes for qualified review.",
    ],
  },
  {
    number: 2,
    title: "Manage obligations",
    description: [
      "Know which requirements apply to which entity,",
      "market, product or process.",
    ],
  },
  {
    number: 3,
    title: "Map controls",
    description: [
      "Connect each obligation to the control that",
      "addresses it and the owner responsible.",
    ],
  },
  {
    number: 4,
    title: "Prove compliance",
    description: [
      "Collect current evidence with source, scope,",
      "freshness and reviewer context.",
    ],
  },
  {
    number: 5,
    title: "Operate deadlines / filings",
    description: [
      "Coordinate regulated tasks, approvals and due dates",
      "where supported.",
    ],
  },
  {
    number: 6,
    title: "Prepare for audit / assurance",
    description: [
      "Review control status, evidence, exceptions, testing",
      "and remediation.",
    ],
  },
];

export default function ComplianceIntentRouter() {
  return (
    <section className="w-full bg-white border-t border-solid border-[#0b5c54] px-4 md:px-[100px] py-[60px] md:py-[79px]">
      <div className="max-w-[1240px] mx-auto px-0 md:px-[24px] flex flex-col items-start gap-[10px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
          className="w-full flex flex-col items-start"
        >
          <p className="font-segoe font-bold text-[13px] leading-[20.8px] tracking-[1.3px] text-[#009659] w-full">
            COMPLIANCE INTENT ROUTER
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.1}
          className="w-full md:max-w-[533.75px]"
        >
          <h2 className="font-segoe font-bold text-[28px] md:text-[40px] leading-[34px] md:leading-[46px] text-[#0a2f2a]">
            Start with the job you need done.
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
          <p className="font-segoe font-normal text-[16px] leading-[25.6px] text-[#0c7646]">
            Six paths, each linking to the part of the architecture that answers it.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.2}
          className="w-full pt-[24px]"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px]">
            {links.map((link) => (
              <div
                key={link.number}
                className="border border-[#14654b] border-solid rounded-[14px] flex flex-col items-start gap-[6px] p-[22px]"
                style={{
                  backgroundImage:
                    "linear-gradient(160deg, rgb(32, 76, 70) 0%, rgb(1, 152, 103) 100%)",
                }}
              >
                <div className="bg-[#018476] border border-[#073525] border-solid rounded-[10px] flex items-center justify-center size-[38px]">
                  <p className="font-segoe font-bold text-[13px] leading-[20.8px] text-white text-center">
                    {link.number}
                  </p>
                </div>
                <h3 className="font-segoe font-bold text-[17px] leading-[27.2px] text-[#00efcf] pt-[6px] w-full">
                  {link.title}
                </h3>
                <div className="font-segoe font-normal text-[14.5px] leading-[23.2px] text-white w-full">
                  {link.description.map((line, i) => (
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
