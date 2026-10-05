import React from "react";
import { Code, Building2, ShieldCheck, FileText } from "lucide-react";

export default function ArchitectureEvidenceSection() {
  const cards = [
    {
      icon: <Code className="w-5 h-5 text-teal-300" />,
      title: "Documented systems",
      description:
        "Only actual approved integrations and permitted high-level data flows.",
    },
    {
      icon: <Building2 className="w-5 h-5 text-teal-300" />,
      title: "Environment & market",
      description:
        "Pilot, production and geography labels require approved scope.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-teal-300" />,
      title: "Security & identity",
      description:
        "Public-safe facts only; omit sensitive topology and controls.",
    },
    {
      icon: <FileText className="w-5 h-5 text-teal-300" />,
      title: "Historical context",
      description:
        "Preserve deployment truth when products or operators are renamed.",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-[#000000] via-[#0A2528] to-[#247780] text-white overflow-hidden font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-12 max-w-3xl">
          <h2 className="text-4xl sm:text-5xl  font-bold tracking-tight leading-[1.1] mb-3 text-white">
            Architecture evidence shows the <br />
            actual deployment.
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            Approved technical context should help a buyer evaluate relevance
            without exposing sensitive details.
          </p>
        </div>

        {/* Grid Layout: Left Cards (2x2) vs Right Illustration */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: 2x2 Feature Cards (Span 7) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
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

          {/* Right Column: Isometric Illustration (Span 5) */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="w-full max-w-md aspect-square flex items-center justify-center">
              <img
                src="/customer/14.png"
                alt="Architecture Evidence Deployment Illustration"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
