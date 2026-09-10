"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const foundations = [
  {
    icon: "/home/responsible-ai.png",
    title: "Responsible AI",
    description:
      "Sovereign reasoning engines aligned with rigorous global ethical guidelines and transparent bias-mitigation code.",
  },
  {
    icon: "/home/water-tight-security.png",
    title: "Water-Tight Security",
    description:
      "Zero-trust model endpoints guarded by hardware security modules (HSM) and private cloud instances.",
  },
  {
    icon: "/home/rigorous-privacy.png",
    title: "Rigorous Privacy",
    description:
      "Our platform models never learn from your telemetry or private enterprise data. Your data is and remains yours alone.",
  },
  {
    icon: "/home/regulatory-compliance.png",
    title: "Regulatory Compliance",
    description:
      "Pre-aligned to CCPA, GDPR, EU AI Act, and major global operational privacy frameworks from day one.",
  },
  {
    icon: "/home/military-grade-reliability.png",
    title: "Military-Grade Reliability",
    description:
      "Designed for distributed zero-single-point-of-failure deployment, ensuring uptime when it matters most.",
  },
  {
    icon: "/home/empathetic-accessibility.png",
    title: "Empathetic Accessibility",
    description:
      "Engineered to satisfy WCAG standards, bringing next-gen computing tools to everyone universally.",
  },
];

export default function GovernedAI() {
  return (
    <section className="relative w-full overflow-hidden bg-white px-4 py-16 sm:px-6 md:px-10 lg:px-20 lg:py-28">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[600px] -translate-x-1/2 rounded-full bg-emerald-200/30 blur-[50px]" />

      <div className="relative mx-auto flex w-full max-w-[1280px] flex-col gap-12 lg:gap-20">
        {/* Header */}
        <Reveal>
          <div className="flex w-full flex-col items-center gap-4 text-center">
            <p className="text-[10px] font-bold uppercase tracking-wide text-cyan-700">
              GOVERNED AI FOUNDATIONS
            </p>

            <h2 className="max-w-5xl text-3xl font-extrabold leading-tight text-zinc-900 sm:text-4xl lg:text-5xl lg:leading-[1.2]">
              Intelligence is valuable only when it can be trusted
            </h2>

            <p className="max-w-4xl text-sm font-normal leading-6 text-slate-400 sm:text-base lg:text-lg lg:leading-7">
              We build transparency, reliability, and human accountability
              directly into the root code of our artificial intelligence
              architectures.
            </p>
          </div>
        </Reveal>

        {/* Cards */}
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {foundations.map((foundation, index) => (
            <Reveal key={foundation.title} delay={index * 100}>
              <div className="group flex min-h-[360px] w-full flex-col rounded-2xl bg-slate-50 p-6 outline outline-1 outline-offset-[-1px] outline-emerald-500 transition-all duration-500 ease-out hover:-translate-y-2 hover:bg-white hover:shadow-[0px_16px_35px_0px_rgba(16,185,129,0.12)] sm:p-8">
                {/* Icon */}
                <div className="mb-6 flex h-28 w-32 items-center justify-start">
                  <Image
                    src={foundation.icon}
                    alt=""
                    width={144}
                    height={137}
                    className="max-h-28 max-w-32 object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col gap-3">
                  <h3 className="text-2xl font-extrabold leading-8 text-zinc-900 sm:text-3xl sm:leading-9">
                    {foundation.title}
                  </h3>

                  <p className="text-sm font-normal leading-5 text-slate-400">
                    {foundation.description}
                  </p>
                </div>
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