import type { ComponentType } from "react";
import {
  ArrowRight,
  ChevronRight,
  CircleDot,
  Clock,
  FileText,
  Play,
  RefreshCw,
  Settings,
  Shield,
  User,
  UserPlus,
  XCircle,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

type IconType = ComponentType<{ className?: string; strokeWidth?: number }>;

type IconTone = "green" | "blue" | "purple" | "orange" | "pink" | "lime" | "indigo" | "red";

type StatusTone = "active" | "pending" | "blocked" | "review";

type LifecycleStep = {
  id: string;
  title: string;
  description: string;
  icon: IconType;
  tone: IconTone;
  items: readonly string[];
};

type ExampleItem = {
  title: string;
  subtitle: string;
  status: string;
  tone: StatusTone;
  owner: string;
  effective: string;
};

/* -------------------------------------------------------------------------- */
/*                                    Data                                    */
/* -------------------------------------------------------------------------- */

const ICON_TONES = {
  green: "bg-[#0F3F3B] text-[#2FD6A3] ring-[#2FD6A3]/25",
  blue: "bg-[#15295A] text-[#6D8DFF] ring-[#6D8DFF]/25",
  purple: "bg-[#27204F] text-[#8E7CFF] ring-[#8E7CFF]/40",
  orange: "bg-[#3B2410] text-[#FF9B2F] ring-[#FF9B2F]/30",
  pink: "bg-[#4A1230] text-[#FF3F82] ring-[#FF3F82]/30",
  lime: "bg-[#12391F] text-[#3FDC80] ring-[#3FDC80]/30",
  indigo: "bg-[#18234F] text-[#6A7BFF] ring-[#6A7BFF]/30",
  red: "bg-[#4A1E15] text-[#FF6A3D] ring-[#FF6A3D]/30",
} as const satisfies Record<IconTone, string>;

const STATUS_TONES = {
  active: "bg-[#0E4A40] text-[#2FD6A3] border-[#2FD6A3]/30",
  pending: "bg-[#173760] text-[#6FA8FF] border-[#6FA8FF]/30",
  blocked: "bg-[#4A2210] text-[#FF8A3D] border-[#FF8A3D]/30",
  review: "bg-[#3D3010] text-[#F5B82E] border-[#F5B82E]/30",
} as const satisfies Record<StatusTone, string>;

const STEPS = [
  {
    id: "01",
    title: "Prospect / pre-service",
    description: "Identify and qualify potential subscribers.",
    icon: UserPlus,
    tone: "green",
    items: ["Qualification", "Order intent"],
  },
  {
    id: "02",
    title: "Order / request",
    description: "Create, modify or cancel a request.",
    icon: FileText,
    tone: "blue",
    items: ["New, change, suspend / resume, cancel"],
  },
  {
    id: "03",
    title: "Validation",
    description: "Check eligibility, data, configuration and policies.",
    icon: Shield,
    tone: "purple",
    items: ["Valid", "Warning", "Exception", "Blocked"],
  },
  {
    id: "04",
    title: "Activation / fulfillment",
    description: "Move from pending to active.",
    icon: Play,
    tone: "orange",
    items: ["Milestones", "Owner", "Affected service", "Exception path"],
  },
  {
    id: "05",
    title: "Operate",
    description: "Active with entitlement and commercial context.",
    icon: Settings,
    tone: "pink",
    items: ["Service health", "Subscriber context", "Open cases"],
  },
  {
    id: "06",
    title: "Change",
    description: "Make updates to the service.",
    icon: RefreshCw,
    tone: "lime",
    items: ["Upgrade", "Downgrade", "Add, remove, move"],
  },
  {
    id: "07",
    title: "Suspend / resume",
    description: "Temporary change service state.",
    icon: CircleDot,
    tone: "indigo",
    items: ["Reason", "Authorization", "Downstream effects"],
  },
  {
    id: "08",
    title: "Terminate / close",
    description: "Close the service and complete remaining tasks.",
    icon: XCircle,
    tone: "red",
    items: ["Billing", "Number", "Partner", "Data closure checklist", "Evidence"],
  },
] as const satisfies readonly LifecycleStep[];

const EXAMPLES = [
  {
    title: "Specimen account A",
    subtitle: "Service · Entitlement",
    status: "Active",
    tone: "active",
    owner: "Subscriber Ops",
    effective: "Specimen date",
  },
  {
    title: "Request R-1",
    subtitle: "New service",
    status: "Pending",
    tone: "pending",
    owner: "Subscriber Ops",
    effective: "Target date",
  },
  {
    title: "Request R-2",
    subtitle: "Plan change",
    status: "Blocked",
    tone: "blocked",
    owner: "Service Ops",
    effective: "—",
  },
  {
    title: "Case C-7",
    subtitle: "Entitlement mismatch",
    status: "In review",
    tone: "review",
    owner: "Subscriber Ops",
    effective: "—",
  },
] as const satisfies readonly ExampleItem[];

const STEPS_PER_ROW = 4;

const ROWS = [STEPS.slice(0, STEPS_PER_ROW), STEPS.slice(STEPS_PER_ROW)] as const;

/* -------------------------------------------------------------------------- */
/*                                Sub-components                              */
/* -------------------------------------------------------------------------- */

const CARD_SURFACE = "rounded-xl border border-[#2E6569]/70 bg-[#1B4A4E]/75 shadow-[0_8px_24px_rgba(0,0,0,0.25)]";

function StepCard({ step, showArrow }: { step: LifecycleStep; showArrow: boolean }) {
  const Icon = step.icon;
  return (
    <article className={`relative flex flex-col p-5 ${CARD_SURFACE}`}>
      <div className="flex items-center gap-3">
        <span className="text-xs font-medium text-[#A7BEBF]">{step.id}</span>
        <span
          className={`flex h-9 w-9 items-center justify-center rounded-full ring-1 ${ICON_TONES[step.tone]}`}
        >
          <Icon className="h-[17px] w-[17px]" strokeWidth={1.75} />
        </span>
      </div>

      <h3 className="mt-4 text-base font-semibold leading-tight text-white">{step.title}</h3>
      <p className="mt-1.5 text-xs leading-[1.45] text-[#A9C0C1]">{step.description}</p>

      <ul className="mt-3 list-disc space-y-0.5 rounded-lg border border-[#2A5C60]/60 bg-[#12373B]/90 py-2.5 pl-7 pr-3 text-xs leading-[1.4] text-[#DDE9EA] marker:text-[#DDE9EA]">
        {step.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      {showArrow && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-[54px] top-1/2 hidden w-[54px] -translate-y-1/2 items-center justify-center text-[#22C39B] lg:flex"
        >
          <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
        </span>
      )}
    </article>
  );
}

function RowConnector() {
  return (
    <div aria-hidden="true" className="relative hidden h-[34px] lg:block">
      <div className="absolute left-[calc((100%-162px)/8)] right-[40px] top-1/2 border-t border-dashed border-[#22C39B]/60" />
      <span className="absolute right-[14px] top-1/2 flex h-[26px] w-[26px] -translate-y-1/2 items-center justify-center rounded-full border border-[#22C39B] bg-[#0B2F33] text-[#22C39B]">
        <ChevronRight className="h-3.5 w-3.5" strokeWidth={2} />
      </span>
    </div>
  );
}

function ExampleCard({ item }: { item: ExampleItem }) {
  return (
    <article className={`p-4 ${CARD_SURFACE}`}>
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="truncate text-sm font-semibold leading-tight text-white">{item.title}</h3>
          <p className="mt-1 text-xs leading-tight text-[#A9C0C1]">{item.subtitle}</p>
        </div>
        <span
          className={`shrink-0 rounded border px-2 py-0.5 text-[11px] font-semibold leading-tight ${STATUS_TONES[item.tone]}`}
        >
          {item.status}
        </span>
      </div>

      <dl className="mt-3 space-y-1.5 text-xs leading-tight">
        <div className="flex items-center">
          <dt className="flex w-[84px] shrink-0 items-center gap-1.5 text-[#A9C0C1]">
            <User className="h-3.5 w-3.5 text-[#2FD6A3]" strokeWidth={1.75} />
            Owner
          </dt>
          <dd className="text-[#DDE9EA]">{item.owner}</dd>
        </div>
        <div className="flex items-center">
          <dt className="flex w-[84px] shrink-0 items-center gap-1.5 text-[#A9C0C1]">
            <Clock className="h-3.5 w-3.5 text-[#2FD6A3]" strokeWidth={1.75} />
            Effective
          </dt>
          <dd className="text-[#DDE9EA]">{item.effective}</dd>
        </div>
      </dl>
    </article>
  );
}

/* -------------------------------------------------------------------------- */
/*                                    Page                                    */
/* -------------------------------------------------------------------------- */

export default function SubscriberLifecycle() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-[#000000] to-[#1C5C62] font-['Inter',ui-sans-serif,system-ui,-apple-system,'Segoe_UI',sans-serif] antialiased">
      <div className="mx-auto w-full max-w-6xl px-4 pb-[52px] pt-10 sm:px-6 lg:px-0 lg:pt-[52px]">
        {/* Heading */}
        <header>
          <h1 className="text-3xl font-bold tracking-[-0.01em] text-white sm:text-4xl">
            Subscriber and service lifecycle
          </h1>
          <p className="mt-[38px] max-w-[690px] text-base leading-[1.65] text-[#B7C8C9]">
            Subscriber operations are source-supported. This is a recommended state model, not exact
            product screens.
          </p>
        </header>

        {/* Lifecycle */}
        <section aria-label="Lifecycle steps" className="mt-[34px] flex flex-col gap-5 lg:gap-0">
          {ROWS.map((row, rowIndex) => (
            <div key={rowIndex} className="contents lg:block">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-[54px]">
                {row.map((step, index) => (
                  <StepCard key={step.id} step={step} showArrow={index < STEPS_PER_ROW - 1} />
                ))}
              </div>
              {rowIndex === 0 && <RowConnector />}
            </div>
          ))}
        </section>

        {/* Examples */}
        <section aria-labelledby="examples-heading" className="mt-14">
          <h2 id="examples-heading" className="text-xl font-bold tracking-[-0.01em] text-white">
            Example subscriber / service items
          </h2>
          <p className="mt-2 text-sm text-[#7FE0C4]">
            A snapshot of how different services can be in different lifecycle states.
          </p>

          <div className="mt-[26px] grid grid-cols-1 gap-x-[26px] gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
            {EXAMPLES.map((item) => (
              <ExampleCard key={item.title} item={item} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
