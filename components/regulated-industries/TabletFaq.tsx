"use client";

import { useState } from "react";
import TabletLines from "./TabletLines";

const faqs: { q: string; a?: string[] }[] = [
  {
    q: "What does “Regulated Industries” mean on Zoiko Tech?",
    a: [
      "The footer uses this label as a discovery route for organizations operating under material",
      "regulatory, security, privacy, identity or governance constraints. The supplied sources",
      "don’t define it as a separate canonical economic-sector taxonomy.",
    ],
  },
  { q: "Which industries are included?" },
  { q: "Does Zoiko guarantee compliance?" },
  { q: "Which Zoiko routes are most relevant?" },
  { q: "Can Zoiko determine which laws apply to us?" },
  { q: "How are certifications handled?" },
  { q: "How do we start?" },
];

export default function TabletFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      className="w-full overflow-hidden px-[5%] pb-[61.44px] pt-[60.44px]"
      style={{ backgroundImage: "linear-gradient(135.018deg, rgb(0, 0, 0) 0%, rgb(28, 92, 98) 100%)" }}
    >
      <div className="mx-auto flex w-full max-w-[960px] flex-col gap-[20px]">
        <h2 className="font-sora text-[clamp(21px,3.33vw,25.6px)] font-bold leading-[29.44px] text-white">
          Buyer questions, answered directly
        </h2>
        <div className="border-t border-[rgba(127,208,217,0.3)]">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={"w-full border-b border-[rgba(127,208,217,0.3)] " + (isOpen && f.a ? "pb-[18px]" : "")}
              >
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex min-h-[56px] w-full cursor-pointer items-center justify-between gap-4 py-[10.08px] text-left font-inter text-[16.8px] font-semibold leading-[26.88px] text-white"
                  >
                    <span>{f.q}</span>
                    <span className="shrink-0 text-[22.4px] leading-[35.84px] text-[#7fd0d9]" aria-hidden="true">
                      {isOpen ? "–" : "+"}
                    </span>
                  </button>
                </h3>
                {isOpen && f.a && (
                  <p className="font-inter text-[16px] font-normal leading-[25.6px] text-[#dcecee]">
                    <TabletLines lines={f.a} />
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
