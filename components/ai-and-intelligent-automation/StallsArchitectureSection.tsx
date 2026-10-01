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

export default function StallsArchitectureSection() {
  const failureModes = [
    {
      problem: "AI tools multiply without architecture",
      solution: "Shared technology and control layers",
    },
    {
      problem: "Knowledge is disconnected from workflow",
      solution: "Retrieval connected to approved actions",
    },
    {
      problem: "Agents have unclear authority",
      solution: "Explicit authority levels and human approval",
    },
    {
      problem: "Domain use lacks specialized context",
      solution: "Domain intelligence as specialization",
    },
    {
      problem: "Evaluation is inconsistent",
      solution: "Use-case-specific evaluation and evidence",
    },
    {
      problem: "Governance sits outside delivery",
      solution: "Responsible AI built into the architecture",
    },
    {
      problem: "Pilots never become operations",
      solution: "An operating model with evidence-driven expansion",
    },
  ];

  const layers = [
    { id: "L1", title: "Models & intelligence", type: "core" },
    { id: "L2", title: "Knowledge & context", type: "core" },
    { id: "L3", title: "Agents / orchestration", type: "core" },
    { id: "L4", title: "Tools & workflows", type: "core" },
    { id: "L5", title: "Identity & authority", type: "control", tag: "CONTROL FABRIC" },
    { id: "L6", title: "Governance & evidence", type: "control" },
    { id: "L7", title: "Observability & operations", type: "control" },
  ];

  return (
    <section id="architecture" className="w-full bg-[#E9F9F8] py-20 lg:py-[88px]">
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
            From AI experiment to operating capability
          </span>
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.17] tracking-[-0.03em] text-[#0F172A] mb-3">
            Most AI stalls between the pilot and the operation
          </h2>
          <p className="font-['Poppins',sans-serif] text-[15px] sm:text-[16px] leading-[26px] text-[#64748B] max-w-[680px]">
            Seven common failure modes, and how a shared AI architecture answers each one.
          </p>
        </motion.div>

        {/* Two Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: 7 Failure Modes List */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            custom={0.15}
            className="lg:col-span-6 space-y-4"
          >
            {failureModes.map((item, index) => (
              <div
                key={index}
                className="p-4 sm:p-5 rounded-[12px] bg-white border border-[#CBD5E1]/60 shadow-xs hover:border-[#247780]/40 transition-colors"
              >
                <div className="mb-1.5">
                  <span className="font-['Poppins',sans-serif] text-[14px] text-[#64748B] line-through">
                    {item.problem}
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#DBF2ED] flex items-center justify-center shrink-0">
                    <ArrowRight className="w-3 h-3 text-[#1F7A6C]" />
                  </div>
                  <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] font-semibold text-[#0F172A]">
                    {item.solution}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right Column: Architecture Blueprint Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            custom={0.2}
            className="lg:col-span-6 relative rounded-[20px] overflow-hidden shadow-xl border border-[#34D4CA]/30 bg-[#001315]"
          >
            {/* Background Architecture Image */}
            <div className="absolute inset-0">
              <Image
                src="/ai-and-intelligent-automation/stalls-architecture-canopy.png"
                alt="Architecture canopy"
                fill
                className="object-cover opacity-35"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0, 19, 21, 0.4) 0%, rgba(0, 19, 21, 0.88) 100%)",
                }}
              />
            </div>

            <div className="relative z-10 p-6 sm:p-8">
              <div className="mb-6">
                <span className="font-['Poppins',sans-serif] text-[#4DDCAD] text-[11px] font-semibold tracking-[0.16em] uppercase">
                  ENTERPRISE AI ARCHITECTURE
                </span>
              </div>

              {/* Stacked Layers */}
              <div className="space-y-2.5 mb-6">
                {layers.map((layer, index) => {
                  const isControl = layer.type === "control";
                  return (
                    <div
                      key={index}
                      className={`flex items-center justify-between px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-[10px] border transition-colors ${
                        isControl
                          ? "bg-[#1F7A6C]/85 border-[#34D4CA]/45"
                          : "bg-[#00191E]/85 border-[#34D4CA]/35"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-['Poppins',sans-serif] text-[12px] font-bold text-[#4DDCAD] px-2 py-0.5 rounded bg-black/30">
                          {layer.id}
                        </span>
                        <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] font-semibold text-white">
                          {layer.title}
                        </span>
                      </div>
                      {layer.tag && (
                        <span className="font-['Poppins',sans-serif] text-[10px] font-bold tracking-[0.12em] uppercase text-white px-2 py-0.5 rounded-full bg-white/20">
                          {layer.tag}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Sub-note */}
              <p className="font-['Poppins',sans-serif] text-[12px] sm:text-[13px] leading-[19px] text-[#CBD5E1] pt-3 border-t border-white/15">
                One common AI and control fabric feeds specialized business and industry use cases. Platforms do not all share identical implementation.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
