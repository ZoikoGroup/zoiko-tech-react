import Image from "next/image";
import type { ReactNode } from "react";
import DesktopLines from "./DesktopLines";

const cards: { icon: string; title: ReactNode; body: ReactNode }[] = [
  {
    icon: "desktop-icon-user-light.svg",
    title: "Service-access gaps",
    body: (<>Disability, language, device and<br />assisted-service needs must be<br />considered in service design.</>),
  },
  {
    icon: "desktop-icon-lock-light.svg",
    title: "Fragmented authority",
    body: (<>Residents, staff, vendors and<br />systems may need different<br />identity and delegation controls.</>),
  },
  {
    icon: "desktop-icon-file-text-light.svg",
    title: (<>Opaque workflows &amp;<br />evidence</>),
    body: (<>Requests and approvals cross<br />systems without a clear owner or<br />record.</>),
  },
  {
    icon: "desktop-problems-icon-code.svg",
    title: (<>Legacy integration<br />complexity</>),
    body: (<>Long-lived systems and agency<br />boundaries need deliberate<br />integration.</>),
  },
];

export default function DesktopProblems() {
  return (
    <section
      id="problems"
      className="w-full pb-[94px] pt-[93px] px-6 md:px-12 lg:px-20"
      style={{
        backgroundImage:
          "linear-gradient(111.32201381830345deg, rgb(0, 0, 0) 0%, rgb(10, 37, 40) 48%, rgb(36, 119, 128) 100%)",
      }}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-9">
        <div className="flex max-w-[820px] flex-col gap-[14.8px]">
          <h2 className="font-poppins text-[44px] font-bold leading-[50.6px] tracking-[-1.3px] text-white">
            <DesktopLines lines={["Public services need connected", "systems. And understandable states."]} />
          </h2>
          <p className="max-w-[760px] pt-[5.2px] font-poppins text-[16px] leading-[25.6px] text-[#c4d7d9]">
            Four operating challenges guide the design of accessible, auditable digital services.
          </p>
        </div>
        <ul className="flex items-stretch justify-center gap-5">
          {cards.map((c, i) => (
            <li key={i} className="min-w-0 flex-1">
              <a
                href="#"
                className="flex h-full min-h-[306px] flex-col rounded-[10px] border border-[rgba(255,255,255,0.19)] bg-[rgba(255,255,255,0.04)] p-7"
              >
                <span className="mb-[22px] flex size-[46px] shrink-0 items-center justify-center rounded-[10px] bg-[rgba(98,198,202,0.1)]">
                  <Image src={`/public-sector-government/${c.icon}`} alt="" width={25} height={25} />
                </span>
                <h3 className="pb-3 font-poppins text-[20px] font-bold leading-[26px] text-white">{c.title}</h3>
                <p className="pb-[22px] font-poppins text-[15px] leading-6 text-[#c4d7d9]">{c.body}</p>
              </a>
            </li>
          ))}
        </ul>
        <div className="relative h-[360px] w-full overflow-hidden rounded-[12px] shadow-[0px_12px_28px_-8px_rgba(0,0,0,0.22)]">
          <Image
            src="/public-sector-government/desktop-problems-team-photo.webp"
            alt="Connected public services team"
            fill
            sizes="(min-width: 1264px) 1200px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
