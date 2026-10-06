import TabletLines from "./TabletLines";

const cards = [
  { icon: "results-document", title: "Useful service updates", body: "Status, required information, deadlines or appointments where supported." },
  { icon: "channel-user", title: "Channel permissions", body: "Respect user preferences and applicable program rules." },
  { icon: "network-deployment", title: "Delivery & escalation", body: "Sent, delivered, failed and unknown remain distinct when channel evidence supports them." },
];

const rows = [
  ["Purpose", "Sample request status update"],
  ["Channel permission", "Needs confirmation"],
  ["Message content", "Minimal status information; no case details"],
  ["Delivery state", "Unknown"],
  ["Escalation", "Responsible service support route"],
];

export default function TabletCommunications() {
  return (
    <section
      id="communications-t"
      className="w-full overflow-hidden pb-[72px] pt-[64px] font-poppins md:pb-[94px] md:pt-[93px] px-6 md:px-12 lg:px-20"
      style={{ backgroundImage: "linear-gradient(119.52deg, rgb(0, 0, 0) 0%, rgb(10, 37, 40) 48%, rgb(36, 119, 128) 100%)" }}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col">
        <div className="flex max-w-[820px] flex-col gap-[15.2px]">
          <p className="text-[12px] font-bold leading-[19.2px] tracking-[2px] text-[#86d4d8]">08 / COMMUNICATIONS &amp; NOTIFICATIONS</p>
          <h2 className="pb-[0.52px] text-[24px] font-bold leading-[28px] tracking-[-1.3px] text-white sm:text-[29px] sm:leading-[33.35px]">
            <TabletLines lines={["Explain the service state.", "Keep sensitive detail out of notifications."]} />
          </h2>
          <p className="max-w-[760px] pt-[4.8px] text-[16px] leading-[25.6px] text-[#c4d7d9]">
            Connect service updates to approved channels, permissions and responsible-service support.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-5 pt-9 sm:grid-cols-2">
          {cards.map((c) => (
            <li key={c.title} className="flex">
              <a href="#" className="flex w-full flex-col rounded-[10px] border border-[rgba(255,255,255,0.19)] bg-[rgba(255,255,255,0.04)] p-7">
                <span className="mb-[22px] flex size-[46px] items-center justify-center rounded-[10px] bg-[rgba(98,198,202,0.1)]">
                  <img src={`/public-sector-government/tablet-icon-${c.icon}.svg`} alt="" className="size-[25px]" />
                </span>
                <h3 className="pb-3 text-[20px] font-bold leading-[26px] text-white">{c.title}</h3>
                <p className="pb-[22px] text-[15px] leading-6 text-[#c4d7d9]">{c.body}</p>
                <span className="mt-auto flex min-h-[36px] items-center justify-between gap-3 py-2 text-[13px] leading-[20.8px] text-[#9cdee0]">
                  <span className="max-w-[80px] font-bold">Explore pathway</span>
                  <span aria-hidden="true">↗</span>
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-5 rounded-[12px] border border-[rgba(117,166,172,0.47)] bg-[rgba(5,27,32,0.85)] p-[26px] shadow-[0px_18px_50px_0px_rgba(0,30,37,0.06)]">
          <div className="flex items-start justify-between gap-3 border-b border-[rgba(120,152,156,0.27)] pb-[18px]">
            <h3 className="text-[18px] font-bold leading-[23.4px] text-white">Notification record</h3>
            <span className="shrink-0 rounded-[20px] border border-[#719ea4] px-[9px] py-[3px] text-[10px] leading-4 tracking-[0.3px] text-[#a1dade]">Synthetic specimen</span>
          </div>
          <dl>
            {rows.map(([k, v], i) => (
              <div key={k} className={`grid grid-cols-1 gap-x-5 gap-y-1 py-4 sm:grid-cols-[0.8fr_1.2fr] ${i < rows.length - 1 ? "border-b border-[rgba(120,152,156,0.19)]" : ""}`}>
                <dt className="text-[13px] leading-[20.8px] text-[#9bc2c6]">{k}</dt>
                <dd className="text-[13px] leading-[20.8px] text-white">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
