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

const conceptCards = [
  {
    title: "Time context",
    text: "Approved time, attendance and work-state terminology from ZoikoTime. No invented clocking methods or legal claims.",
  },
  {
    title: "Verification",
    text: "Verified, pending and exception states where the product supports them.",
  },
  {
    title: "Provenance",
    text: "Where a material signal came from, and whether it is confirmed, inferred or awaiting review.",
  },
  {
    title: "Policy alignment",
    text: "Policy or approval context when an exception needs action.",
  },
  {
    title: "Exceptions",
    text: "Late, missing, conflicting, unapproved or unknown states stay visible, never silently normalized.",
  },
  {
    title: "Operational handoff",
    text: "Approved signals may support HR, payroll or management workflows. Exact integrations are product-specific.",
  },
];

const timeSignals = [
  {
    signal: "Shift coverage, Team A",
    source: "Schedule",
    provenance: "Confirmed",
    state: "Verified",
    badgeType: "verified",
  },
  {
    signal: "Time entry, Workflow B",
    source: "Time record",
    provenance: "Awaiting review",
    state: "Pending verification",
    badgeType: "pending",
  },
  {
    signal: "Availability, Team C",
    source: "Not available",
    provenance: "Unknown",
    state: "Unknown",
    badgeType: "unknown",
  },
];

export default function TimeAssuranceSection() {
  return (
    <section id="time-assurance" className="w-full bg-white py-16 lg:py-24">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-[130px]">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          className="mb-8 sm:mb-10"
        >
          <h2 className="text-[26px] sm:text-[32px] lg:text-[35.2px] font-bold leading-tight sm:leading-[1.15] text-[#0A1416] mb-3">
            Time and workforce assurance
          </h2>
          <p className="text-[14.5px] sm:text-[16px] leading-[22px] sm:leading-[25.6px] text-[#4D6468] max-w-[820px]">
            Verified time and work-context concepts, described without overclaiming.
          </p>
        </motion.div>

        {/* 6 Concept Cards Grid: 4 in row 1, 2 in row 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {conceptCards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              custom={idx * 0.06}
              className="p-5 rounded-[14px] bg-[#F3F9FA] border border-[#D5E3E5] flex flex-col justify-between min-h-[160px] shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                <h3 className="text-[16px] font-bold text-[#0A1416] mb-2 leading-[24px]">
                  {card.title}
                </h3>
                <p className="text-[14px] sm:text-[14.5px] leading-[22px] text-[#4D6468]">
                  {card.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Specimen Data Table */}
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
              Workforce signals (specimen data, team level)
            </span>
          </div>

          <div className="w-full overflow-x-auto rounded-[12px] border border-[#D5E3E5] bg-white shadow-sm">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-[#247780] text-white border-b border-[#D5E3E5]">
                  <th className="py-3 px-4 text-[14.7px] font-semibold w-[30%]">
                    Signal
                  </th>
                  <th className="py-3 px-4 text-[14.7px] font-semibold w-[22%]">
                    Source
                  </th>
                  <th className="py-3 px-4 text-[14.7px] font-semibold w-[26%]">
                    Provenance
                  </th>
                  <th className="py-3 px-4 text-[14.7px] font-semibold w-[22%]">
                    State
                  </th>
                </tr>
              </thead>
              <tbody>
                {timeSignals.map((item, idx) => (
                  <tr
                    key={item.signal}
                    className={`border-b border-[#D5E3E5] hover:bg-[#F3F9FA] transition-colors ${
                      idx === timeSignals.length - 1 ? "border-b-0" : ""
                    }`}
                  >
                    <td className="py-3.5 px-4 text-[14.7px] font-semibold text-[#0A1416]">
                      {item.signal}
                    </td>
                    <td className="py-3.5 px-4 text-[14.7px] font-normal text-[#4D6468]">
                      {item.source}
                    </td>
                    <td className="py-3.5 px-4 text-[14.7px] font-normal text-[#4D6468]">
                      {item.provenance}
                    </td>
                    <td className="py-3.5 px-4">
                      {item.badgeType === "verified" && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-[6px] bg-[#14484E] text-white text-[12.8px] font-semibold">
                          {item.state}
                        </span>
                      )}
                      {item.badgeType === "pending" && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-[6px] bg-[#FFF5D6] text-[#6B4E00] border border-[#E8D48A] text-[12.8px] font-semibold">
                          {item.state}
                        </span>
                      )}
                      {item.badgeType === "unknown" && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-[6px] bg-[#E8E8EE] text-[#333333] border border-[#C8C8D2] text-[12.8px] font-semibold">
                          {item.state}
                        </span>
                      )}
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
          className="flex justify-start sm:justify-start"
        >
          <a
            href="#platform-evidence"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-[10px] bg-[#247780] text-white font-semibold text-[16px] hover:bg-[#1a5a61] transition-colors shadow-sm text-center"
          >
            Explore ZoikoTime
          </a>
        </motion.div>
      </div>
    </section>
  );
}
