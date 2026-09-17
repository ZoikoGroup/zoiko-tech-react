"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Manrope, Plus_Jakarta_Sans, Poppins } from "next/font/google";

/* =========================================================
   FONTS
========================================================= */

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["700"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

/* =========================================================
   TYPES
========================================================= */

type Foundation = {
  title: string;
  description: string;
  image: string;
};

/* =========================================================
   FOUNDATIONS
========================================================= */

const foundations: Foundation[] = [
  {
    title: "Responsible AI",
    description:
      "Sovereign reasoning engines aligned with rigorous global ethical guidelines and transparent bias-mitigation code.",
    image: "/home/image1.png",
  },
  {
    title: "Water-Tight Security",
    description:
      "Zero-trust model endpoints guarded by hardware security modules (HSM) and private cloud instances.",
    image: "/home/image2.png",
  },
  {
    title: "Rigorous Privacy",
    description:
      "Our platform models never learn from your telemetry or private enterprise data. Your data is and remains yours alone.",
    image: "/home/image3.png",
  },
  {
    title: "Regulatory Compliance",
    description:
      "Pre-aligned to CCPA, GDPR, EU AI Act, and major global operational privacy frameworks from day one.",
    image: "/home/image4.png",
  },
  {
    title: "Military-Grade Reliability",
    description:
      "Designed for distributed zero-single-point-of-failure deployment, ensuring uptime when it matters most.",
    image: "/home/image5.png",
  },
  {
    title: "Empathetic Accessibility",
    description:
      "Engineered to satisfy WCAG standards, bringing next-gen computing tools to everyone universally.",
    image: "/home/image6.png",
  },
];

/* =========================================================
   REVEAL ANIMATION
========================================================= */

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
        transform: visible
          ? "translateY(0)"
          : "translateY(30px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* =========================================================
   FOUNDATION CARD
========================================================= */

function FoundationCard({
  item,
  index,
}: {
  item: Foundation;
  index: number;
}) {
  return (
    <Reveal delay={index * 80} className="w-full">
      <div
        className="
          group
          h-56
          w-full
          rounded-2xl
          border
          border-emerald-500
          bg-slate-50
          p-8
          transition-all
          duration-300
          ease-out
          hover:-translate-y-1
          hover:border-emerald-600
          hover:shadow-[0_12px_30px_rgba(16,185,129,0.12)]
        "
      >
        <div className="flex h-full w-full items-start gap-5">
          {/* Image */}
          <div className="relative flex shrink-0 items-start justify-center">
            <Image
              src={item.image}
              alt={item.title}
              width={144}
              height={137}
              className="
                h-auto
                max-h-[137px]
                w-auto
                max-w-[144px]
                object-contain
                transition-transform
                duration-300
                group-hover:scale-105
              "
            />
          </div>

          {/* Content */}
          <div className="flex min-w-0 flex-1 flex-col items-start gap-2">
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
              {item.title}
            </h3>

            <p
              className={`
                w-full
                text-sm
                font-normal
                leading-5
                text-slate-400
                ${poppins.className}
              `}
            >
              {item.description}
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function Ai() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
      "
    >
      {/* =====================================================
          BACKGROUND IMAGE
          public/home/bg4.png
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/home/bg4.png"
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

      {/* =====================================================
          CONTENT
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
          items-start
          gap-20
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
              justify-center
              gap-4
            "
          >
            {/* Eyebrow */}
            <div
              className={`
                text-[10px]
                font-bold
                uppercase
                tracking-wide
                text-cyan-700
                ${manrope.className}
              `}
            >
              GOVERNED AI FOUNDATIONS
            </div>

            {/* Heading */}
            <h2
              className={`
                w-full
                text-left
                text-3xl
                font-extrabold
                leading-tight
                text-zinc-900
                sm:text-4xl
                lg:text-5xl
                lg:leading-[57.6px]
                ${plusJakarta.className}
              `}
            >
              Intelligence is valuable only when it can be trusted
            </h2>

            {/* Description */}
            <p
              className={`
                w-full
                text-left
                text-base
                font-normal
                leading-7
                text-slate-400
                sm:text-lg
                ${poppins.className}
              `}
            >
              We build transparency, reliability, and human accountability
              directly into the root code of our artificial intelligence
              architectures.
            </p>
          </div>
        </Reveal>

        {/* ================= CARDS ================= */}

        <div className="w-full">
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-5
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >
            {foundations.map((item, index) => (
              <FoundationCard
                key={item.title}
                item={item}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}