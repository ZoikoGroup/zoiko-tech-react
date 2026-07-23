"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Wrench,
  Brain,
  Scale,
  Globe,
  Building2,
  ShieldCheck,
} from "lucide-react";

const architectureFeatures = [
  {
    icon: Wrench,
    title: "Agentic Automation",
    description:
      "Advanced autonomous agents that handle complex enterprise workflows with human oversight and approval mechanisms for critical decisions.",
  },
  {
    icon: Brain,
    title: "Workflow Intelligence",
    description:
      "AI-powered process optimization, bottleneck identification, and intelligent routing across enterprise systems and departments.",
  },
  {
    icon: Scale,
    title: "Governed Autonomy",
    description:
      "Compliance-first automation ensuring all AI decisions align with corporate policies and regulatory requirements across jurisdictions.",
  },
  {
    icon: Globe,
    title: "Multi-Jurisdiction Operations",
    description:
      "Comprehensive compliance across U.S., U.K., and EU jurisdictions with automated regulatory adaptation and reporting.",
  },
  {
    icon: Building2,
    title: "Enterprise Integration",
    description:
      "API-first architecture with SSO, private hosting, and seamless integration with existing enterprise systems and workflows.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Compliance",
    description:
      "SOC 2 Type II, ISO 27001, and multi-jurisdiction data protection with enterprise-grade security and audit capabilities.",
  },
];

// Motion animation variants with typed custom easing
const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (customDelay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.21, 0.47, 0.32, 0.98] as const,
      delay: customDelay,
    },
  }),
};

export default function EnterpriseAIArchitecture() {
  return (
    <section className="w-full bg-white text-[#0f1124] px-6 md:px-12 lg:px-20 py-20 md:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <motion.div
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-center mb-14 md:mb-16 max-w-3xl"
        >
          <h2 className="text-3xl sm:text-4xl md:text-[38px] font-bold text-[#1e293b] tracking-tight mb-4 leading-tight">
            Enterprise AI Architecture
          </h2>
          <p className="text-[#64748b] text-[14.5px] sm:text-[15.5px] font-normal leading-relaxed">
            Comprehensive AI backbone with technical support partnership from
            Zoiko Web Services
          </p>
        </motion.div>

        {/* 6 Cards Grid Layout (3x2 Matrix) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          {architectureFeatures.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={idx}
                custom={0.1 * (idx + 1)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUpVariant}
                className="bg-white rounded-[10px] p-7 sm:p-8 shadow-[0_4px_12px_0_#0000001A] border border-slate-200/80 flex flex-col items-start hover:shadow-md transition-all duration-300 min-h-[220px]"
              >
                {/* Circular Icon Badge */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4FD1C7] to-[#2C5F5D] flex items-center justify-center text-white mb-6 shadow-xs shrink-0">
                  <IconComponent className="w-5 h-5 stroke-[2]" />
                </div>

                {/* Card Title */}
                <h3 className="text-[20px] font-bold text-[#0f1124] mb-3 leading-snug">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="text-[#64748b] text-[14px] leading-relaxed font-normal">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
