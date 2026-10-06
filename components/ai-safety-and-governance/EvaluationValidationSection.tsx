import React from "react";
import Image from "next/image";
import Link from "next/link";

interface LadderRung {
  number: string;
  title: string;
  description: string;
  emphasis: string;
  isActive?: boolean;
}

const ladderRungs: LadderRung[] = [
  {
    number: "5",
    title: "Independent proof",
    description: "External audit, assessment or certification · ",
    emphasis: "Exact scope and validity only",
  },
  {
    number: "4",
    title: "Customer proof",
    description: "Approved customer or partner experience · ",
    emphasis: "Legal approval; no generalized safety",
  },
  {
    number: "3",
    title: "Validation proof",
    description: "Documented scoped evaluation result · ",
    emphasis: "Method, scope, date, limits, approval",
    isActive: true,
  },
  {
    number: "2",
    title: "Product proof",
    description: "Product UI implementing governance · ",
    emphasis: "Current product evidence required",
  },
  {
    number: "1",
    title: "Architecture proof",
    description: "Defined process, registry, state model · ",
    emphasis: "Design only; implies no tests occurred",
  },
];

const evaluationMetadata = [
  { key: "evaluation_id", value: "EVAL-88" },
  { key: "scope", value: "UC-0314 · SYS-012 v2.3 · AP workspace" },
  { key: "question", value: "Do summaries preserve invoice amounts and supplier?" },
  { key: "method", value: "Scenario testing + human review (approved)" },
  { key: "dataset", value: "Synthetic AP set · licensed · approved" },
  { key: "metric / rubric", value: "Field-preservation rubric (defined)" },
  { key: "threshold", value: "Governed · shown to reviewers" },
  { key: "result_summary", value: "Accepted for recommend-only use" },
  { key: "limitations", value: "Not evaluated on handwritten invoices" },
  { key: "reviewer", value: "AI Governance Owner · 2025-06-11" },
  { key: "evidence_state", value: "● Stale · model update pending", isWarning: true },
];

export const EvaluationValidationSection: React.FC = () => {
  return (
    <section id="evaluation" className="w-full bg-[#E9F9F8] py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* Left Column: Title, Code Terminal, and Rule */}
        <div className="lg:col-span-7 flex flex-col gap-5 sm:gap-6">
          <div className="flex flex-col gap-2.5 sm:gap-3">
            <span className="text-xs md:text-sm font-semibold tracking-wider text-[#247780] font-poppins uppercase">
              Evaluation & validation
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[42px] font-bold text-[#0F172A] font-plus-jakarta leading-tight">
              Scoped, dated and<br className="hidden md:inline" /> honest about its limits
            </h2>
            <p className="text-[#64748B] text-sm sm:text-base md:text-lg font-poppins">
              Never a naked accuracy, fairness, safety or hallucination number.
            </p>
          </div>

          {/* Terminal Window Card */}
          <div className="w-full bg-[#001315] border border-[rgba(52,212,202,0.3)] rounded-2xl shadow-xl overflow-hidden font-mono text-xs md:text-sm">
            {/* Window Title Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#001E22] border-b border-[rgba(52,212,202,0.15)]">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
                <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />
                <div className="w-3 h-3 rounded-full bg-[#10B981]" />
              </div>
              <span className="text-[#94A3B8] text-xs tracking-wider">evaluation/EVAL-88</span>
              <div className="w-12" />
            </div>

            {/* Key-Value Pairs */}
            <div className="p-5 md:p-6 flex flex-col gap-2.5">
              {evaluationMetadata.map((row, idx) => (
                <div key={idx} className="grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-4 py-0.5">
                  <span className="sm:col-span-4 text-[#4DDCAD] font-medium">
                    {row.key}
                  </span>
                  <span
                    className={`sm:col-span-8 ${
                      row.isWarning ? "text-[#F59E0B] font-medium" : "text-[#E2E8F0]"
                    }`}
                  >
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Beeswax Warning Banner */}
          <div className="bg-[#FEF3C7] border border-[#FDE68A] rounded-xl p-4 md:p-5 flex items-start gap-3.5 shadow-sm">
            <svg
              className="w-5 h-5 text-[#92400E] shrink-0 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-xs md:text-sm text-[#92400E] leading-relaxed font-poppins">
              <strong className="font-semibold">Metric rule.</strong> Any metric must carry capability
              scope, system and version, date, method, evidence source, limitations and currentness.
            </p>
          </div>
        </div>

        {/* Right Column: Evidence Ladder & Glacier Image */}
        <div className="lg:col-span-5 flex flex-col gap-6 lg:pt-8">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold tracking-wider text-[#247780] font-poppins uppercase">
              EVALUATION EVIDENCE LADDER
            </span>
            <h3 className="text-xl md:text-2xl font-bold text-[#0F172A] font-plus-jakarta">
              Five rungs of proof, climbed one at a time
            </h3>
          </div>

          {/* Ladder Items */}
          <div className="flex flex-col gap-2.5">
            {ladderRungs.map((rung) => (
              <div
                key={rung.number}
                className={`flex items-start gap-4 p-3.5 rounded-xl transition-all ${
                  rung.isActive
                    ? "bg-[#CFE9EA] border-l-4 border-b-2 border-[#247780] shadow-sm"
                    : "bg-white/70 border border-slate-200/60"
                }`}
              >
                <span className="w-8 h-8 rounded-lg bg-white/90 border border-[#247780]/30 flex items-center justify-center text-sm font-bold text-[#247780] shrink-0">
                  {rung.number}
                </span>
                <div className="flex flex-col">
                  <h4 className="text-sm font-bold text-[#0F172A] font-plus-jakarta">
                    {rung.title}
                  </h4>
                  <p className="text-xs text-[#475569] leading-snug font-poppins mt-0.5">
                    {rung.description}
                    <strong className="font-semibold text-[#0F172A]">{rung.emphasis}</strong>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="relative w-full h-48 md:h-52 rounded-2xl overflow-hidden shadow-md mt-1">
            <Image
              src="/ai-safety-and-governance/evaluation-validation-limits.png"
              alt="Glacier edge representing evaluation boundaries and limits"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>

          {/* Action Link */}
          <Link
            href="#registry"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#247780] hover:text-[#195B62] transition-colors group"
          >
            <span>Review evaluation</span>
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};
