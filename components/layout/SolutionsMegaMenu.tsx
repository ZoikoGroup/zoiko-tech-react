"use client";

import Link from "next/link";

type SolutionsMegaMenuProps = {
  isOpen: boolean;
  onLinkClick: () => void;
};

type SolutionItemProps = {
  title: string;
  description: string;
  href: string;
  onLinkClick: () => void;
};

function SolutionItem({
  title,
  description,
  href,
  onLinkClick,
}: SolutionItemProps) {
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

          <p className="mt-1 text-xs font-normal leading-5 text-slate-600">
            {description}
          </p>
        </div>

        <span className="mt-0.5 shrink-0 text-sm font-normal text-cyan-700 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100">
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

const technologySolutions = [
  {
    title: "Enterprise SaaS & Business Platforms",
    description:
      "Modernize core work with integrated enterprise software",
    href: "#",
  },
  {
    title: "AI & Agentic Automation",
    description:
      "Apply governed AI and agents to repeatable business work",
    href: "#",
  },
  {
    title: "Cloud & Developer Infrastructure",
    description:
      "Build, integrate and operate on scalable platform foundations",
    href: "#",
  },
  {
    title: "Modernization & Integration",
    description:
      "Connect legacy systems, APIs, workflows and digital services",
    href: "#",
  },
];

const operationsSolutions = [
  {
    title: "Workforce & Productivity",
    description:
      "Time, workforce visibility, collaboration and operational accountability",
    href: "#",
  },
  {
    title: "HR, Payroll & Revenue Operations",
    description:
      "Run people, payroll, billing and recurring business processes",
    href: "#",
  },
  {
    title: "Telecom Operations & Monetization",
    description:
      "Operate communications services with OSS/BSS and monetization infrastructure",
    href: "#",
  },
  {
    title: "Communications & Collaboration",
    description:
      "Meetings, messaging, calling and business communications",
    href: "#",
  },
];

const trustSolutions = [
  {
    title: "Cybersecurity & Resilience",
    description:
      "Protect systems, users and business continuity",
    href: "#",
  },
  {
    title: "Identity & Access",
    description:
      "Authenticate people, systems and delegated authority",
    href: "#",
  },
  {
    title: "Regulatory & Compliance",
    description:
      "Evidence, obligations, controls and regulated workflows",
    href: "#",
  },
  {
    title: "AI Governance & Assurance",
    description:
      "Govern AI systems, agent behavior, evidence and approvals",
    href: "#",
  },
];

const industrySolutions = [
  {
    title: "Healthcare & AgeTech",
    description:
      "Medication access, healthcare workflows and non-clinical care technology",
    href: "#",
  },
  {
    title: "Media & Streaming",
    description:
      "Live events, streaming and programmable media infrastructure",
    href: "#",
  },
  {
    title: "Mobility & Transportation",
    description:
      "Digital mobility, transportation and safety-oriented operations",
    href: "#",
  },
  {
    title: "Property & Accommodation",
    description:
      "Property discovery, transactions and compliance-aware experiences",
    href: "#",
  },
  {
    title: "Financial Services Technology",
    description:
      "Financial operations, evidence and specialist intelligence",
    href: "#",
  },
];

export default function SolutionsMegaMenu({
  isOpen,
  onLinkClick,
}: SolutionsMegaMenuProps) {
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
        <div className="flex items-center justify-between px-12 pt-7">
          <div className="flex flex-col items-start gap-1">
            <div className="text-xs font-medium uppercase tracking-wide leading-4 text-cyan-700">
              Explore ZoikoTech
            </div>

            <h2 className="text-xl font-medium leading-7 text-slate-900">
              Solutions
            </h2>
          </div>

          <Link
            href="#"
            onClick={onLinkClick}
            className="group relative text-sm font-normal leading-5 text-slate-800 transition-colors duration-200 hover:text-cyan-700"
          >
            View Solutions overview
            <span className="ml-1 inline-block transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>

            <span className="absolute -bottom-1 left-0 h-px w-0 rounded-full bg-cyan-700 transition-all duration-200 group-hover:w-full" />
          </Link>
        </div>

        {/* Four Columns */}
        <div className="grid grid-cols-4 gap-8 px-12 pb-8 pt-7">

          {/* Technology & SaaS */}
          <div className="min-w-0">
            <CategoryTitle>
              Technology &amp; SaaS
            </CategoryTitle>

            <div className="mt-3 flex flex-col gap-1">
              {technologySolutions.map((item) => (
                <SolutionItem
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  href={item.href}
                  onLinkClick={onLinkClick}
                />
              ))}
            </div>
          </div>

          {/* Operations & Communications */}
          <div className="min-w-0">
            <CategoryTitle>
              Operations &amp; Communications
            </CategoryTitle>

            <div className="mt-3 flex flex-col gap-1">
              {operationsSolutions.map((item) => (
                <SolutionItem
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  href={item.href}
                  onLinkClick={onLinkClick}
                />
              ))}
            </div>
          </div>

          {/* Trust, Security & Governance */}
          <div className="min-w-0">
            <CategoryTitle>
              Trust, Security &amp; Governance
            </CategoryTitle>

            <div className="mt-3 flex flex-col gap-1">
              {trustSolutions.map((item) => (
                <SolutionItem
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  href={item.href}
                  onLinkClick={onLinkClick}
                />
              ))}
            </div>
          </div>

          {/* Industry Outcomes */}
          <div className="min-w-0">
            <CategoryTitle>
              Industry Outcomes
            </CategoryTitle>

            <div className="mt-3 flex flex-col gap-1">
              {industrySolutions.map((item) => (
                <SolutionItem
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