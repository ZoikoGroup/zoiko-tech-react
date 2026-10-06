/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

type Ring = {
  id: string;
  label: string;
  /** Tailwind width class (percentage of the diagram width). */
  size: string;
  /** Tailwind top-offset class for the ring label. */
  labelTop: string;
  /** Tailwind surface classes (background + border). */
  surface: string;
};

type LayerRow = {
  id: string;
  layer: string;
  treatment: string;
  rule: string;
};

/* -------------------------------------------------------------------------- */
/*                                    Data                                    */
/* -------------------------------------------------------------------------- */

/** Ordered from the outermost ring to the innermost ring. */
const RINGS = [
  {
    id: "trust-rails",
    label: "Trust rails",
    size: "w-full",
    labelTop: "top-[2.4%]",
    surface: "bg-[#05262A] border-[#14746E]/70",
  },
  {
    id: "evidence-rail",
    label: "Evidence rail",
    size: "w-[84.5%]",
    labelTop: "top-[2.9%]",
    surface: "bg-[#0A3B3E] border-[#17837B]/70",
  },
  {
    id: "response-recovery",
    label: "Response & recovery",
    size: "w-[69.2%]",
    labelTop: "top-[3.5%]",
    surface: "bg-[#0F4A4D] border-[#1B948B]/70",
  },
  {
    id: "incident-resilience",
    label: "Incident / resilience",
    size: "w-[53.9%]",
    labelTop: "top-[4.5%]",
    surface: "bg-[#155A5E] border-[#1F9F95]/70",
  },
  {
    id: "triage-ownership",
    label: "Triage & ownership",
    size: "w-[38.6%]",
    labelTop: "top-[6.3%]",
    surface: "bg-[#1B6A70] border-[#27AB9E]/70",
  },
  {
    id: "signals",
    label: "Signals",
    size: "w-[23.3%]",
    labelTop: "top-[10.4%]",
    surface:
      "bg-[radial-gradient(circle,rgba(79,224,181,0.38)_0%,rgba(31,113,120,1)_72%)] border-[#2FB8A0]/70",
  },
] as const satisfies readonly Ring[];

const LAYER_ROWS = [
  {
    id: "protected-scope",
    layer: "Protected scope",
    treatment: "System, service, workload, environment, dependency or business surface.",
    rule: "From current product or customer architecture; synthetic in public examples.",
  },
  {
    id: "security-relevant-signals",
    layer: "Security-relevant signals",
    treatment: "Generic event, signal or issue references.",
    rule: "Signal state belongs to the responsible monitoring source.",
  },
  {
    id: "triage-ownership",
    layer: "Triage & ownership",
    treatment: "Reviewer, accountable owner, queue and decision state.",
    rule: "Never implies 24x7 staffing or managed triage unless documented.",
  },
  {
    id: "incident-resilience",
    layer: "Incident / resilience",
    treatment: "Active, degraded, contained, recovering, resolved, unknown.",
    rule: "Marketing never self-declares resolution.",
  },
  {
    id: "response-recovery",
    layer: "Response / recovery",
    treatment: "Action, handoff, workaround, restoration, escalation.",
    rule: "Action authority and recovery ownership explicit.",
  },
  {
    id: "evidence-rail",
    layer: "Evidence rail",
    treatment: "Source, time, owner and references.",
    rule: "Never becomes a compliance or breach-prevention guarantee.",
  },
  {
    id: "trust-rails",
    layer: "Trust rails",
    treatment: "Security, Privacy, Disclosure, Status, Trust Center.",
    rule: "Linked, never duplicated or contradicted.",
  },
] as const satisfies readonly LayerRow[];

const RING_LABEL_CLASS =
  "absolute inset-x-0 text-center text-[clamp(5.5px,2.4vw,10px)] font-semibold uppercase leading-none tracking-[0.1em] text-[#46D8AA]";

