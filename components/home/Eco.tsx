"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Poppins, Plus_Jakarta_Sans } from "next/font/google";

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

/* =========================================================
   TYPES
========================================================= */

type Product = {
  name: string;
  description: string;
  category: string;
  status: "LIVE" | "BETA";
  logo: string;
  logoWidth: number;
  href: string;
};

/* =========================================================
   FILTERS
========================================================= */

const filters = [
  "All Products",
  "Infrastructure",
  "Financial Stack",
  "Operations",
  "Communications",
  "Commerce & Intelligence",
  "Specialized",
];

/* =========================================================
   PRODUCTS
========================================================= */

const products: Product[] = [
  {
    name: "Zoiko AI",
    description:
      "Agentic intelligence layer built for secure enterprise reasoning.",
    category: "Infrastructure",
    status: "LIVE",
    logo: "/home/zoiko-ai.png",
    logoWidth: 105,
    href: "/zoiko-ai",
  },
  {
    name: "Zoiko Tax",
    description:
      "Tax calculation, rules and compliance technology.",
    category: "Financial Technology & Commerce",
    status: "BETA",
    logo: "/home/zoiko-tax.png",
    logoWidth: 115,
    href: "/zoiko-tax",
  },
  {
    name: "Zoiko Assurance",
    description:
      "Smart compliance, automated audits & corporate governance.",
    category: "Infrastructure",
    status: "LIVE",
    logo: "/home/zoiko-assurance1.png",
    logoWidth: 105,
    href: "/zoiko-assurance",
  },
  {
    name: "Zoiko Mail",
    description:
      "Secure enterprise email and productivity.",
    category: "Communications & Collaboration",
    status: "BETA",
    logo: "/home/zoiko-mail.png",
    logoWidth: 120,
    href: "/zoiko-mail",
  },
  {
    name: "Zoiko One",
    description:
      "Secure cross-border remittance and automated treasury.",
    category: "Financial Stack",
    status: "LIVE",
    logo: "/home/zoiko-one.png",
    logoWidth: 115,
    href: "/zoiko-one",
  },
  {
    name: "Zoiko Payroll",
    description:
      "AI-driven global workforce payroll & automated compliance.",
    category: "Financial Stack",
    status: "LIVE",
    logo: "/home/zoiko-payroll.png",
    logoWidth: 115,
    href: "/zoiko-payroll",
  },
  {
    name: "Zoiko Billing",
    description:
      "Flexible subscription billing models & modular taxation.",
    category: "Financial Stack",
    status: "LIVE",
    logo: "/home/zoiko-billing.png",
    logoWidth: 110,
    href: "/zoiko-billing",
  },
  {
    name: "Zoiko Time",
    description:
      "Workforce time optimization & productivity intelligence.",
    category: "Operations",
    status: "LIVE",
    logo: "/home/zoiko-time.png",
    logoWidth: 110,
    href: "/zoiko-time",
  },
  {
    name: "Zoiko Sema",
    description:
      "Global sovereign enterprise communications & secure messaging.",
    category: "Communications",
    status: "LIVE",
    logo: "/home/zoiko-sema.png",
    logoWidth: 115,
    href: "/zoiko-sema",
  },
  {
    name: "Zoiko Cloud",
    description:
      "Enterprise cloud infrastructure and platform services.",
    category: "Cloud & Infrastructure",
    status: "LIVE",
    logo: "/home/zoiko-cloud.png",
    logoWidth: 115,
    href: "/zoiko-cloud",
  },
  {
    name: "Zoiko Vertex",
    description:
      "High-density serverless orchestration & computing.",
    category: "Infrastructure",
    status: "LIVE",
    logo: "/home/zoiko-vertex.png",
    logoWidth: 115,
    href: "/zoiko-vertex",
  },
  {
    name: "Zoiko Logia",
    description:
      "Evidence-linked accounting intelligence for professionals.",
    category: "AI & Intelligence",
    status: "LIVE",
    logo: "/home/zoiko-logia.png",
    logoWidth: 115,
    href: "/zoiko-logia",
  },
  {
    name: "Zoiko Shield",
    description:
      "Cybersecurity, protection and platform security.",
    category: "Communications & Collaboration",
    status: "LIVE",
    logo: "/home/zoiko-shield.png",
    logoWidth: 105,
    href: "/zoiko-shield",
  },
  {
    name: "Zoiko Suite",
    description:
      "Integrated business applications for modern enterprises.",
    category: "Enterprise Applications",
    status: "LIVE",
    logo: "/home/zoiko-suite.png",
    logoWidth: 115,
    href: "/zoiko-suite",
  },
  {
    name: "Zoiko HR",
    description:
      "Human capital management and people operations.",
    category: "Workforce & Operations",
    status: "LIVE",
    logo: "/home/zoiko-hr.png",
    logoWidth: 105,
    href: "/zoiko-hr",
  },
  {
    name: "Zoiko ID",
    description:
      "Identity, authentication and verification.",
    category: "Security, Identity & Trust",
    status: "LIVE",
    logo: "/home/zoiko-id.png",
    logoWidth: 110,
    href: "/zoiko-id",
  },
];

