import React from "react";
import { Sparkles, Shield, Code2, FileText } from "lucide-react";

export default function SeparateOutcomesConnectedFoundations() {
  const features = [
    {
      icon: <Sparkles className="w-5 h-5 text-teal-300" />,
      title: "AI & governance",
      description: "Source-aware assistance and accountable approvals.",
    },
    {
      icon: <Shield className="w-5 h-5 text-teal-300" />,
      title: "Identity & security",
      description: "People, systems, delegated authority and resilience.",
    },
    {
      icon: <Code2 className="w-5 h-5 text-teal-300" />,
      title: "Developer & integration",
      description:
        "Supported interfaces, legacy coexistence and observability.",
    },
    {
      icon: <FileText className="w-5 h-5 text-teal-300" />,
      title: "Data & evidence",
      description: "Provenance, control scope and reviewed claims.",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-[#000000] via-[#0A2528] to-[#247780] text-white overflow-hidden font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading and Graphic Representation (Span 6) */}
          <div className="lg:col-span-6 flex flex-col">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] mb-12 text-white">
              Separate outcomes. <br />
              <span className="text-[#89D4D8]">Connected foundations.</span>
            </h2>

            {/* Glowing System Diagram Image */}
            <div className="w-full flex items-center justify-center">
              <img
                src="/industry/21.png"
                alt="Diagram showing separate outcomes connected to foundational modules"
                className="w-full max-w-lg h-auto object-contain"
              />
            </div>
          </div>

          {/* Right Column: Feature List Cards (Span 6) */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            {features.map((item, index) => (
              <div
                key={index}
                className="border-b border-b-teal-800/40 p-6 flex items-start gap-5 transition-colors hover:border-teal-700/60"
              >
                {/* Icon Container */}
                <div className="w-10 h-10 rounded-xl bg-[#62C6CA19] flex items-center justify-center shrink-0 shadow-inner">
                  {item.icon}
                </div>

                {/* Text Content */}
                <div>
                  <h3 className="text-lg font-bold text-white mb-1 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {item.description}
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
