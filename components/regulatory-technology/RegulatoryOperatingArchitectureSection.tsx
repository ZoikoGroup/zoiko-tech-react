import React from "react";
import { ArrowRight } from "lucide-react";

interface ChainStage {
  number: string;
  title: string;
  description: string;
}

interface PrincipleQuestion {
  number: string;
  question: string;
}

const CHAIN_STAGES: ChainStage[] = [
  {
    number: "01",
    title: "Source / change",
    description: "No unsourced rule becomes authoritative.",
  },
  {
    number: "02",
    title: "Jurisdiction / scope",
    description: "Unknown or ambiguous stays unresolved.",
  },
  {
    number: "03",
    title: "Responsibility",
    description: "Not inferred from geography alone.",
  },
  {
    number: "04",
    title: "Obligation",
    description: "Separate from workflow completion.",
  },
  {
    number: "05",
    title: "Control / workflow",
    description: "Never rewrites the underlying rule.",
  },
  {
    number: "06",
    title: "Review / approval",
    description: "Review-required work cannot silently execute.",
  },
  {
    number: "07",
    title: "External action",
    description: "Prepared = submitted = accepted.",
  },
  {
    number: "08",
    title: "Reconciliation",
    description: "Mismatch stays an exception until resolved.",
  },
  {
    number: "09",
    title: "Evidence / replay",
    description: "Preserves what was known at the time.",
  },
  {
    number: "10",
    title: "Change loop",
    description: "Never silently overwrites history.",
  },
];

const PRINCIPLE_QUESTIONS: PrincipleQuestion[] = [
  { number: "1", question: "What is the authoritative source?" },
  { number: "2", question: "What scope, jurisdiction and period?" },
  { number: "3", question: "Who is responsible?" },
  { number: "4", question: "What is the current state?" },
  { number: "5", question: "Who reviewed or approved it?" },
  { number: "6", question: "What system confirms the outcome?" },
  { number: "7", question: "What evidence proves the result?" },
  { number: "8", question: "What changes if the source version changes?" },
];

export default function RegulatoryOperatingArchitectureSection() {
  return (
    <section className="w-full bg-[#00191E] py-20 px-6 md:px-12 lg:px-20 font-sans text-white">
      <div className="max-w-7xl mx-auto flex flex-col items-start">
        {/* Top Header & Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start w-full mb-16">
          {/* Left Column: Headings */}
          <div className="lg:col-span-7 flex flex-col justify-start">
            <div className="inline-flex items-center space-x-2 bg-[#2477808C] backdrop-blur-sm border border-[#34D4CA73] rounded-full px-3 py-1 w-fit mb-4">
              <span className="text-[#34D4CA] font-mono text-[11px] font-bold">
                §03
              </span>
            </div>
            <div className="text-[#34D4CA] font-bold text-xs tracking-widest uppercase mb-3">
              REGULATORY OPERATING ARCHITECTURE
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-extrabold tracking-tight leading-[1.1]">
              A ten-stage chain from source to replay, and back again
            </h2>
          </div>

          {/* Right Column: Building Image */}
          <div className="lg:col-span-5 w-full">
            <div className="rounded-3xl p-3">
              <div className="rounded-2xl overflow-hidden w-full h-[220px]">
                <img
                  src="/reg/11.png"
                  alt="Regulatory operating architecture architectural landmark"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Ten-Stage Chain Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 w-full mb-16">
          {CHAIN_STAGES.map((stage, index) => (
            <div
              key={index}
              className="bg-[#00191EB8] backdrop-blur-sm border border-[#34D4CA73] rounded-2xl p-5 flex flex-col justify-between shadow-lg"
            >
              <div>
                <span className="text-xs font-bold font-mono text-[#34D4CA] block mb-2">
                  {stage.number}
                </span>
                <h3 className="text-sm font-bold text-white mb-2 leading-snug">
                  {stage.title}
                </h3>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed mt-2">
                {stage.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Two Columns: Architecture Principle Card & Why a Loop Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full">
          {/* Left Column: Architecture Principle List Card */}
          <div className="lg:col-span-5 bg-[#00191EB8] backdrop-blur-sm border border-[#34D4CA73] rounded-3xl p-6 md:p-8 flex flex-col shadow-xl">
            <div className="mb-6">
              <span className="text-[#34D4CA] font-bold text-[11px] tracking-widest uppercase block mb-1">
                ARCHITECTURE PRINCiple · EIGHT QUESTIONS
              </span>
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                EVERY OBJECT ANSWERS
              </h3>
            </div>

            <div className="flex flex-col space-y-3">
              {PRINCIPLE_QUESTIONS.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#2477804D] border border-[#34D4CA4D] rounded-xl px-4 py-3 flex items-center space-x-3"
                >
                  <span className="w-6 h-6 rounded-lg bg-[#34D4CA]/20 text-[#34D4CA] text-xs font-bold font-mono flex items-center justify-center shrink-0">
                    {item.number}
                  </span>
                  <span className="text-xs text-gray-200 font-medium">
                    {item.question}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Why a Loop, Not a Line Card */}
          <div className="lg:col-span-7 bg-[#00191EB8] max-w-120 backdrop-blur-sm border border-[#34D4CA73] rounded-3xl p-8 md:p-10 flex flex-col max-h-70 shadow-xl">
            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-6">
                Why a loop, not a line
              </h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8 max-w-2xl">
                Rules are amended, corrected, superseded and withdrawn. Each new
                version re-evaluates scope and obligations, while the old
                version stays available for replay.
              </p>
            </div>

            <div>
              <a
                href="#"
                className="inline-flex items-center text-sm font-semibold text-[#34D4CA] hover:underline"
              >
                View architecture <ArrowRight className="w-4 h-4 ml-1.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
