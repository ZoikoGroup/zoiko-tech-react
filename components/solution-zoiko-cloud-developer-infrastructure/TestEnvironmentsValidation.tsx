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
  badge: string;
  badgeDashed?: boolean;
  description: React.ReactNode;
};

const cards: Card[] = [
  {
    badge: "Sandbox live",
    description: (
      <>
        Create or open a sandbox only when external
        <br />
        access is live; explains isolation, limits and reset.
      </>
    ),
  },
  {
    badge: "By approval",
    description: (
      <>
        Routed through an enterprise or developer request
        <br />
        with clear expectations.
      </>
    ),
  },
  {
    badge: "Preview",
    badgeDashed: true,
    description: (
      <>
        Labeled Preview, with what is and isn&rsquo;t suitable for
        <br />
        production.
      </>
    ),
  },
  {
    badge: "Not available",
    badgeDashed: true,
    description: (
      <>
        Points to documentation, a reference architecture or
        <br />
        Contact Sales.
      </>
    ),
  },
];

export default function TestEnvironmentsValidation() {
  return (
    <section className="w-full bg-white py-[83px] md:py-[83px] px-4 md:px-[100px]">
      <div className="max-w-[1240px] mx-auto px-0 md:px-[24px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
        >
          <p className="font-segoe font-bold text-[13px] tracking-[1.3px] leading-[20.8px] text-[#0d3632] uppercase">
            TEST · ENVIRONMENTS &amp; VALIDATION
          </p>

          <h2 className="font-segoe font-bold text-[28px] md:text-[40px] leading-[34px] md:leading-[46px] text-[#0b2a20] mt-2 max-w-[534px]">
            Test only where testing is really available.
          </h2>

          <p className="font-segoe font-normal text-[16px] leading-[25.6px] text-[#4b6b5f] mt-3 max-w-[640.5px]">
            No dead &ldquo;Try now&rdquo; buttons. Each state sets clear expectations.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.15}
          className="grid grid-cols-1 md:grid-cols-3 gap-[18px] mt-6"
        >
          {cards.map((card) => (
            <div
              key={card.badge}
              className="bg-[#deffef] border border-[#cfe9dc] rounded-[14px] p-[22px] flex flex-col gap-[10px]"
            >
              <span
                className={`inline-flex items-start border border-[#0d3632] rounded-[99px] px-[10px] pt-[2px] pb-[3.19px] w-fit ${
                  card.badgeDashed ? "border-dashed" : "border-solid"
                }`}
              >
                <span className="font-segoe font-normal text-[12px] leading-[19.2px] text-[#0d3632] whitespace-nowrap">
                  {card.badge}
                </span>
              </span>
              <p className="font-segoe font-normal text-[14.5px] leading-[23.2px] text-[#4b6b5f]">
                {card.description}
              </p>
            </div>
          ))}

          <div className="bg-[#deffef] border border-[#cfe9dc] rounded-[14px] px-[22px] pt-[22px] pb-[25.99px] flex flex-col gap-[6px] md:col-span-2">
            <h3 className="font-segoe font-bold text-[17px] leading-[27.2px] text-[#0b2a20]">
              Validation checklist
            </h3>
            <p className="font-segoe font-normal text-[14.5px] leading-[23.2px] text-[#4b6b5f]">
              Least-privilege auth succeeds · success path is reproducible · error and retry behavior understood · limits known ·
              events verified · logs available at the approved level · promotion follows change controls.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
