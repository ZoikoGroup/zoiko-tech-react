import Image from "next/image";
import type { ComponentType } from "react";
import { ArrowRight, Database, FileText, Sparkles } from "lucide-react";

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

type IconType = ComponentType<{ className?: string; strokeWidth?: number }>;

type PillTone = "current" | "stale" | "review" | "derived";

type SourceItem = {
  id: string;
  name: string;
  icon: IconType;
  status: string;
  tone: PillTone;
};

/* -------------------------------------------------------------------------- */
/*                                    Data                                    */
/* -------------------------------------------------------------------------- */

const SOURCES = [
  {
    id: "supplier-contract",
    name: "Supplier contract v4",
    icon: FileText,
    status: "Current",
    tone: "current",
  },
  {
    id: "erp-invoice",
    name: "ERP invoice record",
    icon: Database,
    status: "Current",
    tone: "current",
  },
  {
    id: "rate-card",
    name: "Rate card 2025",
    icon: FileText,
    status: "Stale",
    tone: "stale",
  },
] as const satisfies readonly SourceItem[];

const PILL_STYLES = {
  current: "bg-[#D3F0E8] text-[#0F5F58]",
  stale: "bg-[#FCE9C4] text-[#8A4B0A]",
  review: "bg-[#FCE9C4] text-[#7A3E08]",
  derived: "bg-[#EDE8FC] text-[#5B2FC9]",
} as const satisfies Record<PillTone, string>;

const DOT_STYLES = {
  current: "bg-[#0F7A70]",
  stale: "bg-[#D9761C]",
  review: "bg-[#C2410C]",
  derived: "bg-[#5B2FC9]",
} as const satisfies Record<PillTone, string>;

const CARD_SURFACE =
  "rounded-[18px] border border-[#1E7F77]/70 bg-[#04191C]/80 shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-[2px]";

const CARD_LABEL =
  "text-[9.5px] font-semibold uppercase leading-none tracking-[0.2em] text-[#4EDDB0]";

/* -------------------------------------------------------------------------- */
/*                                Sub-components                              */
/* -------------------------------------------------------------------------- */

function StatusPill({
  tone,
  label,
  withIcon = false,
}: {
  tone: PillTone;
  label: string;
  withIcon?: boolean;
}) {
  return (
    <span
      className={`inline-flex h-[22px] shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-[10px] text-xs font-semibold leading-none ${PILL_STYLES[tone]}`}
    >
      {withIcon ? (
        <Sparkles className="h-3.5 w-3.5" strokeWidth={2} />
      ) : (
        <span
          aria-hidden="true"
          className={`h-[5px] w-[5px] rounded-full ${DOT_STYLES[tone]}`}
        />
      )}
      {label}
    </span>
  );
}

function SourceSetCard() {
  return (
    <div className={`px-[18px] pb-[17px] pt-[19px] ${CARD_SURFACE}`}>
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
        <p className={CARD_LABEL}>Source set</p>
        <p className="text-[9px] font-medium uppercase leading-none tracking-[0.15em] text-white/80">
          Specimen · Synthetic data
        </p>
      </div>

      <ul className="m-0 mt-[11px] flex list-none flex-col gap-[7px] p-0">
        {SOURCES.map((source) => {
          const Icon = source.icon;
          return (
            <li key={source.id} className="flex items-center gap-2">
              <Icon
                className="h-4 w-4 shrink-0 text-[#4EDDB0]"
                strokeWidth={1.5}
              />
              <span className="flex-1 text-center text-[13px] font-medium leading-5 text-white">
                {source.name}
              </span>
              <StatusPill tone={source.tone} label={source.status} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function AiOutputCard() {
  return (
    <div className={`px-[18px] pb-[18px] pt-[17px] ${CARD_SURFACE}`}>
      <div className="flex items-center justify-between gap-3">
        <p className={CARD_LABEL}>AI output</p>
        <StatusPill tone="derived" label="Derived" withIcon />
      </div>
      <p className="mt-[14px] text-sm font-medium leading-5 text-white">
        Invoice exceeds contracted rate by 6%. Recommend supplier query.
      </p>
      <p className="mt-3 text-xs leading-4 text-[#9FB0B2]">
        Cites 2 sources · 1 source stale
      </p>
    </div>
  );
}

function AuthorityCard() {
  return (
    <div className={`px-[18px] pb-[17px] pt-[19px] ${CARD_SURFACE}`}>
      <p className={CARD_LABEL}>Authority</p>
      <div className="mt-[14px] flex flex-wrap items-center gap-3">
        <StatusPill tone="review" label="Review required" />
        <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-white">
          <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.75} />
          AP reviewer
        </span>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                    Page                                    */
/* -------------------------------------------------------------------------- */

export default function DomainAiHeroSection() {
  return (
    <section
      aria-labelledby="ai-architecture-heading"
      className="relative isolate min-h-[554px] overflow-hidden bg-[#04171A] font-['Plus_Jakarta_Sans',ui-sans-serif,system-ui,-apple-system,'Segoe_UI',sans-serif] antialiased"
    >
      <Image
        src="/ai/1.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover opacity-20"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-[#031316]/70 via-[#031316]/35 to-transparent"
      />

      <div className="relative mx-auto w-full max-w-6xl px-4 pb-[53px] pt-10 lg:min-h-[554px] lg:px-0 lg:pt-[38px]">
        <div className="max-w-[700px]">
          <h1
            id="ai-architecture-heading"
            className="text-[34px] font-bold leading-[1.4] tracking-[-0.04em] text-white sm:text-[55px] sm:leading-[1.55]"
          >
            Build domain-aware AI that keeps{" "}
            <span className="text-[#4EDDB0]">
              source, authority and evidence
            </span>{" "}
            visible
            <span className="ml-1">.</span>
          </h1>

          <p className="mt-6 max-w-[680px] text-base font-light leading-7 text-[#C9D5D6] sm:text-lg sm:leading-[28px]">
            Zoiko Tech approaches AI as an architecture for domain intelligence:
            connect approved sources and operating context to model and
            intelligence services, policy, human review, authoritative systems
            and evidence, without treating generated output as business truth or
            collapsing AI into uncontrolled automation.
          </p>

          <div className="mt-[34px] flex flex-wrap items-center gap-[11px]">
            <a
              href="#"
              className="inline-flex h-[49px] items-center gap-2.5 rounded-lg bg-[#217B82] px-[23px] text-[15px] font-semibold text-white transition-colors hover:bg-[#1C6A70] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              Explore the AI architecture
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </a>
            <a
              href="#"
              className="inline-flex h-[49px] items-center rounded-lg border border-white/90 bg-[#0B1B1E] px-[23px] text-[15px] font-semibold text-white transition-colors hover:bg-[#12292D] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              Discuss your AI architecture
            </a>
          </div>
        </div>

        {/* Specimen cards */}
        <div className="mt-10 flex flex-col gap-4 sm:max-w-[420px] lg:static lg:mt-0 lg:max-w-none">
          <div className="lg:absolute lg:left-[839px] lg:top-[50px] lg:w-[312px]">
            <SourceSetCard />
          </div>
          <div className="lg:absolute lg:left-[777px] lg:top-[206px] lg:w-[321px]">
            <AiOutputCard />
          </div>
          <div className="lg:absolute lg:left-[868px] lg:top-[347px] lg:w-[283px]">
            <AuthorityCard />
          </div>
        </div>
      </div>
    </section>
  );
}
