"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  Manrope,
  Plus_Jakarta_Sans,
  Roboto,
  Urbanist,
  Poppins,
} from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-manrope",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["800"],
  variable: "--font-plus-jakarta",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-roboto",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-urbanist",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
});

const platforms = [
  {
    name: "ZoikoNex",
    icon: "/about-us/A1.png",
  },
  {
    name: "ZoikoVertex",
    icon: "/about-us/A2.png",
  },
  {
    name: "ZoikoTime",
    icon: "/about-us/A3.png",
  },
  {
    name: "Zoiko HR",
    icon: "/about-us/A4.png",
  },
  {
    name: "Zoiko Payroll",
    icon: "/about-us/A5.png",
  },
  {
    name: "Zoiko Billing",
    icon: "/about-us/A6.png",
  },
  {
    name: "Zoiko Local",
    icon: "/about-us/A7.png",
  },
  {
    name: "Zoiko Sema",
    icon: "/about-us/A8.png",
  },
  {
    name: "ZoikoStream Live",
    icon: "/about-us/A9.png",
  },
  {
    name: "ZoikoMeds",
    icon: "/about-us/A10.png",
  },
  {
    name: "ZoikoSocial",
    icon: "/about-us/A11.png",
  },
  {
    name: "Zoiko Rooms",
    icon: "/about-us/A12.png",
  },
];

const platformDescription =
  "Telecom-grade OSS/BSS, billing, monetization and operator infrastructure";

