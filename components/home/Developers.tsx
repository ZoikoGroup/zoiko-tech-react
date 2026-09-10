"use client";

import { useEffect, useRef, useState } from "react";

const developerSections = [
  {
    number: "01",
    title: "Build",
    items: [
      "REST & gRPC APIs",
      "Python, Go & Node.js SDKs",
      "Zoiko AI Model APIs",
      "Real-time Event Webhooks",
    ],
  },
  {
    number: "02",
    title: "Test",
    items: [
      "Isolated Sandbox Mode",
      "Interactive API Playground",
      "Language-specific Quickstarts",
      "Production-grade Blueprints",
    ],
  },
  {
    number: "03",
    title: "Operate",
    items: [
      "Token-based Authentication",
      "Granular Access Controls",
      "Usage Metering Pipelines",
      "Distributed Observability",
    ],
  },
  {
    number: "04",
    title: "Ecosystem",
    items: [
      "SaaS Connectors",
      "Certified Technology Partners",
      "Zoiko Marketplace Listings",
      "Governance Frameworks",
    ],
  },
];

export default function Developers() {
  return (
    <section className="w-full overflow-hidden bg-teal-50 px-4 py-16 sm:px-6 md:px-10 lg:px-20 lg:py-28">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-12 lg:gap-20">
        {/* Header */}
        <Reveal>
          <div className="flex w-full flex-col items-start gap-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-cyan-700">
              ZOIKO FOR DEVELOPERS
            </p>

            <h2 className="text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-5xl lg:leading-[1.2]">
              Build on Zoiko technology
            </h2>

            <p className="max-w-[900px] text-sm font-normal leading-6 text-slate-600 sm:text-base lg:text-lg lg:leading-7">
              APIs, SDKs, model interfaces, webhooks, sandbox environments,
              identity, observability, usage controls, documentation and
              integrations form the common developer layer across the Zoiko
              ecosystem.
            </p>
          </div>
        </Reveal>

        {/* Developer Cards */}
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {developerSections.map((section, index) => (
            <Reveal key={section.number} delay={index * 120}>
              <div className="group flex min-h-[330px] w-full flex-col justify-between rounded-xl bg-white p-6 outline outline-1 outline-offset-[-1px] outline-neutral-200 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0px_14px_32px_0px_rgba(15,23,42,0.10)] sm:p-7">
                <div className="flex w-full flex-col gap-4">
                  {/* Card Header */}
                  <div className="flex w-full items-center justify-between">
                    <h3 className="text-2xl font-extrabold leading-9 text-zinc-900 transition-transform duration-300 group-hover:translate-x-1 sm:text-3xl">
                      {section.title}
                    </h3>

                    <span className="text-xs font-bold tracking-wide text-cyan-700 opacity-40 transition-all duration-300 group-hover:opacity-70">
                      {section.number}
                    </span>
                  </div>

                  {/* Divider */}
                  <div className="h-px w-full bg-cyan-700/10 transition-all duration-500 group-hover:bg-cyan-700/20" />

                  {/* Items */}
                  <div className="flex w-full flex-col gap-3">
                    {section.items.map((item, itemIndex) => (
                      <div
                        key={item}
                        className="flex w-full items-center gap-2 transition-transform duration-300 group-hover:translate-x-0.5"
                        style={{
                          transitionDelay: `${itemIndex * 30}ms`,
                        }}
                      >
                        <span className="flex size-3.5 shrink-0 items-center justify-center">
                          <span className="h-1.5 w-3 rounded-full border-2 border-cyan-700 transition-all duration-300 group-hover:bg-cyan-700" />
                        </span>

                        <span className="min-w-0 flex-1 text-sm font-normal leading-5 text-slate-400">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Buttons */}
        <Reveal delay={200}>
          <div className="flex w-full flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-center">
            <a
              href="#"
              className="flex items-center justify-center gap-2 rounded-lg bg-cyan-700 px-6 py-3.5 text-center text-base font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:opacity-90 hover:shadow-lg"
            >
              <span>Explore Developer Platform</span>
            </a>

            <a
              href="#"
              className="flex items-center justify-center rounded-lg px-6 py-3.5 text-center text-base font-semibold text-cyan-700 outline outline-1 outline-offset-[-1px] outline-cyan-700 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-700 hover:text-white hover:shadow-md"
            >
              Read documentation
            </a>
          </div>
        </Reveal>
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