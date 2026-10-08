import React from "react";
import { Network, User, FileText, Database } from "lucide-react";

export default function ReliabilityOperationalEvidence() {
  const cards = [
    {
      icon: Network,
      title: "State",
      description: "Source-owned definitive status.",
    },
    {
      icon: User,
      title: "Dependency",
      description: "Responsible provider/system availability.",
    },
    {
      icon: FileText,
      title: "Recovery",
      description: "Supported escalation and safe retry.",
    },
    {
      icon: Database,
      title: "Evidence",
      description:
        "No invented uptime, SLA, operational performance or deployment scale.",
    },
  ];

  return (
    <section className="w-full bg-white text-gray-900 font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-start">
        {/* Header Section */}
        <div className="text-left mb-12 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 mb-3 leading-[1.1]">
            Reliability & operational evidence
          </h2>
          <p className="text-xs sm:text-sm text-gray-500">
            Unknown, partial and provider-dependent states are
            first-class.
          </p>
        </div>

        {/* 4-Column Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-12">
          {cards.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                style={{ backgroundColor: "#F1F8F9" }}
                className="border border-gray-200/80 rounded-2xl p-6 shadow-sm flex flex-col justify-between transition-all hover:shadow-md text-left"
              >
                <div className="w-full flex flex-col items-start">
                  <div className="w-10 h-10 rounded-lg bg-white border border-gray-200/80 flex items-center justify-center text-teal-700 mb-6 shadow-sm">
                    <IconComponent className="w-5 h-5" />
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

        {/* Bottom Image Section */}
        <div className="w-full rounded-2xl overflow-hidden shadow-lg border border-gray-200/80 bg-gray-50">
          <img
            src="/ind/4.png"
            alt="Reliability and operational evidence team meeting"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
