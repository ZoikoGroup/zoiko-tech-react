import React from "react";
import { Network, User, FileText, Database } from "lucide-react";

export default function ReliabilityQualityAndObservability() {
  const cards = [
    {
      icon: Network,
      title: "Current state",
      description:
        "Pending, degraded, disconnected or provider-unavailable as supported.",
    },
    {
      icon: User,
      title: "Quality",
      description:
        "Only documented measurement/telemetry, no QoS or latency guarantee.",
    },
    {
      icon: FileText,
      title: "Status",
      description: "Canonical authoritative incidents and service health.",
    },
    {
      icon: Database,
      title: "Recovery",
      description:
        "Retry/escalation/support only where documented and safely permitted.",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-[#000000] via-[#0A2528] to-[#247780] text-white overflow-hidden font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-start">
        {/* Header Section (Left-aligned) */}
        <div className="text-left mb-12 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] mb-3 text-white">
            Reliability, quality & observability
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm">
            Unknown and degraded states remain visible.
          </p>
        </div>

        {/* 4-Column Grid Layout with Left-Aligned Card Content & Glassmorphism */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {cards.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                style={{
                  backgroundColor: "#FFFFFF0F",
                  borderColor: "#7FD0D959",
                }}
                className="border rounded-2xl p-6 backdrop-blur-md shadow-xl flex flex-col justify-between text-left transition-all hover:bg-white/[0.15]"
              >
                <div className="w-full flex flex-col items-start">
                  <div className="w-[60px] h-[60px] rounded-[10px] bg-[#62C6CA19] border border-[#7FD0D959] flex items-center justify-center text-[#8ADCE0] mb-6 shadow-inner">
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
