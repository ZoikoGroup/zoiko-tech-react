import Image from "next/image";

type Card = {
  title: React.ReactNode;
  body: React.ReactNode;
  meta: React.ReactNode;
  image: string;
  imageAlt: string;
  href: string;
};

const cards: Card[] = [
  {
    title: "SaaS / enterprise software",
    body: (
      <>
        Connect product delivery to identity, <br className="hidden md:block" />
        billing, workforce, communications and <br className="hidden md:block" />
        governance without replacing <br className="hidden md:block" />
        everything.
      </>
    ),
    meta: (
      <>
        Technology &amp; SaaS Solutions / Business <br className="hidden md:block" />
        Operations
      </>
    ),
    image: "/technology-saas-industry/tablet-circuit-board-chip.webp",
    imageAlt: "Close-up of a circuit board with a processor chip",
    href: "/technology-saas",
  },
  {
    title: "AI / agentic product company",
    body: (
      <>
        Build AI and agent workflows with <br className="hidden md:block" />
        governance, evidence and human-
        <br className="hidden md:block" />
        accountability controls.
      </>
    ),
    meta: (
      <>
        AI &amp; Agentic Automation / AI Governance &amp; <br className="hidden md:block" />
        Assurance
      </>
    ),
    image: "/technology-saas-industry/tablet-analytics-dashboard-screen.webp",
    imageAlt: "Analytics dashboard on a dark screen",
    href: "/solution-zoiko-ai-agentic-automation",
  },
  {
    title: "Developer platform / API business",
    body: (
      <>
        Expose APIs, SDKs, events and <br className="hidden md:block" />
        developer operations on scalable shared <br className="hidden md:block" />
        foundations.
      </>
    ),
    meta: (
      <>
        Developer Platform / Cloud &amp; Developer <br className="hidden md:block" />
        Infrastructure
      </>
    ),
    image: "/technology-saas-industry/tablet-earth-night-lights.webp",
    imageAlt: "Earth at night with city lights",
    href: "/developer-portal",
  },
  {
    title: (
      <>
        Cloud / infrastructure / platform <br className="hidden md:block" />
        team
      </>
    ),
    body: (
      <>
        Connect infrastructure, identity, data, <br className="hidden md:block" />
        security, governance and observability.
      </>
    ),
    meta: "Technology / Cloud & Developer Infrastructure",
    image: "/technology-saas-industry/tablet-matrix-code-rain.webp",
    imageAlt: "Green digital code rain",
    href: "/solution-zoiko-cloud-developer-infrastructure",
  },
  {
    title: "Security / identity / trust",
    body: (
      <>
        Protect users, systems and delegated <br className="hidden md:block" />
        authority while preserving evidence.
      </>
    ),
    meta: (
      <>
        Identity &amp; Access / Cybersecurity &amp; Resilience <br className="hidden md:block" />
        / Trust Center
      </>
    ),
    image: "/technology-saas-industry/tablet-laptop-analytics-dashboard.webp",
    imageAlt: "Laptop showing an analytics dashboard",
    href: "/solution-zoiko-identity-access",
  },
  {
    title: "Company operations",
    body: (
      <>
        Run HR, payroll, billing, workforce, <br className="hidden md:block" />
        communications and recurring <br className="hidden md:block" />
        operations alongside the product stack.
      </>
    ),
    meta: (
      <>
        Business Operations / HR, Payroll &amp; Revenue <br className="hidden md:block" />
        Operations
      </>
    ),
    image: "/technology-saas-industry/tablet-glowing-circuit-board.webp",
    imageAlt: "Glowing teal circuit board",
    href: "/solution-zoiko-hr-payroll-revenue-operations",
  },
];

export default function Router() {
  return (
    <section className="w-full overflow-hidden bg-white px-[5%] pb-[61.45px] pt-[48px] md:pt-[60.645px]">
      <div className="mx-auto flex w-full max-w-[960px] flex-col gap-[14.4px]">
        <h2 className="font-sora text-[22px] font-bold leading-[1.15] text-[#0a1416] sm:text-[25.6px] sm:leading-[29.44px]">
          What kind of technology company are <br className="hidden md:block" />
          you?
        </h2>
        <p className="font-inter text-[16px] leading-[25.6px] text-[#4d6468]">
          Six pathways. Pick the one closest to how you build and operate.
        </p>
        <ul className="grid grid-cols-1 gap-[18px] pt-[7.6px] sm:grid-cols-2">
          {cards.map((card, i) => (
            <li key={i} className="flex">
              <a
                href={card.href}
                className="flex w-full flex-col overflow-hidden rounded-[14px] border border-[#d5e3e5] bg-white pb-5 shadow-[0px_12px_30px_0px_rgba(0,0,0,0.22),0px_3px_8px_0px_rgba(0,0,0,0.12)]"
              >
                <div
                  className="relative h-[140px] w-full shrink-0 overflow-hidden"
                  style={{
                    backgroundImage: "linear-gradient(135deg, rgb(0, 0, 0) 0%, rgb(36, 119, 128) 100%)",
                  }}
                >
                  <Image
                    src={card.image}
                    alt={card.imageAlt}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-[3.3px] px-5">
                  <h3 className="pt-[12.7px] font-sora text-[16px] font-bold leading-[25.6px] text-[#0a1416]">
                    {card.title}
                  </h3>
                  <p className="font-inter text-[15.2px] leading-[24.32px] text-[#4d6468]">{card.body}</p>
                  <small className="block pt-[7px] font-inter text-[13.1px] font-semibold leading-[20.99px] text-[#247780]">
                    {card.meta}
                  </small>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
