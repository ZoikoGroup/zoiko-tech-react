import TabletLines from "./TabletLines";

const cards = [
  { icon: "database", title: "Source & provenance", body: "Owning agency or system, effective time and any transformation." },
  { icon: "globe", title: "Jurisdiction & purpose", body: "Reviewed service scope, necessary information and approved retention." },
];

const rows = [
  ["Official source", "Sample policy record"],
  ["Applicability", "Agency / program scope requires confirmation"],
  ["Effective period", "Not established in specimen"],
  ["Reviewer", "Assigned policy owner"],
  ["Derived information", "Clearly separated from the authoritative source"],
  ["Support state", "Requires review"],
];

export default function TabletData() {
  return (
    <section id="data-t" className="w-full overflow-hidden bg-white pb-[72px] pt-[64px] font-poppins md:pb-[108px] md:pt-[93px] px-6 md:px-12 lg:px-20">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-[26px]">
        <div className="flex max-w-[820px] flex-col gap-[15.2px]">
          <p className="text-[12px] font-bold leading-[19.2px] tracking-[2px] text-[#247780]">09 / DATA, PROVENANCE &amp; JURISDICTION</p>
          <h2 className="pb-[0.52px] text-[24px] font-bold leading-[28px] tracking-[-1.3px] text-[#102d2f] sm:text-[29px] sm:leading-[33.35px]">
            <TabletLines lines={["Use trusted sources.", "Preserve their context."]} />
          </h2>
          <p className="max-w-[760px] pt-[4.79px] text-[16px] leading-[25.6px] text-[#587176]">
            Data use should be understandable, necessary for its purpose and linked to the owning source.
          </p>
        </div>

        <div className="flex flex-col gap-5 pt-[10px]">
          <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2">
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

          <div className="rounded-[12px] border border-[#d3e5e6] bg-white p-[26px] drop-shadow-[0px_18px_25px_rgba(0,30,37,0.06)]">
            <div className="flex items-start justify-between gap-3 border-b border-[rgba(120,152,156,0.27)] pb-[18px]">
              <h3 className="text-[18px] font-bold leading-[23.4px] text-[#102d2f]">Jurisdiction / policy detail</h3>
              <span className="shrink-0 rounded-[20px] border border-[#719ea4] px-[9px] py-[3px] text-[10px] leading-4 tracking-[0.3px] text-[#247780]">Synthetic specimen</span>
            </div>
            <dl>
              {rows.map(([k, v], i) => (
                <div key={k} className={`grid grid-cols-1 gap-x-5 gap-y-1 py-4 sm:grid-cols-[0.8fr_1.2fr] ${i < rows.length - 1 ? "border-b border-[rgba(120,152,156,0.19)]" : ""}`}>
                  <dt className="text-[13px] leading-[20.8px] text-[#648287]">{k}</dt>
                  <dd className="text-[13px] leading-[20.8px] text-[#102d2f]">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <p className="border-l-[3px] border-[#247780] bg-[#eaf5f5] px-[23px] py-[19px] text-[14px] leading-[22.4px] text-[#48666a]">
          Deployment, residency and sovereignty assurances require exact evidence. No sovereign-cloud or in-country hosting claim is made.
        </p>
      </div>
    </section>
  );
}
