"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Layers, KeyRound, Cpu, Eye, FileCheck } from "lucide-react";

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

export default function SpecialistPlatformsSection() {
  const platforms = [
    {
      name: "ZoikoSuite",
      desc: "Governed business operations.",
      domain: "Broad operations",
      href: "/solutions-zoikosuite",
    },
    {
      name: "Zoiko HR",
      desc: "Global human resources and workforce operations.",
      domain: "People / HR",
      href: "/solution-zoiko-hr-payroll-revenue-operations",
    },
    {
      name: "Zoiko Payroll",
      desc: "Payroll operations, controls and multinational workflows.",
      domain: "Payroll",
      href: "/solutions-zoikopay",
    },
    {
      name: "Zoiko Billing",
      desc: "Billing, invoicing and revenue operations.",
      domain: "Billing / revenue",
      href: "/solutions-zoikopay",
    },
    {
      name: "ZoikoTime",
      desc: "Workforce assurance and verification.",
      domain: "Workforce",
      href: "/solutions-zoikotime",
    },
    {
      name: "Zoiko Sema",
      desc: "Governed messaging, meetings, calls and workflows.",
      domain: "Communications",
      href: "/solution-zoiko-communications-collaboration",
    },
    {
      name: "ZoikoVertex",
      desc: "Governed agentic marketing operating system.",
      domain: "Marketing ops",
      href: "/solution-zoiko-ai-agentic-automation",
    },
    {
      name: "ZoikoAssure",
      desc: "Regulatory intelligence, compliance and audit automation.",
      domain: "Compliance",
      href: "/zoiko-assure",
    },
  ];

  const integrationItems = [
    {
      title: "Identity & access",
      desc: "Users, admins, services, roles, delegated authority",
      icon: KeyRound,
    },
    {
      title: "APIs & integrations",
      desc: "Approved APIs, SDKs, events, webhooks",
      icon: Cpu,
    },
    {
      title: "Data & provenance",
      desc: "Source, effective period, verification state",
      icon: Layers,
    },
    {
      title: "Workflow & approvals",
      desc: "Cross-system review and exception handoffs",
      icon: Shield,
    },
    {
      title: "Observability",
      desc: "Integration and workflow health",
      icon: Eye,
    },
    {
      title: "Governance & evidence",
      desc: "Audit, retention, policy controls",
      icon: FileCheck,
    },
  ];

  return (
    <section
      id="specialist-platforms"
      className="w-full bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[80px]">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0.1}
          className="max-w-[760px] mb-10"
        >
          <span className="block font-['Poppins',sans-serif] text-[11px] font-semibold tracking-[0.16em] text-[#247780] uppercase mb-2">
            PLATFORM EVIDENCE LAYER
          </span>
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-[28px] sm:text-[34px] lg:text-[40px] font-bold text-[#0F172A] leading-tight mb-3">
            Specialist platforms, connected
          </h2>
          <p className="font-['Poppins',sans-serif] text-[15px] sm:text-[16px] text-[#64748B] font-normal leading-relaxed">
            No single product owns every lane. Maturity comes from the platform
            registry and stays hidden until confirmed.
          </p>
        </motion.div>

        {/* 8 Platform Cards (4x2 grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-14">
          {platforms.map((plat, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0.1 + idx * 0.04}
              className="flex flex-col justify-between p-5 rounded-[12px] bg-white border border-[#E2E8F0] hover:border-[#247780]/40 hover:shadow-md transition-all group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[17px] sm:text-[18px] font-extrabold text-[#104668] group-hover:text-[#247780] transition-colors">
                    {plat.name}
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#E2E8F0] text-[#334155]">
                    Production
                  </span>
                </div>

                <p className="font-['Poppins',sans-serif] text-[13px] text-[#334155] leading-relaxed mb-5 min-h-[40px]">
                  {plat.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-[#E2E8F0] flex items-center justify-between">
                <span className="font-['Poppins',sans-serif] text-[11px] font-semibold text-[#195B62] bg-[#E9F9F8] px-2 py-0.5 rounded-full">
                  {plat.domain}
                </span>

                <Link
                  href={plat.href}
                  className="inline-flex items-center gap-1 font-['Poppins',sans-serif] text-[12px] font-semibold text-[#247780] hover:underline"
                >
                  <span>Explore</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Wide Coexistence Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0.3}
          className="w-full rounded-[20px] overflow-hidden bg-[#001315] grid grid-cols-1 lg:grid-cols-12 shadow-xl"
        >
          {/* Left Column: Image */}
          <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-[500px]">
            <Image
              src="/business-operations/specialist-platforms-cyclists.png"
              alt="Cyclists passing a circular architectural opening by the water"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#001315]/80 via-transparent to-transparent lg:hidden" />
          </div>

          {/* Right Column: Content */}
          <div
            className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between"
            style={{
              background:
                "linear-gradient(262deg, rgba(6, 85, 72, 0.45) 78%, rgba(0, 38, 42, 0.45) 100%)",
            }}
          >
            <div>
              <span className="block font-['Poppins',sans-serif] text-[11px] font-semibold tracking-[0.16em] text-white uppercase mb-2">
                INTEGRATION & SHARED FOUNDATIONS
              </span>
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[24px] sm:text-[28px] font-bold text-white mb-2 leading-tight">
                Coexist with the systems you already run
              </h3>
              <p className="font-['Poppins',sans-serif] text-[14px] text-[#E2E8F0] mb-8 font-normal leading-relaxed max-w-[620px]">
                Connect through approved interfaces in current documentation. No
                blanket replacement of your ERP, HRIS, payroll or billing stack.
              </p>

              {/* 6 Integration Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-8">
                {integrationItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <item.icon className="w-4 h-4 text-[#4DDCAD] shrink-0 mt-0.5" />
                    <div className="flex flex-col">
                      <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] font-bold text-white">
                        {item.title}
                      </span>
                      <span className="font-['Poppins',sans-serif] text-[12px] text-[#CBD5E1] leading-tight">
                        {item.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Link
                href="/developer-portal"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-[6px] bg-[#247780] hover:bg-[#1f6870] text-white font-['Poppins',sans-serif] text-[14px] font-semibold transition-colors"
              >
                <span>Explore Developer Platform</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
