import React from "react";
import Image from "next/image";

export default function ComplianceProgression() {
  const steps = [
    {
      number: "01",
      title: "Define Scope & Applicability",
    },
    {
      number: "02",
      title: "Assign Owners & Accountability",
    },
    {
      number: "03",
      title: "Review Controls & Policies",
    },
    {
      number: "04",
      title: "Manage Exceptions & Remediation",
    },
    {
      number: "05",
      title: "Preserve Evidence & Review History",
    },
    {
      number: "06",
      title: "Report Oversight & Escalation",
    },
  ];

  const cards = [
    {
      image: "/audit/2.png",
      title: "Understand the scope",
      description:
        "Source version, entity and jurisdiction before interpreting applicability.",
    },
    {
      image: "/audit/3.png",
      title: "Coordinate accountability",
      description:
        "Owners and reviewers remain separate, with clear next actions.",
    },
    {
      image: "/audit/4.png",
      title: "Prepare oversight",
      description:
        "Dated evidence and unresolved decisions, without false all-clear signals.",
    },
  ];

  return (
    <div className="w-full bg-white py-16 px-6 md:px-12 lg:px-16 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#241C59] tracking-tight mb-12">
          A progression of responsibilities. <br />
          Not a compliance score.
        </h2>

        {/* 6-Column Steps Progression Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col pt-3 border-t-2 border-[#F0596B]"
            >
              <span className="text-xs font-mono font-semibold text-[#F0596B] mb-1">
                {step.number}
              </span>
              <h3 className="text-xs md:text-sm font-bold text-[#241C59] leading-snug">
                {step.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#FAF9FD] border border-[#D5CCE7] rounded-xl flex flex-col shadow-sm"
            >
              {/* Image Container */}
              <div className="relative w-full rounded-t-xl h-44 mb-6 overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-col p-6">
                <h3 className="text-xl font-bold text-[#241C59] mb-3 leading-snug">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
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
