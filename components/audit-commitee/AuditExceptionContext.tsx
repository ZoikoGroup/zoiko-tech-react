import React from "react";
import Image from "next/image";

export default function AuditExceptionContext() {
  const steps = [
    {
      title: "Establish scope",
      description: "Actual charter, period, source and accountable owner.",
    },
    {
      title: "Trace the issue",
      description: "Origin, evidence and as-of status.",
    },
    {
      title: "Review management response",
      description: "Planned action, target and supporting references.",
    },
    {
      title: "Identify review disposition",
      description: "Independent findings remain separately sourced.",
    },
    {
      title: "Record next governance step",
      description:
        "Committee question and decision source; no fake completion.",
    },
  ];

  return (
    <div className="w-full bg-white py-16 px-6 md:px-12 lg:px-16 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#241C59] tracking-tight mb-12">
          Follow an exception without losing its context.
        </h2>

        {/* 5-Column Steps Grid with Top Border Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col pt-4 border-t-2 border-[#F0596B]"
            >
              <h3 className="text-base font-bold text-[#241C59] mb-2">
                {step.title}
              </h3>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Image Container */}
        <div className="relative w-full h-[350px] md:h-[480px] overflow-hidden">
          <Image
            src="/audit/5.png"
            alt="Follow an exception without losing its context"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
