import React from "react";
import { heroImg, primaryBtn, ghostBtn, textLink } from "./shared";

export default function Hero() {
  return (
    <section className="w-full px-8 md:px-32 py-24 bg-linear-56 from-color-black-solid to-color-cyan-25">
      <div className="max-w-[1180px] mx-auto flex flex-col lg:flex-row gap-5 items-start">
        <div className="flex flex-col gap-3 flex-1">
          {/* Badge */}
          <div>
            <div className="inline-flex items-center rounded-[99px] outline outline-1 -outline-offset-1 outline-color-cyan-67 px-2.5 pt-px pb-[2.47px]">
              <span className="zk-body text-color-cyan-67 text-xs font-semibold leading-5">
                Technology &amp; SaaS
              </span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="zk-heading text-color-white-solid text-[60px] font-bold leading-[62.56px] max-w-[722px] pt-5 pb-[0.63px]">
            Modernize the technology estate without creating another layer of
            complexity.
          </h1>

          {/* Copy */}
          <p className="zk-body text-color-cyan-90 text-lg font-normal leading-7 max-w-[776.94px]">
            Zoiko Tech brings enterprise software, governed AI, developer
            infrastructure, integration, identity, operational controls and
            shared technology foundations into one coherent architecture for
            organizations modernizing how they build and run.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap content-start pt-5">
            <div className="min-h-14 pr-3 pb-3">
              <a href="#contact-sales" className={primaryBtn}>
                Contact Sales
              </a>
            </div>
            <div className="min-h-14 pr-3 pb-3">
              <a href="#platform-evidence" className={ghostBtn}>
                Explore Platforms
              </a>
            </div>
            <div className="flex items-center">
              <a href="#developer-integration" className={textLink}>
                Explore Developer Platform →
              </a>
            </div>
          </div>

          {/* Footnote */}
          <p className="zk-body text-color-cyan-90 text-xs font-normal leading-5 pt-5">
            Architecture-first. Integration-aware. Governed for enterprise
            operations.
          </p>
        </div>

        {/* Hero visual */}
        <img
          src={heroImg.src}
          alt="Technology and SaaS platform overview"
          className="w-[534px] h-[533px] object-cover object-top rounded-sm pointer-events-none select-none hidden lg:block"
        />
      </div>
    </section>
  );
}
