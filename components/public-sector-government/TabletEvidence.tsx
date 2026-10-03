import TabletLines from "./TabletLines";

const cards = [
  { icon: "document", title: "Policy & controls", body: "Authoritative source, effective period, scope and accountable owner." },
  { icon: "user", title: "Decision & approval", body: "Actor, authority, source evidence, result and timestamp." },
  { icon: "shield-check", title: "Exception & override", body: "Reason, authority, expiry, review and supporting evidence." },
];

const steps = [
  ["Source captured", "Reference and effective context retained"],
  ["Work routed", "Receiving owner and handoff recorded"],
  ["Review requested", "Evidence and authority checked"],
  ["Decision pending", "Awaiting authoritative officer or system"],
];

export default function TabletEvidence() {
  return (
    <section id="evidence-t" className="w-full overflow-hidden bg-white pb-[72px] pt-[64px] font-poppins md:pb-[108px] md:pt-[93px] px-6 md:px-12 lg:px-20">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-[26px]">
        <div className="flex max-w-[820px] flex-col gap-[15.2px]">
          <p className="text-[12px] font-bold leading-[19.2px] tracking-[2px] text-[#247780]">11 / EVIDENCE, AUDIT &amp; REGULATORY CONTROLS</p>
          <h2 className="pb-[0.52px] text-[24px] font-bold leading-[28px] tracking-[-1.3px] text-[#102d2f] sm:text-[29px] sm:leading-[33.35px]">
            <TabletLines lines={["Leave a clear record", "of what happened and why."]} />
          </h2>
          <p className="max-w-[760px] pt-[4.8px] text-[16px] leading-[25.6px] text-[#587176]">
            Policy, ownership, review and evidence belong alongside the work they govern.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-5 pt-[10px] sm:grid-cols-2">
          {cards.map((c) => (
            <li key={c.title} className="flex">
              <a href="#" className="flex w-full flex-col rounded-[10px] border border-[#dae8e8] bg-[#f3f8f8] p-7">
                <span className="mb-[22px] flex size-[46px] items-center justify-center rounded-[10px] bg-[#deefef]">
                  <img src={`/public-sector-government/tablet-icon-${c.icon}.svg`} alt="" className="size-[25px]" />
                </span>
                <h3 className="pb-3 text-[20px] font-bold leading-[26px] text-[#102d2f]">{c.title}</h3>
                <p className="pb-[22px] text-[15px] leading-6 text-[#587176]">{c.body}</p>
                <span className="mt-auto flex min-h-[36px] items-center justify-between gap-3 py-2 text-[13px] leading-[20.8px] text-[#247780]">
                  <span className="max-w-[80px] font-bold">Explore pathway</span>
                  <span aria-hidden="true">↗</span>
                </span>
              </a>
            </li>
          ))}
        </ul>

        <ol className="grid grid-cols-1 gap-5 pt-[10px] sm:grid-cols-2">
          {steps.map(([t, d]) => (
            <li key={t} className="flex flex-col gap-[7px] border-t-2 border-[#247780] pt-[18px]">
              <strong className="text-[16px] font-bold leading-[25.6px] text-[#102d2f]">{t}</strong>
              <span className="pb-[0.8px] text-[13px] leading-[20.8px] text-[#536f74]">{d}</span>
            </li>
          ))}
        </ol>

        <p className="border-l-[3px] border-[#247780] bg-[#eaf5f5] px-[23px] py-[19px] text-[14px] leading-[22.4px] text-[#48666a]">
          Claim wording must match its evidence: Certified / Attested · Compliant only where legally verified · Aligned / Designed to · Roadmap / Target.
        </p>
      </div>
    </section>
  );
}
