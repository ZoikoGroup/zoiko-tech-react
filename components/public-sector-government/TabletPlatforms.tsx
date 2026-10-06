const cards = [
  { title: "Zoiko Access", body: "Industry solution when ready.", maturity: "Build", boundary: "Public-sector scope, operator and public destination require approval." },
  { title: "Zoiko iD", body: "Digital identity and access technology evidence when ready.", maturity: "Build", boundary: "Dedicated product evidence is required for supported methods." },
  { title: "Zoiko Assure", body: "Assurance and regulatory technology evidence when ready.", maturity: "Build", boundary: "Only approved governance, compliance and evidence scope." },
  { title: "Developer Platform", body: "APIs, SDKs, tooling and ecosystem services when ready.", maturity: "Build", boundary: "Destination and external access require approval." },
  { title: "Governed AI architecture", body: "Intelligence, agents and knowledge with Responsible AI governance.", maturity: "Use-case approval required", boundary: "Only approved, bounded public-service use cases." },
  { title: "Communications platforms", body: "Zoiko Sema / Zoiko Local for adjacent approved scenarios.", maturity: "Scope confirmation required", boundary: "No government authorization is implied by association." },
];

export default function TabletPlatforms() {
  return (
    <section
      id="platforms-t"
      className="w-full overflow-hidden pb-[72px] pt-[64px] font-poppins md:pb-[94px] md:pt-[93px] px-6 md:px-12 lg:px-20"
      style={{ backgroundImage: "linear-gradient(119.67deg, rgb(0, 0, 0) 0%, rgb(10, 37, 40) 48%, rgb(36, 119, 128) 100%)" }}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-9">
        <div className="flex max-w-[820px] flex-col gap-[15px]">
          <p className="text-[12px] font-bold leading-[19.2px] tracking-[2px] text-[#86d4d8]">12 / PLATFORM &amp; TECHNOLOGY EVIDENCE</p>
          <h2 className="text-[24px] font-bold leading-[28px] tracking-[-1.3px] text-white sm:text-[29px] sm:leading-[33.35px]">
            Readiness is part of the story.
          </h2>
          <p className="max-w-[760px] pt-[4.3px] text-[16px] leading-[25.6px] text-[#c4d7d9]">
            Product names do not substitute for maturity, operator, deployment or evidence records. States below reflect the supplied wireframe.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {cards.map((c) => (
            <li key={c.title} className="flex">
              <article className="flex w-full flex-col rounded-[10px] border border-[rgba(255,255,255,0.19)] bg-[rgba(255,255,255,0.04)] p-7">
                <span className="mb-[22px] flex size-[46px] items-center justify-center rounded-[10px] bg-[rgba(98,198,202,0.1)]">
                  <img src="/public-sector-government/tablet-icon-database-alt.svg" alt="" className="size-[25px]" />
                </span>
                <h3 className="pb-3 text-[20px] font-bold leading-[26px] text-white">{c.title}</h3>
                <p className="pb-[22px] text-[15px] leading-6 text-[#c4d7d9]">{c.body}</p>
                <dl className="mt-auto border-t border-[rgba(114,157,164,0.25)] py-[15px] text-[12px] leading-[19.2px]">
                  <dt className="text-[#a6d7da]">Wireframe maturity / scope</dt>
                  <dd className="text-white">{c.maturity}</dd>
                  <dt className="pt-3 text-[#a6d7da]">Operator / jurisdiction</dt>
                  <dd className="text-white">Requires confirmation</dd>
                  <dt className="pt-3 text-[#a6d7da]">Publication boundary</dt>
                  <dd className="text-white">{c.boundary}</dd>
                </dl>
                <a href="/contact-us" className="flex min-h-[36px] items-start py-2 text-[13px] font-bold leading-[20.8px] text-[#9cdee0]">
                  Discuss technology readiness ↗
                </a>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
