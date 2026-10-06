import React from "react";
import { ArrowRight } from "lucide-react";

interface AuthorityState {
  number: number;
  title: string;
  badge: string;
  badgeColor: string;
  description: string;
}

const AUTHORITY_STATES: AuthorityState[] = [
  {
    number: 1,
    title: "Assist",
    badge: "Assist",
    badgeColor: "bg-slate-500/20 text-slate-200 border-slate-500/40",
    description:
      "AI drafts, summarizes, extracts or compares. You stay responsible.",
  },
  {
    number: 2,
    title: "Recommend",
    badge: "Recommend",
    badgeColor: "bg-pink-500/20 text-pink-300 border-pink-500/40",
    description: "AI proposes. Visibly non-authoritative until reviewed.",
  },
  {
    number: 3,
    title: "Review required",
    badge: "Review required",
    badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/40",
    description:
      "High-impact or uncertain output cannot progress without review.",
  },
  {
    number: 4,
    title: "Approve",
    badge: "Approve",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
    description:
      "An authorized person or system approves; identity, time and scope recorded.",
  },
  {
    number: 5,
    title: "Execute",
    badge: "Execute",
    badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
    description:
      "Agent actions route to Agentic Systems with confirmation semantics.",
  },
  {
    number: 6,
    title: "System of record update",
    badge: "System of record update",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
    description: "Only the authoritative system confirms the business state.",
  },
  {
    number: 7,
    title: "Escalate / stop",
    badge: "Stop",
    badgeColor: "bg-rose-500/20 text-rose-300 border-rose-500/40",
    description:
      "Policy block, conflict or insufficient evidence triggers a safe stop.",
  },
];

export default function AiHumanAuthoritySection() {
  return (
    <section className="w-full bg-[#00191E] py-20 px-6 md:px-12 lg:px-20 font-sans text-white">
      <div className="max-w-7xl mx-auto flex flex-col items-start">
        {/* Header Block */}
        <div className="max-w-2xl mb-16">
          <div className="text-[#34D4CA] font-bold text-xs tracking-widest uppercase mb-3">
            HUMAN AUTHORITY & DECISION BOUNDARIES
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-extrabold tracking-tight leading-[1.1] mb-4">
            AI informs. People and systems of record decide.
          </h2>
          <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
            Seven explicit authority states, from assistance to a safe stop.
            Each one says who is accountable.
          </p>
        </div>

        {/* Main Content Grid: Left Images, Right 7 States Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full mb-12 items-start">
          {/* Left Column: Two Images Side by Side (/ai/18.png and /ai/19.png) */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="w-full rounded-3xl overflow-hidden shadow-2xl bg-[#112D32] border border-[#34D4CA33] h-[360px]">
              <img
                src="/ai/19.png"
                alt="Person typing on laptop with abstract AI display"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full rounded-3xl overflow-hidden shadow-2xl bg-[#112D32] border border-[#34D4CA33] h-[360px]">
              <img
                src="/ai/20.png"
                alt="Professional reviewing AI dashboard metrics"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column: Seven Authority States Stack */}
          <div className="lg:col-span-6 flex flex-col space-y-4 w-full">
            {AUTHORITY_STATES.map((state) => (
              <div
                key={state.number}
                className="bg-[#112D3280] backdrop-blur-md border border-[#34D4CA44] rounded-2xl p-4 md:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 transition-all hover:border-[#34D4CA]"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 rounded-xl bg-[#247780] text-[#34D4CA] font-mono font-bold text-xs flex items-center justify-center shrink-0 border border-[#34D4CA66]">
                    {state.number}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="text-sm font-extrabold text-white">
                        {state.title}
                      </h3>
                      <span
                        className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${state.badgeColor}`}
                      >
                        {state.badge}
                      </span>
                    </div>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      {state.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Link */}
        <div>
          <a
            href="#"
            className="inline-flex items-center text-xs font-semibold text-[#34D4CA] hover:underline"
          >
            Review authority <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
