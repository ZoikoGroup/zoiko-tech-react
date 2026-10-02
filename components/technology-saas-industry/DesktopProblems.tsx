import Image from "next/image";
import Lines from "./DesktopLines";

const problems = [
  {
    title: ["Product stack and business", "operations evolve in silos"],
    body: [
      "Engineering, identity, billing,",
      "workforce and communications",
      "fragment as the company scales.",
    ],
    tags: ["Modernization & Integration ·", "Business Operations · Developer", "Platform"],
  },
  {
    title: ["AI capability outruns", "governance"],
    body: [
      "Models and agents move faster",
      "than approval, evidence, access",
      "and human-accountability",
      "controls.",
    ],
    tags: ["AI & Agentic Automation · AI", "Governance & Assurance ·", "Responsible AI"],
  },
  {
    title: ["Developer ecosystems lack", "a common operating layer"],
    body: [
      "APIs, SDKs, authentication,",
      "events, observability and support",
      "become inconsistent.",
    ],
    tags: ["Cloud & Developer Infrastructure ·", "Developer Platform"],
  },
  {
    title: ["Identity, security and", "reliability become", "enterprise blockers"],
    body: [
      "Enterprise buyers require",
      "deterministic access, evidence,",
      "status and resilience.",
    ],
    tags: ["Identity & Access · Cybersecurity &", "Resilience · Trust Center · Status"],
  },
];

export default function Problems() {
  return (
    <section
      className="w-full px-[130px] py-24"
      style={{
        backgroundImage: "linear-gradient(122.87deg, #000000 0%, #1c5c62 100%)",
      }}
    >
      <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-[21.99px]">
        <h2 className="font-sora max-w-[751.73px] text-[35.2px] font-bold leading-[40.48px] text-white">
          <Lines lines={["Priority problems for technology", "companies"]} />
        </h2>

        <ul className="flex w-full items-stretch gap-[18px]">
          {problems.map((p) => (
            <li
              key={p.title[0]}
              className="flex min-w-0 flex-1 flex-col gap-[6px] overflow-hidden rounded-[14px] border border-[#7fd0d9]/35 bg-white/[0.06] p-5"
            >
              <h3 className="font-sora text-[16.8px] font-bold leading-[19.32px] text-white">
                <Lines lines={p.title} />
              </h3>
              <p className="font-inter text-[15.2px] leading-[24.32px] text-[#dcecee]">
                <Lines lines={p.body} />
              </p>
              <small className="font-inter block pt-1 text-[13.1px] font-semibold leading-[20.99px] text-[#7fd0d9]">
                <Lines lines={p.tags} />
              </small>
            </li>
          ))}
        </ul>

        <div className="relative h-[280px] w-full">
          <Image
            src="/technology-saas-industry/desktop-technology-operating-layer-banner.webp"
            alt="Technology operating layer illustration"
            fill
            sizes="(min-width: 1440px) 1180px, 92vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
