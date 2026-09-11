"use client";

import Link from "next/link";

type TechnologyMegaMenuProps = {
  isOpen: boolean;
  onLinkClick: () => void;
};

type TechnologyItemProps = {
  title: string;
  description: string;
  href: string;
  onLinkClick: () => void;
};

function TechnologyItem({
  title,
  description,
  href,
  onLinkClick,
}: TechnologyItemProps) {
  return (
    <Link
      href={href}
      onClick={onLinkClick}
      className="group block w-full rounded-lg px-3 py-2 transition-colors duration-200 hover:bg-slate-50"
    >
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0 flex-1">
          <div className="text-sm font-medium leading-4 text-slate-900 transition-colors duration-200 group-hover:text-cyan-700">
            {title}
          </div>

          <div className="mt-[3px] text-xs font-normal leading-4 text-slate-600">
            {description}
          </div>
        </div>

        <span className="shrink-0 text-xs font-normal text-cyan-700 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          →
        </span>
      </div>
    </Link>
  );
}

function CategoryTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[10px] font-medium uppercase leading-3 text-cyan-700">
      {children}
    </div>
  );
}

export default function TechnologyMegaMenu({
  isOpen,
  onLinkClick,
}: TechnologyMegaMenuProps) {
  const technologyColumns = [
    {
      title: "Artificial intelligence & agentic systems",
      items: [
        {
          title: "Domain-Specific AI",
          description:
            "Specialized intelligence designed around real operating domains",
          href: "#",
        },
        {
          title: "Governed Agentic Execution",
          description:
            "Controlled agents, workflow execution and human accountability",
          href: "#",
        },
        {
          title: "Zoiko Gesta",
          description: "Governed Work Orchestration",
          href: "#",
        },
      ],
    },
    {
      title: "Cloud & digital infrastructure",
      items: [
        {
          title: "Zoiko Cloud",
          description:
            "Infrastructure for Zoiko platforms and regulated workloads",
          href: "#",
        },
        {
          title: "Developer Platform",
          description: "APIs, SDKs, tooling and ecosystem services",
          href: "#",
        },
        {
          title: "CoreX",
          description:
            "Shared control, evidence and transaction infrastructure",
          href: "#",
        },
      ],
    },
    {
      title: "Enterprise & financial operations",
      items: [
        {
          title: "Business Operating Systems",
          description:
            "Payroll, HR, billing, accounting and workforce infrastructure",
          href: "#",
        },
        {
          title: "Professional Intelligence",
          description:
            "ZoikoLogia, Kriton and Massarius architecture",
          href: "#",
        },
      ],
    },
    {
      title: "Communications & media infrastructure",
      items: [
        {
          title: "Telecom Infrastructure",
          description:
            "OSS/BSS, monetization and communications operations",
          href: "#",
        },
        {
          title: "Real-Time Communications",
          description:
            "Messaging, calling, meetings and local communications",
          href: "#",
        },
        {
          title: "Streaming Infrastructure",
          description:
            "Live events, delivery, replay and media services",
          href: "#",
        },
      ],
    },
    {
      title: "Security, identity & assurance",
      items: [
        {
          title: "Cybersecurity",
          description:
            "Protection, resilience and security operations",
          href: "#",
        },
        {
          title: "Digital Identity & Access",
          description:
            "Identity, authentication, entitlement and delegated authority",
          href: "#",
        },
        {
          title: "Assurance & Regulatory Evidence",
          description:
            "Governance, evidence and compliance infrastructure",
          href: "#",
        },
      ],
    },
    {
      title: "Industry technology",
      items: [
        {
          title: "Telecommunications",
          description: "Industry-specific technology systems",
          href: "#",
        },
        {
          title: "Healthcare",
          description:
            "Medication access, healthcare administration and domain AI",
          href: "#",
        },
        {
          title: "Finance, Mobility, Property & Government",
          description:
            "Vertical technology applied where Zoiko has a defensible control point",
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
      onMouseEnter={() => {}}
    >
      {/* Hover bridge */}
      <div className="absolute -top-5 left-0 h-5 w-full" />

      <div className="overflow-hidden rounded-b-2xl bg-white shadow-[0px_12px_28px_0px_rgba(15,23,42,0.08)]">
        
        {/* Main Technology Menu */}
        <div className="flex max-h-[560px] flex-col gap-6 bg-white px-12 pt-7">
          
          {/* Header */}
          <div className="flex items-center justify-between overflow-hidden">
            <div className="flex flex-col items-start gap-1 overflow-hidden">
              <div className="text-[10px] font-medium uppercase text-cyan-700">
                Explore ZoikoTech
              </div>

              <div className="text-xl font-medium text-slate-900">
                Technology
              </div>
            </div>

            <Link
              href="#"
              onClick={onLinkClick}
              className="text-xs font-normal text-slate-800 transition-opacity duration-200 hover:opacity-75"
            >
              View Technology overview →
            </Link>
          </div>

          {/* Technology Columns */}
          <div className="grid grid-cols-3 gap-x-5 gap-y-7 overflow-hidden pb-8">
            {technologyColumns.map((column) => (
              <div
                key={column.title}
                className="flex min-w-0 flex-col items-start gap-3 overflow-hidden"
              >
                <CategoryTitle>
                  {column.title}
                </CategoryTitle>

                <div className="flex w-full flex-col gap-[3px]">
                  {column.items.map((item) => (
                    <TechnologyItem
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

        {/* Bottom Research Bar */}
        <div className="flex items-center gap-7 bg-teal-50 px-11 py-8">
          <div className="text-[10px] font-medium uppercase text-cyan-700">
            Zoiko Research
          </div>

          <Link
            href="#"
            onClick={onLinkClick}
            className="text-xs font-normal text-slate-800 transition-colors duration-200 hover:text-cyan-700"
          >
            Frontier Technologies →
          </Link>

          <Link
            href="#"
            onClick={onLinkClick}
            className="text-xs font-normal text-slate-800 transition-colors duration-200 hover:text-cyan-700"
          >
            Developer Resources →
          </Link>

          <Link
            href="#"
            onClick={onLinkClick}
            className="text-xs font-normal text-slate-800 transition-colors duration-200 hover:text-cyan-700"
          >
            Trust Center →
          </Link>
        </div>
      </div>
    </div>
  );
}