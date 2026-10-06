import React from "react";
import { ArrowRight } from "lucide-react";

interface RuntimeState {
  id: string;
  title: string;
  description: string;
  badgeBg: string;
  badgeText: string;
  dotColor: string;
}

const RUNTIME_STATES: RuntimeState[] = [
  {
    id: "01",
    title: "Proposed",
    description: "Plan exists; no authority implied.",
    badgeBg: "bg-purple-100",
    badgeText: "text-purple-800",
    dotColor: "bg-purple-600",
  },
  {
    id: "02",
    title: "Ready",
    description: "Eligibility met; prerequisites shown.",
    badgeBg: "bg-slate-100",
    badgeText: "text-slate-800",
    dotColor: "bg-slate-600",
  },
  {
    id: "03",
    title: "Awaiting approval",
    description: "No side effect; reviewer and due date visible.",
    badgeBg: "bg-amber-100",
    badgeText: "text-amber-800",
    dotColor: "bg-amber-600",
  },
  {
    id: "04",
    title: "Approved",
    description: "Valid for the scoped next action; expiry shown.",
    badgeBg: "bg-emerald-100",
    badgeText: "text-emerald-800",
    dotColor: "bg-emerald-600",
  },
  {
    id: "05",
    title: "Executing",
    description: "Active step, owner, timeout and cancel.",
    badgeBg: "bg-sky-100",
    badgeText: "text-sky-800",
    dotColor: "bg-sky-600",
  },
  {
    id: "06",
    title: "Waiting external",
    description: "Dependency and stale threshold shown.",
    badgeBg: "bg-sky-100",
    badgeText: "text-sky-800",
    dotColor: "bg-sky-600",
  },
  {
    id: "07",
    title: "Blocked",
    description: "Reason and next action; no silent retry loop.",
    badgeBg: "bg-rose-100",
    badgeText: "text-rose-800",
    dotColor: "bg-rose-600",
  },
  {
    id: "08",
    title: "Failed / exception",
    description: "Impact, evidence, retry, recover or escalate.",
    badgeBg: "bg-rose-100",
    badgeText: "text-rose-800",
    dotColor: "bg-rose-600",
  },
  {
    id: "09",
    title: "Completed",
    description: "Planned action finished; not yet business success.",
    badgeBg: "bg-slate-100",
    badgeText: "text-slate-800",
    dotColor: "bg-slate-600",
  },
  {
    id: "10",
    title: "Authoritative complete",
    description: "System of record confirms; closed with receipt.",
    badgeBg: "bg-emerald-100",
    badgeText: "text-emerald-800",
    dotColor: "bg-emerald-600",
  },
  {
    id: "11",
    title: "Cancelled / revoked",
    description: "Further action blocked.",
    badgeBg: "bg-slate-100",
    badgeText: "text-slate-800",
    dotColor: "bg-slate-600",
  },
  {
    id: "12",
    title: "Unknown / stale",
    description: "Never rendered as success; refresh or escalate.",
    badgeBg: "bg-slate-100",
    badgeText: "text-slate-800",
    dotColor: "bg-slate-600",
  },
];

export default function AgenticExecutionStatesSection() {
  return (
    <section className="w-full bg-[#001315] py-20 px-6 md:px-12 lg:px-20 font-sans text-white relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/age/16.jpg"
          alt="Execution lifecycle motion background"
          className="w-full h-full object-cover block m-0 p-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#00191E]/90 via-[#00191E]/70 to-[#00191E]/90"></div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col items-start relative z-10">
        {/* Top Header Block */}
        <div className="w-full flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl">
            <div className="text-[#34D4CA] font-bold text-xs tracking-widest uppercase mb-3 font-mono">
              EXECUTION LIFECYCLE & STATE MACHINE
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-extrabold tracking-tight leading-[1.1] mb-4">
              Twelve runtime states, all visible
            </h2>
            <p className="text-gray-300 text-xs md:text-sm leading-relaxed max-w-xl">
              "Completed" and "authoritative complete" are different states. So
              are "unknown" and "success".
            </p>
          </div>
        </div>

        {/* Runtime States Grid (3 rows x 4 columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full mb-12">
          {RUNTIME_STATES.map((state) => (
            <div
              key={state.id}
              className="bg-[#24778029] border border-[#34D4CA59] rounded-3xl p-5 flex flex-col justify-between shadow-xl backdrop-blur-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono text-[#34D4CA] font-bold">
                    {state.id}
                  </span>
                  <div
                    className={`inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full ${state.badgeBg} ${state.badgeText} text-[10px] font-semibold`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${state.dotColor}`}
                    ></span>
                    <span>{state.title}</span>
                  </div>
                </div>
                <p className="text-xs text-gray-200 leading-relaxed font-medium">
                  {state.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Link */}
        <div>
          <a
            href="#"
            className="inline-flex items-center text-xs font-semibold text-[#34D4CA] hover:underline"
          >
            View execution states <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            
          </a>
        </div>
      </div>
    </section>
  );
}
