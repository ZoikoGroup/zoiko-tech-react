"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { urbanist, poppins } from "@/fonts";

type Pillar = {
  title: string;
  description: string;
  icon: string;
};

const pillars: Pillar[] = [
  {
    title: "Governed AI",
    description:
      "Enterprise-grade safety, privacy, and compliance first.",
    icon: "/home/governed-ai.png",
  },
  {
    title: "Enterprise Infrastructure",
    description:
      "Designed for mission-critical scale and global uptime.",
    icon: "/home/enterprise-infrastructure.png",
  },
  {
    title: "Global Operations",
    description:
      "Seamless compliance across borders and jurisdictions.",
    icon: "/home/global-operations.png",
  },
  {
    title: "Human-Centered Systems",
    description:
      "Designed to simplify the most complex user journeys.",
    icon: "/home/human-centered-systems.png",
  },
];

export default function CorePillars() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.18,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        w-full
        overflow-hidden
        text-slate-900
      "
    >
      {/* ==========================================
          SECTION BACKGROUND
          ========================================== */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/home/home-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* ==========================================
          CONTENT
          ========================================== */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-[1440px]
          justify-center
          px-5
          py-12
          sm:px-8
          lg:px-12
          xl:px-20
        "
      >
        <div
          className="
            grid
            w-full
            grid-cols-1
            gap-6
            sm:grid-cols-2
            lg:grid-cols-4
            lg:gap-8
          "
        >
          {pillars.map((pillar, index) => (
            <PillarCard
              key={pillar.title}
              pillar={pillar}
              index={index}
              visible={visible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function PillarCard({
  pillar,
  index,
  visible,
}: {
  pillar: Pillar;
  index: number;
  visible: boolean;
}) {
  return (
    <div
      className={`
        group
        relative
        flex
        min-h-[216px]
        w-full
        flex-col
        items-center
        justify-start
        overflow-hidden
        rounded-3xl
        p-6
        shadow-[0px_4px_4px_0px_rgba(0,0,0,0.09)]
        transition-all
        duration-700
        ease-[cubic-bezier(0.22,1,0.36,1)]
        hover:-translate-y-2
        hover:shadow-[0px_18px_40px_rgba(0,0,0,0.16)]
        ${
          visible
            ? "translate-y-0 opacity-100"
            : "translate-y-16 opacity-0"
        }
      `}
      style={{
        transitionDelay: `${index * 120}ms`,
      }}
    >
      {/* ==========================================
          ONLY BACKGROUND IMAGE
          
          NO bg-white
          NO background color
          NO white overlay
          ========================================== */}
      <Image
        src="/home/bg.png"
        alt=""
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="
          absolute
          inset-0
          z-0
          h-full
          w-full
          object-cover
          object-center
        "
      />

      {/* ==========================================
          CONTENT
          ========================================== */}
      <div
        className="
          relative
          z-10
          flex
          w-full
          flex-col
          items-center
        "
      >
        {/* ==========================================
            ICON
            ========================================== */}
        <div
          className="
            relative
            flex
            size-12
            shrink-0
            items-center
            justify-center
            overflow-hidden
            rounded-xl
            shadow-[0px_4px_4px_0px_rgba(0,0,0,0.09)]
            transition-all
            duration-500
            group-hover:-translate-y-1
            group-hover:scale-110
          "
        >
          <Image
            src={pillar.icon}
            alt=""
            width={48}
            height={48}
            className="
              size-12
              object-contain
              transition-transform
              duration-500
              group-hover:rotate-2
            "
          />
        </div>

        {/* ==========================================
            TEXT
            ========================================== */}
        <div
          className="
            mt-6
            flex
            w-full
            flex-col
            items-center
            justify-center
            gap-1
          "
        >
          <h3
            className={`
              ${urbanist.className}
              text-center
              text-base
              font-bold
              leading-5
              text-slate-900
              transition-colors
              duration-300
              group-hover:text-emerald-800
            `}
          >
            {pillar.title}
          </h3>

          <p
            className={`
              ${poppins.className}
              w-full
              text-center
              text-xs
              font-normal
              leading-4
              text-slate-600
            `}
          >
            {pillar.description}
          </p>
        </div>
      </div>

      {/* ==========================================
          BORDER ONLY
          ========================================== */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-20
          rounded-3xl
          border
          border-white/20
        "
      />
    </div>
  );
}