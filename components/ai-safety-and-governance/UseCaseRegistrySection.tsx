import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const registryFields = [
  { key: "use_case_id", value: "UC-0314" },
  { key: "purpose", value: "Summarize supplier invoices for AP review" },
  { key: "domain", value: "Finance · accounts payable" },
  { key: "ai_role", value: "Assist / summarize · recommend" },
  { key: "stakeholders", value: "AP staff · suppliers (class only)" },
  { key: "data_classes", value: "ERP invoices · contracts · confidential" },
  { key: "authority_level", value: "Recommendation; no payment action" },
  { key: "risk_class", value: "Elevated · review-required" },
  { key: "owner", value: "AP Lead" },
  { key: "approver", value: "AI Governance Owner" },
  { key: "status", value: "Restricted (40 users)", isStatus: true },
  { key: "reviewed_at", value: "2025-09-02" },
  { key: "next_review", value: "2025-12-02" },
];

const riskClasses = [
  {
    title: "Low / routine assistive",
    desc: "Limited consequence in an approved bounded workflow.",
    rule: "Owner, scope, data and evidence still required. Never \"no risk\".",
    bg: "bg-[#DBF2ED]",
    textColor: "text-[#195B62]",
    indentClass: "md:ml-0",
  },
  {
    title: "Elevated / review-required",
    desc: "Material consequence, sensitive context or dependency.",
    rule: "Explicit review, evaluation and escalation.",
    bg: "bg-[#FEF3C7]",
    textColor: "text-[#92400E]",
    indentClass: "md:ml-[14px]",
  },
  {
    title: "High-impact / consequential",
    desc: "Financial, employment, healthcare, legal, security, safety or government effect.",
    rule: "No autonomous authority; responsible decision-maker required.",
    bg: "bg-[#FEE2E2]",
    textColor: "text-[#991B1B]",
    indentClass: "md:ml-[28px]",
  },
  {
    title: "Prohibited / not approved",
    desc: "Disallowed by current policy or not approved here.",
    rule: "Blocked, with a route to the governance owner. No workaround.",
    bg: "bg-[#1F2937]",
    textColor: "text-white",
    indentClass: "md:ml-[42px]",
  },
  {
    title: "Unknown / unclassified",
    desc: "Missing, stale or conflicting information.",
    rule: "Not published or enabled; routed to review.",
    bg: "bg-[#F1F5F9]",
    textColor: "text-[#334155]",
    indentClass: "md:ml-[56px]",
  },
];

export default function UseCaseRegistrySection() {
  return (
    <section id="use-case-registry" className="w-full bg-white text-[#0F172A] py-16 sm:py-20 md:py-24 border-t border-[#E2E8F0]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20">
        {/* Top Split: Left Headline & Image | Right Terminal Record */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="flex flex-col gap-5 sm:gap-6">
            <div className="flex flex-col gap-2">
              <span className="font-poppins text-xs font-semibold tracking-[0.16em] text-[#247780] uppercase">
                Use-case registry & risk classification
              </span>
              <h2 className="font-plus-jakarta font-bold text-2xl sm:text-4xl lg:text-5xl leading-tight text-[#0F172A]">
                Every AI use starts as a <br className="hidden sm:inline" />
                registered, owned, dated <br className="hidden sm:inline" />
                record
              </h2>
            </div>

            <p className="font-poppins text-sm sm:text-base text-[#64748B] leading-relaxed">
              Purpose, domain, role, data classes, authority level, risk class, owner, approver,
              status and next review, with no purpose expansion by inference.
            </p>

            {/* Leather Notebook Image */}
            <div className="relative w-full h-[180px] sm:h-[230px] rounded-[18px] sm:rounded-[20px] overflow-hidden mt-1 sm:mt-2 shadow-sm">
              <Image
                src="/ai-safety-and-governance/registry-notebook.png"
                alt="Registry notebook and pen"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Right Column: Code/Terminal Specimen Window */}
          <div className="w-full bg-[#0B1220] border border-[#1E3A3F] rounded-2xl shadow-[0_18px_40px_rgba(0,0,0,0.3)] overflow-hidden">
            {/* Window Title Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#0B1220] border-b border-[#1E3A3F]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E]" />
              </div>
              <span className="font-inter text-xs font-semibold text-[#94A3B8]">
                governance/registry/UC-0314
              </span>
              <div className="w-8" />
            </div>

            {/* Terminal Body */}
            <div className="p-4 sm:p-6 flex flex-col divide-y divide-[#1E3A3F]/60 text-xs sm:text-[13px] font-inter">
              {registryFields.map((field) => (
                <div key={field.key} className="py-2.5 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
                  <span className="text-[#4DDCAD] font-mono sm:w-[150px] flex-shrink-0 text-xs sm:text-[13px]">
                    {field.key}
                  </span>
                  {field.isStatus ? (
                    <span className="text-[#F59E0B] font-medium flex items-center gap-1.5 break-words">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] shrink-0" />
                      <span className="text-[#E2E8F0]">{field.value}</span>
                    </span>
                  ) : (
                    <span className="text-[#E2E8F0] break-words">{field.value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section: Risk / Impact Classification Contract */}
        <div className="mt-14 sm:mt-20 pt-10 sm:pt-12 border-t border-[#E2E8F0]">
          <div className="flex flex-col gap-2 mb-6 sm:mb-8">
            <span className="font-poppins text-xs font-semibold tracking-[0.16em] text-[#247780] uppercase">
              Risk / impact classification contract
            </span>
            <h3 className="font-plus-jakarta font-bold text-xl sm:text-3xl text-[#0F172A]">
              Five source-defined classes. No universal numeric score.
            </h3>
          </div>

          {/* Cascading Classes List */}
          <div className="flex flex-col gap-2.5">
            {riskClasses.map((item) => (
              <div
                key={item.title}
                className={`p-4 sm:p-5 rounded-[14px] ${item.bg} ${item.indentClass} transition-transform duration-200 hover:translate-x-1 flex flex-col md:flex-row md:items-center justify-between gap-2 sm:gap-4`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-6">
                  <span className={`font-plus-jakarta font-bold text-sm sm:text-base ${item.textColor} min-w-0 sm:min-w-[210px]`}>
                    {item.title}
                  </span>
                  <span className={`font-poppins text-xs sm:text-sm ${item.textColor} opacity-90`}>
                    {item.desc}
                  </span>
                </div>
                <span className={`font-poppins text-xs sm:text-sm font-medium ${item.textColor} opacity-80 text-left md:text-right shrink-0`}>
                  {item.rule}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-start">
            <Link
              href="#use-case-registry"
              className="inline-flex items-center gap-2 font-poppins font-semibold text-sm text-[#247780] hover:underline group"
            >
              <span>Review use-case model</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
