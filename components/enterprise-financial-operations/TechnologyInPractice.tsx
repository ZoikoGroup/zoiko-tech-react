import React from "react";
import { Network, User, FileText, Database } from "lucide-react";

export default function TechnologyInPractice() {
  const cards = [
    {
      icon: Network,
      title: "People / payroll",
      description:
        "Workforce context → payroll approval → downstream verification.",
    },
    {
      icon: User,
      title: "Billing / finance",
      description: "Usage → invoice → separate financial-state confirmation.",
    },
    {
      icon: FileText,
      title: "Professional intelligence",
      description: "Sources → derived work → human review.",
    },
    {
      icon: Database,
      title: "Evidence pending",
      description:
        "No supplied deployment records; no invented time savings, payment speed or customer outcomes.",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-[#000000] via-[#0A2528] to-[#247780] text-white overflow-hidden font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-start">
        {/* Header Section */}
        <div className="text-left mb-12 max-w-2xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] mb-3 text-white">
            Technology in practice
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm">
            Approved evidence before operational claims.
          </p>
        </div>

        {/* Content Grid: Left 2x2 Cards, Right Enterprise Graphic (/enterprise/6.png) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full items-center">
          {/* Left: 2x2 Grid of Cards (8 Columns) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
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
                    <div className="w-9 h-9 rounded-xl bg-[#62C6CA19] border border-[#7FD0D959] flex items-center justify-center text-[#8ADCE0] mb-4 shadow-sm">
                      <IconComponent className="w-4 h-4" />
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

          {/* Right: Enterprise Illustration (5 Columns) */}
          <div className="lg:col-span-5 w-full flex justify-center">
            <div className="w-ful overflow-hidden">
              <img
                src="/enterprise/6.png"
                alt="Technology in practice architectural dashboard and isometric data workflow modules"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
