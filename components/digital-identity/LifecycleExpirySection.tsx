import React from "react";

interface SeasonCard {
  number: string;
  badgeText: string;
  badgeBg: string;
  badgeColor: string;
  description: string;
  dotColor: string;
}

const SEASON_CARDS: SeasonCard[] = [
  {
    number: "01",
    badgeText: "New / pending",
    badgeBg: "bg-white",
    badgeColor: "text-[#0B132B]",
    description: "No access before activation.",
    dotColor: "bg-[#2b7a78]",
  },
  {
    number: "02",
    badgeText: "Active",
    badgeBg: "bg-white",
    badgeColor: "text-[#2b7a78]",
    description: "Source-backed current authority.",
    dotColor: "bg-[#2b7a78]",
  },
  {
    number: "03",
    badgeText: "Changed",
    badgeBg: "bg-white",
    badgeColor: "text-[#2b7a78]",
    description: "Downstream decisions refresh.",
    dotColor: "bg-[#2b7a78]",
  },
  {
    number: "04",
    badgeText: "Suspended",
    badgeBg: "bg-[#FEF3C7]",
    badgeColor: "text-[#D97706]",
    description: "Dependent access blocked or reviewed.",
    dotColor: "bg-[#D97706]",
  },
  {
    number: "05",
    badgeText: "Expired",
    badgeBg: "bg-[#FEF3C7]",
    badgeColor: "text-[#D97706]",
    description: "Never treated as current.",
    dotColor: "bg-[#D97706]",
  },
  {
    number: "06",
    badgeText: "Revoked",
    badgeBg: "bg-[#FDE8E8]",
    badgeColor: "text-[#E02424]",
    description: "Blocked; revocation evidence kept.",
    dotColor: "bg-[#E02424]",
  },
];

export default function LifecycleExpirySection() {
  return (
    <section className="relative w-full bg-gradient-to-r from-[#001315BF] to-[#001315E0] py-24 px-6 md:px-12 lg:px-20 font-sans overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/digital/21.jpg"
          alt="Lifecycle background forest"
          className="w-full h-full object-cover opacity-20 object-center"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-start">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-[#34D4CA] font-bold text-xs tracking-widest uppercase mb-4">
            LIFECYCLE, EXPIRY & REVOCATION
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-[52px] font-extrabold text-white tracking-tight leading-[1.1] mb-6">
            Authority has seasons. Every one of them is visible.
          </h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            Anything expired, revoked or stale fails closed. Reinforcement
            always needs fresh confirmation from the source.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 w-full">
          {SEASON_CARDS.map((card, index) => (
            <div
              key={index}
              className="bg-[#00191EB8] border border-[#34D4CA73] rounded-2xl p-5 flex flex-col justify-between shadow-lg backdrop-blur-sm"
            >
              <div>
                <span className="text-[#4DDCAD] font-bold text-sm block mb-4">
                  {card.number}
                </span>
                <div
                  className={`inline-flex items-center px-2.5 py-1 w-full rounded-full text-xs font-semibold ${card.badgeBg} ${card.badgeColor} mb-4`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${card.dotColor} mr-1.5`}
                  ></span>
                  {card.badgeText}
                </div>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed font-medium">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
