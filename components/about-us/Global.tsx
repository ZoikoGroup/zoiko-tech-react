"use client";

import { useEffect, useRef, useState } from "react";

const locations = [
  {
    title: "Global HQ",
    description:
      "1401 21st Street, Suite R, Sacramento, CA 95851 United States",
  },
  {
    title: "European HQ",
    description:
      "167-169 Great Portland Street, 5th Floor, London W1W 5PF United Kingdom",
  },
  {
    title: "Labs & Regional Nodes",
    description:
      "Singapore (Marina Bay), Shenzhen (High-Tech Hub), Austin, Albany, Dover, Orlando, Springfield",
  },
];

export default function Global() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden border-b border-white/10 bg-gradient-to-r from-[#0B1720] via-[#0A3038] to-[#0B3D43]"
    >
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-3xl" />

        <div className="absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-teal-400/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col gap-12 px-6 py-16 sm:px-10 sm:py-20 lg:gap-14 lg:px-28 lg:py-28">
        {/* Header */}
        <div
          className={`flex w-full flex-col items-start gap-4 transition-all duration-1000 ease-out ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-12 opacity-0"
          }`}
        >
          {/* Badge */}
          <div className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-400/40 hover:bg-white/15">
            <span className="text-[10px] font-bold uppercase tracking-wide text-teal-400">
              Global From the Architecture Up
            </span>
          </div>

          {/* Heading */}
          <h2 className="w-full text-3xl font-extrabold leading-tight tracking-tight text-white transition-transform duration-500 hover:translate-x-1 sm:text-4xl lg:text-4xl lg:leading-[1.35]">
            Built in California. Engineered for the world.
          </h2>

          {/* Description */}
          <p className="w-full max-w-[1100px] text-base font-normal leading-7 text-slate-100 sm:text-lg">
            Headquartered in Sacramento, California with regional presence in
            London, Singapore and Shenzhen, plus U.S. coordination locations
            including Austin, Albany, Dover, Orlando and Springfield.
          </p>
        </div>

        {/* Locations */}
        <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-3">
          {locations.map((location, index) => (
            <article
              key={location.title}
              className={`group flex min-h-[170px] flex-col gap-3 rounded-xl border border-white/10 bg-[#12252B]/80 p-6 transition-all duration-700 ease-out hover:-translate-y-2 hover:border-teal-400/30 hover:bg-[#173038] hover:shadow-[0_18px_40px_rgba(0,0,0,0.25)] ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{
                transitionDelay: `${150 + index * 120}ms`,
              }}
            >
              {/* Location Title */}
              <h3 className="text-lg font-bold text-teal-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-teal-300">
                {location.title}
              </h3>

              {/* Location Description */}
              <p className="text-sm font-normal leading-5 text-slate-300 transition-colors duration-300 group-hover:text-slate-200">
                {location.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}