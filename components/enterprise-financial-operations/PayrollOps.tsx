import React from "react";
import { Network, User, FileText, Database } from "lucide-react";

export default function PayrollOps() {
  const cards = [
    {
      icon: Network,
      image: "/comm/7.png",
      title: "Inputs",
      description: "Period, entity, source completeness and responsible owner.",
    },
    {
      icon: User,
      image: "/comm/8.png",
      title: "Processing",
      description: "Actual supported calculation/processing boundary.",
    },
    {
      icon: FileText,
      image: "/comm/9.png",
      title: "Approval / payment handoff",
      description: "Authorized release to responsible payment system.",
    },
    {
      icon: Database,
      image: "/comm/10.png",
      title: "Definitive state",
      description:
        "Confirmed downstream outcome; no universal statutory coverage or tax-filing promise.",
    },
  ];

  return (
    <section className="w-full bg-white text-gray-900 font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-start">
        {/* Header Section (Left-aligned) */}
        <div className="text-left mb-12 max-w-2xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-3 leading-[1.1]">
            Payroll operations
          </h2>
          <p className="text-xs sm:text-sm text-gray-500">
            Preparation and payroll completion do not prove settlement.
          </p>
        </div>

        {/* 4-Column Grid Layout with Centered Content & #F1F8F9 Background */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {cards.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                style={{ backgroundColor: "#F1F8F9" }}
                className="border border-gray-200/80 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between text-start transition-all hover:shadow-md"
              >
                {/* Top Image Container */}
                <div className="w-full h-48 overflow-hidden bg-gray-100 border-b border-gray-200/60">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content Container */}
                <div className="p-6 flex flex-col items-start">
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
