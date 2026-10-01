import React from "react";
import { ArrowRight } from "lucide-react";

interface PlatformCard {
  title: string;
  maturityText: string;
  description: string;
  categoryTag: string;
}

const platforms: PlatformCard[] = [
  {
    title: "ZoikoNex",
    maturityText: "[Maturity]",
    description: "Telecom OSS/BSS, monetization and operator infrastructure.",
    categoryTag: "Operator platform",
  },
  {
    title: "Zoiko Local",
    maturityText: "[Maturity]",
    description:
      "Communications and local-number infrastructure: numbers, calling, video and routing.",
    categoryTag: "Communications",
  },
  {
    title: "Developer Platform",
    maturityText: "[Maturity]",
    description: "APIs, SDKs, tooling and ecosystem services.",
    categoryTag: "Integration",
  },
  {
    title: "Zoiko Cloud",
    maturityText: "[Maturity]",
    description:
      "Infrastructure for Zoiko platforms and regulated workloads, shown when public-ready.",
    categoryTag: "Cloud foundations",
  },
  {
    title: "Identity foundations",
    maturityText: "[Maturity]",
    description:
      "Identity, authentication, entitlement and delegated authority.",
    categoryTag: "Identity",
  },
];

export default function PlatformsBehindArchitecture() {
  return (
    <section className="bg-white text-gray-900 py-16 px-6 md:px-12 lg:px-16 font-sans antialiased">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="max-w-3xl mb-14">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#247780] mb-3">
            Platform Evidence Layer
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6 leading-[1.1]">
            The platforms behind the architecture
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Maturity, operator and market availability come from the platform
            registry and stay hidden until confirmed. No carrier-grade, coverage
            or subscriber-count claims.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {platforms.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200/85 p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
            >
              <div>
                {/* Card Title & Maturity Badge */}
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 tracking-tight">
                    {card.title}
                  </h3>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold text-[#334155] bg-[#E2E8F0] border border-gray-200/60">
                    {card.maturityText}
                  </span>
                </div>

                <p className="text-xs text-gray-600 mb-8 leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Card Footer: Tag and Explore Link */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-medium bg-gray-50 border border-gray-200 text-gray-700">
                  {card.categoryTag}
                </span>
                <a
                  href="#"
                  className="inline-flex items-center text-xs font-semibold text-emerald-700 hover:text-emerald-800 transition-colors group"
                >
                  <span>Explore</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
