import { SectionHeader, cardDark, gradDarkToTeal } from "./shared";

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
    title: "HR / payroll / billing",
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
    title: "Telecom operations",
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
    title: "AI adoption",
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
    title: "Modernization program",
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
      style={gradDarkToTeal}
    >
      <div className="max-w-[1180px] mx-auto flex flex-col gap-6">
        <SectionHeader
          light
          title="Where teams go next"
          subtitle="Routes follow the capability already in use, not generic cross-selling."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
          {routes.map((r, i) => (
            <div
              key={i}
              className={`h-full p-5 flex flex-col gap-2.5 ${cardDark}`}
            >
              <p className="zk-heading text-color-white-solid text-base font-bold leading-5">
                {r.title}
              </p>
              <p className="zk-body text-color-cyan-90 text-xs sm:text-sm font-normal leading-5">
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
