"use client";

import { useEffect, useRef, useState } from "react";

const principles = [
  {
    icon: "/about-us/zero-trust.png",
    title: "Zero-Trust Security",
    description:
      "Security and privacy by design, with strict zero-trust network principles built natively at every microservices endpoint.",
  },
  {
    icon: "/about-us/jurisdiction.png",
    title: "Jurisdiction Aware",
    description:
      "Active policy routing and sovereign database segregation designed around local operational compliance guidelines.",
  },
  {
    icon: "/about-us/audit.png",
    title: "Immutable Audit Trails",
    description:
      "Continuous auditable logging, data provenance tracking, and regulatory evidence generation for critical enterprise workloads.",
  },
  {
    icon: "/about-us/oversight.png",
    title: "Human Oversight Controls",
    description:
      "Granular role-based access management with explicit human verification triggers on high-impact agentic actions.",
  },
  {
    icon: "/about-us/accessibility.png",
    title: "WCAG Accessibility First",
    description:
      "Empathetic accessibility treated as a non-negotiable engineering mandate across every customer-facing application interface.",
  },
  {
    icon: "/about-us/ai-framework.png",
    title: "Accountable AI Framework",
    description:
      "Clear model explainability, strictly governed training boundaries, and absolute model execution logging.",
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
      className="w-full overflow-hidden bg-white"
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-12 px-6 py-16 sm:px-10 sm:py-20 lg:gap-14 lg:px-28 lg:py-24">

        {/* Header */}
        <div
          className={`flex w-full flex-col items-start gap-4 transition-all duration-1000 ease-out ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-12 opacity-0"
          }`}
        >
          {/* Badge */}
          <div className="group inline-flex items-center gap-2 rounded-full border border-cyan-700/30 bg-cyan-700/10 px-3 py-1.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-700/60 hover:bg-cyan-700/15">
            <span className="text-[10px] font-bold uppercase tracking-wide text-cyan-700">
              Trust Is Part of the Architecture
            </span>
          </div>

          {/* Heading */}
          <h2 className="w-full text-3xl font-extrabold leading-tight tracking-tight text-slate-900 transition-transform duration-500 hover:translate-x-1 sm:text-4xl lg:text-4xl lg:leading-[1.35]">
            Governance cannot sit outside the product lifecycle
          </h2>
        </div>

        {/* Governance Cards */}
        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((principle, index) => (
            <article
              key={principle.title}
              className={`group flex min-h-[280px] flex-col items-start rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all duration-700 ease-out hover:-translate-y-2 hover:border-cyan-700/40 hover:bg-white hover:shadow-[0_18px_40px_rgba(15,23,42,0.10)] sm:p-7 ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-14 opacity-0"
              }`}
              style={{
                transitionDelay: `${100 + index * 90}ms`,
              }}
            >
              {/* Icon */}
              <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-cyan-700/30 bg-cyan-700/10 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-cyan-700/50 group-hover:bg-cyan-700/15">
                <img
                  src={principle.icon}
                  alt=""
                  className="h-5 w-5 object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Title */}
              <h3 className="mt-4 text-xl font-extrabold leading-7 text-slate-900 transition-all duration-300 group-hover:translate-x-1 group-hover:text-cyan-700">
                {principle.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm font-normal leading-5 text-slate-500 transition-colors duration-300 group-hover:text-slate-600">
                {principle.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}