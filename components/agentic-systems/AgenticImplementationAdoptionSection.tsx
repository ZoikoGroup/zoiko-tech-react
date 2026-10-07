import React from "react";
import { ArrowRight, Flag } from "lucide-react";

interface AdoptionStep {
  number: string;
  title: string;
  gateLabel: string;
}

const ADOPTION_STEPS: AdoptionStep[] = [
  {
    number: "1",
    title: "Choose bounded workflow",
    gateLabel: "Pilot scope approved",
  },
  {
    number: "2",
    title: "Map systems & tools",
    gateLabel: "Action map approved",
  },
  {
    number: "3",
    title: "Define identity & authority",
    gateLabel: "Authority model approved",
  },
  {
    number: "4",
    title: "Define policy & approvals",
    gateLabel: "Control model approved",
  },
  {
    number: "5",
    title: "Define evidence & states",
    gateLabel: "State contract approved",
  },
  {
    number: "6",
    title: "Test failure cases",
    gateLabel: "Acceptance criteria met",
  },
  {
    number: "7",
    title: "Pilot",
    gateLabel: "Pilot reviewed",
  },
  {
    number: "8",
    title: "Operate & expand",
    gateLabel: "Expansion approved",
  },
];

export default function AgenticImplementationAdoptionSection() {
  return (
    <section className="w-full bg-[#FFFFFF] py-20 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col items-start">
        {/* Top Header Block */}
        <div className="max-w-3xl mb-20">
          <div className="text-[#2b7a78] font-bold text-xs tracking-widest uppercase mb-3 font-mono">
            IMPLEMENTATION & ADOPTION
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-extrabold text-[#0B132B] tracking-tight leading-[1.1] mb-4">
            Pilot one bounded task, then scale with gates
          </h2>
        </div>

        {/* Timeline Sequence Container */}
        <div className="w-full relative mb-16 overflow-x-auto pb-6">
          {/* Connecting Horizontal Line */}
          <div className="absolute top-6 left-6 right-6 h-0.5 bg-[#2b7a78]/30 hidden lg:block z-0"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-8 gap-6 relative z-10">
            {ADOPTION_STEPS.map((step, idx) => (
              <div key={idx} className="flex flex-col items-start">
                {/* Step Circle */}
                <div className="w-12 h-12 rounded-full bg-[#2b7a78] text-white font-bold text-sm flex items-center justify-center shadow-lg mb-6 shrink-0">
                  {step.number}
                </div>

                {/* Step Title */}
                <h3 className="text-xs font-extrabold text-[#0B132B] mb-3 leading-snug">
                  {step.title}
                </h3>

                {/* Gate Badge */}
                <div className="flex items-center space-x-1.5 text-[11px] text-[#2b7a78] font-medium">
                  <Flag className="w-3 h-3 shrink-0" />
                  <span>{step.gateLabel}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Link */}
        <div>
          <a
            href="#"
            className="inline-flex items-center text-xs font-semibold text-[#2b7a78] hover:underline"
          >
            Discuss rollout <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
