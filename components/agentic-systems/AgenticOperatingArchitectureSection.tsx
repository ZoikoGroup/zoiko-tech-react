import React from "react";

interface LayerItem {
  level: string;
  title: string;
  description: string;
  question: string;
  highlighted?: boolean;
}

const LAYERS: LayerItem[] = [
  {
    level: "L1",
    title: "Goal / bounded intent",
    description:
      "Use case, objective, business owner, scope and success condition.",
    question: "What may the agent try to achieve?",
  },
  {
    level: "L2",
    title: "Context / authoritative inputs",
    description:
      "Task context, approved sources, current system state, constraints.",
    question: "What does it know, and what is authoritative?",
  },
  {
    level: "L3",
    title: "Plan / task graph",
    description:
      "Proposed steps, dependencies, required approvals and action risk.",
    question: "What does it plan to do?",
  },
  {
    level: "L4",
    title: "Agent identity / delegated authority",
    description:
      "Principal, agent identity, subject, scope, duration and revocation.",
    question: "Who may act, for whom, and how long?",
  },
  {
    level: "L5",
    title: "Tools / actions / resources",
    description: "Approved actions with side-effect classification.",
    question: "What can it actually touch or change?",
  },
  {
    level: "L6",
    title: "Policy / approval / execution",
    description: "Allow, deny or review; execution, timeout and exceptions.",
    question: "Which steps are permitted now?",
    highlighted: true,
  },
  {
    level: "L7",
    title: "Authoritative result / evidence",
    description: "System-of-record outcome, human decision and evidence.",
    question: "What changed, and can we prove why?",
  },
];

export default function AgenticOperatingArchitectureSection() {
  return (
    <section className="w-full bg-[#00191E] py-20 px-6 md:px-12 lg:px-20 font-sans text-white">
      <div className="max-w-7xl mx-auto flex flex-col items-start">
        {/* Top Header Block */}
        <div className="max-w-3xl mb-16">
          <div className="text-[#34D4CA] font-bold text-xs tracking-widest uppercase mb-3 font-mono">
            AGENTIC OPERATING ARCHITECTURE
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-extrabold tracking-tight leading-[1.1] mb-4">
            The end-to-end control plane for agent actions
          </h2>
          <p className="text-gray-300 text-xs md:text-sm leading-relaxed max-w-xl">
            Seven layers from bounded goal to provable result, with the policy
            and approval gate at the center of execution.
          </p>
        </div>

        {/* Main Split Layout: Left Image (/age/10.png), Right 7 Layers Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full items-stretch">
          {/* Left Column: Image Specimen with zero padding/margins */}
          <div className="lg:col-span-5 w-full h-full min-h-[450px]">
            <img
              src="/age/10.png"
              alt="Team analyzing operational dashboards and agent workflows"
              className="w-full h-full object-cover block m-0 p-0 rounded-3xl border border-[#34D4CA33] shadow-2xl"
            />
          </div>

          {/* Right Column: 7 Layers Stack */}
          <div className="lg:col-span-7 flex flex-col space-y-3">
            {LAYERS.map((layer, idx) => (
              <div
                key={idx}
                className={`rounded-2xl p-4 md:p-5 border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                  layer.highlighted
                    ? "bg-[#112D32] border-[#34D4CA] shadow-xl"
                    : "bg-[#0a2328]/80 border-[#34D4CA22] hover:border-[#34D4CA44]"
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-[#34D4CA]/10 text-[#34D4CA] font-mono font-bold text-xs flex items-center justify-center shrink-0 border border-[#34D4CA]/30">
                    {layer.level}
                  </div>
                  <div>
                    <h3 className="text-xs md:text-sm font-extrabold text-white mb-0.5">
                      {layer.title}
                    </h3>
                    <p className="text-[11px] text-gray-300 leading-relaxed">
                      {layer.description}
                    </p>
                  </div>
                </div>

                <div className="text-[11px] font-mono text-[#34D4CA] sm:text-right shrink-0">
                  {layer.question}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
