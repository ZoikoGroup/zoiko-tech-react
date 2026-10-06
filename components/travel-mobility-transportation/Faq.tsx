"use client";

import { useState } from "react";
import { WRAP } from "./layout";

const ITEMS = [
  "What does Zoiko Tech provide for Travel, Mobility & Transportation?",
  "Which platforms are relevant?",
  "Does Zoiko Rides provide ride-hailing or dispatch today?",
  "What is Zoiko Arc?",
  "Does Zoiko provide transport safety technology?",
  "Does Zoiko handle visas, immigration or driver licensing?",
  "How do we start?",
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="questions" className="w-full bg-white py-14 md:py-20 lg:pb-[94px] lg:pt-[93px]">
      <div className={`${WRAP} flex flex-col gap-[35.99px]`}>
        <div className="max-w-[820px]">
          <h2 className="font-poppins text-[30px] font-bold leading-[1.15] tracking-[-1.3px] text-[#102d2f] md:text-[36px] lg:text-[44px] lg:leading-[50.6px]">
            Clear scope.
            <br />
            A focused next conversation.
          </h2>
        </div>
        <div className="flex w-full flex-col">
          {ITEMS.map((q, i) => {
            const isOpen = open === i;
            return (
              <div key={q} className="border-b border-solid border-[rgba(121,153,157,0.33)]">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex min-h-[48px] w-full items-center justify-between gap-6 pb-[23.69px] pt-[23.5px] text-left font-poppins text-[17px] font-bold leading-[27.2px] text-[#102d2f]"
                >
                  <span>{q}</span>
                  <span aria-hidden="true" className="shrink-0">{isOpen ? "−" : "+"}</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
