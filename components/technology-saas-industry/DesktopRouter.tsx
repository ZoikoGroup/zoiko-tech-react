import Image from "next/image";
import Lines from "./DesktopLines";

const IMG = "/technology-saas-industry/desktop";

const pathways = [
  {
    href: "/technology-saas",
    image: `${IMG}-circuit-board-chip.webp`,
    alt: "Circuit board with processor",
    title: ["SaaS / enterprise software"],
    body: [
      "Connect product delivery to",
      "identity, billing, workforce,",
      "communications and governance",
      "without replacing everything.",
    ],
    links: ["Technology & SaaS Solutions /", "Business Operations"],
  },
  {
    href: "/solution-zoiko-ai-agentic-automation",
    image: `${IMG}-analytics-dashboard-screen.webp`,
    alt: "Analytics dashboard on a dark screen",
    title: ["AI / agentic product", "company"],
    body: [
      "Build AI and agent workflows",
      "with governance, evidence and",
      "human-accountability controls.",
    ],
    links: ["AI & Agentic Automation / AI", "Governance & Assurance"],
  },
  {
    href: "/developer-portal",
    image: `${IMG}-earth-night-lights.webp`,
    alt: "Earth at night with glowing city lights",
    title: ["Developer platform / API", "business"],
    body: [
      "Expose APIs, SDKs, events and",
      "developer operations on scalable",
      "shared foundations.",
    ],
    links: ["Developer Platform / Cloud &", "Developer Infrastructure"],
  },
  {
    href: "/solution-zoiko-cloud-developer-infrastructure",
    image: `${IMG}-matrix-code-rain.webp`,
    alt: "Streams of green code",
    title: ["Cloud / infrastructure /", "platform team"],
    body: [
      "Connect infrastructure, identity,",
      "data, security, governance and",
      "observability.",
    ],
    links: ["Technology / Cloud & Developer", "Infrastructure"],
  },
  {
    href: "/solution-zoiko-identity-access",
    image: `${IMG}-laptop-analytics.webp`,
    alt: "Laptop showing an analytics dashboard",
    title: ["Security / identity / trust"],
    body: [
      "Protect users, systems and",
      "delegated authority while",
      "preserving evidence.",
    ],
    links: ["Identity & Access / Cybersecurity &", "Resilience / Trust Center"],
  },
  {
    href: "/solution-zoiko-hr-payroll-revenue-operations",
    image: `${IMG}-neon-circuit-board.webp`,
    alt: "Glowing neon circuit board",
    title: ["Company operations"],
    body: [
      "Run HR, payroll, billing,",
      "workforce, communications and",
      "recurring operations alongside",
      "the product stack.",
    ],
    links: ["Business Operations / HR, Payroll &", "Revenue Operations"],
  },
];

export default function Router() {
  return (
    <section
      id="technology-pathways"
      className="w-full bg-white px-[130px] py-24"
    >
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center gap-[20.1px]">
        <h2 className="font-sora text-center text-[35.2px] font-bold leading-[40.48px] text-[#0a1416]">
          What kind of technology company are you?
        </h2>
        <p className="font-inter text-center text-base leading-[25.6px] text-[#4d6468]">
          Six pathways. Pick the one closest to how you build and operate.
        </p>

        <ul className="flex w-full flex-wrap justify-center gap-[18px] pt-[1.91px]">
          {pathways.map((p) => (
            <li
              key={p.href + p.title[0]}
              className="flex w-[calc((100%-54px)/4)]"
            >
              <a
                href={p.href}
                className="flex w-full flex-col overflow-hidden rounded-[14px] border border-[#d5e3e5] bg-white px-5 pb-5 shadow-[0px_12px_30px_0px_rgba(0,0,0,0.22),0px_3px_8px_0px_rgba(0,0,0,0.12)]"
              >
                <div
                  className="relative -mx-5 h-[140px] shrink-0 overflow-hidden"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, #000000 0%, #247780 100%)",
                  }}
                >
                  <Image
                    src={p.image}
                    alt={p.alt}
                    fill
                    sizes="(min-width: 1440px) 282px, 24vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="font-sora pt-3 text-base font-bold leading-[25.6px] text-[#0a1416]">
                  <Lines lines={p.title} />
                </h3>
                <p className="font-inter mt-[3px] text-[15.2px] leading-[24.32px] text-[#4d6468]">
                  <Lines lines={p.body} />
                </p>
                <small className="font-inter mt-[7px] block text-[13.1px] font-semibold leading-[20.99px] text-[#247780]">
                  <Lines lines={p.links} />
                </small>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
