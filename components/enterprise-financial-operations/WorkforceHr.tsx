import React from "react";
import { Network, User, FileText, Database } from "lucide-react";

export default function WorkforceHr() {
  const cards = [
    {
      icon: Network,
      title: "Worker source",
      description: "Actual approved HR/workforce record.",
    },
    {
      icon: User,
      title: "Role & permission",
      description: "Product-supported authority only.",
    },
    {
      icon: FileText,
      title: "Privacy",
      description: "Purpose limitation and minimum necessary data.",
    },
    {
      icon: Database,
      title: "Limits",
      description:
        "No full HCM/talent/benefits suite or surveillance claims inferred.",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-[#000000] via-[#0A2528] to-[#247780] text-white overflow-hidden font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-start">
        {/* Header Section */}
        <div className="text-left mb-12 max-w-2xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] mb-3 text-white">
            Workforce & HR context
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm">
            Privacy-respecting administration and sourced authority.
          </p>
        </div>

        {/* 4-Column Grid Layout */}
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
                className="border rounded-2xl p-6 backdrop-blur-md shadow-xl flex flex-col justify-between text-left transition-all hover:bg-white/[0.15]"
              >
                <div className="w-full flex flex-col items-start">
                  <div className="w-full h-25 rounded-[10px] bg-[#62C6CA19] flex items-center justify-center text-[#8ADCE0] mb-4 shadow-sm">
                    <IconComponent className="w-12 h-12" />
                  </div>
                  <h3 className="text-base font-bold text-white tracking-tight mb-2">
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
