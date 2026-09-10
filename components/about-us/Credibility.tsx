"use client";

import { useEffect, useRef, useState } from "react";

const proofPoints = [
  {
    metric: "30 Days",
    title: "MVNO Onboarding",
    description:
      "A fast-growing mobile virtual network operator was fully onboarded onto ZoikoNex, bypassing legacy telco complexity to activate real-time billing and native partner routing in record time.",
  },
  {
    metric: "6 Weeks",
    title: "Accessible Multilingual Platform",
    description:
      "An international NGO deployed a WCAG-aligned multilingual portal powered by Zoiko Tech, complete with integrated e-signatures, private document vaults, and auditable data dashboards.",
  },
];

export default function Credibility() {
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
      className="w-full overflow-hidden border-b border-gray-800 bg-cyan-900/90"
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-12 px-6 py-16 sm:px-10 sm:py-20 lg:gap-16 lg:px-28 lg:py-28">

        {/* Header */}
        <div
          className={`flex w-full flex-col items-start gap-4 transition-all duration-1000 ease-out ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-12 opacity-0"
          }`}
        >
          {/* Badge */}
          <div className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/15">
            <span className="text-[10px] font-bold uppercase tracking-wide text-teal-400">
              Execution, Not Adjectives
            </span>
          </div>

          {/* Heading */}
          <h2 className="w-full text-3xl font-extrabold leading-tight tracking-tight text-white transition-transform duration-500 hover:translate-x-1 sm:text-4xl lg:text-4xl lg:leading-[1.35]">
            Technology credibility is earned in production
          </h2>
        </div>

        {/* Proof Cards */}
        <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2">
          {proofPoints.map((point, index) => (
            <article
              key={point.title}
              className={`group flex flex-col gap-5 rounded-2xl border border-gray-800 bg-gray-800 p-6 transition-all duration-700 ease-out hover:-translate-y-2 hover:border-gray-600 hover:shadow-[0_20px_45px_rgba(0,0,0,0.25)] sm:p-8 ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-14 opacity-0"
              }`}
              style={{
                transitionDelay: `${150 + index * 150}ms`,
              }}
            >
              {/* Metric */}
              <div className="text-2xl font-extrabold text-teal-400 transition-transform duration-500 group-hover:translate-x-1 sm:text-3xl">
                {point.metric}
              </div>

              {/* Title */}
              <h3 className="text-lg font-extrabold text-white transition-colors duration-300 group-hover:text-teal-300 sm:text-xl">
                {point.title}
              </h3>

              {/* Description */}
              <p className="text-sm font-normal leading-5 text-slate-400 transition-colors duration-300 group-hover:text-slate-300">
                {point.description}
              </p>
            </article>
          ))}
        </div>

        {/* Engineering Scale */}
        <div
          className={`group flex w-full flex-col items-start gap-4 rounded-xl border border-cyan-700/30 bg-cyan-700/60 p-6 transition-all duration-1000 ease-out hover:border-cyan-500/50 hover:bg-cyan-700/70 sm:flex-row sm:items-center sm:gap-5 sm:p-7 ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-12 opacity-0"
          }`}
          style={{
            transitionDelay: "500ms",
          }}
        >
          {/* Indicator */}
          <div className="relative flex h-6 w-6 shrink-0 items-center justify-center">
            <span className="absolute h-5 w-5 rounded-full border-2 border-teal-400 transition-transform duration-500 group-hover:scale-110" />
            <span className="h-1.5 w-1.5 rounded-full bg-teal-400 transition-transform duration-500 group-hover:scale-125" />
          </div>

          {/* Text */}
          <p className="flex-1 text-sm font-normal leading-6 text-slate-50 sm:text-base">
            <strong className="font-bold text-white">
              Engineering Scale:
            </strong>{" "}
            Backed by a high-velocity development framework of over 100+
            specialized core software engineers in India, working alongside
            international product, design, legal, compliance and operations
            leadership.
          </p>
        </div>
      </div>
    </section>
  );
}