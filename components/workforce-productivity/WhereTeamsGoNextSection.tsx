"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: (customDelay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
      delay: customDelay,
    },
  }),
};

const expansionCards = [
  {
    title: "ZoikoTime / workforce assurance",
    desc: "Zoiko HR, HR, Payroll & Revenue Operations, Zoiko Sema where coordination matters.",
    image: "/workforce-productivity/expand-zoikotime.png",
  },
  {
    title: "Zoiko HR",
    desc: "Workforce & Productivity, ZoikoTime, Communications & Collaboration.",
    image: "/workforce-productivity/expand-zoiko-hr.png",
  },
  {
    title: "Zoiko Sema",
    desc: "Workforce & Productivity for operational context, AI Governance & Assurance for governed AI use.",
    image: "/workforce-productivity/expand-zoiko-sema.png",
  },
  {
    title: "Workforce operations",
    desc: "HR, Payroll & Revenue Operations, Regulatory & Compliance where required.",
    image: "/workforce-productivity/expand-workforce-operations.png",
  },
  {
    title: "Operational visibility",
    desc: "Technology & SaaS or Modernization & Integration if fragmented systems block reliable context.",
    image: "/workforce-productivity/expand-operational-visibility.png",
  },
];

export default function WhereTeamsGoNextSection() {
  return (
    <section id="where-teams-go-next" className="w-full bg-white py-16 lg:py-24">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[130px]">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          className="mb-10"
        >
          <h2 className="text-[28px] sm:text-[32px] lg:text-[35.2px] font-bold leading-[1.15] text-[#0A1416] mb-3">
            Where teams go next
          </h2>
          <p className="text-[16px] leading-[25.6px] text-[#4D6468] max-w-[820px]">
            Routes are contextual. Nothing promotional appears while someone resolves
            a sensitive workforce, HR or approval task.
          </p>
        </motion.div>

        {/* Cards Grid: 4 in row 1, 1 in row 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {expansionCards.slice(0, 4).map((card, idx) => (
            <motion.div
              key={card.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              custom={idx * 0.08}
              className="group rounded-[14px] bg-[#F3F9FA] border border-[#D5E3E5] overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div className="relative w-full h-[170px] bg-gray-100 overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-start">
                <h3 className="text-[16px] font-bold text-[#0A1416] mb-2 leading-[24px]">
                  {card.title}
                </h3>
                <p className="text-[14.5px] leading-[22px] text-[#4D6468]">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Row 2: 5th card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {expansionCards.slice(4).map((card) => (
            <motion.div
              key={card.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              custom={0.35}
              className="group rounded-[14px] bg-[#F3F9FA] border border-[#D5E3E5] overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div className="relative w-full h-[170px] bg-gray-100 overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-start">
                <h3 className="text-[16px] font-bold text-[#0A1416] mb-2 leading-[24px]">
                  {card.title}
                </h3>
                <p className="text-[14.5px] leading-[22px] text-[#4D6468]">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          custom={0.4}
        >
          <a
            href="/solution-zoiko-ai-agentic-automation"
            className="inline-flex items-center justify-center px-6 py-3 rounded-[10px] bg-[#247780] text-white font-semibold text-[16px] hover:bg-[#1a5a61] transition-colors shadow-sm"
          >
            Explore adjacent solutions
          </a>
        </motion.div>
      </div>
    </section>
  );
}
