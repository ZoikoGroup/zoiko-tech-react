import React from "react";
import { ArrowRight } from "lucide-react";

interface DomainCard {
  title: string;
  badge: {
    label: string;
    bg: string;
    text: string;
    dot: string;
  };
  description: string;
  subtext: string;
}

const DOMAIN_CARDS: DomainCard[] = [
  {
    title: "Incident",
    badge: {
      label: "Contained",
      bg: "bg-white/10",
      text: "text-white",
      dot: "bg-white",
    },
    description:
      "Suspected · active · contained · recovering · resolved · unknown",
    subtext: "Never invented from marketing telemetry.",
  },
  {
    title: "Service resilience",
    badge: {
      label: "Degraded",
      bg: "bg-white/10",
      text: "text-white",
      dot: "bg-white",
    },
    description: "Operational · degraded · disrupted · recovering · unknown",
    subtext: "System Status stays authoritative.",
  },
  {
    title: "Dependency",
    badge: {
      label: "Unknown",
      bg: "bg-white/10",
      text: "text-white",
      dot: "bg-white",
    },
    description: "Available · degraded · unavailable · unknown",
    subtext: "Source and last-confirmed time shown.",
  },
  {
    title: "Customer impact",
    badge: {
      label: "Not confirmed",
      bg: "bg-white/10",
      text: "text-white",
      dot: "bg-white",
    },
    description: "Affected · potentially affected · not confirmed",
    subtext: "No customer identity or confidential detail.",
  },
  {
    title: "Communication",
    badge: {
      label: "Public status",
      bg: "bg-white/10",
      text: "text-white",
      dot: "bg-white",
    },
    description: "Internal · customer · public status · resolved notice",
    subtext: "No parallel public status feed.",
  },
  {
    title: "Evidence",
    badge: {
      label: "Private",
      bg: "bg-white/10",
      text: "text-white",
      dot: "bg-white",
    },
    description: "Reference, owner, time, state, action pointer",
    subtext: "Sensitive evidence remains private.",
  },
];

export default function IncidentResilienceSection() {
  return (
    <section className="relative w-full py-24 px-6 md:px-12 lg:px-20 font-sans overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/cyber/9.png"
          alt="Incident and resilience background"
          className="w-full h-full object-cover opacity-60 object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001315F2] via-[#001315C7] to-[#00131599]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-start">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-[#34D4CA] font-bold text-xs tracking-widest uppercase mb-4">
            INCIDENT & RESILIENCE STATE
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-extrabold text-white tracking-tight leading-[1.1] mb-4">
            When the waves hit, every state says who defined it
          </h2>
          <p className="text-gray-300 text-base leading-relaxed">
            Six domains, each using the responsible process&apos;s own
            semantics. Public service state always comes from System Status.
          </p>
        </div>

        {/* Domain Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-10">
          {DOMAIN_CARDS.map((card, index) => (
            <div
              key={index}
              className="bg-[#00191EB8] border border-[#34D4CA73] rounded-2xl p-6 flex flex-col justify-between shadow-lg backdrop-blur-sm"
            >
              {/* Card Header with Badge */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-white font-bold text-lg">{card.title}</h3>
                <span
                  className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${card.badge.bg} ${card.badge.text} border border-[#34D4CA73]`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${card.badge.dot} mr-1.5`}
                  ></span>
                  {card.badge.label}
                </span>
              </div>

              {/* Card Body */}
              <div className="space-y-3">
                <p className="text-white/90 text-xs font-medium leading-relaxed">
                  {card.description}
                </p>
                <p className="text-gray-400 text-xs leading-relaxed">
                  {card.subtext}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Link */}
        <div>
          <a
            href="#"
            className="inline-flex items-center text-sm font-semibold text-[#34D4CA] hover:underline"
          >
            View incident states <ArrowRight className="w-4 h-4 ml-1.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
