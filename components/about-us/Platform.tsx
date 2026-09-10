"use client";

import { useEffect, useRef, useState } from "react";

const platforms = [
  {
    image: "/about-us/ai.png",
    title: "Artificial Intelligence & Agentic",
    description:
      "Domain-specific AI, governed agentic execution, professional intelligence and automation.",
  },
  {
    image: "/about-us/cloud.png",
    title: "Cloud & Digital Infrastructure",
    description:
      "Scalable infrastructure for Zoiko platforms, regulated workloads and future developer services.",
  },
  {
    image: "/about-us/enterprise.png",
    title: "Enterprise & Financial Operations",
    description:
      "Payroll, HR, billing, accounting, business operations, workforce intelligence and productivity.",
  },
  {
    image: "/about-us/media.png",
    title: "Communications & Media",
    description:
      "Messaging, calling, telecom services, streaming, live events and real-time digital experiences.",
  },
  {
    image: "/about-us/security.png",
    title: "Security, Identity & Assurance",
    description:
      "Cybersecurity, trust, regulatory evidence, identity, access, governance and auditable controls.",
  },
  {
    image: "/about-us/industry.png",
    title: "Industry Technology Solutions",
    description:
      "Telecommunications, healthcare, property, mobility, finance, government, media and other vertical systems.",
  },
];

export default function Platform() {
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
      className="w-full overflow-hidden border-b border-gray-800 bg-teal-900/90"
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
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/15">
            <span className="text-[10px] font-bold uppercase tracking-wide text-teal-400">
              A Global Technology Company
            </span>
          </div>

          {/* Heading */}
          <h2 className="w-full text-3xl font-extrabold leading-tight tracking-tight text-white transition-transform duration-500 hover:translate-x-1 sm:text-4xl lg:text-4xl lg:leading-[1.35]">
            Built as a Platform Company
          </h2>

          {/* Description */}
          <p className="w-full max-w-[1000px] text-base font-normal leading-7 text-slate-400 sm:text-lg">
            ZoikoTech is not organized around a single application or
            industry. We build reusable technology capabilities and apply
            them to important operating problems.
          </p>
        </div>

        {/* Platform Cards */}
        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {platforms.map((platform, index) => (
            <article
              key={platform.title}
              className={`group rounded-2xl border border-gray-700 bg-gray-800 p-5 transition-all duration-700 ease-out hover:-translate-y-2 hover:border-gray-500 hover:bg-gray-750 hover:shadow-[0_18px_45px_rgba(0,0,0,0.25)] sm:p-7 ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-14 opacity-0"
              }`}
              style={{
                transitionDelay: `${150 + index * 100}ms`,
              }}
            >
              {/* Image */}
              <div className="mb-4 h-40 w-full overflow-hidden rounded-lg">
                <img
                  src={platform.image}
                  alt={platform.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Title */}
              <h3 className="mb-3 text-xl font-extrabold leading-7 text-white transition-colors duration-300 group-hover:text-teal-300">
                {platform.title}
              </h3>

              {/* Description */}
              <p className="text-sm font-normal leading-5 text-slate-400 transition-colors duration-300 group-hover:text-slate-300">
                {platform.description}
              </p>
            </article>
          ))}
        </div>

        {/* Quote */}
        <div
          className={`flex w-full flex-col items-center rounded-xl border border-cyan-700/30 bg-cyan-700/10 p-6 transition-all duration-1000 ease-out hover:border-cyan-700/50 hover:bg-cyan-700/15 ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-12 opacity-0"
          }`}
          style={{
            transitionDelay: "800ms",
          }}
        >
          <p className="w-full text-center text-lg font-semibold leading-7 text-teal-400 transition-transform duration-500 hover:scale-[1.01] sm:text-xl">
            &quot;Build technologies that can stand independently. Integrate
            them where integration creates leverage.&quot;
          </p>
        </div>
      </div>
    </section>
  );
}