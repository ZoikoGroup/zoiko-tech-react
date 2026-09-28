"use client";

import React from "react";
import { motion } from "framer-motion";

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

type QueueRow = {
  task: string;
  scope: string;
  due: string;
  owner: string;
  status: string;
  statusBorder: string;
  statusText: string;
};

const rows: QueueRow[] = [
  {
    task: "Example periodic report",
    scope: "Entity A · Jurisdiction 1",
    due: "Upcoming",
    owner: "Regulatory Operations",
    status: "Awaiting evidence",
    statusBorder: "border-[#8bf2c8]",
    statusText: "text-[#8bf2c8]",
  },
  {
    task: "Example applicability review",
    scope: "Entity B · Jurisdiction 2",
    due: "Approval pending",
    owner: "Qualified Reviewer",
    status: "◐ Approval pending",
    statusBorder: "border-[#f5c451]",
    statusText: "text-[#f5c451]",
  },
  {
    task: "Example renewal task",
    scope: "Entity A · Jurisdiction 3",
    due: "Overdue",
    owner: "Control Owner",
    status: "! Overdue",
    statusBorder: "border-[#ff7a7a]",
    statusText: "text-[#ff7a7a]",
  },
  {
    task: "Example filing",
    scope: "Jurisdiction not approved",
    due: "Not set",
    owner: "Specialist review",
    status: "? Unsupported",
    statusBorder: "border-[#87c7aa]",
    statusText: "text-[#87c7aa]",
  },
];

const columns = ["Task", "Scope", "Due", "Owner", "Status"];

export default function RegulatedWorkflowsDeadlines() {
  return (
    <section
      className="w-full border-t border-[#0b5c54] py-[79px] px-4 md:px-[100px]"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, #04201d 0%, #020d0c 100%)",
      }}
    >
      <div className="max-w-[1240px] mx-auto px-0 md:px-[24px] flex flex-col items-start gap-[10px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
          className="w-full flex flex-col items-start"
        >
          <p className="font-segoe font-bold text-[13px] leading-[20.8px] tracking-[1.3px] text-[#8bf2c8] w-full">
            REGULATED WORKFLOWS &amp; DEADLINES
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.1}
          className="w-full md:max-w-[533.75px]"
        >
          <h2 className="font-segoe font-bold text-[28px] md:text-[40px] leading-[34px] md:leading-[46px] text-white">
            Tasks, approvals and due dates, tied to approved obligations.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.15}
          className="w-full md:max-w-[640.5px] pt-[3px]"
        >
          <p className="font-segoe font-normal text-[16px] leading-[25.6px] text-[#87c7aa]">
            Filing, reporting or submission functions appear only where
            approved product evidence supports them.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.2}
          className="w-full pt-[24px] overflow-x-auto border border-[#26dca2] border-solid rounded-[12px] pt-[24px] pb-[16px]"
        >
          <div className="min-w-[720px] w-full flex flex-col items-start">
            <p className="font-segoe font-normal text-[13px] leading-[20.8px] text-[#87c7aa] px-[16px] py-[12px] w-full">
              Regulatory work queue (specimen data)
            </p>

            <div className="flex items-start w-full">
              {columns.map((col) => (
                <div
                  key={col}
                  className="bg-[#0b5c54] border-t border-[#0f3c37] border-solid px-[16px] py-[12px] flex-1"
                >
                  <p className="font-segoe font-bold text-[13px] leading-[20.8px] text-[#8bf2c8] whitespace-nowrap">
                    {col}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-start w-full">
              {rows.map((row) => (
                <div key={row.task} className="flex items-start w-full">
                  <div className="border-t border-[#0f3c37] border-solid px-[16px] pt-[11px] pb-[15.19px] flex-1">
                    <p className="font-segoe font-normal text-[14px] leading-[22.4px] text-white whitespace-nowrap">
                      {row.task}
                    </p>
                  </div>
                  <div className="border-t border-[#0f3c37] border-solid px-[16px] pt-[11px] pb-[15.19px] flex-1">
                    <p className="font-segoe font-normal text-[14px] leading-[22.4px] text-[#87c7aa] whitespace-nowrap">
                      {row.scope}
                    </p>
                  </div>
                  <div className="border-t border-[#0f3c37] border-solid px-[16px] pt-[11px] pb-[15.19px] flex-1">
                    <p className="font-segoe font-normal text-[14px] leading-[22.4px] text-[#87c7aa] whitespace-nowrap">
                      {row.due}
                    </p>
                  </div>
                  <div className="border-t border-[#0f3c37] border-solid px-[16px] pt-[11px] pb-[15.19px] flex-1">
                    <p className="font-segoe font-normal text-[14px] leading-[22.4px] text-[#87c7aa] whitespace-nowrap">
                      {row.owner}
                    </p>
                  </div>
                  <div className="border-t border-[#0f3c37] border-solid px-[16px] py-[12px] flex-1">
                    <div
                      className={`border ${row.statusBorder} border-solid rounded-[99px] flex items-start px-[10px] pt-px pb-[2.19px] w-fit`}
                    >
                      <p
                        className={`font-segoe font-normal text-[12px] leading-[19.2px] ${row.statusText} whitespace-nowrap`}
                      >
                        {row.status}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.25}
          className="w-full border border-dashed border-[#10b981] rounded-[12px] px-[20px] pt-[15.5px] pb-[15.89px]"
        >
          <p className="font-segoe text-[14px] leading-[22.4px]">
            <span className="font-bold text-[#22d3a4]">Queue actions:</span>{" "}
            <span className="font-normal text-[#8fb5ac]">
              assign · request evidence · review · approve / reject · open
              exception · submit only where supported.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
