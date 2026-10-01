"use client";

import { useState } from "react";
import Image from "next/image";
import DesktopLines from "./DesktopLines";

const questions = [
  "What does Zoiko Tech provide for Financial Services?",
  "Which organizations is this page for?",
  "Does Zoiko Tech itself provide regulated financial services?",
  "Which platforms are relevant?",
  "Is Zoiko Remit available globally?",
  "Does Zoiko replace a bank core, ERP or payment stack?",
  "How should we start?",
];

export default function DesktopFaq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="questions" className="w-full bg-white px-10 pb-[94px] pt-[93px] xl:px-[120px]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-[35.99px]">
        <div className="max-w-[820px]">
          <h2 className="font-poppins text-[44px] font-bold leading-[50.6px] tracking-[-1.3px] text-[#102d2f]">
            <DesktopLines lines={["Clear answers before", "the next conversation."]} />
          </h2>
        </div>
        <div className="flex gap-12">
          <div className="min-w-0 max-w-[950px] flex-1">
            {questions.map((q, i) => (
              <div key={q} className="border-b border-[rgba(121,153,157,0.33)]">
                <button
                  type="button"
                  aria-expanded={open === i}
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex min-h-[48px] w-full items-center justify-between gap-6 pb-[23.69px] pt-[23.5px] text-left font-poppins text-[17px] font-bold leading-[27.2px] text-[#102d2f]"
                >
                  <span>{q}</span>
                  <span aria-hidden>{open === i ? "−" : "+"}</span>
                </button>
              </div>
            ))}
          </div>
          <div className="relative h-[533.33px] w-[45.33%] max-w-[544px] shrink-0 overflow-hidden rounded-[12px] shadow-[0px_12px_28px_-8px_rgba(0,0,0,0.2)]">
            <Image
              src="/financial-services/desktop-faq-conversation.webp"
              alt=""
              fill
              sizes="544px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
