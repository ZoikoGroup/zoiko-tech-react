import React from "react";
import { FileText, Lock, Network } from "lucide-react";

export default function TheTrustEvidenceCollection() {
  const cards = [
    {
      icon: FileText,
      title: "Record context",
      description:
        "Exact title/type, trust area, status, scope, owner/source and reviewed/expiry dates.",
    },
    {
      icon: Lock,
      title: "Access tiers",
      description:
        "Public, controlled, not published or unavailable only when established.",
    },
    {
      icon: Network,
      title: "Source changes",
      description:
        "A summary must downgrade or disappear when its authority narrows, expires or withdraws.",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-[#000000] via-[#0A2528] to-[#247780] text-white overflow-hidden font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] mb-3 text-white">
            The trust evidence collection.
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm max-w-2xl">
            Public and controlled artifacts require safe metadata and current
            approval.
          </p>
        </div>

        {/* 3-Column Grid Layout with Centered Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                style={{
                  backgroundColor: "#FFFFFF0F",
                  borderColor: "#7FD0D959",
                }}
                className="border rounded-2xl p-8 backdrop-blur-md shadow-xl flex flex-col items-center text-center justify-between transition-all hover:bg-white/[0.15]"
              >
                <div className="w-full flex flex-col items-center">
                  <div className="w-14 h-14 rounded-2xl bg-[#62C6CA19] flex items-center justify-center text-[#8ADCE0] mb-6">
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-sm">
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
