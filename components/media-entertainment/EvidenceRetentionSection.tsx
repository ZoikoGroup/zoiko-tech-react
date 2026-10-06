import React from "react";
import { Lock, Code, User, ShieldCheck } from "lucide-react";

export default function EvidenceRetentionSection() {
  const cards = [
    {
      icon: <Lock className="w-5 h-5 text-teal-300" />,
      title: "Publish & live authority",
      description:
        "Only authorized roles may change supported live or publish states.",
    },
    {
      icon: <Code className="w-5 h-5 text-teal-300" />,
      title: "System identities",
      description: "Product-supported API and integration authorization.",
    },
    {
      icon: <User className="w-5 h-5 text-teal-300" />,
      title: "Audience access",
      description:
        "Anonymous, authenticated or entitled access only when product evidence supports it.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-teal-300" />,
      title: "Security & evidence",
      description: "Review corporate and product-specific trust records.",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-[#000000] via-[#0A2528] to-[#247780] text-white overflow-hidden font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex flex-col justify-between">
      {/* Top Main Content Container */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Heading, Subtitle & 4 Cards (2x2 Grid) */}
        <div className="lg:col-span-7 flex flex-col items-start">
          {/* Main Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-4 text-white">
            Put high-impact media actions <br />
            behind explicit authority.
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-sm md:text-base mb-8 max-w-xl">
            Connect roles, event scope and environment permissions to supported
            controls.
          </p>

          {/* 4 Cards Grid (2x2) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {cards.map((item, index) => (
              <div
                key={index}
                className="bg-[#0A2528]/80 border border-teal-800/40 rounded-2xl p-6 flex flex-col justify-start backdrop-blur-sm shadow-xl"
              >
                {/* Icon Container */}
                <div className="w-10 h-10 rounded-lg bg-teal-950/80 border border-teal-700/40 flex items-center justify-center mb-5 shadow-inner">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-white mb-2 tracking-tight">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Isometric Graphic Illustration (Clean, no bg, border, shadow) */}
        <div className="lg:col-span-5 flex items-center justify-center relative z-10">
          <div className="w-full max-w-lg aspect-square flex items-center justify-center">
            <img
              src="/media/19.png"
              alt="High-Impact Media Actions Architecture Concept"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
