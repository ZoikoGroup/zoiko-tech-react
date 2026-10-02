"use client";

// FAQ accordion ("at a glance") + where to go next
import { useState } from "react";
import Image from "next/image";
import MobileLines from "./MobileLines";

const faqs: { q: string[]; a?: string[]; tight?: boolean }[] = [
  {
    q: ["What is Cybersecurity & Protection", "at Zoiko Tech?"],
    a: [
      "A broad destination for security, protection,",
      "identity, privacy, evidence, resilience and trust",
      "pathways across the Zoiko technology estate.",
    ],
  },
  { q: ["How is this different from", "Cybersecurity & Resilience?"] },
  { q: ["Which Zoiko platform supports", "cybersecurity?"] },
  { q: ["Does Zoiko provide a full SOC, SIEM,", "XDR or MDR stack?"] },
  { q: ["How does identity fit into", "protection?"] },
  { q: ["Where can I verify security claims?"], tight: true },
  { q: ["How do we start?"], tight: true },
];

const routes = [
  { concern: "Broad protection", label: "Cybersecurity & Resilience", href: "/cybersecurity-resilience" },
  { concern: "Identity / authority concern", label: "Identity & Access", href: "/solution-zoiko-identity-access" },
  { concern: "Regulatory / evidence concern", label: "Regulatory & Compliance", href: "/solution-zoiko-regulatory-compliance" },
  { concern: "AI / agent risk", label: "AI Governance & Assurance", href: "/ai-governance-assurance" },
  {
    concern: "Cloud / platform security",
    label: "Cloud & Developer Infrastructure",
    href: "/solution-zoiko-cloud-developer-infrastructure",
  },
];

export default function MobileSection11() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="s11-m" className="w-full bg-white px-[32px] py-[88px] font-poppins">
      <div className="mx-auto flex w-full max-w-[720px] flex-col gap-[56px]">
        <div className="flex w-full flex-col gap-[11px]">
          <p className="text-[11px] font-semibold uppercase leading-[16px] tracking-[1.76px] text-[#247780]">
            Answer-first buyer questions
          </p>
          <h2 className="max-w-[860px] font-plus-jakarta text-[30px] font-bold leading-[35.1px] tracking-[-0.9px] text-[#0f172a]">
            <MobileLines lines={["Cybersecurity &", "Protection at a glance"]} />
          </h2>
          <ul className="mt-[17px] w-full border-b border-[#e2e8f0]">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              const pad = f.tight ? "pb-[25.5px] pt-[24.5px]" : "py-[16px]";
              return (
                <li key={i} className="border-t border-[#e2e8f0] pt-px">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className={`flex min-h-[76px] w-full cursor-pointer items-center justify-between gap-[24px] text-left ${pad}`}
                  >
                    <span className="font-plus-jakarta text-[18px] font-semibold leading-[26px] text-[#0f172a]">
                      <MobileLines lines={f.q} />
                    </span>
                    <span
                      aria-hidden="true"
                      className={`shrink-0 text-[22px] font-semibold leading-[22px] text-[#247780] transition-transform ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  {f.a && isOpen && (
                    <p className="max-w-[680px] pb-[16px] text-[15px] leading-[24px] text-[#334155]">
                      <MobileLines lines={f.a} />
                    </p>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <aside className="flex w-full flex-col overflow-hidden rounded-[20px]">
          <div className="relative h-[220px] w-full">
            <Image
              src="/cybersecurity-protection/mobile-signposts.webp"
              alt="Row of directional signposts"
              fill
              sizes="(max-width: 720px) 100vw, 720px"
              className="object-cover"
            />
          </div>
          <div className="flex w-full flex-col gap-[12px] bg-[#001315] p-[28px]">
            <p className="text-[11px] font-semibold uppercase leading-[16px] tracking-[1.76px] text-white">
              Where to go next
            </p>
            <p className="text-[14px] leading-[22px] text-[#e2e8f0]">
              <MobileLines
                lines={[
                  "Routes follow your concern, never during",
                  "an incident, vulnerability report or access",
                  "revocation.",
                ]}
              />
            </p>
            <ul className="flex w-full flex-col pt-[4px]">
              {routes.map((r) => (
                <li key={r.label} className="flex flex-col border-t border-[rgba(255,255,255,0.18)] pb-[14px] pt-[15px]">
                  <span className="text-[12px] leading-[18px] text-[#cbd5e1]">{r.concern}</span>
                  <a
                    href={r.href}
                    className="flex min-h-[32px] w-fit items-center gap-[6px] pb-[5.5px] pt-[4.5px] text-[15px] font-semibold leading-[22px] text-[#4ddcad]"
                  >
                    {r.label}
                    <Image src="/cybersecurity-protection/mobile-icon-arrow-right-green.svg" alt="" width={16} height={16} className="shrink-0" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
