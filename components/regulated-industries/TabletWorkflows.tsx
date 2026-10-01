import TabletLines from "./TabletLines";

const items = [
  { title: "Obligation / requirement", lines: ["Source, jurisdiction or scope, effective", "period, owner and state where", "approved."] },
  { title: "Control", lines: ["Control type, responsible owner,", "implementation and evidence state, and", "exceptions."] },
  { title: "Evidence", lines: ["Source, period, freshness, scope,", "reviewer and linked control or claim."] },
  { title: "Exception", lines: ["Reason, impact where approved, owner,", "remediation or compensating control,", "review date."] },
  { title: "Approval / sign-off", lines: ["Authorized role, scope, conditions and", "time."] },
  { title: "Change event", lines: ["A source, rule, product or market", "change that triggers re-review."] },
];

export default function TabletWorkflows() {
  return (
    <section
      className="w-full overflow-hidden px-[5%] pb-[61px] pt-[60px]"
      style={{ backgroundImage: "linear-gradient(135deg, #000000 0%, #1c5c62 100%)" }}
    >
      <div className="mx-auto w-full max-w-[960px]">
        <h2 className="font-sora text-[clamp(22px,3.33vw,25.6px)] font-bold leading-[1.15] text-white">
          Regulatory and compliance workflows
        </h2>
        <p className="mt-[14.4px] pb-[0.59px] font-inter text-[16px] font-normal leading-[25.6px] text-[#dcecee]">
          Six objects, each with an owner, state and review path.
        </p>

        <ul className="mt-[14.4px] grid grid-cols-1 gap-[18px] pt-[7.6px] sm:grid-cols-2">
          {items.map((it) => (
            <li
              key={it.title}
              className="flex flex-col gap-[6px] overflow-hidden rounded-[14px] border border-[rgba(127,208,217,0.35)] bg-[rgba(255,255,255,0.06)] p-[20px]"
            >
              <h3 className="font-sora text-[16.8px] font-bold leading-[19.32px] text-white">{it.title}</h3>
              <p className="font-inter text-[15.2px] font-normal leading-[24.32px] text-[#dcecee]">
                <TabletLines lines={it.lines} />
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-[14.4px] flex flex-wrap items-start pb-[12px] pt-[5.6px]">
          <a
            href="/solution-zoiko-regulatory-compliance"
            className="flex min-h-[48px] w-full items-center justify-center rounded-[10px] border-2 border-white bg-white px-[24px] text-center font-inter text-[16px] font-semibold text-black sm:w-auto"
          >
            Explore Regulatory &amp; Compliance
          </a>
        </div>
      </div>
    </section>
  );
}
