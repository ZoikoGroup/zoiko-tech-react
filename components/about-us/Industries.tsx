"use client";

import { useEffect, useRef, useState } from "react";

const industries = [
  {
    image: "/about-us/telecom.png",
    title: "Telecommunications",
    description:
      "ZoikoNex, communications infrastructure, billing, eSIM, and operator integrations.",
  },
  {
    image: "/about-us/finance.png",
    title: "Financial & Business",
    description:
      "Comprehensive payroll, billing, accounting, financial logic, and professional intelligence.",
  },
  {
    image: "/about-us/security1.png",
    title: "Cybersecurity & Trust",
    description:
      "Protected by ZoikoShield, identity access management, risk matrix, and automated auditing.",
  },
  {
    image: "/about-us/healthcare.png",
    title: "Healthcare Operations",
    description:
      "Medication access through ZoikoMeds and sovereign compliant healthcare administrative systems.",
  },
  {
    image: "/about-us/media1.png",
    title: "Media & Communications",
    description:
      "ZoikoStream platform integrations, Live Events delivery, Sema, and local telecom routing.",
  },
  {
    image: "/about-us/government.png",
    title: "Government & Enterprise",
    description:
      "Highly accessible sovereign digital services and continuous regulatory compliance engines.",
  },
  {
    image: "/about-us/mobility.png",
    title: "Mobility & Property",
    description:
      "Logistics, transport integrations through Zoiko Rides, and property management on Zoiko Rooms.",
  },
  {
    image: "/about-us/agriculture.png",
    title: "Agriculture & Foods",
    description:
      "Smart farming solutions, food supply chain management, agricultural analytics, and sustainable food production systems.",
  },
];

export default function Industries() {
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
        threshold: 0.08,
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
          <div className="group inline-flex items-center gap-2 rounded-full border border-cyan-700/30 bg-cyan-700/10 px-3 py-1.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-700/50 hover:bg-cyan-700/15">
            <span className="text-[10px] font-bold uppercase tracking-wide text-cyan-700">
              Technology for Complex Industries
            </span>
          </div>

          {/* Heading */}
          <h2 className="w-full text-3xl font-extrabold leading-tight tracking-tight text-slate-900 transition-transform duration-500 hover:translate-x-1 sm:text-4xl lg:text-4xl lg:leading-[1.35]">
            Strongest where software must do more than present information
          </h2>
        </div>

        {/* Industry Grid */}
        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {industries.map((industry, index) => (
            <article
              key={industry.title}
              className={`group flex min-h-[320px] flex-col rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all duration-700 ease-out hover:-translate-y-2 hover:border-cyan-700/30 hover:bg-white hover:shadow-[0_18px_40px_rgba(15,23,42,0.10)] ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{
                transitionDelay: `${100 + index * 90}ms`,
              }}
            >
              {/* Image */}
              <div className="h-36 w-full overflow-hidden rounded-lg">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Title */}
              <h3 className="mt-4 text-lg font-bold leading-6 text-slate-900 transition-colors duration-300 group-hover:text-cyan-700">
                {industry.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm font-normal leading-5 text-slate-500 transition-colors duration-300 group-hover:text-slate-600">
                {industry.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}