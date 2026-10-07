import React from "react";
import { User, FileText, Globe } from "lucide-react";

export default function DataHandlingNeedsExplicitScope() {
  const cards = [
    {
      icon: User,
      title: "Purpose & minimization",
      description: "Approved privacy principles and minimum necessary use.",
    },
    {
      icon: FileText,
      title: "Retention & requests",
      description:
        "Authoritative policy, notices, sub processors and rights-request routes; avoid duplicate static lists.",
    },
    {
      icon: Globe,
      title: "Residency / transfers",
      description:
        "Product, deployment, data class, processing/storage/backup, source and review must all be established.",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-[#000000] via-[#0A2528] to-[#247780] text-white overflow-hidden font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-12">
          <span className="text-[11px] tracking-widest text-[#6FD0F6] uppercase font-semibold block mb-3">
            DATA HANDLING
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] mb-3 text-white">
            Data handling needs explicit scope.
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm max-w-2xl">
            Residency is not a blanket trust guarantee.
          </p>
        </div>

        {/* Main Grid: Cards Layout (Left) & 3D Illustration /8.png (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cards.map((item, index) => {
              const IconComponent = item.icon;
              const isLastCard = index === 2;
              return (
                <div
                  key={index}
                  style={{
                    backgroundColor: "#FFFFFF0F",
                    borderColor: "#7FD0D959",
                  }}
                  className={`border rounded-2xl p-6 backdrop-blur-md shadow-xl flex flex-col justify-between transition-all hover:bg-white/[0.15] ${
                    isLastCard ? "sm:col-span-2" : ""
                  }`}
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

          {/* Right Column: 3D Illustration Graphic (/8.png) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full">
              <img
                src="/trust/8.png"
                alt="Data handling explicit scope 3D security and infrastructure graphic"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
