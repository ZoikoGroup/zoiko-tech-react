"use client";

import React from "react";
import { motion } from "framer-motion";

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

const layers = [
  {
    layer: "L7 Downstream systems",
    desc: "HR, payroll, communications and other approved platforms.",
    question: "Where does trusted context flow?",
    isFoundation: false,
  },
  {
    layer: "L6 Evidence & review",
    desc: "Provenance, verification, approvals, changes and audit visibility.",
    question: "Can we explain what happened?",
    isFoundation: false,
  },
  {
    layer: "L5 Coordination & workflow",
    desc: "Exceptions, approvals, handoffs, reminders, team coordination, follow-up.",
    question: "How does context drive work?",
    isFoundation: false,
  },
  {
    layer: "L4 Policy & privacy",
    desc: "Purpose limitation, data scope, retention, sensitive contexts, jurisdiction, team policy.",
    question: "What is allowed?",
    isFoundation: false,
  },
  {
    layer: "L3 Identity & role",
    desc: "Employee, worker, manager, admin and reviewer roles; delegated authority.",
    question: "Who can see or act?",
    isFoundation: false,
  },
  {
    layer: "L2 Workforce signals",
    desc: "Time, attendance / availability where supported, verified work signals, HR reference, workflow communication events.",
    question: "What signals exist?",
    isFoundation: true,
  },
  {
    layer: "L1 Work / business context",
    desc: "Teams, roles, schedules, projects, workstreams, locations where approved.",
    question: "What work context matters?",
    isFoundation: true,
  },
];

export default function ContextArchitectureSection() {
  return (
    <section id="architecture" className="w-full bg-white py-16 lg:py-24">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[130px]">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          className="mb-10"
        >
          <h2 className="text-[28px] sm:text-[32px] lg:text-[35.2px] font-bold leading-[1.15] text-[#0A1416] mb-3">
            Workforce context architecture
          </h2>
          <p className="text-[16px] leading-[25.6px] text-[#4D6468] max-w-[820px]">
            Workforce context as governed operational data flowing through explicit
            purpose and access boundaries. Read from the bottom layer up.
          </p>
        </motion.div>

        {/* 7 Layers List */}
        <div className="flex flex-col gap-5">
          {layers.map((item, index) => (
            <motion.div
              key={item.layer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              custom={index * 0.06}
              className={`flex flex-col md:flex-row md:items-center justify-between gap-4 px-[18px] py-[14px] rounded-[12px] shadow-sm transition-transform duration-200 hover:-translate-y-0.5 ${
                item.isFoundation
                  ? "text-white"
                  : "bg-[#F3F9FA] border border-[#D5E3E5] text-[#0A1416]"
              }`}
              style={
                item.isFoundation
                  ? {
                      background:
                        "linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(36, 119, 128, 1) 100%)",
                    }
                  : undefined
              }
            >
              {/* Layer Title */}
              <div className="w-full md:w-[240px] shrink-0">
                <span className="text-[15.2px] font-bold leading-[24.3px]">
                  {item.layer}
                </span>
              </div>

              {/* Description */}
              <div className="flex-1">
                <p
                  className={`text-[15px] sm:text-[16px] leading-[25.6px] ${
                    item.isFoundation ? "text-white/90" : "text-[#4D6468]"
                  }`}
                >
                  {item.desc}
                </p>
              </div>

              {/* Guiding Question */}
              <div className="w-full md:w-[260px] text-left md:text-right shrink-0">
                <span
                  className={`text-[15px] sm:text-[16px] font-semibold leading-[25.6px] ${
                    item.isFoundation ? "text-white" : "text-[#247780]"
                  }`}
                >
                  {item.question}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
