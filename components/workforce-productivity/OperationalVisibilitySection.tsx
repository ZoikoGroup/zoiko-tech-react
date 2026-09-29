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

const visibilityRows = [
  {
    level: "Organization",
    purpose: "Executive / operational overview",
    content: "Aggregate coverage, exceptions, policy state and trends where supported.",
  },
  {
    level: "Business unit / function",
    purpose: "Operational planning and review",
    content: "Team and workflow aggregates, open exceptions, policy alignment, ownership.",
  },
  {
    level: "Team",
    purpose: "Day-to-day coordination",
    content: "Schedules and availability context where approved, handoffs, approvals, exceptions, communication context.",
  },
  {
    level: "Workflow / case",
    purpose: "Resolve a specific operational issue",
    content: "Relevant people and roles, event history, source evidence, approval and outcome.",
  },
  {
    level: "Individual",
    purpose: "A specific legitimate operational or HR process only",
    content: "Minimum necessary detail, with explicit role authorization and purpose.",
  },
];

const controls = [
  "Role-based access and least privilege.",
  "Purpose-based display: only what the task needs.",
  "Sensitive team and workspace exclusions where appropriate.",
  "Region and jurisdiction constraints where required.",
  "Retention and review periods for workforce-derived data.",
  "Clear provenance and verification state for material signals.",
];

export default function OperationalVisibilitySection() {
  return (
    <section
      id="operational-visibility"
      className="w-full text-white py-16 lg:py-24"
      style={{
        background:
          "linear-gradient(145deg, rgba(0, 0, 0, 1) 0%, rgba(28, 92, 98, 1) 100%)",
      }}
    >
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[130px]">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          className="mb-10"
        >
          <h2 className="text-[28px] sm:text-[32px] lg:text-[35.2px] font-bold leading-[1.15] text-white mb-3">
            Operational visibility model
          </h2>
          <p className="text-[16px] leading-[25.6px] text-[#DCECEE] max-w-[820px]">
            Visibility depends on role and purpose. A workforce solution can be
            useful without exposing every person-level signal to every manager.
          </p>
        </motion.div>

        {/* Visibility Model Table */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          custom={0.1}
          className="w-full overflow-x-auto rounded-[12px] border border-[#7FD0D9]/35 bg-white/[0.03] backdrop-blur-sm mb-12 shadow-xl"
        >
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-black/40 border-b border-[#D5E3E5]/30">
                <th className="py-3 px-4 text-[14.7px] font-semibold text-white w-[22%]">
                  View level
                </th>
                <th className="py-3 px-4 text-[14.7px] font-semibold text-white w-[30%]">
                  Primary purpose
                </th>
                <th className="py-3 px-4 text-[14.7px] font-semibold text-white w-[48%]">
                  Default content
                </th>
              </tr>
            </thead>
            <tbody>
              {visibilityRows.map((row, idx) => (
                <tr
                  key={row.level}
                  className={`border-b border-[#7FD0D9]/20 hover:bg-white/[0.04] transition-colors ${
                    idx === visibilityRows.length - 1 ? "border-b-0" : ""
                  }`}
                >
                  <td className="py-3.5 px-4 text-[14.7px] font-semibold text-[#DCECEE] align-top">
                    {row.level}
                  </td>
                  <td className="py-3.5 px-4 text-[14.7px] font-normal text-[#DCECEE] align-top">
                    {row.purpose}
                  </td>
                  <td className="py-3.5 px-4 text-[14.7px] font-normal text-[#DCECEE] align-top">
                    {row.content}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Subheading: Visibility controls */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          custom={0.2}
          className="mb-6"
        >
          <h3 className="text-[20px] sm:text-[22px] font-bold text-white">
            Visibility controls
          </h3>
        </motion.div>

        {/* 6 Grid Control Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {controls.map((control, idx) => (
            <motion.div
              key={control}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              custom={idx * 0.06}
              className="p-5 rounded-[14px] bg-white/[0.06] border border-[#7FD0D9]/35 backdrop-blur-sm flex items-center min-h-[90px]"
            >
              <p className="text-[15.2px] font-normal leading-[24px] text-[#DCECEE]">
                {control}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Action Button */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          custom={0.3}
        >
          <a
            href="#contact-sales"
            className="inline-flex items-center justify-center px-6 py-3 rounded-[10px] bg-white text-black font-semibold text-[16px] hover:bg-[#DCECEE] transition-colors"
          >
            Explore visibility
          </a>
        </motion.div>
      </div>
    </section>
  );
}
