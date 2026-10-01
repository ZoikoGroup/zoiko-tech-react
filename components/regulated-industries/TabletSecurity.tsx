import TabletLines from "./TabletLines";

const cards = [
  { title: "Security", lines: ["Secure engineering, least privilege,", "threat prevention and authoritative", "security evidence."] },
  { title: "Privacy", lines: ["Purpose limitation, data minimization and", "privacy-conscious architecture."] },
  { title: "Reliability / resilience", lines: ["Observability, status communication,", "operational controls and recovery", "evidence."] },
  { title: "Incident / disclosure", lines: ["Authoritative Support, Status and", "Responsible Disclosure routes."] },
  { title: "Data / jurisdiction", lines: ["No sovereign, in-country or regulated-", "hosting claim without exact deployment", "evidence."] },
  { title: "Third parties", lines: ["Provider, subprocessor and integration", "evidence only from approved sources."] },
];

export default function TabletSecurity() {
  return (
    <section
      className="w-full overflow-hidden px-[5%] pb-[61.44px] pt-[60.43px]"
      style={{ backgroundImage: "linear-gradient(135.01687327418267deg, rgb(0, 0, 0) 0%, rgb(28, 92, 98) 100%)" }}
    >
      <div className="mx-auto flex w-full max-w-[960px] flex-col gap-5">
        <h2 className="font-sora text-[25.6px] font-bold leading-[29.44px] text-white">
          Security, privacy and resilience
        </h2>
        <ul className="grid grid-cols-1 gap-[18px] pt-[2px] sm:grid-cols-2">
          {cards.map((c) => (
            <li
              key={c.title}
              className="flex flex-col gap-[6px] overflow-hidden rounded-[14px] border border-[rgba(127,208,217,0.35)] bg-[rgba(255,255,255,0.06)] p-5"
            >
              <h3 className="font-sora text-[16.8px] font-bold leading-[19.32px] text-white">{c.title}</h3>
              <p className="font-inter text-[15.2px] font-normal leading-[24.32px] text-[#dcecee]">
                <TabletLines lines={c.lines} />
              </p>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-3 pb-3">
          <a
            href="#"
            className="flex min-h-[48px] items-center rounded-[10px] border-2 border-white bg-white px-6 font-inter text-[16px] font-semibold text-black max-sm:w-full"
          >
            Explore Cybersecurity &amp; Resilience
          </a>
          <a
            href="#"
            className="flex min-h-[48px] items-center rounded-[10px] border-2 border-[#7fd0d9] px-6 font-inter text-[16px] font-semibold text-white max-sm:w-full"
          >
            Trust Center
          </a>
        </div>
      </div>
    </section>
  );
}
