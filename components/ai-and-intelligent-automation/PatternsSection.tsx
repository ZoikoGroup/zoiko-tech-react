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
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
      delay: customDelay,
    },
  }),
};

export default function PatternsSection() {
  const patterns = [
    {
      title: "Agentic workflows",
      description:
        "Governed agents assist, recommend, prepare or execute bounded business work, depending on approved authority.",
      image: "/ai-and-intelligent-automation/pattern-agentic-workflows.png",
      pills: [
        "Intake",
        "Understand",
        "Retrieve / reason",
        "Prepare / act",
        "Approve",
        "Verify",
        "Close",
      ],
      linkText: "Explore AI & Agentic Automation",
      href: "/solution-zoiko-ai-agentic-automation",
    },
    {
      title: "Domain intelligence",
      description:
        "AI specialized around a real operating domain: its terminology, evidence and workflow context. Named only where an approved domain product exists.",
      image: "/ai-and-intelligent-automation/pattern-domain-intelligence.png",
      pills: [
        "Domain problem",
        "Specialized context",
        "Evidence",
        "Specialist route",
      ],
      linkText: "Explore domain AI",
      href: "#contact-sales",
    },
    {
      title: "Intelligent operations",
      description:
        "Bring AI support into the operational loop, with every action inside approved authority.",
      image: "/ai-and-intelligent-automation/pattern-intelligent-operations.png",
      pills: [
        "Detect",
        "Investigate",
        "Prepare",
        "Coordinate",
        "Execute",
        "Verify",
        "Improve",
      ],
      linkText: "Explore operations",
      href: "#trust-governance",
    },
    {
      title: "Knowledge & reasoning",
      description:
        "Source-aware retrieval over approved knowledge, with derived output kept distinct from the evidence beneath it.",
      image: "/ai-and-intelligent-automation/pattern-knowledge-reasoning.png",
      pills: [
        "Approved sources",
        "Permission-aware retrieval",
        "Synthesis",
        "Citations",
        "Freshness",
      ],
      linkText: "Explore AI architecture",
      href: "#architecture",
    },
  ];

  return (
    <section id="patterns" className="w-full bg-[#E9F9F8] py-20 lg:py-[88px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[80px]">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          custom={0.1}
          className="mb-12 sm:mb-14"
        >
          <span className="font-['Poppins',sans-serif] text-[#247780] text-[11px] font-semibold tracking-[0.16em] uppercase block mb-3">
            Intelligence and automation patterns
          </span>
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.17] tracking-[-0.03em] text-[#0F172A]">
            Four ways AI becomes operating capability
          </h2>
        </motion.div>

        {/* 2x2 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {patterns.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              custom={0.1 + index * 0.08}
              className="flex flex-col bg-white rounded-[16px] overflow-hidden border border-[#CBD5E1]/70 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Card Image */}
              <div className="relative w-full h-[220px] sm:h-[240px] bg-slate-900 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Card Content */}
              <div className="flex-1 flex flex-col justify-between p-6 sm:p-7">
                <div>
                  <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[22px] sm:text-[24px] font-bold text-[#0F172A] mb-3">
                    {item.title}
                  </h3>
                  <p className="font-['Poppins',sans-serif] text-[14px] sm:text-[15px] leading-[23px] text-[#475569] mb-5">
                    {item.description}
                  </p>

                  {/* Flow Pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.pills.map((pill, pIndex) => (
                      <span
                        key={pIndex}
                        className="px-3 py-1 rounded-full bg-[#EBF5F4] text-[#195B62] font-['Poppins',sans-serif] text-[12px] font-medium border border-[#34D4CA]/20"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <a
                    href={item.href}
                    className="inline-flex items-center gap-2 text-[#247780] hover:text-[#1F7A6C] font-['Poppins',sans-serif] text-[14px] font-semibold transition-colors"
                  >
                    <span>{item.linkText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
