import React from "react";
import { FileText, UserCheck, GitBranch, ShieldCheck } from "lucide-react";

export default function ConnectKnowledgeReviewAndOperatingWork() {
  const cards = [
    {
      icon: <FileText className="w-5 h-5 text-teal-300" />,
      title: "Knowledge separated from work",
      description:
        "Source material, engagement context and deliverables live in disconnected systems.",
    },
    {
      icon: <UserCheck className="w-5 h-5 text-teal-300" />,
      title: "Review outside the workflow",
      description:
        "Professional output moves without a clear reviewer, approval or issue state.",
    },
    {
      icon: <GitBranch className="w-5 h-5 text-teal-300" />,
      title: "Fragmented operations",
      description:
        "Workforce context, billing and client communication operate separately.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-teal-300" />,
      title: "Evidence-heavy specialist work",
      description:
        "Jurisdiction, effective period and source interpretation need traceability.",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-[#000000] via-[#0A2528] to-[#247780] text-white overflow-hidden font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-3 text-white">
            Connect knowledge, review and <br />
            operating work.
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm">
            Four recurring problems shape the professional-services
            architecture.
          </p>
        </div>

        {/* 4 Columns Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {cards.map((item, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF09] border border-[#FFFFFF30] rounded-2xl p-6 flex flex-col justify-between backdrop-blur-md shadow-xl transition-colors hover:border-teal-700/60"
            >
              <div>
                {/* Icon Container */}
                <div className="w-10 h-10 rounded-xl bg-teal-950/60 border border-teal-700/40 flex items-center justify-center mb-4">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Flush Image Container */}
        <div className="w-full rounded-2xl overflow-hidden backdrop-blur-md">
          <img
            src="/prof/37.png"
            alt="Team collaborating on professional services architecture and operational workflow"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
