"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  Poppins,
  Plus_Jakarta_Sans,
  Urbanist,
} from "next/font/google";

/* =========================
   Fonts
========================= */

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

/* =========================
   Reveal Animation
========================= */

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
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
        ease-out
        ${
          visible
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
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

/* =========================
   Platform Data
========================= */

const platforms = [
  {
    number: "01",
    title: "Artificial Intelligence & Agentic",
    description:
      "Intelligence systems, agentic workflows, and decision infrastructure built to operate across complex environments.",
    icon: "/about-us/1.png",
    position:
      "lg:absolute lg:left-0 lg:top-[89px]",
  },
  {
    number: "02",
    title: "Cloud & Digital Infrastructure",
    description:
      "Scalable cloud foundations and digital infrastructure designed for resilient, connected technology ecosystems.",
    icon: "/about-us/2.png",
    position:
      "lg:absolute lg:left-1/2 lg:top-0 lg:-translate-x-1/2",
  },
  {
    number: "03",
    title: "Enterprise & Financial Operations",
    description:
      "Technology platforms that modernize enterprise operations, financial workflows, and business infrastructure.",
    icon: "/about-us/3.png",
    position:
      "lg:absolute lg:right-0 lg:top-[89px]",
  },
  {
    number: "04",
    title: "Communications & Media",
    description:
      "Connected communication systems and media technologies built for modern digital experiences.",
    icon: "/about-us/4.png",
    position:
      "lg:absolute lg:left-0 lg:top-[546px]",
  },
  {
    number: "05",
    title: "Security, Identity & Assurance",
    description:
      "Security, identity, and assurance capabilities designed to establish trust across technology environments.",
    icon: "/about-us/5.png",
    position:
      "lg:absolute lg:left-1/2 lg:top-[648px] lg:-translate-x-1/2",
  },
  {
    number: "06",
    title: "Industry Technology Solutions",
    description:
      "Purpose-built technology solutions that address complex requirements across industries and markets.",
    icon: "/about-us/6.png",
    position:
      "lg:absolute lg:right-0 lg:top-[548px]",
  },
];

/* =========================
   Connector
========================= */

function Connector({
  className,
}: {
  className: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`
        pointer-events-none
        absolute
        hidden
        border-cyan-300/60
        lg:block
        ${className}
      `}
    />
  );
}

/* =========================
   Platform Card
========================= */

function PlatformCard({
  item,
  index,
}: {
  item: (typeof platforms)[number];
  index: number;
}) {
  return (
    <Reveal
      delay={index * 100}
      className={`
        w-full
        lg:w-[320px]
        ${item.position}
      `}
    >
      <div
        className="
          group
          relative
          flex
          min-h-[176px]
          w-full
          flex-col
          justify-between
          overflow-hidden
          rounded-[14px]
          border
          border-cyan-300/50
          bg-gradient-to-br
          from-teal-400
          via-teal-950
          to-teal-600
          p-6
          transition-all
          duration-500
          ease-out
          hover:-translate-y-2
          hover:border-cyan-200
          hover:shadow-[0_18px_50px_rgba(0,0,0,0.35)]
        "
      >
        {/* Decorative glow */}
        <div
          className="
            pointer-events-none
            absolute
            -right-12
            -top-12
            h-32
            w-32
            rounded-full
            bg-cyan-300/10
            blur-2xl
            transition-all
            duration-500
            group-hover:bg-cyan-200/20
          "
        />

        <div className="relative z-10 flex items-start justify-between gap-4">
          <div
            className="
              flex
              h-[54px]
              w-[54px]
              shrink-0
              items-center
              justify-center
              rounded-xl
              border
              border-white/20
              bg-black/20
              transition-transform
              duration-500
              group-hover:scale-110
            "
          >
            <Image
              src={item.icon}
              alt=""
              width={34}
              height={34}
              className="h-[34px] w-[34px] object-contain"
            />
          </div>

          <span
            className={`
              ${poppins.className}
              text-[11px]
              font-semibold
              tracking-[0.16em]
              text-cyan-100/70
            `}
          >
            {item.number}
          </span>
        </div>

        <div className="relative z-10 mt-5">
          <h3
            className={`
              ${urbanist.className}
              text-[17px]
              font-bold
              leading-[1.25]
              text-white
              transition-colors
              duration-300
              group-hover:text-cyan-100
            `}
          >
            {item.title}
          </h3>

          <p
            className={`
              ${poppins.className}
              mt-2
              text-[11px]
              font-normal
              leading-[1.55]
              text-white/65
            `}
          >
            {item.description}
          </p>
        </div>
      </div>
    </Reveal>
  );
}

/* =========================
   Main Component
========================= */

