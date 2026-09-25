"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { manrope, plusJakarta, poppins } from "@/fonts";

type DeveloperCard = {
  number: string;
  title: string;
  items: string[];
};

const developerCards: DeveloperCard[] = [
  {
    number: "01",
    title: "Build",
    items: [
      "REST & gRPC APIs",
      "Python, Go & Node.js SDKs",
      "Zoiko AI Model APIs",
      "Real-time Event Webhooks",
    ],
  },
  {
    number: "02",
    title: "Test",
    items: [
      "Isolated Sandbox Mode",
      "Interactive API Playground",
      "Language-specific Quickstarts",
      "Production-grade Blueprints",
    ],
  },
  {
    number: "03",
    title: "Operate",
    items: [
      "Token-based Authentication",
      "Granular Access Controls",
      "Usage Metering Pipelines",
      "Distributed Observability",
    ],
  },
  {
    number: "04",
    title: "Ecosystem",
    items: [
      "SaaS Connectors",
      "Certified Technology Partners",
      "Zoiko Marketplace Listings",
      "Governance Frameworks",
    ],
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
  const ref = useRef<HTMLDivElement | null>(null);
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
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function CodeIcon() {
  return (
    <span className="flex h-3.5 w-3.5 shrink-0 items-center justify-center">
      <Image
        src="/home/code.png"
        alt=""
        width={14}
        height={14}
        className="
          h-3.5
          w-3.5
          object-contain
          transition-transform
          duration-300
          group-hover:scale-110
        "
      />
    </span>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M3 8H13"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M8.5 3.5L13 8L8.5 12.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DeveloperCard({
  card,
  index,
}: {
  card: DeveloperCard;
  index: number;
}) {
  return (
    <Reveal delay={index * 90} className="h-full w-full">
      <div
        className="
          group
          flex
          h-full
          min-h-[300px]
          w-full
          flex-col
          justify-between
          rounded-xl
          border
          border-neutral-200
          bg-white
          p-7

          shadow-[0_6px_20px_rgba(0,0,0,0.10)]

          transition-all
          duration-300
          ease-out

          hover:-translate-y-1

          hover:shadow-[0_10px_25px_rgba(0,0,0,0.14)]
        "
      >
        <div className="flex w-full flex-col items-start gap-4">
          {/* Header */}
          <div className="flex w-full items-center justify-between">
            <h3
              className={`
                text-2xl
                font-extrabold
                leading-9
                text-zinc-900
                sm:text-3xl
                ${plusJakarta.className}
              `}
            >
              {card.title}
            </h3>

            <span
              className={`
                text-xs
                font-bold
                tracking-wide
                text-cyan-700
                opacity-40
                ${manrope.className}
              `}
            >
              {card.number}
            </span>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-cyan-700/10" />

          {/* Items */}
          <div className="flex w-full flex-col items-start gap-3">
            {card.items.map((item) => (
              <div
                key={item}
                className="flex w-full items-center gap-2"
              >
                <CodeIcon />

                <span
                  className={`
                    min-w-0
                    flex-1
                    truncate
                    text-sm
                    font-normal
                    leading-5
                    text-slate-400
                    ${poppins.className}
                  `}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function Developer() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
      "
    >
      {/* Background image only — no background color and no overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/home/bg2.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Main content */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[834px]
          w-full
          max-w-[1440px]
          flex-col
          items-center
          gap-20
          overflow-hidden
          px-6
          py-20
          sm:px-10
          lg:px-20
          lg:py-28
        "
      >
        {/* ================= HEADER ================= */}
        <Reveal className="w-full">
          <div
            className="
              flex
              w-full
              flex-col
              items-start
              gap-4
            "
          >
            {/* Eyebrow */}
            <div
              className={`
                text-xs
                font-semibold
                uppercase
                tracking-wider
                text-white
                ${poppins.className}
              `}
            >
              ZOIKO FOR DEVELOPERS
            </div>

            {/* Heading */}
            <h2
              className={`
                w-full
                text-3xl
                font-extrabold
                leading-tight
                text-white
                sm:text-4xl
                lg:text-5xl
                lg:leading-[57.6px]
                ${plusJakarta.className}
              `}
            >
              Build on Zoiko technology
            </h2>

            {/* Description */}
            <p
              className={`
                w-full
                max-w-[900px]
                text-base
                font-normal
                leading-7
                text-stone-300
                sm:text-lg
                ${poppins.className}
              `}
            >
              APIs, SDKs, model interfaces, webhooks, sandbox environments,
              identity, observability, usage controls, documentation and
              integrations form the common developer layer across the Zoiko
              ecosystem.
            </p>
          </div>
        </Reveal>

        {/* ================= DEVELOPER CARDS ================= */}
        <div className="w-full">
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-6
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            {developerCards.map((card, index) => (
              <DeveloperCard
                key={card.title}
                card={card}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* ================= CENTERED CTAS ================= */}
        <Reveal delay={250} className="w-full">
          <div
            className="
              flex
              w-full
              items-center
              justify-center
              gap-4
              flex-wrap
            "
          >
            {/* Explore Developer Platform */}
            <Link
              href="/developer-platform"
              className={`
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-lg
                bg-cyan-700
                px-6
                py-3.5
                text-base
                font-semibold
                text-white
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-cyan-800
                hover:shadow-[0_8px_24px_rgba(14,116,144,0.35)]
                ${poppins.className}
              `}
            >
              <span>Explore Developer Platform</span>
              <ArrowIcon />
            </Link>

            {/* Read documentation */}
            <Link
              href="/documentation"
              className={`
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-lg
                border
                border-white
                px-6
                py-3.5
                text-base
                font-semibold
                text-white
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-white/10
                hover:shadow-[0_8px_24px_rgba(255,255,255,0.10)]
                ${poppins.className}
              `}
            >
              Read documentation
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}