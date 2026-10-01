"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

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

export default function ImplementationSection() {
  const steps = [
    {
      step: 1,
      title: "Map operating\ndomains",
      approved: "Scope approved",
    },
    {
      step: 2,
      title: "Map handoffs",
      approved: "Handoff map approved",
    },
    {
      step: 3,
      title: "Define controls",
      approved: "Control design approved",
    },
    {
      step: 4,
      title: "Select specialist\npaths",
      approved: "Architecture approved",
    },
    {
      step: 5,
      title: "Pilot",
      approved: "Acceptance criteria met",
    },
    {
      step: 6,
      title: "Roll out",
      approved: "Readiness confirmed",
    },
    {
      step: 7,
      title: "Review & expand",
      approved: "Periodic review completed",
    },
  ];

  const caseStudies = [
    {
      title: "Shared services",
      image: "/business-operations/start-onboarding-3af0a4.png",
      alt: "Shared services operations",
    },
    {
      title: "Payroll & billing",
      image: "/business-operations/start-contract-cash-2c71c8.png",
      alt: "Payroll and billing operations",
    },
    {
      title: "Workforce &\ncommunications",
      image: "/business-operations/start-entity-transfers-c95904.png",
      alt: "Workforce and communications operations",
    },
    {
      title: "Marketing operations",
      image: "/business-operations/start-access-offboarding-12e84b.png",
      alt: "Marketing operations",
    },
    {
      title: "Compliance operations",
      image: "/business-operations/start-compliance-cycles-2c7e40.png",
      alt: "Compliance operations",
    },
  ];

  return (
    <section
      id="implementation"
      className="w-full bg-[#E9F9F8] py-12 sm:py-16 lg:py-[88px]"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[80px]">
        {/* Top Part: Implementation Steps */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0.1}
          className="max-w-[860px] mb-8"
        >
          <span className="block font-['Poppins',sans-serif] text-[11px] font-semibold tracking-[0.16em] text-[#247780] uppercase mb-2">
            IMPLEMENTATION & ADOPTION
          </span>
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-[#0F172A] leading-[1.18] sm:leading-[1.15] tracking-[-0.02em]">
            Improve one cross-functional <br className="hidden sm:inline" />
            workflow first
          </h2>
        </motion.div>

        {/* 7 Horizontal Connected Steps (Responsive: 1 col on mobile, 2 col on tablet, 7 col on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-y-6 sm:gap-y-8 gap-x-4 sm:gap-x-3 mb-8">
          {steps.map((st, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0.1 + idx * 0.04}
              className="flex flex-col justify-start"
            >
              {/* Step Number Circle + Connecting Line */}
              <div className="flex items-center w-full mb-3.5">
                <div className="w-10 h-10 rounded-full bg-[#1F7A6C] flex items-center justify-center font-['Plus_Jakarta_Sans',sans-serif] text-[15px] font-bold text-white shrink-0 shadow-xs">
                  {st.step}
                </div>
                {idx < steps.length - 1 ? (
                  <div className="flex-1 h-[2px] bg-[#9FDCD7] ml-2" />
                ) : (
                  <div className="hidden lg:block flex-1" />
                )}
              </div>

              {/* Title */}
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] font-bold text-[#0F172A] leading-[20px] mb-2 min-h-[40px] whitespace-pre-line">
                {st.title}
              </h3>

              {/* Milestone with Flag Icon */}
              <div className="flex items-start gap-1.5 text-[#195B62]">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3.5 h-3.5 text-[#195B62] shrink-0 mt-0.5"
                >
                  <path
                    d="M3 14V2"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M3 3H12L10 6.5L12 10H3"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="font-['Poppins',sans-serif] text-[12px] font-medium leading-[16px] text-[#195B62]">
                  {st.approved}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Discuss Rollout Link */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0.4}
          className="mb-14"
        >
          <Link
            href="#contact-sales"
            className="group inline-flex items-center gap-1.5 font-['Poppins',sans-serif] text-[14px] font-semibold text-[#247780] hover:text-[#195B62] transition-colors"
          >
            <span>Discuss rollout</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-[#247780] shrink-0 transition-transform group-hover:translate-x-1"
            >
              <path
                d="M3.3335 8H12.6668"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.6665 4L12.6665 8L8.6665 12"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </motion.div>

        {/* Subtle Horizontal Divider */}
        <div className="w-full h-[1px] bg-[#C6E6E4] mb-12 sm:mb-14" />

        {/* Bottom Part: Technology in Practice */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0.1}
          className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-3 lg:gap-8 mb-8"
        >
          <div>
            <span className="block font-['Poppins',sans-serif] text-[11px] font-semibold tracking-[0.16em] text-[#247780] uppercase mb-2">
              TECHNOLOGY IN PRACTICE
            </span>
            <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[26px] sm:text-[28px] font-bold text-[#0F172A] leading-tight">
              Evidence first, and only approved evidence
            </h3>
          </div>

          <p className="font-['Poppins',sans-serif] text-[13px] text-[#334155] max-w-[440px] leading-relaxed">
            Case studies are in review. No efficiency, cost, cycle-time, error-rate,
            compliance or revenue metrics are shown until approved.
          </p>
        </motion.div>

        {/* 5 Dark Case Study Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5">
          {caseStudies.map((cs, idx) => (
            <motion.article
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0.1 + idx * 0.05}
              className="group relative h-[200px] rounded-[14px] overflow-hidden shadow-sm flex flex-col justify-between p-4"
            >
              {/* Background Image */}
              <Image
                src={cs.image}
                alt={cs.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Figma Gradient Overlay: linear-gradient(180deg, rgba(0, 19, 21, 0.25) 0%, rgba(0, 19, 21, 0.9) 100%) */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0, 19, 21, 0.25) 0%, rgba(0, 19, 21, 0.9) 100%)",
                }}
              />

              {/* Top Tag: Evidence Pending with amber dot */}
              <div className="relative z-10">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#FEF3C7] text-[#92400E]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#92400E] shrink-0" />
                  Evidence pending
                </span>
              </div>

              {/* Bottom Content: Turquoise Tag + Bold Title */}
              <div className="relative z-10 flex flex-col">
                <span className="font-['Poppins',sans-serif] text-[10px] font-semibold tracking-wider text-[#4DDCAD] uppercase mb-1">
                  CASE STUDY · IN REVIEW
                </span>
                <h4 className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] sm:text-[16px] font-bold text-white leading-snug whitespace-pre-line">
                  {cs.title}
                </h4>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
