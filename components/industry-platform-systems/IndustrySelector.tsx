import React from "react";
import { Network, User, FileText, Database } from "lucide-react";

export default function IndustrySelector() {
  const cards = [
    {
      image: "/comm/2.png",
      icon: Network,
      title: "Telecom / healthcare",
      description: "Distinct operational and sensitive- data boundaries.",
    },
    {
      image: "/comm/3.png",
      icon: User,
      title: "Finance / mobility / property",
      description: "Separate operators, records and public readiness.",
    },
    {
      image: "/comm/4.png",
      icon: FileText,
      title: "Industrial / utilities",
      description:
        "Architecture-first pathways, no inferred OT or grid control.",
    },
    {
      image: "/comm/5.png",
      icon: Database,
      title: "Public sector",
      description: "Accessible, auditable and jurisdiction- aware systems.",
    },
  ];

  return (
    <section className="w-full bg-white text-gray-900 font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-start">
        {/* Header Section */}
        <div className="text-left mb-12 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 mb-3 leading-[1.1]">
            Choose the industry system
          </h2>
          <p className="text-xs sm:text-sm text-gray-500">
            Architecture first; platform evidence only where approved.
          </p>
        </div>

        {/* 4-Column Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {cards.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                style={{ backgroundColor: "#F1F8F9" }}
                className="border border-gray-200/80 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between transition-all hover:shadow-md text-center"
              >
                {/* Card Top Image */}
                <div className="w-full h-48 overflow-hidden bg-gray-100 border-b border-gray-200/80">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Card Body with Centered Alignment */}
                <div className="p-6 flex flex-col items-start text-start">
                  <div className="w-11 h-11 rounded-xl bg-white border border-gray-200/80 flex items-center justify-center text-teal-700 mb-4 shadow-sm">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 tracking-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
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
