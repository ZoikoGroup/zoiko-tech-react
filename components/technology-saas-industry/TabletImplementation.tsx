const steps = [
  {
    title: ["Define operating", "model"],
    body: ["Company type,", "product, API, AI or", "infrastructure model,", "target users and", "business operations."],
    status: ["Scope approved"],
  },
  {
    title: ["Map authoritative", "systems"],
    body: ["Product, identity, billing", "and usage, customer,", "data, developer,", "workforce and", "communication", "systems."],
    status: ["Architecture map approved"],
  },
  {
    title: ["Define shared", "controls"],
    body: ["Identity, security,", "privacy, AI governance,", "data and evidence,", "accessibility."],
    status: ["Control design approved"],
  },
  {
    title: ["Select coexistence", "pattern"],
    body: ["Integrate, modernize in", "place, migrate or", "consolidate, only where", "justified by actual", "capability and system", "ownership."],
    status: ["Architecture decision", "approved"],
  },
  {
    title: ["Define events /", "handoffs"],
    body: ["Source, destination,", "schema, authority,", "retries and", "idempotency or", "duplication handling."],
    status: ["Integration contract", "approved"],
  },
  {
    title: ["Pilot"],
    body: ["A bounded product,", "workflow or team, with", "synthetic or controlled", "data where possible."],
    status: ["Pilot reviewed"],
  },
  {
    title: ["Operate / expand"],
    body: ["Observability, support,", "status, evidence and", "change governance", "before expanding."],
    status: ["Operational readiness", "approved"],
  },
];

function Lines({ lines }: { lines: string[] }) {
  return (
    <>
      {lines.map((line, i) => (
        <span key={line}>
          {i > 0 && " "}
          {i > 0 && <br className="hidden md:block" />}
          {line}
        </span>
      ))}
    </>
  );
}

export default function Implementation() {
  return (
    <section
      className="w-full overflow-hidden px-[5%] pb-[85px] pt-[60px]"
      style={{ backgroundImage: "linear-gradient(135.01deg, rgb(0, 0, 0) 0%, rgb(28, 92, 98) 100%)" }}
    >
      <div className="mx-auto flex w-full max-w-[960px] flex-col gap-[24px]">
        <h2 className="font-sora text-[clamp(22px,5vw,25.6px)] font-bold leading-[29.44px] text-white">
          Implementation and coexistence
        </h2>
        <ol className="grid grid-cols-1 gap-[16px] sm:grid-cols-3">
          {steps.map((s) => (
            <li
              key={s.title[0]}
              className="flex flex-col items-start gap-[3px] rounded-[14px] border border-[rgba(127,208,217,0.35)] bg-[rgba(255,255,255,0.06)] p-[18px]"
            >
              <span className="block size-[32px] shrink-0 rounded-[16px] bg-white" aria-hidden="true" />
              <b className="block pt-[6px] font-sora text-[16px] font-bold leading-[25.6px] text-[#dcecee]">
                <Lines lines={s.title} />
              </b>
              <p className="font-inter text-[16px] font-normal leading-[25.6px] text-[#dcecee]">
                <Lines lines={s.body} />
              </p>
              <small className="block pt-[4.6px] font-inter text-[13.3px] font-semibold leading-[21.33px] text-[#7fd0d9]">
                <Lines lines={s.status} />
              </small>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
