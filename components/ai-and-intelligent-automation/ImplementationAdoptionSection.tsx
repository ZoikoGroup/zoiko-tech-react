"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

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

export default function ImplementationAdoptionSection() {
  const steps = [
    {
      step: 1,
      title: "Identify work",
      gate: "Use case qualified",
    },
    {
      step: 2,
      title: "Choose pattern",
      gate: "Authority approved",
    },
    {
      step: 3,
      title: "Design context & tools",
      gate: "Architecture reviewed",
    },
    {
      step: 4,
      title: "Set governance & oversight",
      gate: "Accountable owner named",
    },
    {
      step: 5,
      title: "Pilot",
      gate: "Pilot reviewed",
    },
    {
      step: 6,
      title: "Operate",
      gate: "Ownership confirmed",
    },
    {
      step: 7,
      title: "Expand",
      gate: "Expansion reviewed",
    },
  ];

  const caseStudies = [
    {
      title: "Enterprise AI",
      image: "/ai-and-intelligent-automation/case-study-enterprise-ai.png",
    },
    {
      title: "Agentic workflow",
      image: "/ai-and-intelligent-automation/case-study-agentic-workflow.png",
    },
    {
      title: "Domain AI",
      image: "/ai-and-intelligent-automation/case-study-domain-ai.png",
    },
    {
      title: "AI governance",
      image: "/ai-and-intelligent-automation/case-study-ai-governance.png",
    },
  ];

  return (
    <section id="implementation" className="w-full bg-[#E9F9F8] py-14 sm:py-18 lg:py-[88px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[80px]">
        {/* Part 1: Gated Implementation Steps Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          custom={0.1}
          className="mb-8 sm:mb-12"
        >
          <span className="font-['Poppins',sans-serif] text-[#247780] text-[11px] font-semibold tracking-[0.16em] uppercase block mb-2 sm:mb-3">
            Implementation & adoption
          </span>
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-[26px] sm:text-[36px] lg:text-[48px] font-bold leading-[1.17] tracking-[-0.03em] text-[#0F172A]">
            Seven gated steps from first use case to scale
          </h2>
        </motion.div>

        {/* 7 Gated Steps Timeline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          custom={0.15}
          className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4 mb-6"
        >
          {steps.map((item, index) => {
            const isLast = index === steps.length - 1;
            return (
              <div
                key={index}
                className={`flex flex-col justify-between p-3.5 sm:p-0 rounded-[12px] sm:rounded-none bg-white/70 sm:bg-transparent border border-[#34D4CA]/20 sm:border-0 shadow-xs sm:shadow-none ${
                  index === 6 ? "col-span-2 sm:col-span-1 lg:col-span-1" : ""
                }`}
              >
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#247780] text-white font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[13px] sm:text-[15px] flex items-center justify-center shrink-0 shadow-sm">
                    {item.step}
                  </div>
                  {!isLast && (
                    <div className="hidden lg:block flex-1 h-[2px] bg-[#9FDCD7]" />
                  )}
                </div>

                <div className="min-h-[42px] sm:min-h-[50px] mb-1.5 sm:mb-2">
                  <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[13.5px] sm:text-[15px] font-bold text-[#0F172A] leading-snug">
                    {item.title}
                  </h3>
                </div>

                <div className="flex items-center gap-1.5 text-[#195B62]">
                  <Check className="w-3.5 h-3.5 text-[#247780] shrink-0" />
                  <span className="font-['Poppins',sans-serif] text-[11px] sm:text-[12px] font-semibold leading-tight">
                    {item.gate}
                  </span>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Discuss Rollout Link */}
        <div className="mb-14 pt-3">
          <a
            href="#contact-sales"
            className="inline-flex items-center gap-1.5 text-[#247780] hover:text-[#1F7A6C] font-['Poppins',sans-serif] text-[14px] font-semibold transition-colors"
          >
            <span>Discuss rollout</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Part 2: Technology in Practice Section */}
        <div className="pt-12 border-t border-[#C6E6E4]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            custom={0.1}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10"
          >
            <div>
              <span className="font-['Poppins',sans-serif] text-[#247780] text-[11px] font-semibold tracking-[0.16em] uppercase block mb-3">
                Technology in practice
              </span>
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[26px] sm:text-[32px] font-bold text-[#0F172A]">
                Evidence first, and only approved evidence
              </h3>
            </div>
            <p className="font-['Poppins',sans-serif] text-[13px] sm:text-[14px] leading-[22px] text-[#475569] max-w-[500px]">
              Case studies are in review. Until published, we show architecture and platform evidence, never invented productivity gains, accuracy, automation rates or logos.
            </p>
          </motion.div>

          {/* 4 Case Study In-Review Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {caseStudies.map((card, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUpVariant}
                custom={0.1 + index * 0.06}
                className="relative h-[210px] rounded-[14px] overflow-hidden p-5 flex flex-col justify-between shadow-md border border-slate-200"
              >
                {/* Background Image */}
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />

                {/* Dark Gradient Overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0, 19, 21, 0.25) 0%, rgba(0, 19, 21, 0.9) 100%)",
                  }}
                />

                {/* Top Badge */}
                <div className="relative z-10">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#FEF3C7] text-[#92400E] font-['Poppins',sans-serif] text-[11px] font-semibold">
                    Evidence pending
                  </span>
                </div>

                {/* Bottom Title & Subtitle */}
                <div className="relative z-10">
                  <span className="block font-['Poppins',sans-serif] text-[11px] font-semibold tracking-[0.12em] uppercase text-[#4DDCAD] mb-1">
                    CASE STUDY · IN REVIEW
                  </span>
                  <h4 className="font-['Plus_Jakarta_Sans',sans-serif] text-[18px] sm:text-[19px] font-bold text-white">
                    {card.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
