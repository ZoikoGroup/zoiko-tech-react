"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  Poppins,
  Plus_Jakarta_Sans,
  Urbanist,
} from "next/font/google";

/* =========================================================
   FONTS
========================================================= */

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

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

/* =========================================================
   REVEAL ANIMATION
========================================================= */

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

/* =========================================================
   PLATFORM DATA
========================================================= */

const platforms = [
  {
    number: "01",
    title: "Artificial Intelligence & Agentic",
    description:
      "Intelligence systems, agentic workflows, and decision infrastructure built to operate across complex environments.",
    icon: "/about-us/1.png",
    position: "lg:absolute lg:left-0 lg:top-[89px]",
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
    position: "lg:absolute lg:right-0 lg:top-[89px]",
  },
  {
    number: "04",
    title: "Communications & Media",
    description:
      "Connected communication systems and media technologies built for modern digital experiences.",
    icon: "/about-us/4.png",
    position: "lg:absolute lg:left-0 lg:top-[546px]",
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
    position: "lg:absolute lg:right-0 lg:top-[548px]",
  },
];

/* =========================================================
   CONNECTOR
========================================================= */

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

/* =========================================================
   PLATFORM CARD
========================================================= */

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
          rounded-[24px]
          border-2
          border-cyan-300
          bg-gradient-to-br
          from-teal-400
          via-teal-950
          to-teal-600
          p-6
          transition-all
          duration-500
          ease-out
          hover:-translate-y-2
          hover:border-cyan-100
          hover:shadow-[0_18px_50px_rgba(0,0,0,0.35)]
        "
      >
        {/* =================================================
            CARD LIGHT
        ================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-[radial-gradient(circle_at_0%_0%,rgba(45,212,191,0.35),transparent_34%)]
          "
        />

        {/* =================================================
            DIAGONAL LIGHT
        ================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-[linear-gradient(145deg,transparent_25%,rgba(255,255,255,0.035)_48%,transparent_68%)]
          "
        />

        {/* =================================================
            TOP CONTENT
        ================================================= */}

        <div className="relative z-10 flex items-start justify-between gap-4">
          {/* Icon */}
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

          {/* Number */}
          <span
            className={`
              ${poppins.className}
              pt-1
              text-[11px]
              font-semibold
              tracking-[0.16em]
              text-cyan-100/80
            `}
          >
            {item.number}
          </span>
        </div>

        {/* =================================================
            TEXT
        ================================================= */}

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

/* =========================================================
   MAIN COMPONENT
========================================================= */

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
      {/* ===================================================
          BACKGROUND IMAGE
      =================================================== */}

      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/about-us/bg2.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* ===================================================
          BACKGROUND OVERLAY
      =================================================== */}

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

      {/* ===================================================
          CONTENT
      =================================================== */}

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
        {/* =================================================
            EYEBROW
        ================================================= */}

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

        {/* =================================================
            DESKTOP DIAGRAM
        ================================================= */}

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
          {/* =================================================
              TOP CONNECTORS
          ================================================= */}

          {/* AI → Center */}

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

          {/* Cloud → Center */}

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

          {/* Enterprise → Center */}

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

          {/* =================================================
              LOWER CONNECTORS

              IMPORTANT:
              No border-bottom / border-b here.
              ================================================= */}

          {/* Communication → Center */}

          <Connector
            className="
              left-[160px]
              top-[533px]
              h-[82px]
              w-[160px]
              border-r
              rounded-br-[30px]
            "
          />

          {/* Security → Center */}

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

          {/* Industry → Center */}

          <Connector
            className="
              right-[160px]
              top-[533px]
              h-[84px]
              w-[160px]
              border-l
              rounded-bl-[30px]
            "
          />

          {/* =================================================
              CONNECTOR DOTS
          ================================================= */}

          {/* AI dot */}

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

          {/* Cloud dot */}

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

          {/* Enterprise dot */}

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

          {/* =================================================
              CENTER CARD
          ================================================= */}

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
                rounded-[24px]
                border-2
                border-cyan-300
                bg-gradient-to-br
                from-teal-400
                via-teal-950
                to-teal-600
                px-7
                py-8
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-cyan-100
                hover:shadow-[0_20px_70px_rgba(0,0,0,0.35)]
                sm:px-10
                sm:py-10
              "
            >
              {/* Center glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-[radial-gradient(circle_at_0%_0%,rgba(45,212,191,0.35),transparent_35%)]
                "
              />

              {/* Center diagonal light */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-[linear-gradient(145deg,transparent_25%,rgba(255,255,255,0.035)_48%,transparent_68%)]
                "
              />

              <div className="relative z-10">
                {/* Small label */}

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

                {/* Heading */}

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

                {/* Description */}

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

          {/* =================================================
              DESKTOP CARDS
          ================================================= */}

          <div className="hidden lg:block">
            {platforms.map((item, index) => (
              <PlatformCard
                key={item.number}
                item={item}
                index={index}
              />
            ))}
          </div>

          {/* =================================================
              MOBILE / TABLET CARDS
          ================================================= */}

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

        {/* =================================================
            QUOTE BOX

            FIGMA POSITION:
            Diagram ends at approximately 980px.
            Quote starts 80px later.

            IMPORTANT:
            lg:mt-[80px] is intentional.
            ================================================= */}

        <Reveal delay={500}>
          <div
            className="
              mx-auto
              mt-16
              flex
              min-h-[64px]
              w-full
              max-w-[1252px]
              items-center
              justify-center
              rounded-xl
              border
              border-cyan-700/30
              bg-black/20
              px-6
              py-5
              sm:mt-20
              lg:mt-[80px]
            "
          >
            <p
              className={`
                ${urbanist.className}
                w-full
                text-center
                text-[20px]
                font-semibold
                italic
                leading-7
                text-teal-400
              `}
            >
              &quot;Build technologies that can stand independently. Integrate
              them where integration creates leverage.&quot;
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}