import React from "react";
import { Tv, BarChart2, Monitor } from "lucide-react";

export default function PreparationToLiveControlSection() {
  const cards = [
    {
      image: "/media/15.png",
      icon: <Tv className="w-5 h-5 text-teal-300" />,
      description:
        "Identify the event source and accountable production owner.",
    },
    {
      image: "/media/16.png",
      icon: <BarChart2 className="w-5 h-5 text-teal-300" />,
      description:
        "Keep readiness, current impact and escalation ownership visible.",
    },
    {
      image: "/media/17.png",
      icon: <Monitor className="w-5 h-5 text-teal-300" />,
      description:
        "Review supported replay, archive and evidence requirements.",
    },
  ];

  const steps = [
    { number: "01", title: "Schedule" },
    { number: "02", title: "Prepare" },
    { number: "03", title: "Review readiness" },
    { number: "04", title: "Authorize launch" },
    { number: "05", title: "Operate" },
    { number: "06", title: "Close / review" },
  ];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-[#000000] via-[#0A2528] to-[#247780] text-white overflow-hidden font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex flex-col justify-between">
      {/* Top Main Content Container */}
      <div className="max-w-7xl mx-auto w-full">
        {/* Main Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-4 text-white">
          From preparation to live control. <br />
          Keep readiness visible.
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-sm md:text-base mb-12 max-w-2xl">
          ZoikoStream Live Events is described in the supplied wireframe as
          commercial live-event broadcasting technology, with a Live product
          state.
        </p>

        {/* 3 Image Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {cards.map((item, index) => (
            <div
              key={index}
              className="bg-[#0A2528]/80 border border-teal-800/40 rounded-2xl overflow-hidden flex flex-col backdrop-blur-sm shadow-xl"
            >
              {/* Card Image */}
              <div className="w-full h-48 sm:h-52 overflow-hidden bg-black/50">
                <img
                  src={item.image}
                  alt={`Preparation step ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div className="w-10 h-10 rounded-lg bg-teal-950/80 border border-teal-700/40 flex items-center justify-center mb-6 shadow-inner">
                  {item.icon}
                </div>
                <p className="text-gray-200 text-xs md:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Process Steps Bar */}
      <div className="max-w-7xl mx-auto w-full relative z-10 pt-8 border-t border-teal-800/40">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-[#0A2528]/50 border border-teal-800/40 rounded-xl p-4 flex flex-col justify-between backdrop-blur-sm shadow-inner"
            >
              <span className="text-[10px] font-mono text-teal-400 mb-2 font-semibold">
                {step.number}
              </span>
              <span className="text-white text-xs md:text-sm font-semibold tracking-tight">
                {step.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
