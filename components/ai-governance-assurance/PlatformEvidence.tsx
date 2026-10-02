import { SectionHeader, ThumbCard, thumb, darkSectionBtn } from "./shared";

const platforms = [
  {
    img: thumb.zoikoAi,
    title: "Zoiko AI",
    desc: (
      <>
        Governed agentic intelligence<br />
        infrastructure covering agentic<br />
        intelligence, AI architecture,<br />
        domain AI, responsible AI and<br />
        governance.
      </>
    ),
  },
  {
    img: thumb.responsibleAi,
    title: "Responsible AI",
    desc: (
      <>
        The authoritative public trust<br />
        route for AI governance, safety<br />
        and accountability.
      </>
    ),
  },
  {
    img: thumb.aiAgentic,
    title: "AI & Agentic Automation",
    desc: (
      <>
        Adjacent solution when intent<br />
        shifts from governance to<br />
        deployment.
      </>
    ),
  },
  {
    img: thumb.domainAi,
    title: "Relevant domain AI",
    desc: (
      <>
        Approved system and use-<br />
        case evidence with owner,<br />
        maturity and governance<br />
        status.
      </>
    ),
  },
];

export default function PlatformEvidence() {
  return (
    <section className="w-full px-8 md:px-32 py-24 bg-color-white-solid">
      <div className="max-w-[1180px] mx-auto pb-3 flex flex-col gap-5">
        <SectionHeader
          title="Platform evidence"
          subtitle="Evidence is source-grounded. There is no dedicated AI-governance product name, and none is invented."
        />
        <div className="self-stretch grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {platforms.map((c, i) => (
            <ThumbCard
              key={i}
              img={c.img}
              title={c.title}
              desc={c.desc}
              pb="pb-[34px]"
              shadow="shadow-[0px_8px_10px_0px_rgba(0,31,36,0.25)]"
              titleClass="zk-heading text-color-cyan-6 text-base font-bold leading-5"
            />
          ))}
        </div>
        <div className="pt-2">
          <a
            href="#responsible-ai"
            className="inline-flex items-center min-h-12 px-6 bg-color-cyan-19 rounded-[10px] outline outline-2 -outline-offset-2 outline-color-cyan-19 zk-body text-color-white-solid text-base font-semibold hover:opacity-90 transition-opacity duration-200"
          >
            Explore Responsible AI
          </a>
        </div>
      </div>
    </section>
  );
}
