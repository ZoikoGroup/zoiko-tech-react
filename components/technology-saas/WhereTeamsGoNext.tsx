import { SectionHeader, cardDark } from "./shared";

const routes = [
  {
    title: (
      <>
        Developer / integration
        <br />
        foundation
      </>
    ),
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
    title: <>HR / payroll / billing</>,
    desc: (
      <>
        Workforce &amp; Productivity,
        <br />
        Communications &amp; Collaboration,
        <br />
        Regulatory &amp; Compliance.
      </>
    ),
  },
  {
    title: <>Telecom operations</>,
    desc: (
      <>
        Communications &amp; Collaboration,
        <br />
        Cloud &amp; Developer
        <br />
        Infrastructure, AI Governance &amp;
        <br />
        Assurance.
      </>
    ),
  },
  {
    title: <>AI adoption</>,
    desc: (
      <>
        AI Governance &amp; Assurance,
        <br />
        Cybersecurity &amp; Resilience,
        <br />
        Regulatory &amp; Compliance.
      </>
    ),
  },
  {
    title: <>Modernization program</>,
    desc: (
      <>
        Technology &amp; SaaS, then
        <br />
        industry-specific solutions, then
        <br />
        platform evaluation.
      </>
    ),
  },
];

export default function WhereTeamsGoNext() {
  return (
    <section
      className="w-full px-8 md:px-32 py-24"
      style={{
        backgroundImage:
          "linear-gradient(157deg, #010f14 0%, #123f44 100%)",
      }}
    >
      <div className="max-w-[1180px] mx-auto flex flex-col gap-5">
        <SectionHeader
          light
          title="Where teams go next"
          subtitle="Routes follow the capability already in use, not generic cross-selling."
        />
        <div className="self-stretch flex flex-col">
          {routes.map((r, i) => (
            <div
              key={i}
              className={`self-stretch px-5 py-5 flex flex-col gap-[3.31px] ${cardDark}`}
            >
              <p className="self-stretch zk-body text-color-white-solid text-base font-bold leading-6">
                {r.title}
              </p>
              <p className="zk-body text-color-cyan-90 text-base font-normal leading-6">
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
