import React from "react";
import { Code, FileText, ShieldCheck, GitBranch } from "lucide-react";

export default function IntegrateCapabilities() {
  const cards = [
    {
      icon: <Code className="w-5 h-5 text-teal-300" />,
      title: "Build",
      description:
        "Approved APIs, SDKs, models, webhooks, events and authentication.",
    },
    {
      icon: <FileText className="w-5 h-5 text-teal-300" />,
      title: "Learn",
      description: "API references, documentation and architecture guides.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-teal-300" />,
      title: "Test",
      description: "Sandbox and sample apps only when external access is live.",
    },
    {
      icon: <GitBranch className="w-5 h-5 text-teal-300" />,
      title: "Operate",
      description:
        "Supported observability, usage, status and developer support.",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-[#000000] via-[#0A2528] to-[#247780] text-white overflow-hidden font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-3 text-white">
            Integrate documented capabilities.
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm">
            Knowledge, HR, payroll, billing and communications interfaces
            require current technical evidence.
          </p>
        </div>

        {/* 4-Column Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF09] border border-[#FFFFFF30] rounded-2xl p-6 backdrop-blur-md shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#62C6CA19] flex items-center justify-center mb-4">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                  {card.title}
                </h3>
                <p className="text-gray-300 text-xs leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