/* =========================================================
   REVEAL ANIMATION
========================================================= */

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

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

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
          : "translateY(32px)",
        transitionProperty: "opacity, transform",
        transitionDuration: "700ms",
        transitionTimingFunction:
          "cubic-bezier(0.22, 1, 0.36, 1)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* =========================================================
   PRODUCT CARD
========================================================= */

function ProductCard({
  product,
  index,
}: {
  product: Product;
  index: number;
}) {
  return (
    <Reveal delay={index * 45} className="h-full">
      <Link
        href={product.href}
        className="group block h-full"
      >
        <article
          className="
            relative
            flex
            h-48
            w-full
            flex-col
            justify-center
            gap-5
            overflow-hidden
            rounded-2xl
            bg-slate-50
            p-6
            shadow-[0px_4px_4px_0px_rgba(0,0,0,0.09)]
            transition-all
            duration-300
            ease-out
            hover:-translate-y-1
            hover:shadow-[0px_12px_28px_rgba(15,23,42,0.13)]
          "
        >
          {/* Hover overlay */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              rounded-2xl
              bg-cyan-500/[0.035]
              opacity-0
              transition-opacity
              duration-300
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
              justify-center
              gap-5
            "
          >
            {/* Logo + Status */}
            <div
              className="
                flex
                min-h-10
                w-full
                items-center
                justify-between
                gap-3
              "
            >
              <div
                className="
                  flex
                  h-10
                  w-[155px]
                  shrink-0
                  items-center
                "
              >
                <Image
                  src={product.logo}
                  alt={product.name}
                  width={155}
                  height={40}
                  style={{
                    width: `${product.logoWidth}px`,
                  }}
                  className="
                    h-auto
                    max-h-10
                    object-contain
                    object-left
                    transition-transform
                    duration-300
                    group-hover:scale-[1.03]
                  "
                />
              </div>

              {/* LIVE / BETA */}
              {product.status === "LIVE" ? (
                <span
                  className="
                    inline-flex
                    shrink-0
                    items-center
                    gap-1
                    rounded-full
                    bg-emerald-500/10
                    px-2
                    py-1
                  "
                >
                  <span
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-emerald-500
                    "
                  />

                  <span
                    className={`
                      ${poppins.className}
                      text-[10px]
                      font-semibold
                      leading-none
                      text-teal-700
                    `}
                  >
                    LIVE
                  </span>
                </span>
              ) : (
                <span
                  className={`
                    ${poppins.className}
                    inline-flex
                    shrink-0
                    items-center
                    rounded-full
                    bg-slate-200
                    px-2
                    py-1
                    text-[10px]
                    font-semibold
                    leading-none
                    text-slate-500
                  `}
                >
                  BETA
                </span>
              )}
            </div>

            {/* Description */}
            <div
              className={`
                ${poppins.className}
                min-h-10
                line-clamp-2
                text-sm
                font-normal
                leading-5
                text-slate-500
              `}
            >
              {product.description}
            </div>

            {/* Category + Explore */}
            <div
              className="
                flex
                w-full
                items-center
                justify-between
                gap-2
              "
            >
              <span
                className={`
                  ${poppins.className}
                  max-w-[170px]
                  rounded-full
                  bg-cyan-700/10
                  px-2.5
                  py-1
                  text-[10px]
                  font-semibold
                  leading-4
                  text-cyan-700
                  sm:text-xs
                `}
              >
                {product.category}
              </span>

              <span
                className={`
                  ${poppins.className}
                  inline-flex
                  shrink-0
                  items-center
                  gap-1
                  text-xs
                  font-semibold
                  text-teal-700
                `}
              >
                Explore

                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  <path
                    d="M2.5 6H9.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />

                  <path
                    d="M6.75 3.25L9.5 6L6.75 8.75"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </div>
        </article>
      </Link>
    </Reveal>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function Eco() {
  const [activeFilter, setActiveFilter] =
    useState("All Products");

  const filteredProducts =
    activeFilter === "All Products"
      ? products
      : products.filter((product) => {
          if (
            activeFilter ===
            "Commerce & Intelligence"
          ) {
            return (
              product.category.includes("Commerce") ||
              product.category.includes(
                "AI & Intelligence"
              )
            );
          }

          if (activeFilter === "Specialized") {
            return (
              product.category.includes("Security") ||
              product.category.includes("Enterprise")
            );
          }

          return product.category.includes(
            activeFilter
          );
        });

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-white
      "
    >
      {/* =====================================================
          BACKGROUND IMAGE
          public/home/bg4.png
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-0">
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
          OPTIONAL LIGHT OVERLAY
          Keeps text and cards readable over bg4.png
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-0
          bg-white/10
        "
      />

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
          py-16
          sm:px-8
          sm:py-20
          lg:px-20
          lg:py-24
        "
      >
        {/* ===================================================
            HEADING
        =================================================== */}

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
            <span
              className={`
                ${poppins.className}
                text-xs
                font-semibold
                uppercase
                tracking-[0.16em]
                text-cyan-700
              `}
            >
              Featured Product Suite
            </span>

            <h2
              className={`
                ${plusJakarta.className}
                max-w-[1000px]
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
              The Zoiko Platform Ecosystem
            </h2>

            <p
              className={`
                ${poppins.className}
                max-w-[1050px]
                text-base
                font-normal
                leading-7
                text-slate-500
                sm:text-lg
              `}
            >
              A unified suite of AI-driven platforms
              powering identity, finance, compliance,
              commerce, communications, and global
              operations.
            </p>
          </div>
        </Reveal>

        {/* ===================================================
            FILTERS
        =================================================== */}

        <Reveal delay={100}>
          <div
            className="
              mt-10
              flex
              w-full
              flex-wrap
              gap-3
            "
          >
            {filters.map((filter) => {
              const isActive =
                activeFilter === filter;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() =>
                    setActiveFilter(filter)
                  }
                  className={`
                    ${poppins.className}
                    rounded-full
                    px-4
                    py-2
                    text-xs
                    font-medium
                    transition-all
                    duration-200
                    ease-out
                    focus:outline-none
                    ${
                      isActive
                        ? "bg-cyan-700 text-white shadow-sm"
                        : "bg-slate-50 text-slate-500 outline outline-1 outline-neutral-200 hover:-translate-y-0.5 hover:bg-white hover:text-cyan-700 hover:outline-cyan-700/20"
                    }
                  `}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* ===================================================
            PRODUCT CARDS
        =================================================== */}

        <div className="mt-10">
          <div
            className="
              grid
              grid-cols-1
              gap-4
              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-4
            "
          >
            {filteredProducts.map(
              (product, index) => (
                <ProductCard
                  key={`${product.name}-${index}`}
                  product={product}
                  index={index}
                />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}