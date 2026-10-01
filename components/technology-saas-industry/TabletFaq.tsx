"use client";

import { useState } from "react";

const faqs: { q: string; a?: string[] }[] = [
  {
    q: "Is Technology & SaaS an industry or a solution?",
    a: [
      "The sources use the label in both places. The Footer defines the industry page as",
      "technology companies as a customer sector, while the Solutions label is the broad",
      "enterprise technology and SaaS modernization entry point. The Header taxonomy says",
      "SaaS shouldn’t be treated as an industry category, so the final public label needs taxonomy",
      "approval.",
    ],
  },
  { q: "What does Zoiko Tech provide for technology companies?" },
  { q: "Does Zoiko provide a public cloud or developer platform today?" },
  { q: "Does Zoiko replace our entire SaaS stack?" },
  { q: "Can Zoiko AI run product or business operations autonomously?" },
  { q: "Which operating platforms are relevant?" },
  { q: "How do we start?" },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      className="w-full overflow-hidden px-[5%] pb-[61px] pt-[60px]"
      style={{ backgroundImage: "linear-gradient(135.02deg, rgb(0, 0, 0) 0%, rgb(28, 92, 98) 100%)" }}
    >
      <div className="mx-auto flex w-full max-w-[960px] flex-col gap-[20px]">
        <h2 className="font-sora text-[clamp(22px,5vw,25.6px)] font-bold leading-[29.44px] text-white">
          Buyer questions, answered directly
        </h2>
        <div className="border-t border-[rgba(127,208,217,0.3)]">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="w-full max-w-[880px] border-b border-[rgba(127,208,217,0.3)]">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex min-h-[56px] w-full cursor-pointer items-center justify-between gap-4 py-[10px] text-left font-inter text-[16.8px] font-semibold leading-[26.88px] text-white"
                  >
                    <span>{f.q}</span>
                    <span aria-hidden="true" className="shrink-0 text-[22.4px] leading-[35.84px] text-[#7fd0d9]">
                      {isOpen ? "–" : "+"}
                    </span>
                  </button>
                </h3>
                {isOpen && f.a && (
                  <p className="pb-[18px] font-inter text-[16px] font-normal leading-[25.6px] text-[#dcecee]">
                    {f.a.map((line, k) => (
                      <span key={line}>
                        {k > 0 && " "}
                        {k > 0 && <br className="hidden md:block" />}
                        {line}
                      </span>
                    ))}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
