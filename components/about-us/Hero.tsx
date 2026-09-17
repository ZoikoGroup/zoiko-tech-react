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

  /* =======================================================
     SCROLL-DRIVEN REVEAL

     The hero fades/slides into view when it enters
     the viewport.
     
     The globe itself does NOT have any CSS rotation,
     3D movement, scaling, or perspective animation.
  ======================================================= */

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
        threshold: 0.12,
        rootMargin: "0px 0px -50px 0px",
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
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="hero-background" />

      {/* =====================================================
          RIGHT SIDE GREEN GLOW
      ===================================================== */}

      <div className="hero-gradient">
        <div className="hero-gradient-glow" />
      </div>

      {/* =====================================================
          ADDITIONAL SOFT GLOW
      ===================================================== */}

      <div className="hero-soft-glow" />

      {/* =====================================================
          GLOBE / GIF

          File:
          public/about-us/gif.gif

          The GIF is served directly without Next.js
          image optimization so its animation remains intact.
      ===================================================== */}

      <div className="hero-globe-area">
        <div className="globe-wrapper">
          <Image
            src="/about-us/gif.gif"
            alt="ZoikoTech global technology"
            fill
            priority
            unoptimized
            sizes="(max-width: 640px) 430px, (max-width: 768px) 470px, (max-width: 1024px) 500px, (max-width: 1200px) 530px, 577px"
            className="globe-image"
          />
        </div>
      </div>

      {/* =====================================================
          HERO CONTENT
      ===================================================== */}

      <div className="hero-content">
        {/* ===================================================
            BADGE
        =================================================== */}

        <div className="hero-badge">
          <span>ABOUT ZOIKOTECH</span>
        </div>

        {/* ===================================================
            HEADING
        =================================================== */}

        <h1>
          TECHNOLOGY.
          <br />
          TRUST.
          <br />
          TRANSFORMATION.
        </h1>

        {/* ===================================================
            DESCRIPTION
        =================================================== */}

        <p>
          ZoikoTech Inc. is a California-based global technology company
          building intelligent infrastructure, enterprise platforms and
          domain-specific AI for organizations operating across industries,
          jurisdictions and borders.
        </p>
      </div>

      {/* =====================================================
          STYLES
      ===================================================== */}

      <style jsx>{`
        /* =====================================================
           BASE
        ===================================================== */

        .hero-section {
          --hero-max-width: 1440px;

          position: relative;

          width: 100%;

          height: 770px;
          min-height: 770px;

          overflow: hidden;

          isolation: isolate;

          background: #030b0d;

          opacity: 0;

          transform: translateY(35px);

          transition:
            opacity 850ms ease,
            transform 850ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .hero-visible {
          opacity: 1;

          transform: translateY(0);
        }

        /* =====================================================
           BACKGROUND
        ===================================================== */

        .hero-background {
          position: absolute;

          inset: 0;

          z-index: 0;

          background:
            linear-gradient(
              90deg,
              #020708 0%,
              #02090a 35%,
              #031211 55%,
              #03251f 78%,
              #021914 100%
            );
        }

        /* =====================================================
           RIGHT GRADIENT
        ===================================================== */

        .hero-gradient {
          position: absolute;

          z-index: 1;

          width: 750px;
          height: 800px;

          left: calc(50% - 29px);
          top: -30px;

          pointer-events: none;

          background: linear-gradient(
            172deg,
            rgba(6, 95, 70, 0.42) 0%,
            rgba(6, 95, 70, 0.32) 48%,
            rgba(2, 44, 34, 0.3) 80%,
            rgba(2, 44, 34, 0.15) 100%
          );

          filter: blur(49px);

          transform: translateZ(0);
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

        /* =====================================================
           SOFT GLOBAL GLOW
        ===================================================== */

        .hero-soft-glow {
          position: absolute;

          z-index: 1;

          width: 500px;
          height: 500px;

          right: -120px;
          top: 120px;

          border-radius: 50%;

          background: rgba(0, 255, 190, 0.055);

          filter: blur(100px);

          pointer-events: none;
        }

        /* =====================================================
           GLOBE / GIF AREA
        ===================================================== */

        .hero-globe-area {
          position: absolute;

          z-index: 3;

          width: 577px;
          height: 538px;

          left: calc(50% + 103px);
          top: 133px;

          display: flex;

          align-items: center;
          justify-content: center;

          pointer-events: none;

          opacity: 0;

          transform: translateY(35px);

          transition:
            opacity 1000ms ease 250ms,
            transform 1000ms cubic-bezier(0.22, 1, 0.36, 1) 250ms;
        }

        .hero-visible .hero-globe-area {
          opacity: 1;

          transform: translateY(0);
        }

        /* =====================================================
           GLOBE WRAPPER
        ===================================================== */

        .globe-wrapper {
          position: relative;

          width: 100%;
          height: 100%;

          display: flex;

          align-items: center;
          justify-content: center;
        }

        /* =====================================================
           GIF IMAGE
        ===================================================== */

        .globe-image {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: contain;

          object-position: center;

          filter:
            drop-shadow(
              0 0 22px rgba(0, 255, 210, 0.1)
            )
            drop-shadow(
              0 0 65px rgba(0, 255, 190, 0.055)
            );

          transition:
            filter 400ms ease,
            opacity 400ms ease;
        }

        /* =====================================================
           GIF HOVER

           Only glow enhancement.
           No movement.
           No rotation.
           No scaling.
        ===================================================== */

        .hero-globe-area:hover .globe-image {
          filter:
            drop-shadow(
              0 0 28px rgba(0, 255, 210, 0.17)
            )
            drop-shadow(
              0 0 80px rgba(0, 255, 190, 0.09)
            );
        }

        /* =====================================================
           CONTENT
        ===================================================== */

        .hero-content {
          position: absolute;

          z-index: 5;

          width: 729px;

          left: max(
            80px,
            calc((100vw - var(--hero-max-width)) / 2 + 80px)
          );

          top: 167px;

          display: flex;

          flex-direction: column;

          align-items: flex-start;

          gap: 32px;
        }

        /* =====================================================
           BADGE
        ===================================================== */

        .hero-badge {
          display: inline-flex;

          align-items: center;
          justify-content: center;

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

          transform: translateY(20px);

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

          box-shadow:
            0 0 0 1px rgba(45, 212, 191, 0.1),
            0 8px 30px rgba(0, 0, 0, 0.2);
        }

        /* =====================================================
           HEADING
        ===================================================== */

        .hero-content h1 {
          width: 100%;

          margin: 0;

          color: #ffffff;

          font-family: var(--font-plus-jakarta), sans-serif;

          font-size: 60px;

          line-height: 80px;

          font-weight: 800;

          letter-spacing: -0.025em;

          opacity: 0;

          transform: translateY(30px);

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

          max-width: 720px;

          margin: 0;

          color: #f1f5f9;

          font-family: var(--font-poppins), sans-serif;

          font-size: 18px;

          line-height: 28px;

          font-weight: 400;

          opacity: 0;

          transform: translateY(25px);

          transition:
            opacity 750ms ease 300ms,
            transform 750ms cubic-bezier(0.22, 1, 0.36, 1) 300ms;
        }

        .hero-visible .hero-content p {
          opacity: 1;

          transform: translateY(0);
        }

        /* =====================================================
           LARGE DESKTOP
        ===================================================== */

        @media (max-width: 1400px) {
          .hero-content {
            width: 650px;

            left: 60px;
          }

          .hero-globe-area {
            left: calc(50% + 80px);

            width: 550px;

            height: 512px;
          }

          .hero-content h1 {
            font-size: 58px;

            line-height: 76px;
          }
        }

        /* =====================================================
           LAPTOP
        ===================================================== */

        @media (max-width: 1200px) {
          .hero-section {
            height: 750px;

            min-height: 750px;
          }

          .hero-content {
            width: 590px;

            left: 55px;

            top: 150px;

            gap: 28px;
          }

          .hero-content h1 {
            font-size: 52px;

            line-height: 68px;
          }

          .hero-content p {
            max-width: 590px;

            font-size: 16px;

            line-height: 26px;
          }

          .hero-globe-area {
            left: calc(50% + 25px);

            top: 150px;

            width: 530px;

            height: 495px;
          }

          .hero-gradient {
            left: 50%;

            width: 650px;
          }
        }

        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 1024px) {
          .hero-section {
            height: 800px;

            min-height: 800px;
          }

          .hero-content {
            position: absolute;

            left: 50%;

            top: 85px;

            width: calc(100% - 80px);

            max-width: 720px;

            transform: translateX(-50%);

            align-items: center;

            text-align: center;

            gap: 25px;
          }

          .hero-content h1 {
            font-size: 50px;

            line-height: 64px;

            text-align: center;
          }

          .hero-content p {
            max-width: 680px;

            font-size: 16px;

            line-height: 26px;

            text-align: center;
          }

          .hero-globe-area {
            left: 50%;

            right: auto;

            top: 330px;

            width: 500px;

            height: 465px;

            transform: translate(-50%, 35px);

            opacity: 0;
          }

          .hero-visible .hero-globe-area {
            opacity: 0.58;

            transform: translate(-50%, 0);
          }

          .hero-gradient {
            left: 50%;

            top: 180px;

            width: 650px;

            height: 650px;

            transform: translateX(-50%);
          }

          .hero-soft-glow {
            right: auto;

            left: 50%;

            top: 350px;

            transform: translateX(-50%);
          }
        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 640px) {
          .hero-section {
            height: 760px;

            min-height: 760px;
          }

          /* -------------------------------------------------
             CONTENT
          ------------------------------------------------- */

          .hero-content {
            top: 65px;

            width: calc(100% - 40px);

            gap: 22px;
          }

          /* -------------------------------------------------
             BADGE
          ------------------------------------------------- */

          .hero-badge {
            padding: 5px 10px;

            font-size: 9px;

            line-height: 14px;

            letter-spacing: 0.05em;
          }

          /* -------------------------------------------------
             HEADING
          ------------------------------------------------- */

          .hero-content h1 {
            font-size: 37px;

            line-height: 49px;

            letter-spacing: -0.025em;
          }

          /* -------------------------------------------------
             DESCRIPTION
          ------------------------------------------------- */

          .hero-content p {
            max-width: 100%;

            font-size: 14px;

            line-height: 23px;
          }

          /* -------------------------------------------------
             GLOBE / GIF
          ------------------------------------------------- */

          .hero-globe-area {
            top: 350px;

            left: 50%;

            width: 455px;

            height: 425px;

            transform: translate(-50%, 35px);
          }

          .hero-visible .hero-globe-area {
            opacity: 0.42;

            transform: translate(-50%, 0);
          }

          /* -------------------------------------------------
             GRADIENT
          ------------------------------------------------- */

          .hero-gradient {
            top: 220px;

            left: 50%;

            width: 600px;

            height: 600px;

            filter: blur(55px);

            transform: translateX(-50%);
          }

          .hero-soft-glow {
            width: 420px;

            height: 420px;

            left: 50%;

            top: 350px;

            transform: translateX(-50%);

            filter: blur(90px);
          }
        }

        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 480px) {
          .hero-section {
            height: 735px;

            min-height: 735px;
          }

          .hero-content {
            top: 55px;

            width: calc(100% - 32px);

            gap: 20px;
          }

          .hero-content h1 {
            font-size: 33px;

            line-height: 44px;
          }

          .hero-content p {
            font-size: 13px;

            line-height: 22px;
          }

          .hero-globe-area {
            top: 350px;

            width: 425px;

            height: 397px;
          }

          .hero-visible .hero-globe-area {
            opacity: 0.36;

            transform: translate(-50%, 0);
          }
        }

        /* =====================================================
           VERY SMALL MOBILE
        ===================================================== */

        @media (max-width: 380px) {
          .hero-section {
            height: 720px;

            min-height: 720px;
          }

          .hero-content {
            top: 48px;

            width: calc(100% - 28px);
          }

          .hero-content h1 {
            font-size: 30px;

            line-height: 40px;
          }

          .hero-content p {
            font-size: 12.5px;

            line-height: 21px;
          }

          .hero-globe-area {
            top: 355px;

            width: 390px;

            height: 364px;
          }

          .hero-visible .hero-globe-area {
            opacity: 0.3;

            transform: translate(-50%, 0);
          }
        }

        /* =====================================================
           LANDSCAPE MOBILE
        ===================================================== */

        @media (max-height: 600px) and (max-width: 900px) {
          .hero-section {
            height: 650px;

            min-height: 650px;
          }

          .hero-content {
            top: 45px;
          }

          .hero-content h1 {
            font-size: 34px;

            line-height: 44px;
          }

          .hero-content p {
            max-width: 600px;

            font-size: 13px;

            line-height: 21px;
          }

          .hero-globe-area {
            top: 250px;

            width: 380px;

            height: 355px;
          }
        }

        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {
          .hero-section,
          .hero-badge,
          .hero-content h1,
          .hero-content p,
          .hero-globe-area {
            opacity: 1;

            transform: none;

            transition: none;
          }

          .globe-image {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}