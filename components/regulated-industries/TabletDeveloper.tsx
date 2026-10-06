import TabletLines from "./TabletLines";

const cards = [
  { title: "Build", lines: ["Developer Platform, approved APIs,", "SDKs, model APIs, webhooks and", "events, authentication."] },
  { title: "Learn", lines: ["Documentation, API reference,", "quickstarts, architecture guides."] },
  { title: "Test", lines: ["Sandbox, samples and reference", "implementations only when external", "self-service is live."] },
  { title: "Operate", lines: ["Observability, status, usage and", "metering where available, changelog,", "developer support."] },
  { title: "Regulated integration", lines: ["Identity, evidence, control, workflow and", "system-of-record integrations only when", "current documentation supports them."] },
];

export default function TabletDeveloper() {
  return (
    <section
      className="w-full overflow-hidden px-[5%] pb-[61.43px] pt-[60.44px]"
      style={{ backgroundImage: "linear-gradient(135.026deg, rgb(0, 0, 0) 0%, rgb(28, 92, 98) 100%)" }}
    >
      <div className="mx-auto flex w-full max-w-[960px] flex-col gap-[22px]">
        <h2 className="font-sora text-[clamp(21px,3.33vw,25.6px)] font-bold leading-[29.44px] text-white">
          Integration and developer layer
        </h2>
        <ul className="grid grid-cols-1 gap-[18px] sm:grid-cols-2">
          {cards.map((c) => (
            <li
              key={c.title}
              className="flex flex-col gap-[6px] overflow-hidden rounded-[14px] border border-[rgba(127,208,217,0.35)] bg-[rgba(255,255,255,0.06)] p-[20px]"
            >
              <h3 className="font-sora text-[16.8px] font-bold leading-[19.32px] text-white">{c.title}</h3>
              <p className="font-inter text-[15.2px] font-normal leading-[24.32px] text-[#dcecee]">
                <TabletLines lines={c.lines} />
              </p>
            </li>
          ))}
        </ul>
        <div className="w-full rounded-br-[10px] rounded-tr-[10px] border-l-4 border-[#7fd0d9] bg-[rgba(0,0,0,0.35)] px-[16px] pb-[12px] pt-[12.82px]">
          <p className="font-inter text-[14.7px] font-normal leading-[23.55px] text-[#dcecee]">
            <TabletLines
              lines={[
                "No integrations are implied with regulators, government registries, KYC / AML or sanctions",
                "providers, healthcare exchanges, banking rails, tax authorities, justice systems, certification",
                "bodies or regulated cloud frameworks unless current approved documentation supports",
                "them.",
              ]}
            />
          </p>
        </div>
        <div className="flex flex-wrap gap-x-[12px] gap-y-[12px] pt-[2px]">
          <a
            href="/developer-portal"
            className="flex min-h-[48px] items-center rounded-[10px] border-2 border-white bg-white px-[24px] font-inter text-[16px] font-semibold text-black max-sm:w-full max-sm:justify-center"
          >
            Explore Developer Platform
          </a>
          <a
            href="#"
            className="flex min-h-[48px] items-center rounded-[10px] border-2 border-[#7fd0d9] px-[24px] font-inter text-[16px] font-semibold text-white max-sm:w-full max-sm:justify-center"
          >
            Documentation
          </a>
        </div>
      </div>
    </section>
  );
}
