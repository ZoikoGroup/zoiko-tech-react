"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  Poppins,
  Plus_Jakarta_Sans,
  Manrope,
} from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

type ArchitectureCard = {
  title: string;
  description: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  size: "small" | "large";
};

const cards: ArchitectureCard[] = [
  {
    title: "APPLICATION LAYER",
    description:
      "Industry Applications, Telecom, Enterprise SaaS Solutions",
    image: "/home/arch-1.png",
    imageWidth: 160,
    imageHeight: 148,
    size: "small",
  },
  {
    title: "PLATFORM INTEGRATION SERVICES",
    description:
      "Zoiko Remit, Zoiko Payroll, Local Commerce Engine",
    image: "/home/arch-2.png",
    imageWidth: 174,
    imageHeight: 151,
    size: "small",
  },
  {
    title: "DEVELOPER LAYER & ROBUST APIS",
    description:
      "Zoiko Arc APIs, Serverless Orchestration, SDK Pipelines",
    image: "/home/arch-3.png",
    imageWidth: 174,
    imageHeight: 161,
    size: "small",
  },
  {
    title: "IDENTITY, COMPLIANCE & FINANCIAL STACK",
    description:
      "Zoiko Pay, ZoikoAssure, Decentralized Identity Ledger",
    image: "/home/arch-4.png",
    imageWidth: 172,
    imageHeight: 134,
    size: "large",
  },
  {
    title: "CORE INFRASTRUCTURE & FOUNDATIONAL AI",
    description:
      "Zoiko AI Reasoning Layer, Governed Datastores, Global Edge Cloud",
    image: "/home/arch-5.png",
    imageWidth: 158,
    imageHeight: 141,
    size: "large",
  },
];

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
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
        threshold: 0.1,
        rootMargin: "0px 0px -70px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translateY(0)"
          : "translateY(38px)",
        transition:
          "opacity 800ms cubic-bezier(0.22, 1, 0.36, 1), transform 800ms cubic-bezier(0.22, 1, 0.36, 1)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function ArchitectureCardItem({
  card,
  index,
}: {
  card: ArchitectureCard;
  index: number;
}) {
  return (
    <Reveal
      delay={index * 100}
      className={
        card.size === "large"
          ? "w-full lg:w-[calc(50%-6px)]"
          : "w-full lg:w-[calc(33.333%-8px)]"
      }
    >
      <div
        className="
          group
          relative
          h-full
          min-h-[288px]
          overflow-hidden
          rounded-3xl
          border-2
          border-emerald-500
          bg-transparent
          p-7
          transition-all
          duration-500
          ease-out
          hover:-translate-y-2
          hover:border-emerald-400
          hover:shadow-[0_20px_60px_rgba(16,185,129,0.16)]
        "
      >
        {/* =========================================
            CARD BACKGROUND
            ========================================= */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <Image
            src="/home/bg1.png"
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="
              object-cover
              object-center
              opacity-100
              transition-transform
              duration-700
              ease-out
              group-hover:scale-[1.03]
            "
          />
        </div>

        {/* =========================================
            VERY LIGHT CARD TINT
            Only 5% opacity
            ========================================= */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-[1]
            bg-black/[0.03]
          "
        />

        {/* =========================================
            HOVER GLOW
            ========================================= */}
        <div
          className="
            pointer-events-none
            absolute
            -right-20
            -top-20
            z-[2]
            h-52
            w-52
            rounded-full
            bg-emerald-400/10
            blur-3xl
            opacity-0
            transition-opacity
            duration-500
            group-hover:opacity-100
          "
        />

        {/* =========================================
            CARD CONTENT
            ========================================= */}
        <div
          className="
            relative
            z-10
            flex
            h-full
            flex-col
            items-center
          "
        >
          {/* Icon / Image */}
          <div
            className={`
              flex
              items-center
              justify-center
              ${
                card.size === "large"
                  ? "h-[128px] sm:h-[132px]"
                  : "h-[132px] sm:h-[136px]"
              }
            `}
          >
            <Image
              src={card.image}
              alt={card.title}
              width={card.imageWidth}
              height={card.imageHeight}
              className="
                h-auto
                w-auto
                max-h-full
                max-w-[180px]
                object-contain
                transition-transform
                duration-500
                ease-out
                group-hover:scale-110
              "
            />
          </div>

          {/* Content */}
          <div className="mt-3 w-full">
            <h3
              className={`
                ${manrope.className}
                text-base
                font-bold
                tracking-wide
                text-white
              `}
            >
              {card.title}
            </h3>

            <p
              className={`
                ${poppins.className}
                mt-1
                text-base
                font-normal
                leading-6
                text-white/95
              `}
            >
              {card.description}
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function Arch() {
  return (
    <section
      className="
        relative
        min-h-[1126px]
        w-full
        overflow-hidden
        bg-black
      "
    >
      {/* =========================================
          FIGMA BACKGROUND IMAGE
          ========================================= */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/home/bg1.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="
            object-cover
            object-center
          "
        />
      </div>

      {/* =========================================
          VERY LIGHT OVERLAY
          
          OLD:
          from-black/70
          to-cyan-700/70
          
          REMOVED because it hides the image.
          ========================================= */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[1]
          bg-gradient-to-b
          from-black/10
          via-transparent
          to-cyan-700/10
        "
      />

      {/* =========================================
          CENTER GLOW
          ========================================= */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[472px]
          z-[2]
          h-96
          w-96
          -translate-x-1/2
          rounded-full
          bg-teal-400
          opacity-10
          blur-3xl
        "
      />

      {/* =========================================
          ADDITIONAL CENTER ILLUMINATION
          ========================================= */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[48%]
          z-[2]
          h-[500px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-cyan-400/[0.04]
          blur-[100px]
        "
      />

      {/* =========================================
          MAIN CONTENT
          ========================================= */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[1126px]
          w-full
          max-w-[1440px]
          flex-col
          gap-20
          px-5
          py-20
          sm:px-8
          sm:py-24
          lg:px-20
          lg:py-28
        "
      >
        {/* =========================================
            HEADER
            ========================================= */}
        <Reveal>
          <div className="flex w-full max-w-[920px] flex-col items-start gap-4">
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
              Unified Architecture
            </div>

            <h2
              className={`
                ${plusJakarta.className}
                text-3xl
                font-extrabold
                leading-tight
                tracking-[-0.03em]
                text-white
                sm:text-4xl
                lg:text-5xl
                lg:leading-[57.6px]
              `}
            >
              Platforms should work together, not become
              another collection of silos.
            </h2>

            <p
              className={`
                ${poppins.className}
                max-w-[920px]
                text-base
                font-normal
                leading-7
                text-gray-200
                sm:text-lg
              `}
            >
              We run our entire product matrix on a
              single, standardized tech stack built for
              governed enterprise execution, security
              compliance, and planetary-scale data
              workloads.
            </p>
          </div>
        </Reveal>

        {/* =========================================
            ARCHITECTURE CARDS
            ========================================= */}
        <div className="w-full">
          {/* First Row */}
          <div className="flex flex-col gap-4 lg:flex-row lg:gap-4">
            {cards.slice(0, 3).map((card, index) => (
              <ArchitectureCardItem
                key={card.title}
                card={card}
                index={index}
              />
            ))}
          </div>

          {/* Second Row */}
          <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:gap-4">
            {cards.slice(3, 5).map((card, index) => (
              <ArchitectureCardItem
                key={card.title}
                card={card}
                index={index + 3}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}