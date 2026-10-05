import React from "react";
import { User, FileText, ShieldCheck } from "lucide-react";

export default function ProfessionalApprovalAndReleaseAreDistinct() {
  const details = [
    { label: "Work product", value: "Synthetic deliverable / version 0.3" },
    { label: "Source set", value: "Incomplete / needs confirmation" },
    { label: "AI contribution", value: "Prepare / derived draft" },
    { label: "Reviewer", value: "Authorized professional &mdash; specimen" },
    { label: "Decision", value: "Changes required" },
    { label: "Release state", value: "Not authorized" },
    { label: "History", value: "Draft &rarr; review &rarr; changes required" },
  ];

  const rightCards = [
    {
      icon: <User className="w-5 h-5 text-teal-300" />,
      title: "Authority & scope",
      description: "Named role, specific work product and professional scope.",
    },
    {
      icon: <FileText className="w-5 h-5 text-teal-300" />,
      title: "Version integrity",
      description: "Later edits require a new review state.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-teal-300" />,
      title: "Decision & evidence",
      description:
        "Approval, conditions, rejection or escalation recorded with source context.",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-[#000000] via-[#0A2528] to-[#247780] text-white overflow-hidden font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-3 text-white">
            Professional approval and release are <br />
            distinct.
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm">
            Preserve the reviewed version, conditions and authorized delivery
            decision.
          </p>
        </div>

        {/* Two-Column Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Review / release view Card (Span 7) */}
          <div className="lg:col-span-7">
            <div className="bg-[#051B20D9] border border-[#75A6AC77] rounded-2xl p-6 md:p-8 backdrop-blur-md shadow-2xl">
              {/* Card Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-teal-900/60">
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  Review / release <br className="hidden sm:block" />
                  view
                </h3>
                <span className="text-[11px] font-mono tracking-wider bg-teal-950/80 border border-teal-700/50 text-teal-300 px-3 py-1 rounded-full">
                  Synthetic specimen
                </span>
              </div>

              {/* Details List */}
              <div className="space-y-4">
                {details.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-teal-900/40 text-xs sm:text-sm"
                  >
                    <span className="text-gray-400 font-medium mb-1 sm:mb-0">
                      {item.label}
                    </span>
                    <span className="text-gray-200 font-normal sm:text-right">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: 3 Feature Cards (Span 5) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {rightCards.map((card, index) => (
              <div
                key={index}
                className="bg-[#FFFFFF09] border border-[#FFFFFF30] rounded-2xl p-6 backdrop-blur-md shadow-xl"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#62C6CA19] border border-teal-700/40 flex items-center justify-center mb-4">
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
      </div>
    </section>
  );
}
