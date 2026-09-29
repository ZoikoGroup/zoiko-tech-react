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

const handoffs = [
  {
    handoff: "Worker / employee master data",
    rule: "The HR system stays authoritative where designated. The workforce solution consumes only required context.",
  },
  {
    handoff: "Policy / organizational context",
    rule: "Department, role, manager, location and employment context only as required.",
  },
  {
    handoff: "Time / attendance to HR / payroll",
    rule: "Only approved, verified or explicitly exception-marked states transfer. Unresolved data is never silently converted to “clean.”",
  },
  {
    handoff: "Leave / availability context",
    rule: "Shown only where integrated and legally and operationally appropriate.",
  },
  {
    handoff: "Joiner / mover / leaver",
    rule: "Identity and access implications may flow through approved HR / IT processes.",
  },
  {
    handoff: "Performance processes",
    rule: "Performance outcomes are not inferred from time or communication signals unless an approved product supports that workflow.",
  },
];

export default function HrHandoffsSection() {
  return (
    <section
      id="hr-handoffs"
      className="w-full text-white py-16 lg:py-24"
      style={{
        background:
          "linear-gradient(158deg, rgba(0, 0, 0, 1) 0%, rgba(28, 92, 98, 1) 100%)",
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
          <h2 className="text-[28px] sm:text-[32px] lg:text-[35.2px] font-bold leading-[1.15] text-white">
            HR and workforce operations handoffs
          </h2>
        </motion.div>

        {/* Handoffs Table */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          custom={0.1}
          className="w-full overflow-x-auto rounded-[12px] border border-[#7FD0D9]/35 bg-white/[0.03] backdrop-blur-sm mb-10 shadow-xl"
        >
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="bg-black/40 border-b border-[#D5E3E5]/30">
                <th className="py-3 px-4 text-[14.7px] font-semibold text-white w-[30%]">
                  Handoff
                </th>
                <th className="py-3 px-4 text-[14.7px] font-semibold text-white w-[70%]">
                  Required rule
                </th>
              </tr>
            </thead>
            <tbody>
              {handoffs.map((row, idx) => (
                <tr
                  key={row.handoff}
                  className={`border-b border-[#7FD0D9]/20 hover:bg-white/[0.04] transition-colors ${
                    idx === handoffs.length - 1 ? "border-b-0" : ""
                  }`}
                >
                  <td className="py-3.5 px-4 text-[14.7px] font-semibold text-[#DCECEE] align-top">
                    {row.handoff}
                  </td>
                  <td className="py-3.5 px-4 text-[14.7px] font-normal text-[#DCECEE] align-top">
                    {row.rule}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Action Button */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          custom={0.2}
        >
          <a
            href="#platform-evidence"
            className="inline-flex items-center justify-center px-6 py-3 rounded-[10px] bg-white text-black font-semibold text-[16px] hover:bg-[#DCECEE] transition-colors"
          >
            Explore Zoiko HR
          </a>
        </motion.div>
      </div>
    </section>
  );
}
