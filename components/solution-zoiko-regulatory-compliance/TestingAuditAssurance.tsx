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

type StageCard = {
  badge?: string;
  badgeBorder?: string;
  badgeText?: string;
  title?: string;
  description: string[];
};

const cards: StageCard[] = [
  {
    badge: "Planned",
    badgeBorder: "border-[#87c7aa]",
    badgeText: "text-[#87c7aa]",
    description: ["Review or test scheduled."],
  },
  {
    badge: "In progress",
    badgeBorder: "border-[#10b981]",
    badgeText: "text-[#8bf2c8]",
    description: ["Evidence collection or testing", "underway."],
  },
  {
    badge: "Passed / effective",
    badgeBorder: "border-[#10b981]",
    badgeText: "text-[#8bf2c8]",
    description: ["Only when method and evidence", "support it."],
  },
  {
    badge: "Exception / finding",
    badgeBorder: "border-[#ff7a7a]",
    badgeText: "text-[#ff7a7a]",
    description: ["Needs remediation or an approved", "exception."],
  },
  {
    badge: "Remediation in progress",
    badgeBorder: "border-[#f5c451]",
    badgeText: "text-[#f5c451]",
    description: ["Corrective action is open."],
  },
  {
    badge: "Retest required",
    badgeBorder: "border-[#f5c451]",
    badgeText: "text-[#f5c451]",
    description: ["Closure depends on validation."],
  },
  {
    badge: "Closed",
    badgeBorder: "border-[#87c7aa]",
    badgeText: "text-[#87c7aa]",
    description: ["Completed with evidence."],
  },
  {
    title: "Attestations",
    description: [
      "Shown only with current, registry-",
      "backed scope, issuer and expiry.",
    ],
  },
];

export default function TestingAuditAssurance() {
  return (
    <section className="w-full bg-white border-t border-[#0b5c54] py-[79px] px-4 md:px-[100px]">
      <div className="max-w-[1240px] mx-auto px-0 md:px-[24px] flex flex-col items-start gap-[10px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
          className="w-full flex flex-col items-start"
        >
          <p className="font-segoe font-bold text-[13px] leading-[20.8px] tracking-[1.3px] text-[#00bd80] w-full">
            TESTING, AUDIT &amp; ASSURANCE
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
            Test, find, fix, retest, close.
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
          <p className="font-segoe font-normal text-[16px] leading-[25.6px] text-[#3c594c]">
            A finding moves through remediation and retest with an owner and
            evidence at each step.
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[18px]">
            {cards.map((card, i) => (
              <div
                key={i}
                className="border border-[#26dca2] border-solid rounded-[14px] flex flex-col items-start gap-[10px] p-[22px]"
                style={{
                  backgroundImage:
                    "linear-gradient(160deg, rgb(10, 47, 42) 0%, rgb(6, 35, 31) 100%)",
                }}
              >
                {card.badge && (
                  <div
                    className={`border ${card.badgeBorder} border-solid rounded-[99px] flex items-start px-[10px] pt-[2px] pb-[3.19px]`}
                  >
                    <p
                      className={`font-segoe font-normal text-[12px] leading-[19.2px] ${card.badgeText} whitespace-nowrap`}
                    >
                      {card.badge}
                    </p>
                  </div>
                )}
                {card.title && (
                  <h3 className="font-segoe font-bold text-[17px] leading-[27.2px] text-white w-full">
                    {card.title}
                  </h3>
                )}
                <div className="font-segoe font-normal text-[14.5px] leading-[23.2px] text-[#87c7aa] w-full">
                  {card.description.map((line, i2) => (
                    <p key={i2} className="mb-0">
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
