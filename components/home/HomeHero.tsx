"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { plusJakarta, poppins, manrope } from "@/fonts";

export default function HomeHero() {
  const heroRef = useRef<HTMLElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const auraRef = useRef<HTMLDivElement | null>(null);

  const [isVisible, setIsVisible] = useState(false);

  /* ========================================================
     SCROLL REVEAL
  ======================================================== */
  useEffect(() => {
    const element = heroRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  /* ========================================================
     HERO LIGHT ANIMATION

     LOW
       ↓
     BRIGHT
       ↓
     BRIGHT
       ↓
     LOW
       ↓
     LOW
       ↓
     REPEAT
  ======================================================== */
  useEffect(() => {
    if (!isVisible) return;

    const image = imageRef.current;
    const aura = auraRef.current;

    if (!image) return;

    let animationFrame = 0;
    let startTime: number | null = null;

    const duration = 3300;

    const animate = (time: number) => {
      if (startTime === null) {
        startTime = time;
      }

      const elapsed = (time - startTime) % duration;
      const progress = elapsed / duration;

      let brightness: number;

      /* ====================================================
         LOW → BRIGHT
      ==================================================== */
      if (progress < 0.25) {
        const p = progress / 0.25;
        const eased = p * p * (3 - 2 * p);

        brightness = 0.52 + (1.42 - 0.52) * eased;
      }

      /* ====================================================
         BRIGHT
      ==================================================== */
      else if (progress < 0.58) {
        brightness = 1.42;
      }

      /* ====================================================
         BRIGHT → LOW
      ==================================================== */
      else if (progress < 0.82) {
        const p = (progress - 0.58) / 0.24;
        const eased = p * p * (3 - 2 * p);

        brightness = 1.42 - (1.42 - 0.52) * eased;
      }

      /* ====================================================
         LOW
      ==================================================== */
      else {
        brightness = 0.52;
      }

      /* ====================================================
         APPLY IMAGE FILTER

         Opacity stays 1.
      ==================================================== */
      image.style.filter = `
        brightness(${brightness})
        saturate(${0.82 + brightness * 0.22})
        contrast(${0.92 + brightness * 0.07})
      `;

      /* ====================================================
         ANIMATE AURA
      ==================================================== */
      if (aura) {
        const auraOpacity = Math.max(
          0.18,
          Math.min(1, (brightness - 0.35) / 1.1)
        );

        const auraScale = 0.92 + auraOpacity * 0.12;

        aura.style.opacity = `${auraOpacity}`;
        aura.style.transform = `scale(${auraScale})`;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
    }, [isVisible]);

  return (
    <section
      ref={heroRef}
      className="relative w-full overflow-hidden bg-gray-950"
    >
      {/* =====================================================
          BACKGROUND GREEN GLOW
      ===================================================== */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-0
          top-0
          h-[600px]
          w-[600px]
          lg:h-[798px]
          lg:w-[749px]
          bg-[linear-gradient(167deg,rgba(6,78,59,0.4),rgba(6,78,59,0.4)_86%,transparent)]
          blur-[49.35px]
        "
      />

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-center
          justify-between
          gap-10
          px-5
          py-12
          sm:px-8
          sm:py-16
          lg:flex-row
          lg:items-center
          lg:gap-8
          lg:px-12
          lg:py-20
          xl:gap-12
          xl:px-20
          xl:py-24
        "
      >
        {/* ===================================================
            LEFT CONTENT
        =================================================== */}
        <div
          className={
            "flex w-full flex-col items-start gap-6 sm:gap-8 lg:max-w-[55%] xl:max-w-[660px] transition-all duration-[300ms] ease-[cubic-bezier(0,0,0.58,1)] " +
            (isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0")
          }
        >
          {/* =================================================
              ZOIKO TECH LABEL
          ================================================= */}
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-[100px]
              bg-cyan-700/70
              px-3
              py-1.5
              outline
              outline-1
              outline-offset-[-1px]
              outline-cyan-700/30
              transition-all
              duration-[300ms]
              ease-[cubic-bezier(0,0,0.58,1)]
              hover:bg-cyan-700/90
            "
          >
            <span
              className={`${manrope.className} text-[10px] font-bold uppercase tracking-wide text-teal-400`}
            >
              ZOIKO TECH
            </span>
          </div>

          {/* =================================================
              HEADING
          ================================================= */}
          <h1
            className={`
              ${plusJakarta.className}
              w-full
              text-3xl
              font-extrabold
              leading-[1.15]
              tracking-[-0.03em]
              text-white
              sm:text-5xl
              sm:leading-[1.2]
              lg:text-4xl
              lg:leading-[1.18]
              xl:text-[54px]
              xl:leading-[1.18]
              2xl:text-[60px]
              2xl:leading-[76px]
            `}
          >
            INTELLIGENCE.
            <br />
            INFRASTRUCTURE.
            <br />
            IMPACT.
          </h1>

          {/* =================================================
              DESCRIPTION
          ================================================= */}
          <p
            className={`
              ${poppins.className}
              w-full
              max-w-[729px]
              text-sm
              font-normal
              leading-6
              text-slate-50
              sm:text-base
              sm:leading-7
              lg:text-lg
            `}
          >
            Zoiko Tech is a global technology company building cloud and
            digital infrastructure, artificial intelligence, communications,
            enterprise software, financial technology, and industry platforms
            for organizations and people worldwide.
          </p>

          {/* =================================================
              CTA BUTTONS
          ================================================= */}
          <div className="flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
            {/* =================================================
                EXPLORE PLATFORMS
            ================================================= */}
            <Link
              href="/platforms"
              className={`
                ${poppins.className}
                group
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-lg
                bg-cyan-700
                px-5
                py-3
                text-sm
                font-semibold
                text-white
                transition-all
                duration-[300ms]
                ease-[cubic-bezier(0,0,0.58,1)]
                hover:-translate-y-0.5
                hover:bg-cyan-600
                hover:shadow-[0_10px_30px_rgba(14,116,144,0.25)]
                sm:px-6
                sm:py-3.5
                sm:text-base
              `}
            >
              <span>Explore our platforms</span>

              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="
                  transition-transform
                  duration-[300ms]
                  ease-[cubic-bezier(0,0,0.58,1)]
                  group-hover:translate-x-1
                "
              >
                <path
                  d="M3.33334 8H12.6667"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />

                <path
                  d="M8.66666 4L12.6667 8L8.66666 12"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            {/* =================================================
                TALK TO ZOIKO TECH
            ================================================= */}
            <Link
              href="/contact-us"
              className={`
                ${poppins.className}
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-lg
                border
                border-white
                px-5
                py-3
                text-sm
                font-semibold
                text-white
                transition-all
                duration-[300ms]
                ease-[cubic-bezier(0,0,0.58,1)]
                hover:-translate-y-0.5
                hover:bg-white
                hover:text-gray-950
                sm:px-6
                sm:py-3.5
                sm:text-base
              `}
            >
              Talk to Zoiko Tech
            </Link>
          </div>
        </div>

        {/* ===================================================
            RIGHT HERO IMAGE
        =================================================== */}
        <div
          className={
            "relative flex w-full justify-center lg:w-[45%] xl:w-[520px] 2xl:w-[600px] shrink-0 transition-opacity duration-[300ms] ease-[cubic-bezier(0,0,0.58,1)] " +
            (isVisible ? "opacity-100" : "opacity-0")
          }
        >
          <div className="relative h-auto w-full max-w-[340px] sm:max-w-[460px] lg:max-w-[500px] xl:max-w-[600px]">
            {/* =================================================
                ANIMATED LIGHT AURA
            ================================================= */}
            <div
              ref={auraRef}
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                left-[5%]
                top-[5%]
                z-0
                h-[90%]
                w-[90%]
                rounded-full
                bg-[radial-gradient(ellipse_at_center,rgba(0,220,255,0.3)_0%,rgba(0,190,220,0.18)_30%,rgba(0,120,160,0.08)_55%,transparent_75%)]
                blur-[35px]
              "
              style={{
                opacity: 0.18,
                transform: "scale(0.92)",
              }}
            />

            {/* =================================================
                HERO IMAGE
            ================================================= */}
            <Image
              ref={imageRef}
              src="/home/hero.png"
              alt="Zoiko Tech global technology infrastructure"
              width={640}
              height={640}
              priority
              sizes="(max-width: 640px) 340px, (max-width: 1024px) 460px, 600px"
              className="relative z-10 h-auto w-full object-contain"
              style={{
                opacity: 1,
                filter:
                  "brightness(0.52) saturate(0.93) contrast(0.96)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}