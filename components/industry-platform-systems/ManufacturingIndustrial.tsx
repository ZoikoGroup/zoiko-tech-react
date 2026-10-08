import React from "react";
import { Settings, Database, Cpu, ShieldAlert } from "lucide-react";

export default function ManufacturingIndustrial() {
  const cards = [
    {
      image: "/comm/11.png",
      icon: Settings,
      title: "Operating context",
      description: "Approved workflow and responsible system.",
    },
    {
      image: "/comm/12.png",
      icon: Database,
      title: "Data / policy",
      description: "Actual source records and control authority.",
    },
    {
      image: "/comm/13.png",
      icon: Cpu,
      title: "Integration",
      description: "Only documented enterprise connections.",
    },
    {
      image: "/comm/14.png",
      icon: ShieldAlert,
      title: "Do not infer",
      description:
        "No universal IoT, SCADA/OT, MES or digital-twin capability.",
    },
  ];

  return (
    <section className="w-full bg-white text-gray-900 font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-start">
        {/* Header Section */}
        <div className="text-left mb-12 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 mb-3 leading-[1.1]">
            Manufacturing & industrial
          </h2>
          <p className="text-xs sm:text-sm text-gray-500">
            Architecture available; public product evidence pending.
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
                className="border border-gray-200/80 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between transition-all hover:shadow-md text-left"
              >
                {/* Card Top Image */}
                <div className="w-full h-48 overflow-hidden bg-gray-100 border-b border-gray-200/80">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Card Body with Left Alignment */}
                <div className="p-6 flex flex-col items-start text-left">
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
