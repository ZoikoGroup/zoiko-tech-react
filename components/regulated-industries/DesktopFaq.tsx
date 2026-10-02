"use client";

import { useState } from "react";
import Image from "next/image";
import DesktopLines from "./DesktopLines";

const faqs = [
  {
    q: "What does “Regulated Industries” mean on Zoiko Tech?",
    a: [
      "The footer uses this label as a discovery route for organizations operating under material",
      "regulatory, security, privacy, identity or governance constraints. The supplied sources don’t",
      "define it as a separate canonical economic-sector taxonomy.",
    ],
  },
  { q: "Which industries are included?", a: [] as string[] },
  { q: "Does Zoiko guarantee compliance?", a: [] as string[] },
  { q: "Which Zoiko routes are most relevant?", a: [] as string[] },
  { q: "Can Zoiko determine which laws apply to us?", a: [] as string[] },
  { q: "How are certifications handled?", a: [] as string[] },
  { q: "How do we start?", a: [] as string[] },
];

export default function DesktopFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      className="w-full px-[130px] py-[96px]"
      style={{ backgroundImage: "linear-gradient(134.9755110548888deg, rgb(0, 0, 0) 0%, rgb(28, 92, 98) 100%)" }}
    >
      <div className="mx-auto flex h-[557px] w-full max-w-[1180px] gap-[48px]">
        <div className="flex h-[557px] min-w-0 flex-1 flex-col overflow-hidden">
          <h2 className="whitespace-nowrap font-sora text-[35.2px] font-bold leading-[40.48px] text-white">
            Buyer questions, answered directly
          </h2>
          <div className="flex w-full flex-col border-t border-[rgba(127,208,217,0.3)]">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q} className="w-full max-w-[880px] border-b border-[rgba(127,208,217,0.3)]">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex min-h-[56px] w-full items-center justify-between gap-4 py-[10.08px] text-left"
                  >
                    <span className="font-inter text-[16.8px] font-semibold leading-[26.88px] text-white">{f.q}</span>
                    <span className="relative size-[20px] shrink-0" aria-hidden="true">
                      <span className="absolute left-[3px] top-[9px] h-[2px] w-[14px] rounded-[1px] bg-[#43dde8]" />
                      {!isOpen && (
                        <span className="absolute left-[9px] top-[3px] h-[14px] w-[2px] rounded-[1px] bg-[#43dde8]" />
                      )}
                    </span>
                  </button>
                  {isOpen && f.a.length > 0 && (
                    <p className="pb-[18px] font-inter text-[16px] leading-[25.6px] text-[#dcecee]">
                      <DesktopLines lines={f.a} />
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div className="relative h-[557px] w-[404px] shrink-0 overflow-hidden rounded-[18px]">
          <Image
            src="/regulated-industries/desktop-faq-advisory.webp"
            alt=""
            fill
            sizes="404px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
