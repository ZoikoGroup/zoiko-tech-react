const cards = [
  { icon: "/public-sector-government/tablet-icon-user.svg", title: "Digital public services", text: "Accessible, understandable journeys with explicit status and support." },
  { icon: "/public-sector-government/tablet-icon-lock.svg", title: "Identity & access", text: "Identity, authentication and revocable delegated authority." },
  { icon: "/public-sector-government/tablet-icon-network.svg", title: "Operations & workflows", text: "Requests, approvals, exceptions and accountable handoffs." },
  { icon: "/public-sector-government/tablet-icon-sparkle.svg", title: "Governed AI", text: "Source-aware assistance with human authority and review." },
  { icon: "/public-sector-government/tablet-icon-document.svg", title: "Communications", text: "Approved notifications connected to service workflows." },
  { icon: "/public-sector-government/tablet-icon-code.svg", title: "Infrastructure & integration", text: "Connect systems through interfaces, data and observability." },
];

export default function TabletPathways() {
  return (
    <section id="pathways-t" className="w-full overflow-hidden bg-white pb-[94px] pt-[93px] font-poppins px-6 md:px-12 lg:px-20">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-[36px]">
        <div className="flex max-w-[820px] flex-col gap-[15px]">
          <span className="text-[12px] font-bold leading-[19.2px] tracking-[2px] text-[#247780]">
            01 / AGENCY &amp; SERVICE ROUTER
          </span>
          <h2 className="text-[clamp(24px,5vw,29px)] font-bold leading-[33.35px] tracking-[-1.3px] text-[#102d2f]">
            Where does your public-service need start?
          </h2>
          <p className="max-w-[760px] pt-[5px] text-[16px] leading-[25.6px] text-[#587176]">
            Choose a service objective to explore its architecture, controls and evaluation path.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-[20px] sm:grid-cols-2">
          {cards.map((c) => (
            <li key={c.title} className="flex">
              <a
                href="#"
                className="flex w-full flex-col items-start rounded-[10px] border border-[#dae8e8] bg-[#f3f8f8] p-[28px]"
              >
                <span className="mb-[22px] flex size-[46px] items-center justify-center rounded-[10px] bg-[#deefef]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.icon} alt="" width={25} height={25} className="size-[25px]" />
                </span>
                <h3 className="pb-[12px] text-[20px] font-bold leading-[26px] text-[#102d2f]">{c.title}</h3>
                <p className="pb-[22px] text-[15px] leading-[24px] text-[#587176]">{c.text}</p>
                <span className="mt-auto flex min-h-[36px] w-full items-center justify-between text-[13px] leading-[20.8px] text-[#247780]">
                  <span className="font-bold">Explore pathway</span>
                  <span aria-hidden="true">↗</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
