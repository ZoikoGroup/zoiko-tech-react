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
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
      delay: customDelay,
    },
  }),
};

const stages = [
  {
    step: "01",
    title: "Plan",
    description: "Repeatable campaign and workflow planning.",
  },
  {
    step: "02",
    title: "Recommend",
    description: "Derived insights, labeled and source-aware.",
  },
  {
    step: "03",
    title: "Prepare",
    description: "AI prepares approved work in governed workflows.",
  },
  {
    step: "04",
    title: "Approve",
    description: "Human or policy review for customer-facing output.",
  },
  {
    step: "05",
    title: "Execute",
    description: "Only through approved integrations.",
  },
  {
    step: "06",
    title: "Evidence",
    description: "Source, content, approvals and outcomes preserved.",
  },
];

export default function MarketingIntelligenceSection() {
  return (
    <section id="marketing-intelligence" className="w-full bg-[#E9F9F8] py-16 sm:py-20 lg:py-[96px]">
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
          <span className="font-['Poppins',sans-serif] text-[#1F7A6C] text-[11px] font-semibold tracking-[0.16em] uppercase mb-3">
            Marketing intelligence & operations
          </span>

          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-[28px] sm:text-[36px] lg:text-[40px] font-bold text-[#0F172A] leading-[1.25] tracking-[-0.036em] mb-4 max-w-[840px]">
            Governed marketing work, with a human decision at every customer-facing step
          </h2>

          <p className="font-['Poppins',sans-serif] text-[15px] sm:text-[18px] text-[#64748B] leading-[28px] max-w-[900px]">
            ZoikoVertex supports governed agentic marketing operations: AI prepares and recommends, people approve, and every action keeps its source and outcome.
          </p>
        </motion.div>

        {/* Feature Image Banner */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          custom={0.2}
          className="relative w-full h-[240px] sm:h-[300px] lg:h-[340px] rounded-[20px] overflow-hidden border border-[#1F7A6C]/15 mb-10 shadow-sm"
        >
          <Image
            src="/customer-and-local-commerce/marketing-charts.png"
            alt="Person reviewing marketing performance charts on a monitor"
            fill
            className="object-cover"
            sizes="(max-width: 1440px) 100vw, 1280px"
          />
        </motion.div>

        {/* 6 Step Cards (3x2 Grid) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          custom={0.3}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {stages.map((st, idx) => (
            <div
              key={idx}
              className="p-6 rounded-[14px] bg-white border border-[#E2E8F0] hover:border-[#1F7A6C]/40 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <span className="block font-['Plus_Jakarta_Sans',sans-serif] text-[#1F7A6C] font-extrabold text-[20px] mb-2">
                  {st.step}
                </span>
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[18px] text-[#0F172A] mb-2">
                  {st.title}
                </h3>
              </div>
              <p className="font-['Poppins',sans-serif] text-[14px] text-[#334155] leading-relaxed">
                {st.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
