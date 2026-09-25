"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { poppins, plusJakarta } from "@/fonts";

/* =========================================================
   FONTS
========================================================= */

/* =========================================================
   TYPES
========================================================= */

type CaseStudy = {
  category: string;
  metric: string;
  title: string;
  context: string;
  builtWith: string;
  icon: string;
};

/* =========================================================
   CASE STUDIES
========================================================= */

const caseStudies: CaseStudy[] = [
  {
    category: "TELECOMMUNICATIONS",
    metric: "GO-LIVE IN 60 DAYS",
    title: "Sovereign Telecom OSS/BSS Infrastructure",
    context:
      "A fast-growing MVNO needed to accelerate launch and bypass complex legacy telco integrations.",
    builtWith:
      "ZoikoNex, Sovereign billing engine, eSIM profiles",
    icon: "/home/icon1.png",
  },
  {
    category: "NGO & ENTERPRISE",
    metric: "6-WEEK DEPLOYMENT",
    title: "Multilingual Accessible Communications Platform",
    context:
      "A global NGO required a distributed, WCAG-compliant interface serving multi-border citizen populations.",
    builtWith:
      "Zoiko Sema messaging, Decentralized identity ledgers",
    icon: "/home/icon2.png",
  },
  {
    category: "FINANCIAL TECH",
    metric: "99.99% RESILIENCE",
    title: "Cross-Border Treasury & Compliance Remittance",
    context:
      "A multijurisdictional financial institution required zero-single-point-of-failure routing under strict compliance.",
    builtWith:
      "ZoikoPay, Zoiko Remit core, ZoikoAssure",
    icon: "/home/icon1.png",
  },
];

/* =========================================================
   CASE STUDY CARD
========================================================= */

