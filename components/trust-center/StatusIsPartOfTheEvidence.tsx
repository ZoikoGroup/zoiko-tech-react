import React from "react";
import {
  FileText,
  Cpu,
  CheckCircle,
  Lock,
  ShieldCheck,
  RefreshCw,
} from "lucide-react";

export default function StatusIsPartOfTheEvidence() {
  const cards = [
    {
      icon: FileText,
      title: "Verified / independent assurance",
      description:
        "Current external evidence for exact issuer, scope and period.",
    },
    {
      icon: Cpu,
      title: "Implemented / current architecture",
      description:
        "Implementation and approved design are different; neither automatically means certified.",
    },
    {
      icon: CheckCircle,
      title: "Readiness / phased / conditional",
      description:
        "Validation, included scope and deployment/jurisdiction dependencies remain explicit.",
    },
    {
      icon: Lock,
      title: "Controlled access",
      description:
        "Safe metadata only; existence and request path require approved records.",
    },
    {
      icon: ShieldCheck,
      title: "Not published / unavailable",
      description:
        "No approved evidence for requested scope; no implied verified state.",
    },
    {
      icon: RefreshCw,
      title: "Superceded / expired",
      description:
        "Remove current styling and provide approved replacement/history.",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-[#000000] via-[#0A2528] to-[#247780] text-white overflow-hidden font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] mb-3 text-white">
            Status is part of the evidence.
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm max-w-2xl">
            These are definitions, not claimed Zoiko certifications or
            implementation states.
          </p>
        </div>

        {/* 3-Column Grid Layout with Custom Glassmorphism Containers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                style={{
                  backgroundColor: "#FFFFFF07",
                  borderColor: "#7FD0D959",
                }}
                className="border rounded-2xl p-6 backdrop-blur-md shadow-xl flex flex-col justify-between transition-all hover:bg-white/[0.15]"
              >
                <div>
                  <div className="w-9 h-9 rounded-xl bg-[#62C6CA19] flex items-center justify-center text-[#6FD0F6] mb-6">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
