"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Plus, Minus } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
      delay,
    },
  }),
};

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is Business Operations at Zoiko Tech?",
      a: "A broad solution family spanning payroll, billing, HR, workforce assurance, communications, marketing operations and compliance.",
    },
    {
      q: "How is this different from HR, Payroll & Revenue Operations?",
      a: "HR, Payroll & Revenue Operations focuses specifically on people and compensation lifecycles. Business Operations is the wider operating system connecting those domains with communications, marketing, facilities and compliance.",
    },
    {
      q: "Which platforms support Business Operations?",
      a: "ZoikoSuite, Zoiko HR, Zoiko Payroll, Zoiko Billing, ZoikoTime, Zoiko Sema, ZoikoVertex and ZoikoAssure.",
    },
    {
      q: "Does Zoiko replace our ERP, HRIS, payroll or billing stack?",
      a: "No. Zoiko connects through approved APIs, events, and interfaces to coexist with your existing systems without disruptive rip-and-replace.",
    },
    {
      q: "How are cross-functional exceptions handled?",
      a: "Through a single, unified exception and approval queue with clear ownership, SLAs, escalation paths, and audit evidence.",
    },
    {
      q: "How does compliance fit?",
      a: "Compliance is integrated directly into daily recurring workflows through ZoikoAssure, ensuring evidence and audit trails are continuously maintained.",
    },
    {
      q: "How do we start?",
      a: "Start with one high-friction cross-functional workflow, map the handoffs, establish authoritative sources, and pilot before broader rollout.",
    },
  ];

  const nextRoutes = [
    {
      context: "Cross-system fragmentation",
      title: "Modernization & Integration",
      href: "/modernization-integration",
    },
    {
      context: "AI / automation need",
      title: "AI & Intelligent Automation",
      href: "/ai-and-intelligent-automation",
    },
    {
      context: "Identity / security need",
      title: "Identity & Access",
      href: "/solution-zoiko-identity-access",
    },
    {
      context: "People, payroll, billing",
      title: "HR, Payroll & Revenue Operations",
      href: "/solution-zoiko-hr-payroll-revenue-operations",
    },
    {
      context: "Industry-specific need",
      title: "Relevant industry destination",
      href: "/fintech",
    },
  ];

  return (
    <section id="faq" className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[80px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: FAQ Accordion */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0.1}
            className="lg:col-span-7 flex flex-col"
          >
            <span className="font-['Poppins',sans-serif] text-[11px] font-semibold tracking-[0.16em] text-[#247780] uppercase mb-2">
              ANSWER-FIRST BUYER QUESTIONS
            </span>
            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-[28px] sm:text-[34px] lg:text-[40px] font-bold text-[#0F172A] leading-tight mb-8">
              Business Operations at a glance
            </h2>

            <div className="flex flex-col divide-y divide-[#E2E8F0] border-t border-b border-[#E2E8F0]">
              {faqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div key={idx} className="py-4 sm:py-5">
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between gap-4 text-left group cursor-pointer"
                    >
                      <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] sm:text-[16px] font-bold text-[#0F172A] group-hover:text-[#247780] transition-colors">
                        {faq.q}
                      </span>
                      <span className="w-6 h-6 rounded-full flex items-center justify-center text-[#247780] shrink-0 font-bold">
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="font-['Poppins',sans-serif] text-[14px] text-[#334155] leading-relaxed pt-3 pr-6 font-normal">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Where to Go Next Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0.2}
            className="lg:col-span-5 flex flex-col rounded-[20px] overflow-hidden border border-[#E2E8F0] shadow-md"
          >
            {/* Top Image */}
            <div className="relative w-full h-[220px] bg-slate-100">
              <Image
                src="/business-operations/glance-architecture.png"
                alt="Curved metal architecture"
                fill
                className="object-cover"
              />
            </div>

            {/* Bottom Dark Panel */}
            <div
              className="p-7 sm:p-8 flex flex-col gap-5 text-white"
              style={{
                background:
                  "linear-gradient(219deg, rgba(6, 85, 72, 0.39) 48%, rgba(0, 38, 42, 0.39) 77%), #001315",
              }}
            >
              <div>
                <span className="block font-['Poppins',sans-serif] text-[11px] font-semibold tracking-[0.16em] text-white uppercase mb-2">
                  WHERE TO GO NEXT
                </span>
                <p className="font-['Poppins',sans-serif] text-[13px] text-[#E2E8F0] leading-relaxed">
                  Routes follow your starting need, never during sensitive HR,
                  payroll or approval work.
                </p>
              </div>

              <div className="flex flex-col divide-y divide-white/10 pt-1">
                {nextRoutes.map((route, idx) => (
                  <div key={idx} className="py-3 flex flex-col gap-1">
                    <span className="font-['Poppins',sans-serif] text-[11px] text-[#CBD5E1]">
                      {route.context}
                    </span>
                    <Link
                      href={route.href}
                      className="inline-flex items-center gap-1.5 font-['Poppins',sans-serif] text-[13px] font-semibold text-[#4DDCAD] hover:text-white transition-colors"
                    >
                      <span>{route.title}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