function CaseCard({
  item,
  index,
  visible,
}: {
  item: CaseStudy;
  index: number;
  visible: boolean;
}) {
  return (
    <article
      className={`
        group
        relative
        h-[411px]
        w-[601px]
        shrink-0
        transition-all
        duration-700
        ease-[cubic-bezier(0.22,1,0.36,1)]
        ${
          visible
            ? "translate-y-0 opacity-100"
            : "translate-y-12 opacity-0"
        }
      `}
      style={{
        transitionDelay: `${index * 120}ms`,
      }}
    >
      {/* =====================================================
          OUTER DECORATIVE BORDER
      ===================================================== */}

      <Image
        src="/home/border.png"
        alt=""
        fill
        priority={index < 2}
        sizes="601px"
        className="
          pointer-events-none
          z-0
          object-contain
          transition-all
          duration-500
          ease-out
          group-hover:brightness-110
          group-hover:scale-[1.01]
        "
      />

      {/* Cyan glow behind the frame */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-[8px]
          z-0
          rounded-[30px]
          bg-cyan-400/10
          opacity-0
          blur-xl
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      {/* =====================================================
          WHITE INNER CARD
      ===================================================== */}

      <div
        className="
          absolute
          left-[42px]
          top-[58px]
          z-10
          h-[294px]
          w-[517px]
          rounded-[16px]
          bg-white
          p-6
          outline
          outline-2
          outline-offset-[-2px]
          outline-teal-700
          shadow-[0px_4px_4px_0px_rgba(0,0,0,0.09)]
          transition-all
          duration-500
          ease-out
          group-hover:-translate-y-1
          group-hover:shadow-[0px_8px_28px_rgba(0,239,255,0.18)]
        "
      >
        <div className="flex h-full w-full items-start justify-between gap-5">

          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="flex h-full min-w-0 flex-1 flex-col">

            {/* Category + Metric */}

            <div className="flex w-full items-center justify-between gap-3">
              <div
                className={`
                  ${poppins.className}
                  flex
                  items-center
                  rounded-full
                  bg-cyan-700/10
                  px-2.5
                  py-1
                  text-[10px]
                  font-semibold
                  leading-[14px]
                  text-cyan-700
                  whitespace-nowrap
                `}
              >
                {item.category}
              </div>

              <div
                className={`
                  ${poppins.className}
                  whitespace-nowrap
                  text-[10px]
                  font-bold
                  leading-[14px]
                  text-emerald-500
                `}
              >
                {item.metric}
              </div>
            </div>

            {/* Content */}

            <div className="mt-3 flex flex-1 flex-col">

              {/* Title */}

              <h3
                className={`
                  ${plusJakarta.className}
                  max-w-[350px]
                  text-[24px]
                  font-extrabold
                  leading-[29px]
                  tracking-[-0.025em]
                  text-slate-900
                `}
              >
                {item.title}
              </h3>

              {/* Context */}

              <p
                className={`
                  ${poppins.className}
                  mt-3
                  max-w-[365px]
                  text-[11px]
                  font-normal
                  leading-[17px]
                  text-slate-500
                `}
              >
                <span className="font-semibold text-slate-900">
                  Context:{" "}
                </span>

                {item.context}
              </p>

              {/* Built With */}

              <p
                className={`
                  ${poppins.className}
                  mt-3
                  max-w-[370px]
                  text-[9px]
                  font-normal
                  leading-[14px]
                  text-slate-400
                `}
              >
                Built with: {item.builtWith}
              </p>

              {/* CTA */}

              <Link
                href="#"
                className={`
                  ${poppins.className}
                  mt-auto
                  inline-flex
                  w-fit
                  items-center
                  gap-1.5
                  text-[11px]
                  font-semibold
                  leading-5
                  text-cyan-700
                  transition-all
                  duration-300
                  hover:gap-2.5
                  hover:text-cyan-800
                `}
              >
                <span>Read case study</span>

                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-0.5
                  "
                >
                  <path
                    d="M2 7H11"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />

                  <path
                    d="M7.5 3.5L11 7L7.5 10.5"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* =================================================
              ICON
          ================================================= */}

          <div
            className="
              relative
              mt-0
              h-[88px]
              w-[88px]
              shrink-0
              rounded-full
              bg-cyan-50
              shadow-[0px_4px_20px_0px_rgba(16,185,129,0.20)]
              outline
              outline-1
              outline-offset-[-1px]
              outline-emerald-500/25
              transition-all
              duration-500
              ease-out
              group-hover:scale-105
              group-hover:rotate-2
            "
          >
            {/* Green gradient circle */}

            <div
              className="
                absolute
                inset-0
                rounded-full
                bg-[radial-gradient(circle_at_35%_30%,#6ee7b7_0%,#10b981_40%,#064e3b_100%)]
                shadow-[0px_0px_24px_4px_rgba(16,185,129,0.53)]
                shadow-[inset_-8px_-8px_12px_0px_rgba(255,255,255,0.20)]
                transition-all
                duration-500
                group-hover:shadow-[0px_0px_30px_6px_rgba(16,185,129,0.65)]
              "
            />

            {/* Saved icon */}

            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-12
                w-12
                -translate-x-1/2
                -translate-y-1/2
                transition-transform
                duration-500
                group-hover:scale-110
              "
            >
              <Image
                src={item.icon}
                alt=""
                fill
                sizes="48px"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function Practice() {
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
        threshold: 0.1,
        rootMargin: "0px 0px -60px 0px",
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
      "
    >
      {/* =====================================================
          BACKGROUND IMAGE
          public/home/bg4.png
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
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
          w-full
          max-w-[1440px]
          px-5
          py-20
          sm:px-8
          md:px-12
          lg:px-20
          lg:py-28
        "
      >
        {/* ===================================================
            HEADER
        =================================================== */}

        <div
          className={`
            max-w-[800px]
            transition-all
            duration-[900ms]
            ease-[cubic-bezier(0.22,1,0.36,1)]
            ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }
          `}
        >
          {/* Eyebrow */}

          <div
            className={`
              ${poppins.className}
              text-xs
              font-semibold
              uppercase
              tracking-[0.12em]
              text-cyan-700
            `}
          >
            EVIDENCE-FIRST CASES
          </div>

          {/* Heading */}

          <h2
            className={`
              ${plusJakarta.className}
              mt-3
              text-[36px]
              font-extrabold
              leading-[44px]
              tracking-[-0.035em]
              text-slate-900
              sm:text-[42px]
              sm:leading-[51px]
              lg:text-[48px]
              lg:leading-[57.6px]
            `}
          >
            Technology in practice
          </h2>

          {/* Description */}

          <p
            className={`
              ${poppins.className}
              mt-3
              w-full
              max-w-[800px]
              text-base
              font-normal
              leading-7
              text-slate-500
              sm:text-lg
            `}
          >
            How global organizations leverage Zoiko Tech modules to overcome
            engineering and regulatory constraints.
          </p>
        </div>

        {/* ===================================================
            CASE STUDY CARDS
        =================================================== */}

        <div
          className="
            mt-12
            w-full
            overflow-x-auto
            overflow-y-visible
            pb-8
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          <div className="flex w-max items-start gap-8">
            {caseStudies.map((item, index) => (
              <CaseCard
                key={item.title}
                item={item}
                index={index}
                visible={visible}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}