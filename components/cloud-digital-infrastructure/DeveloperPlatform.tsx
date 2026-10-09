import React from "react";
import Image from "next/image";

interface PlatformCard {
  title: string;
  description: string;
}

const platformCards: PlatformCard[] = [
  {
    title: "Build",
    description: "APIs, SDKs, model APIs, webhooks.",
  },
  {
    title: "Test",
    description:
      "Sandbox, quickstarts and reference implementations, only where externally available.",
  },
  {
    title: "Operate",
    description: "Authentication, usage, metering, observability, status.",
  },
  {
    title: "Ecosystem",
    description: "Integrations, partners and marketplace, when launched.",
  },
  {
    title: "Documentation",
    description:
      "Links only to maintained public docs, API reference and quickstarts that actually exist.",
  },
  {
    title: "Sandbox / console",
    description:
      "Exposed only when external self-service access is live and supported.",
  },
  {
    title: "No invention",
    description:
      "No invented API names, SDK languages, auth protocols, rate limits, SLAs, quotas, pricing or sandbox availability.",
  },
];

export default function DeveloperPlatform() {
  return (
    <div className="w-full bg-gradient-to-r from-[#000000] via-[#0A2528] to-[#247780] text-white flex justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl flex flex-col gap-12">
        {/* Header Section */}
        <div className="flex flex-col gap-3 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Developer Platform
          </h1>
          <p className="text-base text-gray-300 leading-relaxed">
            APIs, SDKs, tooling and ecosystem services. Current state: Build, a
            technology and developer destination when ready.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {platformCards.map((card, index) => (
            <div
              key={index}
              className="rounded-2xl p-6 sm:p-8 bg-[#FFFFFF0F] border border-[#7FD0D98C] border-t-[3px] flex flex-col gap-4 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-white">{card.title}</h3>
              <p className="text-sm text-[#DCECEE] leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Graph Image Section */}
        <div className="w-full relative mt-8 flex justify-center">
          <div className="w-full max-w-7xl h-64 sm:h-80 relative">
            <Image
              src="/cloud/13.png"
              alt="Developer Platform Growth Chart"
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
