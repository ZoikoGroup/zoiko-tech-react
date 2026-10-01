"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Inbox, ArrowRightLeft, AlertTriangle, ArrowUpRight, CheckCircle2, History } from "lucide-react";

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

const operationsCards = [
  {
    icon: Inbox,
    title: "Inquiry / request",
    description: "Channel, intent, context, owner and current state.",
  },
  {
    icon: ArrowRightLeft,
    title: "Handoff",
    description: "Receiving team or system, required context, expected response.",
  },
  {
    icon: AlertTriangle,
    title: "Exception",
    description: "Unavailable service, failed integration or policy restriction.",
  },
  {
    icon: ArrowUpRight,
    title: "Escalation",
    description: "A clear owner and reason when a path cannot complete.",
  },
  {
    icon: CheckCircle2,
    title: "Resolution",
    description: "Outcome, authoritative reference and customer communication state.",
  },
  {
    icon: History,
    title: "History",
    description: "Material routing, approval and outcome events, where permitted.",
  },
];

export default function CustomerOperationsSection() {
  return (
    <section id="customer-operations" className="w-full bg-[#F8FAFC] py-16 sm:py-20 lg:py-[96px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[80px]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-14">
          {/* Left Column: Heading, Subtext, 6 Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            custom={0.1}
            className="flex flex-col items-start w-full lg:max-w-[580px] shrink-0"
          >
            <span className="font-['Poppins',sans-serif] text-[#1F7A6C] text-[11px] font-semibold tracking-[0.16em] uppercase mb-3">
              Customer operations & resolution
            </span>

            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-[28px] sm:text-[36px] lg:text-[44px] font-bold text-[#0F172A] leading-[1.2] tracking-[-0.03em] mb-4">
              From inquiry to outcome, nothing falls between teams
            </h2>

            <p className="font-['Poppins',sans-serif] text-[15px] sm:text-[17px] text-[#64748B] leading-[26px] mb-8 font-normal">
              Every request carries its channel, intent, owner and status. Exceptions are visible with their business impact, and resolution always cites the system that confirmed it.
            </p>

            {/* 6 Grid Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              {operationsCards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-[12px] bg-white border border-[#E2E8F0] hover:border-[#1F7A6C]/40 transition-colors"
                  >
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <div className="w-7 h-7 rounded-[6px] bg-[#1F7A6C]/10 flex items-center justify-center shrink-0">
                        <Icon className="w-3.5 h-3.5 text-[#1F7A6C]" />
                      </div>
                      <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[14px] sm:text-[15px] text-[#0F172A]">
                        {card.title}
                      </h3>
                    </div>
                    <p className="font-['Poppins',sans-serif] text-[12.5px] sm:text-[13px] text-[#334155] leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <a
              href="#trust-identity"
              className="inline-flex items-center gap-2 font-['Poppins',sans-serif] text-[14px] font-semibold text-[#1F7A6C] hover:text-[#247780] transition-colors"
            >
              <span>Review operations</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Right Column: Customer Service Agent Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            custom={0.2}
            className="w-full lg:flex-1 max-w-[520px] lg:max-w-none"
          >
            <div className="relative w-full h-[360px] sm:h-[480px] rounded-[20px] overflow-hidden border border-[#E2E8F0] shadow-sm">
              <Image
                src="/customer-and-local-commerce/operations-agent.png"
                alt="Customer service agent smiling at desk"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 560px"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
