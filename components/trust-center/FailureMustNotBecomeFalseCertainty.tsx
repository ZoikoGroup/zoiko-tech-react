import React from "react";
import { Database, RefreshCw, Lock } from "lucide-react";

export default function FailureMustNotBecomeFalseCertainty() {
  const cards = [
    {
      image: "/trust/17.png",
      icon: Database,
      title: "Empty / unavailable / no match",
      description:
        "Distinct explanations and safe area browsing; no synthesized evidence.",
    },
    {
      image: "/trust/18.png",
      icon: RefreshCw,
      title: "Loading / stale",
      description:
        "Neutral state, approved freshness context and authoritative recovery.",
    },
    {
      image: "/trust/19.png",
      icon: Lock,
      title: "Restricted records",
      description:
        "No private artifact title, content or existence leakage beyond policy.",
    },
  ];

  return (
    <section className="w-full bg-white text-gray-900 font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-3 leading-[1.1]">
            Failure must not become false certainty.
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 max-w-2xl">
            No placeholder verified, certified or operational state.
          </p>
        </div>

        {/* 3-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="bg-[#F2F8F9] border border-[#91BFC555] rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between transition-all hover:shadow-md"
              >
                {/* Image Container */}
                <div className="w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full p-6 rounded-2xl object-cover"
                  />
                </div>

                {/* Content Container */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center text-teal-700 mb-4">
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
