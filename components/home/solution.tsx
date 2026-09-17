"use client";

import Image from "next/image";
import Link from "next/link";
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

type SolutionItem = {
  title: string;
  description: string;
  icon: string;
};

const solutions: SolutionItem[] = [
  {
    title: "Deploy Enterprise AI",
    description:
      "Build agentic, secure reasoning layers on top of governed corporate datastores without privacy leaks.",
    icon: "/home/sol-1.png",
  },
  {
    title: "Run Global Operations",
    description:
      "Consolidate business workflows, HR, and compliance across dozens of international jurisdictions seamlessly.",
    icon: "/home/sol-2.png",
  },
  {
    title: "Build Telecom Businesses",
    description:
      "Launch MVNO networks, manage eSIM profiles, and run high-volume billing logic in days rather than months.",
    icon: "/home/sol-3.png",
  },
  {
    title: "Modernize Financial Operations",
    description:
      "Incorporate fast payments, secure billing structures, automated taxes, and local payout remittance logic.",
    icon: "/home/sol-4.png",
  },
  {
    title: "Secure Digital Operations",
    description:
      "Defend core cloud infrastructure with continuous zero-trust architectures and automated compliance auditing.",
    icon: "/home/sol-5.png",
  },
  {
    title: "Build Customer Experiences",
    description:
      "Deliver highly contextual, hyper-local digital marketplaces, mobile apps, and customer portals.",
    icon: "/home/sol-6.png",
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
        threshold: 0.12,
        rootMargin: "0px 0px -70px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translateY(0)"
          : "translateY(35px)",
        transition:
          "opacity 750ms cubic-bezier(0.22, 1, 0.36, 1), transform 750ms cubic-bezier(0.22, 1, 0.36, 1)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="
        transition-transform
        duration-300
        group-hover:translate-x-1
      "
    >
      <path
        d="M2.5 7H11.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />

      <path
        d="M8.25 3.75L11.5 7L8.25 10.25"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SolutionCard({
  solution,
  index,
}: {
  solution: SolutionItem;
  index: number;
}) {
  return (
    <Reveal
      delay={index * 90}
      className="w-full lg:w-[calc(33.333%-27px)]"
    >
      <div className="group relative h-[288px] w-full">

        {/* Icon box */}
        <div
          className="
            absolute
            left-0
            top-0
            z-20
            flex
            h-20
            w-24
            items-center
            justify-center
            overflow-hidden
            rounded-3xl
            bg-teal-700
            shadow-sm
            transition-all
            duration-300
            ease-out
            group-hover:-translate-y-1
            group-hover:shadow-[0_12px_30px_rgba(15,118,110,0.22)]
          "
        >
          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
            "
          >
            <Image
              src={solution.icon}
              alt=""
              width={32}
              height={32}
              className="
                h-8
                w-8
                object-contain
                brightness-0
                invert
                transition-transform
                duration-300
                ease-out
                group-hover:scale-110
              "
            />
          </div>
        </div>

        {/* Main card */}
        <div
          className="
            absolute
            left-[51px]
            top-[52px]
            h-56
            w-[calc(100%-51px)]
            overflow-hidden
            rounded-3xl
            bg-cyan-700/10
            transition-all
            duration-300
            ease-out
            group-hover:-translate-y-1
            group-hover:bg-cyan-700/[0.14]
            group-hover:shadow-[0_18px_40px_rgba(14,116,144,0.10)]
          "
        >
          {/* Hover glow */}
          <div
            className="
              pointer-events-none
              absolute
              -right-12
              -top-12
              h-40
              w-40
              rounded-full
              bg-cyan-300/10
              blur-3xl
              opacity-0
              transition-opacity
              duration-500
              group-hover:opacity-100
            "
          />

          <div
            className="
              relative
              z-10
              flex
              h-full
              flex-col
              justify-start
              gap-5
              px-7
              pt-[35px]
            "
          >
            {/* Heading + description */}
            <div className="flex flex-col gap-2">
              <h3
                className={`
                  ${plusJakarta.className}
                  text-2xl
                  font-extrabold
                  leading-9
                  tracking-[-0.025em]
                  text-slate-900
                `}
              >
                {solution.title}
              </h3>

              <p
                className={`
                  ${poppins.className}
                  text-sm
                  font-normal
                  leading-5
                  text-slate-500
                `}
              >
                {solution.description}
              </p>
            </div>

            {/* CTA */}
            <Link
              href="/solutions"
              className={`
                ${poppins.className}
                group/link
                inline-flex
                w-fit
                items-center
                gap-1
                text-xs
                font-semibold
                text-cyan-700
              `}
            >
              <span>
                Get the solution blueprint
              </span>

              <span
                className="
                  transition-transform
                  duration-300
                  group-hover/link:translate-x-0.5
                "
              >
                <ArrowIcon />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function Solution() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-white
      "
    >
      <div
        className="
          relative
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-start
          gap-14
          px-5
          py-20
          sm:px-8
          sm:py-24
          lg:px-20
        "
      >
        {/* Section heading */}
        <Reveal>
          <div
            className="
              flex
              w-full
              flex-col
              items-start
              gap-4
            "
          >
            <div
              className={`
                ${poppins.className}
                text-xs
                font-semibold
                uppercase
                tracking-wider
                text-cyan-700
              `}
            >
              How We Help
            </div>

            <h2
              className={`
                ${plusJakarta.className}
                text-3xl
                font-extrabold
                leading-tight
                tracking-[-0.03em]
                text-slate-900
                sm:text-4xl
                lg:text-5xl
                lg:leading-[57.6px]
              `}
            >
              Solutions by Outcome
            </h2>

            <p
              className={`
                ${poppins.className}
                max-w-[1100px]
                text-base
                font-normal
                leading-7
                text-slate-500
                sm:text-lg
              `}
            >
              Empowering modern enterprises with modular
              blocks built to speed up innovation, enforce
              compliance, and solve operational bottlenecks.
            </p>
          </div>
        </Reveal>

        {/* Solution cards */}
        <div className="w-full">
          <div
            className="
              flex
              w-full
              flex-wrap
              justify-start
              gap-x-10
              gap-y-8
            "
          >
            {solutions.map((solution, index) => (
              <SolutionCard
                key={solution.title}
                solution={solution}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}