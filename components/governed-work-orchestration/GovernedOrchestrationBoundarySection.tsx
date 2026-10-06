import React from "react";
import { ArrowRight } from "lucide-react";

interface BoundaryRow {
  aspect: string;
  orchestration: string;
  agentic: string;
}

const BOUNDARY_ROWS: BoundaryRow[] = [
  {
    aspect: "Primary object",
    orchestration: "Durable work, case or process across many units",
    agentic: "Bounded agent run, task or action",
  },
  {
    aspect: "Ownership",
    orchestration: "Cross-role and cross-system progression",
    agentic: "Agent identity and bounded run state",
  },
  {
    aspect: "Tasks & dependencies",
    orchestration: "Work-unit graph, waits, parallelism, handoffs",
    agentic: "Receives eligible agent work units",
  },
  {
    aspect: "Tools & actions",
    orchestration: "References approved executable units",
    agentic: "Tool registry, authority, runtime execution",
  },
  {
    aspect: "Approvals",
    orchestration: "Workflow and stage decisions",
    agentic: "Execution-time approval gates",
  },
  {
    aspect: "Exceptions",
    orchestration: "Cross-work recovery and reassignment",
    agentic: "Run retry, cancel, compensation",
  },
  {
    aspect: "Authoritative result",
    orchestration: "Coordinates verification across systems",
    agentic: "Produces receipts, not all system-of-record truth",
  },
];

export default function GovernedOrchestrationBoundarySection() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-20 font-sans text-[#0B132B]">
      <div className="max-w-7xl mx-auto flex flex-col items-start">
        {/* Top Header Block */}
        <div className="mb-16">
          <div className="text-[#2b7a78] font-extrabold text-5xl md:text-6xl tracking-tight mb-2 font-mono">
            13
          </div>
          <div className="text-[#2b7a78] font-bold text-xs tracking-widest uppercase mb-4 font-mono">
            WHERE ORCHESTRATION ENDS AND AGENTS BEGIN
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-extrabold tracking-tight leading-[1.1] mb-6 max-w-3xl text-[#0B132B]">
            Two technologies, one clear boundary
          </h2>
          <p className="text-gray-600 text-xs md:text-sm leading-relaxed max-w-2xl">
            Orchestration owns the durable work. Agentic Systems owns each
            controlled agent run inside it.
          </p>
        </div>

        {/* Comparison Table Card */}
        <div className="w-full bg-white rounded-3xl shadow-2xl p-6 md:p-8 border border-gray-200/80 mb-12 overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-200 text-xs font-mono font-bold text-gray-400">
                <th className="pb-4 uppercase tracking-wider w-1/4">
                  BOUNDARY
                </th>
                <th className="pb-4 uppercase tracking-wider text-[#2b7a78] bg-teal-50/50 px-4 rounded-t-xl w-3/8">
                  Governed Work Orchestration
                </th>
                <th className="pb-4 uppercase tracking-wider w-3/8 pl-4">
                  Agentic Systems
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-xs">
              {BOUNDARY_ROWS.map((row, idx) => (
                <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                  <td className="py-4 font-semibold text-gray-500">
                    {row.aspect}
                  </td>
                  <td className="py-4 font-medium text-[#0B132B] bg-teal-50/30 px-4">
                    {row.orchestration}
                  </td>
                  <td className="py-4 font-medium text-gray-900 pl-4">
                    {row.agentic}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom Grid: Left Image /gov/30.png, Right Governance Handoff Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full items-center mb-12">
          {/* Left Column: Image /gov/30.png */}
          <div className="lg:col-span-6 rounded-3xl overflow-hidden shadow-2xl border border-gray-200 bg-[#00191E] h-[360px] md:h-[420px]">
            <img
              src="/gov/30.png"
              alt="Team collaborating around monitor workspace"
              className="w-full h-full object-cover block m-0 p-0"
            />
          </div>

          {/* Right Column: Governance Handoff Summary Card */}
          <div className="lg:col-span-6 bg-white text-[#0B132B] rounded-3xl shadow-2xl p-6 md:p-8 border border-gray-200/80 w-full">
            <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400 mb-1">
              14 · AI SAFETY & GOVERNANCE HANDOFF
            </div>
            <h3 className="text-xl font-extrabold text-[#0B132B] mb-6">
              Orchestration shows the minimum; governance owns the rest
            </h3>

            <div className="space-y-4 mb-6 text-xs">
              <div className="border-b border-gray-100 pb-3">
                <span className="font-bold text-[#0B132B] block mb-0.5">
                  Use-case approval
                </span>
                <span className="text-gray-600">
                  Shows approved, review-required or prohibited state.
                </span>
              </div>
              <div className="border-b border-gray-100 pb-3">
                <span className="font-bold text-[#0B132B] block mb-0.5">
                  Policy version
                </span>
                <span className="text-gray-600">
                  Consumes the current approved policy source.
                </span>
              </div>
              <div className="border-b border-gray-100 pb-3">
                <span className="font-bold text-[#0B132B] block mb-0.5">
                  Agent evaluation
                </span>
                <span className="text-gray-600">
                  Shows status when agent work participates.
                </span>
              </div>
              <div>
                <span className="font-bold text-[#0B132B] block mb-0.5">
                  Monitoring
                </span>
                <span className="text-gray-600">
                  Blocked, failed and exception states with escalation.
                </span>
              </div>
            </div>

            <div>
              <a
                href="#"
                className="inline-flex items-center text-xs font-semibold text-[#2b7a78] hover:underline"
              >
                Review governance <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
