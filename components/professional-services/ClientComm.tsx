import React from "react";
import { GitBranch, User, Lock, FileText } from "lucide-react";

export default function ClientComm() {
  const cards = [
    {
      icon: <GitBranch className="w-5 h-5 text-teal-300" />,
      title: "Internal collaboration",
      description: "Approved messaging, meetings and calling.",
    },
    {
      icon: <User className="w-5 h-5 text-teal-300" />,
      title: "External participants",
      description: "Explicit client or guest state and workspace access.",
    },
    {
      icon: <Lock className="w-5 h-5 text-teal-300" />,
      title: "Sensitive engagements",
      description:
        "AI, sharing, transcript or recording restrictions only where supported.",
    },
    {
      icon: <FileText className="w-5 h-5 text-teal-300" />,
      title: "Decision capture",
      description:
        "Communication evidence does not replace the authorized review flow.",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-[#000000] via-[#0A2528] to-[#247780] text-white overflow-hidden font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-3 text-white">
            Client communication needs clear participation <br />
            boundaries.
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm">
            Zoiko Sema supports governed business communications within approved
            scope.
          </p>
        </div>

        {/* Two-Column Layout (Cards + Illustration) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: 2x2 Feature Cards Grid (Span 7) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-[#FFFFFF09] border border-[#FFFFFF30] rounded-2xl p-6 backdrop-blur-md shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-teal-950/60 border border-teal-700/40 flex items-center justify-center mb-4">
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

          {/* Right Column: Flush Image Container (Span 5) */}
          <div className="lg:col-span-5 w-full rounded-2xl overflow-hidden backdrop-blur-md">
            <img
              src="/prof/41.png"
              alt="Client communication participation boundaries and interactive meeting structure"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
