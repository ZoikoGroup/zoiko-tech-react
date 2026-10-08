import React from "react";
import { Network, User, FileText, Database } from "lucide-react";

export default function DomainResponsibilities() {
  const cards = [
    {
      icon: Network,
      title: "Telecom Infrastructure",
      description:
        "Operator/service operations, without implying owned carrier networks.",
    },
    {
      icon: User,
      title: "Real-Time Communications",
      description:
        "Interaction/session behavior; no universal contact-center or emergency-calling claim.",
    },
    {
      icon: FileText,
      title: "Streaming Infrastructure",
      description:
        "Media pipeline and delivery boundary; no implied CDN, DRM or content rights.",
    },
    {
      icon: Database,
      title: "Shared controls",
      description:
        "Source-owned identity, security, state, integration and evidence.",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-[#000000] via-[#0A2528] to-[#247780] text-white overflow-hidden font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-start">
        {/* Header Section (Centered) */}
        <div className="text-start mb-12 max-w-2xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] mb-3 text-white">
            Three domains, distinct responsibilities
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm">
            Architecture first; product evidence second.
          </p>
        </div>

        {/* 4-Column Grid Layout with Centered Content & Glassmorphism */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {cards.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                style={{
                  backgroundColor: "#FFFFFF0F",
                  borderColor: "#7FD0D959",
                }}
                className="border rounded-2xl p-6 backdrop-blur-md shadow-xl flex flex-col justify-between text-center transition-all hover:bg-white/[0.15]"
              >
                <div className="w-full flex flex-col items-center">
                  <div className="w-full h-23 rounded-[10px] bg-[#62C6CA19] border border-[#7FD0D959] flex items-center justify-center text-[#8ADCE0] mb-6 shadow-inner">
                    <IconComponent className="w-10 h-10" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mb-3">
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
