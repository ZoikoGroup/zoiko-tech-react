"use client";

import Link from "next/link";

type ResourcesMegaMenuProps = {
  isOpen: boolean;
  onLinkClick: () => void;
};

type ResourceItemProps = {
  title: string;
  description: string;
  href: string;
  onLinkClick: () => void;
};

function ResourceItem({
  title,
  description,
  href,
  onLinkClick,
}: ResourceItemProps) {
  return (
    <Link
      href={href}
      onClick={onLinkClick}
      className="group block w-full rounded-lg px-3 py-2.5 transition-colors duration-200 hover:bg-slate-50"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <div className="text-sm font-medium leading-5 text-slate-900 transition-colors duration-200 group-hover:text-cyan-700">
            {title}
          </div>

          <div className="mt-1 text-xs font-normal leading-5 text-slate-600">
            {description}
          </div>
        </div>

        <span className="mt-0.5 shrink-0 text-sm font-normal text-cyan-700 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          →
        </span>
      </div>
    </Link>
  );
}

function CategoryTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-xs font-medium uppercase tracking-wide leading-4 text-cyan-700">
      {children}
    </div>
  );
}

export default function ResourcesMegaMenu({
  isOpen,
  onLinkClick,
}: ResourcesMegaMenuProps) {
  const resourceColumns = [
    {
      title: "Learn & discover",
      items: [
        {
          title: "Insights & Analysis",
          description:
            "Executive, product and industry perspectives",
          href: "#",
        },
        {
          title: "Research",
          description:
            "Technical papers, benchmarks and research outputs",
          href: "#",
        },
        {
          title: "Guides & Reports",
          description:
            "Structured downloadable resources",
          href: "#",
        },
        {
          title: "Customer Stories",
          description:
            "Evidence-led stories only when approved and attributable",
          href: "#",
        },
      ],
    },
    {
      title: "Build & evaluate",
      items: [
        {
          title: "Documentation",
          description:
            "Product and platform documentation",
          href: "#",
        },
        {
          title: "Developer Resources",
          description:
            "APIs, SDKs, integration guides and developer tools",
          href: "#",
        },
        {
          title: "Trust Center",
          description:
            "Security, privacy, compliance, accessibility and resilience evidence",
          href: "#",
        },
        {
          title: "Status",
          description:
            "Current service availability and incident communications",
          href: "#",
        },
      ],
    },
    {
      title: "News & company",
      items: [
        {
          title: "Newsroom",
          description:
            "Corporate news and announcements",
          href: "#",
        },
        {
          title: "Press Releases",
          description:
            "Official company releases",
          href: "#",
        },
        {
          title: "Media Resources",
          description:
            "Approved logos, facts and media assets",
          href: "#",
        },
        {
          title: "Events",
          description:
            "Only if there is a maintained events programme",
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
        <div className="flex max-h-[560px] flex-col gap-7 bg-white px-12 pt-7">
          
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-start gap-1">
              <div className="text-xs font-medium uppercase tracking-wide leading-4 text-cyan-700">
                Explore ZoikoTech
              </div>

              <div className="text-xl font-medium leading-7 text-slate-900">
                Resources
              </div>
            </div>

            <Link
              href="#"
              onClick={onLinkClick}
              className="text-sm font-normal text-slate-800 transition-colors duration-200 hover:text-cyan-700"
            >
              View Resources overview →
            </Link>
          </div>

          {/* Resource Columns */}
          <div className="grid grid-cols-3 gap-8 overflow-hidden pb-8">
            {resourceColumns.map((column) => (
              <div
                key={column.title}
                className="flex min-w-0 flex-col items-start gap-3"
              >
                <CategoryTitle>
                  {column.title}
                </CategoryTitle>

                <div className="flex w-full flex-col gap-1">
                  {column.items.map((item) => (
                    <ResourceItem
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
      </div>
    </div>
  );
}