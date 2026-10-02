"use client";

import Image from "next/image";
import { useState } from "react";

const faqs = [
  {
    q: "Is Technology & SaaS an industry or a solution?",
    a: "The sources use the label in both places. The Footer defines the industry page as technology companies as a customer sector, while the Solutions label is the broad enterprise technology and SaaS modernization entry point. The Header taxonomy says SaaS shouldn’t be treated as an industry category, so the final public label needs taxonomy approval.",
  },
  { q: "What does Zoiko Tech provide for technology companies?", a: "" },
  { q: "Does Zoiko provide a public cloud or developer platform today?", a: "" },
  { q: "Does Zoiko replace our entire SaaS stack?", a: "" },
  { q: "Can Zoiko AI run product or business operations autonomously?", a: "" },
  { q: "Which operating platforms are relevant?", a: "" },
  { q: "How do we start?", a: "" },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      className="w-full px-[130px] py-[96px]"
      style={{ backgroundImage: "linear-gradient(135deg, #000000 0%, #1c5c62 100%)" }}
    >
      <div className="mx-auto flex min-h-[582px] w-full max-w-[1180px] items-stretch gap-12">
        <div className="flex min-w-0 flex-1 flex-col gap-[22px]">
          <h2 className="font-sora text-[35.2px] font-bold leading-[40.48px] text-white">
            Buyer questions, answered directly
          </h2>
          <div className="border-t border-solid border-[rgba(127,208,217,0.3)]">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={f.q}
                  className={`max-w-[880px] border-b border-solid border-[rgba(127,208,217,0.3)] ${isOpen ? "pb-[18px]" : ""}`}
                >
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      id={`faq-btn-${i}`}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex min-h-[56px] w-full cursor-pointer items-center justify-between gap-4 py-[10.08px] text-left"
                    >
                      <span className="font-inter text-[16.8px] font-semibold leading-[26.88px] text-white">{f.q}</span>
                      <span aria-hidden="true" className="relative size-5 shrink-0">
                        <span className="absolute left-[3px] top-[9px] h-[2px] w-[14px] rounded-[1px] bg-[#43dde8]" />
                        {!isOpen && (
                          <span className="absolute left-[9px] top-[3px] h-[14px] w-[2px] rounded-[1px] bg-[#43dde8]" />
                        )}
                      </span>
                    </button>
                  </h3>
                  {isOpen && f.a && (
                    <div id={`faq-panel-${i}`} role="region" aria-labelledby={`faq-btn-${i}`}>
                      <p className="max-w-[706.56px] font-inter text-[16px] leading-[25.6px] text-[#dcecee]">{f.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div className="relative hidden w-[300px] shrink-0 self-stretch overflow-hidden rounded-[24px] lg:block xl:w-[452px]">
          <Image
            src="/technology-saas-industry/desktop-tech-leaders-collaboration.webp"
            alt="Technology leaders collaborating around a digital display"
            fill
            sizes="(min-width: 1280px) 452px, 300px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
