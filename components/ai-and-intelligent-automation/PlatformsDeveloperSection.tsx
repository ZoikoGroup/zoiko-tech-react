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

export default function PlatformsDeveloperSection() {
  const platformCards = [
    {
      name: "Zoiko AI",
      multilineTitle: false,
      description:
        "Governed agentic intelligence infrastructure: models, agents, knowledge and reasoning.",
      roleTag: "Intelligence layer",
      href: "/developer-portal",
    },
    {
      name: "ZoikoVertex",
      multilineTitle: false,
      description:
        "Governed agentic marketing operating system and workflow execution in approved contexts.",
      roleTag: "Agentic execution",
      href: "/developer-portal",
    },
    {
      name: "Governed\nwork\norchestration",
      multilineTitle: true,
      description:
        "Orchestration of governed work across teams and systems. Platform name shown once public naming is approved.",
      roleTag: "Orchestration",
      href: "/developer-portal",
    },
    {
      name: "Responsible AI",
      multilineTitle: false,
      description:
        "Governance, human oversight, evaluation and accountable deployment.",
      roleTag: "Trust evidence",
      href: "/developer-portal",
    },
  ];

  return (
    <section id="developer-platform" className="w-full bg-white py-16 sm:py-20 lg:py-[88px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[80px]">
        {/* Section Header: Matching Image 2 exactly (Left aligned headline with paragraph directly beneath) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          custom={0.1}
          className="max-w-[760px] mb-12 sm:mb-14"
        >
          <span className="font-['Poppins',sans-serif] text-[#1F7A6C] text-[11px] font-semibold tracking-[0.16em] uppercase block mb-3">
            PLATFORM EVIDENCE &amp; DEVELOPER LAYER
          </span>
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-[34px] sm:text-[42px] lg:text-[48px] font-bold leading-[1.17] tracking-[-0.03em] text-[#0F172A] mb-4">
            The platforms and interfaces behind it
          </h2>
          <p className="font-['Poppins',sans-serif] text-[15px] sm:text-[16px] leading-[26px] text-[#64748B] max-w-[620px]">
            Each card shows an approved role. Maturity comes from the platform registry and stays hidden until confirmed.
          </p>
        </motion.div>

        {/* 4 Platform Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {platformCards.map((card, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              custom={0.1 + index * 0.06}
              className="flex flex-col justify-between p-6 rounded-[14px] bg-white border border-[#E2E8F0] shadow-xs hover:border-[#1F7A6C]/40 hover:shadow-md transition-all duration-300 min-h-[310px]"
            >
              <div>
                {/* Header with Title and Dot + [Maturity] pill */}
                <div className="flex items-start justify-between gap-2 mb-4">
                  <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[19px] sm:text-[20px] font-extrabold text-[#104668] leading-tight whitespace-pre-line">
                    {card.name}
                  </h3>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#E2E8F0] shrink-0 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#475569]" />
                    <span className="font-['Poppins',sans-serif] text-[11px] font-medium text-[#334155]">
                      [Maturity]
                    </span>
                  </div>
                </div>

                {/* Body Text */}
                <p className="font-['Poppins',sans-serif] text-[13px] sm:text-[14px] leading-[22px] text-[#475569]">
                  {card.description}
                </p>
              </div>

              {/* Bottom Row with Divider Line */}
              <div className="pt-4 mt-6 border-t border-[#E2E8F0] flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-[#DBF2ED] text-[#195B62] font-['Poppins',sans-serif] text-[11px] font-semibold">
                  {card.roleTag}
                </span>
                <a
                  href={card.href}
                  className="inline-flex items-center gap-1.5 text-[#1F7A6C] hover:text-[#104668] font-['Poppins',sans-serif] text-[13px] font-semibold transition-colors"
                >
                  <span>Explore</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Large Developer Banner: Exactly matching Image 2 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          custom={0.2}
          className="rounded-[20px] overflow-hidden bg-[#001315] shadow-2xl grid grid-cols-1 lg:grid-cols-12 border border-[#00262A]"
        >
          {/* Left Column Image: Clean, crisp, NO black gradient fade */}
          <div className="lg:col-span-6 relative min-h-[240px] sm:min-h-[340px] lg:min-h-[520px]">
            <Image
              src="/ai-and-intelligent-automation/developer-facade.png"
              alt="Geometric building facade"
              fill
              className="object-cover object-left"
            />
          </div>

          {/* Right Column Content: Row-divided 2-column capability list */}
          <div className="lg:col-span-6 p-5 sm:p-8 lg:p-10 flex flex-col justify-between text-white">
            <div>
              <span className="font-['Poppins',sans-serif] text-white text-[11px] font-semibold tracking-[0.16em] uppercase block mb-2">
                DEVELOPER &amp; INTEGRATION LAYER
              </span>
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[24px] sm:text-[30px] lg:text-[32px] font-bold text-white mb-2 leading-tight">
                Build on Zoiko AI
              </h3>
              <p className="font-['Poppins',sans-serif] text-[13px] sm:text-[14px] text-[#CBD5E1] mb-6">
                Capability labels follow current documentation.
              </p>

              {/* Row-by-Row 2-Column Capability Grid with continuous horizontal dividers */}
              <div className="border-t border-white/20">
                {/* Row 1: Build & Learn */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 py-4 border-b border-white/20">
                  <div>
                    <h4 className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] sm:text-[16px] font-bold text-white mb-1">
                      Build
                    </h4>
                    <p className="font-['Poppins',sans-serif] text-[13px] leading-[20px] text-[#CBD5E1]">
                      APIs · SDKs · model interfaces · webhooks
                    </p>
                  </div>
                  <div>
                    <h4 className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] sm:text-[16px] font-bold text-white mb-1">
                      Learn
                    </h4>
                    <p className="font-['Poppins',sans-serif] text-[13px] leading-[20px] text-[#CBD5E1]">
                      Documentation · API reference · quickstarts · guides
                    </p>
                  </div>
                </div>

                {/* Row 2: Test & Operate */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 py-4 border-b border-white/20">
                  <div>
                    <h4 className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] sm:text-[16px] font-bold text-white mb-1">
                      Test
                    </h4>
                    <p className="font-['Poppins',sans-serif] text-[13px] leading-[20px] text-[#CBD5E1]">
                      Sandbox and sample apps, when self-service is live
                    </p>
                  </div>
                  <div>
                    <h4 className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] sm:text-[16px] font-bold text-white mb-1">
                      Operate
                    </h4>
                    <p className="font-['Poppins',sans-serif] text-[13px] leading-[20px] text-[#CBD5E1]">
                      Authentication · observability · status · changelog
                    </p>
                  </div>
                </div>

                {/* Row 3: Ecosystem */}
                <div className="py-4">
                  <div>
                    <h4 className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] sm:text-[16px] font-bold text-white mb-1">
                      Ecosystem
                    </h4>
                    <p className="font-['Poppins',sans-serif] text-[13px] leading-[20px] text-[#CBD5E1]">
                      Integrations and technology partners
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <a
                href="/developer-portal"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[6px] bg-[#247780] hover:bg-[#1F7A6C] text-white font-['Poppins',sans-serif] font-semibold text-[15px] transition-colors shadow-sm w-full sm:w-auto text-center"
              >
                <span>Explore Developer Platform</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