/* -------------------------------------------------------------------------- */
/*                                Sub-components                              */
/* -------------------------------------------------------------------------- */

function RingDiagram() {
  return (
    <figure
      role="img"
      aria-label="Seven concentric layers, from Protected scope at the center out to Trust rails"
      className="relative m-0 mx-auto aspect-square w-full max-w-[521px]"
    >
      {RINGS.map((ring) => (
        <div
          key={ring.id}
          className={`absolute left-1/2 top-1/2 aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full border ${ring.size} ${ring.surface}`}
        >
          <span className={`${RING_LABEL_CLASS} ${ring.labelTop}`}>{ring.label}</span>
        </div>
      ))}

      <div className="absolute left-1/2 top-1/2 flex aspect-square w-[15.4%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#4FE0B5] shadow-[0_0_36px_rgba(79,224,181,0.45)]">
        <span className="text-center text-[clamp(5.5px,2.6vw,10.5px)] font-semibold uppercase leading-[1.25] text-[#00282B]">
          Protected
          <br />
          scope
        </span>
      </div>
    </figure>
  );
}

function LayerTable() {
  return (
    <div className="overflow-x-auto rounded-[26px] border border-[#12595A] bg-[#001315]">
      <table className="w-full min-w-[560px] table-fixed border-collapse text-left">
        <caption className="sr-only">
          Layer, treatment and authoritative-state rule for each protection layer
        </caption>
        <colgroup>
          <col className="w-[23%]" />
          <col className="w-[40%]" />
          <col className="w-[37%]" />
        </colgroup>
        <thead>
          <tr className="h-[45px] border-b border-[#0F4B4C]">
            <th
              scope="col"
              className="pl-[16.5px] text-[10px] font-medium uppercase tracking-[0.14em] text-[#AEBDBE]"
            >
              Layer
            </th>
            <th
              scope="col"
              className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#AEBDBE]"
            >
              Treatment
            </th>
            <th
              scope="col"
              className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#AEBDBE]"
            >
              Authoritative-state rule
            </th>
          </tr>
        </thead>
        <tbody>
          {LAYER_ROWS.map((row, index) => (
            <tr
              key={row.id}
              className={index === LAYER_ROWS.length - 1 ? "" : "border-b border-[#0F4547]"}
            >
              <th
                scope="row"
                className="py-[14.5px] pl-[16.5px] pr-6 align-top text-sm font-semibold leading-5 text-white"
              >
                {row.layer}
              </th>
              <td className="py-[14.5px] pr-5 align-top text-[13px] leading-5 text-[#C7D3D4]">
                {row.treatment}
              </td>
              <td className="py-[14.5px] pr-[16.5px] align-top text-[13px] leading-5 text-[#C7D3D4]">
                {row.rule}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                    Page                                    */
/* -------------------------------------------------------------------------- */

export default function ProtectionArchitecture() {
  return (
    <main className="bg-[#001315] font-['Plus_Jakarta_Sans',ui-sans-serif,system-ui,-apple-system,'Segoe_UI',sans-serif] text-white antialiased">
      <section
        aria-labelledby="architecture-heading"
        className="mx-auto w-full max-w-7xl px-4 pb-[89px] pt-16 lg:pt-[88px]"
      >
        <header className="flex flex-col items-center text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
            Protection &amp; Resilience Architecture
          </p>
          <h1
            id="architecture-heading"
            className="mt-3 max-w-[820px] text-[34px] font-bold leading-[1.25] tracking-[-0.04em] text-white sm:text-5xl"
          >
            Seven layers wrapped around what you protect
          </h1>
          <p className="mt-3 text-base text-[#D9E2E3] sm:text-lg">
            Each ring has its own source of truth. Read from the center out.
          </p>
        </header>

        <div className="mt-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-[521px_minmax(0,1fr)] lg:gap-x-[73px]">
          <RingDiagram />
          <LayerTable />
        </div>
      </section>
    </main>
  );
}
