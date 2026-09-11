"use client";

import Link from "next/link";

type CompanyMegaMenuProps = {
  isOpen: boolean;
  onLinkClick: () => void;
};

type CompanyItemProps = {
  title: string;
  description: string;
  href: string;
  onLinkClick: () => void;
};

function CompanyItem({
  title,
  description,
  href,
  onLinkClick,
}: CompanyItemProps) {
  return (
    <Link
      href={href}
      onClick={onLinkClick}
      className="group block w-full rounded-lg px-3 py-2 transition-colors duration-200 hover:bg-slate-50"
    >
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0 flex-1">
          {/* Item Heading */}
          <div className="text-sm font-normal leading-5 text-slate-800 transition-colors duration-200 group-hover:text-cyan-700">
            {title}
          </div>

          {/* Description */}
          <div className="mt-1 text-xs font-normal leading-4 text-slate-600">
            {description}
          </div>
        </div>

        {/* Arrow */}
        <span className="shrink-0 text-xs font-normal text-cyan-700 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          ›
        </span>
      </div>
    </Link>
  );
}

function CategoryTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[10px] font-normal uppercase tracking-wide leading-3 text-cyan-700">
      {children}
    </div>
  );
}

export default function CompanyMegaMenu({
  isOpen,
  onLinkClick,
}: CompanyMegaMenuProps) {
  const companyColumns = [
    {
      title: "About ZoikoTech",
      items: [
        {
          title: "About ZoikoTech",
          description:
            "Corporate positioning, mission, technology thesis and operating model",
          href: "#",
        },
        {
          title: "Leadership & Governance",
          description:
            "Executive leadership and governance information",
          href: "#",
        },
        {
          title: "Global Presence",
          description:
            "Headquarters, hubs and operating footprint",
          href: "#",
        },
        {
          title: "Technology Strategy",
          description:
            "How Zoiko builds, integrates and governs the technology estate",
          href: "#",
        },
      ],
    },
    {
      title: "Work with us",
      items: [
        {
          title: "Careers",
          description:
            "Global roles, culture and candidate information",
          href: "#",
        },
        {
          title: "Partners",
          description:
            "Technology, channel and strategic partnership paths",
          href: "#",
        },
        {
          title: "Suppliers",
          description:
            "Procurement / supplier information when operationally ready",
          href: "#",
        },
      ],
    },
    {
      title: "Connect",
      items: [
        {
          title: "Contact Us",
          description:
            "General enquiries and routed contact paths",
          href: "#",
        },
        {
          title: "Support",
          description:
            "Customer support entry points and product routing",
          href: "#",
        },
        {
          title: "Zoiko Group",
          description:
            "Explicit route to the parent-group corporate website",
          href: "#",
        },
      ],
    },
  ];

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
        ${
          isOpen
            ? "visible translate-y-0 opacity-100 pointer-events-auto"
            : "invisible translate-y-2 opacity-0 pointer-events-none"
        }
      `}
    >
      {/* Invisible hover bridge */}
      <div className="absolute -top-5 left-0 h-5 w-full" />

      <div className="overflow-hidden rounded-b-2xl bg-white shadow-[0px_12px_28px_0px_rgba(15,23,42,0.08)]">

        {/* Main Company Menu */}
        <div className="flex max-h-[560px] flex-col gap-6 bg-white px-12 pt-7">

          {/* Header */}
          <div className="flex items-center justify-between overflow-hidden">
            <div className="flex flex-col items-start gap-1 overflow-hidden">

              {/* Small Heading */}
              <div className="text-[10px] font-normal uppercase tracking-wide text-cyan-700">
                Explore ZoikoTech
              </div>

              {/* Main Heading */}
              <div className="text-xl font-normal leading-7 text-slate-800">
                Company
              </div>
            </div>

            {/* Company Overview */}
            <Link
              href="#"
              onClick={onLinkClick}
              className="text-xs font-normal text-slate-700 transition-colors duration-200 hover:text-cyan-700"
            >
              View Company overview →
            </Link>
          </div>

          {/* Company Columns */}
          <div className="grid grid-cols-3 gap-8 overflow-hidden pb-8">
            {companyColumns.map((column) => (
              <div
                key={column.title}
                className="flex min-w-0 flex-col items-start gap-3 overflow-hidden"
              >
                {/* Category */}
                <CategoryTitle>
                  {column.title}
                </CategoryTitle>

                {/* Items */}
                <div className="flex w-full flex-col gap-[3px]">
                  {column.items.map((item) => (
                    <CompanyItem
                      key={item.title}
                      title={item.title}
                      description={item.description}
                      href={item.href}
                      onLinkClick={onLinkClick}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Accessibility Bar */}
        <div className="flex items-center gap-7 bg-teal-50 px-11 py-8">

          {/* Accessibility */}
          <div className="text-[10px] font-normal uppercase tracking-wide text-cyan-700">
            Accessibility
          </div>

          {/* Trust & Privacy */}
          <Link
            href="#"
            onClick={onLinkClick}
            className="text-xs font-normal text-slate-700 transition-colors duration-200 hover:text-cyan-700"
          >
            Trust & Privacy →
          </Link>

          {/* Legal */}
          <Link
            href="#"
            onClick={onLinkClick}
            className="text-xs font-normal text-slate-700 transition-colors duration-200 hover:text-cyan-700"
          >
            Legal →
          </Link>
        </div>
      </div>
    </div>
  );
}