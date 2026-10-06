import React from "react";
import { ArrowRight } from "lucide-react";

interface EvidenceItem {
  text: string;
  status: "received" | "pending";
}

const EVIDENCE_ITEMS: EvidenceItem[] = [
  { text: "Financial statements · received", status: "received" },
  { text: "Sanctions result · pending", status: "pending" },
  { text: "Director ID · received", status: "received" },
];

const DECISION_STATES = [
  {
    label: "Pending",
    active: true,
    color: "bg-amber-100 text-amber-800",
    dot: "bg-amber-600",
  },
  {
    label: "Approved",
    active: false,
    color: "bg-gray-100 text-gray-700",
    dot: "bg-gray-400",
  },
  {
    label: "Denied",
    active: false,
    color: "bg-gray-100 text-gray-700",
    dot: "bg-gray-400",
  },
  {
    label: "Expired",
    active: false,
    color: "bg-gray-100 text-gray-700",
    dot: "bg-gray-400",
  },
  {
    label: "Superseded",
    active: false,
    color: "bg-gray-100 text-gray-700",
    dot: "bg-gray-400",
  },
];

export default function GovernedOrchestrationPolicyGatesSection() {
  return (
    <section className="w-full bg-[#E9F9F8] py-20 px-6 md:px-12 lg:px-20 font-sans text-[#0B132B]">
      <div className="max-w-7xl mx-auto flex flex-col items-start">
        {/* Top Header Block */}
        <div className="mb-16">
          <div className="text-[#2b7a78] font-extrabold text-5xl md:text-6xl tracking-tight mb-2 font-mono">
            08
          </div>
          <div className="text-[#2b7a78] font-bold text-xs tracking-widest uppercase mb-4 font-mono">
            POLICY, APPROVAL & DECISION GATES
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-extrabold tracking-tight leading-[1.1] mb-6 max-w-3xl text-[#0B132B]">
            Decisions that say who decided, on what basis, and what changes next
          </h2>
          <p className="text-gray-600 text-xs md:text-sm leading-relaxed max-w-2xl">
            Every gate records authority, evidence, state and downstream effect.
            Stale approvals are never silently reused.
          </p>
        </div>

        {/* Main Grid: Left Image /gov/20.png, Right Decision Record Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full items-center mb-12">
          {/* Left Column: Image /gov/20.png */}
          <div className="lg:col-span-5 rounded-3xl overflow-hidden shadow-2xl border border-gray-200 bg-[#00191E] h-[360px] md:h-[420px]">
            <img
              src="/gov/20.png"
              alt="Policy decision review collaboration visual"
              className="w-full h-full object-cover block m-0 p-0"
            />
          </div>

          {/* Right Column: Decision Record Card */}
          <div className="lg:col-span-7 bg-white text-[#0B132B] rounded-3xl shadow-2xl p-6 md:p-8 border border-gray-200/80 w-full">
            {/* Card Header */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-gray-200">
              <span className="text-xs font-extrabold font-mono text-[#0B132B]">
                Decision record · DEC-0917
              </span>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-500 bg-gray-100 px-2.5 py-1 rounded-md">
                SPECIMEN · SYNTHETIC DATA
              </span>
            </div>

            {/* Top Row Attributes: Work / unit, Gate type, Policy basis */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-6 mb-6 border-b border-gray-100 text-xs">
              <div>
                <span className="text-gray-400 block mb-1 font-semibold">
                  Work / unit
                </span>
                <span className="font-bold text-[#0B132B]">
                  WK-4471 · Credit sign-off
                </span>
              </div>
              <div>
                <span className="text-gray-400 block mb-1 font-semibold">
                  Gate type
                </span>
                <span className="font-bold text-[#0B132B]">Sign-off</span>
              </div>
              <div>
                <span className="text-gray-400 block mb-1 font-semibold">
                  Policy basis
                </span>
                <span className="font-bold text-[#0B132B]">
                  Credit policy v7 (effective Jul)
                </span>
              </div>
            </div>

            {/* Required Authority */}
            <div className="pb-6 mb-6 border-b border-gray-100 text-xs">
              <span className="text-gray-400 block mb-1 font-semibold">
                Required authority
              </span>
              <span className="font-bold text-[#0B132B]">
                Risk Analyst or above
              </span>
            </div>

            {/* Evidence Required */}
            <div className="pb-6 mb-6 border-b border-gray-100">
              <span className="text-xs text-gray-400 block mb-2 font-semibold">
                EVIDENCE REQUIRED
              </span>
              <div className="flex flex-wrap gap-2">
                {EVIDENCE_ITEMS.map((ev, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700"
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${ev.status === "received" ? "bg-emerald-600" : "bg-amber-600"}`}
                    ></span>
                    <span>{ev.text}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Decision State */}
            <div className="pb-6 mb-6 border-b border-gray-100">
              <span className="text-xs text-gray-400 block mb-2 font-semibold">
                DECISION STATE
              </span>
              <div className="flex flex-wrap gap-2">
                {DECISION_STATES.map((state, idx) => (
                  <span
                    key={idx}
                    className={`inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold ${state.active ? "bg-amber-100 text-amber-800" : "bg-gray-100 text-gray-600"}`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${state.active ? "bg-amber-600" : "bg-gray-400"}`}
                    ></span>
                    <span>{state.label}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Downstream Effect Footer */}
            <p className="text-xs text-gray-600 leading-relaxed bg-gray-50 p-3.5 rounded-xl border border-gray-200/80">
              <strong className="text-[#0B132B]">Downstream effect:</strong>{" "}
              approval makes &quot;Create account&quot; eligible; denial cancels
              it and notifies the owner. Material scope changes require a new
              decision.
            </p>
          </div>
        </div>

        {/* Bottom Link */}
        <div>
          <a
            href="#"
            className="inline-flex items-center text-xs font-semibold text-[#2b7a78] hover:underline"
          >
            Review gates <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
