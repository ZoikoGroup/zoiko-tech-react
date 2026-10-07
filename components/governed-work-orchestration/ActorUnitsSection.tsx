import React from "react";
import { ShieldCheck, Clock, FileText, ArrowRight } from "lucide-react";

export default function ActorUnitsSection() {
  const column1 = [
    {
      title: "Human operator",
      description: "Judgment, preparation, review or manual action.",
      meta: "Identity, assignment, due state, completion evidence",
      image: "/gov/14.png",
      height: "min-h-[540px]",
    },
  ];

  const column2 = [
    {
      title: "Human approver",
      description: "Makes an authorized decision.",
      meta: "Scope, basis, time, reason, evidence pointer",
      image: "/gov/15.png",
      height: "min-h-[250px]",
    },
    {
      title: "External party",
      description: "Information, action or approval from outside.",
      meta: "Waiting, received, rejected or expired; no real-time promise",
      image: "/gov/16.png",
      height: "min-h-[250px]",
    },
  ];

  const column3 = [
    {
      title: "Agent",
      description: "Bounded work under delegated authority.",
      meta: "Routed to Agentic Systems for execution controls",
      image: "/gov/17.png",
      height: "min-h-[540px]",
    },
  ];

  const column4 = [
    {
      title: "System / service",
      description: "Deterministic or external operation.",
      meta: "Contract, request state, receipt, uncertainty",
      image: "/gov/18.png",
      height: "min-h-[250px]",
    },
    {
      title: "Manual off-platform work",
      description: "Work done outside the orchestrated system.",
      meta: "Authorized completion with evidence; never silent success",
      image: "/gov/19.png",
      height: "min-h-[250px]",
    },
  ];

  return (
    <section className="bg-[#001315] text-white py-20 px-4 md:px-12 lg:px-24 font-sans antialiased">
      <div className="max-w-7xl mx-auto">
        {/* Header Content */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-5xl md:text-6xl font-light text-teal-700/60 tracking-tight font-mono">
              07
            </span>
          </div>
          <span className="text-xs uppercase tracking-widest text-teal-500 font-semibold mb-2 block">
            HUMAN, AGENT & SYSTEM WORK UNITS
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white max-w-2xl mb-4">
            Every unit says who does it and how it completes
          </h2>
          <p className="text-slate-300 text-sm md:text-base max-w-xl">
            Six actor types, each with its own completion contract. An agent is
            never treated as a human, and manual work is never silently marked
            done.
          </p>
        </div>

        {/* 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            {column1.map((card, index) => (
              <a
                key={index}
                href="#"
                className={`group relative overflow-hidden rounded-2xl bg-slate-900 border border-teal-900/40 transition-all duration-300 hover:border-teal-700/60 flex flex-col justify-end ${card.height}`}
              >
                <div className="absolute inset-0 z-0">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001315] via-[#001315]/50 to-transparent" />
                </div>
                <div className="relative z-10 p-6 flex flex-col justify-end h-full">
                  <h3 className="text-xl font-semibold text-white mb-1 tracking-tight group-hover:text-teal-200 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-slate-300 text-xs mb-3 leading-relaxed">
                    {card.description}
                  </p>
                  <div className="flex items-center gap-2 pt-3 border-t border-teal-900/30 text-[11px] text-teal-300/80">
                    <ShieldCheck className="w-3.5 h-3.5 shrink-0 text-teal-400" />
                    <span>{card.meta}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6">
            {column2.map((card, index) => (
              <a
                key={index}
                href="#"
                className={`group relative overflow-hidden rounded-2xl bg-slate-900 border border-teal-900/40 transition-all duration-300 hover:border-teal-700/60 flex flex-col justify-end ${card.height}`}
              >
                <div className="absolute inset-0 z-0">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001315] via-[#001315]/50 to-transparent" />
                </div>
                <div className="relative z-10 p-6 flex flex-col justify-end h-full">
                  <h3 className="text-xl font-semibold text-white mb-1 tracking-tight group-hover:text-teal-200 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-slate-300 text-xs mb-3 leading-relaxed">
                    {card.description}
                  </p>
                  <div className="flex items-center gap-2 pt-3 border-t border-teal-900/30 text-[11px] text-teal-300/80">
                    <Clock className="w-3.5 h-3.5 shrink-0 text-teal-400" />
                    <span>{card.meta}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6">
            {column3.map((card, index) => (
              <a
                key={index}
                href="#"
                className={`group relative overflow-hidden rounded-2xl bg-slate-900 border border-teal-900/40 transition-all duration-300 hover:border-teal-700/60 flex flex-col justify-end ${card.height}`}
              >
                <div className="absolute inset-0 z-0">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001315] via-[#001315]/50 to-transparent" />
                </div>
                <div className="relative z-10 p-6 flex flex-col justify-end h-full">
                  <h3 className="text-xl font-semibold text-white mb-1 tracking-tight group-hover:text-teal-200 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-slate-300 text-xs mb-3 leading-relaxed">
                    {card.description}
                  </p>
                  <div className="flex items-center gap-2 pt-3 border-t border-teal-900/30 text-[11px] text-teal-300/80">
                    <ShieldCheck className="w-3.5 h-3.5 shrink-0 text-teal-400" />
                    <span>{card.meta}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Column 4 */}
          <div className="flex flex-col gap-6">
            {column4.map((card, index) => (
              <a
                key={index}
                href="#"
                className={`group relative overflow-hidden rounded-2xl bg-slate-900 border border-teal-900/40 transition-all duration-300 hover:border-teal-700/60 flex flex-col justify-end ${card.height}`}
              >
                <div className="absolute inset-0 z-0">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001315] via-[#001315]/50 to-transparent" />
                </div>
                <div className="relative z-10 p-6 flex flex-col justify-end h-full">
                  <h3 className="text-xl font-semibold text-white mb-1 tracking-tight group-hover:text-teal-200 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-slate-300 text-xs mb-3 leading-relaxed">
                    {card.description}
                  </p>
                  <div className="flex items-center gap-2 pt-3 border-t border-teal-900/30 text-[11px] text-teal-300/80">
                    <FileText className="w-3.5 h-3.5 shrink-0 text-teal-400" />
                    <span>{card.meta}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Footer Link */}
        <div className="mt-8">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium text-teal-400 hover:text-teal-300 transition-colors"
          >
            <span>Review work units</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
