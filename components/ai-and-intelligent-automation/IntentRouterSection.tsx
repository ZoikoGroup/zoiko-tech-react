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

export default function IntentRouterSection() {
  const routes = [
    {
      title: "Use enterprise AI",
      description: "Bring intelligence into search, analysis, knowledge and business workflows.",
      image: "/ai-and-intelligent-automation/intent-enterprise-ai.png",
      href: "#patterns",
    },
    {
      title: "Automate repeatable work",
      description: "Use governed agents to prepare or execute bounded workflow actions.",
      image: "/ai-and-intelligent-automation/intent-automate-work.png",
      href: "#authority-levels",
    },
    {
      title: "Apply domain intelligence",
      description: "Use specialized AI around real operating domains.",
      image: "/ai-and-intelligent-automation/intent-domain-intelligence.png",
      href: "#patterns",
    },
    {
      title: "Improve operations",
      description: "Detect, investigate, prepare, coordinate and escalate work with AI support.",
      image: "/ai-and-intelligent-automation/intent-improve-operations.png",
      href: "#trust-governance",
    },
    {
      title: "Govern AI systems",
      description: "Control use, evidence, approvals, agent authority and ongoing review.",
      image: "/ai-and-intelligent-automation/intent-govern-ai.png",
      href: "#trust-governance",
    },
    {
      title: "Build with AI",
      description: "Use APIs, model interfaces, tools and developer services.",
      image: "/ai-and-intelligent-automation/intent-build-with-ai.png",
      href: "#developer-platform",
    },
  ];

  return (
    <section id="intent-router" className="w-full bg-white py-20 lg:py-[88px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[80px]">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          custom={0.1}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14"
        >
          <div>
            <span className="font-['Poppins',sans-serif] text-[#247780] text-[11px] font-semibold tracking-[0.16em] uppercase block mb-3">
              AI intent router
            </span>
            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.17] tracking-[-0.03em] text-[#0F172A]">
              Start with the work, not the model
            </h2>
          </div>
          <p className="font-['Poppins',sans-serif] text-[15px] sm:text-[16px] leading-[26px] text-[#64748B] max-w-[420px]">
            Choose the outcome you need. Each path routes to the right pattern, platform evidence or specialist team.
          </p>
        </motion.div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {routes.map((route, index) => (
            <motion.a
              key={index}
              href={route.href}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              custom={0.1 + index * 0.06}
              className="group relative h-[300px] rounded-[16px] overflow-hidden flex flex-col justify-end p-6 border border-slate-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Background Image */}
              <Image
                src={route.image}
                alt={route.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Dark Gradient Overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0, 19, 21, 0.05) 15%, rgba(0, 19, 21, 0.92) 100%)",
                }}
              />

              {/* Content */}
              <div className="relative z-10">
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[21px] font-bold text-white mb-1.5 tracking-[-0.01em] transition-colors group-hover:text-[#4DDCAD]">
                  {route.title}
                </h3>
                <p className="font-['Poppins',sans-serif] text-[14px] leading-[21px] text-[#E2E8F0] mb-3">
                  {route.description}
                </p>
                <div className="flex items-center gap-1.5 text-[#4DDCAD] font-['Poppins',sans-serif] text-[14px] font-semibold">
                  <span>Choose path</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
