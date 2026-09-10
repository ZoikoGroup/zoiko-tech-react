"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const filters = [
  "All Products",
  "Infrastructure",
  "Financial Stack",
  "Operations",
  "Communications",
  "Commerce & Intelligence",
  "Specialized",
];

const products = [
  {
    image: "/home/zoiko-ai.png",
    status: "LIVE",
    description:
      "Agentic intelligence layer built for secure enterprise reasoning.",
    category: "Infrastructure",
  },
  {
    image: "/home/zoiko-billing.png",
    status: "LIVE",
    description:
      "Global telecom billing & unified revenue engine.",
    category: "Infrastructure",
  },
  {
    image: "/home/zoiko-governance.png",
    status: "LIVE",
    description:
      "Smart compliance, automated audits & corporate governance.",
    category: "Infrastructure",
  },
  {
    image: "/home/zoiko-commerce.png",
    status: "LIVE",
    description:
      "Next-gen intelligent commerce & high-velocity global payments.",
    category: "Financial Stack",
  },
  {
    image: "/home/zoiko-remit.png",
    status: "LIVE",
    description:
      "Secure cross-border remittance and automated treasury.",
    category: "Financial Stack",
  },
  {
    image: "/home/zoiko-payroll.png",
    status: "BETA",
    description:
      "AI-driven global workforce payroll & automated compliance.",
    category: "Financial Stack",
  },
  {
    image: "/home/zoiko-subscriptions.png",
    status: "LIVE",
    description:
      "Flexible subscription billing models & modular taxation.",
    category: "Financial Stack",
  },
  {
    image: "/home/zoiko-time.png",
    status: "LIVE",
    description:
      "Workforce time optimization & productivity intelligence.",
    category: "Operations",
  },
  {
    image: "/home/zoiko-connect.png",
    status: "LIVE",
    description:
      "Global sovereign enterprise communications & secure messaging.",
    category: "Communications",
  },
  {
    image: "/home/zoiko-cloud.png",
    status: "BETA",
    description:
      "High-density serverless orchestration & computing.",
    category: "Infrastructure",
  },
  {
    image: "/home/zoiko-migration.png",
    status: "LIVE",
    description:
      "SaaS migration engine & API-first middleware connector.",
    category: "Infrastructure",
  },
  {
    image: "/home/zoiko-logistics.png",
    status: "LIVE",
    description:
      "Regional hyper-local commerce enablement & logistics routing.",
    category: "Commerce",
  },
];

export default function Platform() {
  const [activeFilter, setActiveFilter] = useState("All Products");

  const filteredProducts =
    activeFilter === "All Products"
      ? products
      : activeFilter === "Commerce & Intelligence"
        ? products.filter((product) => product.category === "Commerce")
        : products.filter((product) => product.category === activeFilter);

  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 md:px-10 lg:px-20 lg:py-24">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-10 lg:gap-14">
        {/* Heading */}
        <Reveal>
          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-cyan-700">
              FEATURED PRODUCT SUITE
            </p>

            <h2 className="text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
              The Zoiko Platform Ecosystem
            </h2>

            <p className="max-w-4xl text-base font-normal leading-7 text-slate-500 sm:text-lg">
              A unified suite of AI-driven platforms powering identity,
              finance, compliance, commerce, communications, and global
              operations.
            </p>
          </div>
        </Reveal>

        {/* Filters */}
        <Reveal delay={100}>
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => {
              const isActive = activeFilter === filter;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full px-4 py-2 text-xs font-medium transition-all duration-300 hover:-translate-y-0.5 ${
                    isActive
                      ? "bg-cyan-700 text-white shadow-sm hover:bg-cyan-700"
                      : "bg-slate-50 text-slate-500 outline outline-1 outline-neutral-200 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Products */}
        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((product, index) => (
            <Reveal
              key={`${product.description}-${index}`}
              delay={Math.min(index * 80, 560)}
            >
              <div className="group flex min-h-[208px] w-full flex-col justify-between gap-5 rounded-2xl bg-slate-50 p-6 outline outline-1 outline-neutral-200 transition-all duration-500 ease-out hover:-translate-y-2 hover:bg-white hover:shadow-[0px_14px_32px_0px_rgba(15,23,42,0.10)]">
                {/* Logo + Status */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex h-16 w-40 items-center overflow-hidden">
                    <Image
                      src={product.image}
                      alt="Zoiko product"
                      width={240}
                      height={90}
                      className="h-auto w-40 object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  </div>

                  {/* Status */}
                  <div
                    className={`flex shrink-0 items-center gap-1 rounded-full px-2 py-1 ${
                      product.status === "LIVE"
                        ? "bg-emerald-500/10"
                        : "bg-slate-200/70"
                    }`}
                  >
                    {product.status === "LIVE" && (
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 transition-transform duration-300 group-hover:scale-125" />
                    )}

                    <span
                      className={`text-[10px] font-semibold ${
                        product.status === "LIVE"
                          ? "text-teal-700"
                          : "text-slate-500"
                      }`}
                    >
                      {product.status}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="min-h-10 text-sm font-normal leading-5 text-slate-500">
                  {product.description}
                </p>

                {/* Category + Explore */}
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-cyan-700/10 px-2.5 py-1 text-xs font-semibold text-cyan-700">
                    {product.category}
                  </span>

                  <button
                    type="button"
                    className="shrink-0 text-xs font-semibold text-teal-700 transition-all duration-300 hover:translate-x-1 hover:text-cyan-700"
                  >
                    Explore
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Scroll Reveal */
function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
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
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`w-full transform transition-all duration-700 ease-out ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}