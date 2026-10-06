import React from "react";
import { ArrowRight } from "lucide-react";

interface EvidenceItem {
  time: string;
  title: string;
  subtitle: string;
  badge: {
    text: string;
    bg: string;
    textCol: string;
    dot: string;
  };
}

const EVIDENCE_TIMELINE: EvidenceItem[] = [
  {
    time: "09:10",
    title: "Work created",
    subtitle: "WK-4471 · owner Onboarding Ops",
    badge: {
      text: "Record",
      bg: "bg-blue-50",
      textCol: "text-blue-700",
      dot: "bg-blue-600",
    },
  },
  {
    time: "09:12",
    title: "Intake → Validate",
    subtitle: "Trigger: request complete · actor: Intake team",
    badge: {
      text: "Transition",
      bg: "bg-blue-50",
      textCol: "text-blue-700",
      dot: "bg-blue-600",
    },
  },
  {
    time: "10:12",
    title: "Handoff to Risk",
    subtitle: "Reason: credit sign-off required",
    badge: {
      text: "Handoff",
      bg: "bg-blue-50",
      textCol: "text-blue-700",
      dot: "bg-blue-600",
    },
  },
  {
    time: "11:05",
    title: "Sanctions request sent",
    subtitle: "External provider · awaiting receipt",
    badge: {
      text: "Dependency",
      bg: "bg-blue-50",
      textCol: "text-blue-700",
      dot: "bg-blue-600",
    },
  },
  {
    time: "13:30",
    title: "Agent prepared setup",
    subtitle: "Run RUN-3302 · routed to Agentic evidence",
    badge: {
      text: "Action",
      bg: "bg-purple-50",
      textCol: "text-purple-700",
      dot: "bg-purple-600",
    },
  },
  {
    time: "14:22",
    title: "Decision pending",
    subtitle: "DEC-0917 · policy v7",
    badge: {
      text: "Decision",
      bg: "bg-amber-100",
      textCol: "text-amber-800",
      dot: "bg-amber-600",
    },
  },
  {
    time: "-",
    title: "Authoritative outcome",
    subtitle: "ERP account confirmation required to close",
    badge: {
      text: "Outcome",
      bg: "bg-gray-100",
      textCol: "text-gray-700",
      dot: "bg-gray-500",
    },
  },
];

export default function GovernedOrchestrationEvidenceSection() {
  return (
    <section className="w-full bg-[#E9F9F8] py-20 px-6 md:px-12 lg:px-20 font-sans text-[#0B132B]">
      <div className="max-w-7xl mx-auto flex flex-col items-start">
        {/* Main Grid: Left Work Evidence Card, Right Content & Images */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full items-center mb-12">
          {/* Left Column: Work Evidence Card */}
          <div className="lg:col-span-7 bg-white text-[#0B132B] rounded-3xl shadow-2xl p-6 md:p-8 border border-gray-200/80 w-full order-2 lg:order-1">
            {/* Card Header */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-gray-200">
              <span className="text-xs font-extrabold font-mono text-[#0B132B]">
                Work evidence · WK-4471
              </span>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-500 bg-gray-100 px-2.5 py-1 rounded-md">
                SPECIMEN · SYNTHETIC DATA
              </span>
            </div>

            {/* Timeline List */}
            <div className="space-y-4 mb-6">
              {EVIDENCE_TIMELINE.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between text-xs py-2 border-b border-gray-100 last:border-none"
                >
                  <div className="flex items-center space-x-4">
                    <span className="font-mono text-gray-400 text-[11px] w-10 shrink-0">
                      {item.time}
                    </span>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 rounded-full bg-[#2b7a78]"></span>
                      <div>
                        <div className="font-bold text-[#0B132B]">
                          {item.title}
                        </div>
                        <div className="text-[11px] text-gray-500">
                          {item.subtitle}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <span
                      className={`inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold ${item.badge.bg} ${item.badge.textCol}`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${item.badge.dot}`}
                      ></span>
                      <span>{item.badge.text}</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Footer Status Boxes inside Card */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-gray-200">
              <div className="bg-gray-50 p-3.5 rounded-2xl border border-gray-200/80">
                <span className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-wider block mb-1">
                  ORCHESTRATOR-REPORTED
                </span>
                <span className="text-xs font-bold text-[#0B132B]">
                  5 of 7 units complete
                </span>
              </div>
              <div className="bg-emerald-50/60 p-3.5 rounded-2xl border border-emerald-200/60">
                <span className="text-[10px] font-mono font-bold text-emerald-700 uppercase tracking-wider block mb-1">
                  AUTHORITATIVE
                </span>
                <span className="text-xs font-bold text-emerald-900">
                  Awaiting ERP confirmation
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Heading, Description & Images (/gov/27.png and /gov/28.png) */}
          <div className="lg:col-span-5 flex flex-col items-start order-1 lg:order-2">
            <div className="text-[#2b7a78] font-extrabold text-5xl md:text-6xl tracking-tight mb-2 font-mono">
              11
            </div>
            <div className="text-[#2b7a78] font-bold text-xs tracking-widest uppercase mb-4 font-mono">
              EVIDENCE & AUTHORITATIVE COMPLETION
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-extrabold tracking-tight leading-[1.1] mb-6 text-[#0B132B]">
              Reconstruct the whole journey, then confirm it with the system of
              record
            </h2>
            <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-8">
              Every transition, handoff, dependency, decision and action is
              recorded. Completion is confirmed by the responsible system or
              person, not by the orchestrator alone.
            </p>

            {/* Images Grid (/gov/27.png and /gov/28.png) */}
            <div className="grid grid-cols-2 gap-4 w-full">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-[#00191E] h-[150px]">
                <img
                  src="/gov/27.png"
                  alt="Evidence blueprint review dashboard"
                  className="w-full h-full object-cover block m-0 p-0"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-[#00191E] h-[150px]">
                <img
                  src="/gov/28.png"
                  alt="Team evaluating verification data"
                  className="w-full h-full object-cover block m-0 p-0"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Link */}
        <div>
          <a
            href="#"
            className="inline-flex items-center text-xs font-semibold text-[#2b7a78] hover:underline"
          >
            Inspect evidence <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            
          </a>
        </div>
      </div>
    </section>
  );
}
