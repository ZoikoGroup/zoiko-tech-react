import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface IntentCard {
  title: string;
  quote: string;
  image: string;
  href: string;
  heightClass: string;
}

const column1Cards: IntentCard[] = [
  {
    title: "Approve a use case",
    quote: "“What AI or agent use is allowed for this purpose, data, users and authority?”",
    image: "/ai-safety-and-governance/intent-approve-use-case.png",
    href: "#use-case-registry",
    heightClass: "h-[220px] sm:h-[280px] lg:h-[320px]",
  },
  {
    title: "Define decision authority",
    quote: "“Can AI assist, recommend, act, approve, or only prepare work?”",
    image: "/ai-safety-and-governance/intent-system-inventory.png",
    href: "#authority-rights",
    heightClass: "h-[200px] sm:h-[220px] lg:h-[240px]",
  },
  {
    title: "Evaluate behavior",
    quote: "“How is this capability tested, accepted and re-evaluated?”",
    image: "/ai-safety-and-governance/intent-agent-authority.png",
    href: "#evaluation-validation",
    heightClass: "h-[210px] sm:h-[250px] lg:h-[280px]",
  },
];

const column2Cards: IntentCard[] = [
  {
    title: "Review human oversight",
    quote: "“Where is review, approval, override or escalation required?”",
    image: "/ai-safety-and-governance/intent-input-data-governance.png",
    href: "#human-oversight",
    heightClass: "h-[240px] sm:h-[300px] lg:h-[360px]",
  },
  {
    title: "Understand provider & model scope",
    quote: "“Which system, model or provider is in scope, and what can be disclosed?”",
    image: "/ai-safety-and-governance/intent-evaluation-limits.png",
    href: "#system-inventory",
    heightClass: "h-[200px] sm:h-[220px] lg:h-[240px]",
  },
];

const column3Cards: IntentCard[] = [
  {
    title: "Handle an AI incident",
    quote: "“How is unexpected harmful behavior contained, investigated and re-enabled?”",
    image: "/ai-safety-and-governance/intent-human-oversight.png",
    href: "#monitoring-incidents",
    heightClass: "h-[220px] sm:h-[260px] lg:h-[300px]",
  },
  {
    title: "Review data, privacy & security",
    quote: "“What data, access, retention, security or identity rules apply?”",
    image: "/ai-safety-and-governance/intent-change-release.png",
    href: "#neighbors-handoffs",
    heightClass: "h-[200px] sm:h-[230px] lg:h-[260px]",
  },
  {
    title: "Find technical evidence",
    quote: "“Where are approved research, evaluations and limitations?”",
    image: "/ai-safety-and-governance/intent-ai-incidents.png",
    href: "#authoritative-links",
    heightClass: "h-[220px] sm:h-[280px] lg:h-[320px]",
  },
];

function CardItem({ card }: { card: IntentCard }) {
  return (
    <Link
      href={card.href}
      className={`group relative w-full ${card.heightClass} rounded-[18px] overflow-hidden flex flex-col justify-end p-5 sm:p-6 transition-transform duration-300 hover:-translate-y-1`}
    >
      {/* Background Image */}
      <Image
        src={card.image}
        alt={card.title}
        fill
        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
      />

      {/* Dark Linear Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 19, 21, 0.15) 15%, rgba(0, 19, 21, 0.92) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-1.5">
        <h3 className="font-plus-jakarta font-bold text-base sm:text-lg lg:text-[19px] leading-snug text-white">
          {card.title}
        </h3>
        <p className="font-poppins text-xs sm:text-[13px] leading-relaxed text-[#E2E8F0] font-normal line-clamp-3 sm:line-clamp-none">
          {card.quote}
        </p>
        <div className="flex items-center gap-1.5 pt-0.5 sm:pt-1 text-[#4DDCAD] font-poppins text-xs font-semibold">
          <span>Choose pathway</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}

export default function IntentRouterSection() {
  return (
    <section id="intent-router" className="w-full bg-white text-[#0F172A] py-14 sm:py-16 md:py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20">
        {/* Section Header - Stacked Left-Aligned matching Figma */}
        <div className="flex flex-col gap-2.5 sm:gap-3 pb-7 sm:pb-8 max-w-3xl">
          <span className="font-poppins text-xs font-semibold tracking-[0.16em] text-[#247780] uppercase">
            AI GOVERNANCE INTENT ROUTER
          </span>
          <h2 className="font-plus-jakarta font-bold text-2xl sm:text-4xl lg:text-[44px] leading-[1.18] sm:leading-[1.15] text-[#0F172A]">
            What governance question are you<br className="hidden sm:inline" /> answering?
          </h2>
          <p className="font-poppins text-xs sm:text-sm md:text-[15px] text-[#64748B] max-w-[420px] leading-relaxed pt-0.5 sm:pt-1">
            Eight common questions from use-case approval to incidents. Each opens the section that answers it.
          </p>
        </div>

        {/* 3-Column Masonry Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {/* Column 1 */}
          <div className="flex flex-col gap-5 sm:gap-6">
            {column1Cards.map((card) => (
              <CardItem key={card.title} card={card} />
            ))}
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-5 sm:gap-6">
            {column2Cards.map((card) => (
              <CardItem key={card.title} card={card} />
            ))}
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-5 sm:gap-6 md:col-span-2 lg:col-span-1">
            {column3Cards.map((card) => (
              <CardItem key={card.title} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
