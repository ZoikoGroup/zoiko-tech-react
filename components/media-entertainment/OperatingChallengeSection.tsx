import React from "react";
import { ShieldCheck, Share2, User, FileText } from "lucide-react";

export default function OperatingChallengeSection() {
  const challenges = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-teal-300" />,
      title: "Live-event readiness",
      description:
        "Schedule, source, configuration and fallback states need clear ownership.",
    },
    {
      icon: <Share2 className="w-5 h-5 text-teal-300" />,
      title: "Fragmented streaming & replay",
      description:
        "Delivery and post-event services can become separate operational islands.",
    },
    {
      icon: <User className="w-5 h-5 text-teal-300" />,
      title: "Audience separation",
      description:
        "Community experiences need a clear relationship to the content journey.",
    },
    {
      icon: <FileText className="w-5 h-5 text-teal-300" />,
      title: "Ownership ambiguity",
      description:
        "Content, platform and operating entities require explicit boundaries.",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-[#000000] via-[#0A2528] to-[#247780] text-white overflow-hidden font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex flex-col justify-between">
      {/* Top Main Content Container */}
      <div className="max-w-7xl mx-auto w-full">
        {/* Subtitle */}
        <span className="text-xs md:text-sm font-semibold tracking-widest uppercase text-teal-300 mb-4 block">
          02 / THE OPERATING CHALLENGE
        </span>

        {/* Main Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-4 text-white">
          Connect the experience. <br />
          Keep the operating state clear.
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-sm md:text-base mb-12">
          Four sector challenges shape the media operating model.
        </p>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {challenges.map((item, index) => (
            <div
              key={index}
              className="bg-[#0A2528]/60 border border-teal-800/40 rounded-2xl p-6 flex flex-col justify-start backdrop-blur-sm shadow-xl"
            >
              {/* Icon Container */}
              <div className="w-10 h-10 rounded-lg bg-teal-950/80 border border-teal-700/40 flex items-center justify-center mb-6 shadow-inner">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white mb-3 tracking-tight">
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

      {/* Bottom Control Room Image Container */}
      <div className="max-w-7xl mx-auto w-full relative z-10 flex justify-center">
        <div className="w-full rounded-2xl overflow-hidden">
          <img
            src="/media/2.png"
            alt="Control Room Operators Media Architecture"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
