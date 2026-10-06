import React from "react";
import Image from "next/image";
import Link from "next/link";

interface NeighborCard {
  title: string;
  image: string;
  theyOwn: string;
  governance: string;
  linkText: string;
  href: string;
}

const neighborCards: NeighborCard[] = [
  {
    title: "Privacy",
    image: "/ai-safety-and-governance/neighbor-privacy.png",
    theyOwn: "Owns notices, rights, processing terms and exact data-use statements.",
    governance: "Governance requires purpose, minimization and disclosure boundaries.",
    linkText: "Open Privacy",
    href: "/trust-center",
  },
  {
    title: "Cybersecurity",
    image: "/ai-safety-and-governance/neighbor-security.png",
    theyOwn: "Owns protection, security operations and Responsible Disclosure.",
    governance: "Governance expects safe operation and incident escalation.",
    linkText: "Explore Cybersecurity",
    href: "/cybersecurity-resilience",
  },
  {
    title: "Digital Identity",
    image: "/ai-safety-and-governance/neighbor-identity.png",
    theyOwn: "Owns identity, authentication, entitlement and delegated authority.",
    governance: "Governance requires AI activity to be attributable and bounded.",
    linkText: "Explore Digital Identity",
    href: "/digital-identity",
  },
  {
    title: "Agentic Systems",
    image: "/ai-safety-and-governance/neighbor-agentic.png",
    theyOwn: "Owns tool registry, delegated authority, approvals and runtime.",
    governance: "Governance decides whether the agentic use is approved.",
    linkText: "Explore Agentic Systems",
    href: "/agentic-systems",
  },
  {
    title: "Governed Work Orchestration",
    image: "/ai-safety-and-governance/neighbor-incident.png",
    theyOwn: "Owns durable tasks, dependencies, handoffs and completion.",
    governance: "Governance sets evaluation needs for AI in broader work.",
    linkText: "Explore orchestration",
    href: "/governed-work-orchestration",
  },
  {
    title: "Regulatory Technology",
    image: "/ai-safety-and-governance/neighbor-regulatory.png",
    theyOwn: "Owns jurisdiction, obligations and regulated workflow evidence.",
    governance: "Governance classifies and approves regulated AI use.",
    linkText: "Explore Regulatory Technology",
    href: "/regulatory-technology",
  },
  {
    title: "Zoiko Research",
    image: "/ai-safety-and-governance/neighbor-research.png",
    theyOwn: "Owns approved public papers, benchmarks and methods.",
    governance: "Governance cites only current, scoped, approved evidence.",
    linkText: "Explore Zoiko Research",
    href: "/zoiko-research",
  },
  {
    title: "Responsible AI & Trust Center",
    image: "/ai-safety-and-governance/neighbor-trust.png",
    theyOwn: "Owns principles, corporate proof, certifications and status.",
    governance: "Governance links, never duplicates or contradicts.",
    linkText: "Open Trust Center",
    href: "/trust-center",
  },
];

export const NeighborsHandoffsSection: React.FC = () => {
  return (
    <section id="neighbors" className="w-full bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 sm:gap-12">
        {/* Header */}
        <div className="flex flex-col gap-2.5 sm:gap-3">
          <span className="text-xs md:text-sm font-semibold tracking-wider text-[#247780] font-poppins uppercase">
            Privacy, security, identity, agentic, regulatory, research & trust handoffs
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[42px] font-bold text-[#0F172A] font-plus-jakarta leading-tight">
            Eight neighbors, one clear governance<br className="hidden md:inline" /> seam each
          </h2>
          <p className="text-[#64748B] text-xs sm:text-sm md:text-base font-poppins max-w-2xl">
            This page links authoritative routes. It never duplicates legal notices, certifications, status
            feeds nor security detail.
          </p>
        </div>

        {/* 8 Cards Grid (4 cols x 2 rows on large) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {neighborCards.map((card, idx) => (
            <article
              key={idx}
              className="bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden flex flex-col justify-between hover:shadow-lg transition-all duration-300 group"
            >
              {/* Image banner with dark gradient and title */}
              <div className="relative w-full h-32 sm:h-36 overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001315]/90 via-[#001315]/40 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                  <h3 className="text-base font-bold text-white font-plus-jakarta leading-tight">
                    {card.title}
                  </h3>
                </div>
              </div>

              {/* Card Body with "They own" & "Governance" */}
              <div className="p-4 md:p-5 flex flex-col justify-between gap-4 flex-1">
                <div className="flex flex-col gap-3 text-xs md:text-xs leading-relaxed font-poppins">
                  <div>
                    <strong className="text-[#0F172A] font-semibold">They own:</strong>{" "}
                    <span className="text-[#475569]">{card.theyOwn}</span>
                  </div>
                  <div>
                    <strong className="text-[#247780] font-semibold">Governance:</strong>{" "}
                    <span className="text-[#475569]">{card.governance}</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#247780] hover:text-[#195B62] transition-colors group/link"
                  >
                    <span>{card.linkText}</span>
                    <svg
                      className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
