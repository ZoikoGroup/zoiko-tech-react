import Image from "next/image";
import TabletLines from "./TabletLines";

const cards = [
  {
    icon: "/financial-services/tablet-adjacent-shield-icon.svg",
    title: "Secure engineering",
    text: "Corporate architecture and documented product security controls.",
  },
  {
    icon: "/financial-services/tablet-problem-icon-lock.svg",
    title: "Identity & least privilege",
    text: "Explicit roles and delegated authority around sensitive actions.",
  },
  {
    icon: "/financial-services/tablet-adjacent-network-icon.svg",
    title: "Operational resilience",
    text: "Integration status, failure handling, containment and recovery where supported.",
  },
  {
    icon: "/financial-services/tablet-practice-document-icon.svg",
    title: "Trust evidence",
    text: "Security, privacy, status and responsible-disclosure routes require authoritative sources.",
  },
];

export default function TabletSecurity() {
  return (
    <section
      id="security-t"
      className="w-full overflow-hidden px-[5%] pb-[70px] pt-[70px] font-poppins md:pb-[94px] md:pt-[93px]"
      style={{
        backgroundImage:
          "linear-gradient(119.333268287045deg, rgb(0, 0, 0) 0%, rgb(10, 37, 40) 48%, rgb(36, 119, 128) 100%)",
      }}
    >
      <div className="mx-auto flex w-full max-w-[960px] flex-col gap-9">
        <div className="flex max-w-[820px] flex-col gap-[15.2px]">
          <span className="text-[12px] font-bold leading-[19.2px] tracking-[2px] text-[#86d4d8]">
            10 / SECURITY &amp; RESILIENCE
          </span>
          <h2 className="text-[clamp(24px,4.5vw,29px)] font-bold leading-[1.15] tracking-[-1.3px] text-white">
            <TabletLines lines={["Design control and continuity", "into financial operations."]} />
          </h2>
          <p className="max-w-[760px] pt-1 text-[16px] leading-[25.6px] text-[#c4d7d9]">
            Security connects engineering, least privilege, operational recovery and product-specific evidence.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {cards.map((c) => (
            <li key={c.title} className="flex">
              <a
                href="#"
                className="flex w-full flex-col rounded-[10px] border border-[rgba(255,255,255,0.19)] bg-[rgba(255,255,255,0.04)] p-[28px]"
              >
                <span className="mb-[22px] flex size-[46px] items-center justify-center rounded-[10px] bg-[rgba(98,198,202,0.1)]">
                  <Image src={c.icon} alt="" width={25} height={25} />
                </span>
                <h3 className="pb-3 text-[20px] font-bold leading-[26px] text-white">{c.title}</h3>
                <p className="pb-[22px] text-[15px] leading-[24px] text-[#c4d7d9]">{c.text}</p>
                <span className="mt-auto flex min-h-[36px] items-center justify-between gap-2 py-2 text-[13px] leading-[20.8px] text-[#9cdee0]">
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
