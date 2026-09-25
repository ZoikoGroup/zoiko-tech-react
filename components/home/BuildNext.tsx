"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useEffect, useRef, useState } from "react";
import { poppins, plusJakarta } from "@/fonts";

/* ============================================================
   SCROLL REVEAL
============================================================ */

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

/* ============================================================
   MAIN COMPONENT
============================================================ */

export default function BuildNext() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      className={`
        ${poppins.className}
        relative
        isolate
        w-full
        overflow-hidden
        bg-transparent
        px-5
        py-20
        sm:px-8
        sm:py-24
        lg:px-20
        lg:py-28
      `}
    >
      {/* ======================================================
          BACKGROUND IMAGE
          
          public/home/bg6.png

          NO COLOR OVERLAY
          NO GRADIENT
          NO DARK TINT
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/home/bg6.png"
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

      {/* ======================================================
          CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-[1280px]
          flex-col
          items-center
          gap-14
          lg:flex-row
          lg:items-center
          lg:gap-20
        "
      >
        {/* ====================================================
            LEFT CONTENT
        ==================================================== */}

        <Reveal
          className="
            w-full
            flex-1
          "
        >
          <div
            className="
              flex
              w-full
              flex-col
              items-start
              gap-8
            "
          >
            {/* Heading */}

            <h2
              className={`
                ${plusJakarta.className}
                w-full
                text-xl
                font-extrabold
                leading-6
                text-white
                sm:text-2xl
              `}
            >
              Build what comes next with Zoiko Tech
            </h2>

            {/* Description */}

            <p
              className={`
                ${poppins.className}
                w-full
                max-w-[680px]
                text-base
                font-normal
                leading-7
                text-white/80
                sm:text-lg
              `}
            >
              Explore our platforms, build with our technology, or
              speak with our team about enterprise deployment.
            </p>

            {/* ==================================================
                CTA BUTTONS
            ================================================== */}

            <div
              className="
                flex
                w-full
                flex-col
                items-start
                gap-4
                sm:flex-row
                sm:items-center
                sm:gap-6
              "
            >
              {/* Talk to Zoiko Tech */}

              <Link
                href="/talk-to-an-integration-specialist"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  rounded-lg
                  bg-white
                  px-6
                  py-3.5
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-gray-100
                "
              >
                <span
                  className={`
                    ${poppins.className}
                    text-base
                    font-semibold
                    text-cyan-700
                  `}
                >
                  Talk to Zoiko Tech
                </span>
              </Link>

              {/* Explore all platforms */}

              <Link
                href="/platforms"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-white
                  px-6
                  py-3.5
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-white/10
                "
              >
                <span
                  className={`
                    ${poppins.className}
                    text-base
                    font-semibold
                    text-white
                    transition-colors
                    duration-300
                    group-hover:text-teal-300
                  `}
                >
                  Explore all platforms
                </span>
              </Link>
            </div>

            {/* ==================================================
                DEVELOPER PLATFORM
            ================================================== */}

            <Link
              href="/developer-platform"
              className="
                group
                inline-flex
                items-center
                gap-1.5
                transition-all
                duration-300
                hover:translate-x-1
              "
            >
              <span
                className={`
                  ${poppins.className}
                  text-base
                  font-semibold
                  text-teal-400
                  transition-colors
                  duration-300
                  group-hover:text-teal-300
                `}
              >
                Developer Platform
              </span>

              {/* Arrow */}

              <span
                className="
                  relative
                  h-3
                  w-3
                  overflow-hidden
                "
              >
                <span
                  className="
                    absolute
                    left-0
                    top-[5px]
                    h-px
                    w-3
                    bg-teal-400
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />

                <span
                  className="
                    absolute
                    right-0
                    top-[2px]
                    h-2
                    w-2
                    rotate-45
                    border-r-2
                    border-t-2
                    border-teal-400
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </span>
            </Link>
          </div>
        </Reveal>

        {/* ====================================================
            REQUEST PLATFORM ACCESS CARD
        ==================================================== */}

        <Reveal
          delay={200}
          className="
            w-full
            lg:w-[480px]
            lg:shrink-0
          "
        >
          <form
            onSubmit={handleSubmit}
            className="
              w-full
              rounded-2xl
              bg-white
              p-6
              transition-all
              duration-500
              hover:-translate-y-1
              sm:p-8
            "
          >
            <div className="flex flex-col gap-6">
              {/* Form heading */}

              <h3
                className={`
                  ${plusJakarta.className}
                  text-2xl
                  font-extrabold
                  text-slate-900
                  sm:text-3xl
                `}
              >
                Request platform access
              </h3>

              {/* =================================================
                  FORM FIELDS
              ================================================= */}

              <div className="flex flex-col gap-4">
                {/* Work Email */}

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="work-email"
                    className={`
                      ${poppins.className}
                      text-xs
                      font-semibold
                      text-gray-600
                    `}
                  >
                    Work Email*
                  </label>

                  <input
                    id="work-email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    className={`
                      ${poppins.className}
                      w-full
                      rounded-md
                      border
                      border-slate-200
                      bg-slate-50
                      p-3
                      text-sm
                      font-normal
                      text-slate-900
                      outline-none
                      transition-all
                      duration-300
                      placeholder:text-slate-400
                      focus:border-cyan-600
                      focus:ring-2
                      focus:ring-cyan-600/10
                    `}
                  />
                </div>

                {/* Company + Country */}

                <div
                  className="
                    flex
                    flex-col
                    gap-4
                    sm:flex-row
                  "
                >
                  {/* Company */}

                  <div className="flex flex-1 flex-col gap-1.5">
                    <label
                      htmlFor="company"
                      className={`
                        ${poppins.className}
                        text-xs
                        font-semibold
                        text-gray-600
                      `}
                    >
                      Company*
                    </label>

                    <input
                      id="company"
                      name="company"
                      type="text"
                      required
                      placeholder="Enterprise Inc."
                      className={`
                        ${poppins.className}
                        w-full
                        rounded-md
                        border
                        border-slate-200
                        bg-slate-50
                        p-3
                        text-sm
                        font-normal
                        text-slate-900
                        outline-none
                        transition-all
                        duration-300
                        placeholder:text-slate-400
                        focus:border-cyan-600
                        focus:ring-2
                        focus:ring-cyan-600/10
                      `}
                    />
                  </div>

                  {/* Country */}

                  <div className="flex flex-1 flex-col gap-1.5">
                    <label
                      htmlFor="country"
                      className={`
                        ${poppins.className}
                        text-xs
                        font-semibold
                        text-gray-600
                      `}
                    >
                      Country*
                    </label>

                    <input
                      id="country"
                      name="country"
                      type="text"
                      required
                      placeholder="United States"
                      className={`
                        ${poppins.className}
                        w-full
                        rounded-md
                        border
                        border-slate-200
                        bg-slate-50
                        p-3
                        text-sm
                        font-normal
                        text-slate-900
                        outline-none
                        transition-all
                        duration-300
                        placeholder:text-slate-400
                        focus:border-cyan-600
                        focus:ring-2
                        focus:ring-cyan-600/10
                      `}
                    />
                  </div>
                </div>

                {/* Message */}

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="message"
                    className={`
                      ${poppins.className}
                      text-xs
                      font-semibold
                      text-gray-600
                    `}
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your technical requirements..."
                    className={`
                      ${poppins.className}
                      min-h-24
                      w-full
                      resize-none
                      rounded-md
                      border
                      border-slate-200
                      bg-slate-50
                      p-3
                      text-sm
                      font-normal
                      text-slate-900
                      outline-none
                      transition-all
                      duration-300
                      placeholder:text-slate-400
                      focus:border-cyan-600
                      focus:ring-2
                      focus:ring-cyan-600/10
                    `}
                  />
                </div>
              </div>

              {/* =================================================
                  SUBMIT BUTTON
              ================================================= */}

              <div className="w-full pt-2">
                <button
                  type="submit"
                  className="
                    flex
                    w-full
                    items-center
                    justify-center
                    rounded-lg
                    bg-cyan-700
                    p-3.5
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-cyan-800
                  "
                >
                  <span
                    className={`
                      ${poppins.className}
                      text-base
                      font-semibold
                      text-white
                    `}
                  >
                    Submit inquiry
                  </span>
                </button>
              </div>

              {/* Success message */}

              {submitted && (
                <div
                  className={`
                    ${poppins.className}
                    rounded-md
                    bg-emerald-50
                    px-3
                    py-2
                    text-sm
                    font-medium
                    text-emerald-700
                  `}
                >
                  Thanks. Your inquiry has been submitted.
                </div>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}