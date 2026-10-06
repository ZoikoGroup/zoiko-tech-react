import React from "react";
import { FileText, Sparkles, Lock } from "lucide-react";

export default function WorkProductNeedsAnAuthoritativeSourceTrail() {
  const leftCards = [
    {
      icon: <FileText className="w-5 h-5 text-teal-300" />,
      title: "Authority & version",
      description:
        "Source owner, issuer, jurisdiction and effective or superseded state.",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-teal-300" />,
      title: "Derived content",
      description:
        "AI summaries and recommendations remain labeled and traceable.",
    },
    {
      icon: <Lock className="w-5 h-5 text-teal-300" />,
      title: "Confidentiality",
      description:
        "Source visibility follows engagement, role, workspace and purpose.",
    },
  ];

  const details = [
    { label: "Source", value: "Sample policy document &mdash; synthetic" },
    { label: "Engagement", value: "PS-101 / specimen" },
    { label: "Issuer / owner", value: "Requires confirmation" },
    { label: "Version / effective state", value: "v0.3 / draft" },
    { label: "Confidentiality", value: "Internal review only" },
    { label: "AI summary", value: "Derived / not professional advice" },
    { label: "Source completeness", value: "Needs review" },
    { label: "Reviewer", value: "Authorized role not yet confirmed" },
  ];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-[#000000] via-[#0A2528] to-[#247780] text-white overflow-hidden font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-3 text-white">
            Work product needs an authoritative <br />
            source trail.
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm">
            Version, effective period, confidentiality and derived status stay
            visible.
          </p>
        </div>

        {/* Two-Column Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: 3 Feature Cards (Span 6) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {leftCards.map((card, index) => (
              <div
                key={index}
                className={`bg-[#FFFFFF09] border border-[#FFFFFF30] rounded-2xl p-6 backdrop-blur-md shadow-xl flex flex-col justify-between ${
                  index === 2 ? "sm:col-span-2" : ""
                }`}
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

          {/* Right Column: Knowledge / Source Detail Card (Span 6) */}
          <div className="lg:col-span-6">
            <div className="bg-[#051B20D9] border border-[#75A6AC77] rounded-2xl p-6 md:p-8 backdrop-blur-md shadow-2xl">
              {/* Card Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-teal-900/60">
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  Knowledge / source <br className="hidden sm:block" />
                  detail
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
        </div>
      </div>
    </section>
  );
}
