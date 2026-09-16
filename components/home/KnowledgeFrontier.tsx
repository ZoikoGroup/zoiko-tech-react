"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  Poppins,
  Plus_Jakarta_Sans,
  Urbanist,
} from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

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
        h-[476px]
        w-full
        max-w-[388px]
        overflow-hidden
        rounded-3xl
        border
        border-teal-400/10
        bg-teal-700/20
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-teal-400/30
        hover:bg-teal-700/25
      "
    >
      {/* ======================================================
          DECORATIVE CENTER LINE / IMAGE AREA
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-[218px]
          h-[51px]
          w-full
          overflow-hidden
          opacity-40
          transition-all
          duration-500
          group-hover/card:opacity-70
        "
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-400/20 to-transparent" />

        <div className="absolute left-0 top-1/2 h-px w-full bg-teal-400/20" />
      </div>

      {/* ======================================================
          CARD CONTENT - TOP
      ====================================================== */}

      <div
        className="
          absolute
          left-8
          right-8
          top-10
          flex
          flex-col
          gap-2.5
        "
      >
        {/* Category */}
        <div
          className="
            inline-flex
            w-fit
            items-center
            rounded-3xl
            bg-teal-700/25
            px-2.5
            py-2.5
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
        <div className="flex items-center gap-7">
          {/* Icon */}
          <div
            className="
              relative
              h-24
              w-24
              shrink-0
              overflow-hidden
              rounded-3xl
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
              sizes="96px"
              className="
                object-contain
                p-[19px]
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
              w-48
              text-xl
              font-bold
              leading-6
              text-white
            `}
          >
            {title}
          </h3>
        </div>
      </div>

      {/* ======================================================
          CARD CONTENT - BOTTOM
      ====================================================== */}

      <div
        className="
          absolute
          left-9
          right-9
          top-[305px]
          flex
          flex-col
          items-start
        "
      >
        {/* Description */}
        <p
          className={`
            ${poppins.className}
            line-clamp-3
            w-full
            text-sm
            font-normal
            leading-5
            text-gray-300
          `}
        >
          {description}
        </p>

        {/* Read link */}
        <div className="pt-4">
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
        px-5
        py-20
        sm:px-8
        sm:py-24
        lg:px-20
        lg:py-28
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