"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const caseStudies = [
  {
    image: "/home/telecom-case-study.png",
    category: "TELECOMMUNICATIONS",
    result: "GO-LIVE IN 60 DAYS",
    title: "Sovereign Telecom OSS/BSS Infrastructure",
    context:
      "A fast-growing MVNO needed to accelerate launch and bypass complex legacy telco integrations.",
    builtWith:
      "ZoikoNex, Sovereign billing engine, eSIM profiles",
  },
  {
    image: "/home/communications-case-study.png",
    category: "NGO & ENTERPRISE",
    result: "6-WEEK DEPLOYMENT",
    title: "Multilingual Accessible Communications Platform",
    context:
      "A global NGO required a distributed, WCAG-compliant interface serving multi-border citizen populations.",
    builtWith:
      "Zoiko Sema messaging, Decentralized identity ledgers",
  },
  {
    image: "/home/financial-case-study.png",
    category: "FINANCIAL TECH",
    result: "99.99% RESILIENCE",
    title: "Cross-Border Treasury & Compliance Remittance",
    context:
      "A multijurisdictional financial institution required zero-single-point-of-failure routing under strict compliance.",
    builtWith:
      "ZoikoPay, Zoiko Remit core, ZoikoAssure",
  },
];

export default function CaseStudies() {
  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 md:px-10 lg:px-20 lg:py-28">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-10 lg:gap-14">
        {/* Header */}
        <Reveal>
          <div className="flex w-full flex-col items-start gap-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-cyan-700">
              EVIDENCE-FIRST CASES
            </p>

            <h2 className="text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-5xl lg:leading-[1.2]">
              Technology in practice
            </h2>

            <p className="max-w-[800px] text-sm font-normal leading-6 text-slate-500 sm:text-base lg:text-lg lg:leading-7">
              How global organizations leverage Zoiko Tech modules to overcome
              engineering and regulatory constraints.
            </p>
          </div>
        </Reveal>

        {/* Case Study Cards */}
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <Reveal key={study.title} delay={index * 120}>
              <article
                className="group flex h-full w-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0px_4px_12px_0px_rgba(15,23,42,0.05)] outline outline-1 outline-offset-[-1px] outline-neutral-200 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0px_16px_35px_0px_rgba(15,23,42,0.10)]"
              >
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  {/* Category + Result */}
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="rounded-full bg-cyan-700/10 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-cyan-700 sm:text-xs">
                      {study.category}
                    </span>

                    <span className="text-[10px] font-bold tracking-wide text-emerald-500 sm:text-xs">
                      {study.result}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-4 text-2xl font-extrabold leading-8 text-slate-900 transition-colors duration-300 sm:text-3xl sm:leading-9">
                    {study.title}
                  </h3>

                  {/* Context */}
                  <p className="mt-4 text-sm leading-5">
                    <span className="font-semibold text-slate-900">
                      Context:{" "}
                    </span>

                    <span className="font-normal text-slate-500">
                      {study.context}
                    </span>
                  </p>

                  {/* Built With */}
                  <p className="mt-4 text-xs font-normal leading-5 text-slate-400">
                    Built with: {study.builtWith}
                  </p>

                  {/* Link */}
                  <a
                    href="#"
                    className="mt-auto flex items-center gap-1.5 pt-7 text-sm font-semibold text-cyan-700 transition-all duration-300 hover:gap-2.5 hover:opacity-70"
                  >
                    <span>Read case study</span>

                    <span
                      aria-hidden="true"
                      className="text-lg leading-none transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </a>
                </div>
              </article>
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