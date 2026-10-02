import React from "react";
import { Video, Monitor, FileText, User, Network, Code } from "lucide-react";

export default function MediaExperienceCards() {
  const cards = [
    {
      icon: <Video className="w-5 h-5 text-teal-700" />,
      title: "Live events",
      description:
        "Prepare and operate digital events with explicit readiness and live states.",
    },
    {
      icon: <Monitor className="w-5 h-5 text-teal-700" />,
      title: "Streaming & replay",
      description:
        "Evaluate delivery, replay and programmable media architecture.",
    },
    {
      icon: <FileText className="w-5 h-5 text-teal-700" />,
      title: "Digital content experiences",
      description:
        "Connect sources and destinations through clear publishing handoffs.",
    },
    {
      icon: <User className="w-5 h-5 text-teal-700" />,
      title: "Audience & community",
      description:
        "Explore experience technology with correct platform ownership.",
    },
    {
      icon: <Network className="w-5 h-5 text-teal-700" />,
      title: "Communications",
      description: "Connect approved operator and audience communications.",
    },
    {
      icon: <Code className="w-5 h-5 text-teal-700" />,
      title: "Developer & infrastructure",
      description:
        "Build around documented interfaces, identity and observability.",
    },
  ];

  return (
    <section className="w-full bg-[#FFFFFF] text-gray-900 font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-3xl max-w-4xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-3">
            Where does your media experience start?
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Choose the operating need closest to yours.
          </p>
        </div>

        {/* Cards Grid (3 columns x 2 rows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#F0F5F5] border border-teal-900/10 rounded-2xl p-8 flex flex-col justify-start hover:border-teal-700/30 transition-all shadow-sm"
            >
              {/* Icon Container */}
              <div className="w-10 h-10 rounded-lg bg-white border border-teal-900/10 flex items-center justify-center mb-6 shadow-sm">
                {card.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
