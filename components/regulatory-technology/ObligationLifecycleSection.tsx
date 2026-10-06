import React from "react";
import { ArrowRight } from "lucide-react";

interface ObligationState {
  title: string;
  description: string;
  statusColor?: string;
}

interface StateCategory {
  category: string;
  states: ObligationState[];
}

const CATEGORIES: StateCategory[] = [
  {
    category: "BEFORE IT APPLIES",
    states: [
      {
        title: "Identified",
        description: "Found from a source; pending review.",
      },
      {
        title: "Review required",
        description: "Blocks downstream action.",
      },
      {
        title: "Scheduled / future",
        description: "Effective later; preparation only.",
      },
    ],
  },
  {
    category: "WHILE IT APPLIES",
    states: [
      {
        title: "Applicable / active",
        description: "Owner, due date, controls, evidence.",
      },
      {
        title: "Due / in progress",
        description: "Work underway; obligation state distinct.",
      },
      {
        title: "Overdue / missed",
        description: "Escalated, never hidden.",
      },
    ],
  },
  {
    category: "HOW IT ENDS",
    states: [
      {
        title: "Completed / satisfied",
        description: "Authoritative receipt; no compliance guarantee.",
      },
      {
        title: "Not applicable",
        description: "Basis, reviewer, period, re-evaluation trigger.",
      },
      {
        title: "Superseded / withdrawn",
        description: "History kept; no new authoritative use.",
      },
    ],
  },
  {
    category: "SPECIAL HANDLING",
    states: [
      {
        title: "Exception / waived",
        description: "Authority, scope, period and expiry.",
      },
      {
        title: "Unknown / stale",
        description: "Fail closed; refresh before action.",
      },
    ],
  },
];

export default function ObligationLifecycleSection() {
  return (
    <section className="relative w-full py-24 px-6 md:px-12 lg:px-20 font-sans overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/reg/16.jpg"
          alt="Obligation lifecycle background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001315F2] via-[#001315CC[ to-[#00131599]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-start">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#2477808C] backdrop-blur-sm border border-[#34D4CA73] rounded-full px-3 py-1 w-fit mb-4">
            <span className="text-[#34D4CA] font-mono text-[11px] font-bold">
              §07
            </span>
          </div>
          <div className="text-[#34D4CA] font-bold text-xs tracking-widest uppercase mb-3">
            OBLIGATION LIFECYCLE
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-extrabold text-white tracking-tight leading-[1.1] mb-6">
            Eleven states, grouped by where the obligation stands
          </h2>
          <p className="text-gray-300 text-base leading-relaxed max-w-2xl">
            Obligation state is never the same as workflow completion. A
            finished task does not satisfy an obligation until the responsible
            system confirms it.
          </p>
        </div>

        {/* Categories Grid (4 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-12">
          {CATEGORIES.map((cat, catIndex) => (
            <div
              key={catIndex}
              className="bg-[#24778024] backdrop-blur-sm border border-[#34D4CA73] rounded-3xl p-6 flex flex-col shadow-xl"
            >
              <div className="text-[#34D4CA] font-bold text-[10px] tracking-widest uppercase mb-6 pb-3 border-b border-[#34D4CA33]">
                {cat.category}
              </div>

              <div className="flex flex-col space-y-4">
                {cat.states.map((state, stateIndex) => (
                  <div
                    key={stateIndex}
                    className="bg-white rounded-2xl p-4 shadow-md border border-gray-100 flex flex-col"
                  >
                    <div className="flex items-center space-x-2 mb-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2b7a78]"></span>
                      <h3 className="text-xs font-bold text-[#0B132B]">
                        {state.title}
                      </h3>
                    </div>
                    <p className="text-[11px] text-gray-500 leading-relaxed pl-3.5">
                      {state.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Review Obligations Link */}
        <div>
          <a
            href="#"
            className="inline-flex items-center text-xs font-semibold text-[#34D4CA] hover:underline"
          >
            Review obligations <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
