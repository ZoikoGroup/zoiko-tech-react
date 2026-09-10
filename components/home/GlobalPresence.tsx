"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const locations = [
  {
    title: "Sacramento HQ",
    region: "Global",
  },
  {
    title: "London HQ",
    region: "European",
  },
];

const labs = [
  {
    title: "Singapore",
    region: "Innovation / R&D Hub",
  },
  {
    title: "Shenzhen",
    region: "Innovation / R&D Hub",
  },
];

const regionalNodes = [
  {
    title: "Austin",
    region: "Operational Node",
  },
  {
    title: "Albany",
    region: "Operational Node",
  },
  {
    title: "Dover",
    region: "Operational Node",
  },
  {
    title: "Orlando",
    region: "Operational Node",
  },
];

const addresses = [
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
    title: "Global Labs & Nodes",
    description:
      "Singapore · Marina Bay Centre Shenzhen · High-Tech Hub Austin, Albany, Dover, Orlando",
  },
];

function LocationGroup({
  title,
  items,
}: {
  title: string;
  items: { title: string; region: string }[];
}) {
  return (
    <div className="flex w-full flex-col gap-2">
      <div className="flex items-center gap-2.5">
        <div className="size-2.5 shrink-0 rounded-full bg-teal-400" />

        <h3 className="text-sm font-semibold uppercase text-teal-400">
          {title}
        </h3>
      </div>

      <div className="flex flex-col gap-1">
        {items.map((item, index) => (
          <div
            key={item.title}
            className="group flex items-center gap-3 rounded-lg py-1.5 transition-all duration-300 hover:bg-white/5 hover:px-2"
            style={{
              transitionDelay: `${index * 40}ms`,
            }}
          >
            <div className="size-2 shrink-0 rounded-sm bg-teal-400 transition-transform duration-300 group-hover:scale-125" />

            <div className="flex min-w-0 flex-1 flex-col gap-px">
              <span className="text-sm font-bold text-white transition-opacity duration-300 group-hover:opacity-90">
                {item.title}
              </span>

              <span className="text-xs font-medium text-gray-400">
                {item.region}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function GlobalPresence() {
  return (
    <section className="w-full overflow-hidden bg-teal-50 px-4 py-16 sm:px-6 md:px-10 lg:px-20 lg:py-28">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-12 lg:gap-20">
        {/* Header */}
        <Reveal>
          <div className="flex w-full flex-col items-start gap-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-cyan-700">
              WHO WE ARE
            </p>

            <h2 className="max-w-[900px] text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-5xl lg:leading-[1.2]">
              Built in California. Engineered for the world.
            </h2>

            <p className="max-w-[900px] text-sm font-normal leading-6 text-slate-600 sm:text-base">
              Zoiko Tech Inc. is a California-based global technology company
              building intelligent infrastructure, enterprise platforms,
              communications systems, financial technology, industry software,
              and domain-specific artificial intelligence. Zoiko Tech also
              serves as a technology engine for companies across the wider
              Zoiko Group.
            </p>
          </div>
        </Reveal>

        {/* Global Presence Panel */}
        <Reveal delay={100}>
          <div className="flex min-h-[520px] w-full flex-col overflow-hidden rounded-2xl bg-slate-950 outline outline-1 outline-offset-[-1px] outline-cyan-700/20 transition-all duration-500 hover:outline-cyan-700/40 lg:flex-row">
            {/* Map */}
            <div className="group relative min-h-[300px] flex-1 overflow-hidden bg-slate-950/30 lg:min-h-[520px]">
              <Image
                src="/home/global-map.png"
                alt="Zoiko global presence map"
                fill
                priority
                className="object-contain transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </div>

            {/* Location Details */}
            <div className="flex w-full flex-col gap-4 bg-slate-950 px-6 py-6 sm:px-8 lg:w-[45%] lg:px-8 lg:py-5">
              <LocationGroup
                title="Headquarters"
                items={locations}
              />

              <div className="h-px w-full bg-white/10" />

              <LocationGroup
                title="Global Labs"
                items={labs}
              />

              <div className="h-px w-full bg-white/10" />

              <LocationGroup
                title="Regional Nodes"
                items={regionalNodes}
              />
            </div>
          </div>
        </Reveal>

        {/* Address Cards */}
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {addresses.map((address, index) => (
            <Reveal key={address.title} delay={index * 120}>
              <div className="group flex min-h-[128px] w-full flex-col gap-3 rounded-xl bg-gradient-to-br from-white to-emerald-200/0 p-5 outline outline-1 outline-offset-[-1px] outline-emerald-400 backdrop-blur-[48px] transition-all duration-500 ease-out hover:-translate-y-1.5 hover:bg-white hover:shadow-[0px_12px_30px_0px_rgba(16,185,129,0.12)]">
                <h3 className="text-lg font-bold text-emerald-500 transition-transform duration-300 group-hover:translate-x-1">
                  {address.title}
                </h3>

                <p className="text-sm font-normal leading-5 text-slate-400">
                  {address.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Scroll Reveal */
function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`w-full transform transition-all duration-700 ease-out ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}