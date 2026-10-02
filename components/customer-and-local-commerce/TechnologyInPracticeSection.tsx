"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: (customDelay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
      delay: customDelay,
    },
  }),
};

const practiceCards = [
  {
    image: "/customer-and-local-commerce/tech-practice-smartphone.png",
    title: "Customer communications",
    flow: "Problem → communications and routing architecture → approved result → evidence.",
  },
  {
    image: "/customer-and-local-commerce/tech-practice-waterfront.png",
    title: "Local presence",
    flow: "Market problem → local communication setup → supported customer outcome.",
  },
  {
    image: "/customer-and-local-commerce/tech-practice-analytics.png",
    title: "Marketing operations",
    flow: "Repeatable workflow → governed intelligence and approval → approved result.",
  },
  {
    image: "/customer-and-local-commerce/tech-practice-market.png",
    title: "Commerce journey",
    flow: "Discovery → authoritative commerce handoff → confirmed outcome → evidence.",
  },
  {
    image: "/customer-and-local-commerce/tech-practice-taxi.png",
    title: "Life orchestration",
    flow: "Cross-domain objective → orchestration and partner handoff → outcome and limitations.",
  },
];

export default function TechnologyInPracticeSection() {
  return (
    <section id="technology-in-practice" className="w-full bg-[#E9F9F8] py-16 sm:py-20 lg:py-[96px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[80px]">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          custom={0.1}
          className="flex flex-col items-start mb-10 sm:mb-12"
        >
          <span className="font-['Poppins',sans-serif] text-[#247780] text-[11px] font-semibold tracking-[0.14em] uppercase mb-3">
            Technology in practice
          </span>

          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-[32px] sm:text-[40px] lg:text-[48px] font-bold text-[#0F172A] leading-[1.17] tracking-[-0.03em] mb-4">
            Evidence first, and only approved evidence
          </h2>

          <p className="font-['Poppins',sans-serif] text-[15px] sm:text-[18px] text-[#64748B] leading-[28px] max-w-[840px]">
            Case studies for this solution are in review. Until they are published, we show the architecture and platform evidence rather than invented results.
          </p>
        </motion.div>

        {/* 5 Architecture / Practice Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          custom={0.2}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mb-8"
        >
          {practiceCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E2E8F0] rounded-[14px] overflow-hidden hover:border-[#247780]/40 hover:shadow-md transition-all flex flex-col"
            >
              {/* Image with Floating Badge */}
              <div className="relative w-full h-[150px] overflow-hidden bg-slate-100">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 240px"
                />
                <div className="absolute top-[12px] left-[12px] z-10 inline-flex items-center gap-[6px] px-[10px] py-[4px] rounded-full bg-[#FEF3C7] shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#92400E]" />
                  <span className="font-['Poppins',sans-serif] text-[#92400E] text-[11px] font-semibold leading-none">
                    Evidence pending
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="font-['Poppins',sans-serif] text-[#247780] text-[11px] font-semibold tracking-[0.12em] uppercase mb-2 block">
                    CASE STUDY · IN REVIEW
                  </span>
                  <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[18px] leading-[24px] text-[#0F172A] mb-2">
                    {card.title}
                  </h3>
                  <p className="font-['Poppins',sans-serif] text-[13px] leading-[20px] text-[#334155] mb-4">
                    {card.flow}
                  </p>
                </div>

                <a
                  href="#contact-sales"
                  className="inline-flex items-center gap-1.5 text-[#247780] hover:text-[#1F7A6C] font-['Poppins',sans-serif] text-[13px] font-semibold pt-2 group"
                >
                  <span>Ask about this evidence</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Disclaimer Plain Text */}
        <p className="font-['Poppins',sans-serif] text-[13px] leading-[20px] text-[#334155] max-w-[1000px]">
          No conversion uplift, revenue impact, engagement rates, customer counts, market coverage or partner logos are shown until approved.
        </p>
      </div>
    </section>
  );
}