export default function Estate() {
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
        threshold: 0.12,
        rootMargin: "0px 0px -70px 0px",
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
        ${roboto.variable}
        ${urbanist.variable}
        ${poppins.variable}
        estate-section
        ${visible ? "estate-visible" : ""}
      `}
    >
      {/* Background image */}
      <div className="estate-background">
        <Image
          src="/about-us/bg3.png"
          alt=""
          fill
          sizes="100vw"
          priority={false}
          className="estate-background-image"
        />
      </div>

      {/* Content */}
      <div className="estate-container">
        {/* Header */}
        <div className="estate-header">
          <div className="estate-badge">
            <span>A PLATFORM ESTATE ALREADY IN MARKET</span>
          </div>

          <h2>Commercial Platforms &amp; Active Development</h2>

          <p>
            ZoikoTech&apos;s current technology estate includes commercially
            launched platforms as well as major systems under active
            development.
          </p>
        </div>

        {/* Platform cards */}
        <div className="estate-grid">
          {platforms.map((platform, index) => (
            <article
              key={platform.name}
              className="estate-card"
              style={
                {
                  "--card-delay": `${index * 90}ms`,
                } as React.CSSProperties
              }
            >
              <div className="estate-card-header">
                <div className="estate-icon-box">
                  <Image
                    src={platform.icon}
                    alt={`${platform.name} icon`}
                    width={32}
                    height={32}
                    className="estate-icon"
                  />
                </div>

                <h3>{platform.name}</h3>
              </div>

              <div className="estate-card-description">
                {platformDescription}
              </div>
            </article>
          ))}
        </div>

        {/* Active development pipeline */}
        <div className="estate-pipeline">
          <div className="estate-pipeline-label">
            ACTIVE DEVELOPMENT PIPELINE
          </div>

          <p>
            ZoikoSuite, Zoiko Mail, Zoiko Cloud, the wider ZoikoStream
            platform, Zoiko Rides, ZoikoShield, Zoiko Loop, and remaining
            Zoiko AI domain stacks.
          </p>
        </div>
      </div>

      <style jsx>{`
        .estate-section {
          position: relative;
          width: 100%;
          overflow: hidden;
          padding: 96px 0;

          /* No section background color */
          background: transparent;

          opacity: 0;
          transform: translateY(40px);

          transition:
            opacity 900ms ease,
            transform 900ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .estate-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* =====================================================
           BACKGROUND IMAGE
        ===================================================== */

        .estate-background {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
        }

        .estate-background-image {
          object-fit: cover;
          object-position: center;
          opacity: 1;
        }

        /* =====================================================
           CONTAINER
        ===================================================== */

        .estate-container {
          position: relative;
          z-index: 2;

          width: min(1260px, calc(100% - 56px));
          margin: 0 auto;

          display: flex;
          flex-direction: column;
          gap: 56px;
        }

        /* =====================================================
           HEADER
        ===================================================== */

        .estate-header {
          width: 100%;

          display: flex;
          flex-direction: column;
          align-items: flex-start;

          gap: 16px;
        }

        /* =====================================================
           BADGE
        ===================================================== */

        .estate-badge {
          display: inline-flex;
          align-items: center;

          padding: 6px 12px;

          border-radius: 100px;

          opacity: 0;
          transform: translateY(20px);

          transition:
            opacity 700ms ease 100ms,
            transform 700ms cubic-bezier(0.22, 1, 0.36, 1) 100ms;
        }

        .estate-visible .estate-badge {
          opacity: 1;
          transform: translateY(0);
        }

        .estate-badge span {
          font-family: var(--font-manrope), sans-serif;

          font-size: 14px;
          line-height: 20px;
          font-weight: 700;

          letter-spacing: 0.04em;
          text-transform: uppercase;

          color: #0e7490;
        }

        /* =====================================================
           HEADING
        ===================================================== */

        .estate-header h2 {
          width: 100%;
          margin: 0;

          font-family: var(--font-plus-jakarta), sans-serif;

          font-size: 36px;
          line-height: 60.8px;
          font-weight: 800;

          color: #0f172a;

          opacity: 0;
          transform: translateY(28px);

          transition:
            opacity 800ms ease 180ms,
            transform 800ms cubic-bezier(0.22, 1, 0.36, 1) 180ms;
        }

        .estate-visible .estate-header h2 {
          opacity: 1;
          transform: translateY(0);
        }

        /* =====================================================
           DESCRIPTION
        ===================================================== */

        .estate-header p {
          width: 100%;
          margin: 0;

          font-family: var(--font-roboto), sans-serif;

          font-size: 18px;
          line-height: 28px;
          font-weight: 400;

          color: #64748b;

          opacity: 0;
          transform: translateY(24px);

          transition:
            opacity 800ms ease 280ms,
            transform 800ms cubic-bezier(0.22, 1, 0.36, 1) 280ms;
        }

        .estate-visible .estate-header p {
          opacity: 1;
          transform: translateY(0);
        }

        /* =====================================================
           GRID
        ===================================================== */

        .estate-grid {
          width: 100%;

          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));

          gap: 24px;
        }

        /* =====================================================
           CARD
        ===================================================== */

        .estate-card {
          position: relative;

          width: 100%;
          height: 240px;

          box-sizing: border-box;

          padding: 40px;

          border-radius: 20px;

          border: 2px solid #10b981;

          background: #071d18;

          box-shadow:
            0 0 80px rgba(110, 231, 183, 0.2),
            inset 0 0 20px rgba(16, 185, 129, 0.035);

          display: flex;
          flex-direction: column;

          gap: 28px;

          overflow: hidden;

          opacity: 0;

          transform:
            translateY(45px)
            scale(0.97);

          transition:
            opacity 750ms ease var(--card-delay),
            transform 750ms cubic-bezier(0.22, 1, 0.36, 1)
              var(--card-delay),
            border-color 350ms ease,
            box-shadow 350ms ease;
        }

        .estate-visible .estate-card {
          opacity: 1;

          transform:
            translateY(0)
            scale(1);
        }

        /* =====================================================
           CARD GLOW
        ===================================================== */

        .estate-card::before {
          content: "";

          position: absolute;

          width: 150px;
          height: 150px;

          top: -75px;
          right: -55px;

          border-radius: 999px;

          background: rgba(16, 185, 129, 0.11);

          filter: blur(30px);

          opacity: 0;

          transform: scale(0.8);

          transition:
            opacity 400ms ease,
            transform 500ms ease;
        }

        .estate-card:hover::before {
          opacity: 1;
          transform: scale(1.25);
        }

        /* =====================================================
           CARD HOVER
        ===================================================== */

        .estate-card:hover {
          transform:
            translateY(-8px)
            scale(1.015);

          border-color: #34d399;

          box-shadow:
            0 18px 55px rgba(16, 185, 129, 0.2),
            0 0 80px rgba(110, 231, 183, 0.28),
            inset 0 0 30px rgba(16, 185, 129, 0.06);
        }

        /* =====================================================
           CARD HEADER
        ===================================================== */

        .estate-card-header {
          position: relative;
          z-index: 1;

          width: 100%;

          display: flex;
          align-items: center;

          gap: 28px;
        }

        /* =====================================================
           ICON BOX
        ===================================================== */

        .estate-icon-box {
          flex: 0 0 80px;

          width: 80px;
          height: 64px;

          border-radius: 24px;

          background: #064e3b;

          border: 1px solid rgba(16, 185, 129, 0.25);

          box-shadow:
            0 4px 20px rgba(16, 185, 129, 0.2),
            inset 0 0 20px rgba(16, 185, 129, 0.13);

          display: flex;
          align-items: center;
          justify-content: center;

          transition:
            transform 350ms cubic-bezier(0.22, 1, 0.36, 1),
            background 350ms ease,
            box-shadow 350ms ease;
        }

        .estate-card:hover .estate-icon-box {
          transform:
            translateY(-3px)
            rotate(-2deg);

          background: #065f46;

          box-shadow:
            0 8px 28px rgba(16, 185, 129, 0.3),
            inset 0 0 24px rgba(16, 185, 129, 0.18);
        }

        /* =====================================================
           ICON
        ===================================================== */

        .estate-icon {
          width: 32px;
          height: 32px;

          object-fit: contain;

          transition:
            transform 350ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .estate-card:hover .estate-icon {
          transform: scale(1.08);
        }

        /* =====================================================
           CARD TITLE
        ===================================================== */

        .estate-card h3 {
          min-width: 0;

          margin: 0;

          font-family: var(--font-urbanist), sans-serif;

          font-size: 18px;
          line-height: 25px;
          font-weight: 700;

          color: #ffffff;
        }

        /* =====================================================
           CARD DESCRIPTION
        ===================================================== */

        .estate-card-description {
          position: relative;
          z-index: 1;

          width: 100%;

          margin-top: auto;

          font-family: var(--font-poppins), sans-serif;

          font-size: 12px;
          line-height: 20px;
          font-weight: 400;

          color: #d6d3d1;
        }

        /* =====================================================
           PIPELINE
        ===================================================== */

        .estate-pipeline {
          width: 100%;

          box-sizing: border-box;

          padding: 24px;

          border-radius: 12px;

          background: #f1f5f9;

          border: 1px solid #2dd4bf;

          display: flex;
          flex-direction: column;

          gap: 8px;

          opacity: 0;
          transform: translateY(35px);

          transition:
            opacity 800ms ease 500ms,
            transform 800ms cubic-bezier(0.22, 1, 0.36, 1) 500ms;
        }

        .estate-visible .estate-pipeline {
          opacity: 1;
          transform: translateY(0);
        }

        .estate-pipeline-label {
          font-family: var(--font-poppins), sans-serif;

          font-size: 12px;
          line-height: 18px;
          font-weight: 700;

          letter-spacing: 0.04em;

          color: #0e7490;
        }

        .estate-pipeline p {
          margin: 0;

          font-family: var(--font-poppins), sans-serif;

          font-size: 14px;
          line-height: 20px;
          font-weight: 400;

          color: #64748b;
        }

        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 1200px) {
          .estate-section {
            padding: 80px 0;
          }

          .estate-container {
            width: min(100% - 48px, 1000px);
          }

          .estate-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .estate-card {
            padding: 32px;
          }

          .estate-card-header {
            gap: 20px;
          }

          .estate-icon-box {
            flex-basis: 72px;
            width: 72px;
          }
        }

        /* =====================================================
           SMALL TABLET
        ===================================================== */

        @media (max-width: 900px) {
          .estate-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .estate-header h2 {
            font-size: 32px;
            line-height: 1.4;
          }
        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 640px) {
          .estate-section {
            padding: 64px 0;
          }

          .estate-container {
            width: calc(100% - 32px);
            gap: 40px;
          }

          .estate-header {
            gap: 14px;
          }

          .estate-badge {
            padding: 5px 10px;
          }

          .estate-badge span {
            font-size: 11px;
            line-height: 16px;
          }

          .estate-header h2 {
            font-size: 28px;
            line-height: 38px;
          }

          .estate-header p {
            font-size: 16px;
            line-height: 25px;
          }

          .estate-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .estate-card {
            height: 220px;
            padding: 28px;
          }

          .estate-card-header {
            gap: 20px;
          }

          .estate-icon-box {
            flex-basis: 72px;
            width: 72px;
            height: 60px;
            border-radius: 20px;
          }

          .estate-card h3 {
            font-size: 17px;
          }

          .estate-pipeline {
            padding: 20px;
          }
        }

        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 380px) {
          .estate-container {
            width: calc(100% - 24px);
          }

          .estate-card {
            padding: 24px;
          }

          .estate-card-header {
            gap: 16px;
          }

          .estate-icon-box {
            flex-basis: 64px;
            width: 64px;
            height: 56px;
          }
        }

        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {
          .estate-section,
          .estate-badge,
          .estate-header h2,
          .estate-header p,
          .estate-card,
          .estate-pipeline {
            opacity: 1;
            transform: none;
            transition: none;
          }

          .estate-card:hover {
            transform: none;
          }

          .estate-card:hover .estate-icon-box,
          .estate-card:hover .estate-icon {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}