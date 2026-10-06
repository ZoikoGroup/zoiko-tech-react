import React from "react";

interface IntentCard {
  title: string;
  subtitle: string;
  imageSrc: string;
}

const INTENT_CARDS: IntentCard[] = [
  {
    title: "Automate a repeatable task",
    subtitle: '"Can an agent carry a bounded task through approved systems?"',
    imageSrc: "/age/3.png",
  },
  {
    title: "Control tool & action access",
    subtitle:
      '"Which actions may the agent perform, and under what authority?"',
    imageSrc: "/age/4.png",
  },
  {
    title: "Require approval",
    subtitle:
      '"Which steps must wait for a person or higher-assurance control?"',
    imageSrc: "/age/5.png",
  },
  {
    title: "Delegate identity safely",
    subtitle:
      '"Who is the agent acting for, and when does that authority expire?"',
    imageSrc: "/age/6.png",
  },
  {
    title: "Coordinate multi-step work",
    subtitle: '"How do tasks and systems coordinate over a broader workflow?"',
    imageSrc: "/age/7.png",
  },
  {
    title: "Build & integrate",
    subtitle: '"How do we expose approved tools, events and runtime state?"',
    imageSrc: "/age/8.png",
  },
  {
    title: "Evaluate agent risk",
    subtitle: '"How do we test behavior, safety, evidence and approvals?"',
    imageSrc: "/age/9.png",
  },
];

const AUDIENCES: string[] = [
  "CIO / CTO",
  "Automation & operations leaders",
  "Platform engineers",
  "Developers",
  "Identity & security teams",
  "Risk & governance",
];

export default function AgenticIntentRouterSection() {
  return (
    <section className="w-full bg-[#FFFFFF] py-20 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col items-start">
        {/* Top Header Block */}
        <div className="max-w-3xl mb-16">
          <div className="text-[#2b7a78] font-bold text-xs tracking-widest uppercase mb-3">
            AGENTIC INTENT ROUTER
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-extrabold text-[#0B132B] tracking-tight leading-[1.1] mb-4">
            What do you need your agents to do, safely?
          </h2>
          <p className="text-gray-600 text-xs md:text-sm leading-relaxed max-w-xl">
            Start from the execution need. Each path goes to the control that
            answers it, or to its specialist technology page.
          </p>
        </div>

        {/* Cards Grid using images /age/3.png through /age/9.png */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full mb-16">
          {INTENT_CARDS.map((card, index) => {
            const imgSrc = `/age/${3 + index}.png`;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-xl border border-gray-200/60 overflow-hidden flex flex-col justify-between h-[360px] relative group"
              >
                <div className="absolute inset-0 w-full h-full">
                  <img
                    src={imgSrc}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10"></div>
                </div>

                {/* Empty top slot for visual balance matching design */}
                <div className="relative z-10 p-5"></div>

                <div className="relative z-10 p-5 flex flex-col justify-end">
                  <h3 className="text-base font-extrabold text-white mb-2">
                    {card.title}
                  </h3>
                  <p className="text-xs text-gray-200 italic leading-relaxed">
                    {card.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Built For Audiences Bar */}
        <div className="w-full flex flex-wrap items-center gap-4 pt-6 border-t border-gray-200/80">
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
            Built for:
          </span>
          <div className="flex flex-wrap gap-2">
            {AUDIENCES.map((audience, idx) => (
              <span
                key={idx}
                className="bg-white text-gray-700 border border-gray-200/80 text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm"
              >
                {audience}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
