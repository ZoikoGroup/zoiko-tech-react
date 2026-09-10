"use client";

import { useEffect, useRef, useState } from "react";

export default function Ambition() {
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
      className="w-full border-b border-gray-800 bg-[#08101A] px-6 py-20 sm:px-10 sm:py-24 lg:px-28 lg:py-28"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12 lg:gap-14">
        {/* Header */}
        <div
          className={`flex w-full flex-col items-center gap-4 text-center transition-all duration-1000 ease-out ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 transition-all duration-300 hover:border-teal-400/50 hover:bg-white/15">
            <span className="text-[10px] font-bold uppercase tracking-wide text-teal-400">
              Our Ambition
            </span>
          </div>

          {/* Heading */}
          <h2 className="w-full text-3xl font-extrabold leading-tight text-white transition-transform duration-300 hover:scale-[1.01] sm:text-4xl lg:text-[42px] lg:leading-[1.45]">
            Build Technology People Depend On
          </h2>
        </div>

        {/* Description */}
        <div className="flex w-full flex-col items-center gap-6">
          <p
            className={`w-full max-w-[800px] text-center text-base font-normal leading-7 text-slate-400 transition-all duration-1000 delay-200 ease-out sm:text-lg ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            We are not trying to become the company with the longest product
            list. We are building a smaller number of technologies deeply
            enough that businesses run on them, developers build on them,
            institutions trust them and users choose them because they make
            difficult systems work better.
          </p>

          {/* Ambition Statement */}
          <div
            className={`w-full pt-3 text-center transition-all duration-1000 delay-300 ease-out ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <span className="inline-block text-xl font-extrabold tracking-wide text-teal-400 transition-all duration-300 hover:scale-105 hover:text-teal-300 sm:text-2xl lg:text-3xl">
              INTELLIGENCE. INFRASTRUCTURE. IMPACT.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}