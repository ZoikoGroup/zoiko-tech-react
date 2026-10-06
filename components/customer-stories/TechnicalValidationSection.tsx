"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const technicalCards = [
  {
    title: "Documentation / Developer Resources",
    description:
      "Current public APIs, SDKs, implementation guidance and integration facts.",
    image: "/customer-stories/technical-documentation.png",
  },
  {
    title: "Trust Center / Status",
    description:
      "Authoritative security, privacy, compliance, accessibility, resilience and service-state evidence.",
    image: "/customer-stories/technical-trust.png",
  },
  {
    title: "Technology / industry / solution",
    description:
      "Current approved destination and product availability, geography, operator and maturity.",
    image: "/customer-stories/technical-technology.png",
  },
  {
    title: "Research / Guides & Reports",
    description:
      "Real supporting research or educational follow-up, not substitute proof of a customer result.",
    image: "/customer-stories/technical-research.png",
  },
  {
    title: "Existing customers",
    description:
      "Support and documentation before a forced sales path. Canonical URLs require production route verification.",
    image: "/customer-stories/technical-customers.png",
  },
];

export default function TechnicalValidationSection() {
  return (
    <section id="technical" className="w-full bg-white text-[#102D2F] py-16 sm:py-20 md:py-24">
      <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-[820px] mb-12 sm:mb-14"
        >
          <h2 className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[47px] leading-[1.18] tracking-[-0.015em] text-[#102D2F] mb-4">
            Continue to the authoritative source.
          </h2>
          <p className="font-poppins text-base sm:text-[17px] leading-relaxed text-[#5E7076]">
            A customer example does not establish a general assurance claim or product commitment.
          </p>
        </motion.div>

        {/* 3-Column Grid Matching Figma Spec (Row 1: 3 cards, Row 2: 2 cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-11 gap-y-6">
          {technicalCards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-white border border-black/10 rounded-[10px] px-[10px] pt-[23px] pb-[38px] flex flex-col justify-start shadow-[0_1px_10px_rgba(0,0,0,0.05)] hover:shadow-md transition-shadow"
            >
              <div className="relative w-full aspect-[348/180] h-[180px] rounded-[6px] overflow-hidden mb-4 bg-slate-100 flex-shrink-0">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="flex flex-col flex-1 px-1">
                <h3 className="font-poppins font-bold text-lg sm:text-[20px] text-[#102D2F] mb-3 leading-snug">
                  {card.title}
                </h3>
                <p className="font-poppins text-sm sm:text-[15px] leading-[25.5px] text-[#587176]">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
