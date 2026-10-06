import React from "react";
import { ArrowRight } from "lucide-react";

export default function AgenticGovernedWorkHandoffSection() {
  return (
    <section className="w-full bg-[#FFFFFF] py-20 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col items-start">
        {/* Top Header Block */}
        <div className="max-w-3xl mb-16">
          <div className="text-[#2b7a78] font-bold text-xs tracking-widest uppercase mb-3 font-mono">
            WHERE THIS PAGE HANDS OFF
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-extrabold text-[#0B132B] tracking-tight leading-[1.1] mb-4">
            Agents are one unit of governed work
          </h2>
          <p className="text-gray-600 text-xs md:text-sm leading-relaxed max-w-xl">
            Broader orchestration and AI governance each have their own
            technology page and their own controls.
          </p>
        </div>

        {/* Two Columns Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full mb-8">
          {/* Card 1: Governed Work Orchestration (/age/19.png) */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-200/60 flex flex-col md:flex-row gap-6 items-center">
            <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-lg bg-[#00191E] border border-gray-200/60 shrink-0 relative">
              <span className="absolute top-3 left-3 bg-[#00191E]/80 backdrop-blur-md text-[#34D4CA] text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-1 rounded-md border border-[#34D4CA]/30 z-10">
                SEPARATE TECHNOLOGY PAGE
              </span>
              <img
                src="/age/19.png"
                alt="Governed Work Orchestration Collaboration"
                className="w-full h-full object-cover block m-0 p-0"
              />
            </div>

            <div className="flex flex-col justify-between w-full md:w-1/2">
              <div>
                <h3 className="text-base font-extrabold text-[#0B132B] mb-2">
                  Governed Work Orchestration
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  Agentic Systems owns single bounded agent execution.
                  Orchestration owns broader coordination across teams, systems,
                  approvals and durable work progression.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  <span className="text-[10px] font-semibold bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full">
                    Cross-team work
                  </span>
                  <span className="text-[10px] font-semibold bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full">
                    Work queues
                  </span>
                  <span className="text-[10px] font-semibold bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full">
                    Durable progression
                  </span>
                </div>
              </div>

              <div>
                <a
                  href="#"
                  className="inline-flex items-center text-xs font-semibold text-[#2b7a78] hover:underline"
                >
                  Explore orchestration{" "}
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: AI Safety & Governance (/age/20.png) */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-200/60 flex flex-col md:flex-row gap-6 items-center">
            <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-lg bg-[#00191E] border border-gray-200/60 shrink-0 relative">
              <span className="absolute top-3 left-3 bg-[#00191E]/80 backdrop-blur-md text-[#34D4CA] text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-1 rounded-md border border-[#34D4CA]/30 z-10">
                SEPARATE TECHNOLOGY PAGE
              </span>
              <img
                src="/age/20.png"
                alt="AI Safety & Governance Dashboard"
                className="w-full h-full object-cover block m-0 p-0"
              />
            </div>

            <div className="flex flex-col justify-between w-full md:w-1/2">
              <div>
                <h3 className="text-base font-extrabold text-[#0B132B] mb-2">
                  AI Safety & Governance
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  This page enforces policy and shows evaluation status at
                  execution time. Governance owns use-case approval, evaluation
                  methodology, policy change control and safety monitoring.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  <span className="text-[10px] font-semibold bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full">
                    Use-case approval
                  </span>
                  <span className="text-[10px] font-semibold bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full">
                    Evaluation
                  </span>
                  <span className="text-[10px] font-semibold bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full">
                    Policy governance
                  </span>
                  <span className="text-[10px] font-semibold bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full">
                    Monitoring
                  </span>
                </div>
              </div>

              <div>
                <a
                  href="#"
                  className="inline-flex items-center text-xs font-semibold text-[#2b7a78] hover:underline"
                >
                  Review governance{" "}
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-[10px] text-gray-400 font-mono">
          Zoiko Gesta is named as the orchestration surface only once public
          naming is approved.
        </div>
      </div>
    </section>
  );
}
