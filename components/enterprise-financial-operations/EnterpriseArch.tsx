import React from "react";
import { Network, User, FileText, Database } from "lucide-react";

export default function EnterpriseArch() {
  const cards = [
    {
      icon: Network,
      title: "Entity & context",
      description: "Legal/operating entity, market, role and business object.",
    },
    {
      icon: User,
      title: "Domain & approval",
      description:
        "Responsible HR, payroll, billing or financial system and release authority.",
    },
    {
      icon: FileText,
      title: "Handoff & result",
      description: "Downstream authoritative state, not inferred completion.",
    },
    {
      icon: Database,
      title: "Evidence & exceptions",
      description: "Changes, mismatches, review and accountable recovery.",
    },
  ];

  return (
    <section className="w-full bg-white text-gray-900 font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-start">
        {/* Header Section (Left-aligned) */}
        <div className="text-left mb-4 max-w-4xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-3 leading-[1.1]">
            Enterprise & Financial Architecture
          </h2>
          <p className="text-xs sm:text-sm text-gray-500">
            Each responsible system owns its definitive outcome.
          </p>
        </div>

        {/* Content Layout: 2x2 Cards Grid + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          {/* Left Column: 2x2 Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cards.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  style={{ backgroundColor: "#F1F8F9" }}
                  className="border border-gray-200/80 rounded-2xl p-6 shadow-sm flex flex-col justify-between text-left transition-all hover:shadow-md"
                >
                  <div className="w-full flex flex-col items-start">
                    <div className="w-9 h-9 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-teal-700 mb-4 shadow-sm">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-gray-900 tracking-tight mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-lg rounded-2xl overflow-hidden shadow-lg border border-gray-200/60 bg-gray-50">
              <img
                src="/enterprise/2.png"
                alt="Enterprise and financial architecture team working collaboratively"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
