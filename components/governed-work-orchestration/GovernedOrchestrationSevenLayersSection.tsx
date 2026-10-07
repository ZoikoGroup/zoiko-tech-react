import React from "react";
import { ArrowRight } from "lucide-react";

interface LayerItem {
  code: string;
  title: string;
  description: string;
  question: string;
}

const LAYERS: LayerItem[] = [
  {
    code: "L1",
    title: "Work intent / objective",
    description:
      "Business outcome, request, case, obligation or approved objective.",
    question: "What work is being coordinated?",
  },
  {
    code: "L2",
    title: "Durable work object",
    description: "Canonical work ID, type, owner, scope and priority.",
    question: "What persists across time and systems?",
  },
  {
    code: "L3",
    title: "Stage / state model",
    description:
      "Lifecycle stage plus ready, active, waiting, blocked, review, completed.",
    question: "Where is the work now?",
  },
  {
    code: "L4",
    title: "Work units / assignments",
    description: "Human tasks, agent actions, system operations, manual work.",
    question: "Who or what is responsible for each unit?",
  },
  {
    code: "L5",
    title: "Dependencies / decisions",
    description:
      "Prerequisites, branches, approvals, policy gates, timers, handoffs.",
    question: "What must be true before work proceeds?",
  },
  {
    code: "L6",
    title: "Integration / authoritative systems",
    description: "APIs, events, documents and system-of-record references.",
    question: "Where is the authoritative result held?",
  },
  {
    code: "L7",
    title: "Evidence / observability",
    description:
      "State changes, decisions, handoffs, actions, exceptions, outcome.",
    question: "Can the journey be reconstructed?",
  },
];

export default function GovernedOrchestrationSevenLayersSection() {
  return (
    <section className="w-full bg-[#00191E] py-20 px-6 md:px-12 lg:px-20 font-sans text-white">
      <div className="max-w-7xl mx-auto flex flex-col items-start">
        {/* Top Header Block */}
        <div className="mb-16">
          <div className="text-[#34D4CA] font-extrabold text-5xl md:text-6xl tracking-tight mb-2 font-mono">
            03
          </div>
          <div className="text-[#34D4CA] font-bold text-xs tracking-widest uppercase mb-4 font-mono">
            GOVERNED ORCHESTRATION ARCHITECTURE
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-extrabold tracking-tight leading-[1.1] mb-6 max-w-3xl">
            From work object to evidence, in seven layers
          </h2>
          <p className="text-gray-300 text-xs md:text-sm leading-relaxed max-w-xl">
            The durable work object sits at the core. Everything else hangs off
            it: state, units, decisions, systems and evidence.
          </p>
        </div>

        {/* Main Content Grid: Left 7 Layers, Right Image Card (/gov/9.png) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full items-start mb-12">
          {/* Left Column: Layers Stack */}
          <div className="lg:col-span-8 flex flex-col space-y-3 w-full">
            {LAYERS.map((layer, idx) => (
              <div
                key={idx}
                className="bg-[#0b242a] border border-[#34D4CA]/20 rounded-2xl p-4 md:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-colors hover:border-[#34D4CA]/50"
              >
                <div className="flex items-start md:items-center space-x-4">
                  <span className="text-[#34D4CA] font-mono font-bold text-sm shrink-0 w-6">
                    {layer.code}
                  </span>
                  <div>
                    <h3 className="text-sm font-extrabold text-white mb-1">
                      {layer.title}
                    </h3>
                    <p className="text-xs text-gray-300">{layer.description}</p>
                  </div>
                </div>
                <div className="text-xs font-mono text-[#34D4CA] shrink-0 md:text-right border-t md:border-t-0 pt-2 md:pt-0 border-white/10">
                  {layer.question}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Visual Card with /gov/9.png */}
          <div className="lg:col-span-4 bg-[#0b242a] border border-[#34D4CA]/20 rounded-3xl overflow-hidden shadow-2xl flex flex-col">
            <div className="w-full h-[320px] lg:h-[480px] m-0 p-0 overflow-hidden relative">
              <img
                src="/gov/9.png"
                alt="Governed architecture path visualization"
                className="w-full h-full object-cover block m-0 p-0"
              />
            </div>
            <div className="p-6 bg-[#00191E]">
              <p className="text-xs text-gray-300 leading-relaxed">
                One path through time, across every team and system it touches.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Link */}
        <div>
          <a
            href="#"
            className="inline-flex items-center text-xs font-semibold text-[#34D4CA] hover:underline"
          >
            View architecture <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
