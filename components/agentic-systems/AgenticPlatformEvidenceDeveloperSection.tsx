import React from "react";
import { ArrowRight } from "lucide-react";

interface PlatformCard {
  title: string;
  badge: string;
  badgeBg: string;
  badgeText: string;
  dotColor: string;
  description: string;
}

const PLATFORM_CARDS: PlatformCard[] = [
  {
    title: "ZoikoVertex",
    badge: "Live",
    badgeBg: "bg-emerald-100",
    badgeText: "text-emerald-800",
    dotColor: "bg-emerald-600",
    description: "Governed agentic execution and workflow automation.",
  },
  {
    title: "Zoiko AI",
    badge: "Finish · approval-gated",
    badgeBg: "bg-amber-100",
    badgeText: "text-amber-800",
    dotColor: "bg-amber-600",
    description: "Broader AI architecture and domain AI context.",
  },
  {
    title: "Governed work orchestration",
    badge: "Name pending",
    badgeBg: "bg-slate-200",
    badgeText: "text-slate-800",
    dotColor: "bg-slate-600",
    description: "Named surface once public naming is approved.",
  },
  {
    title: "Developer Platform",
    badge: "Public state",
    badgeBg: "bg-sky-100",
    badgeText: "text-sky-800",
    dotColor: "bg-sky-600",
    description: "Build destination for tools, events and runtime state.",
  },
  {
    title: "Identity foundations",
    badge: "Maturity",
    badgeBg: "bg-purple-100",
    badgeText: "text-purple-800",
    dotColor: "bg-purple-600",
    description: "Identity and authority architecture at approved scope.",
  },
  {
    title: "Responsible AI",
    badge: "Trust route",
    badgeBg: "bg-sky-100",
    badgeText: "text-sky-800",
    dotColor: "bg-sky-600",
    description: "Governance, evidence and approval context.",
  },
];

interface DevFeature {
  title: string;
  description: string;
}

const DEV_FEATURES_LEFT: DevFeature[] = [
  {
    title: "Build",
    description:
      "Approved APIs, SDKs, webhooks and authentication, when published.",
  },
  {
    title: "Authorize",
    description: "Delegated authority at documented scope.",
  },
  {
    title: "Test",
    description: "Sandbox and samples only when self-service is live.",
  },
];

const DEV_FEATURES_RIGHT: DevFeature[] = [
  {
    title: "Define tools",
    description: "Schema, inputs, side effect, authority and result contract.",
  },
  {
    title: "Observe",
    description: "Run, task and action state, events and evidence references.",
  },
  {
    title: "Failure handling",
    description:
      "Timeouts, retries, duplicates and partial completion documented.",
  },
];

export default function AgenticPlatformEvidenceDeveloperSection() {
  return (
    <section className="w-full bg-[#E9F9F8] py-20 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col items-start">
        {/* Top Header Block */}
        <div className="max-w-3xl mb-12">
          <div className="text-[#2b7a78] font-bold text-xs tracking-widest uppercase mb-3 font-mono">
            PLATFORM EVIDENCE & DEVELOPER LAYER
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-extrabold text-[#0B132B] tracking-tight leading-[1.1] mb-4">
            What is live today, and how to build on it
          </h2>
          <p className="text-gray-600 text-xs md:text-sm leading-relaxed max-w-2xl">
            ZoikoVertex being live does not imply unlimited autonomy; every
            tool, multi-agent swarms, self-healing, browser control, payment
            authority or guaranteed completion.
          </p>
        </div>

        {/* Platform Grid (3 columns x 2 rows) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-16">
          {PLATFORM_CARDS.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl shadow-xl border border-gray-200/60 p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-sm font-extrabold text-[#0B132B] mb-2">
                  {card.title}
                </h3>
                <div
                  className={`inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full ${card.badgeBg} ${card.badgeText} text-[10px] font-semibold mb-4`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${card.dotColor}`}
                  ></span>
                  <span>{card.badge}</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
              <div className="mt-6">
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

        {/* Dark Developer & Integration Layer Card with /age/21.png flush left */}
        <div className="w-full bg-[#00191E] rounded-3xl shadow-2xl overflow-hidden border border-gray-200/20 grid grid-cols-1 lg:grid-cols-12 text-white">
          {/* Left Column: Image with NO padding/vertical space around it */}
          <div className="lg:col-span-5 w-full h-full min-h-[320px] lg:min-h-full m-0 p-0 flex">
            <img
              src="/age/21.png"
              alt="Developer workspace and telemetry monitor"
              className="w-full h-full object-cover block m-0 p-0"
            />
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-between">
            <div>
              <div className="text-[#34D4CA] font-bold text-xs tracking-widest uppercase mb-3 font-mono">
                DEVELOPER & INTEGRATION LAYER
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-2">
                Build approved tools and actions
              </h3>
              <p className="text-gray-300 text-xs leading-relaxed mb-8">
                No secrets in URLs, client telemetry, browser storage or public
                examples.
              </p>

              {/* 2-Column Feature Lists */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="space-y-6">
                  {DEV_FEATURES_LEFT.map((feat, idx) => (
                    <div key={idx}>
                      <h4 className="text-xs font-extrabold text-white mb-1">
                        {feat.title}
                      </h4>
                      <p className="text-[11px] text-gray-300 leading-relaxed">
                        {feat.description}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="space-y-6">
                  {DEV_FEATURES_RIGHT.map((feat, idx) => (
                    <div key={idx}>
                      <h4 className="text-xs font-extrabold text-white mb-1">
                        {feat.title}
                      </h4>
                      <p className="text-[11px] text-gray-300 leading-relaxed">
                        {feat.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <a
                href="#"
                className="inline-flex items-center bg-[#34D4CA] text-[#00191E] hover:bg-[#2bc2b8] text-xs font-bold px-5 py-2.5 rounded-xl transition-colors shadow-lg"
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
