"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  Poppins,
  Plus_Jakarta_Sans,
  Urbanist,
} from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

function Reveal({
  children,
  className = "",
  delay = 0,
}: RevealProps) {
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
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`
        ${className}
        transition-all
        duration-1000
        ease-[cubic-bezier(0.22,1,0.36,1)]
        ${
          visible
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }
      `}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

const headquarters = [
  {
    name: "Sacramento HQ",
    type: "Global",
  },
  {
    name: "London HQ",
    type: "European",
  },
];

const globalLabs = [
  {
    name: "Singapore",
    type: "Innovation / R&D Hub",
  },
  {
    name: "Shenzhen",
    type: "Innovation / R&D Hub",
  },
];

const regionalNodes = [
  {
    name: "Austin",
    type: "Operational Node",
  },
  {
    name: "Albany",
    type: "Operational Node",
  },
  {
    name: "Dover",
    type: "Operational Node",
  },
  {
    name: "Orlando",
    type: "Operational Node",
  },
];

function LocationGroup({
  title,
  locations,
}: {
  title: string;
  locations: {
    name: string;
    type: string;
  }[];
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center gap-2.5">
        <span className="h-2.5 w-2.5 shrink-0 rounded-[5px] bg-teal-400" />

        <span
          className={`${poppins.className} text-sm font-semibold uppercase tracking-wide text-teal-400`}
        >
          {title}
        </span>
      </div>

      <div className="flex flex-col gap-1">
        {locations.map((location) => (
          <div
            key={location.name}
            className="
              group/location
              flex items-center gap-3
              rounded-md
              px-1 py-1
              transition-all duration-300
              hover:translate-x-1
              hover:bg-teal-400/[0.06]
            "
          >
            <span
              className="
                h-2 w-2 shrink-0 rounded-sm bg-teal-400
                transition-all duration-300
                group-hover/location:scale-125
                group-hover/location:shadow-[0_0_10px_rgba(45,212,191,0.8)]
              "
            />

            <div className="flex min-w-0 flex-1 flex-col gap-px">
              <div
                className={`${poppins.className} text-sm font-bold text-white`}
              >
                {location.name}
              </div>

              <div
                className={`${poppins.className} text-xs font-medium text-gray-400`}
              >
                {location.type}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function GlobalPresence() {
  return (
    <section
      className={`
        ${poppins.className}
        relative isolate overflow-hidden
        bg-black
        px-5 py-20
        sm:px-8 sm:py-24
        lg:px-20 lg:py-28
      `}
    >
      {/* =====================================================
          BACKGROUND IMAGE
      ===================================================== */}
      <div className="pointer-events-none absolute inset-0 -z-20">
        <Image
          src="/home/bg3.png"
          alt=""
          fill
          priority={false}
          className="object-cover object-center"
        />
      </div>

      {/* =====================================================
          FIGMA DARK GRADIENT
      ===================================================== */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-black/70 to-cyan-700/70" />

      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-14 lg:gap-20">
        {/* =====================================================
            HEADER
        ===================================================== */}
        <Reveal>
          <div className="flex w-full flex-col items-start gap-4">
            <div
              className={`${poppins.className} text-xs font-semibold uppercase tracking-wider text-white`}
            >
              WHO WE ARE
            </div>

            <h2
              className={`
                ${plusJakarta.className}
                max-w-[900px]
                text-3xl
                font-extrabold
                leading-tight
                text-white
                sm:text-4xl
                lg:text-5xl
                lg:leading-[57.6px]
              `}
            >
              Built in California. Engineered for the world.
            </h2>

            <p
              className={`
                ${poppins.className}
                max-w-[900px]
                text-sm
                font-normal
                leading-6
                text-gray-200
                sm:text-base
              `}
            >
              Zoiko Tech Inc. is a California-based global technology
              company building intelligent infrastructure, enterprise
              platforms, communications systems, financial technology,
              industry software, and domain-specific artificial
              intelligence. Zoiko Tech also serves as a technology engine
              for companies across the wider Zoiko Group.
            </p>
          </div>
        </Reveal>

        {/* =====================================================
            MAP + LOCATION PANEL
        ===================================================== */}
        <Reveal delay={150}>
          <div
            className="
              group/map
              flex w-full
              flex-col
              overflow-hidden
              rounded-2xl
              border-[5px]
              border-teal-400
              bg-slate-950
              transition-colors
              duration-500
              hover:border-teal-300
              lg:h-[520px]
              lg:flex-row
            "
          >
            {/* =================================================
                MAP
            ================================================= */}
            <div
              className="
                relative
                min-h-[320px]
                w-full
                overflow-hidden
                bg-slate-950/30
                lg:min-h-0
                lg:w-[55%]
              "
            >
              <Image
                src="/home/map.png"
                alt="Zoiko Tech global presence map"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="
                  object-cover
                  opacity-90
                  transition-all
                  duration-700
                  group-hover/map:scale-[1.025]
                  group-hover/map:opacity-100
                "
              />

              <div className="pointer-events-none absolute inset-0 bg-slate-950/20" />

              {/* Subtle map ambient effect */}
              <div
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-1/2
                  h-72
                  w-72
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-teal-400/[0.04]
                  blur-3xl
                  transition-opacity
                  duration-700
                  group-hover/map:opacity-80
                "
              />

              {/* =================================================
                  MAP MARKERS
              ================================================= */}

              <div className="absolute left-[23%] top-[42%]">
                <span className="block h-2.5 w-2.5 rounded-full bg-teal-400 shadow-[0_0_14px_rgba(52,212,202,0.7)]" />
                <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-400" />
              </div>

              <div className="absolute left-[59%] top-[21%]">
                <span className="block h-2.5 w-2.5 rounded-full bg-teal-400 shadow-[0_0_14px_rgba(52,212,191,0.7)]" />
                <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-400" />
              </div>

              <div className="absolute left-[88%] top-[61%]">
                <span className="block h-2.5 w-2.5 rounded-full bg-teal-400 shadow-[0_0_14px_rgba(52,212,191,0.7)]" />
                <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-400" />
              </div>

              <div className="absolute left-[91%] top-[50%]">
                <span className="block h-2.5 w-2.5 rounded-full bg-teal-400 shadow-[0_0_14px_rgba(52,212,191,0.7)]" />
                <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-400" />
              </div>

              <div className="absolute left-[26%] top-[46%]">
                <span className="block h-2.5 w-2.5 rounded-full bg-teal-400 shadow-[0_0_14px_rgba(52,212,191,0.7)]" />
                <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-400" />
              </div>

              <div className="absolute left-[34%] top-[29%]">
                <span className="block h-2.5 w-2.5 rounded-full bg-teal-400 shadow-[0_0_14px_rgba(52,212,191,0.7)]" />
                <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-400" />
              </div>

              <div className="absolute left-[37%] top-[23%]">
                <span className="block h-2.5 w-2.5 rounded-full bg-teal-400 shadow-[0_0_14px_rgba(52,212,191,0.7)]" />
                <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-400" />
              </div>

              <div className="absolute left-[29%] top-[54%]">
                <span className="block h-2.5 w-2.5 rounded-full bg-teal-400 shadow-[0_0_14px_rgba(52,212,191,0.7)]" />
                <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-400" />
              </div>
            </div>

            {/* =================================================
                LOCATION INFORMATION
            ================================================= */}
            <div
              className="
                flex
                w-full
                flex-col
                gap-3
                bg-slate-950
                px-6
                py-6
                sm:px-8
                sm:py-7
                lg:w-[45%]
                lg:px-8
                lg:py-5
              "
            >
              <LocationGroup
                title="Headquarters"
                locations={headquarters}
              />

              <div className="h-px w-full bg-white/10" />

              <LocationGroup
                title="Global Labs"
                locations={globalLabs}
              />

              <div className="h-px w-full bg-white/10" />

              <LocationGroup
                title="Regional Nodes"
                locations={regionalNodes}
              />
            </div>
          </div>
        </Reveal>

        {/* =====================================================
            THREE WHITE CARDS
            SOLID WHITE — NO GRADIENT — NO SHADOW
        ===================================================== */}
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
          {/* =================================================
              GLOBAL HQ
          ================================================= */}
          <Reveal delay={100}>
            <div
              className="
                group/card
                min-h-32
                w-full
                rounded-xl
                border
                border-emerald-400
                bg-white
                p-5
                shadow-none
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-emerald-300
              "
              style={{
                boxShadow: "none",
              }}
            >
              <div
                className={`
                  ${urbanist.className}
                  text-lg
                  font-bold
                  text-teal-700
                  transition-colors
                  duration-300
                  group-hover/card:text-emerald-600
                `}
              >
                Global HQ
              </div>

              <div
                className={`
                  ${poppins.className}
                  mt-3
                  text-sm
                  font-normal
                  leading-5
                  text-slate-400
                `}
              >
                1401 21st Street, Suite R, Sacramento, CA 95851 United
                States
              </div>
            </div>
          </Reveal>

          {/* =================================================
              EUROPEAN HQ
          ================================================= */}
          <Reveal delay={200}>
            <div
              className="
                group/card
                min-h-32
                w-full
                rounded-xl
                border
                border-emerald-400
                bg-white
                p-5
                shadow-none
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-emerald-300
              "
              style={{
                boxShadow: "none",
              }}
            >
              <div
                className={`
                  ${urbanist.className}
                  text-lg
                  font-bold
                  text-teal-700
                  transition-colors
                  duration-300
                  group-hover/card:text-emerald-600
                `}
              >
                European HQ
              </div>

              <div
                className={`
                  ${poppins.className}
                  mt-3
                  text-sm
                  font-normal
                  leading-5
                  text-slate-400
                `}
              >
                167-169 Great Portland Street, 5th Floor, London W1W 5PF
                United Kingdom
              </div>
            </div>
          </Reveal>

          {/* =================================================
              GLOBAL LABS & NODES
          ================================================= */}
          <Reveal delay={300}>
            <div
              className="
                group/card
                min-h-32
                w-full
                rounded-xl
                border
                border-emerald-400
                bg-white
                p-5
                shadow-none
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-emerald-300
              "
              style={{
                boxShadow: "none",
              }}
            >
              <div
                className={`
                  ${urbanist.className}
                  text-lg
                  font-bold
                  text-teal-700
                  transition-colors
                  duration-300
                  group-hover/card:text-emerald-600
                `}
              >
                Global Labs & Nodes
              </div>

              <div
                className={`
                  ${poppins.className}
                  mt-3
                  text-sm
                  font-normal
                  leading-5
                  text-slate-400
                `}
              >
                Singapore · Marina Bay Centre Shenzhen · High-Tech Hub
                Austin, Albany, Dover, Orlando
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}