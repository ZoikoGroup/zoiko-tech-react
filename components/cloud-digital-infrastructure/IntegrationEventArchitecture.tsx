import React from "react";
import Image from "next/image";

interface ArchitectureCard {
  title: string;
  description: string;
}

const architectureCards: ArchitectureCard[] = [
  {
    title: "API request",
    description:
      "Authenticated actor or system, endpoint or operation at approved abstraction, correlation ID, result or error.",
  },
  {
    title: "Webhook / event",
    description:
      "Event type, source, timestamp, delivery state. Signature, retry and dead-letter concepts only if documented and supported.",
  },
  {
    title: "SDK / client",
    description: "Approved SDK or language only when publicly documented.",
  },
  {
    title: "Model interface",
    description:
      "Used only when a model API is publicly supported. No provider, model or version assumptions.",
  },
  {
    title: "Downstream handoff",
    description:
      "Technical handoff state stays separate from downstream authoritative business state.",
  },
  {
    title: "Versioning",
    description:
      "API and event version and deprecation policy only when documentation exists.",
  },
  {
    title: "Error / recovery",
    description:
      "Retry, support and escalation only within the supported contract.",
  },
];

export default function IntegrationEventArchitecture() {
  return (
    <div className="w-full bg-gradient-to-r from-[#000000] via-[#0A2528] to-[#247780] text-white flex justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl flex flex-col gap-12">
        {/* Header Section */}
        <div className="flex flex-col gap-3 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Integration and event architecture
          </h1>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {architectureCards.map((card, index) => (
            <div
              key={index}
              className="rounded-2xl p-6 sm:p-8 bg-[#FFFFFF0F] border border-[#7FD0D98C] border-t-[3px] flex flex-col gap-4 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-white">{card.title}</h3>
              <p className="text-[15px] text-[#DCECEE] leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Image Section */}
        <div className="w-full relative mt-8 flex justify-center">
          <div className="w-full max-w-7xl h-64 sm:h-80 relative">
            <Image
              src="/cloud/25.png"
              alt="Integration and event architecture diagram"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
