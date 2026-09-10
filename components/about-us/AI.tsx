"use client";

import { useEffect, useRef, useState } from "react";

const domains = [
  "Logistics & Supply Chain",
  "Telecommunications",
  "Financial Services",
  "Healthcare",
  "Regulatory Compliance",
  "Media & Streaming",
  "Government Infrastructures",
];

const capabilities = [
  {
    title: "Governed AI",
    description:
      "Reliable intelligence that can be explained, governed and used responsibly. Human oversight, evidence, permissions and auditability are product requirements.",
  },
  {
    title: "Agentic Systems",
    description:
      "ZoikoVertex represents the company's commercial entry into governed agentic execution, mapping complex operational decisions seamlessly.",
  },
];

export default function AI() {
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
      className="w-full overflow-hidden border-b border-gray-800 bg-[#071A1F]"
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
          <div className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/15">
            <span className="text-[10px] font-bold uppercase tracking-wide text-teal-400">
              Artificial Intelligence
            </span>
          </div>

          {/* Heading */}
          <h2 className="w-full text-3xl font-extrabold leading-tight tracking-tight text-white transition-transform duration-500 hover:translate-x-1 sm:text-4xl lg:text-4xl lg:leading-[1.35]">
            Intelligence with Domain Depth
          </h2>

          {/* Description */}
          <p className="w-full max-w-[1100px] text-base font-normal leading-7 text-slate-100 sm:text-lg">
            ZoikoTech&apos;s AI strategy is not based on attaching a chatbot
            to every application. We build domain intelligence around the
            actual decision structures, data, workflows and regulatory
            constraints of the industries we serve.
          </p>
        </div>

        {/* Domains + Capabilities */}
        <div className="grid w-full grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-8">

          {/* Domain Stacks */}
          <div
            className={`flex w-full flex-col gap-5 transition-all duration-1000 ease-out ${
              visible
                ? "translate-x-0 opacity-100"
                : "-translate-x-12 opacity-0"
            }`}
            style={{
              transitionDelay: "150ms",
            }}
          >
            <h3 className="text-xl font-extrabold text-teal-400">
              7 Key AI Domain Stacks
            </h3>

            <div className="flex w-full flex-col gap-3">
              {domains.map((domain, index) => (
                <div
                  key={domain}
                  className="group flex w-full items-center gap-3 border-b border-gray-800 pb-2 transition-all duration-300 hover:border-teal-400/50 hover:pl-2"
                >
                  <span className="w-8 text-base font-bold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="flex-1 text-sm font-normal text-slate-400 transition-colors duration-300 group-hover:text-white sm:text-base">
                    {domain}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Capabilities */}
          <div
            className={`flex w-full flex-col gap-6 transition-all duration-1000 ease-out ${
              visible
                ? "translate-x-0 opacity-100"
                : "translate-x-12 opacity-0"
            }`}
            style={{
              transitionDelay: "250ms",
            }}
          >
            {capabilities.map((item) => (
              <article
                key={item.title}
                className="group rounded-xl border border-gray-800 bg-gray-800 p-6 transition-all duration-400 hover:-translate-y-1 hover:border-gray-600 hover:shadow-[0_16px_35px_rgba(0,0,0,0.25)]"
              >
                <h3 className="mb-3 text-xl font-extrabold text-white transition-colors duration-300 group-hover:text-teal-300">
                  {item.title}
                </h3>

                <p className="text-sm font-normal leading-5 text-slate-400 transition-colors duration-300 group-hover:text-slate-300">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* ZoikoLogia Core */}
        <div
          className={`group flex w-full flex-col gap-6 rounded-2xl border border-cyan-700/30 bg-gray-800 p-6 transition-all duration-1000 ease-out hover:border-cyan-600/60 hover:shadow-[0_20px_45px_rgba(0,0,0,0.25)] sm:p-8 lg:flex-row lg:items-center lg:gap-6 ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-12 opacity-0"
          }`}
          style={{
            transitionDelay: "450ms",
          }}
        >
          {/* Text */}
          <div className="flex flex-1 flex-col gap-3">
            <h3 className="text-2xl font-extrabold text-teal-400 transition-transform duration-500 group-hover:translate-x-1 sm:text-3xl">
              ZoikoLogia Core
            </h3>

            <p className="text-sm font-normal leading-6 text-slate-400 sm:text-base">
              A specialist LLM environment for accounting, finance and
              public-markets professionals.{" "}
              <strong className="font-bold text-white">
                Kriton
              </strong>{" "}
              is its conversational AI interface;{" "}
              <strong className="font-bold text-white">
                Massarius
              </strong>{" "}
              is its professional platform.
            </p>
          </div>

          {/* Image */}
          <div className="h-28 w-full shrink-0 overflow-hidden rounded-lg sm:h-32 lg:w-44">
            <img
              src="/about-us/logia.png"
              alt="ZoikoLogia Core"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}