
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  Manrope,
  Plus_Jakarta_Sans,
  Poppins,
} from "next/font/google";

/* =========================================================
   FONTS
========================================================= */

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-manrope",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-poppins",
  display: "swap",
});

/* =========================================================
   HERO
========================================================= */

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    // Avoid leaving the hero invisible when reduced motion
    // is enabled or IntersectionObserver is unavailable.
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`
        ${manrope.variable}
        ${plusJakarta.variable}
        ${poppins.variable}
        hero-section
        ${visible ? "hero-visible" : ""}
      `}
    >
      {/* Background */}
      <div className="hero-background" aria-hidden="true" />

      {/* Green gradient */}
      <div className="hero-gradient" aria-hidden="true">
        <div className="hero-gradient-glow" />
      </div>

      {/* Soft ambient glow */}
      <div className="hero-soft-glow" aria-hidden="true" />

      {/* Main content */}
      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-badge">
            <span>ABOUT ZOIKOTECH</span>
          </div>

          <h1>
            TECHNOLOGY.
            <br />
            TRUST.
            <br />
            TRANSFORMATION.
          </h1>

          <p>
            ZoikoTech Inc. is a California-based global technology company
            building intelligent infrastructure, enterprise platforms and
            domain-specific AI for organizations operating across industries,
            jurisdictions and borders.
          </p>
        </div>

        {/* Globe GIF */}
        <div className="hero-globe-area" aria-hidden="true">
          <div className="globe-wrapper">
            <Image
              src="/about-us/gif.gif"
              alt=""
              fill
              priority
              unoptimized
              sizes="
                (max-width: 380px) 90vw,
                (max-width: 640px) 92vw,
                (max-width: 1024px) 65vw,
                (max-width: 1440px) 45vw,
                577px
              "
              className="globe-image"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        /* =====================================================
           BASE
        ===================================================== */

        .hero-section {
          position: relative;
          isolation: isolate;
          width: 100%;
          min-height: 770px;
          overflow: hidden;
          overflow: clip;
          background: #030b0d;

          opacity: 0;
          transform: translateY(24px);

          transition:
            opacity 800ms ease,
            transform 800ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .hero-section.hero-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-inner {
          position: relative;
          z-index: 2;
          width: min(100%, 1440px);
          min-height: inherit;
          margin-inline: auto;
        }

        /* =====================================================
           BACKGROUND
        ===================================================== */

        .hero-background {
          position: absolute;
          inset: 0;
          z-index: -2;
          background: linear-gradient(
            90deg,
            #020708 0%,
            #02090a 35%,
            #031211 55%,
            #03251f 78%,
            #021914 100%
          );
          pointer-events: none;
        }

        .hero-gradient {
          position: absolute;
          z-index: -1;
          top: -8%;
          right: -8%;
          width: min(65vw, 850px);
          height: 110%;
          pointer-events: none;
          background: linear-gradient(
            172deg,
            rgba(6, 95, 70, 0.42) 0%,
            rgba(6, 95, 70, 0.32) 48%,
            rgba(2, 44, 34, 0.3) 80%,
            rgba(2, 44, 34, 0.15) 100%
          );
          filter: blur(49px);
        }

        .hero-gradient-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at 56% 48%,
            rgba(16, 185, 129, 0.2) 0%,
            rgba(16, 185, 129, 0.1) 28%,
            transparent 66%
          );
        }

        .hero-soft-glow {
          position: absolute;
          z-index: -1;
          top: 15%;
          right: -140px;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: rgba(0, 255, 190, 0.055);
          filter: blur(100px);
          pointer-events: none;
        }

        /* =====================================================
           CONTENT
        ===================================================== */

        .hero-content {
          position: relative;
          z-index: 3;
          width: min(54%, 729px);
          padding-top: clamp(105px, 11.6vw, 167px);
          padding-bottom: 70px;
          margin-left: clamp(32px, 5.56vw, 80px);

          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: clamp(20px, 2.2vw, 32px);
        }

        /* =====================================================
           BADGE
        ===================================================== */

        .hero-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: fit-content;
          max-width: 100%;
          padding: 6px 12px;
          border-radius: 100px;
          background: rgba(14, 116, 144, 0.7);
          outline: 1px solid rgba(45, 212, 191, 0.28);
          outline-offset: -1px;
          color: #5eead4;
          font-family: var(--font-manrope), sans-serif;
          font-size: 10px;
          line-height: 16px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;

          opacity: 0;
          transform: translateY(16px);

          transition:
            opacity 600ms ease 100ms,
            transform 600ms cubic-bezier(0.22, 1, 0.36, 1) 100ms,
            background-color 250ms ease,
            box-shadow 250ms ease;
        }

        .hero-visible .hero-badge {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-badge:hover {
          background: rgba(14, 116, 144, 0.9);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
        }

        /* =====================================================
           HEADING
        ===================================================== */

        .hero-content h1 {
          width: 100%;
          margin: 0;
          color: #ffffff;
          font-family: var(--font-plus-jakarta), sans-serif;
          font-size: clamp(34px, 4.17vw, 60px);
          line-height: 1.33;
          font-weight: 800;
          letter-spacing: -0.035em;
          overflow-wrap: normal;
          word-break: normal;

          opacity: 0;
          transform: translateY(24px);

          transition:
            opacity 750ms ease 180ms,
            transform 750ms cubic-bezier(0.22, 1, 0.36, 1) 180ms;
        }

        .hero-visible .hero-content h1 {
          opacity: 1;
          transform: translateY(0);
        }

        /* =====================================================
           DESCRIPTION
        ===================================================== */

        .hero-content p {
          width: 100%;
          max-width: 680px;
          margin: 0;
          color: #f1f5f9;
          font-family: var(--font-poppins), sans-serif;
          font-size: clamp(14px, 1.25vw, 18px);
          line-height: 1.65;
          font-weight: 400;
          overflow-wrap: break-word;

          opacity: 0;
          transform: translateY(20px);

          transition:
            opacity 750ms ease 300ms,
            transform 750ms cubic-bezier(0.22, 1, 0.36, 1) 300ms;
        }

        .hero-visible .hero-content p {
          opacity: 1;
          transform: translateY(0);
        }

        /* =====================================================
           GLOBE
        ===================================================== */

        .hero-globe-area {
          position: absolute;
          z-index: 2;
          top: 50%;
          right: -1%;
          width: min(48%, 650px);
          aspect-ratio: 577 / 538;
          transform: translateY(calc(-50% + 24px));
          pointer-events: none;

          opacity: 0;

          transition:
            opacity 900ms ease 200ms,
            transform 900ms cubic-bezier(0.22, 1, 0.36, 1) 200ms;
        }

        .hero-visible .hero-globe-area {
          opacity: 1;
          transform: translateY(-50%);
        }

        .globe-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .globe-image {
          display: block;
          object-fit: contain;
          object-position: center;
          filter:
            drop-shadow(0 0 22px rgba(0, 255, 210, 0.1))
            drop-shadow(0 0 65px rgba(0, 255, 190, 0.055));
          transition: filter 400ms ease;
        }

        /* =====================================================
           LARGE DESKTOP: 1200px+
        ===================================================== */

        @media (min-width: 1201px) {
          .hero-globe-area {
            right: 1%;
            width: min(45%, 577px);
          }
        }

        /* =====================================================
           LAPTOP: 1025px - 1200px
        ===================================================== */

        @media (min-width: 1025px) and (max-width: 1200px) {
          .hero-section {
            min-height: 680px;
          }

          .hero-content {
            width: 48%;
            margin-left: 4%;
            padding-top: 130px;
            gap: 24px;
          }

          .hero-content h1 {
            font-size: clamp(36px, 4vw, 48px);
            line-height: 1.3;
          }

          .hero-content p {
            font-size: 14px;
            line-height: 1.7;
          }

          .hero-globe-area {
            right: 1%;
            width: 49%;
          }
        }

        /* =====================================================
           TABLET: 641px - 1024px
        ===================================================== */

        @media (max-width: 1024px) {
          .hero-section {
            min-height: 0;
          }

          .hero-inner {
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 0;
          }

          .hero-content {
            width: calc(100% - 64px);
            max-width: 720px;
            margin-inline: auto;
            padding-top: clamp(70px, 9vw, 100px);
            padding-bottom: 0;
            align-items: center;
            text-align: center;
            gap: 22px;
          }

          .hero-content h1 {
            font-size: clamp(38px, 5.5vw, 54px);
            line-height: 1.25;
            letter-spacing: -0.03em;
          }

          .hero-content p {
            max-width: 640px;
            font-size: clamp(14px, 1.8vw, 16px);
            line-height: 1.75;
          }

          .hero-globe-area {
            position: relative;
            top: auto;
            right: auto;
            width: min(72%, 480px);
            margin-top: -8px;
            margin-bottom: 15px;
            aspect-ratio: 577 / 538;
            transform: translateY(24px);
          }

          .hero-visible .hero-globe-area {
            opacity: 0.88;
            transform: translateY(0);
          }

          .hero-gradient {
            top: 20%;
            right: -20%;
            width: 100%;
            height: 75%;
          }

          .hero-soft-glow {
            top: 35%;
            right: -100px;
            width: 400px;
            height: 400px;
          }
        }

        /* =====================================================
           MOBILE: 381px - 640px
        ===================================================== */

        @media (max-width: 640px) {
          .hero-content {
            width: calc(100% - 36px);
            padding-top: 58px;
            gap: 20px;
          }

          .hero-badge {
            padding: 5px 10px;
            font-size: 9px;
            line-height: 14px;
          }

          .hero-content h1 {
            font-size: clamp(30px, 7.4vw, 42px);
            line-height: 1.3;
            letter-spacing: -0.035em;
          }

          .hero-content p {
            max-width: 500px;
            font-size: 13px;
            line-height: 1.8;
          }

          .hero-globe-area {
            width: min(94%, 430px);
            margin-top: 8px;
            margin-bottom: 8px;
          }

          .hero-visible .hero-globe-area {
            opacity: 0.82;
          }

          .hero-gradient {
            top: 32%;
            right: -45%;
            width: 145%;
            height: 65%;
            filter: blur(55px);
          }

          .hero-soft-glow {
            top: 45%;
            right: -150px;
            width: 350px;
            height: 350px;
            filter: blur(85px);
          }
        }

        /* =====================================================
           SMALL MOBILE: 320px - 380px
        ===================================================== */

        @media (max-width: 380px) {
          .hero-content {
            width: calc(100% - 28px);
            padding-top: 44px;
            gap: 18px;
          }

          .hero-content h1 {
            font-size: clamp(27px, 8vw, 30px);
            line-height: 1.35;
            letter-spacing: -0.025em;
          }

          .hero-content p {
            font-size: 12px;
            line-height: 1.8;
          }

          .hero-globe-area {
            width: 96%;
            margin-top: 10px;
          }

          .hero-visible .hero-globe-area {
            opacity: 0.75;
          }
        }

        /* =====================================================
           VERY SHORT SCREENS
        ===================================================== */

        @media (max-height: 600px) and (min-width: 1025px) {
          .hero-section {
            min-height: 600px;
          }

          .hero-content {
            padding-top: 65px;
            padding-bottom: 45px;
            gap: 18px;
          }

          .hero-content h1 {
            font-size: clamp(32px, 3.5vw, 44px);
            line-height: 1.25;
          }

          .hero-content p {
            font-size: 13px;
            line-height: 1.6;
          }

          .hero-globe-area {
            width: min(43%, 470px);
          }
        }

        /* =====================================================
           ACCESSIBILITY
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {
          .hero-section,
          .hero-badge,
          .hero-content h1,
          .hero-content p,
          .hero-globe-area,
          .globe-image {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}
