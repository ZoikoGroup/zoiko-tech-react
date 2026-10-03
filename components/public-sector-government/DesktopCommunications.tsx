import Image from "next/image";
import DesktopLines from "./DesktopLines";

const cards = [
  {
    img: "/public-sector-government/desktop-communications-useful-service-updates.webp",
    icon: "/public-sector-government/desktop-icon-file-text-light.svg",
    title: "Useful service updates",
    lines: ["Status, required information, deadlines or", "appointments where supported."],
  },
  {
    img: "/public-sector-government/desktop-communications-channel-permissions.webp",
    icon: "/public-sector-government/desktop-icon-user-light.svg",
    title: "Channel permissions",
    lines: ["Respect user preferences and applicable", "program rules."],
  },
  {
    img: "/public-sector-government/desktop-communications-delivery-escalation.webp",
    icon: "/public-sector-government/desktop-evidence-deployment-icon.svg",
    title: "Delivery & escalation",
    lines: ["Sent, delivered, failed and unknown remain", "distinct when channel evidence supports", "them."],
  },
];

export default function DesktopCommunications() {
  return (
    <section
      id="communications"
      className="flex w-full flex-col items-center bg-[linear-gradient(125.87deg,#000000_0%,#0a2528_48%,#247780_100%)] pt-[93px] pb-[94px] px-6 md:px-12 lg:px-20"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex max-w-[820px] flex-col gap-[14.8px]">
          <h2 className="font-poppins text-[44px] leading-[50.6px] font-bold tracking-[-1.3px] text-white">
            <DesktopLines
              lines={["Explain the service state.", "Keep sensitive detail out of", "notifications."]}
            />
          </h2>
          <p className="max-w-[760px] pt-[5.19px] font-poppins text-[16px] leading-[25.6px] text-[#c4d7d9]">
            Connect service updates to approved channels, permissions and responsible-service support.
          </p>
        </div>
        <ul className="flex items-start justify-center gap-5 pt-[36px]">
          {cards.map((c) => (
            <li
              key={c.title}
              className="flex h-[420px] min-w-0 flex-1 flex-col overflow-hidden rounded-[10px] border border-[rgba(255,255,255,0.19)] bg-[rgba(255,255,255,0.04)]"
            >
              <div className="relative h-[210px] w-full shrink-0">
                <Image src={c.img} alt="" fill sizes="387px" className="object-cover" />
              </div>
              <div className="flex h-[210px] flex-col gap-[12px] overflow-hidden p-[24px]">
                <div className="flex h-[46px] items-center gap-[12px]">
                  <span className="flex size-[46px] shrink-0 items-center justify-center rounded-[10px] bg-[rgba(98,198,202,0.1)]">
                    <Image src={c.icon} alt="" width={25} height={25} />
                  </span>
                  <h3 className="min-w-0 flex-1 font-poppins text-[20px] leading-[26px] font-bold text-[#4cb0ba]">
                    {c.title}
                  </h3>
                </div>
                <p className="pb-[22px] font-poppins text-[15px] leading-[24px] text-white">
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
