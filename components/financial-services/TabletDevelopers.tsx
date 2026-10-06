import Image from "next/image";
import TabletLines from "./TabletLines";

const cards = [
  {
    icon: "/financial-services/tablet-adjacent-code-icon.svg",
    title: "Build",
    text: "Approved APIs, SDKs, events, webhooks and authentication.",
  },
  {
    icon: "/financial-services/tablet-practice-document-icon.svg",
    title: "Learn",
    text: "Documentation, API reference, quickstarts and architecture guides.",
  },
  {
    icon: "/financial-services/tablet-adjacent-shield-icon.svg",
    title: "Test",
    text: "Sandbox and reference implementations when external access is available.",
  },
  {
    icon: "/financial-services/tablet-adjacent-network-icon.svg",
    title: "Operate",
    text: "Documented usage, observability, status and developer support.",
  },
];

const rows = [
  ["Source → target", "Sample workflow → authoritative system"],
  ["Interface state", "Awaiting confirmation"],
  ["Last successful event", "Specimen timestamp — no live connection"],
  ["Recovery context", "Owner review required"],
];

export default function TabletDevelopers() {
  return (
    <section
      id="developers-t"
      className="w-full overflow-hidden px-[5%] pb-[70px] pt-[70px] font-poppins md:pb-[94px] md:pt-[93px]"
      style={{
        backgroundImage:
          "linear-gradient(119.99496242229432deg, rgb(0, 0, 0) 0%, rgb(10, 37, 40) 48%, rgb(36, 119, 128) 100%)",
      }}
    >
      <div className="mx-auto flex w-full max-w-[960px] flex-col">
        <div className="flex max-w-[820px] flex-col gap-[15.2px]">
          <span className="text-[12px] font-bold leading-[19.2px] tracking-[2px] text-[#86d4d8]">
            12 / INTEGRATION &amp; DEVELOPER LAYER
          </span>
          <h2 className="text-[clamp(24px,4.5vw,29px)] font-bold leading-[1.15] tracking-[-1.3px] text-white">
            <TabletLines lines={["Connect systems without losing", "their authoritative boundaries."]} />
          </h2>
          <p className="max-w-[760px] pt-1 text-[16px] leading-[25.6px] text-[#c4d7d9]">
            Build around documented interfaces, explicit identity and visible event and API health.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-5 pt-9 sm:grid-cols-2">
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

        <div className="mt-9 rounded-[12px] border border-[rgba(117,166,172,0.47)] bg-[rgba(5,27,32,0.85)] p-[26px] shadow-[0px_18px_50px_0px_rgba(0,30,37,0.06)]">
          <div className="flex flex-wrap items-start justify-between gap-x-10 gap-y-3 border-b border-[rgba(120,152,156,0.27)] pb-[18px]">
            <h3 className="text-[18px] font-bold leading-[23.4px] text-white">Integration health / specimen</h3>
            <span className="rounded-[20px] border border-[#719ea4] px-[9px] py-[3px] text-[10px] leading-[16px] tracking-[0.3px] text-[#a1dade]">
              Synthetic specimen
            </span>
          </div>
          <dl>
            {rows.map(([k, v], i) => (
              <div
                key={k}
                className={`grid grid-cols-[0.8fr_1.2fr] gap-5 py-4 text-[13px] leading-[20.8px] ${
                  i < rows.length - 1 ? "border-b border-[rgba(120,152,156,0.19)]" : ""
                }`}
              >
                <dt className="text-[#9bc2c6]">{k}</dt>
                <dd className="text-white">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
