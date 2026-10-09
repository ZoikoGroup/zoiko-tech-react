import React from "react";
import Image from "next/image";

export default function AuditPrioritiesGrid() {
  const cards = [
    {
      image: "/audit/2.png",
      title: "Recognize what needs attention",
      description:
        "Unresolved issues and decision context without a false all-clear score.",
    },
    {
      image: "/audit/3.png",
      title: "Trace the basis for a position",
      description:
        "Source, period, submitting party, reviewer and currentness travel together.",
    },
    {
      image: "/audit/4.png",
      title: "Keep the next action accountable",
      description:
        "Management response and committee question remain distinct from independent closure.",
    },
  ];

  return (
    <div className="w-full bg-white py-16 px-6 md:px-12 lg:px-16 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#241C59] tracking-tight mb-10">
          Priorities, basis and accountability.
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#FAF9FD] border border-[#B9B3D1] rounded-2xl p-6 flex flex-col shadow-sm"
            >
              {/* Image Container */}
              <div className="relative w-full h-48 mb-6 rounded-xl overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-col">
                <h3 className="text-xl font-bold text-[#241C59] mb-3 leading-snug">
                  {card.title}
                </h3>
                <p className="text-[#241C59] text-sm md:text-base leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
