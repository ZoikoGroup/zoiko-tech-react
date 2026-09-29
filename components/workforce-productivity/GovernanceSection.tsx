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

const governanceCards = [
  {
    title: "Purpose limitation",
    description: "Every workforce-data use has an explicit operational purpose.",
    image: "/workforce-productivity/gov-purpose-limitation.png",
  },
  {
    title: "Least privilege",
    description: "Managers and admins see only the scope their role needs.",
    image: "/workforce-productivity/gov-least-privilege.png",
  },
  {
    title: "Sensitive contexts",
    description:
      "HR, legal, executive, regulated or confidential teams may need stricter restrictions.",
    image: "/workforce-productivity/gov-sensitive-contexts.png",
  },
  {
    title: "Retention",
    description:
      "Workforce and communication-derived records follow approved retention rules.",
    image: "/workforce-productivity/gov-retention.png",
  },
  {
    title: "AI controls",
    description:
      "AI summaries, action extraction and meeting intelligence follow governed settings and sensitive-space exclusions.",
    image: "/workforce-productivity/gov-ai-controls.png",
  },
  {
    title: "Audit",
    description:
      "Material admin changes, approvals and access or workflow actions stay reviewable where supported.",
    image: "/workforce-productivity/gov-audit.png",
  },
  {
    title: "Transparency",
    description:
      "Copy explains what a view is for. No covert or misleading monitoring patterns.",
    image: "/workforce-productivity/gov-transparency.png",
  },
  {
    title: "Jurisdiction",
    description:
      "Local labor, privacy and recording requirements are handled through approved legal and product configuration. No blanket compliance claim.",
    image: "/workforce-productivity/gov-jurisdiction.png",
  },
];

export default function GovernanceSection() {
  return (
    <section id="governance" className="w-full bg-white py-16 lg:py-24">
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
            Privacy, policy and governance
          </h2>
          <p className="text-[16px] leading-[25.6px] text-[#4D6468]">
            The trust architecture, stated plainly.
          </p>
        </motion.div>

        {/* 8 Cards (4x2 on lg) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {governanceCards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              custom={idx * 0.06}
              className="group rounded-[14px] bg-[#F3F9FA] border border-[#D5E3E5] overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              {/* Card Image */}
              <div className="relative w-full h-[182px] bg-gray-100 overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Card Content */}
              <div className="p-5 flex-1 flex flex-col justify-start">
                <h3 className="text-[16.8px] font-bold leading-[1.3] text-[#0A1416] mb-2">
                  {card.title}
                </h3>
                <p className="text-[14.5px] sm:text-[15.2px] leading-[24px] text-[#4D6468]">
                  {card.description}
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
          custom={0.3}
        >
          <a
            href="/compliance"
            className="inline-flex items-center justify-center px-6 py-3 rounded-[10px] bg-[#247780] text-white font-semibold text-[16px] hover:bg-[#1a5a61] transition-colors shadow-sm"
          >
            Trust Center
          </a>
        </motion.div>
      </div>
    </section>
  );
}
