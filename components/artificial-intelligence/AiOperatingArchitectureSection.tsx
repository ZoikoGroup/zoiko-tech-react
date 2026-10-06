import React from "react";
import { AlertTriangle } from "lucide-react";

interface LayerItem {
  number: string;
  title: string;
  description: string;
  question: string;
}

const LAYERS: LayerItem[] = [
  {
    number: "L1",
    title: "Domain / task context",
    description:
      "Business, industry, user, policy, jurisdiction and workflow context.",
    question: "What problem and context are we solving?",
  },
  {
    number: "L2",
    title: "Authoritative sources / knowledge",
    description:
      "Approved records, documents, data and system state with provenance.",
    question: "What is the source of truth?",
  },
  {
    number: "L3",
    title: "Intelligence / model layer",
    description:
      "Model-neutral analysis, generation, extraction, search or recommendation.",
    question: "What is AI doing?",
  },
  {
    number: "L4",
    title: "Policy / access / constraints",
    description:
      "Identity, entitlement, purpose, policy and tool or data boundaries.",
    question: "What is allowed?",
  },
  {
    number: "L5",
    title: "Human / system authority",
    description:
      "Reviewer, approver, operator or authoritative system for material outcomes.",
    question: "Who or what owns the decision?",
  },
  {
    number: "L6",
    title: "Action / system handoff",
    description:
      "Output informs a user, system, agent or workflow only through approved handoff.",
    question: "What happens next?",
  },
  {
    number: "L7",
    title: "Evidence / observability",
    description:
      "Source set, version context, decisions, exceptions and reviewer.",
    question: "Can the path be reviewed later?",
  },
];

export default function AiOperatingArchitectureSection() {
  return (
    <section className="w-full bg-[#00191E] py-20 px-6 md:px-12 lg:px-20 font-sans text-white">
      <div className="max-w-7xl mx-auto flex flex-col items-start">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="text-[#34D4CA] font-bold text-xs tracking-widest uppercase mb-3">
            AI OPERATING ARCHITECTURE
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-extrabold tracking-tight leading-[1.1] mb-4">
            Seven layers from source to evidence
          </h2>
          <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
            Intelligence sits in the middle, surrounded by sources, policy,
            human authority and an evidence trail. It never sits alone.
          </p>
        </div>

        {/* Main Content Grid: Left Image, Right 7 Layers */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full mb-16 items-start">
          {/* Left Column: Image Specimen (/ai/9.png) */}
          <div className="lg:col-span-5 w-full rounded-3xl overflow-hidden border border-[#34D4CA33] shadow-2xl bg-[#112D32]">
            <img
              src="/ai/9.png"
              alt="AI Operating Architecture visual"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Column: 7 Layers Stack */}
          <div className="lg:col-span-7 flex flex-col space-y-4 w-full">
            {LAYERS.map((layer, index) => (
              <div
                key={index}
                className="bg-[#112D3280] backdrop-blur-md border border-[#34D4CA44] rounded-2xl p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 transition-all hover:border-[#34D4CA]"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 rounded-xl bg-[#247780] text-[#34D4CA] font-mono font-bold text-xs flex items-center justify-center shrink-0 border border-[#34D4CA66]">
                    {layer.number}
                  </div>
                  <div>
                    <h3 className="text-sm font-extrabold text-white mb-1">
                      {layer.title}
                    </h3>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      {layer.description}
                    </p>
                  </div>
                </div>
                <div className="text-[11px] font-medium text-[#34D4CA] shrink-0 bg-[#00191E66] px-3 py-1.5 rounded-xl border border-[#34D4CA33]">
                  {layer.question}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Rule Notice Banner */}
        <div className="w-full bg-[#FFFFFF] border border-[#34D4CA55] rounded-2xl p-4 md:p-5 flex items-start space-x-3 shadow-xl">
          <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <p className="text-xs text-black leading-relaxed">
            <strong className="text-black font-semibold">
              Authoritative-state rule.
            </strong>{" "}
            AI output is derived state. It never silently replaces the business,
            financial, regulatory, health, identity, security or operational
            record. When it leads to a material action, the responsible system
            or person returns the definitive state.
          </p>
        </div>
      </div>
    </section>
  );
}
