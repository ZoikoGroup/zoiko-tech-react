"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  Manrope,
  Plus_Jakarta_Sans,
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

const industries = [
  {
    title: "Telecommunications",
    image: "/about-us/industry1.png",
    description:
      "ZoikoNex, communications infrastructure, billing, eSIM, and operator integrations.",
  },
  {
    title: "Financial & Business",
    image: "/about-us/industry2.png",
    description:
      "Comprehensive payroll, billing, accounting, financial logic, and professional intelligence.",
  },
  {
    title: "Cybersecurity & Trust",
    image: "/about-us/industry3.png",
    description:
      "Protected by ZoikoShield, identity access management, risk matrix, and automated auditing.",
  },
  {
    title: "Healthcare Operations",
    image: "/about-us/industry4.png",
    description:
      "Medication access through ZoikoMeds and compliant healthcare administrative systems.",
  },
  {
    title: "Media & Communications",
    image: "/about-us/industry5.png",
    description:
      "ZoikoStream integrations, Live Events delivery, Sema, and local telecom routing.",
  },
  {
    title: "Government & Enterprise",
    image: "/about-us/industry6.png",
    description:
      "Accessible sovereign digital services and continuous regulatory compliance engines.",
  },
  {
    title: "Mobility & Property",
    image: "/about-us/industry7.png",
    description:
      "Logistics and transport integrations through Zoiko Rides, plus property management on Zoiko Rooms.",
  },
  {
    title: "Agriculture & Foods",
    image: "/about-us/industry8.png",
    description:
      "Smart farming, food supply chain management, agricultural analytics, and sustainable production.",
  },
];

