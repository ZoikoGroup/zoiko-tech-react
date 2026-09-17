"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Ambition() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden border-b border-white/10"
    >
      {/* =====================================================
          BOTTOM BACKGROUND - BG8
      ===================================================== */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/about-us/bg8.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* =====================================================
          MAIN BACKGROUND - BG6
          Keep the original aspect ratio.
          DO NOT use object-fill because it stretches the
          circular pattern horizontally.
      ===================================================== */}
      <div className="absolute inset-0 z-[1]">
        <Image
          src="/about-us/bg6.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}
      <div
        className="
          relative z-10 mx-auto flex w-full max-w-[1440px]
          flex-col items-center
          px-6
          pt-[105px]
          pb-[95px]

          sm:px-10
          sm:pt-[115px]
          sm:pb-[100px]

          lg:px-20
          lg:pt-[125px]
          lg:pb-[105px]

          xl:px-28
        "
      >
        {/* =====================================================
            HEADER
        ===================================================== */}
        <div
          className={`
            flex w-full flex-col items-center
            text-center
            transition-all duration-1000 ease-out
            ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }
          `}
        >
          {/* Badge */}
          <div
            className="
              inline-flex items-center justify-center
              rounded-full
              border border-white/20
              bg-transparent
              px-3 py-1.5
            "
          >
            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.04em]
                text-teal-400
              "
            >
              Our Ambition
            </span>
          </div>

          {/* Heading */}
          <h2
            className="
              mt-5
              w-full
              max-w-[1000px]
              text-center
              text-3xl
              font-extrabold
              leading-[1.15]
              tracking-[-0.02em]
              text-white

              sm:text-4xl

              lg:text-[42px]
              lg:leading-[1.18]
            "
          >
            Build Technology People Depend On
          </h2>
        </div>

        {/* =====================================================
            DESCRIPTION
        ===================================================== */}
        <div
          className={`
            mt-9
            flex w-full
            flex-col
            items-center
            text-center
            transition-all duration-1000 delay-200 ease-out
            ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }
          `}
        >
          <p
            className="
              w-full
              max-w-[800px]
              text-center
              text-[15px]
              font-normal
              leading-[1.7]
              text-white

              sm:text-base
              sm:leading-7

              lg:text-[16px]
              lg:leading-7
            "
          >
            We are not trying to become the company with the longest product
            list. We are building a smaller number of technologies deeply
            enough that businesses run on them, developers build on them,
            institutions trust them and users choose them because they make
            difficult systems work better.
          </p>
        </div>

        {/* =====================================================
            AMBITION STATEMENT
        ===================================================== */}
        <div
          className={`
            mt-7
            w-full
            text-center
            transition-all duration-1000 delay-300 ease-out
            ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }
          `}
        >
          <span
            className="
              inline-block
              text-lg
              font-extrabold
              leading-tight
              tracking-[0.025em]
              text-teal-400

              sm:text-xl

              lg:text-[28px]
            "
          >
            INTELLIGENCE. INFRASTRUCTURE. IMPACT.
          </span>
        </div>
      </div>
    </section>
  );
}