import Image from "next/image";
import { ArrowRight } from "lucide-react";

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

type PillTone = "neutral" | "purple" | "teal";

type TabTone = "neutral" | "purple";

type Capability = {
  id: string;
  title: string;
  description: string;
};

type EvidenceFile = {
  id: string;
  title: string;
  pill: string;
  pillTone: PillTone;
  tabTone: TabTone;
  description: string;
  limit: string;
};

/* -------------------------------------------------------------------------- */
/*                                    Data                                    */
/* -------------------------------------------------------------------------- */

const CAPABILITIES = [
  {
    id: "source-ingestion",
    title: "Source ingestion",
    description: "Source IDs, version and freshness, only where documented.",
  },
  {
    id: "obligation-control-objects",
    title: "Obligation & control objects",
    description: "Stable IDs, scope, versions, effective dates, transitions.",
  },
  {
    id: "events",
    title: "Events",
    description:
      "Change, applicability, obligation, approval, action, reconciliation, evidence.",
  },
  {
    id: "idempotency-retries",
    title: "Idempotency & retries",
    description: "Duplicate risk and retry semantics for external actions.",
  },
  {
    id: "version-compatibility",
    title: "Version compatibility",
    description: "Never assume current equals historical.",
  },
  {
    id: "data-safety",
    title: "Data safety",
    description:
      "No secrets, submissions, personal or financial data, or legal notes in public examples.",
  },
] as const satisfies readonly Capability[];

const EVIDENCE_FILES = [
  {
    id: "zoiko-assure",
    title: "Zoiko Assure",
    pill: "Build · readiness-gated",
    pillTone: "neutral",
    tabTone: "neutral",
    description:
      "Regulatory intelligence, compliance and audit automation in approved contexts",
    limit: "Limit: No universal GRC, audit or compliance coverage",
  },
  {
    id: "zoikotax",
    title: "ZoikoTax",
    pill: "Build · readiness-gated",
    pillTone: "neutral",
    tabTone: "neutral",
    description:
      "Telecom-specific tax and regulatory obligations: Determine → Obligations → Compliance → Reconcile → Evidence",
    limit: "Limit: Telecom and fiscal evidence only; coverage from registry",
  },
  {
    id: "domain-ai",
    title: "Domain AI",
    pill: "Where approved",
    pillTone: "purple",
    tabTone: "purple",
    description: "Monitoring, classification, explanation assistance",
    limit: "Limit: Never legal authority or autonomous filer",
  },
  {
    id: "developer-platform",
    title: "Developer Platform",
    pill: "Build",
    pillTone: "neutral",
    tabTone: "neutral",
    description: "Developer destination when ready",
    limit: "Limit: API and sandbox claims only once documented",
  },
  {
    id: "trust-center-compliance",
    title: "Trust Center / Compliance",
    pill: "Authoritative proof",
    pillTone: "teal",
    tabTone: "neutral",
    description: "Corporate proof, policy and certification scope",
    limit: "Limit: Not proof that customers are compliant",
  },
] as const satisfies readonly EvidenceFile[];

const PILL_STYLES = {
  neutral: "bg-[#E3E7EF] text-[#2A3647]",
  purple: "bg-[#EDE8FC] text-[#5B2FC9]",
  teal: "bg-[#DDF2EC] text-[#0F6B63]",
} as const satisfies Record<PillTone, string>;

const TAB_STYLES = {
  neutral: "bg-[#E4E7EF]",
  purple: "bg-[#ECE8FB]",
} as const satisfies Record<TabTone, string>;

/* -------------------------------------------------------------------------- */
/*                                Sub-components                              */
/* -------------------------------------------------------------------------- */

function SectionBadge({
  label,
  className,
}: {
  label: string;
  className: string;
}) {
  return (
    <span
      className={`flex h-10 w-10 items-center justify-center rounded-xl border text-[15px] font-bold leading-none ${className}`}
    >
      {label}
    </span>
  );
}

function CapabilityItem({ item }: { item: Capability }) {
  return (
    <li className="border-t border-white/15 pb-[13px] pt-[14px]">
      <h3 className="text-[15px] font-semibold leading-5 text-white">
        {item.title}
      </h3>
      <p className="text-[12.5px] leading-[19px] text-[#C5D2D3]">
        {item.description}
      </p>
    </li>
  );
}

