import React from "react";
import { ArrowRight } from "lucide-react";

interface IdentityCard {
  id: string;
  type: string;
  identifier: string;
  subtitle: string;
  time?: string;
  status: string;
  statusType: "current" | "stale" | "delegated" | "denied";
  imageSrc?: string;
  positionClasses: string;
  rotationClass: string;
  isDark?: boolean;
  actionTitle?: string;
}

const IDENTITY_CARDS: IdentityCard[] = [
  {
    id: "1",
    type: "Person",
    identifier: "S-1042",
    subtitle: "Workforce directory · confirmed",
    time: "08:00",
    status: "Current",
    statusType: "current",
    imageSrc: "/digital/4.png",
    positionClasses: "top-4 left-0 md:left-4 z-10",
    rotationClass: "-rotate-2 hover:rotate-0",
  },
  {
    id: "2",
    type: "Guest",
    identifier: "G-77",
    subtitle: "Sponsor: Legal · expires 30 Oct",
    status: "Stale",
    statusType: "stale",
    imageSrc: "/digital/3.png",
    positionClasses: "top-12 right-2 md:right-8 z-10",
    rotationClass: "rotate-3 hover:rotate-0",
  },
  {
    id: "3",
    type: "Agent",
    identifier: "INV-EXC-01",
    subtitle: "Acting for: AP Lead · scoped",
    status: "Delegated",
    statusType: "delegated",
    imageSrc: "/digital/5.png",
    positionClasses: "bottom-4 left-12 md:left-16 z-20",
    rotationClass: "rotate-0",
  },
  {
    id: "4",
    type: "ACCESS DECISION",
    identifier: "",
    subtitle: "Denied · entitlement expired",
    status: "Denied · entitlement expired",
    statusType: "denied",
    actionTitle: "Approve payment PAY-5521",
    positionClasses: "bottom-12 right-0 md:right-4 z-30",
    rotationClass: "rotate-1",
    isDark: true,
  },
];

const STATUS_BADGE_CLASSES: Record<string, string> = {
  current: "bg-[#E6F4F1] text-[#2b7a78]",
  stale: "bg-gray-100 text-gray-600",
  delegated: "bg-[#EBF3FF] text-[#3182CE]",
  denied: "bg-[#FDE8E8] text-[#9B1C1C]",
};

const DOT_CLASSES: Record<string, string> = {
  current: "bg-[#2b7a78] animate-pulse",
  stale: "bg-gray-400",
  delegated: "bg-[#3182CE]",
  denied: "bg-[#E02424]",
};

export default function DigitalIdentitySection() {
  return (
    <section className="relative w-full bg-white py-16 px-6 md:px-12 lg:px-24 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Text & CTA */}
        <div className="lg:col-span-6 flex flex-col justify-start z-10">
          <span className="text-[#2b7a78] font-bold text-xs tracking-widest uppercase mb-4">
            DIGITAL IDENTITY
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-[52px] font-extrabold text-[#0B132B] tracking-tight leading-[1.1] mb-6">
            Know <span className="text-[#2b7a78]">who</span> or{" "}
            <span className="text-[#2b7a78]">what</span> is acting, and what
            authority actually applies.
          </h1>
          <p className="text-[#4A5568] text-base md:text-lg leading-relaxed mb-8 max-w-xl">
            Digital identity connects authoritative subject records,
            authentication state, entitlements, delegated authority, policy and
            access decisions while keeping expiry, revocation, exceptions and
            evidence visible.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#"
              className="inline-flex items-center justify-center bg-[#2b7a78] hover:bg-[#236361] text-white font-medium text-sm px-6 py-3.5 rounded-lg shadow-sm transition-colors duration-200"
            >
              Explore identity architecture
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center bg-white hover:bg-gray-50 text-[#0B132B] font-medium text-sm px-6 py-3.5 rounded-lg border border-gray-300 shadow-sm transition-colors duration-200"
            >
              Talk to Zoiko Tech
            </a>
          </div>
        </div>

        {/* Right Column: Overlapping Cards Graphic */}
        <div className="lg:col-span-6 relative w-full h-[500px] md:h-[560px] flex items-center justify-center">
          {/* Background Soft Green Container Card */}
          <div className="absolute w-[90%] h-[85%] bg-[#E6F4F1] rounded-[32px] right-4 top-1/2 -translate-y-1/2 z-0"></div>

          {/* Mapped Identity Cards */}
          {IDENTITY_CARDS.map((card) => (
            <div
              key={card.id}
              className={`absolute w-[240px] md:w-[270px] rounded-2xl p-3.5 shadow-xl transition-transform duration-300 ${
                card.isDark
                  ? "bg-[#071118] text-white border border-[#1A2E3B] shadow-2xl"
                  : "bg-white border border-gray-100"
              } ${card.positionClasses} ${card.rotationClass}`}
            >
              {card.imageSrc ? (
                <>
                  <div className="relative w-full h-[150px] rounded-xl overflow-hidden mb-3">
                    <img
                      src={card.imageSrc}
                      alt={`${card.type} graphic`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-[#0B132B] mb-0.5">
                      {card.type} · {card.identifier}
                    </span>
                    <span className="text-[11px] text-[#718096] mb-3 line-clamp-1">
                      {card.subtitle}
                    </span>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-[#A0AEC0]">
                        {card.time || ""}
                      </span>
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium ${STATUS_BADGE_CLASSES[card.statusType]}`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full mr-1.5 ${DOT_CLASSES[card.statusType]}`}
                        ></span>
                        {card.status}
                      </span>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <span className="text-[9px] tracking-wider uppercase font-bold text-[#2b7a78] block mb-1">
                    {card.type}
                  </span>
                  <p className="text-xs font-semibold text-white mb-3">
                    {card.actionTitle}
                  </p>
                  <span
                    className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-medium ${STATUS_BADGE_CLASSES[card.statusType]}`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full mr-1.5 ${DOT_CLASSES[card.statusType]}`}
                    ></span>
                    {card.status}
                  </span>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
