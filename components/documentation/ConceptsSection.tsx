"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ConceptCard {
  title: string;
  description: string;
}

const conceptCards: ConceptCard[] = [
  {
    title: "System of record",
    description:
      "Identify the actual authoritative business-state owner only when approved.",
  },
  {
    title: "Human authority",
    description:
      "Review/approval and AI-assisted behavior remain accountable and source-backed.",
  },
  {
    title: "State & dependencies",
    description:
      "Only documented transitions, integration boundaries and user-visible failures.",
  },
  {
    title: "No invented controls",
    description:
      "No assumed SSO/MFA/OAuth, entitlements, private topology, SLA, RTO or RPO.",
  },
];

export default function ConceptsSection() {
  return (
    <section
      id="concepts"
      className="w-full text-white py-16 sm:py-20 lg:py-[74px]"
      style={{
        background:
          "linear-gradient(134deg, rgba(0, 0, 0, 1) 0%, rgba(10, 37, 40, 1) 48%, rgba(36, 119, 128, 1) 100%)",
      }}
    >
      <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-[840px] mb-10 sm:mb-12"
        >
          <h2 className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[46px] leading-[1.15] tracking-[-0.0217em] text-white mb-3">
            Concepts explain the authority boundary.
          </h2>
          <p className="font-poppins text-sm sm:text-base leading-[25.6px] text-[#C4D7D9]">
            A conceptual diagram must not create product behavior.
          </p>
        </motion.div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {conceptCards.map((card, idx) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/[0.03] rounded-[10px] border border-[#91BEC5]/35 p-[27px] pb-[42px] flex flex-col items-center text-center gap-3 transition-all duration-300 hover:bg-white/[0.06] hover:-translate-y-1"
            >
              <div className="w-[46px] h-[46px] rounded-[10px] bg-[#62C6CA]/10 flex items-center justify-center shrink-0 mb-1">
                <Image
                  src="/documentation/card-icon.svg"
                  alt="Document icon"
                  width={25}
                  height={25}
                />
              </div>
              <h3 className="font-poppins font-bold text-lg sm:text-[21px] leading-[27.3px] text-white mb-1">
                {card.title}
              </h3>
              <p className="font-poppins font-normal text-sm sm:text-[15px] leading-[24px] text-[#C4D7D9]">
                {card.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
