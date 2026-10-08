import React from "react";
import { Network, User, FileText, Database } from "lucide-react";

export default function SecurityPrivacyAndIdentity() {
  const cards = [
    {
      image: "/comm/16.png",
      icon: Network,
      title: "Participant identity",
      description: "Supported role, workspace and authority boundaries.",
      subText: "Illustrative stock photo · Not product/deployment evidence.",
    },
    {
      image: "/comm/17.png",
      icon: User,
      title: "Sensitive content",
      description:
        "Privacy-aware handling; no exposed real conversations or credentials.",
      subText: "Illustrative stock photo · Not product/deployment evidence.",
    },
    {
      image: "/comm/18.png",
      icon: FileText,
      title: "Access",
      description: "Least-privilege and entitlement at actual product scope.",
      subText: "Illustrative stock photo · Not product/deployment evidence.",
    },
    {
      image: "/comm/19.png",
      icon: Database,
      title: "Trust evidence",
      description:
        "Approved Security/Privacy sources; no invented certification or retention promise.",
      subText: "Illustrative stock photo · Not product/deployment evidence.",
    },
  ];

  return (
    <section className="w-full bg-white text-gray-900 font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-start">
        {/* Header Section (Left-aligned) */}
        <div className="text-left mb-12 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-3 leading-[1.1]">
            Security, privacy & identity
          </h2>
          <p className="text-xs sm:text-sm text-gray-500">
            Minimum necessary participant and content context.
          </p>
        </div>

        {/* 4-Column Grid Layout with Start/Left-Aligned Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {cards.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                style={{ backgroundColor: "#F1F8F9" }}
                className="border border-gray-200/80 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between text-left transition-all hover:shadow-md"
              >
                {/* Image Container */}
                <div className="w-full h-44 bg-gray-100 overflow-hidden border-b border-gray-200/80">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content Container (Start alignment) */}
                <div className="p-6 flex flex-col flex-grow justify-between items-start">
                  <div className="w-full flex flex-col items-start">
                    <div className="w-9 h-9 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-teal-700 mb-4 shadow-sm">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-gray-900 tracking-tight mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>
                  {item.subText && (
                    <p className="text-[10px] text-gray-400 italic leading-tight">
                      {item.subText}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
