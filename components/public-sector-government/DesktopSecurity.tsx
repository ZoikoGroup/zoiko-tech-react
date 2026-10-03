import Image from "next/image";
import DesktopLines from "./DesktopLines";

const cards = [
  {
    icon: "/public-sector-government/desktop-icon-shield-check-light.svg",
    title: "Secure engineering",
    lines: ["Corporate and product-", "specific security evidence."],
  },
  {
    icon: "/public-sector-government/desktop-icon-lock-light.svg",
    title: "Least privilege",
    lines: ["Explicit role and scope around", "public-service actions."],
  },
  {
    icon: "/public-sector-government/desktop-icon-database-light.svg",
    title: "Privacy by purpose",
    lines: ["Minimum necessary data for", "an approved service and role."],
  },
  {
    icon: "/public-sector-government/desktop-evidence-deployment-icon.svg",
    title: "Reliability & recovery",
    lines: ["Observability, incident", "communication and", "supported recovery paths."],
  },
];

export default function DesktopSecurity() {
  return (
    <section
      id="security"
      className="flex w-full flex-col items-center bg-[linear-gradient(124.17deg,#000000_0%,#0a2528_48%,#247780_100%)] pt-[93px] pb-[108px] px-6 md:px-12 lg:px-20"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-[26px]">
        <div className="flex max-w-[820px] flex-col gap-[14.8px]">
          <h2 className="font-poppins text-[44px] leading-[50.6px] font-bold tracking-[-1.3px] text-white">
            <DesktopLines lines={["Build public trust into", "the operating foundation."]} />
          </h2>
          <p className="max-w-[760px] pt-[5.2px] font-poppins text-[16px] leading-[25.6px] text-[#c4d7d9]">
            Connect secure engineering, privacy-conscious data use, least privilege and reliable operations.
          </p>
        </div>
        <ul className="flex items-stretch justify-center gap-5 pt-[10px]">
          {cards.map((c) => (
            <li
              key={c.title}
              className="flex min-w-0 flex-1 flex-col items-start justify-center gap-5 rounded-[10px] border border-[rgba(255,255,255,0.19)] bg-[rgba(255,255,255,0.04)] p-[28px]"
            >
              <div className="flex h-[68px] w-full flex-col items-center justify-center pb-[22px]">
                <span className="flex size-[46px] items-center justify-center rounded-[10px] bg-[rgba(98,198,202,0.1)]">
                  <Image src={c.icon} alt="" width={25} height={25} />
                </span>
              </div>
              <h3 className="w-full pb-[12px] font-poppins text-[20px] leading-[26px] font-bold text-white">
                {c.title}
              </h3>
              <p className="w-full pb-[22px] font-poppins text-[15px] leading-[24px] text-[#c4d7d9]">
                <DesktopLines lines={c.lines} />
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
