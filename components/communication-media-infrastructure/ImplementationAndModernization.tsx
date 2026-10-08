import React from "react";
import { Network, User, FileText, Database } from "lucide-react";

export default function ImplementationAndModernization() {
  const cards = [
    {
      icon: Network,
      title: "Map",
      description:
        "Participants, service/media context, provider and authoritative systems.",
    },
    {
      icon: User,
      title: "Integrate",
      description: "Approved interfaces, authority and control boundaries.",
    },
    {
      icon: FileText,
      title: "Pilot / validate",
      description:
        "Check pending, failed, degraded and mismatched downstream state.",
    },
    {
      icon: Database,
      title: "Operate / expand",
      description:
        "Evidence and support readiness before adding markets or workflows.",
    },
  ];

  return (
    <section className="w-full bg-white text-gray-900 font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-start">
        {/* Header Section (Left-aligned) */}
        <div className="text-left mb-12 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-3 leading-[1.1]">
            Implementation & modernization
          </h2>
          <p className="text-xs sm:text-sm text-gray-500">
            One bounded communication or media workflow first.
          </p>
        </div>

        {/* 4-Column Grid Layout with Light Containers & Start-Aligned Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
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
      </div>
    </section>
  );
}
