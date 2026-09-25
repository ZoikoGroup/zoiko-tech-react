"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { poppins, plusJakarta, urbanist } from "@/fonts";

type Industry = {
  title: string;
  description: string;
  icon: string;
};

const industries: Industry[] = [
  {
    title: "Telecommunications",
    description: "Sovereign telecom OSS/BSS & eSIM rails.",
    icon: "/home/1.png",
  },
  {
    title: "Fintech & Banking",
    description: "Compliant remittance, payments, and risk ledgers.",
    icon: "/home/2.png",
  },
  {
    title: "Healthcare & Life Sciences",
    description: "HIPAA-compliant, highly secure datastores.",
    icon: "/home/3.png",
  },
  {
    title: "Retail & Commerce",
    description: "Omnichannel inventory orchestration & payout tools.",
    icon: "/home/4.png",
  },
  {
    title: "Professional Services",
    description: "Marketplace intelligence & client invoicing networks.",
    icon: "/home/5.png",
  },
  {
    title: "Government",
    description:
      "Sovereign clouds, public registries & zero-trust compliance.",
    icon: "/home/6.png",
  },
  {
    title: "Media & Entertainment",
    description: "Global streaming CDNs, secure DRM & digital rights.",
    icon: "/home/7.png",
  },
  {
    title: "Real Estate & Property",
    description: "Tokenized deeds, secure lease compliance & escrows.",
    icon: "/home/8.png",
  },
  {
    title: "Mobility & Travel",
    description: "Autonomous vehicle mapping & fleet routing rails.",
    icon: "/home/9.png",
  },
  {
    title: "Technology Companies",
    description: "Developer tools, SDK frameworks & high-velocity APIs.",
    icon: "/home/10.png",
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
        rootMargin: "0px 0px -60px 0px",
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
        transform: visible ? "translateY(0)" : "translateY(35px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function IndustryCard({
  industry,
  index,
}: {
  industry: Industry;
  index: number;
}) {
  return (
    <Reveal delay={index * 60} className="group w-full">
      <div
        className="
          relative
          h-32
          w-full
          overflow-hidden
          rounded-xl
          border
          border-emerald-400
          bg-gradient-to-br
          from-white
          via-white/95
          to-emerald-200/20
          p-5

          shadow-[0_6px_20px_rgba(0,0,0,0.10)]

          backdrop-blur-[48px]

          transition-all
          duration-300
          ease-out

          hover:-translate-y-1
          hover:border-emerald-500

          hover:shadow-[0_10px_25px_rgba(0,0,0,0.14)]
        "
      >
        {/* Subtle hover glow */}
        <div
          className="
            pointer-events-none
            absolute
            -right-10
            -top-10
            h-24
            w-24
            rounded-full
            bg-emerald-300/20
            blur-2xl
            opacity-0
            transition-opacity
            duration-300
            group-hover:opacity-100
          "
        />

        {/* Title row */}
        <div className="relative flex items-center gap-3">
          <div className="flex size-5 shrink-0 items-center justify-center overflow-hidden">
            <Image
              src={industry.icon}
              alt=""
              width={20}
              height={20}
              className="
                h-5
                w-5
                object-contain
                transition-transform
                duration-300
                group-hover:scale-110
              "
            />
          </div>

          <div
            className={`
              min-w-0
              flex-1
              text-base
              font-bold
              leading-5
              text-gray-800
              ${urbanist.className}
            `}
          >
            {industry.title}
          </div>
        </div>

        {/* Description */}
        <p
          className={`
            relative
            mt-3
            text-xs
            font-normal
            leading-4
            text-slate-500
            ${poppins.className}
          `}
        >
          {industry.description}
        </p>
      </div>
    </Reveal>
  );
}

export default function Industry() {
  return (
    <section
      className="
        relative
        isolate
        w-full
        overflow-hidden
      "
    >
      {/* Figma background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/home/bg2.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div
        className="
          mx-auto
          flex
          min-h-[677px]
          w-full
          max-w-[1440px]
          flex-col
          items-center
          gap-20
          px-6
          py-20
          sm:px-10
          lg:px-20
          lg:py-28
        "
      >
        {/* Header */}
        <Reveal className="w-full">
          <div className="flex w-full flex-col items-start gap-4">
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
              DEEP SPECIALIZATION
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
              Technology built around how industries actually operate
            </h2>

            {/* Description */}
            <p
              className={`
                max-w-[1150px]
                text-base
                font-normal
                leading-7
                text-gray-200
                sm:text-lg
                ${poppins.className}
              `}
            >
              Generic tech doesn&apos;t solve regulated problems. We build
              bespoke platform modules explicitly customized for different
              market verticals.
            </p>
          </div>
        </Reveal>

        {/* Industry cards */}
        <div className="w-full">
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-4
              sm:grid-cols-2
              lg:grid-cols-5
            "
          >
            {industries.map((industry, index) => (
              <IndustryCard
                key={industry.title}
                industry={industry}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}