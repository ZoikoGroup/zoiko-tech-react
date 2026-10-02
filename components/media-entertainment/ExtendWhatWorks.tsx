import React from "react";
import {
  Monitor,
  User,
  Network,
  ShieldCheck,
  ExternalLink,
} from "lucide-react";

export default function ExtendWhatWorks() {
  const cards = [
    {
      icon: <Monitor className="w-5 h-5 text-teal-300" />,
      title: "Media infrastructure",
      description: "Live events, delivery, replay and developer integration.",
      linkText: "Explore pathway",
    },
    {
      icon: <User className="w-5 h-5 text-teal-300" />,
      title: "Audience & community",
      description:
        "Experience pathways with approved group-platform attribution.",
      linkText: "Explore pathway",
    },
    {
      icon: <Network className="w-5 h-5 text-teal-300" />,
      title: "Communications",
      description: "Supported operator and audience channels.",
      linkText: "Explore pathway",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-teal-300" />,
      title: "Reliability & security",
      description: "Access controls, incident ownership and retained evidence.",
      linkText: "Explore pathway",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-[#000000] via-[#0A2528] to-[#247780] text-white overflow-hidden font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex flex-col justify-between">
      {/* Top Main Content Container */}
      <div className="max-w-7xl mx-auto w-full">
        {/* Main Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-4 text-white">
          Extend what works <br />
          into the next relevant experience.
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-sm md:text-base mb-12 max-w-2xl">
          Explore adjacent architecture when you are ready for a broader
          evaluation.
        </p>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((item, index) => (
            <div
              key={index}
              className="bg-[#0A2528]/80 border border-teal-800/40 rounded-2xl p-6 flex flex-col justify-between backdrop-blur-sm shadow-xl"
            >
              <div>
                {/* Icon Container */}
                <div className="w-10 h-10 rounded-lg bg-teal-950/80 border border-teal-700/40 flex items-center justify-center mb-6 shadow-inner">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-xs md:text-sm leading-relaxed mb-8">
                  {item.description}
                </p>
              </div>

              {/* Bottom Link */}
              <div>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-300 hover:text-white transition-colors"
                >
                  {item.linkText}
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
