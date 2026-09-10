"use client";

import { useEffect, useRef, useState } from "react";

export default function Founder() {
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
        threshold: 0.12,
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
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-12 px-6 py-16 sm:px-10 sm:py-20 lg:gap-12 lg:px-28 lg:py-24">

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
              Founder-Led. Institution-Building.
            </span>
          </div>

          {/* Heading */}
          <h2 className="w-full text-3xl font-extrabold leading-tight tracking-tight text-slate-900 transition-transform duration-500 hover:translate-x-1 sm:text-4xl lg:text-4xl lg:leading-[1.35]">
            The institution being built is larger than any one founder or
            product
          </h2>
        </div>

        {/* Founder Content */}
        <div className="flex w-full flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-12">

          {/* Founder Image */}
          <div
            className={`group w-full shrink-0 transition-all duration-1000 ease-out lg:w-[360px] ${
              visible
                ? "translate-x-0 opacity-100"
                : "-translate-x-12 opacity-0"
            }`}
            style={{
              transitionDelay: "150ms",
            }}
          >
            <div className="aspect-[6/7] w-full overflow-hidden rounded-2xl bg-slate-100 sm:aspect-[4/5] lg:h-[420px] lg:aspect-auto">
              <img
                src="/about-us/founder.png"
                alt="Lennox McLeod"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </div>

          {/* Founder Details */}
          <div
            className={`flex w-full flex-1 flex-col items-start gap-6 transition-all duration-1000 ease-out ${
              visible
                ? "translate-x-0 opacity-100"
                : "translate-x-12 opacity-0"
            }`}
            style={{
              transitionDelay: "300ms",
            }}
          >
            {/* Name */}
            <h3 className="text-2xl font-extrabold tracking-tight text-slate-900 transition-transform duration-500 hover:translate-x-1 sm:text-3xl">
              Lennox McLeod
            </h3>

            {/* Role */}
            <p className="-mt-3 text-sm font-semibold text-cyan-700 sm:text-base">
              Founder & Executive Chairman of Zoiko Group
            </p>

            {/* Paragraph 1 */}
            <p className="text-base font-normal leading-7 text-slate-500 transition-colors duration-300 hover:text-slate-700 sm:text-lg">
              ZoikoTech was founded by Lennox McLeod, Founder and Executive
              Chairman of Zoiko Group. His background spans accounting,
              finance, law, technology strategy and cross-border enterprise
              building.
            </p>

            {/* Paragraph 2 */}
            <p className="text-base font-normal leading-7 text-slate-500 transition-colors duration-300 hover:text-slate-700 sm:text-lg">
              Under his direction, ZoikoTech Inc. has scaled as a fundamental
              technology core division of the wider Zoiko Group, developing
              next-gen tools for both external enterprise customers and
              complex internal group software systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}