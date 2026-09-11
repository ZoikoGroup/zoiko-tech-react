"use client";

import Link from "next/link";

type IndustriesMegaMenuProps = {
  isOpen: boolean;
  onLinkClick: () => void;
};

type IndustryItemProps = {
  title: string;
  description: string;
  href: string;
  onLinkClick: () => void;
};

function IndustryItem({
  title,
  description,
  href,
  onLinkClick,
}: IndustryItemProps) {
  return (
    <Link
      href={href}
      onClick={onLinkClick}
      className="group block w-full rounded-lg px-2 py-2 transition-colors duration-150 hover:bg-slate-50"
    >
      <div className="flex w-full items-center justify-between gap-2">
        {/* Item Heading */}
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

const coreIndustries = [
  {
    title: "Telecommunications",
    description:
      "Operators, communications providers and telecom ecosystems",
    href: "#",
  },
  {
    title: "Financial Services",
    description:
      "Banks, fintech, payments, markets and financial operations",
    href: "#",
  },
  {
    title: "Healthcare & Life Sciences",
    description:
      "Health technology, medicine access, care and healthcare administration",
    href: "#",
  },
  {
    title: "Media & Entertainment",
    description:
      "Streaming, live events, content and digital media experiences",
    href: "#",
  },
  {
    title: "Public Sector & Government",
    description:
      "Accessible, auditable and jurisdiction-aware digital services",
    href: "#",
  },
];

const connectedIndustries = [
  {
    title: "Retail & Commerce",
    description:
      "Customer, commerce, communications and operational technology",
    href: "#",
  },
  {
    title: "Travel, Mobility & Transportation",
    description:
      "Travel technology, transport, mobility and connected operations",
    href: "#",
  },
  {
    title: "Real Estate & Property",
    description:
      "Property, accommodation and compliance-aware marketplaces",
    href: "#",
  },
  {
    title: "Professional Services",
    description:
      "Technology for knowledge, finance, compliance and service organizations",
    href: "#",
  },
  {
    title: "Education & Research",
    description:
      "Professional intelligence, learning and research-oriented technology",
    href: "#",
  },
];

export default function IndustriesMegaMenu({
  isOpen,
  onLinkClick,
}: IndustriesMegaMenuProps) {
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
              Industries
            </h2>
          </div>

          {/* Industries Overview */}
          <Link
            href="#"
            onClick={onLinkClick}
            className="group relative text-xs font-normal leading-5 text-slate-700 transition-colors duration-150 hover:text-cyan-700"
          >
            View Industries overview

            <span className="ml-1 inline-block transition-transform duration-150 group-hover:translate-x-1">
              →
            </span>

            <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 rounded-full bg-cyan-700 transition-all duration-200 group-hover:w-full" />
          </Link>
        </div>

        {/* Two Columns */}
        <div className="grid grid-cols-2 gap-8 px-12 pb-8 pt-6">

          {/* Core Industries */}
          <div className="min-w-0">
            <CategoryTitle>
              Core industries
            </CategoryTitle>

            <div className="flex flex-col gap-[3px]">
              {coreIndustries.map((item) => (
                <IndustryItem
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  href={item.href}
                  onLinkClick={onLinkClick}
                />
              ))}
            </div>
          </div>

          {/* Connected Industries */}
          <div className="min-w-0">
            <CategoryTitle>
              Connected industries
            </CategoryTitle>

            <div className="flex flex-col gap-[3px]">
              {connectedIndustries.map((item) => (
                <IndustryItem
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