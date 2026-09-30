"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FileCheck,
  RefreshCw,
  Search,
  Radio,
  Lock,
  Users,
  Server,
} from "lucide-react";

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

const architectureLayers = [
  {
    layerNumber: 7,
    title: "Evidence & governance",
    question: "Can we prove the control state?",
    description:
      "Control owner, evidence, exception, review date, policy / standard mapping and audit history.",
    icon: FileCheck,
  },
  {
    layerNumber: 6,
    title: "Resilience & continuity",
    question: "How does the business keep operating?",
    description:
      "Dependencies, degraded operation, recovery priorities, alternate paths, business continuity.",
    icon: RefreshCw,
  },
  {
    layerNumber: 5,
    title: "Investigation & response",
    question: "How is an incident handled?",
    description:
      "Triage, evidence, containment, remediation, recovery and closure.",
    icon: Search,
  },
  {
    layerNumber: 4,
    title: "Signals & observability",
    question: "What tells us something changed?",
    description:
      "Security events, configuration state, identity events, service health, operational signals where supported.",
    icon: Radio,
  },
  {
    layerNumber: 3,
    title: "Preventive controls",
    question: "How is exposure reduced?",
    description:
      "Secure engineering, configuration, least privilege, hardening, data and secret protection, change controls as approved.",
    icon: Lock,
  },
  {
    layerNumber: 2,
    title: "Identities & authority",
    question: "Who or what can act?",
    description:
      "Users, admins, services, agents, integrations, roles, entitlements, delegated authority.",
    icon: Users,
  },
  {
    layerNumber: 1,
    title: "Critical services & assets",
    question: "What must be protected?",
    description:
      "Applications, platforms, infrastructure, integrations, data stores and external dependencies, at a conceptual level.",
    icon: Server,
  },
];

export default function SecurityArchitectureSection() {
  return (
    <section id="architecture" className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[130px]">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          custom={0.1}
          className="mb-10 sm:mb-12"
        >
          <h2 className="text-[26px] sm:text-[32px] lg:text-[35.2px] font-bold text-[#0B282B] leading-[1.2] tracking-[-0.02em] mb-3">
            Security operating architecture
          </h2>
          <p className="text-[15px] sm:text-[16px] text-[#4D6468] leading-[26px]">
            Security as a system of governed controls, not a list of tools. Seven
            layers, each answering one buyer question.
          </p>
        </motion.div>

        {/* 7 Vertical Architecture Stack Layers */}
        <div className="flex flex-col gap-4">
          {architectureLayers.map((layer, idx) => {
            const Icon = layer.icon;
            return (
              <motion.div
                key={layer.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUpVariant}
                custom={0.08 + idx * 0.05}
                className="group bg-[#F3F9FA] border border-[#D5E3E5] hover:border-[#7FD0D9] rounded-[14px] p-5 sm:p-6 transition-all duration-200 hover:shadow-sm"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-3">
                  {/* Left: Icon & Title */}
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-[10px] bg-[#DCECEE] flex items-center justify-center text-[#247780] shrink-0 group-hover:bg-[#7FD0D9]/20 transition-colors">
                      <Icon className="w-5 h-5 text-[#247780]" />
                    </div>
                    <h3 className="text-[17px] sm:text-[18px] font-bold text-[#0B282B] tracking-[-0.01em]">
                      {layer.title}
                    </h3>
                  </div>

                  {/* Right: Question Badge */}
                  <span className="self-start md:self-auto inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#DCECEE] text-[#14484E] text-[13px] sm:text-[13.5px] font-semibold">
                    {layer.question}
                  </span>
                </div>

                {/* Description */}
                <p className="text-[14.8px] sm:text-[15.2px] text-[#4D6468] leading-[24px] md:pl-[54px]">
                  {layer.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
