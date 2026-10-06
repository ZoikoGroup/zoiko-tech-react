import React from "react";
import { ArrowRight, Check } from "lucide-react";

interface AiControlRow {
  title: string;
  description: string;
}

const AI_CONTROLS: AiControlRow[] = [
  {
    title: "Change monitoring",
    description:
      "Summarize, classify and prioritize new source material; every applicable change.",
  },
  {
    title: "Classification",
    description:
      "Suggest taxonomy, scope and impact with source and legal classification.",
  },
  {
    title: "Obligation extraction",
    description:
      "Propose structured obligations for validation; authoritative obligations without approval.",
  },
  {
    title: "Explanation",
    description:
      "Explain decisions using pinned sources and records; legal rationale or hidden uncertainty.",
  },
  {
    title: "Planning",
    description:
      "Assist impact and workload planning. Not: Guaranteed outcomes or legal prediction.",
  },
  {
    title: "Workflow assistance",
    description:
      "Prepare tasks, drafts and evidence summaries; not autonomous filing or regulated action.",
  },
];

export default function AiAssistanceAndAuthorityBoundarySection() {
  return (
    <section className="relative w-full py-24 px-6 md:px-12 lg:px-20 font-sans overflow-hidden bg-[#00191E]">
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-start">
        {/* Top Header & Intro */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 bg-[#2477808C] backdrop-blur-sm border border-[#34D4CA73] rounded-full px-3 py-1 w-fit mb-4">
            <span className="text-[#34D4CA] font-mono text-[11px] font-bold">
              §14
            </span>
          </div>
          <div className="text-[#34D4CA] font-bold text-xs tracking-widest uppercase mb-3">
            AI ASSISTANCE & AUTHORITY BOUNDARY
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-extrabold text-white tracking-tight leading-[1.1] mb-6">
            AI assists. Approved rules and authorized people decide. Evidence
            proves.
          </h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-2xl">
            When source, jurisdiction, applicability or authority is unknown,
            the interface shows that uncertainty and routes review, never
            confident-sounding legal finality.
          </p>
        </div>

        {/* Image Below Text (rounded-2xl only, no bg, border, shadow) */}
        <div className="w-full h-[260px] md:h-[340px] max-w-2xl mb-16">
          <img
            src="/reg/21.png"
            alt="AI assistance and authority boundary visual"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        {/* AI Controls List Table (Clean transparent rows, no container bg/border) */}
        <div className="w-full mb-12">
          <div className="flex flex-col divide-y divide-[#34D4CA22]">
            {AI_CONTROLS.map((control, index) => (
              <div
                key={index}
                className="py-6 first:pt-0 last:pb-0 grid grid-cols-1 lg:grid-cols-12 gap-4 items-center"
              >
                <div className="lg:col-span-4 text-sm font-bold text-white">
                  {control.title}
                </div>
                <div className="lg:col-span-8 flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-[#34D4CA20] border border-[#34D4CA73] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#34D4CA]" />
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {control.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Review AI Controls Link */}
        <div>
          <a
            href="#"
            className="inline-flex items-center text-xs font-semibold text-[#34D4CA] hover:underline"
          >
            Review AI controls <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
