import TabletLines from "./TabletLines";

const cards = [
  { title: "Evidence ID", lines: ["Stable internal identifier."] },
  { title: "Type", lines: ["Control evidence, certification or", "attestation, policy, audit or assessment,", "operational evidence, customer proof."] },
  { title: "Source / owner", lines: ["Authoritative source and accountable", "owner."] },
  { title: "Scope", lines: ["Entity, product, control, system, market", "or jurisdiction and period as relevant."] },
  { title: "State", lines: ["Draft, Under review, Approved,", "Published, Expired, Withdrawn,", "Superseded."] },
  { title: "Freshness", lines: ["Valid from, review by, and expiry where", "applicable."] },
  { title: "Allowed wording", lines: ["Exact public claim language if the", "evidence backs a marketing or trust", "claim."] },
  { title: "Linked claims / controls", lines: ["Only approved relationships."] },
];

const states = ["Draft", "Under review", "Approved", "Published", "Expired", "Withdrawn", "Superseded"];

export default function TabletEvidence() {
  return (
    <section
      className="w-full overflow-hidden px-[5%] pb-[79.43px] pt-[60.44px]"
      style={{ backgroundImage: "linear-gradient(135.01188277096722deg, rgb(0, 0, 0) 0%, rgb(28, 92, 98) 100%)" }}
    >
      <div className="mx-auto flex w-full max-w-[960px] flex-col gap-[14.4px]">
        <h2 className="font-sora text-[25.6px] font-bold leading-[29.44px] text-white">
          Evidence and audit lifecycle
        </h2>
        <p className="font-inter text-[16px] font-normal leading-[25.6px] text-[#dcecee]">
          Every evidence record carries the same eight fields.
        </p>
        <ul className="grid grid-cols-1 gap-[18px] pt-[7.6px] sm:grid-cols-2">
          {cards.map((c) => (
            <li
              key={c.title}
              className="flex flex-col gap-[6px] overflow-hidden rounded-[14px] border border-[rgba(127,208,217,0.35)] bg-[rgba(255,255,255,0.06)] p-5"
            >
              <h3 className="font-sora text-[16.8px] font-bold leading-[19.32px] text-white">{c.title}</h3>
              <p className="font-inter text-[15.2px] font-normal leading-[24.32px] text-[#dcecee]">
                <TabletLines lines={c.lines} />
              </p>
            </li>
          ))}
        </ul>
        <ul className="flex flex-wrap gap-2 pt-[3.6px]">
          {states.map((s) => (
            <li
              key={s}
              className="rounded-full border border-[#7fd0d9] px-[14px] pb-[4.75px] pt-[3px] font-inter text-[13.6px] font-semibold leading-[21.76px] text-[#7fd0d9]"
            >
              {s}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
