import Image from "next/image";
import DesktopLines from "./DesktopLines";

const cards = [
  {
    title: "Agency & program identity",
    lines: ["Use only when legal, customer and relevant", "public-affairs approvals permit it."],
    photo: "desktop-evidence-agency-identity.webp",
    icon: "desktop-evidence-agency-icon.svg",
  },
  {
    title: "Deployment & integration",
    lines: ["Actual technology, operator and environment at approved scope."],
    photo: "desktop-evidence-deployment-integration.webp",
    icon: "desktop-evidence-deployment-icon.svg",
  },
  {
    title: "Results & limitations",
    lines: ["Only measured, evidenced outcomes with exact assurance wording."],
    photo: "desktop-evidence-results-limitations.webp",
    icon: "desktop-evidence-results-icon.svg",
  },
];

export default function DesktopCustomerEvidence() {
  return (
    <section
      id="customer-evidence"
      className="flex w-full flex-col items-center pb-[94px] pt-[93px] font-poppins px-6 md:px-12 lg:px-20"
      style={{ backgroundImage: "linear-gradient(117.94deg, rgb(0, 0, 0) 0%, rgb(10, 37, 40) 48%, rgb(36, 119, 128) 100%)" }}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-9">
        <div className="flex max-w-[820px] flex-col gap-[15.1px]">
          <h2 className="pb-[0.7px] text-[44px] font-bold leading-[50.6px] tracking-[-1.3px] text-white">
            <DesktopLines lines={["Every story needs permission, scope and supporting", "records."]} />
          </h2>
          <p className="pt-[4.9px] text-[16px] leading-[25.6px] text-[#c4d7d9]">
            <DesktopLines lines={["Agency identity, service details, environments and measured results require explicit publication approval."]} />
          </p>
        </div>
        <ul className="flex items-start gap-5">
          {cards.map((c) => (
            <li
              key={c.title}
              className="flex h-[420px] min-w-0 flex-1 flex-col overflow-hidden rounded-[10px] border border-[rgba(255,255,255,0.19)] bg-[rgba(255,255,255,0.04)]"
            >
              <div className="relative h-[210px] w-full shrink-0">
                <Image src={`/public-sector-government/${c.photo}`} alt="" fill sizes="400px" className="object-cover" />
              </div>
              <div className="flex h-[210px] flex-col gap-3 overflow-hidden p-6">
                <div className="flex min-h-[46px] items-center gap-3">
                  <span className="flex size-[46px] shrink-0 items-center justify-center rounded-[10px] bg-[rgba(98,198,202,0.1)]">
                    <Image src={`/public-sector-government/${c.icon}`} alt="" width={25} height={25} />
                  </span>
                  <h3 className="min-w-0 flex-1 text-[20px] font-bold leading-[26px] text-[#6fd0f6]">{c.title}</h3>
                </div>
                <p className="text-[15px] leading-[24px] text-white">
                  <DesktopLines lines={c.lines} />
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
