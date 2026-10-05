import React from "react";
import {
  FileText,
  Database,
  Sparkles,
  GitBranch,
  ShieldCheck,
  Users,
} from "lucide-react";

export default function SpecialistIntelligenceSupportsProfessionalJudgment() {
  const cards = [
    {
      icon: <FileText className="w-5 h-5 text-teal-700" />,
      title: "Retrieve / summarize",
      description: "Authorized sources and visible source references.",
    },
    {
      icon: <Database className="w-5 h-5 text-teal-700" />,
      title: "Compare / extract",
      description: "Highlight supported facts or differences with provenance.",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-teal-700" />,
      title: "Recommend",
      description: "A derived suggestion; an authorized professional decides.",
    },
    {
      icon: <GitBranch className="w-5 h-5 text-teal-700" />,
      title: "Prepare",
      description: "Draft work or structured evidence for review.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-teal-700" />,
      title: "Bounded workflow",
      description: "Approved low-risk operational actions only.",
    },
    {
      icon: <Users className="w-5 h-5 text-teal-700" />,
      title: "Limits & review",
      description:
        "Insufficient or conflicting evidence routes to professional review.",
    },
  ];

  return (
    <section className="w-full bg-white text-gray-900 font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-3 leading-[1.1]">
            Specialist intelligence supports <br />
            professional judgment.
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 max-w-2xl">
            ZoikoLogia, Kriton and Massarius are architecture references where
            public-approved; exact capabilities remain evidence-gates.
          </p>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((item, index) => (
            <div
              key={index}
              className="bg-[#F3F8F8] border border-gray-200 rounded-2xl p-8 shadow-lg flex flex-col justify-between transition-all hover:shadow-xl"
            >
              <div>
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-[#DEEFEF] flex items-center justify-center mb-6">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 tracking-tight mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
