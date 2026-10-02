import TabletLines from "./TabletLines";

const cards = [
  { icon: "tablet-icon-landmark", title: "Agency & program identity", text: "Use only when legal, customer and relevant public-affairs approvals permit it." },
  { icon: "tablet-icon-network-deployment", title: "Deployment & integration", text: "Actual technology, operator and environment at approved scope." },
  { icon: "tablet-icon-results-document", title: "Results & limitations", text: "Only measured, evidenced outcomes with exact assurance wording." },
];

export default function TabletCustomerEvidence() {
  return (
    <section
      id="customer-evidence-t"
      className="w-full overflow-hidden py-[70px] font-poppins sm:py-[93px] px-6 md:px-12 lg:px-20"
      style={{ backgroundImage: "linear-gradient(119.37deg, rgb(0, 0, 0) 0%, rgb(10, 37, 40) 48%, rgb(36, 119, 128) 100%)" }}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-9">
        <div className="flex w-full max-w-[820px] flex-col gap-[15.2px]">
          <p className="text-[12px] font-bold leading-[19.2px] tracking-[2px] text-[#86d4d8]">16 / CUSTOMER EVIDENCE</p>
          <h2 className="text-[clamp(24px,5vw,29px)] font-bold leading-[1.15] tracking-[-1.3px] text-white">
            <TabletLines lines={["Every story needs", "permission, scope and supporting records."]} />
          </h2>
          <p className="max-w-[760px] pt-1 text-[16px] leading-[25.6px] text-[#c4d7d9]">
            Agency identity, service details, environments and measured results require explicit publication approval.
          </p>
        </div>
        <div className="grid grid-cols-1 items-start gap-5 sm:grid-cols-2">
          {cards.map((c) => (
            <a
              key={c.title}
              href="#"
              className="flex flex-col rounded-[10px] border border-[rgba(255,255,255,0.19)] bg-[rgba(255,255,255,0.04)] p-7"
            >
              <span className="mb-[22px] flex size-[46px] items-center justify-center rounded-[10px] bg-[rgba(98,198,202,0.1)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/public-sector-government/${c.icon}.svg`} alt="" width={25} height={25} className="size-[25px]" />
              </span>
              <h3 className="pb-3 text-[20px] font-bold leading-[26px] text-white">{c.title}</h3>
              <p className="pb-[22px] text-[15px] leading-6 text-[#c4d7d9]">{c.text}</p>
              <span className="flex min-h-9 items-center justify-between py-2 text-[13px] font-bold leading-[20.8px] text-[#9cdee0]">
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
