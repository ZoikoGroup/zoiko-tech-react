import React from "react";
import { Network, User, FileText, Database } from "lucide-react";

export default function IntegrationAndDeveloperLayer() {
  const cards = [
    {
      icon: Network,
      title: "Build",
      description:
        "Documented APIs/events/webhooks/auth; no invented endpoints.",
    },
    {
      icon: User,
      title: "Learn",
      description: "Canonical reference and architecture guides.",
    },
    {
      icon: FileText,
      title: "Test",
      description: "Actual supported environments/examples only.",
    },
    {
      icon: Database,
      title: "Operate",
      description:
        "Source-owned observability, lifecycle, status and developer support.",
    },
  ];

  return (
    <section className="w-full bg-white text-gray-900 font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-start">
        {/* Header Section (Left-aligned) */}
        <div className="text-left mb-12 max-w-2xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-3 leading-[1.1]">
            Integration & developer layer
          </h2>
          <p className="text-xs sm:text-sm text-gray-500">
            Only approved public interfaces support implementation.
          </p>
        </div>

        {/* 4-Column Grid Layout with Cards at the Top */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-12">
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

        {/* Full-Width Image Container at the Bottom */}
        <div className="w-full rounded-2xl overflow-hidden shadow-md border border-gray-200/80 bg-gray-50">
          <img
            src="/comm/20.png"
            alt="Integration and developer layer team working in an office environment"
            className="w-full h-auto object-cover max-h-[500px]"
          />
        </div>
      </div>
    </section>
  );
}
