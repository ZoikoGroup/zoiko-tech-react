import { SectionHeader, ThumbCard, thumb, darkSectionBtn } from "./shared";

const platforms = [
  {
    img: thumb.zoikoAi,
    title: "Zoiko AI",
    desc: (
      <>
        Governed agentic intelligence
        <br />
        infrastructure covering agentic
        <br />
        intelligence, AI architecture,
        <br />
        domain AI, responsible AI and
        <br />
        governance.
      </>
    ),
  },
  {
    img: thumb.responsibleAi,
    title: "Responsible AI",
    desc: (
      <>
        The authoritative public trust
        <br />
        route for AI governance, safety
        <br />
        and accountability.
      </>
    ),
  },
  {
    img: thumb.aiAgentic,
    title: "AI & Agentic Automation",
    desc: (
      <>
        Adjacent solution when intent
        <br />
        shifts from governance to
        <br />
        deployment.
      </>
    ),
    pb: "pb-32",
  },
  {
    img: thumb.domainAi,
    title: "Relevant domain AI",
    desc: (
      <>
        Approved system and use-case
        <br />
        evidence with owner, maturity
        <br />
        and governance status.
      </>
    ),
    pb: "pb-32",
  },
  {
    img: thumb.trustCenter,
    title: (
      <>
        Trust Center / Security /
        <br />
        Privacy / Regulatory
      </>
    ),
    desc: (
      <>
        Linked authoritative evidence for
        <br />
        cross-cutting controls.
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
          subtitle={
            <>
              Evidence is source-grounded. There is no dedicated AI-governance
              product name, and none
              <br />
              is invented.
            </>
          }
        />
        <div className="self-stretch flex flex-wrap gap-4">
          {platforms.map((c, i) => (
            <div key={i} className="w-full sm:w-[286px]">
              <ThumbCard
                img={c.img}
                title={c.title}
                desc={c.desc}
                pb={c.pb ?? "pb-5"}
                shadow="shadow-[0px_8px_10px_0px_rgba(0,31,36,0.25)]"
                titleClass="zk-heading text-color-cyan-6 text-base font-bold leading-5"
              />
            </div>
          ))}
        </div>
        <div className="pt-2">
          <a href="#responsible-ai" className={darkSectionBtn}>
            Explore Responsible AI
          </a>
        </div>
      </div>
    </section>
  );
}
