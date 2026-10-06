import { SectionHeader, ThumbCard, thumb, darkSectionBtn } from "./shared";

const routes = [
  {
    img: thumb.routeGovernance,
    title: "AI Governance & Assurance",
    desc: (
      <>
        AI &amp; Agentic Automation, Identity
        <br />
        &amp; Access, Cybersecurity &amp;
        <br />
        Resilience.
      </>
    ),
  },
  {
    img: thumb.routeDeployment,
    title: "AI / agent deployment",
    desc: (
      <>
        Governance first, then
        <br />
        Regulatory &amp; Compliance where
        <br />
        applicable, then the domain or
        <br />
        industry solution.
      </>
    ),
  },
  {
    img: thumb.routeRegulated,
    title: "Regulated AI",
    desc: (
      <>
        Regulatory &amp; Compliance, AI
        <br />
        Governance &amp; Assurance,
        <br />
        relevant domain AI.
      </>
    ),
  },
  {
    img: thumb.routeDeveloper,
    title: "Developer / model platform",
    desc: (
      <>
        Cloud &amp; Developer Infrastructure,
        <br />
        AI Governance &amp; Assurance, AI &amp;
        <br />
        Agentic Automation.
      </>
    ),
  },
  {
    img: thumb.routeSaas,
    title: (
      <>
        Enterprise SaaS with
        <br />
        embedded AI
      </>
    ),
    desc: (
      <>
        Technology &amp; SaaS, AI
        <br />
        Governance &amp; Assurance,
        <br />
        platform-specific admin controls.
      </>
    ),
  },
];

export default function WhereTeamsGoNext() {
  return (
    <section className="w-full px-8 md:px-32 py-24 bg-color-white-solid">
      <div className="max-w-[1180px] mx-auto pb-3 flex flex-col gap-5">
        <SectionHeader
          title="Where teams go next"
          subtitle={
            <>
              Routes are contextual. Nothing promotional appears while a
              reviewer handles an incident,
              <br />
              high-impact approval, restricted use or governance exception.
            </>
          }
        />
        <div className="self-stretch grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {routes.map((r, i) => (
            <ThumbCard
              key={i}
              img={r.img}
              title={r.title}
              desc={r.desc}
              pb="pb-5"
              shadow="shadow-[0px_8px_18px_0px_rgba(0,31,36,0.32)]"
              titleClass="zk-body text-color-cyan-6 text-base font-bold leading-6"
            />
          ))}
        </div>
        <div className="pt-2">
          <a
            href="#contact-sales"
            className="inline-flex items-center min-h-12 px-6 bg-color-cyan-19 rounded-[10px] outline outline-2 -outline-offset-2 outline-color-cyan-19 zk-body text-color-white-solid text-base font-semibold hover:opacity-90 transition-opacity duration-200"
          >
            Explore adjacent solutions
          </a>
        </div>
      </div>
    </section>
  );
}
