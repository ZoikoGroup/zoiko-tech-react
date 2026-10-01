import Image from "next/image";
import DesktopLines from "./DesktopLines";

const cards = [
  {
    icon: "/financial-services/desktop-icon-code.svg",
    title: "Build",
    body: "Approved APIs, SDKs, events, webhooks and authentication.",
  },
  {
    icon: "/financial-services/desktop-icon-file-text.svg",
    title: "Learn",
    body: "Documentation, API reference, quickstarts and architecture guides.",
  },
  {
    icon: "/financial-services/desktop-icon-shield-check.svg",
    title: "Test",
    body: "Sandbox and reference implementations when external access is available.",
  },
  {
    icon: "/financial-services/desktop-icon-network.svg",
    title: "Operate",
    body: "Documented usage, observability, status and developer support.",
  },
];

export default function DesktopDevelopers() {
  return (
    <section
      id="developers"
      className="w-full bg-[linear-gradient(117.3deg,#000_0%,#0a2528_48%,#247780_100%)] pb-[94px] pt-[93px] font-poppins"
    >
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-[32px] px-10 xl:px-0">
        <div className="flex max-w-[820px] flex-col gap-[14.8px]">
          <div className="h-[20px] w-full" aria-hidden="true" />
          <h2 className="text-[44px] font-bold leading-[50.6px] tracking-[-1.3px] text-white">
            <DesktopLines lines={["Connect systems without losing", "their authoritative boundaries."]} />
          </h2>
          <p className="max-w-[760px] pt-[5.2px] text-[16px] leading-[25.6px] text-[#c4d7d9]">
            <DesktopLines
              lines={["Build around documented interfaces, explicit identity and visible event and API health."]}
            />
          </p>
        </div>

        <div className="flex h-[351px] items-stretch justify-center gap-[20px] pt-[36px]">
          {cards.map((c) => (
            <a
              key={c.title}
              href="#"
              className="flex min-w-0 flex-1 flex-col items-center justify-center gap-[16px] rounded-[10px] border border-[rgba(255,255,255,0.19)] bg-[rgba(255,255,255,0.04)] p-[28px] text-center"
            >
              <div className="flex h-[68px] w-[46px] flex-col items-center justify-center pb-[22px]">
                <span className="flex size-[46px] items-center justify-center rounded-[10px] bg-[rgba(98,198,202,0.1)]">
                  <Image src={c.icon} alt="" width={25} height={25} />
                </span>
              </div>
              <h3 className="pb-[12px] text-[20px] font-bold leading-[26px] text-white">{c.title}</h3>
              <p className="pb-[22px] text-[15px] leading-[24px] text-[#c4d7d9]">{c.body}</p>
            </a>
          ))}
        </div>

        <div className="relative h-[360px] w-full overflow-hidden rounded-[10px] shadow-[0px_12px_28px_-8px_rgba(0,0,0,0.22)]">
          <Image
            src="/financial-services/desktop-developers-collaboration.webp"
            alt="Developer platform collaboration"
            fill
            sizes="1200px"
            className="object-cover object-[50%_30%]"
          />
        </div>
      </div>
    </section>
  );
}
