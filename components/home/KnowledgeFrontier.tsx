"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { poppins, plusJakarta, urbanist } from "@/fonts";

/* ============================================================
   SCROLL REVEAL
============================================================ */

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

function Reveal({
  children,
  className = "",
  delay = 0,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`
        ${className}
        transition-all
        duration-1000
        ease-[cubic-bezier(0.22,1,0.36,1)]
        ${
          visible
            ? "translate-y-0 opacity-100"
            : "translate-y-12 opacity-0"
        }
      `}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ============================================================
   RESEARCH DATA
============================================================ */

const researchCards = [
  {
    image: "/home/k1.png",
    title:
      "Formal Verification of Multi-Agent AI Workflows in Regulated Operations",
    description:
      "A mathematically rigorous analysis of transaction integrity, verification safety boundaries, and compliance automation.",
  },
  {
    image: "/home/k2.png",
    title:
      "Formal Verification of Multi-Agent AI Workflows in Regulated Operations",
    description:
      "A mathematically rigorous analysis of transaction integrity, verification safety boundaries, and compliance automation.",
  },
  {
    image: "/home/k3.png",
    title:
      "Formal Verification of Multi-Agent AI Workflows in Regulated Operations",
    description:
      "A mathematically rigorous analysis of transaction integrity, verification safety boundaries, and compliance automation.",
  },
];

/* ============================================================
   RESEARCH CARD
============================================================ */

function ResearchCard({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) {
  return (
    <article
      className="
        group/card
        relative
        flex
        h-full
        min-h-[440px]
        w-full
        max-w-[388px]
        flex-col
        justify-between
        overflow-hidden
        rounded-3xl
        border
        border-teal-400/10
        bg-teal-700/20
        p-6
        sm:p-7
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-teal-400/30
        hover:bg-teal-700/25
      "
    >
      {/* ======================================================
          CARD CONTENT - TOP
      ====================================================== */}
      <div className="relative z-10 flex flex-col gap-4">
        {/* Category */}
        <div
          className="
            inline-flex
            w-fit
            items-center
            rounded-3xl
            bg-teal-700/25
            px-3
            py-1.5
            transition-all
            duration-300
            group-hover/card:bg-teal-700/40
          "
        >
          <span
            className={`
              ${poppins.className}
              text-xs
              font-semibold
              uppercase
              tracking-wide
              text-teal-400
            `}
          >
            ZOIKO RESEARCH
          </span>
        </div>

        {/* Icon + title */}
        <div className="flex items-center gap-4 sm:gap-5">
          {/* Icon */}
          <div
            className="
              relative
              h-20
              w-20
              shrink-0
              overflow-hidden
              rounded-2xl
              bg-teal-600/50
              transition-all
              duration-500
              group-hover/card:scale-105
              group-hover/card:bg-teal-600/60
            "
          >
            <Image
              src={image}
              alt=""
              fill
              sizes="80px"
              className="
                object-contain
                p-3.5
                transition-transform
                duration-500
                group-hover/card:scale-110
              "
            />
          </div>

          {/* Title */}
          <h3
            className={`
              ${urbanist.className}
              min-w-0
              flex-1
              text-lg
              sm:text-xl
              font-bold
              leading-snug
              text-white
            `}
          >
            {title}
          </h3>
        </div>
      </div>

      {/* Decorative center line */}
      <div className="relative my-3 sm:my-4 h-px w-full bg-gradient-to-r from-transparent via-teal-400/20 to-transparent" />

      {/* ======================================================
          CARD CONTENT - BOTTOM
      ====================================================== */}
      <div className="relative z-10 flex flex-col items-start gap-3">
        {/* Description */}
        <p
          className={`
            ${poppins.className}
            line-clamp-3
            w-full
            text-xs
            sm:text-sm
            font-normal
            leading-relaxed
            text-gray-300
          `}
        >
          {description}
        </p>

        {/* Read link */}
        <div className="pt-2">
          <button
            type="button"
            className="
              group/link
              flex
              items-center
              gap-1.5
              text-left
            "
          >
            <span
              className={`
                ${poppins.className}
                text-xs
                font-semibold
                text-white
                transition-colors
                duration-300
                group-hover/link:text-teal-300
              `}
            >
              Read technical paper
            </span>

            {/* Arrow */}
            <span
              className="
                relative
                h-3
                w-3
                overflow-hidden
              "
            >
              <span
                className="
                  absolute
                  left-0
                  top-0
                  h-2
                  w-2
                  border-r-2
                  border-t-2
                  border-white
                  rotate-45
                  transition-transform
                  duration-300
                  group-hover/link:translate-x-0.5
                  group-hover/link:-translate-y-0.5
                "
              />

              <span
                className="
                  absolute
                  left-0
                  top-[6px]
                  h-0.5
                  w-3
                  bg-white
                  transition-transform
                  duration-300
                  group-hover/link:translate-x-0.5
                "
              />
            </span>
          </button>
        </div>
      </div>

      {/* ======================================================
          SUBTLE HOVER GLOW
      ====================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          -bottom-24
          left-1/2
          h-48
          w-48
          -translate-x-1/2
          rounded-full
          bg-teal-400/10
          blur-3xl
          opacity-0
          transition-opacity
          duration-500
          group-hover/card:opacity-100
        "
      />
    </article>
  );
}

/* ============================================================
   MAIN COMPONENT
============================================================ */

export default function KnowledgeFrontier() {
  return (
    <section
      className="
        relative
        isolate
        w-full
        overflow-hidden
        bg-slate-950
        px-4
        py-12
        sm:px-8
        sm:py-16
        lg:px-12
        xl:px-20
        lg:py-20
      "
    >
      {/* ======================================================
          BACKGROUND IMAGE

          public/home/bg5.png
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/home/bg5.png"
          alt=""
          fill
          priority={false}
          sizes="100vw"
          className="
            object-cover
            object-center
          "
        />
      </div>

      {/* ======================================================
          DARK FIGMA OVERLAY

          Keeps the section permanently in dark mode.
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[1]
          bg-gradient-to-b
          from-black/70
          via-slate-950/50
          to-cyan-950/70
        "
      />

      {/* ======================================================
          SUBTLE TEAL ATMOSPHERE
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          z-[1]
          h-[600px]
          w-[900px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-teal-500/[0.04]
          blur-[120px]
        "
      />

      {/* ======================================================
          CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-[1280px]
          flex-col
          items-center
          gap-14
        "
      >
        {/* ====================================================
            HEADER
        ==================================================== */}

        <Reveal className="w-full">
          <div className="flex w-full flex-col items-start gap-4">
            {/* Eyebrow */}
            <div
              className={`
                ${poppins.className}
                text-xs
                font-semibold
                uppercase
                tracking-wider
                text-white
              `}
            >
              KNOWLEDGE FRONTIER
            </div>

            {/* Heading */}
            <h2
              className={`
                ${plusJakarta.className}
                max-w-[1000px]
                text-3xl
                font-extrabold
                leading-tight
                text-white
                sm:text-4xl
                lg:text-5xl
                lg:leading-[57.6px]
              `}
            >
              Bespoke research &amp; frontier insights
            </h2>

            {/* Description */}
            <p
              className={`
                ${poppins.className}
                max-w-[800px]
                text-base
                font-normal
                leading-7
                text-zinc-200
                sm:text-lg
              `}
            >
              Advancing the mathematical models, regulatory schemas,
              and physical computing parameters powering tomorrow&apos;s
              system orchestration.
            </p>
          </div>
        </Reveal>

        {/* ====================================================
            RESEARCH CARDS
        ==================================================== */}

        <div
          className="
            grid
            w-full
            grid-cols-1
            justify-items-center
            gap-6
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {researchCards.map((card, index) => (
            <Reveal
              key={card.image}
              delay={150 + index * 150}
              className="w-full"
            >
              <div className="flex w-full justify-center">
                <ResearchCard
                  image={card.image}
                  title={card.title}
                  description={card.description}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}