export default function Industries() {
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
        ${urbanist.variable}
        ${poppins.variable}
        industries-section
        ${visible ? "industries-visible" : ""}
      `}
    >
      {/* =====================================================
          BACKGROUND IMAGE
      ===================================================== */}

      <div className="industries-background">
        <Image
          src="/about-us/bg3.png"
          alt=""
          fill
          sizes="100vw"
          className="industries-background-image"
        />
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="industries-container">
        {/* =================================================
            HEADER
        ================================================= */}

        <div className="industries-header">
          <div className="industries-badge">
            TECHNOLOGY FOR COMPLEX INDUSTRIES
          </div>

          <h2>
            Strongest where software must do more than present information
          </h2>
        </div>

        {/* =================================================
            CARDS
        ================================================= */}

        <div className="industries-grid">
          {industries.map((industry, index) => (
            <article
              key={industry.title}
              className="industry-card"
              style={
                {
                  "--card-delay": `${index * 100}ms`,
                } as React.CSSProperties
              }
            >
              {/* Image */}

              <div className="industry-image-wrapper">
                <Image
                  src={industry.image}
                  alt={industry.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="industry-image"
                />
              </div>

              {/* Title */}

              <h3>{industry.title}</h3>

              {/* Description */}

              <p>{industry.description}</p>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        /* =====================================================
           SECTION
        ===================================================== */

        .industries-section {
          position: relative;

          width: 100%;

          overflow: hidden;

          padding: 96px 0;

          background: transparent;

          opacity: 0;

          transform: translateY(40px);

          transition:
            opacity 900ms ease,
            transform 900ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .industries-visible {
          opacity: 1;

          transform: translateY(0);
        }

        /* =====================================================
           BACKGROUND IMAGE
        ===================================================== */

        .industries-background {
          position: absolute;

          inset: 0;

          z-index: 0;

          pointer-events: none;
        }

        .industries-background-image {
          object-fit: cover;

          object-position: center;

          opacity: 1;
        }

        /* =====================================================
           CONTAINER
        ===================================================== */

        .industries-container {
          position: relative;

          z-index: 2;

          width: min(1216px, calc(100% - 56px));

          margin: 0 auto;

          display: flex;

          flex-direction: column;

          gap: 56px;
        }

        /* =====================================================
           HEADER
        ===================================================== */

        .industries-header {
          width: 100%;

          display: flex;

          flex-direction: column;

          align-items: flex-start;

          gap: 16px;
        }

        /* =====================================================
           BADGE
        ===================================================== */

        .industries-badge {
          display: inline-flex;

          align-items: center;

          padding: 6px 12px;

          border-radius: 100px;

          font-family: var(--font-manrope), sans-serif;

          font-size: 14px;

          line-height: 20px;

          font-weight: 700;

          letter-spacing: 0.04em;

          text-transform: uppercase;

          color: #0e7490;

          opacity: 0;

          transform: translateY(20px);

          transition:
            opacity 700ms ease 100ms,
            transform 700ms cubic-bezier(0.22, 1, 0.36, 1) 100ms;
        }

        .industries-visible .industries-badge {
          opacity: 1;

          transform: translateY(0);
        }

        /* =====================================================
           HEADING
        ===================================================== */

        .industries-header h2 {
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
            opacity 800ms ease 200ms,
            transform 800ms cubic-bezier(0.22, 1, 0.36, 1) 200ms;
        }

        .industries-visible .industries-header h2 {
          opacity: 1;

          transform: translateY(0);
        }

        /* =====================================================
           GRID

           EXACTLY 4 CARDS PER ROW ON DESKTOP
        ===================================================== */

        .industries-grid {
          width: 100%;

          display: grid;

          grid-template-columns: repeat(4, minmax(0, 1fr));

          gap: 20px;
        }

        /* =====================================================
           CARD
        ===================================================== */

        .industry-card {
          position: relative;

          width: 100%;

          min-width: 0;

          /* Increased slightly so all descriptions fit */
          height: 340px;

          box-sizing: border-box;

          padding: 32px;

          border-radius: 16px;

          border: 1px solid #10b981;

          /* Transparent - background image remains visible */
          background: transparent;

          display: flex;

          flex-direction: column;

          align-items: flex-start;

          gap: 20px;

          overflow: visible;

          opacity: 0;

          transform:
            translateY(45px)
            scale(0.97);

          transition:
            opacity 750ms ease var(--card-delay),
            transform 750ms cubic-bezier(0.22, 1, 0.36, 1)
              var(--card-delay),
            border-color 350ms ease,
            box-shadow 350ms ease,
            background 350ms ease;
        }

        /* =====================================================
           CARD REVEAL
        ===================================================== */

        .industries-visible .industry-card {
          opacity: 1;

          transform:
            translateY(0)
            scale(1);
        }

        /* =====================================================
           CARD HOVER
        ===================================================== */

        .industry-card:hover {
          transform:
            translateY(-8px)
            scale(1.01);

          border-color: #059669;

          background: rgba(255, 255, 255, 0.08);

          box-shadow:
            0 18px 45px rgba(16, 185, 129, 0.15),
            0 0 45px rgba(110, 231, 183, 0.14);
        }

        /* =====================================================
           IMAGE
        ===================================================== */

        .industry-image-wrapper {
          position: relative;

          width: 100%;

          height: 144px;

          flex-shrink: 0;

          overflow: hidden;

          border-radius: 8px;
        }

        .industry-image {
          object-fit: contain;

          object-position: center;

          transition:
            transform 700ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .industry-card:hover .industry-image {
          transform: scale(1.06);
        }

        /* =====================================================
           TITLE
        ===================================================== */

        .industry-card h3 {
          width: 100%;

          margin: 0;

          font-family: var(--font-urbanist), sans-serif;

          font-size: 18px;

          line-height: 25px;

          font-weight: 700;

          color: #0f172a;

          transition:
            color 300ms ease,
            transform 300ms ease;
        }

        .industry-card:hover h3 {
          color: #047857;

          transform: translateX(2px);
        }

        /* =====================================================
           DESCRIPTION
        ===================================================== */

        .industry-card p {
          width: 100%;

          margin: 0;

          font-family: var(--font-poppins), sans-serif;

          font-size: 14px;

          line-height: 20px;

          font-weight: 400;

          color: #374151;

          transition: color 300ms ease;
        }

        .industry-card:hover p {
          color: #1f2937;
        }

        /* =====================================================
           LARGE TABLET
        ===================================================== */

        @media (max-width: 1200px) {
          .industries-container {
            width: min(100% - 48px, 1000px);
          }

          .industries-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 900px) {
          .industries-section {
            padding: 80px 0;
          }

          .industries-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .industries-header h2 {
            font-size: 32px;

            line-height: 1.4;
          }

          .industry-card {
            height: 340px;
          }
        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 640px) {
          .industries-section {
            padding: 64px 0;
          }

          .industries-container {
            width: calc(100% - 32px);

            gap: 40px;
          }

          .industries-header {
            gap: 14px;
          }

          .industries-badge {
            padding: 5px 10px;

            font-size: 11px;

            line-height: 16px;
          }

          .industries-header h2 {
            font-size: 28px;

            line-height: 38px;
          }

          .industries-grid {
            grid-template-columns: 1fr;

            gap: 20px;
          }

          .industry-card {
            height: auto;

            min-height: 340px;

            padding: 28px;
          }

          .industry-image-wrapper {
            height: 144px;
          }
        }

        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 380px) {
          .industries-container {
            width: calc(100% - 24px);
          }

          .industry-card {
            padding: 24px;

            min-height: 340px;
          }
        }

        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {
          .industries-section,
          .industries-badge,
          .industries-header h2,
          .industry-card {
            opacity: 1;

            transform: none;

            transition: none;
          }

          .industry-card:hover {
            transform: none;
          }

          .industry-card:hover .industry-image {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}