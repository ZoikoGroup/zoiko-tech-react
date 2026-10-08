import React from "react";
import { Network, User, FileText, Database } from "lucide-react";

export default function ImplementationModernization() {
  const cards = [
    {
      icon: Network,
      title: "Map",
      description: "Entity, owners, systems and definitive states.",
    },
    {
      icon: User,
      title: "Integrate",
      description: "Supported handoffs with approvals and data scope.",
    },
    {
      icon: FileText,
      title: "Pilot / reconcile",
      description: "Pending, partial, failed and mismatch paths validated.",
    },
    {
      icon: Database,
      title: "Expand",
      description:
        "Operator, market, evidence and support readiness approved before broader rollout.",
    },
  ];

  return (
    <section className="w-full bg-white text-gray-900 font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-start">
        {/* Header Section (Left-aligned) */}
        <div className="text-left mb-12 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 mb-3 leading-[1.1]">
            Implementation & modernization
          </h2>
          <p className="text-xs sm:text-sm text-gray-500">
            One bounded recurring workflow first.
          </p>
        </div>

        {/* 4-Column Grid Layout with Light Background and Horizontal Card Content Alignment */}
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
                  <div className="w-11 h-11 rounded-xl bg-white border border-gray-200/80 flex items-center justify-center text-teal-700 mb-6 shadow-sm">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 tracking-tight mb-2">
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
