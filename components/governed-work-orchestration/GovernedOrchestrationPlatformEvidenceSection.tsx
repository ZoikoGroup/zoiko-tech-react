import React from "react";
import { ArrowRight } from "lucide-react";

interface PlatformCard {
  title: string;
  badge: {
    text: string;
    bg: string;
    textCol: string;
    dot: string;
  };
  description: string;
  proves: string;
  doesNotProve: string;
}

const PLATFORM_CARDS: PlatformCard[] = [
  {
    title: "Governed Work Orchestration",
    badge: {
      text: "Architecture",
      bg: "bg-blue-50",
      textCol: "text-blue-700",
      dot: "bg-blue-600",
    },
    description:
      "Public architecture destination. Valid without a named product.",
    proves: "the coordination model",
    doesNotProve: "a live product",
  },
  {
    title: "Zoiko Gesta",
    badge: {
      text: "Name pending",
      bg: "bg-gray-100",
      textCol: "text-gray-700",
      dot: "bg-gray-500",
    },
    description: "Named orchestration surface once public naming is approved.",
    proves: "nothing yet publicly",
    doesNotProve: "availability",
  },
  {
    title: "ZoikoVertex",
    badge: {
      text: "Live",
      bg: "bg-emerald-50",
      textCol: "text-emerald-800",
      dot: "bg-emerald-600",
    },
    description: "Governed agentic execution and workflow automation.",
    proves: "governed agentic execution",
    doesNotProve: "full case management",
  },
  {
    title: "Zoiko AI",
    badge: {
      text: "Finish-gated",
      bg: "bg-amber-50",
      textCol: "text-amber-800",
      dot: "bg-amber-600",
    },
    description: "Broader AI architecture and domain AI context.",
    proves: "AI context when approved",
    doesNotProve: "orchestration features",
  },
  {
    title: "Developer Platform",
    badge: {
      text: "Public state",
      bg: "bg-blue-50",
      textCol: "text-blue-700",
      dot: "bg-blue-600",
    },
    description: "Build destination when ready.",
    proves: "build routes when public",
    doesNotProve: "endpoints",
  },
];

export default function GovernedOrchestrationPlatformEvidenceSection() {
  return (
    <section className="w-full bg-[#E9F9F8] py-20 px-6 md:px-12 lg:px-20 font-sans text-[#0B132B]">
      <div className="max-w-7xl mx-auto flex flex-col items-start">
        {/* Top Feature Card with Edge-to-Edge Image /gov/31.png */}
        <div className="w-full bg-[#00191E] rounded-3xl overflow-hidden shadow-2xl border border-gray-200/20 mb-20 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 w-full items-center">
            {/* Left Column: Image /gov/31.png with ZERO padding */}
            <div className="lg:col-span-6 w-full h-full m-0 p-0">
              <img
                src="/gov/31.png"
                alt="Developer and integration dashboard visual"
                className="w-full h-full object-cover block m-0 p-0"
              />
            </div>

            {/* Right Column: Developer & Integration Layer Content */}
            <div className="lg:col-span-6 p-8 md:p-12 flex flex-col justify-between">
              <div>
                <div className="text-[#34D4CA] font-bold text-xs tracking-widest uppercase mb-3 font-mono">
                  DEVELOPER & INTEGRATION LAYER
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-[1.1] mb-4 text-white">
                  Integrate systems, events, tools and status
                </h2>
                <p className="text-gray-300 text-xs md:text-sm leading-relaxed mb-8">
                  Approved APIs, SDKs, webhooks and authentication only when
                  published. Sandbox only when self-service is live.
                </p>

                {/* Grid of integration points */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 border-t border-white/10 pt-6">
                  <div>
                    <h3 className="text-xs font-extrabold text-white mb-1">
                      Work-object contract
                    </h3>
                    <p className="text-[11px] text-gray-400">
                      Create, update and query durable work at documented scope.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xs font-extrabold text-white mb-1">
                      Events
                    </h3>
                    <p className="text-[11px] text-gray-400">
                      State, assignment, approval, completion and exception
                      events, where published.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xs font-extrabold text-white mb-1">
                      External systems
                    </h3>
                    <p className="text-[11px] text-gray-400">
                      Source and target IDs, correlation, status, receipts.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xs font-extrabold text-white mb-1">
                      Identity
                    </h3>
                    <p className="text-[11px] text-gray-400">
                      Human, service and agent identity integration.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xs font-extrabold text-white mb-1">
                      Failure handling
                    </h3>
                    <p className="text-[11px] text-gray-400">
                      Timeouts, retries, partial completion, duplicates and
                      stale state modeled.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xs font-extrabold text-white mb-1">
                      Security
                    </h3>
                    <p className="text-[11px] text-gray-400">
                      No secrets in URLs, analytics, storage, screenshots or
                      examples.
                    </p>
                  </div>
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

        {/* Section 16 Header */}
        <div className="mb-16">
          <div className="text-[#2b7a78] font-extrabold text-5xl md:text-6xl tracking-tight mb-2 font-mono">
            16
          </div>
          <div className="text-[#2b7a78] font-bold text-xs tracking-widest uppercase mb-4 font-mono">
            PLATFORM EVIDENCE LAYER
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-extrabold tracking-tight leading-[1.1] mb-6 max-w-3xl text-[#0B132B]">
            What each platform proves, and what it does not
          </h2>
          <p className="text-gray-600 text-xs md:text-sm leading-relaxed max-w-2xl">
            Every card states its maturity, what it evidences for orchestration,
            and where its evidence stops. Roadmap names never become live
            product cards.
          </p>
        </div>

        {/* Platform Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 w-full mb-12">
          {PLATFORM_CARDS.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 shadow-xl border border-gray-200/80 flex flex-col justify-between hover:shadow-2xl transition-shadow"
            >
              <div>
                <div className="mb-4">
                  <span
                    className={`inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold ${card.badge.bg} ${card.badge.textCol}`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${card.badge.dot}`}
                    ></span>
                    <span>{card.badge.text}</span>
                  </span>
                </div>
                <h3 className="text-base font-extrabold text-[#0B132B] mb-2">
                  {card.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-6">
                  {card.description}
                </p>

                <div className="space-y-3 pt-4 border-t border-gray-100 text-[11px]">
                  <div>
                    <span className="font-bold text-gray-400 block uppercase tracking-wider text-[9px] mb-0.5">
                      Proves
                    </span>
                    <span className="font-semibold text-[#0B132B]">
                      {card.proves}
                    </span>
                  </div>
                  <div>
                    <span className="font-bold text-gray-400 block uppercase tracking-wider text-[9px] mb-0.5">
                      Does not prove
                    </span>
                    <span className="font-semibold text-gray-500">
                      {card.doesNotProve}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-100">
                <a
                  href="#"
                  className="inline-flex items-center text-xs font-semibold text-[#2b7a78] hover:underline"
                >
                  Explore <ArrowRight className="w-3 h-3 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
