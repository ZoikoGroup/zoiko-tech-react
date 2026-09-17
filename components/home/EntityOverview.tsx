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
        rootMargin: "0px 0px -50px 0px",
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
            : "translate-y-8 opacity-0"
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

const leftContent = [
  {
    title: "What is Zoiko Tech?",
    description:
      "Zoiko Tech Inc. is a California-headquartered global technology innovator, delivering modular SaaS blocks, sovereign telecom networks, payment processing stack, and governed enterprise artificial intelligence.",
  },
  {
    title: "Where is Zoiko Tech headquartered?",
    description:
      "Our global administrative and strategic headquarters are located at 1401 21st Street, Suite R, Sacramento, California.",
  },
  {
    title: "Where is the European headquarters?",
    description:
      "European operations are centralized at 167-169 Great Portland Street, London, United Kingdom.",
  },
];

const rightContent = [
  {
    title: "What does Zoiko Tech build?",
    description:
      "We design, deploy, and support unified platforms including ZoikoPay, ZoikoNex, ZoikoTime, and Zoiko SWS, serving clients globally across cloud infrastructure, finance, telco, and healthcare.",
  },
  {
    title: "Is Zoiko Tech part of Zoiko Group?",
    description:
      "Yes, Zoiko Tech is the foundational core technology division of Zoiko Group, aligning with its global focus on regulated enterprise systems.",
  },
  {
    title: "Does Zoiko Tech support developers?",
    description:
      "Yes, robust SDK pipelines, gRPC protocols, and open sandbox integration gateways are provided natively across all core platform nodes.",
  },
];

function OverviewItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div
      className="
        group/item
        flex
        w-full
        flex-col
        items-start
        gap-2
        rounded-lg
        transition-all
        duration-300
        hover:translate-x-1
      "
    >
      <h3
        className={`
          ${urbanist.className}
          w-full
          text-xl
          font-bold
          leading-7
          text-slate-900
          transition-colors
          duration-300
          group-hover/item:text-teal-700
        `}
      >
        {title}
      </h3>

      <p
        className={`
          ${poppins.className}
          w-full
          text-base
          font-normal
          leading-6
          text-neutral-600
        `}
      >
        {description}
      </p>
    </div>
  );
}

export default function EntityOverview() {
  return (
    <section
      className="
        relative
        isolate
        w-full
        overflow-hidden
        bg-white
        px-5
        py-20
        sm:px-8
        sm:py-24
        lg:px-20
        lg:py-28
      "
    >
      {/* =====================================================
          BACKGROUND IMAGE
          public/home/bg4.png
          
          IMPORTANT:
          z-0 keeps the image ABOVE the section background.
      ===================================================== */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/home/bg4.png"
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

      {/* =====================================================
          VERY LIGHT OVERLAY
          
          Only use a subtle overlay so bg4.png remains visible.
      ===================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[1]
          bg-white/10
        "
      />

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
          max-w-[1280px]
          flex-col
          gap-14
          lg:gap-20
        "
      >
        {/* =====================================================
            SECTION HEADER
        ===================================================== */}
        <Reveal>
          <div className="flex w-full flex-col items-start gap-4">
            {/* Eyebrow */}
            <div
              className={`
                ${poppins.className}
                text-xs
                font-semibold
                uppercase
                tracking-wider
                text-slate-900
              `}
            >
              ENTITY OVERVIEW
            </div>

            {/* Heading */}
            <h2
              className={`
                ${plusJakarta.className}
                text-3xl
                font-extrabold
                leading-tight
                text-slate-900
                sm:text-4xl
                lg:text-5xl
                lg:leading-[57.6px]
              `}
            >
              Zoiko Tech at a glance
            </h2>
          </div>
        </Reveal>

        {/* =====================================================
            CONTENT
        ===================================================== */}
        <div
          className="
            grid
            w-full
            grid-cols-1
            gap-10
            lg:grid-cols-2
            lg:gap-14
          "
        >
          {/* ===================================================
              LEFT COLUMN
          =================================================== */}
          <div className="flex w-full flex-col gap-8">
            {leftContent.map((item, index) => (
              <Reveal
                key={item.title}
                delay={100 + index * 100}
              >
                <OverviewItem
                  title={item.title}
                  description={item.description}
                />
              </Reveal>
            ))}
          </div>

          {/* ===================================================
              RIGHT COLUMN
          =================================================== */}
          <div className="flex w-full flex-col gap-8">
            {rightContent.map((item, index) => (
              <Reveal
                key={item.title}
                delay={150 + index * 100}
              >
                <OverviewItem
                  title={item.title}
                  description={item.description}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}