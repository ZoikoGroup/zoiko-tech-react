import Image from "next/image";
import DesktopLines from "./DesktopLines";

const cards = [
  {
    icon: "/financial-services/desktop-icon-file-text.svg",
    title: "Obligations & policies",
    body: ["Source, jurisdiction, applicability, owner and", "reviewed interpretation."],
  },
  {
    icon: "/financial-services/desktop-icon-shield-check.svg",
    title: "Controls & approvals",
    body: ["Mapped controls, authorized reviewer,", "conditions nd decision history."],
  },
  {
    icon: "/financial-services/desktop-icon-database.svg",
    title: "Evidence & exceptions",
    body: ["Source, period, freshness and missing,", "conflicting or overdue states."],
  },
];

export default function DesktopCompliance() {
  return (
    <section
      id="compliance"
      className="w-full bg-[linear-gradient(122.29deg,#000_0%,#0a2528_48%,#247780_100%)] pb-[108px] pt-[93px] font-poppins"
    >
      <div className="mx-auto flex w-full max-w-[1200px] flex-col px-10 xl:px-0">
        <div className="flex max-w-[820px] flex-col gap-[14.8px]">
          <h2 className="text-[44px] font-bold leading-[50.6px] tracking-[-1.3px] text-white">
            <DesktopLines lines={["Connect obligations to the work", "and the evidence that supports it."]} />
          </h2>
          <p className="max-w-[760px] pt-[4.495px] text-[16px] leading-[25.6px] text-[#c4d7d9]">
            <DesktopLines
              lines={[
                "ZoikoAssure is described as regulatory intelligence, compliance and audit automation. Public maturity and",
                "capabilities require approved evidence.",
              ]}
            />
          </p>
        </div>

        <div className="flex items-start justify-center gap-[20px] pt-[36px]">
          {cards.map((c) => (
            <a
              key={c.title}
              href="#"
              className="flex min-w-0 flex-1 flex-col rounded-[10px] border border-[rgba(255,255,255,0.19)] bg-[rgba(255,255,255,0.04)] p-[28px]"
            >
              <div className="flex h-[68px] w-[46px] flex-col pb-[22px]">
                <span className="flex size-[46px] items-center justify-center rounded-[10px] bg-[rgba(98,198,202,0.1)]">
                  <Image src={c.icon} alt="" width={25} height={25} />
                </span>
              </div>
              <h3 className="pb-[12px] text-[20px] font-bold leading-[26px] text-white">{c.title}</h3>
              <p className="pb-[22px] text-[15px] leading-[24px] text-[#c4d7d9]">
                <DesktopLines lines={c.body} />
              </p>
              <span className="relative block h-[36.8px] min-h-[36px] w-full">
                <span className="absolute left-0 top-[17px] w-[104.156px] -translate-y-1/2 text-[13px] font-bold leading-[20.8px] text-[#9cdee0]">
                  Explore pathway
                </span>
              </span>
            </a>
          ))}
        </div>

        <div className="flex flex-col items-center pt-[36px]">
          <div className="relative h-[360px] w-full overflow-hidden rounded-[10px] border border-[rgba(255,255,255,0.19)] bg-[rgba(255,255,255,0.04)] shadow-[0px_12px_32px_-8px_rgba(0,0,0,0.15)]">
            <Image
              src="/financial-services/desktop-compliance-meeting.webp"
              alt=""
              fill
              sizes="1200px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.4)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
