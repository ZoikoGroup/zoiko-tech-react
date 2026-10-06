import React from "react";
import {
  Lock,
  Sparkles,
  User,
  FileText,
  ShieldCheck,
  GitBranch,
} from "lucide-react";

export default function ConfidentialityWorkflow() {
  const cards = [
    {
      icon: <Lock className="w-5 h-5 text-teal-300" />,
      title: "Need-to-know",
      description: "Role, engagement, workspace and client scope.",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-teal-300" />,
      title: "Sensitive workspaces",
      description:
        "Restrict AI, sharing, guests or export where the selected product supports it.",
    },
    {
      icon: <User className="w-5 h-5 text-teal-300" />,
      title: "Client confidentiality",
      description:
        "Minimum necessary data and clear external-participant boundaries.",
    },
    {
      icon: <FileText className="w-5 h-5 text-teal-300" />,
      title: "Retention & audit",
      description:
        "Evidence-supported rules and material access / review / release history.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-teal-300" />,
      title: "Professional secrecy",
      description:
        "Technology does not automatically create or preserve legal privilege.",
    },
    {
      icon: <GitBranch className="w-5 h-5 text-teal-300" />,
      title: "Incident response",
      description:
        "Authoritative security, support, status and disclosure routes.",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-[#000000] via-[#0A2528] to-[#247780] text-white overflow-hidden font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-3 text-white">
            Confidentiality belongs throughout <br />
            the workflow.
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm">
            Purpose limitation, need-to-know access and supported controls
            preserve sensitive engagement boundaries.
          </p>
        </div>

        {/* 3x2 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
