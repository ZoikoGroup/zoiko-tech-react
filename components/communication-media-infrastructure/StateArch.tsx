import React from "react";
import { Shield, Cpu, Database, FileText } from "lucide-react";

export default function StateArch() {
  const cards = [
    {
      icon: Shield,
      title: "Context & authority",
      description:
        "Participant/account/media scope → identity/entitlement/policy.",
    },
    {
      icon: Cpu,
      title: "Intent & responsible provider",
      description:
        "Communication/media request → system responsible for execution.",
    },
    {
      icon: Database,
      title: "Authoritative state",
      description:
        "Actual connected, delivered, live, failed or replay-ready state from its owner.",
    },
    {
      icon: FileText,
      title: "Commercial state & evidence",
      description:
        "Billing remains separate; approved quality, logs, status and recovery complete the model.",
    },
  ];

  return (
    <section className="w-full bg-white text-gray-900 font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-3 leading-[1.1]">
            A state-aware operating architecture
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 max-w-2xl">
            Intermediate workflow success does not prove delivery.
          </p>
        </div>

        {/* Content Layout: 2x2 Grid + Isometric Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: 2x2 Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cards.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  style={{ backgroundColor: "#F1F8F9" }}
                  className="border border-gray-200/80 rounded-2xl p-6 shadow-sm flex flex-col justify-between transition-all hover:shadow-md"
                >
                  <div>
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

          {/* Right Column: Isometric Graphic */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-lg overflow-hidden">
              <img
                src="/comm/6.png"
                alt="A state-aware operating architecture diagram showing interconnected operational zones, state nodes, and verification channels"
                className="w-full h-auto object-contain drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
