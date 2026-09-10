"use client";

import { useEffect, useRef, useState } from "react";

export default function ZoikoTechHero() {
  return (
    <section
      className="relative w-full overflow-hidden bg-slate-950 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/home/zoiko-tech-hero.png')",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      <div className="relative mx-auto flex min-h-[650px] w-full max-w-[1440px] items-center px-5 py-20 sm:px-8 md:min-h-[700px] md:px-12 lg:px-20 xl:px-28">
        <div className="flex w-full max-w-[900px] flex-col items-start gap-6 md:gap-8">
          {/* Badge */}
          <Reveal delay={0}>
            <div className="inline-flex items-center rounded-full border border-cyan-700/30 bg-cyan-700/70 px-3 py-1.5 transition-all duration-300 hover:border-cyan-700/60 hover:bg-cyan-700/80">
              <span className="text-[10px] font-bold uppercase tracking-wide text-teal-400">
                ZOIKO TECH
              </span>
            </div>
          </Reveal>

          {/* Heading */}
          <Reveal delay={120}>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              INTELLIGENCE.
              <br />
              INFRASTRUCTURE.
              <br />
              IMPACT.
            </h1>
          </Reveal>

          {/* Main Description */}
          <Reveal delay={220}>
            <p className="max-w-[850px] text-base font-normal leading-7 text-slate-50 sm:text-lg">
              Zoiko Tech is a global technology company building cloud and
              digital infrastructure, artificial intelligence, communications,
              enterprise software, financial technology, and industry
              platforms for organizations and people worldwide.
            </p>
          </Reveal>

          {/* Secondary Description */}
          <Reveal delay={320}>
            <p className="max-w-[820px] text-sm font-normal leading-6 text-slate-50">
              We make complex systems easier to operate, regulated environments
              easier to navigate, and digital infrastructure more intelligent,
              auditable, and resilient.
            </p>
          </Reveal>

          {/* CTA Buttons */}
          <Reveal delay={420}>
            <div className="flex w-full flex-col gap-3 pt-2 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-700 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-600 hover:shadow-lg sm:text-base"
              >
                Explore our platforms
                <span className="text-lg transition-transform duration-300 hover:translate-x-0.5">
                  ↗
                </span>
              </button>

              <button
                type="button"
                className="inline-flex items-center justify-center rounded-lg border border-white px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-slate-950 hover:shadow-lg sm:text-base"
              >
                Talk to Zoiko Tech
              </button>
            </div>
          </Reveal>

          {/* AI & Infrastructure Link */}
          <Reveal delay={520}>
            <button
              type="button"
              className="group inline-flex items-center gap-2 pt-1 text-sm font-medium text-teal-400 transition-all duration-300 hover:translate-x-1 hover:text-teal-300 sm:text-base"
            >
              <span>Explore AI &amp; infrastructure</span>

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </button>
          </Reveal>
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
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transform transition-all duration-700 ease-out ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}