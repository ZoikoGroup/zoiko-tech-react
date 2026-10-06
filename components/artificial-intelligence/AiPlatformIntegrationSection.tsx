import React from "react";
import { ArrowRight } from "lucide-react";

interface IntegrationFeature {
  title: string;
  description: string;
}

const INTEGRATION_FEATURES: IntegrationFeature[] = [
  {
    title: "Model APIs",
    description:
      "Only current public interfaces. No invented endpoints or model IDs.",
  },
  {
    title: "SDKs",
    description: "Published package names only.",
  },
  {
    title: "Authentication",
    description: "Per product documentation.",
  },
  {
    title: "Events & webhooks",
    description: "Accepted output is not business completion.",
  },
  {
    title: "Tool integrations",
    description: "Inference kept separate from agentic execution.",
  },
  {
    title: "Observability",
    description:
      "Request, tool, handoff and error context, without private prompts.",
  },
];

export default function AiPlatformIntegrationSection() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col items-start">
        {/* Top Header Block */}
        <div className="max-w-3xl mb-16">
          <div className="text-[#2b7a78] font-bold text-xs tracking-widest uppercase mb-3">
            PLATFORM EVIDENCE LAYER
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-extrabold text-[#0B132B] tracking-tight leading-[1.1] mb-4">
            What is live, what is coming, and where to verify
          </h2>
          <p className="text-gray-600 text-xs md:text-sm leading-relaxed max-w-xl">
            Every card shows its maturity. Missing maturity data fails closed:
            no state, no claim.
          </p>
        </div>

        {/* Top Grid of Cards (Simulated compact view based on design flow) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-16">
          {/* Card 1 */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-200/60 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-extrabold text-[#0B132B]">
                  ZoikoVertex
                </h3>
                <span className="bg-emerald-500/10 text-emerald-700 border border-emerald-500/30 text-[10px] font-semibold px-2 py-0.5 rounded-full">
                  • Live
                </span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed mb-6">
                Governed agentic execution and workflow automation.
              </p>
            </div>
            <div>
              <div className="text-[10px] text-gray-400 font-mono uppercase mb-2">
                AI role: Agentic execution evidence
              </div>
              <a
                href="#"
                className="inline-flex items-center text-xs font-semibold text-[#2b7a78] hover:underline"
              >
                Explore →
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-200/60 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-extrabold text-[#0B132B]">
                  Zoiko AI
                </h3>
                <span className="bg-blue-500/10 text-blue-700 border border-blue-500/30 text-[10px] font-semibold px-2 py-0.5 rounded-full">
                  • Finish · approval-gated
                </span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed mb-6">
                Agentic intelligence, AI architecture, domain AI, responsible
                AI.
              </p>
            </div>
            <div>
              <div className="text-[10px] text-gray-400 font-mono uppercase mb-2">
                AI role: Domain-stack architecture
              </div>
              <a
                href="#"
                className="inline-flex items-center text-xs font-semibold text-[#2b7a78] hover:underline"
              >
                Explore →
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-200/60 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-extrabold text-[#0B132B]">
                  Governed work orchestration
                </h3>
                <span className="bg-amber-500/10 text-amber-700 border border-amber-500/30 text-[10px] font-semibold px-2 py-0.5 rounded-full">
                  • Name pending
                </span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed mb-6">
                Named surface shown once public naming is approved.
              </p>
            </div>
            <div>
              <div className="text-[10px] text-gray-400 font-mono uppercase mb-2">
                AI role: Orchestration
              </div>
              <a
                href="#"
                className="inline-flex items-center text-xs font-semibold text-[#2b7a78] hover:underline"
              >
                Explore →
              </a>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-200/60 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-extrabold text-[#0B132B]">
                  Zoiko Research
                </h3>
                <span className="bg-purple-500/10 text-purple-700 border border-purple-500/30 text-[10px] font-semibold px-2 py-0.5 rounded-full">
                  • Public research
                </span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed mb-6">
                Research, publications, benchmarks and technical papers.
                
              </p>
            </div>
            <div>
              <div className="text-[10px] text-gray-400 font-mono uppercase mb-2">
                AI role: Technical evidence
              </div>
              <a
                href="#"
                className="inline-flex items-center text-xs font-semibold text-[#2b7a78] hover:underline"
              >
                Explore →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Split Section: Image Left (Zero Padding/Margin), Code/Content Right in Dark Theme Box */}
        <div className="w-full bg-[#00191E] rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch border border-[#34D4CA33]">
          {/* Left Column: Image with zero vertical spacing */}
          <div className="lg:col-span-5 w-full h-full">
            <img
              src="/ai/24.png"
              alt="Developer and integration layer workspace"
              className="w-full h-full object-cover block m-0 p-0"
            />
          </div>

          {/* Right Column: Content Box */}
          <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-between text-white">
            <div>
              <div className="text-[#34D4CA] font-bold text-xs tracking-widest uppercase mb-3">
                DEVELOPER & INTEGRATION LAYER
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-3">
                Build with AI, honestly documented
              </h3>
              <p className="text-gray-300 text-xs md:text-sm leading-relaxed mb-8">
                Sandbox, console, quotas and pricing appear only once external
                self-service is live.
              </p>

              {/* 6 Grid Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 border-t border-b border-[#34D4CA22] py-6">
                {INTEGRATION_FEATURES.map((feature, idx) => (
                  <div key={idx}>
                    <h4 className="text-xs font-extrabold text-white mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <a
                href="#"
                className="inline-flex items-center text-xs font-semibold text-[#34D4CA] hover:underline"
              >
                Explore Developer Platform{" "}
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
