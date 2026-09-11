"use client";

import Link from "next/link";

type ProductMegaMenuProps = {
  isOpen: boolean;
  onLinkClick: () => void;
};

type ProductItemProps = {
  title: string;
  description: string;
  href: string;
  onLinkClick: () => void;
};

function ProductItem({
  title,
  description,
  href,
  onLinkClick,
}: ProductItemProps) {
  return (
    <Link
      href={href}
      onClick={onLinkClick}
      className="group block w-full rounded-lg px-2 py-2 transition-colors duration-150 hover:bg-slate-50"
    >
      <div className="flex w-full items-center justify-between gap-2">
        {/* Product Heading */}
        <span className="text-sm font-normal leading-5 text-slate-800 transition-colors duration-150 group-hover:text-cyan-700">
          {title}
        </span>

        {/* Arrow */}
        <span className="shrink-0 text-xs font-normal text-cyan-700 opacity-0 transition-all duration-150 group-hover:translate-x-0.5 group-hover:opacity-100">
          ›
        </span>
      </div>

      {/* Description */}
      <p className="mt-1 text-xs font-normal leading-4 text-slate-600">
        {description}
      </p>
    </Link>
  );
}

function CategoryTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-1 text-[10px] font-normal uppercase leading-3 tracking-wide text-cyan-700">
      {children}
    </div>
  );
}

const enterpriseProducts = [
  {
    title: "ZoikoTime",
    description:
      "Governed workforce time, productivity and provenance",
    href: "#",
  },
  {
    title: "Zoiko HR",
    description:
      "Global human resources and workforce operations",
    href: "#",
  },
  {
    title: "Zoiko Payroll",
    description:
      "Payroll operations, controls and multinational workflows",
    href: "#",
  },
  {
    title: "Zoiko Billing",
    description:
      "Billing, invoicing and revenue operations",
    href: "#",
  },
];

const aiProducts = [
  {
    title: "ZoikoVertex",
    description:
      "Governed agentic execution and workflow automation",
    href: "#",
  },
  {
    title: "ZoikoNex",
    description:
      "Telecom OSS/BSS, monetization and operator infrastructure",
    href: "#",
  },
  {
    title: "Zoiko Sema",
    description:
      "Meetings, messaging and calling",
    href: "#",
  },
  {
    title: "Zoiko Local",
    description:
      "Communications and local-number infrastructure",
    href: "#",
  },
  {
    title: "ZoikoStream Live Events",
    description:
      "Commercial live-event broadcasting technology",
    href: "#",
  },
];

const groupProducts = [
  {
    title: "ZoikoMeds",
    description:
      "Zoiko Healthcare platform - medication and pharmacy-availability intelligence",
    href: "#",
  },
  {
    title: "Zoiko Social",
    description:
      "Zoiko Media Corp. platform - social and community experience",
    href: "#",
  },
  {
    title: "Zoiko Rooms",
    description:
      "Zoiko Realty Group platform - property and accommodation marketplace",
    href: "#",
  },
];

export default function ProductMegaMenu({
  isOpen,
  onLinkClick,
}: ProductMegaMenuProps) {
  return (
    <div
      className={`
        fixed
        left-1/2
        top-[95px]
        z-[100]
        w-[calc(100vw-64px)]
        max-w-[1400px]
        -translate-x-1/2
        transition-all
        duration-200
        ease-out
        max-md:hidden
        ${
          isOpen
            ? "visible translate-y-0 opacity-100 pointer-events-auto"
            : "invisible translate-y-2 opacity-0 pointer-events-none"
        }
      `}
    >
      {/* Invisible Hover Bridge */}
      <div className="absolute -top-5 left-0 h-5 w-full" />

      {/* Main Dropdown */}
      <div className="relative overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0px_12px_28px_0px_rgba(15,23,42,0.08)]">

        {/* Header */}
        <div className="flex items-center justify-between px-12 pb-0 pt-7">
          <div className="flex flex-col items-start gap-1">

            {/* Small Heading */}
            <div className="text-[10px] font-normal uppercase leading-4 tracking-wide text-cyan-700">
              Explore ZoikoTech
            </div>

            {/* Main Heading */}
            <h2 className="text-xl font-normal leading-7 text-slate-800">
              Platforms
            </h2>
          </div>

          {/* Platforms Overview */}
          <Link
            href="#"
            onClick={onLinkClick}
            className="group relative text-xs font-normal leading-5 text-slate-700 transition-colors duration-150 hover:text-cyan-700"
          >
            View Platforms overview

            <span className="ml-1 inline-block transition-transform duration-150 group-hover:translate-x-1">
              →
            </span>

            <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 rounded-full bg-cyan-700 transition-all duration-200 group-hover:w-full" />
          </Link>
        </div>

        {/* Three Columns */}
        <div className="grid grid-cols-3 gap-8 px-12 pb-8 pt-6">

          {/* Enterprise & Workforce */}
          <div className="min-w-0">
            <CategoryTitle>
              Enterprise &amp; workforce
            </CategoryTitle>

            <div className="flex flex-col gap-[3px]">
              {enterpriseProducts.map((item) => (
                <ProductItem
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  href={item.href}
                  onLinkClick={onLinkClick}
                />
              ))}
            </div>
          </div>

          {/* AI, Telecom & Communications */}
          <div className="min-w-0">
            <CategoryTitle>
              AI, telecom &amp; communications
            </CategoryTitle>

            <div className="flex flex-col gap-[3px]">
              {aiProducts.map((item) => (
                <ProductItem
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  href={item.href}
                  onLinkClick={onLinkClick}
                />
              ))}
            </div>
          </div>

          {/* Group Platforms */}
          <div className="min-w-0">
            <CategoryTitle>
              Group platforms powered by Zoiko technology
            </CategoryTitle>

            <div className="flex flex-col gap-[3px]">
              {groupProducts.map((item) => (
                <ProductItem
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  href={item.href}
                  onLinkClick={onLinkClick}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}