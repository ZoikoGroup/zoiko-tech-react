import TabletLines from "./TabletLines";

const cards = [
  { title: "Digital service delivery", text: "Access problem → integration → accessible workflow → approved result." },
  { title: "Identity & authority", text: "Delegation problem → authorization design → approved operational result." },
  { title: "Workflow & evidence", text: "Fragmented process → governed handoff → approved outcome." },
  { title: "Governed public-sector AI", text: "Bounded use → evaluation → human oversight → monitored limitations." },
];

export default function TabletPractice() {
  return (
    <section id="practice-t" className="w-full overflow-hidden bg-white py-[70px] font-poppins sm:py-[93px] px-6 md:px-12 lg:px-20">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-9">
        <div className="flex w-full max-w-[820px] flex-col gap-[15.2px]">
          <p className="text-[12px] font-bold leading-[19.2px] tracking-[2px] text-[#247780]">15 / TECHNOLOGY IN PRACTICE</p>
          <h2 className="text-[clamp(24px,5vw,29px)] font-bold leading-[1.15] tracking-[-1.3px] text-[#102d2f]">
            <TabletLines lines={["Public-sector proof", "must be approved and traceable."]} />
          </h2>
          <p className="max-w-[760px] pt-1 text-[16px] leading-[25.6px] text-[#587176]">
            Approved agency stories and measured outcomes were not supplied. Explore the architecture while evidence is pending.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {cards.map((c) => (
            <article key={c.title} className="flex flex-col rounded-[10px] border border-[#dae8e8] bg-[#f3f8f8] p-7">
              <div className="mb-[22px] flex size-[46px] items-center justify-center rounded-[10px] bg-[#deefef]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/public-sector-government/tablet-icon-document.svg" alt="" width={25} height={25} className="size-[25px]" />
              </div>
              <span className="w-full rounded-[20px] border border-[#719ea4] px-[9px] py-[3px] text-[10px] leading-4 tracking-[0.3px] text-[#247780]">
                Evidence pending
              </span>
              <h3 className="pb-3 pt-1 text-[20px] font-bold leading-[26px] text-[#102d2f]">{c.title}</h3>
              <p className="pb-[22px] text-[15px] leading-6 text-[#587176]">{c.text}</p>
              <a href="#" className="mt-auto flex min-h-9 items-center py-2 text-[13px] font-bold leading-[20.8px] text-[#247780]">
                Discuss the architecture ↗
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