function EvidenceCard({ file }: { file: EvidenceFile }) {
  return (
    <article className="flex h-full flex-col">
      <span
        className={`relative z-10 -mb-[7px] inline-flex h-6 w-fit items-center rounded-t-xl px-[13px] text-[10px] font-semibold uppercase leading-none tracking-[0.06em] text-[#1B2A3B] ${TAB_STYLES[file.tabTone]}`}
      >
        Evidence file
      </span>

      <div className="flex flex-1 flex-col rounded-[20px] rounded-tl-none border border-[#DDE8E3] bg-[#FDFCF8] px-5 pb-[31px] pt-[17px]">
        <h3 className="text-[17px] font-bold leading-[22px] tracking-[-0.01em] text-[#0F4C6E]">
          {file.title}
        </h3>

        <span
          className={`mt-[10px] inline-flex h-[21px] w-fit items-center gap-1.5 rounded-full px-[10px] text-[11px] font-semibold leading-none ${PILL_STYLES[file.pillTone]}`}
        >
          <span
            aria-hidden="true"
            className="h-[5px] w-[5px] rounded-full bg-current"
          />
          {file.pill}
        </span>

        <p className="mt-[9px] text-[13px] leading-[19px] text-[#4B5A66]">
          {file.description}
        </p>
        <p className="mt-1.5 text-xs font-medium leading-[17px] text-[#A31515]">
          {file.limit}
        </p>

        <div className="mt-auto pt-[14px]">
          <div className="border-t border-dashed border-[#C9D3D8] pt-[19px]">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-[13px] font-semibold leading-[18px] text-[#217B82] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#217B82]"
            >
              Explore
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

/* -------------------------------------------------------------------------- */
/*                                    Page                                    */
/* -------------------------------------------------------------------------- */

export default function DeveloperAndPlatformEvidenceLayersSection() {
  return (
    <main className="min-h-screen bg-[#E6F8F8] font-['Plus_Jakarta_Sans',ui-sans-serif,system-ui,-apple-system,'Segoe_UI',sans-serif] antialiased">
      <div className="mx-auto w-full max-w-7xl px-4 pb-[83px] pt-10 lg:px-0 lg:pt-[83px]">
        {/* Developer & integration layer */}
        <section
          aria-labelledby="developer-layer-heading"
          className="grid overflow-hidden rounded-[35px] bg-[#001416] lg:grid-cols-[541fr_608fr]"
        >
          <div className="relative min-h-[320px] lg:min-h-[585px]">
            <Image
              src="/reg/32.png"
              alt=""
              fill
              priority
              sizes="(min-width: 1024px) 47vw, 100vw"
              className="object-cover"
            />
            <SectionBadge
              label="§18"
              className="absolute left-[23px] top-[19px] border-[#2FBF9F]/80 bg-black/20 text-[#3DDCA8] backdrop-blur-[2px]"
            />
          </div>

          <div className="flex flex-col px-6 pb-[35px] pt-9 sm:px-[34px]">
            <p className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-white">
              Developer &amp; Integration Layer
            </p>
            <h2
              id="developer-layer-heading"
              className="mt-[15px] max-w-[440px] text-[26px] font-bold leading-8 tracking-[-0.03em] text-white"
            >
              Connect changes, obligations and evidence
            </h2>
            <p className="mt-[14px] max-w-[500px] text-[15px] leading-[21px] text-[#D0DADB]">
              Approved APIs, events and authentication only when published. Test
              data never implies production regulatory coverage.
            </p>

            <ul className="m-0 mt-[29px] grid list-none grid-cols-1 gap-x-[23px] p-0 sm:grid-cols-2">
              {CAPABILITIES.map((item) => (
                <CapabilityItem key={item.id} item={item} />
              ))}
            </ul>

            <a
              href="#"
              className="mt-[39px] inline-flex h-[41px] w-fit items-center gap-3 rounded-lg bg-[#217B82] px-[19px] text-sm font-semibold text-white transition-colors hover:bg-[#1C6A70] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              Explore Developer Platform
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </a>
          </div>
        </section>

        {/* Platform evidence layer */}
        <section aria-labelledby="evidence-layer-heading" className="mt-[53px]">
          <SectionBadge
            label="§19"
            className="border-[#217B82] text-[#217B82]"
          />
          <p className="mt-4 text-[10.5px] font-semibold uppercase tracking-[0.2em] text-[#217B82]">
            Platform Evidence Layer
          </p>

          <div className="mt-[14px] flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
            <h2
              id="evidence-layer-heading"
              className="text-[32px] font-bold leading-[1.15] tracking-[-0.04em] text-[#0E1A2B] sm:text-[38px]"
            >
              Evidence files, each with its limits
            </h2>
            <p className="max-w-[415px] text-[15px] leading-[23px] text-[#5F7288]">
              If current registry data cannot be resolved, the card shows
              evidence-pending, never roadmap labels, placeholder logos or
              coverage numbers.
            </p>
          </div>

          <ul className="m-0 mt-[29px] grid list-none grid-cols-1 gap-[14px] p-0 sm:grid-cols-2 lg:grid-cols-5">
            {EVIDENCE_FILES.map((file) => (
              <li key={file.id}>
                <EvidenceCard file={file} />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
