import React from "react";
import { Code, FileText, ShieldCheck, BarChart2 } from "lucide-react";

export default function ConnectDocumentedInterfaces() {
  const cards = [
    {
      icon: <Code className="w-5 h-5 text-teal-300" />,
      title: "Build",
      description: "Approved APIs, SDKs, events, webhooks and authentication.",
    },
    {
      icon: <FileText className="w-5 h-5 text-teal-300" />,
      title: "Learn",
      description:
        "Documentation, references, quickstarts and architecture guides.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-teal-300" />,
      title: "Test",
      description:
        "Sample apps and sandbox access only when externally available.",
    },
    {
      icon: <BarChart2 className="w-5 h-5 text-teal-300" />,
      title: "Operate",
      description:
        "Documented observability, status, usage and developer support.",
    },
  ];

  const specRows = [
    {
      label: "Source → target",
      value: "Sample media workflow → sample delivery system",
    },
    { label: "API / event state", value: "Awaiting authoritative response" },
    { label: "Last successful event", value: "Specimen timestamp only" },
    {
      label: "Failure / retry context",
      value: "Assigned integration owner review",
    },
    { label: "Sensitive payloads", value: "Not displayed" },
  ];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-[#000000] via-[#0A2528] to-[#247780] text-white overflow-hidden font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex flex-col justify-between">
      {/* Top Main Content Container */}
      <div className="max-w-7xl mx-auto w-full">
        {/* Main Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-4 text-white">
          Connect documented interfaces <br />
          to visible operating states.
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-sm md:text-base mb-12 max-w-2xl">
          Identify the source, target, identity and authoritative response for
          each supported handoff.
        </p>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {cards.map((item, index) => (
            <div
              key={index}
              className="bg-[#0A2528]/80 border border-teal-800/40 rounded-2xl p-6 flex flex-col justify-start backdrop-blur-sm shadow-xl"
            >
              {/* Icon Container */}
              <div className="w-10 h-10 rounded-lg bg-teal-950/80 border border-teal-700/40 flex items-center justify-center mb-6 shadow-inner">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Integration Health / Specimen Spec Panel */}
        <div className="bg-[#0A2528]/80 border border-teal-800/40 rounded-2xl p-6 md:p-8 backdrop-blur-sm shadow-xl">
          {/* Panel Header */}
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-teal-800/40">
            <h3 className="text-base font-bold text-white tracking-tight">
              Integration health / <br />
              specimen
            </h3>
            <span className="text-[10px] font-medium px-3 py-1 rounded-full border border-teal-700/40 text-teal-300 bg-teal-950/60">
              Synthetic specimen
            </span>
          </div>

          {/* Spec Rows */}
          <div className="flex flex-col gap-6">
            {specRows.map((row, index) => (
              <div
                key={index}
                className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 ${
                  index !== specRows.length - 1
                    ? "pb-5 border-b border-teal-900/60"
                    : ""
                }`}
              >
                <span className="text-xs md:text-sm text-gray-400 font-medium">
                  {row.label}
                </span>
                <span className="text-xs md:text-sm text-gray-200 font-medium sm:text-right">
                  {row.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