export default function PlatformCompany() {
  return (
    <section
      className="
        relative
        isolate
        min-h-[1291px]
        w-full
        overflow-hidden
        bg-transparent
      "
    >
      {/* =========================
          Background Image
      ========================= */}

      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/about-us/bg2.png"
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

      {/* =========================
          Background Gradient
          Kept transparent enough
          so bg2.png remains visible
      ========================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[1]
          bg-gradient-to-b
          from-black/60
          via-black/20
          to-teal-950/40
        "
      />

      {/* =========================
          Content
      ========================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1440px]
          px-5
          py-20
          sm:px-8
          md:px-10
          lg:px-12
          xl:px-[72px]
          xl:py-[86px]
        "
      >
        {/* =========================
            Eyebrow
        ========================= */}

        <Reveal>
          <div className="flex w-full justify-center">
            <div
              className="
                rounded-full
                border
                border-cyan-300/50
                bg-black/20
                px-5
                py-2
                backdrop-blur-sm
              "
            >
              <span
                className={`
                  ${poppins.className}
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-cyan-200
                `}
              >
                A GLOBAL TECHNOLOGY COMPANY
              </span>
            </div>
          </div>
        </Reveal>

        {/* =========================
            Diagram
        ========================= */}

        <div
          className="
            relative
            mx-auto
            mt-16
            h-auto
            min-h-0
            w-full
            max-w-[1252px]
            lg:h-[825px]
          "
        >
          {/* =========================
              Connector Lines
          ========================= */}

          {/* AI → center */}
          <Connector
            className="
              left-[320px]
              top-[177px]
              h-[100px]
              w-[40px]
              border-r
              border-t
              rounded-tr-[30px]
            "
          />

          {/* Cloud → center */}
          <Connector
            className="
              left-[calc(50%-100px)]
              top-[176px]
              h-[101px]
              w-[100px]
              border-r
              border-b
              rounded-br-[30px]
            "
          />

          {/* Enterprise → center */}
          <Connector
            className="
              right-[320px]
              top-[177px]
              h-[100px]
              w-[40px]
              border-l
              border-t
              rounded-tl-[30px]
            "
          />

          {/* Center → Communication */}
          <Connector
            className="
              left-[160px]
              top-[533px]
              h-[82px]
              w-[160px]
              border-r
              border-bottom
              rounded-br-[30px]
            "
          />

          {/* Center → Security */}
          <Connector
            className="
              left-1/2
              top-[533px]
              h-[115px]
              w-px
              -translate-x-1/2
              border-l
            "
          />

          {/* Center → Industry */}
          <Connector
            className="
              right-[160px]
              top-[533px]
              h-[84px]
              w-[160px]
              border-l
              border-b
              rounded-bl-[30px]
            "
          />

          {/* =========================
              Connector Dots
          ========================= */}

          <div
            className="
              absolute
              left-[327px]
              top-[174px]
              hidden
              h-2
              w-2
              rounded-full
              bg-cyan-300
              shadow-[0_0_14px_rgba(103,232,249,0.8)]
              lg:block
            "
          />

          <div
            className="
              absolute
              left-1/2
              top-[174px]
              hidden
              h-2
              w-2
              -translate-x-1/2
              rounded-full
              bg-cyan-300
              shadow-[0_0_14px_rgba(103,232,249,0.8)]
              lg:block
            "
          />

          <div
            className="
              absolute
              right-[327px]
              top-[174px]
              hidden
              h-2
              w-2
              rounded-full
              bg-cyan-300
              shadow-[0_0_14px_rgba(103,232,249,0.8)]
              lg:block
            "
          />

          {/* =========================
              Central Card
          ========================= */}

          <Reveal
            delay={150}
            className="
              relative
              z-20
              mx-auto
              w-full
              max-w-[559px]
              lg:absolute
              lg:left-1/2
              lg:top-[277px]
              lg:-translate-x-1/2
            "
          >
            <div
              className="
                group
                relative
                overflow-hidden
                rounded-[18px]
                border
                border-cyan-200/60
                bg-black/50
                px-7
                py-8
                backdrop-blur-md
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-cyan-100
                hover:bg-black/60
                hover:shadow-[0_20px_70px_rgba(0,0,0,0.35)]
                sm:px-10
                sm:py-10
              "
            >
              {/* Glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-0
                  h-24
                  w-72
                  -translate-x-1/2
                  rounded-full
                  bg-cyan-300/10
                  blur-3xl
                "
              />

              <div className="relative z-10">
                <p
                  className={`
                    ${poppins.className}
                    text-center
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-cyan-300
                  `}
                >
                  PLATFORM ARCHITECTURE
                </p>

                <h2
                  className={`
                    ${plusJakarta.className}
                    mt-4
                    text-center
                    text-[30px]
                    font-extrabold
                    leading-[1.15]
                    tracking-[-0.03em]
                    text-white
                    sm:text-[38px]
                  `}
                >
                  Built as a Platform Company
                </h2>

                <p
                  className={`
                    ${poppins.className}
                    mx-auto
                    mt-5
                    max-w-[455px]
                    text-center
                    text-sm
                    font-normal
                    leading-7
                    text-white/70
                  `}
                >
                  We build independent technology platforms that solve
                  complex problems at scale and create leverage when
                  integrated across ecosystems.
                </p>
              </div>
            </div>
          </Reveal>

          {/* =========================
              Desktop Platform Cards
          ========================= */}

          <div className="hidden lg:block">
            {platforms.map((item, index) => (
              <PlatformCard
                key={item.number}
                item={item}
                index={index}
              />
            ))}
          </div>

          {/* =========================
              Mobile / Tablet Cards
          ========================= */}

          <div
            className="
              mt-10
              grid
              grid-cols-1
              gap-5
              md:grid-cols-2
              lg:hidden
            "
          >
            {platforms.map((item, index) => (
              <PlatformCard
                key={`mobile-${item.number}`}
                item={{
                  ...item,
                  position: "",
                }}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* =========================
            Quote
        ========================= */}

        <Reveal delay={500}>
          <div
            className="
              mx-auto
              mt-16
              max-w-[900px]
              border-t
              border-cyan-300/40
              pt-8
              sm:mt-20
              sm:pt-10
              lg:mt-4
            "
          >
            <p
              className={`
                ${urbanist.className}
                w-full
                text-center
                text-base
                font-semibold
                leading-7
                text-white
                sm:text-lg
                sm:leading-8
                lg:text-xl
              `}
            >
              “Build technologies that can stand independently. Integrate
              them where integration creates leverage.”
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}