import React from "react";
import Image from "next/image";

interface LayerItem {
  layer: string;
  title: string;
  description: string;
  question: string;
}

const layersData: LayerItem[] = [
  {
    layer: "L1",
    title: "Workload / platform",
    description:
      "Approved Zoiko platform or customer-facing technology workload.",
    question: "What is running or integrating?",
  },
  {
    layer: "L2",
    title: "Developer / integration",
    description:
      "APIs, SDKs, model APIs, webhooks and events, authentication and integration contracts where supported.",
    question: "How does it connect?",
  },
  {
    layer: "L3",
    title: "Identity / security",
    description:
      "Authentication, entitlement and delegated authority, security controls and policy boundaries.",
    question: "Who or what is authorized?",
  },
  {
    layer: "L4",
    title: "Data / governance / evidence",
    description: "Data context, governance, evidence and policy metadata.",
    question: "What controls the state and proof?",
  },
  {
    layer: "L5",
    title: "Cloud / digital infrastructure",
    description:
      "The infrastructure foundation for Zoiko platforms and approved workload contexts.",
    question: "Where and how is it operated?",
  },
  {
    layer: "L6",
    title: "Control / transaction infrastructure",
    description:
      "CoreX-style shared control, evidence and transaction infrastructure where customer-facing.",
    question: "What shared controls coordinate state?",
  },
  {
    layer: "L7",
    title: "Observability / status / recovery",
    description:
      "Telemetry, usage and metering where available, incident and status communication, and recovery.",
    question: "How is it operated and verified?",
  },
];

export default function SevenLayersWorkloadToEvidence() {
  return (
    <div className="w-full bg-gradient-to-r from-[#000000] via-[#0A2528] to-[#247780] text-white flex justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl flex flex-col gap-12">
        {/* Header Section */}
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Seven layers, from workload to evidence
          </h1>
          <p className="text-base text-gray-300">
            Each layer answers one question.
          </p>
        </div>

        {/* Layers List */}
        <div className="flex flex-col gap-4">
          {layersData.map((item, index) => (
            <div
              key={index}
              className="w-full rounded-2xl p-6 sm:p-8 bg-[#FFFFFF0F] border border-[#7FD0D98C] border-t-[3px] flex flex-col lg:flex-row lg:items-center justify-between gap-6 transition-all duration-300"
            >
              {/* Left Column: Layer & Title */}
              <div className="lg:w-1/3 flex items-baseline gap-3">
                <span className="text-sm font-semibold tracking-wider text-gray-400">
                  {item.layer}
                </span>
                <span className="text-lg font-semibold text-white">
                  {item.title}
                </span>
              </div>

              {/* Middle Column: Description */}
              <div className="lg:w-1/2 text-sm sm:text-base text-gray-300 leading-relaxed">
                {item.description}
              </div>

              {/* Right Column: Question */}
              <div className="lg:w-1/6 text-sm font-medium text-[#7FD0D9] text-left lg:text-right">
                {item.question}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Network Image Section */}
        <div className="w-full relative mt-8 flex justify-center">
          <div className="w-full max-w-7xl h-64 sm:h-80 relative">
            <Image
              src="/cloud/8.png"
              alt="Network Infrastructure Evidence"
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
