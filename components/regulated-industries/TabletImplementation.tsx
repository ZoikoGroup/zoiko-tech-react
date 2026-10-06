import TabletLines from "./TabletLines";

const steps = [
  { title: ["Define sector,", "activity, jurisdiction"], body: ["Canonical industry,", "legal or commercial", "entity, regulated activity", "and target outcome."], tag: ["Scope approved"] },
  { title: ["Identify authoritative", "requirements"], body: ["Map authoritative", "sources with authorized", "legal and compliance", "review."], tag: ["Requirement set approved"] },
  { title: ["Map identity,", "systems, controls"], body: ["Owners, systems of", "record, identities,", "delegated authority,", "controls and evidence", "sources."], tag: ["Control architecture", "approved"] },
  { title: ["Define claims and", "evidence boundaries"], body: ["Which claims need", "certification,", "compliance or", "alignment wording and", "approved evidence."], tag: ["Claims model approved"] },
  { title: ["Integrate / configure"], body: ["Connect APIs, events", "and workflows without", "losing source, authority,", "operator or jurisdiction", "metadata."], tag: ["Technical design approved"] },
  { title: ["Validate exceptions", "and failures"], body: ["Missing evidence,", "expired certification,", "unsupported market,", "access failure, control", "exception, AI-review", "states."], tag: ["Acceptance criteria met"] },
  { title: ["Pilot"], body: ["A bounded regulated", "workflow using", "controlled or synthetic", "data where possible."], tag: ["Pilot reviewed"] },
  { title: ["Operate, monitor, re-", "review"], body: ["Evidence freshness,", "control exceptions,", "product and regulatory", "change, approval", "expiry."], tag: ["Operational readiness", "maintained"] },
];

export default function TabletImplementation() {
  return (
    <section className="w-full overflow-hidden bg-white px-[5%] pb-[85.43px] pt-[60.44px]">
      <div className="mx-auto flex w-full max-w-[960px] flex-col gap-[24px]">
        <h2 className="font-sora text-[clamp(21px,3.33vw,25.6px)] font-bold leading-[29.44px] text-[#0a1416]">
          Implementation and control adoption
        </h2>
        <ol className="grid grid-cols-1 gap-[16px] sm:grid-cols-2 md:grid-cols-3">
          {steps.map((s, i) => (
            <li
              key={i}
              className="flex flex-col gap-[3px] rounded-[14px] border border-[#d5e3e5] bg-[#f3f9fa] p-[18px]"
            >
              <span className="size-[32px] shrink-0 rounded-[16px] bg-[#247780]" aria-hidden="true" />
              <h3 className="pt-[6.4px] font-sora text-[16px] font-bold leading-[25.6px] text-[#0a1416]">
                <TabletLines lines={s.title} />
              </h3>
              <p className="font-inter text-[16px] font-normal leading-[25.6px] text-[#4d6468]">
                <TabletLines lines={s.body} />
              </p>
              <small className="pt-[4.6px] font-inter text-[13.3px] font-semibold leading-[21.33px] text-[#247780]">
                <TabletLines lines={s.tag} />
              </small>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
