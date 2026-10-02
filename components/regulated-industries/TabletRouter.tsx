import TabletLines from "./TabletLines";

const card =
  "flex flex-col overflow-hidden rounded-[14px] border border-[rgba(127,208,217,0.35)] bg-[rgba(255,255,255,0.06)] p-[20px]";
const title = "font-sora text-[16px] font-bold leading-[25.6px] text-white";
const h3 = "font-sora text-[16.8px] font-bold leading-[19.32px] text-white";
const desc = "font-inter text-[15.2px] font-normal leading-[24.32px] text-[#dcecee]";
const small = "font-inter text-[13.1px] font-semibold leading-[20.99px] text-[#7fd0d9]";

const areas: { href: string; title: string; lines: string[]; tag: string; tagLines?: string[] }[] = [
  { href: "/solution-zoiko-regulatory-compliance", title: "Regulatory obligations / controls", lines: ["Connect obligations, control ownership,", "evidence and reviewable workflows."], tag: "Regulatory & Compliance" },
  { href: "/solution-zoiko-identity-access", title: "Identity / authority", lines: ["Authenticate people and systems and", "control delegated authority."], tag: "Identity & Access" },
  { href: "/cybersecurity-resilience", title: "Cybersecurity / resilience", lines: ["Protect systems, users and continuity;", "understand incident and status", "evidence."], tag: "Cybersecurity & Resilience / Trust Center" },
  { href: "#", title: "Privacy / data governance", lines: ["Control purpose, access, minimization", "and approved data use."], tag: "Privacy / Trust Center" },
  { href: "/ai-governance-assurance", title: "AI governance / assurance", lines: ["Govern AI systems, agents, evidence,", "human oversight and approvals."], tag: "AI Governance & Assurance / Responsible AI" },
  { href: "/modernization-integration", title: "Developer / integration controls", lines: ["Integrate regulated workflows without", "losing identity, provenance or", "observability."], tag: "Modernization & Integration / Developer Platform", tagLines: ["Modernization & Integration / Developer", "Platform"] },
];

const problems = [
  { title: ["Obligations sit apart from", "operations"], lines: ["Compliance becomes spreadsheet-", "driven and hard to trace."], route: "Route: Regulatory & Compliance" },
  { title: ["Identity and authority are", "ambiguous"], lines: ["Regulated actions may need explicit", "person, system or representative", "authority."], route: "Route: Identity & Access" },
  { title: ["Security and privacy proof is", "disconnected"], lines: ["Controls are hard to verify without", "authoritative evidence."], route: "Route: Trust Center, Security, Privacy" },
  { title: ["AI raises new accountability", "questions"], lines: ["Agents and models may need human", "oversight, evaluation and bounded", "authority."], route: "Route: AI Governance & Assurance" },
];

export default function TabletRouter() {
  return (
    <section
      className="w-full overflow-hidden px-[5%] pb-[61px] pt-[60px]"
      style={{ backgroundImage: "linear-gradient(135deg, #000000 0%, #1c5c62 100%)" }}
    >
      <div className="mx-auto w-full max-w-[960px]">
        <h2 className="font-sora text-[clamp(22px,3.33vw,25.6px)] font-bold leading-[1.15] text-white">
          Where do you need to start?
        </h2>
        <p className="mt-[14.4px] pb-[0.59px] font-inter text-[16px] font-normal leading-[25.6px] text-[#dcecee]">
          Six requirement areas, each routed to the right page.
        </p>

        <ul className="mt-[14.4px] grid grid-cols-1 gap-[18px] pt-[7.6px] sm:grid-cols-2">
          {areas.map((a) => (
            <li key={a.title} className="flex">
              <a href={a.href} className={`${card} w-full gap-[3.2px]`}>
                <b className={title}>{a.title}</b>
                <span className={desc}>
                  <TabletLines lines={a.lines} />
                </span>
                <small className={`${small} pt-[6.8px]`}>
                  {a.tagLines ? <TabletLines lines={a.tagLines} /> : a.tag}
                </small>
              </a>
            </li>
          ))}
        </ul>

        <h3 className={`${h3} mt-[14.4px] pt-[23.6px]`}>Priority regulated-operating problems</h3>

        <ul className="mt-[14.4px] grid grid-cols-1 gap-[18px] pt-[7.6px] sm:grid-cols-2">
          {problems.map((p) => (
            <li key={p.route} className={`${card} gap-[6px]`}>
              <h3 className={h3}>
                <TabletLines lines={p.title} />
              </h3>
              <p className={desc}>
                <TabletLines lines={p.lines} />
              </p>
              <small className={`${small} pt-[4px]`}>{p.route}</small>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
