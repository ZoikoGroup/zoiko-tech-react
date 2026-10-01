import React from "react";
import { heroImg, primaryBtn, ghostBtn, gradDarkToTeal } from "./shared";

export default function Hero() {
  return (
    <section className="w-full px-8 md:px-32 py-24" style={gradDarkToTeal}>
      <div className="max-w-[1180px] mx-auto flex flex-col lg:flex-row gap-6 items-start justify-between">
        <div className="flex flex-col gap-3 flex-1 min-w-0">
          {/* Badge */}
          <div>
            <div className="inline-flex items-center rounded-[99px] outline outline-1 -outline-offset-1 outline-color-cyan-67 px-2.5 pt-px pb-[2.47px]">
              <span className="zk-body text-color-cyan-67 text-xs font-semibold leading-5">
                Technology &amp; SaaS
              </span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="zk-heading text-color-white-solid text-[36px] xl:text-[40px] font-bold leading-[42px] xl:leading-[46px] pt-3 pb-1">
            <span className="block whitespace-nowrap">Modernize the technology</span>
            <span className="block whitespace-nowrap">estate without creating</span>
            <span className="block whitespace-nowrap">another layer of</span>
            <span className="block whitespace-nowrap">complexity.</span>
          </h1>

          {/* Copy */}
          <div className="zk-body text-color-white-solid text-sm xl:text-base font-normal leading-6 pt-1">
            <p className="whitespace-normal xl:whitespace-nowrap">
              Zoiko Tech brings enterprise software, governed AI, developer infrastructure,
            </p>
            <p className="whitespace-normal xl:whitespace-nowrap">
              integration, identity, operational controls and shared technology foundations into
            </p>
            <p className="whitespace-normal xl:whitespace-nowrap">
              one coherent architecture for organizations modernizing how they build and run.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a href="#contact-sales" className={primaryBtn}>
              Contact Sales
            </a>
            <a href="#platform-evidence" className={ghostBtn}>
              Explore Platforms
            </a>
            <a
              href="#developer-integration"
              className="inline-flex items-center gap-1.5 zk-body text-color-cyan-67 text-base font-semibold whitespace-nowrap"
            >
              <span>Explore Developer Platform</span>
              <svg
                className="size-3.5 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Footnote */}
          <p className="zk-body text-color-cyan-90 text-xs font-normal leading-5 pt-4">
            Architecture-first. Integration-aware. Governed for enterprise operations.
          </p>
        </div>

        {/* Hero visual */}
        <div className="w-[534px] h-[533px] min-w-[534px] min-h-[533px] shrink-0 hidden lg:flex items-center justify-center">
          <img
            src={heroImg.src}
            alt="Technology and SaaS platform overview"
            className="w-[534px] h-[533px] object-contain pointer-events-none select-none"
          />
        </div>
      </div>
    </section>
  );
}
