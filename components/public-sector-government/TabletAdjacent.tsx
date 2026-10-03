import TabletLines from "./TabletLines";

const cards = [
  { icon: "tablet-icon-code", title: "Modernization & integration", text: "Shared infrastructure, interfaces and system boundaries." },
  { icon: "tablet-icon-lock", title: "Identity & trust", text: "Delegation, security and accountable authority." },
  { icon: "tablet-icon-sparkle", title: "AI governance", text: "Source-aware assistance and responsible deployment." },
  { icon: "tablet-icon-document", title: "Compliance & evidence", text: "Reviewed rules, controls and retained history." },
  { icon: "tablet-icon-user", title: "Communications & access", text: "Approved channels and supported assisted pathways." },
  { icon: "tablet-icon-network", title: "Operational workflows", text: "Requests, owners, exceptions and handoffs." },
];

export default function TabletAdjacent() {
  return (
    <section id="adjacent-t" className="w-full overflow-hidden bg-white py-[70px] font-poppins sm:py-[93px] px-6 md:px-12 lg:px-20">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-9">
        <div className="flex w-full max-w-[820px] flex-col gap-[15.2px]">
          <p className="text-[12px] font-bold leading-[19.2px] tracking-[2px] text-[#247780]">17 / EXPANSION &amp; RETENTION</p>
          <h2 className="text-[clamp(24px,5vw,29px)] font-bold leading-[1.15] tracking-[-1.3px] text-[#102d2f]">
            <TabletLines lines={["Follow the next service need.", "Keep the operating foundation connected."]} />
          </h2>
          <p className="max-w-[760px] pt-1 text-[16px] leading-[25.6px] text-[#587176]">
            Explore adjacent architecture pathways as needs expand.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {cards.map((c) => (
            <a key={c.title} href="#" className="flex flex-col rounded-[10px] border border-[#dae8e8] bg-[#f3f8f8] p-7">
              <span className="mb-[22px] flex size-[46px] items-center justify-center rounded-[10px] bg-[#deefef]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/public-sector-government/${c.icon}.svg`} alt="" width={25} height={25} className="size-[25px]" />
              </span>
              <h3 className="pb-3 text-[20px] font-bold leading-[26px] text-[#102d2f]">{c.title}</h3>
              <p className="pb-[22px] text-[15px] leading-6 text-[#587176]">{c.text}</p>
              <span className="mt-auto flex min-h-9 items-center justify-between py-2 text-[13px] font-bold leading-[20.8px] text-[#247780]">
                Explore pathway
                <span className="font-normal" aria-hidden="true">↗</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
