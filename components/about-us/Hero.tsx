"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const elements = section.querySelectorAll<HTMLElement>("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="group relative overflow-hidden bg-[#071A1F]"
    >
      <div className="mx-auto flex min-h-[720px] w-full max-w-[1440px] flex-col items-center gap-12 px-6 py-24 sm:px-10 lg:min-h-[906px] lg:flex-row lg:items-center lg:gap-14 lg:px-20 lg:pt-44 lg:pb-28">

        {/* Left Content */}
        <div className="flex w-full max-w-[735px] flex-col items-start gap-8">

          {/* Badge */}
          <div
            data-reveal
            className="
              inline-flex items-center gap-2 rounded-full
              border border-white/20 bg-white/10 px-3 py-1.5
              opacity-0 translate-y-6
              transition-all duration-700 ease-out
              hover:border-teal-400/50 hover:bg-teal-400/10
              hover:-translate-y-0.5
              [&.is-visible]:translate-y-0
              [&.is-visible]:opacity-100
            "
          >
            <span className="text-[10px] font-bold uppercase tracking-wide text-teal-400">
              About ZoikoTech
            </span>
          </div>

          {/* Heading */}
          <h1
            data-reveal
            className="
              w-full text-4xl font-extrabold leading-tight tracking-tight
              text-white sm:text-5xl lg:text-6xl lg:leading-[66px]
              opacity-0 translate-y-10
              transition-all duration-1000 delay-100 ease-out
              [&.is-visible]:translate-y-0
              [&.is-visible]:opacity-100
            "
          >
            INTELLIGENCE.
            <br />
            INFRASTRUCTURE.
            <br />
            IMPACT.
          </h1>

          {/* Description */}
          <p
            data-reveal
            className="
              max-w-[700px] text-base font-normal leading-7 text-slate-400
              sm:text-lg lg:text-xl lg:leading-8
              opacity-0 translate-y-10
              transition-all duration-1000 delay-200 ease-out
              [&.is-visible]:translate-y-0
              [&.is-visible]:opacity-100
            "
          >
            ZoikoTech Inc. is a California-based global technology company
            building intelligent infrastructure, enterprise platforms and
            domain-specific AI for organizations operating across industries,
            jurisdictions and borders.
          </p>
        </div>

        {/* Right Image Card */}
        <div
          data-reveal
          className="
            flex h-[360px] w-full max-w-[456px] items-center justify-center
            overflow-hidden rounded-2xl
            border border-white/10 bg-white/5
            shadow-[0px_12px_40px_0px_rgba(0,0,0,0.25)]
            opacity-0 translate-x-10
            transition-all duration-1000 delay-300 ease-out
            hover:-translate-y-2
            hover:border-teal-400/30
            hover:shadow-[0px_20px_55px_0px_rgba(0,0,0,0.35)]
            [&.is-visible]:translate-x-0
            [&.is-visible]:opacity-100
            sm:h-[420px]
            lg:h-[500px]
          "
        >
          <img
            src="/about-us/about-hero.png"
            alt="ZoikoTech technology infrastructure"
            className="
              h-full w-full object-cover
              transition-transform duration-700 ease-out
              hover:scale-105
            "
          />
        </div>
      </div>
    </section>
  );
}