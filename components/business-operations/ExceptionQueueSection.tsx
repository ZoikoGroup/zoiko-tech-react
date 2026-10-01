"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, AlertTriangle, Clock, CheckCircle2 } from "lucide-react";

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

export default function ExceptionQueueSection() {
  const [selectedIssue, setSelectedIssue] = useState<number | null>(null);

  const bulletPoints = [
    {
      title: "Exception: domain, source, owner, due, impact",
      icon: "/business-operations/icons/pattern-input.svg",
    },
    {
      title: "Approval: action, evidence, approver, expiry",
      icon: "/business-operations/icons/pattern-source.svg",
    },
    {
      title: "Conflict: competing records side by side",
      icon: "/business-operations/icons/pattern-approver.svg",
    },
    {
      title: "Partial completion: split outcomes visible",
      icon: "/business-operations/icons/pattern-verification.svg",
    },
    {
      title: "Escalation: clear path when deadlines are at risk",
      icon: "/business-operations/icons/pattern-escalation.svg",
    },
    {
      title: "Closure: outcome and residual exception recorded",
      icon: "/business-operations/icons/pattern-closure.svg",
    },
  ];

  const laneReadiness = [
    { name: "People", status: "Complete", bg: "bg-[#DBF2ED]", text: "text-[#195B62]" },
    { name: "Payroll / Billing", status: "Approval pending", bg: "bg-[#FEF3C7]", text: "text-[#92400E]" },
    { name: "Workforce", status: "Pending input", bg: "bg-[#E0F2FE]", text: "text-[#075985]" },
    { name: "Communications", status: "Complete", bg: "bg-[#DBF2ED]", text: "text-[#195B62]" },
    { name: "Marketing", status: "Approval pending", bg: "bg-[#FEF3C7]", text: "text-[#92400E]" },
    { name: "Compliance", status: "Blocked", bg: "bg-[#FEE2E2]", text: "text-[#991B1B]" },
  ];

  const exceptions = [
    {
      domain: "Payroll",
      issue: "Missing approved hours for 4 workers",
      source: "ZoikoTime",
      owner: "Payroll Lead",
      age: "2d",
      impact: "October payroll",
      action: "Request input",
    },
    {
      domain: "Billing",
      issue: "Two systems disagree on contract rate",
      source: "Billing · CRM",
      owner: "Revenue Ops",
      age: "1d",
      impact: "November invoices",
      action: "Compare sources",
    },
    {
      domain: "Compliance",
      issue: "Control evidence older than policy allows",
      source: "ZoikoAssure",
      owner: "Compliance Officer",
      age: "5d",
      impact: "Quarterly review",
      action: "Refresh evidence",
    },
  ];

  const approvals = [
    {
      title: "Release October payroll",
      owner: "Finance Controller",
      due: "Due today",
      dueBg: "bg-[#FEF3C7]",
      dueText: "text-[#92400E]",
    },
    {
      title: "Send spring campaign",
      owner: "Marketing Director",
      due: "Due in 2 days",
      dueBg: "bg-[#E0F2FE]",
      dueText: "text-[#075985]",
    },
    {
      title: "Approve role change",
      owner: "HR Business Partner",
      due: "In review",
      dueBg: "bg-[#DBF2ED]",
      dueText: "text-[#195B62]",
    },
  ];

  return (
    <section
      id="exception-queue"
      className="w-full text-white py-12 sm:py-16 lg:py-24"
      style={{
        background:
          "linear-gradient(262deg, rgba(6, 85, 72, 0.45) 78%, rgba(0, 38, 42, 0.45) 100%), #00191E",
      }}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[80px]">
        {/* Top Header & 6 Features */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12 mb-10 sm:mb-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0.1}
            className="max-w-[600px]"
          >
            <span className="block font-['Poppins',sans-serif] text-[11px] font-semibold tracking-[0.16em] text-white uppercase mb-2">
              CROSS-FUNCTIONAL EXCEPTIONS & APPROVALS
            </span>
            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-[26px] sm:text-[34px] lg:text-[40px] font-bold text-white leading-tight">
              One queue for what is stuck, and who owns it
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0.2}
            className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5 max-w-[620px] w-full"
          >
            {bulletPoints.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded bg-[#247780]/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Image
                    src={item.icon}
                    alt="icon"
                    width={14}
                    height={14}
                    className="w-3.5 h-3.5"
                  />
                </div>
                <span className="font-['Poppins',sans-serif] text-[13px] text-[#CBD5E1] leading-snug">
                  {item.title}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Command Center Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0.3}
          className="w-full bg-white rounded-[14px] sm:rounded-[16px] border border-[#E2E8F0] shadow-xl overflow-hidden text-[#0F172A]"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 border-b border-[#E2E8F0] bg-slate-50/70">
            <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] sm:text-[17px] font-bold text-[#0F172A]">
              Shared operations command
            </span>
            <span className="font-['Poppins',sans-serif] text-[10px] sm:text-[11px] font-semibold text-[#64748B] tracking-wider uppercase">
              SPECIMEN · SYNTHETIC DATA
            </span>
          </div>

          <div className="p-4 sm:p-6 flex flex-col gap-6">
            {/* READINESS BY LANE */}
            <div>
              <span className="block font-['Poppins',sans-serif] text-[11px] font-semibold text-[#64748B] uppercase tracking-wider mb-3">
                READINESS BY LANE
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-2.5">
                {laneReadiness.map((lane, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 sm:p-3 rounded-[10px] bg-[#F8FAFC] border border-[#E2E8F0] flex flex-col justify-between gap-2"
                  >
                    <span className="font-['Poppins',sans-serif] text-[11px] sm:text-[12px] font-semibold text-[#0F172A] truncate">
                      {lane.name}
                    </span>
                    <span
                      className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold text-center truncate ${lane.bg} ${lane.text}`}
                    >
                      {lane.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* EXCEPTION QUEUE Table with min-w-[640px] and smooth overflow scroll */}
            <div>
              <span className="block font-['Poppins',sans-serif] text-[11px] font-semibold text-[#64748B] uppercase tracking-wider mb-2">
                EXCEPTION QUEUE
              </span>
              <div className="overflow-x-auto rounded-[8px] border border-[#E2E8F0]">
                <table className="w-full min-w-[640px] text-left border-collapse text-[13px]">
                  <thead>
                    <tr className="bg-[#F8FAFC] border-b border-[#E2E8F0] text-[#64748B] font-['Poppins',sans-serif] text-[11px] font-semibold uppercase">
                      <th className="py-2.5 px-3.5">DOMAIN</th>
                      <th className="py-2.5 px-3.5">ISSUE</th>
                      <th className="py-2.5 px-3.5">SOURCE</th>
                      <th className="py-2.5 px-3.5">OWNER</th>
                      <th className="py-2.5 px-3.5">AGE</th>
                      <th className="py-2.5 px-3.5">IMPACT</th>
                      <th className="py-2.5 px-3.5 text-right">ACTION</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E2E8F0] font-['Poppins',sans-serif]">
                    {exceptions.map((row, idx) => (
                      <tr
                        key={idx}
                        onClick={() => setSelectedIssue(selectedIssue === idx ? null : idx)}
                        className={`hover:bg-slate-50 transition-colors cursor-pointer ${
                          selectedIssue === idx ? "bg-[#E9F9F8]/40" : ""
                        }`}
                      >
                        <td className="py-3 px-3.5 font-bold text-[#0F172A]">
                          {row.domain}
                        </td>
                        <td className="py-3 px-3.5 font-semibold text-[#0F172A]">
                          {row.issue}
                        </td>
                        <td className="py-3 px-3.5 text-[#334155]">
                          {row.source}
                        </td>
                        <td className="py-3 px-3.5 text-[#334155]">
                          {row.owner}
                        </td>
                        <td className="py-3 px-3.5 text-[#334155]">{row.age}</td>
                        <td className="py-3 px-3.5 text-[#334155]">
                          {row.impact}
                        </td>
                        <td className="py-3 px-3.5 text-right">
                          <button className="px-2.5 py-1 rounded bg-[#E9F9F8] hover:bg-[#d8f4f2] text-[#195B62] font-semibold text-[12px] transition-colors cursor-pointer">
                            {row.action}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Bottom: APPROVAL QUEUE & HANDOFF HEALTH */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2">
              {/* Approval Queue */}
              <div className="lg:col-span-7">
                <span className="block font-['Poppins',sans-serif] text-[11px] font-semibold text-[#64748B] uppercase tracking-wider mb-2.5">
                  APPROVAL QUEUE
                </span>
                <div className="flex flex-col gap-2.5">
                  {approvals.map((appr, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-[10px] bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-between gap-3"
                    >
                      <div>
                        <span className="block font-['Poppins',sans-serif] text-[13px] font-semibold text-[#0F172A]">
                          {appr.title}
                        </span>
                        <span className="font-['Poppins',sans-serif] text-[11px] text-[#64748B]">
                          {appr.owner}
                        </span>
                      </div>
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${appr.dueBg} ${appr.dueText} shrink-0`}
                      >
                        {appr.due}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Handoff Health */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <span className="block font-['Poppins',sans-serif] text-[11px] font-semibold text-[#64748B] uppercase tracking-wider mb-2.5">
                    HANDOFF HEALTH
                  </span>
                  <div className="grid grid-cols-3 gap-2.5">
                    <div className="p-3 rounded-[10px] bg-[#DBF2ED] flex flex-col items-center justify-center text-center">
                      <span className="font-['Poppins',sans-serif] text-[11px] font-medium text-[#195B62]">
                        Accepted
                      </span>
                      <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[22px] font-bold text-[#195B62]">
                        38
                      </span>
                    </div>

                    <div className="p-3 rounded-[10px] bg-[#E0F2FE] flex flex-col items-center justify-center text-center">
                      <span className="font-['Poppins',sans-serif] text-[11px] font-medium text-[#075985]">
                        Pending
                      </span>
                      <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[22px] font-bold text-[#075985]">
                        6
                      </span>
                    </div>

                    <div className="p-3 rounded-[10px] bg-[#FEE2E2] flex flex-col items-center justify-center text-center">
                      <span className="font-['Poppins',sans-serif] text-[11px] font-medium text-[#991B1B]">
                        Rejected / failed
                      </span>
                      <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[22px] font-bold text-[#991B1B]">
                        2
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 text-right">
                  <Link
                    href="#operating-domains"
                    className="inline-flex items-center gap-1.5 text-[#247780] font-['Poppins',sans-serif] text-[13px] font-semibold hover:underline"
                  >
                    <span>Review controls</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
