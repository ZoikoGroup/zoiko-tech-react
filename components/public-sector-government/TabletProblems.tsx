import TabletLines from "./TabletLines";

const cards = [
  { icon: "/public-sector-government/tablet-icon-channel-user.svg", title: "Service-access gaps", text: "Disability, language, device and assisted-service needs must be considered in service design." },
  { icon: "/public-sector-government/tablet-icon-security-lock.svg", title: "Fragmented authority", text: "Residents, staff, vendors and systems may need different identity and delegation controls." },
  { icon: "/public-sector-government/tablet-icon-results-document.svg", title: "Opaque workflows & evidence", text: "Requests and approvals cross systems without a clear owner or record." },
  { icon: "/public-sector-government/tablet-icon-code-light.svg", title: "Legacy integration complexity", text: "Long-lived systems and agency boundaries need deliberate integration." },
];

export default function TabletProblems() {
  return (
    <section
      id="problems-t"
      className="w-full overflow-hidden pb-[94px] pt-[93px] font-poppins px-6 md:px-12 lg:px-20"
      style={{
        backgroundImage:
          "linear-gradient(120deg, rgb(0, 0, 0) 0%, rgb(10, 37, 40) 48%, rgb(36, 119, 128) 100%)",
      }}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-[36px]">
        <div className="flex max-w-[820px] flex-col gap-[15.2px]">
          <span className="text-[12px] font-bold leading-[19.2px] tracking-[2px] text-[#86d4d8]">
            02 / PRIORITY INDUSTRY PROBLEMS
          </span>
          <h2 className="pb-[0.52px] text-[clamp(24px,5vw,29px)] font-bold leading-[33.35px] tracking-[-1.3px] text-white">
            <TabletLines lines={["Public services need connected systems.", "And understandable states."]} />
          </h2>
          <p className="max-w-[760px] pt-[4.79px] text-[16px] leading-[25.6px] text-[#c4d7d9]">
            Four operating challenges guide the design of accessible, auditable digital services.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-[20px] sm:grid-cols-2">
          {cards.map((c) => (
            <li key={c.title} className="flex">
              <a
                href="#"
                className="flex w-full flex-col items-start rounded-[10px] border border-white/[0.19] bg-white/[0.04] p-[28px]"
              >
                <span className="mb-[22px] flex size-[46px] items-center justify-center rounded-[10px] bg-[rgba(98,198,202,0.1)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.icon} alt="" width={25} height={25} className="size-[25px]" />
                </span>
                <h3 className="pb-[12px] text-[20px] font-bold leading-[26px] text-white">{c.title}</h3>
                <p className="pb-[22px] text-[15px] leading-[24px] text-[#c4d7d9]">{c.text}</p>
                <span className="mt-auto flex min-h-[36px] w-full items-center justify-between text-[13px] leading-[20.8px] text-[#9cdee0]">
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
