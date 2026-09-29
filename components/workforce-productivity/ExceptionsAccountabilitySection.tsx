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

const exceptionTypes = [
  {
    type: "Missing signal",
    shows: "Source, expected signal, time window, owner and action.",
  },
  {
    type: "Conflicting signal",
    shows: "Conflicting sources, time window, impact, review owner.",
  },
  {
    type: "Policy exception",
    shows: "Rule involved, severity, justification, approval requirement.",
  },
  {
    type: "Coordination needed",
    shows: "Relevant operational communication, without unrelated conversation data.",
  },
  {
    type: "Resolved",
    shows: "Final state, owner, decision and evidence where required.",
  },
];

const exceptionQueue = [
  {
    exception: "Missing time entry",
    workflow: "Team A weekly close",
    source: "Time record",
    verification: "Pending",
    owner: "Team lead",
    age: "2 days",
    status: "Needs review",
    statusStyle: "bg-[#FFF5D6] text-[#6B4E00] border border-[#E8D48A]",
  },
  {
    exception: "Conflicting schedule",
    workflow: "Shift handoff",
    source: "Schedule vs HR",
    verification: "Conflict",
    owner: "Ops manager",
    age: "1 day",
    status: "Assigned",
    statusStyle: "bg-[#E6F2F4] text-[#14484E] border border-[#B7D3D6]",
  },
  {
    exception: "Overtime outside policy",
    workflow: "Team C",
    source: "Policy rule",
    verification: "Verified",
    owner: "Approver role",
    age: "4 hours",
    status: "Approval pending",
    statusStyle: "bg-[#E6F2F4] text-[#14484E] border border-[#B7D3D6]",
  },
  {
    exception: "Coverage gap",
    workflow: "Weekend cover",
    source: "Schedule",
    verification: "Verified",
    owner: "—",
    age: "New",
    status: "Unassigned",
    statusStyle: "bg-[#E8E8EE] text-[#333333] border border-[#C8C8D2]",
  },
];

export default function ExceptionsAccountabilitySection() {
  return (
    <section id="exceptions-accountability" className="w-full bg-white py-16 lg:py-24">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[130px]">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          className="mb-10"
        >
          <h2 className="text-[28px] sm:text-[32px] lg:text-[35.2px] font-bold leading-[1.15] text-[#0A1416]">
            Exceptions, approvals and accountability
          </h2>
        </motion.div>

        {/* Exception Types Definition Table */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          custom={0.1}
          className="w-full overflow-x-auto rounded-[12px] border border-[#D5E3E5] bg-[#F3F9FA] mb-12 shadow-sm"
        >
          <table className="w-full text-left border-collapse min-w-[500px]">
            <thead>
              <tr className="bg-[#247780] text-white border-b border-[#D5E3E5]">
                <th className="py-3 px-4 text-[14.7px] font-semibold w-[35%]">
                  Exception type
                </th>
                <th className="py-3 px-4 text-[14.7px] font-semibold w-[65%]">
                  What the view shows
                </th>
              </tr>
            </thead>
            <tbody>
              {exceptionTypes.map((row, idx) => (
                <tr
                  key={row.type}
                  className={`border-b border-[#D5E3E5] hover:bg-white transition-colors ${
                    idx === exceptionTypes.length - 1 ? "border-b-0" : ""
                  }`}
                >
                  <td className="py-3 px-4 text-[14.7px] font-semibold text-[#0A1416]">
                    {row.type}
                  </td>
                  <td className="py-3 px-4 text-[14.7px] font-normal text-[#4D6468]">
                    {row.shows}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Specimen Queue Table */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          custom={0.2}
          className="w-full mb-10 overflow-hidden"
        >
          <div className="mb-3">
            <span className="text-[12.8px] text-[#0A1416] font-normal leading-[20.5px]">
              Exception queue (specimen data)
            </span>
          </div>

          <div className="w-full overflow-x-auto rounded-[12px] border border-[#D5E3E5] bg-white shadow-sm">
            <table className="w-full text-left border-collapse min-w-[760px]">
              <thead>
                <tr className="bg-[#247780] text-white border-b border-[#D5E3E5]">
                  <th className="py-3 px-3.5 text-[14.7px] font-semibold">
                    Exception
                  </th>
                  <th className="py-3 px-3.5 text-[14.7px] font-semibold">
                    Workflow
                  </th>
                  <th className="py-3 px-3.5 text-[14.7px] font-semibold">
                    Source
                  </th>
                  <th className="py-3 px-3.5 text-[14.7px] font-semibold">
                    Verification
                  </th>
                  <th className="py-3 px-3.5 text-[14.7px] font-semibold">
                    Owner
                  </th>
                  <th className="py-3 px-3.5 text-[14.7px] font-semibold">Age</th>
                  <th className="py-3 px-3.5 text-[14.7px] font-semibold">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {exceptionQueue.map((item, idx) => (
                  <tr
                    key={item.exception}
                    className={`border-b border-[#D5E3E5] hover:bg-[#F3F9FA] transition-colors ${
                      idx === exceptionQueue.length - 1 ? "border-b-0" : ""
                    }`}
                  >
                    <td className="py-3.5 px-3.5 text-[14.7px] font-semibold text-[#0A1416]">
                      {item.exception}
                    </td>
                    <td className="py-3.5 px-3.5 text-[14.7px] font-normal text-[#4D6468]">
                      {item.workflow}
                    </td>
                    <td className="py-3.5 px-3.5 text-[14.7px] font-normal text-[#4D6468]">
                      {item.source}
                    </td>
                    <td className="py-3.5 px-3.5 text-[14.7px] font-normal text-[#4D6468]">
                      {item.verification}
                    </td>
                    <td className="py-3.5 px-3.5 text-[14.7px] font-normal text-[#4D6468]">
                      {item.owner}
                    </td>
                    <td className="py-3.5 px-3.5 text-[14.7px] font-normal text-[#4D6468]">
                      {item.age}
                    </td>
                    <td className="py-3.5 px-3.5">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded-[6px] text-[12.8px] font-semibold ${item.statusStyle}`}
                      >
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          custom={0.3}
        >
          <a
            href="#contact-sales"
            className="inline-flex items-center justify-center px-6 py-3 rounded-[10px] bg-[#247780] text-white font-semibold text-[16px] hover:bg-[#1a5a61] transition-colors shadow-sm"
          >
            Review workflow
          </a>
        </motion.div>
      </div>
    </section>
  );
}
