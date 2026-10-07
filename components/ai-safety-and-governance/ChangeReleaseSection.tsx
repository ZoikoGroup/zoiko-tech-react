import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ChangeItem {
  title: string;
  description: string;
}

const changeItems: ChangeItem[] = [
  {
    title: "Model / provider update",
    description: "Impact review, re-validation, controlled release.",
  },
  {
    title: "Prompt / configuration",
    description: "Controlled change when material to behavior.",
  },
  {
    title: "Data / source change",
    description: "Rights, quality, freshness and evaluation reassessed.",
  },
  {
    title: "Tool / action integration",
    description: "Delegated authority and side effects reassessed.",
  },
  {
    title: "Policy / risk class",
    description: "Versioned; impacted use cases reviewed.",
  },
  {
    title: "Capability expansion",
    description: "New users, data, domains, geographies or authority need review.",
  },
  {
    title: "Retirement / supersession",
    description: "History kept; successor identified.",
  },
];

export const ChangeReleaseSection: React.FC = () => {
  return (
    <section id="change" className="w-full bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* Left Column: Title, 7-Item List, Link */}
        <div className="lg:col-span-6 flex flex-col gap-5 sm:gap-6">
          <div className="flex flex-col gap-2.5 sm:gap-3">
            <span className="text-xs md:text-sm font-semibold tracking-wider text-[#247780] font-poppins uppercase">
              Change, release & reassessment
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[42px] font-bold text-[#0F172A] font-plus-jakarta leading-tight">
              No silent change.<br />Approval never quietly<br />carries over.
            </h2>
          </div>

          {/* 7 Change Conditions */}
          <div className="flex flex-col divide-y divide-slate-100">
            {changeItems.map((item, idx) => (
              <div key={idx} className="py-3.5 flex items-start gap-3.5">
                <span className="w-5 h-5 rounded-full bg-[#DBF2ED] text-[#195B62] flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <div className="flex flex-col">
                  <h4 className="text-sm font-bold text-[#0F172A] font-plus-jakarta">
                    {item.title}
                  </h4>
                  <p className="text-xs md:text-sm text-[#475569] font-poppins mt-0.5">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <Link
              href="#change"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#247780] hover:text-[#195B62] transition-colors group"
            >
              <span>Review change control</span>
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

        {/* Right Column: Code Diff Window + Leaf Image */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          {/* Code Diff Window Card */}
          <div className="w-full bg-[#001315] border border-[rgba(52,212,202,0.3)] rounded-2xl shadow-xl overflow-hidden font-mono text-xs md:text-sm">
            {/* Top Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#001E22] border-b border-[rgba(52,212,202,0.15)]">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
                <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />
                <div className="w-3 h-3 rounded-full bg-[#10B981]" />
              </div>
              <span className="text-[#94A3B8] text-xs tracking-wider">change/CHG-AI-221 · diff</span>
              <div className="w-12" />
            </div>

            {/* Diff Content */}
            <div className="p-4 sm:p-5 flex flex-col gap-3 overflow-x-auto">
              {/* Deletions (Red) */}
              <div className="bg-[rgba(239,68,68,0.12)] border border-red-500/20 text-[#FCA5A5] p-3 sm:p-3.5 rounded-lg flex flex-col gap-1 whitespace-pre-wrap break-words">
                <div>- model_version: v2.3</div>
                <div>- evaluation: EVAL-88 (accepted)</div>
                <div>- approval: APR-512 (valid)</div>
              </div>

              {/* Additions (Green) */}
              <div className="bg-[rgba(34,197,94,0.12)] border border-green-500/20 text-[#86EFAC] p-3 sm:p-3.5 rounded-lg flex flex-col gap-1 whitespace-pre-wrap break-words">
                <div>+ model_version: v2.4 (provider update)</div>
                <div>+ evaluation: <span className="font-semibold underline">re-validation required</span></div>
                <div>+ approval: <span className="font-semibold underline">not inherited · review pending</span></div>
              </div>

              {/* Status Note */}
              <div className="text-[#94A3B8] text-xs pt-1 break-words">
                impacted_use_cases: UC-0314, UC-0320 · release: held
              </div>
            </div>
          </div>

          {/* Autumn Leaf Image */}
          <div className="relative w-full h-48 sm:h-56 md:h-64 rounded-2xl overflow-hidden shadow-md">
            <Image
              src="/ai-safety-and-governance/change-release-leaf.png"
              alt="Autumn leaf symbolizing transformation and release governance"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 550px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
