"use client";

import { useState } from "react";

type Product = {
  name: string;
  description: string;
  category: string;
  status: "LIVE" | "BETA";
};

const categories = [
  "All Products",
  "Infrastructure",
  "Financial Stack",
  "Operations",
  "Communications",
  "Commerce & Intelligence",
  "Specialized",
];

const products: Product[] = [
  {
    name: "Zoiko AI",
    description:
      "Agentic intelligence layer built for secure enterprise reasoning.",
    category: "Infrastructure",
    status: "LIVE",
  },
  {
    name: "ZoikoNex",
    description:
      "Global telecom billing & unified revenue engine.",
    category: "Infrastructure",
    status: "LIVE",
  },
  {
    name: "ZoikoAssure",
    description:
      "Smart compliance, automated audits & corporate governance.",
    category: "Infrastructure",
    status: "LIVE",
  },
  {
    name: "ZoikoPay",
    description:
      "Next-gen intelligent commerce & high-velocity global payments.",
    category: "Financial Stack",
    status: "LIVE",
  },
  {
    name: "Zoiko Remit",
    description:
      "Secure cross-border remittance and automated treasury.",
    category: "Financial Stack",
    status: "LIVE",
  },
  {
    name: "Zoiko Payroll",
    description:
      "AI-driven global workforce payroll & automated compliance.",
    category: "Financial Stack",
    status: "BETA",
  },
  {
    name: "Zoiko Billing",
    description:
      "Flexible subscription billing models & modular taxation.",
    category: "Financial Stack",
    status: "LIVE",
  },
  {
    name: "ZoikoTime",
    description:
      "Workforce time optimization & productivity intelligence.",
    category: "Operations",
    status: "LIVE",
  },
  {
    name: "Zoiko Sema",
    description:
      "Global sovereign enterprise communications & secure messaging.",
    category: "Communications",
    status: "LIVE",
  },
  {
    name: "ZoikoVertex",
    description:
      "High-density serverless orchestration & computing.",
    category: "Infrastructure",
    status: "BETA",
  },
  {
    name: "Zoiko Arc",
    description:
      "SaaS migration engine & API-first middleware connector.",
    category: "Infrastructure",
    status: "LIVE",
  },
  {
    name: "Zoiko Local",
    description:
      "Regional hyper-local commerce enablement & logistics routing.",
    category: "Commerce",
    status: "LIVE",
  },
];

export default function ProductEcosystem() {
  const [activeCategory, setActiveCategory] = useState("All Products");

  const filteredProducts =
    activeCategory === "All Products"
      ? products
      : products.filter((product) => {
          if (activeCategory === "Commerce & Intelligence") {
            return (
              product.category === "Commerce" ||
              product.category === "Infrastructure"
            );
          }

          if (activeCategory === "Specialized") {
            return product.category === "Specialized";
          }

          return product.category === activeCategory;
        });

  return (
    <section
      id="platforms"
      className="w-full bg-white px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-20"
    >
      <div className="mx-auto flex w-full max-w-[1296px] flex-col items-start gap-10 sm:gap-12 lg:gap-14">
        {/* Section Header */}
        <div className="flex w-full flex-col items-start gap-4">
          <span className="text-[10px] font-bold uppercase tracking-wide text-cyan-700">
            FEATURED PRODUCT SUITE
          </span>

          <h2 className="w-full text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-5xl lg:leading-[1.2]">
            The Zoiko Platform Ecosystem
          </h2>

          <p className="max-w-4xl text-base font-normal leading-7 text-slate-500 sm:text-lg">
            A unified suite of AI-driven platforms powering identity, finance,
            compliance, commerce, communications, and global operations.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex w-full flex-wrap items-center gap-3">
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-4 py-2 text-xs font-medium transition ${
                  isActive
                    ? "border-cyan-700 bg-cyan-700 text-white"
                    : "border-neutral-200 bg-slate-50 text-slate-500 hover:border-cyan-700/40 hover:text-cyan-700"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <article
              key={product.name}
              className="flex min-h-[210px] flex-col rounded-2xl border border-neutral-200 bg-slate-50 p-6 transition hover:border-cyan-700/30 hover:shadow-sm"
            >
              {/* Product Name + Status */}
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-xl font-bold text-slate-900">
                  {product.name}
                </h3>

                {product.status === "LIVE" ? (
                  <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-1 text-[10px] font-semibold text-teal-700">
                    <span className="size-1.5 rounded-full bg-emerald-500" />
                    LIVE
                  </span>
                ) : (
                  <span className="shrink-0 rounded-full bg-slate-200 px-2 py-1 text-[10px] font-semibold text-slate-500">
                    BETA
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="mt-5 min-h-[40px] text-sm font-normal leading-5 text-slate-500">
                {product.description}
              </p>

              {/* Category + Explore */}
              <div className="mt-auto flex items-center justify-between gap-4 pt-5">
                <span className="rounded-full bg-cyan-700/10 px-2.5 py-1 text-xs font-semibold text-cyan-700">
                  {product.category}
                </span>

                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-teal-700 transition hover:text-cyan-700"
                >
                  Explore
                  <span aria-hidden="true" className="text-sm">
                    →
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}