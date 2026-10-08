import React from "react";
import { Network, User, FileText, Database } from "lucide-react";

export default function IntegrationAndDeveloperLayer() {
  const cards = [
    {
      icon: Network,
      title: "Build",
      description: "Approved APIs/events/webhooks/identity only.",
    },
    {
      icon: User,
      title: "Learn",
      description: "Canonical technical contracts and applicability.",
    },
    {
      icon: FileText,
      title: "Test",
      description: "Supported reference/environment only when available.",
    },
    {
      icon: Database,
      title: "Operate",
      description: "Source-owned observability, lifecycle and support.",
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
            Documented interfaces preserve source ownership.
          </p>
        </div>

        {/* Content Layout: 4-Column Cards Grid + Full Width Image Below */}
        <div className="flex flex-col gap-12 w-full">
          {/* 4-Column Cards Grid */}
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

          {/* Bottom Full-Width Image Section */}
          <div className="w-full flex justify-center">
            <div className="w-full max-w-7xl rounded-2xl overflow-hidden shadow-lg border border-gray-200/60 bg-gray-50">
              <img
                src="/enterprise/5.png"
                alt="Integration and developer layer team review and technical collaboration session"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
