import TabletLines from "./TabletLines";

const cards = [
  { icon: "code", title: "Build", body: "Approved APIs, SDKs, model interfaces, events and authentication." },
  { icon: "document", title: "Learn", body: "Documentation, API references, quickstarts and architecture guides." },
  { icon: "shield-check", title: "Test", body: "External sandbox access only when it is live and approved." },
  { icon: "network", title: "Operate", body: "Supported observability, usage, status, changelog and assistance." },
];

const rows = [
  ["Source → target", "Sample service → sample authoritative system"],
  ["Interface state", "Awaiting source response"],
  ["Last success", "Specimen timestamp only"],
  ["Error / retry context", "Review integration owner"],
  ["Payload visibility", "No sensitive information displayed"],
];

export default function TabletDevelopers() {
  return (
    <section id="developers-t" className="w-full overflow-hidden bg-white pb-[72px] pt-[64px] font-poppins md:pb-[108px] md:pt-[93px] px-6 md:px-12 lg:px-20">
      <div className="mx-auto flex w-full max-w-7xl flex-col">
        <div className="flex max-w-[820px] flex-col gap-[15.2px]">
          <p className="text-[12px] font-bold leading-[19.2px] tracking-[2px] text-[#247780]">13 / INTEGRATION &amp; DEVELOPER LAYER</p>
          <h2 className="pb-[0.52px] text-[24px] font-bold leading-[28px] tracking-[-1.3px] text-[#102d2f] sm:text-[29px] sm:leading-[33.35px]">
            <TabletLines lines={["Connect agency systems", "through documented boundaries."]} />
          </h2>
          <p className="max-w-[760px] pt-[4.8px] text-[16px] leading-[25.6px] text-[#587176]">
            Keep authoritative sources, identity, interface health and support ownership visible.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-5 pt-9 sm:grid-cols-2">
          {cards.map((c) => (
            <li key={c.title} className="flex">
              <a href="/developer-portal" className="flex w-full flex-col rounded-[10px] border border-[#dae8e8] bg-[#f3f8f8] p-7">
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

        <div className="mt-[26px] rounded-[12px] border border-[#d3e5e6] bg-white p-[26px] drop-shadow-[0px_18px_25px_rgba(0,30,37,0.06)]">
          <div className="flex items-start justify-between gap-3 border-b border-[rgba(120,152,156,0.27)] pb-[18px]">
            <h3 className="text-[18px] font-bold leading-[23.4px] text-[#102d2f]">Integration health</h3>
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

        <p className="mt-[26px] border-l-[3px] border-[#247780] bg-[#eaf5f5] px-[23px] py-[19px] text-[14px] leading-[22.4px] text-[#48666a]">
          Support for a specific government identity system, data exchange or operational platform requires current integration documentation.
        </p>
      </div>
    </section>
  );
}
