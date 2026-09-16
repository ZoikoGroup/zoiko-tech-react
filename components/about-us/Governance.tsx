"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const governancePoints = [
  {
    title: "Zero-Trust Security",
    description:
      "Security and privacy by design, with strict zero-trust network principles built natively at every microservices endpoint.",
    icon: "/about-us/governance1.png",
  },
  {
    title: "Jurisdiction Aware",
    description:
      "Active policy routing and sovereign database segregation designed around local operational compliance guidelines.",
    icon: "/about-us/governance2.png",
  },
  {
    title: "Immutable Audit Trails",
    description:
      "Continuous auditable logging, data provenance tracking, and regulatory evidence generation for critical enterprise workloads.",
    icon: "/about-us/governance3.png",
  },
  {
    title: "Human Oversight Controls",
    description:
      "Granular role-based access management with explicit human verification triggers on high-impact agentic actions.",
    icon: "/about-us/governance4.png",
  },
  {
    title: "WCAG Accessibility First",
    description:
      "Empathetic accessibility treated as a non-negotiable engineering mandate across every customer-facing application interface.",
    icon: "/about-us/governance5.png",
  },
  {
    title: "Accountable AI Framework",
    description:
      "Clear model explainability, strictly governed training boundaries, and absolute model execution logging.",
    icon: "/about-us/governance6.png",
  },
];

export default function Governance() {
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
      className="relative w-full overflow-hidden border-b border-slate-200"
    >
      {/* =====================================================
          BACKGROUND IMAGE
          public/about-us/bg3.png
      ===================================================== */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/about-us/bg3.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col items-start gap-14 px-6 py-16 sm:px-10 sm:py-20 lg:px-28 lg:py-24">
        {/* =================================================
            HEADER
        ================================================= */}
        <div
          className={`flex w-full flex-col items-start gap-4 transition-all duration-1000 ease-out ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-12 opacity-0"
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-[100px] border border-cyan-700/20 bg-transparent px-3 py-1.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-700/50">
            <span className="text-xs font-bold uppercase tracking-wide text-cyan-700">
              Trust Is Part of the Architecture
            </span>
          </div>

          {/* Heading */}
          <h2 className="w-full max-w-[1254px] text-3xl font-extrabold leading-tight tracking-tight text-slate-900 transition-transform duration-500 hover:translate-x-1 sm:text-4xl lg:text-4xl lg:leading-[1.35]">
            Governance cannot sit outside the product lifecycle
          </h2>
        </div>

        {/* =================================================
            GOVERNANCE GRID
        ================================================= */}
        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {governancePoints.map((point, index) => (
            <article
              key={point.title}
              className={`group relative h-[288px] w-full transition-all duration-700 ease-out ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-14 opacity-0"
              }`}
              style={{
                transitionDelay: `${150 + index * 120}ms`,
              }}
            >
              {/* =================================================
                  ICON CONTAINER
              ================================================= */}
              <div className="absolute left-0 top-0 z-20 flex h-20 w-24 items-center justify-center overflow-hidden rounded-3xl bg-teal-700 transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-lg">
                <Image
                  src={point.icon}
                  alt=""
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* =================================================
                  CARD
                  Transparent - no background color
              ================================================= */}
              <div className="absolute left-[51px] top-[52px] flex h-56 w-[calc(100%-51px)] overflow-hidden rounded-3xl border border-cyan-700/15 bg-transparent transition-all duration-500 group-hover:-translate-y-1 group-hover:border-cyan-700/30 group-hover:shadow-[0_18px_40px_rgba(15,23,42,0.10)]">
                {/* Card content */}
                <div className="flex w-full flex-col items-start justify-start gap-5 px-6 py-8 sm:px-7">
                  <div className="flex w-full flex-col items-start gap-2">
                    {/* Title */}
                    <h3
                      className={`w-full text-2xl font-extrabold leading-9 tracking-tight text-slate-900 transition-transform duration-500 group-hover:translate-x-1 sm:text-3xl ${
                        point.title === "Human Oversight Controls"
                          ? "text-[27px] sm:text-[30px]"
                          : ""
                      }`}
                    >
                      {point.title}
                    </h3>

                    {/* Description */}
                    <p className="w-full text-sm font-normal leading-5 text-slate-500 transition-colors duration-300 group-hover:text-slate-700">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}