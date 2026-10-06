import React from "react";
import { ArrowRight } from "lucide-react";

interface PhaseRow {
  number: number;
  scope: string;
  objective: string;
  exitGate: string;
}

const PHASES: PhaseRow[] = [
  {
    number: 1,
    scope: "Scope",
    objective: "One workflow, entity, market and decision boundary",
    exitGate: "Owner, sources, systems of record and safety criteria named",
  },
  {
    number: 2,
    scope: "Source map",
    objective: "Inventory authoritative sources and freshness",
    exitGate: "Each source has owner, version semantics and fallback",
  },
  {
    number: 3,
    scope: "Responsibility model",
    objective: "Map applicability, obligations and reviewers",
    exitGate: "No unresolved source silently becomes active",
  },
  {
    number: 4,
    scope: "Controls & workflow",
    objective: "Map tasks, approvals, exceptions, action boundaries",
    exitGate: "States and decision ownership approved",
  },
  {
    number: 5,
    scope: "Integrate",
    objective: "Connect identity, systems, events and evidence",
    exitGate: "Failure, retry, stale and duplicate behavior tested",
  },
  {
    number: 6,
    scope: "Shadow / pilot",
    objective: "Compare outcomes without premature authority",
    exitGate: "Exceptions reviewed; limits visible",
  },
  {
    number: 7,
    scope: "Controlled use",
    objective: "Enable only approved scope and capability",
    exitGate: "Owner, support route and retention defined",
  },
  {
    number: 8,
    scope: "Expand",
    objective: "Add obligations, markets or entities from registry",
    exitGate: "Re-validated source, authority, privacy, maturity",
  },
];

interface PracticeCard {
  badge: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

const PRACTICE_CARDS: PracticeCard[] = [
  {
    badge: "Evidence pending",
    imageSrc: "/reg/26.png",
    imageAlt: "Architecture example visual",
    title: "Architecture example",
    description: "Synthetic source → evidence flow",
  },
  {
    badge: "Evidence pending",
    imageSrc: "/reg/27.png",
    imageAlt: "Domain example visual",
    title: "Domain example",
    description: "ZoikoTax telecom fiscal pattern, once approved",
  },
  {
    badge: "Evidence pending",
    imageSrc: "/reg/30.png",
    imageAlt: "Customer evidence visual",
    title: "Customer evidence",
    description: "Legal and customer approval required",
  },
  {
    badge: "Evidence pending",
    imageSrc: "/reg/28.png",
    imageAlt: "Benchmark and research visual",
    title: "Benchmark / research",
    description: "Published Zoiko Research only",
  },
];

export default function ImplementationAndAdoptionSection() {
  return (
    <section className="w-full bg-[#FFFFFF] py-20 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col items-start">
        {/* Top Part: Implementation & Adoption */}
        <div className="w-full mb-20">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center space-x-2 bg-white border border-gray-200 rounded-full px-3 py-1 w-fit mb-4 shadow-sm">
                <span className="text-[#2b7a78] font-mono text-[11px] font-bold">
                  §20
                </span>
                
              </div>
              <div className="text-[#2b7a78] font-bold text-xs tracking-widest uppercase mb-3">
                IMPLEMENTATION & ADOPTION
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-[48px] font-extrabold text-[#0B132B] tracking-tight leading-[1.1]">
                Eight phases, each with an exit gate
              </h2>
            </div>
            <div>
              <a
                href="#"
                className="inline-flex items-center text-xs font-semibold text-[#2b7a78] hover:underline"
              >
                Discuss rollout <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </a>
            </div>
          </div>

          {/* Phases Table Specimen Card */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-12 bg-gray-50/70 border-b border-gray-100 px-6 py-4 text-[10px] font-bold tracking-widest uppercase text-gray-400">
              <div className="col-span-3">PHASE</div>
              <div className="col-span-4">OBJECTIVE</div>
              <div className="col-span-5">EXIT / GATE</div>
            </div>

            <div className="flex flex-col divide-y divide-gray-100">
              {PHASES.map((phase, index) => (
                <div
                  key={index}
                  className="grid grid-cols-12 px-6 py-4 items-center text-xs"
                >
                  <div className="col-span-3 flex items-center space-x-3">
                    <div className="w-6 h-6 rounded-full bg-[#2b7a78] text-white flex items-center justify-center font-bold text-[10px]">
                      {phase.number}
                    </div>
                    <span className="font-bold text-[#0B132B]">
                      {phase.scope}
                    </span>
                  </div>
                  <div className="col-span-4 text-gray-600 pr-4">
                    {phase.objective}
                  </div>
                  <div className="col-span-5 text-gray-700 font-medium flex items-center">
                    <span className="font-bold text-[#2b7a78] mr-2">P</span>{" "}
                    {phase.exitGate}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Part: Technology in Practice */}
        <div className="w-full">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center space-x-2 bg-white border border-gray-200 rounded-full px-3 py-1 w-fit mb-4 shadow-sm">
                <span className="text-[#2b7a78] font-mono text-[11px] font-bold">
                  §21
                </span>
                
              </div>
              <div className="text-[#2b7a78] font-bold text-xs tracking-widest uppercase mb-3">
                TECHNOLOGY IN PRACTICE
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-[48px] font-extrabold text-[#0B132B] tracking-tight leading-[1.1]">
                Approved evidence only
              </h2>
            </div>
            <div className="max-w-xs">
              <p className="text-xs text-gray-500 leading-relaxed">
                An honest evidence-pending state is preferred over invented
                proof, metrics or implied regulatory endorsement.
              </p>
            </div>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {PRACTICE_CARDS.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Image Top with Badge overlay */}
                  <div className="relative w-full h-[180px]">
                    <div className="absolute top-3 left-3 z-10 bg-black/60 backdrop-blur-sm border border-white/20 rounded-full px-2.5 py-0.5">
                      <span className="text-amber-300 font-mono text-[9px] font-bold tracking-wider">
                        {card.badge}
                      </span>
                      
                    </div>
                    <img
                      src={card.imageSrc}
                      alt={card.imageAlt}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="text-sm font-extrabold text-[#0B132B] mb-2">
                      {card.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
