"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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

export default function SixDomainsSection() {
  const domains = [
    {
      title: "People & HR operations",
      description:
        "Trusted workforce record, lifecycle events and approved downstream handoffs.",
      image: "/business-operations/domain-people-ops.png",
      alt: "Professional standing between stone columns",
      tags: ["Join · change · leave", "Effective dates", "Accountable review"],
      platform: "Platform evidence: Zoiko HR",
      linkText: "Explore HR / Payroll",
      href: "/solution-zoiko-hr-payroll-revenue-operations",
    },
    {
      title: "Payroll & revenue operations",
      description:
        "Cycle readiness, inputs, exceptions, approvals and release for payroll and billing.",
      image: "/business-operations/domain-payroll-revenue.png",
      alt: "Vintage typewriter on a desk by a window",
      tags: ["Cycle readiness", "Reconciliation", "Release / handoff"],
      platform: "Platform evidence: Zoiko Payroll · Zoiko Billing",
      linkText: "Explore HR, Payroll & Revenue Operations",
      href: "/solution-zoiko-hr-payroll-revenue-operations",
    },
    {
      title: "Workforce assurance",
      description:
        "Verified work signals and policy alignment, with privacy-respecting administration.",
      image: "/business-operations/domain-workforce-ops.png",
      alt: "Smiling professional in a stone hall",
      tags: ["Workforce context", "Policy alignment", "Least privilege"],
      platform: "Platform evidence: ZoikoTime",
      linkText: "Explore Workforce & Productivity",
      href: "/workforce-productivity",
    },
    {
      title: "Communications & coordination",
      description:
        "Meetings, messaging and calling connected to decisions, action items and handoffs.",
      image: "/business-operations/domain-facilities-logistics.png",
      alt: "Studio microphone",
      tags: ["Decisions to actions", "Guest policies", "No employee scoring"],
      platform: "Platform evidence: Zoiko Sema",
      linkText: "Explore Communications & Collaboration",
      href: "/solution-zoiko-communications-collaboration",
    },
    {
      title: "Marketing operations",
      description:
        "Governed agentic operations around repeatable marketing work, with human approval for outbound actions.",
      image: "/business-operations/domain-operational-comms.png",
      alt: "Hands holding a smartphone",
      tags: [
        "Repeatable workflows",
        "Human approval",
        "Execution evidence",
      ],
      platform: "Platform evidence: ZoikoVertex",
      linkText: "Explore Marketing Operations",
      href: "/solution-zoiko-ai-agentic-automation",
    },
    {
      title: "Compliance operations",
      description:
        "Obligations linked to scope, owner, controls and evidence that stays current.",
      image: "/business-operations/domain-regulatory-ops.png",
      alt: "Closed notebook with a red bookmark",
      tags: ["Obligations", "Controls", "Current · stale · missing"],
      platform: "Platform evidence: ZoikoAssure",
      linkText: "Explore Regulatory & Compliance",
      href: "/solution-zoiko-regulatory-compliance",
    },
  ];

  return (
    <section
      id="operating-domains"
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
          className="max-w-[760px] mb-12"
        >
          <span className="block font-['Poppins',sans-serif] text-[11px] font-semibold tracking-[0.16em] text-[#247780] uppercase mb-2">
            OPERATING DOMAINS
          </span>
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-[28px] sm:text-[34px] lg:text-[40px] font-bold text-[#0F172A] leading-tight mb-3">
            Six domains, one operating architecture
          </h2>
          <p className="font-['Poppins',sans-serif] text-[15px] sm:text-[16px] text-[#64748B] font-normal leading-relaxed">
            Each domain keeps its specialist platform and deeper solution page.
            This hub shows how they connect.
          </p>
        </motion.div>

        {/* 6 Cards Grid (3x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {domains.map((card, idx) => (
            <motion.article
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0.1 + idx * 0.05}
              className="group flex flex-col rounded-[14px] border border-[#E2E8F0] overflow-hidden bg-white hover:border-[#247780]/40 hover:shadow-lg transition-all"
            >
              {/* Image banner */}
              <div className="relative w-full h-[200px] overflow-hidden bg-slate-100">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[19px] sm:text-[20px] font-bold text-[#0F172A] mb-2.5 leading-snug">
                    {card.title}
                  </h3>

                  <p className="font-['Poppins',sans-serif] text-[14px] text-[#334155] leading-relaxed mb-5">
                    {card.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {card.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-[#E7EFF2] text-[#195B62]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E2E8F0] flex flex-col gap-2.5">
                  <span className="font-['Poppins',sans-serif] text-[12px] text-[#64748B]">
                    {card.platform}
                  </span>

                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-1.5 font-['Poppins',sans-serif] text-[13px] font-semibold text-[#247780] hover:text-[#195B62] transition-colors"
                  >
                    <span>{card.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
