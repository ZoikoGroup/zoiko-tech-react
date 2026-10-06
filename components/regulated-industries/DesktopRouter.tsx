import Image from "next/image";
import DesktopLines from "./DesktopLines";

type RouteCard = {
  icon: string;
  title: string[];
  text: string;
  link: string[];
  href: string;
};

const row1: RouteCard[] = [
  {
    icon: "file-text",
    title: ["Regulatory obligations /", "controls"],
    text: "Connect obligations, control ownership, evidence and reviewable workflows.",
    link: ["Regulatory & Compliance"],
    href: "/solution-zoiko-regulatory-compliance",
  },
  {
    icon: "user",
    title: ["Identity / authority"],
    text: "Authenticate people and systems and control delegated authority.",
    link: ["Identity & Access"],
    href: "/solution-zoiko-identity-access",
  },
  {
    icon: "shield",
    title: ["Cybersecurity / resilience"],
    text: "Protect systems, users and continuity; understand incident and status evidence.",
    link: ["Cybersecurity & Resilience / Trust Center"],
    href: "/cybersecurity-resilience",
  },
];

const row2: RouteCard[] = [
  {
    icon: "cpu",
    title: ["AI governance / assurance"],
    text: "Govern AI systems, agents, evidence, human oversight and approvals.",
    link: ["AI Governance & Assurance /", "Responsible AI"],
    href: "/ai-governance-assurance",
  },
  {
    icon: "code",
    title: ["Developer / integration controls"],
    text: "Integrate regulated workflows without losing identity, provenance or observability.",
    link: ["Modernization & Integration /", "Developer Platform"],
    href: "/modernization-integration",
  },
  {
    icon: "lock",
    title: ["Privacy / data governance"],
    text: "Control purpose, access, minimization and approved data use.",
    link: ["Privacy / Trust Center"],
    href: "/privacy-policy",
  },
];

type Problem = { title: string[]; text: string; link: string; gap: string };

const problems: Problem[] = [
  {
    title: ["Obligations sit apart from", "operations"],
    text: "Compliance becomes spreadsheet-driven and hard to trace.",
    link: "Route: Regulatory & Compliance",
    gap: "gap-[6px]",
  },
  {
    title: ["Identity and authority are", "ambiguous"],
    text: "Regulated actions may need explicit person, system or representative authority.",
    link: "Route: Identity & Access",
    gap: "gap-[6px]",
  },
  {
    title: ["Security and privacy proof", "is disconnected"],
    text: "Controls are hard to verify without authoritative evidence.",
    link: "Route: Trust Center, Security, Privacy",
    gap: "gap-[5.9px]",
  },
  {
    title: ["AI raises new", "accountability questions"],
    text: "Agents and models may need human oversight, evaluation and bounded authority.",
    link: "Route: AI Governance & Assurance",
    gap: "gap-[6px]",
  },
];

const cardBase =
  "flex min-w-px flex-col items-start overflow-hidden rounded-[14px] border border-solid border-[rgba(127,208,217,0.35)] bg-[rgba(255,255,255,0.06)] p-[20px]";

function Arrow() {
  return (
    <Image
      src="/regulated-industries/desktop-router-arrow-right.svg"
      alt=""
      width={14}
      height={14}
      className="size-[14px] shrink-0"
    />
  );
}

function RouteCardView({ card, fixed }: { card: RouteCard; fixed?: boolean }) {
  return (
    <a
      href={card.href}
      className={`${cardBase} gap-[12px] ${fixed ? "h-[240px]" : "self-stretch"} flex-1`}
    >
      <span className="flex size-[40px] shrink-0 flex-col items-center justify-center rounded-[8px] border border-solid border-[rgba(127,208,217,0.35)] bg-[rgba(255,255,255,0.06)]">
        <Image
          src={`/regulated-industries/desktop-router-icon-${card.icon}.svg`}
          alt=""
          width={20}
          height={20}
          className="size-[20px]"
        />
      </span>
      <h3 className="w-full font-sora text-[16px] font-bold leading-[25.6px] text-white">
        <DesktopLines lines={card.title} />
      </h3>
      <p className="w-full font-inter text-[15.2px] font-normal leading-[24.32px] text-[#dcecee]">
        {card.text}
      </p>
      <span className="flex w-full items-center gap-[6px]">
        <span className="min-w-px flex-1 font-inter text-[13.1px] font-semibold leading-[20.99px] text-[#7fd0d9]">
          <DesktopLines lines={card.link} />
        </span>
        <Arrow />
      </span>
    </a>
  );
}

export default function DesktopRouter() {
  return (
    <section
      className="w-full px-[130px] py-[96px]"
      style={{
        backgroundImage:
          "linear-gradient(132.98792693206187deg, rgb(0, 0, 0) 0%, rgb(28, 92, 98) 100%)",
      }}
    >
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-start gap-[20.1px]">
        <h2 className="whitespace-nowrap font-sora text-[35.2px] font-bold leading-[40.48px] text-white">
          Where do you need to start?
        </h2>
        <p className="pb-[0.59px] font-inter text-[16px] font-normal leading-[25.6px] text-[#dcecee]">
          Six requirement areas, each routed to the right page.
        </p>
        <div className="flex w-full flex-col items-start">
          <div className="flex h-[264px] w-full items-start gap-[18px]">
            {row1.map((c) => (
              <RouteCardView key={c.title.join(" ")} card={c} fixed />
            ))}
          </div>
          <div className="flex w-full items-stretch gap-[18px]">
            {row2.map((c) => (
              <RouteCardView key={c.title.join(" ")} card={c} />
            ))}
          </div>
        </div>
        <h3 className="w-full pt-[17.9px] font-sora text-[16.8px] font-bold leading-[19.32px] text-white">
          Priority regulated-operating problems
        </h3>
        <ul className="flex w-full items-stretch justify-center gap-[18px] pt-[1.9px]">
          {problems.map((p) => (
            <li
              key={p.link}
              className={`${cardBase} ${p.gap} h-[208px] flex-1`}
            >
              <h3 className="w-full font-sora text-[16.8px] font-bold leading-[19.32px] text-white">
                <DesktopLines lines={p.title} />
              </h3>
              <p className="w-full font-inter text-[15.2px] font-normal leading-[24.32px] text-[#dcecee]">
                {p.text}
              </p>
              <span className="flex w-full items-center gap-[6px]">
                <span className="min-w-px flex-1 font-inter text-[13.1px] font-semibold leading-[20.99px] text-[#7fd0d9]">
                  {p.link}
                </span>
                <Arrow />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
