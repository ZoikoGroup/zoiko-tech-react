import React from "react";
import { FileText, Network, ShieldCheck } from "lucide-react";

export default function CurrentEvidenceCanChange() {
  const cards = [
    {
      icon: FileText,
      title: "Draft / review",
      description:
        "Internal unless policy explicitly permits a labeled readiness state.",
    },
    {
      icon: Network,
      title: "Current / review due",
      description:
        "All source/access approvals pass; due records downgrade or suppress under policy.",
    },
    {
      icon: ShieldCheck,
      title: "Expired / withdrawn / source unavailable",
      description:
        "Remove current treatment and search/schema/cache claims; retain internal audit history.",
    },
  ];

  return (
    <section className="relative w-full bg-gradient-to-r from-[#000000] via-[#0A2528] to-[#247780] text-white overflow-hidden font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] mb-3 text-white">
            Current evidence can change.
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm max-w-2xl">
            Review and withdrawal govern public rendering.
          </p>
        </div>

        {/* 3-Column Grid Layout with Custom Glassmorphism Containers */}
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
                className="border rounded-2xl p-6 backdrop-blur-md shadow-xl flex flex-col justify-between transition-all hover:bg-white/[0.15]"
              >
                <div>
                  <div className="w-9 h-9 rounded-xl bg-[#62C6CA19] flex items-center justify-center text-[#8ADCE0] mb-4">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mb-2">
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
