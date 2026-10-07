import React from "react";
import { ArrowRight } from "lucide-react";

export default function HandoffsSection() {
  const cards = [
    {
      badge: "HANDOFF - 10:12",
      title: "Ownership handoff",
      description: "From Intake team to Risk, with reason, time and context.",
      image: "/gov/21.png",
    },
    {
      badge: "ROLE - 10:40",
      title: "Role handoff",
      description: "Between teams, at least-privilege visibility only.",
      image: "/gov/22.png",
    },
    {
      badge: "SYSTEM - 11:05",
      title: "System handoff",
      description: "Request sent to sanctions provider; pending receipt.",
      image: "/gov/23.png",
    },
    {
      badge: "AGENT - 13:30",
      title: "Agent → human",
      description: "Agent prepared setup; review routed to an operator.",
      image: "/gov/24.png",
    },
    {
      badge: "STALE - +24 H",
      title: "Stale work",
      description:
        "No update for 24 hours; flagged for investigation, review, or resolved.",
      image: "/gov/25.png",
    },
  ];

  return (
    <section className="bg-[#00191E] text-white py-20 px-4 md:px-12 lg:px-24 font-sans antialiased">
      <div className="max-w-7xl mx-auto">
        {/* Header Content */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-5xl md:text-6xl font-light text-cyan-800/60 tracking-tight font-mono">
              09
            </span>
          </div>
          <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-2 block">
            HANDOFFS, TIMERS & ESCALATION
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white max-w-2xl mb-4">
            Every change of hands is visible, and nothing goes quietly stale
          </h2>
          <p className="text-slate-300 text-sm md:text-base max-w-xl">
            Due points and escalations follow configured roles and conditions.
            No unverified SLA promises.
          </p>
        </div>

        {/* Horizontal Scrolling or Flex Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {cards.map((card, index) => (
            <a
              key={index}
              href="#"
              className="group relative overflow-hidden rounded-2xl bg-slate-900 border border-cyan-900/40 transition-all duration-300 hover:border-cyan-700/60 flex flex-col justify-between min-h-[300px]"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00191E] via-[#00191E]/60 to-transparent" />
              </div>

              {/* Card Content */}
              <div className="relative z-10 p-6 flex flex-col justify-end h-full">
                <span className="text-[10px] font-mono tracking-widest text-cyan-400 font-semibold mb-3 block uppercase">
                  {card.badge}
                </span>
                <h3 className="text-xl font-semibold text-white mb-2 tracking-tight group-hover:text-cyan-200 transition-colors">
                  {card.title}
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  {card.description}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Footer Subtext and Link */}
        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-2 text-sm text-slate-400">
          <span>
            Paused work always shows its reason, owner and resume condition.
          </span>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <span>Review handoffs</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
