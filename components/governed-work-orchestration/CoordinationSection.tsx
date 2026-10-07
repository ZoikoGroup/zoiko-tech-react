import React from "react";

export default function CoordinationSection() {
  const column1 = [
    {
      title: "Coordinate long-running work",
      description:
        "How do we keep multi-step work coherent across teams and systems?",
      image: "/gov/2.png",
      height: "min-h-[460px]",
    },
    {
      title: "Recover from exceptions",
      description:
        "What happens when part of the work fails or becomes uncertain?",
      image: "/gov/3.png",
      height: "min-h-[460px]",
    },
  ];

  const column2 = [
    {
      title: "Track work state",
      description: "What stage is this in, who owns it and what happens next?",
      image: "/gov/4.png",
      height: "min-h-[300px]",
    },
    {
      title: "Mix humans, agents & systems",
      description: "Which actor performs each unit, under what authority?",
      image: "/gov/6.png",
      height: "min-h-[620px]",
    },
  ];

  const column3 = [
    {
      title: "Control dependencies",
      description: "What is blocked, waiting or safe to run in parallel?",
      image: "/gov/5.png",
      height: "min-h-[300px]",
    },
    {
      title: "Require decisions",
      description: "Which steps need review, sign-off or higher assurance?",
      image: "/gov/7.png",
      height: "min-h-[300px]",
    },
    {
      title: "Automate bounded agent work",
      description: "How does a controlled agent execute one work unit?",
      image: "/gov/8.png",
      height: "min-h-[300px]",
    },
  ];

  return (
    <section className="bg-white text-black py-20 px-4 md:px-12 lg:px-24 font-sans antialiased">
      <div className="max-w-7xl mx-auto">
        {/* Header Content */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-5xl md:text-6xl font-light text-slate-300 tracking-tight font-mono">
              02
            </span>
          </div>
          <span className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-2 block">
            ORCHESTRATION INTENT ROUTER
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black max-w-2xl mb-4">
            What kind of coordination do you need?
          </h2>
          <p className="text-slate-600 text-sm md:text-base max-w-xl">
            Eight common needs. Pick one and jump to the control that answers
            it, or to its specialist page.
          </p>
        </div>

        {/* Layout: Column 1 takes 2 parts, Column 2 and 3 take 1 part each (total 4 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Column 1 (Span 2 columns, matching the combined width of Column 2 and 3) */}
          <div className="md:col-span-2 flex flex-col gap-6">
            {column1.map((card, index) => (
              <a
                key={index}
                href="#"
                className={`group relative overflow-hidden rounded-2xl bg-slate-100 border border-slate-200 transition-all duration-300 hover:border-slate-300 flex flex-col justify-end ${card.height}`}
              >
                <div className="absolute inset-0 z-0">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>
                <div className="relative z-10 p-6 md:p-8 flex flex-col justify-end h-full">
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 tracking-tight group-hover:text-slate-100 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-slate-200 text-xs md:text-sm font-normal max-w-md leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Column 2 (Span 1 column) */}
          <div className="md:col-span-1 flex flex-col gap-6">
            {column2.map((card, index) => (
              <a
                key={index}
                href="#"
                className={`group relative overflow-hidden rounded-2xl bg-slate-100 border border-slate-200 transition-all duration-300 hover:border-slate-300 flex flex-col justify-end ${card.height}`}
              >
                <div className="absolute inset-0 z-0">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>
                <div className="relative z-10 p-6 md:p-8 flex flex-col justify-end h-full">
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 tracking-tight group-hover:text-slate-100 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-slate-200 text-xs md:text-sm font-normal max-w-md leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Column 3 (Span 1 column) */}
          <div className="md:col-span-1 flex flex-col gap-6">
            {column3.map((card, index) => (
              <a
                key={index}
                href="#"
                className={`group relative overflow-hidden rounded-2xl bg-slate-100 border border-slate-200 transition-all duration-300 hover:border-slate-300 flex flex-col justify-end ${card.height}`}
              >
                <div className="absolute inset-0 z-0">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>
                <div className="relative z-10 p-6 md:p-8 flex flex-col justify-end h-full">
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 tracking-tight group-hover:text-slate-100 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-slate-200 text-xs md:text-sm font-normal max-w-md leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
