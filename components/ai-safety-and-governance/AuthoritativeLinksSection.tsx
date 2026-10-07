import React from "react";
import Link from "next/link";

interface PillLink {
  title: string;
  href: string;
}

const pillLinks: PillLink[] = [
  { title: "Responsible AI", href: "/trust-center" },
  { title: "Trust Center", href: "/trust-center" },
  { title: "Security", href: "/cybersecurity-resilience" },
  { title: "Privacy", href: "/trust-center" },
  { title: "Responsible Disclosure", href: "/cybersecurity-resilience" },
  { title: "System Status", href: "#status" },
];

interface PlatformEvidenceRow {
  platform: string;
  state: {
    label: string;
    style: string;
  };
  role: string;
  notProven: string;
}

const platformEvidenceRows: PlatformEvidenceRow[] = [
  {
    platform: "Zoiko AI",
    state: {
      label: "Finish · approval-gated",
      style: "bg-slate-800 text-slate-300 border border-slate-700",
    },
    role: "Broader AI architecture and responsible-AI context",
    notProven: "No models, evaluations, providers or availability inferred",
  },
  {
    platform: "ZoikoVertex",
    state: {
      label: "Live",
      style: "bg-[#DBF2ED] text-[#195B62] font-semibold",
    },
    role: "Governed agentic execution and workflow automation",
    notProven: "Live state is not AI-safety certification",
  },
  {
    platform: "Zoiko Gesta / Governed Work Orchestration",
    state: {
      label: "Name pending",
      style: "bg-slate-800 text-slate-300 border border-slate-700",
    },
    role: "Orchestration surface once naming is approved",
    notProven: "Not a live governance product",
  },
  {
    platform: "Developer Platform",
    state: {
      label: "Build",
      style: "bg-slate-800 text-slate-300 border border-slate-700",
    },
    role: "Developer destination when ready",
    notProven: "No evaluation tooling claims until documented",
  },
  {
    platform: "Zoiko Research",
    state: {
      label: "Public research",
      style: "bg-[#DBEAFE] text-[#1E40AF] font-semibold",
    },
    role: "Approved papers and benchmarks",
    notProven: "Not every result applies to production",
  },
];

export const AuthoritativeLinksSection: React.FC = () => {
  return (
    <section id="authoritative-links" className="w-full bg-[#001315] py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 sm:gap-14">
        {/* Top 6 Pill Links */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {pillLinks.map((pill, idx) => (
            <Link
              key={idx}
              href={pill.href}
              className="inline-flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-5 py-2 sm:py-3 rounded-xl border border-[rgba(52,212,202,0.45)] text-white text-xs md:text-sm font-medium hover:bg-[rgba(52,212,202,0.1)] transition-colors"
            >
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#4DDCAD] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              <span>{pill.title}</span>
            </Link>
          ))}
        </div>

        {/* Section Header */}
        <div className="flex flex-col gap-2.5 sm:gap-3 max-w-3xl">
          <span className="text-xs md:text-sm font-semibold tracking-wider text-white font-poppins uppercase">
            Platform evidence layer
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[42px] font-bold text-white font-plus-jakarta leading-tight">
            Product state is not governance proof
          </h2>
          <p className="text-[#E2E8F0] text-xs sm:text-sm md:text-base font-poppins leading-relaxed">
            Readiness tells you whether a product exists. It never tells you a use case is approved,
            evaluated or safe.
          </p>
        </div>

        {/* Platform Evidence Layer Table with Mobile Swipe Indicator */}
        <div className="flex flex-col gap-2.5">
          <div className="sm:hidden flex items-center gap-1.5 text-xs text-[#4DDCAD] font-medium">
            <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
            <span>Swipe table horizontally to read all columns</span>
          </div>

          <div className="w-full border border-[rgba(52,212,202,0.4)] rounded-2xl overflow-hidden shadow-xl bg-[#001C20]/60 backdrop-blur-sm">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[620px] text-left text-xs md:text-sm border-collapse">
              <thead>
                <tr className="border-b border-[rgba(52,212,202,0.25)] bg-[#00262B] text-[#CBD5E1] font-semibold">
                  <th className="py-4 px-5">PLATFORM</th>
                  <th className="py-4 px-5">STATE</th>
                  <th className="py-4 px-5">ROLE</th>
                  <th className="py-4 px-5">WHAT IT DOES NOT PROVE</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[rgba(52,212,202,0.2)]">
                {platformEvidenceRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[rgba(52,212,202,0.05)] transition-colors">
                    <td className="py-4 px-5 font-bold text-white font-plus-jakarta whitespace-nowrap">
                      {row.platform}
                    </td>
                    <td className="py-4 px-5">
                      <span className={`inline-block px-3 py-1 rounded-md text-xs ${row.state.style}`}>
                        {row.state.label}
                      </span>
                    </td>
                    <td className="py-4 px-5 text-[#E2E8F0] font-poppins">
                      {row.role}
                    </td>
                    <td className="py-4 px-5 text-[#F87171] font-medium font-poppins">
                      {row.notProven}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

