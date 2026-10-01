import React from "react";
import { ShieldCheck } from "lucide-react";

interface LayerItem {
  code: string;
  title: string;
  description: string;
  question: string;
  isWhiteCard?: boolean;
}

const architectureLayers: LayerItem[] = [
  {
    code: "L1",
    title: "Subscriber / account context",
    description:
      "Subscriber, account, relationship and approved entitlement context.",
    question: "Who is the service for?",
  },
  {
    code: "L2",
    title: "OSS/BSS & operator systems",
    description:
      "Subscriber and service operations, commercial, billing and monetization context.",
    question: "Which systems run the operator?",
  },
  {
    code: "L3",
    title: "Identity & authority",
    description:
      "Subscriber, operator, service, API client and delegated authority.",
    question: "Who or what is allowed to act?",
  },
  {
    code: "L4",
    title: "Cloud / digital foundations",
    description:
      "Approved platform foundations, environment boundaries and shared services.",
    question: "Where do digital services run?",
  },
  {
    code: "L5",
    title: "API / event / integration fabric",
    description:
      "APIs, SDKs, events, webhooks, connectors, versioning and ownership.",
    question: "How do systems communicate?",
  },
  {
    code: "L6",
    title: "Communications infrastructure",
    description:
      "Local numbers, calling, routing and real-time communications where approved.",
    question: "How is communication delivered?",
  },
  {
    code: "",
    title: "Security · evidence · observability",
    description: "",
    question: "How is the estate controlled and trusted?",
    isWhiteCard: true,
  },
];

export default function TelecomReferenceArchitecture() {
  return (
    <section className="bg-[#001315] text-white py-16 px-6 md:px-12 lg:px-16 font-sans antialiased">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="max-w-6xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-white mb-3">
            Telecom Reference Architecture
          </p>
          <h1 className="text-4xl max-w-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
            What lives where, who owns it, and how it connects
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            Six layers and one cross-cutting control plane. Zoiko does not claim
            to provide every layer; it makes the seams between them explicit.
          </p>
        </div>

        {/* Main Grid: Layers Stack (Left) & Image Card (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-start mb-6">
          {/* Layers Stack */}
          <div className="lg:col-span-7 space-y-3">
            {architectureLayers.map((layer, index) => {
              if (layer.isWhiteCard) {
                return (
                  <div
                    key={index}
                    className="bg-white text-gray-900 rounded-2xl p-5 flex items-center justify-between shadow-lg border border-gray-100"
                  >
                    <div className="flex items-center space-x-3.5">
                      <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700">
                        <ShieldCheck className="w-5 h-5 stroke-[2]" />
                      </span>
                      <span className="text-base font-bold text-gray-900">
                        {layer.title}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-gray-600 text-right">
                      {layer.question}
                    </span>
                  </div>
                );
              }

              return (
                <div
                  key={index}
                  className="bg-[#042024]/70 hover:bg-[#042024] border border-cyan-950/60 rounded-2xl p-5 grid grid-cols-12 gap-4 items-center transition-colors"
                >
                  <div className="col-span-1 text-[#4DDCAD] font-bold text-base tracking-wider">
                    {layer.code}
                  </div>
                  <div className="col-span-6 space-y-1">
                    <h3 className="text-base font-bold text-white leading-snug">
                      {layer.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {layer.description}
                    </p>
                  </div>
                  <div className="col-span-5 text-right text-xs md:text-sm text-[#4DDCAD] font-medium">
                    {layer.question}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Architectural Image Card */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[480px] h-[640px] rounded-3xl overflow-hidden shadow-2xl border border-cyan-950/50">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(/tele/9.png)` }}
              />
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="pt-2">
          <p className="text-xs text-gray-400">
            Network-layer functions such as RAN, packet core, IMS, signaling or
            roaming are not shown unless separately approved.
          </p>
        </div>
      </div>
    </section>
  );
}
