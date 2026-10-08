import React from "react";
import { Network, User, FileText, Database } from "lucide-react";

export default function FinanceMobilityProperty() {
  const cards = [
    {
      icon: Network,
      title: "Finance",
      description:
        "Operator, jurisdiction and approved financial-system scope.",
    },
    {
      icon: User,
      title: "Mobility",
      description:
        "Readiness-gated evidence; no assumed fleet telematics or transport control.",
    },
    {
      icon: FileText,
      title: "Property",
      description:
        "Zoiko Rooms retains Group attribution; actual offer/ transaction owner stays explicit.",
    },
    {
      icon: Database,
      title: "Limits",
      description:
        "No banking core, title network, coverage or universal availability.",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-[#000000] via-[#0A2528] to-[#247780] text-white overflow-hidden font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-start">
        {/* Header Section */}
        <div className="text-left mb-12 max-w-2xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] mb-3 text-white">
            Finance, mobility & property
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm">
            Distinct state models and maturity, not one blended stack.
          </p>
        </div>

        {/* 4-Column Grid Layout */}
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
                  <div className="w-10 h-10 rounded-lg bg-[#62C6CA19] border border-[#7FD0D959] flex items-center justify-center text-[#8ADCE0] mb-6 shadow-sm">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight mb-2">
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
