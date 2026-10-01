"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Cpu, Database, Bot, Wrench } from "lucide-react";

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

export default function HeroSection() {
  const fabricItems = [
    { title: "Models & intelligence", icon: Cpu },
    { title: "Knowledge & context", icon: Database },
    { title: "Agents & reasoning", icon: Bot },
    { title: "Tools & workflows", icon: Wrench },
  ];

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden text-white bg-[#001315]"
      style={{
        background:
          "linear-gradient(262deg, rgba(6, 85, 72, 0.55) 78%, rgba(0, 38, 42, 0.55) 100%), #001315",
      }}
    >
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[80px] py-16 sm:py-20 lg:py-[80px]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-14">
          {/* Left Column: Heading, Description, Actions & Bottom Notice */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            custom={0.1}
            className="flex flex-col items-start w-full lg:max-w-[660px] shrink-0"
          >
            <h1 className="font-['Plus_Jakarta_Sans',sans-serif] text-[28px] sm:text-[38px] md:text-[44px] lg:text-[50px] font-extrabold leading-[1.2] lg:leading-[1.25] tracking-[-0.0232em] text-white mb-4 sm:mb-6">
              Turn enterprise intelligence into governed work, not isolated AI experiments.
            </h1>

            <p className="font-['Poppins',sans-serif] text-[14px] sm:text-[16px] lg:text-[18px] leading-[24px] sm:leading-[28px] text-[#E2E8F0] mb-6 sm:mb-8 font-normal max-w-[620px]">
              Zoiko Tech brings models, knowledge, agents, workflows, developer interfaces and governance into a connected AI architecture, helping organizations move from assistance to accountable automation at the level each use case can support.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8 w-full sm:w-auto">
              <a
                href="#intent-router"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[6px] bg-[#247780] hover:bg-[#1F7A6C] text-white font-['Poppins',sans-serif] font-semibold text-[15px] leading-5 transition-colors shadow-sm w-full sm:w-auto text-center"
              >
                <span>Explore AI pathways</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </a>

              <a
                href="#contact-sales"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[6px] border border-white hover:bg-white/10 text-white font-['Poppins',sans-serif] font-semibold text-[15px] leading-5 transition-colors w-full sm:w-auto text-center"
              >
                <span>Talk to Zoiko Tech</span>
              </a>
            </div>

            <div className="w-full pt-5 border-t border-white/20">
              <p className="font-['Poppins',sans-serif] text-[13px] sm:text-[14px] leading-[20px] sm:leading-[22px] font-medium text-white/90">
                Governed AI. Human oversight. Evidence-aware automation. Accountable deployment.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Visual with Hero Curves & Operating Fabric Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            custom={0.2}
            className="w-full lg:flex-1 max-w-[580px] lg:max-w-none flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[480px] sm:max-w-[520px] min-h-[440px] sm:min-h-[520px] lg:min-h-[560px] flex items-center justify-center">
              {/* Architectural image backdrop */}
              <div className="absolute right-0 top-0 w-[80%] sm:w-[85%] h-full rounded-[20px] overflow-hidden shadow-2xl">
                <Image
                  src="/ai-and-intelligent-automation/hero-curves.png"
                  alt="Connected AI Operating Fabric Architecture"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001315]/80 via-transparent to-transparent" />
              </div>

              {/* Floating Operating Fabric Card */}
              <div
                className="relative z-10 w-full sm:w-[410px] p-4 sm:p-6 rounded-[16px] border border-[#34D4CA]/50 mr-auto sm:ml-0"
                style={{
                  backgroundColor: "rgba(0, 25, 30, 0.9)",
                  boxShadow: "0px 0px 24px 0px rgba(52, 212, 202, 0.25)",
                }}
              >
                <div className="mb-3.5">
                  <span className="font-['Poppins',sans-serif] text-[#4DDCAD] text-[11px] font-semibold tracking-[0.16em] uppercase">
                    CONNECTED AI OPERATING FABRIC
                  </span>
                </div>

                <div className="space-y-2 mb-3.5">
                  {fabricItems.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-2.5 sm:px-3.5 sm:py-3 rounded-[10px] bg-white/8 border border-[#34D4CA]/35"
                      >
                        <div className="w-8 h-8 rounded-[8px] bg-[#1F7A6C] flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] font-semibold text-white">
                          {item.title}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Human Approval Control Point Card */}
                <div className="flex items-center justify-between p-3.5 bg-white rounded-[10px] mb-3 shadow-md">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#1F7A6C]" />
                    <span className="font-['Poppins',sans-serif] text-[13px] font-semibold text-[#0F172A]">
                      Human approval
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#DBF2ED] text-[#195B62] font-['Poppins',sans-serif] text-[11px] font-semibold leading-normal">
                    Control point
                  </span>
                </div>

                {/* Governance Footnote */}
                <div className="text-center pt-1">
                  <span className="font-['Poppins',sans-serif] text-[11px] font-medium tracking-[0.06em] text-[#CBD5E1]">
                    IDENTITY · GOVERNANCE · OBSERVABILITY
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
