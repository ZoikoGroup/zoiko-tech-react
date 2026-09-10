"use client";

import { useEffect, useRef, useState } from "react";

export default function Thesis() {
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
        threshold: 0.15,
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
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-12 px-6 py-16 sm:px-10 sm:py-20 lg:px-28 lg:py-24">

        {/* Header */}
        <div
          className={`flex w-full flex-col items-start gap-4 transition-all duration-1000 ease-out ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          {/* Badge */}
          <div className="group inline-flex cursor-default items-center gap-2 rounded-full border border-cyan-700/30 bg-cyan-700/10 px-3 py-1.5 transition-all duration-300 hover:border-cyan-700/60 hover:bg-cyan-700/15 hover:-translate-y-0.5">
            <span className="text-[10px] font-bold uppercase tracking-wide text-cyan-700 transition-colors duration-300 group-hover:text-cyan-800">
              Our Thesis
            </span>
          </div>

          {/* Heading */}
          <h2 className="w-full text-3xl font-extrabold leading-tight tracking-tight text-slate-900 transition-transform duration-500 hover:translate-x-1 sm:text-4xl lg:text-4xl lg:leading-[1.35]">
            The next generation of technology companies will not be defined
            by software alone.
          </h2>
        </div>

        {/* Content */}
        <div className="flex w-full flex-col items-start gap-6">

          {/* Paragraph 1 */}
          <p
            className={`w-full text-base font-normal leading-7 text-slate-500 transition-all delay-100 duration-1000 ease-out hover:text-slate-700 sm:text-lg ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            They will be defined by the intelligence, infrastructure, trust
            and operating systems on which businesses and institutions
            increasingly depend. ZoikoTech is being built for that role.
          </p>

          {/* Paragraph 2 */}
          <p
            className={`w-full text-base font-normal leading-7 text-slate-500 transition-all delay-200 duration-1000 ease-out hover:text-slate-700 sm:text-lg ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            Headquartered in Sacramento, California, ZoikoTech develops
            technology across telecommunications, enterprise software,
            financial operations, cybersecurity, communications, media,
            healthcare, regulatory intelligence, cloud infrastructure and
            artificial intelligence. It also serves as a technology engine
            for companies across the wider Zoiko Group.
          </p>

          {/* Objective */}
          <p
            className={`w-full text-base font-normal leading-7 text-cyan-700 transition-all delay-300 duration-1000 ease-out hover:translate-x-1 hover:text-cyan-800 sm:text-lg ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            Our objective is straightforward: make complex systems easier to
            operate, regulated environments easier to navigate, and digital
            infrastructure more intelligent, auditable and resilient.
          </p>

        </div>
      </div>
    </section>
  );
}