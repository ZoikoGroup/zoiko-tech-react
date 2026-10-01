import Image from "next/image";
import DesktopLines from "./DesktopLines";

const cards = [
  {
    icon: "/financial-services/desktop-icon-shield-check.svg",
    title: ["Secure engineering"],
    body: ["Corporate architecture and", "documented product security", "controls."],
  },
  {
    icon: "/financial-services/desktop-icon-lock-keyhole.svg",
    title: ["Identity & least", "privilege"],
    body: ["Explicit roles and delegated", "authority around sensitive actions."],
  },
  {
    icon: "/financial-services/desktop-icon-network.svg",
    title: ["Operational resilience"],
    body: ["Integration status, failure", "handling, containment and", "recovery where supported."],
  },
  {
    icon: "/financial-services/desktop-icon-file-text.svg",
    title: ["Trust evidence"],
    body: ["Security, privacy, status and", "responsible-disclosure routes", "require authoritative sources."],
  },
];

export default function DesktopSecurity() {
  return (
    <section
      id="security"
      className="w-full bg-[linear-gradient(121.34deg,#000_0%,#0a2528_48%,#247780_100%)] pb-[94px] pt-[93px] font-poppins"
    >
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-[36px] px-10 xl:px-0">
        <div className="flex max-w-[820px] flex-col gap-[14.8px]">
          <span className="text-[12px] font-bold leading-[19.2px] tracking-[2px] text-[#86d4d8]">
            10 / SECURITY &amp; RESILIENCE
          </span>
          <h2 className="text-[44px] font-bold leading-[50.6px] tracking-[-1.3px] text-white">
            <DesktopLines lines={["Design control and continuity", "into financial operations."]} />
          </h2>
          <p className="max-w-[760px] pt-[5.2px] text-[16px] leading-[25.6px] text-[#c4d7d9]">
            <DesktopLines
              lines={[
                "Security connects engineering, least privilege, operational recovery and product-specific evidence.",
              ]}
            />
          </p>
        </div>

        <div className="flex items-stretch justify-center gap-[20px]">
          {cards.map((c) => (
            <a
              key={c.icon}
              href="#"
              className="flex min-h-[260px] min-w-0 flex-1 flex-col rounded-[10px] border border-[rgba(255,255,255,0.19)] bg-[rgba(255,255,255,0.04)] p-[28px]"
            >
              <div className="flex h-[68px] w-[46px] flex-col pb-[22px]">
                <span className="flex size-[46px] items-center justify-center rounded-[10px] bg-[rgba(98,198,202,0.1)]">
                  <Image src={c.icon} alt="" width={25} height={25} />
                </span>
              </div>
              <h3 className="pb-[12px] text-[20px] font-bold leading-[26px] text-white">
                <DesktopLines lines={c.title} />
              </h3>
              <p className="pb-[22px] text-[15px] leading-[24px] text-[#c4d7d9]">
                <DesktopLines lines={c.body} />
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
