"use client";

// FAQ: answer-first buyer questions + next-route panel
import { useState } from "react";
import Image from "next/image";
import DesktopLines from "./DesktopLines";

const faqs: { q: string; a?: string[] }[] = [
  {
    q: "What is Cybersecurity & Protection at Zoiko Tech?",
    a: [
      "A broad destination for security, protection, identity, privacy, evidence,",
      "resilience and trust pathways across the Zoiko technology estate.",
    ],
  },
  { q: "How is this different from Cybersecurity & Resilience?" },
  { q: "Which Zoiko platform supports cybersecurity?" },
  { q: "Does Zoiko provide a full SOC, SIEM, XDR or MDR stack?" },
  { q: "How does identity fit into protection?" },
  { q: "Where can I verify security claims?" },
  { q: "How do we start?" },
];

const routes = [
  { label: "Broad protection", title: "Cybersecurity & Resilience", href: "/cybersecurity-resilience" },
  { label: "Identity / authority concern", title: "Identity & Access", href: "/solution-zoiko-identity-access" },
  { label: "Regulatory / evidence concern", title: "Regulatory & Compliance", href: "/solution-zoiko-regulatory-compliance" },
  { label: "AI / agent risk", title: "AI Governance & Assurance", href: "/ai-governance-assurance" },
  {
    label: "Cloud / platform security",
    title: "Cloud & Developer Infrastructure",
    href: "/solution-zoiko-cloud-developer-infrastructure",
  },
];

export default function DesktopSection11() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="s11" className="hidden w-full bg-white px-[112px] py-[88px] lg:block">
      <div className="flex items-start justify-center gap-[56px]">
        <div className="flex min-w-0 flex-1 flex-col gap-[11.1px]">
          <p className="font-poppins text-[11px] font-semibold uppercase leading-[16px] tracking-[1.76px] text-[#247780]">
            Answer-first buyer questions
          </p>
          <h2 className="font-plus-jakarta max-w-[860px] text-[48px] font-bold leading-[56.16px] tracking-[-1.44px] text-[#0f172a]">
            <DesktopLines lines={["Cybersecurity &", "Protection at a glance"]} />
          </h2>
          <ul className="mt-[16.9px] border-b border-solid border-[#e2e8f0]">
            {faqs.map((f, i) => {
              const isOpen = open === i && !!f.a;
              return (
                <li key={f.q} className="border-t border-solid border-[#e2e8f0] pt-px">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex min-h-[76px] w-full items-center justify-between gap-[24px] pb-[25.5px] pt-[24.5px] text-left"
                  >
                    <span className="font-plus-jakarta text-[18px] font-semibold leading-[26px] text-[#0f172a]">
                      {f.q}
                    </span>
                    <span className="font-poppins text-[22px] font-semibold leading-[22px] text-[#247780]">+</span>
                  </button>
                  {isOpen && f.a && (
                    <p className="font-poppins max-w-[680px] pb-[16px] text-[15px] leading-[24px] text-[#334155]">
                      <DesktopLines lines={f.a} />
                    </p>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <aside className="flex min-w-0 flex-1 flex-col overflow-hidden rounded-[20px]">
          <div className="relative h-[220px] w-full shrink-0 overflow-hidden">
            <div className="absolute left-[4px] top-[-41.11px] h-[390px] w-[586px]">
              <Image
                src="/cybersecurity-protection/desktop-faq-fingerprint-photo.webp"
                alt="Woman using a fingerprint security interface"
                fill
                sizes="586px"
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[12px] bg-[#001315] p-[28px]">
            <p className="font-poppins text-[11px] font-semibold uppercase leading-[16px] tracking-[1.76px] text-white">
              Where to go next
            </p>
            <p className="font-poppins text-[14px] leading-[22px] text-[#e2e8f0]">
              <DesktopLines
                lines={[
                  "Routes follow your concern, never during an incident, vulnerability report or",
                  "access revocation.",
                ]}
              />
            </p>
            <ul className="flex flex-col pt-[4px]">
              {routes.map((r) => (
                <li
                  key={r.title}
                  className="flex flex-col border-t border-solid border-[rgba(255,255,255,0.18)] pb-[14px] pt-[15px]"
                >
                  <span className="font-poppins text-[12px] leading-[18px] text-[#cbd5e1]">{r.label}</span>
                  <a
                    href={r.href}
                    className="font-poppins flex min-h-[32px] items-center gap-[6px] pb-[5.5px] pt-[4.5px] text-[15px] font-semibold leading-[22px] text-[#4ddcad]"
                  >
                    {r.title}
                    <Image src="/cybersecurity-protection/desktop-arrow-green.svg" alt="" width={16} height={16} />
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
