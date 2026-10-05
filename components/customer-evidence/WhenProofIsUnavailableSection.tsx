import React from "react";
import {
  FileText,
  Lock,
  User,
  GitBranch,
  ShieldAlert,
  Building,
} from "lucide-react";

export default function WhenProofIsUnavailableSection() {
  const cards = [
    {
      icon: <FileText className="w-5 h-5 text-teal-300" />,
      title: "No public evidence",
      description:
        "Show an honest empty state and architecture or consultation routes.",
    },
    {
      icon: <Lock className="w-5 h-5 text-teal-300" />,
      title: "Permission pending / restricted",
      description:
        "No identity, logo, quote or metric until the relevant permission permits publication.",
    },
    {
      icon: <User className="w-5 h-5 text-teal-300" />,
      title: "Anonymized approved",
      description: "Use only the separately approved descriptor and scope.",
    },
    {
      icon: <GitBranch className="w-5 h-5 text-teal-300" />,
      title: "Withdrawn / expired",
      description:
        "Suppress affected claims; preserve a story only if remaining evidence is independently approved.",
    },
    {
      icon: <ShieldAlert className="w-5 h-5 text-teal-300" />,
      title: "Source conflict / registry error",
      description:
        "Fail closed while the factual basis or approval cannot be verified.",
    },
    {
      icon: <Building className="w-5 h-5 text-teal-300" />,
      title: "Renamed / retired technology",
      description:
        "Maintain historical accuracy with approved current-context notes.",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-[#000000] via-[#0A2528] to-[#247780] text-white overflow-hidden font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] mb-3 text-white">
            When proof is unavailable, keep the <br />
            boundary clear.
          </h2>
          <p className="text-gray-300 text-sm md:text-base max-w-xl">
            Permission and freshness determine what can be published.
          </p>
        </div>

        {/* 6 Cards Grid (3 columns x 2 rows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {cards.map((item, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF09] border border-[#FFFFFF30] rounded-2xl p-6 backdrop-blur-sm shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-teal-950/80 border border-teal-700/40 flex items-center justify-center mb-5 shadow-inner">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-white mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Flush Bottom Image Section */}
        <div className="w-full rounded-2xl overflow-hidden border border-teal-800/40 shadow-2xl bg-[#051517]">
          <img
            src="/customer/15.png"
            alt="Team collaborating in a modern office reviewing data boundaries"
            className="w-full h-auto object-cover opacity-95"
          />
        </div>
      </div>
    </section>
  );
}
