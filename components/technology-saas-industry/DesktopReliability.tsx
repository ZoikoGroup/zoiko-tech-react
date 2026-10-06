import Image from "next/image";

const cards = [
  {
    title: "Service state",
    img: "/technology-saas-industry/desktop-laptop-analytics.webp",
    text: (
      <>
        Operational, degraded, incident, <br className="hidden xl:block" />
        unavailable or maintenance, only <br className="hidden xl:block" />
        from the authoritative Status or <br className="hidden xl:block" />
        product source.
      </>
    ),
  },
  {
    title: "Integration health",
    img: "/technology-saas-industry/desktop-neon-circuit-board.webp",
    text: (
      <>
        Source to target state, last <br className="hidden xl:block" />
        success, error and retry context. <br className="hidden xl:block" />
        No sensitive payloads in public <br className="hidden xl:block" />
        specimens.
      </>
    ),
  },
  {
    title: "Change / release",
    img: "/technology-saas-industry/desktop-code-editor-closeup.webp",
    text: (
      <>
        Changelog and release evidence <br className="hidden xl:block" />
        only where maintained. No <br className="hidden xl:block" />
        invented release cadence.
      </>
    ),
  },
  {
    title: "Observability",
    img: "/technology-saas-industry/desktop-circuit-board-chip.webp",
    text: (
      <>
        Metrics, logs, traces or health <br className="hidden xl:block" />
        evidence only where the <br className="hidden xl:block" />
        platform actually supports them.
      </>
    ),
  },
  {
    title: "Incident communication",
    img: "/technology-saas-industry/desktop-analytics-dashboard-screen.webp",
    text: (
      <>
        Platform-wide incident state <br className="hidden xl:block" />
        belongs to Status and Support, <br className="hidden xl:block" />
        not duplicated marketing copy.
      </>
    ),
  },
  {
    title: "Reliability claim",
    img: "/technology-saas-industry/desktop-earth-night-lights.webp",
    text: (
      <>
        No uptime percentage, SLA or <br className="hidden xl:block" />
        global availability claim without <br className="hidden xl:block" />
        approved evidence or contract <br className="hidden xl:block" />
        context.
      </>
    ),
  },
];

export default function Reliability() {
  return (
    <section className="w-full bg-white px-[130px] py-[96px]">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-3">
        <h2 className="font-sora text-[35.2px] font-bold leading-[40.48px] text-[#0a1416]">
          Reliability, status and observability
        </h2>
        <ul className="grid grid-cols-4 gap-[18px] pt-[10px]">
          {cards.map((c) => (
            <li
              key={c.title}
              className="flex min-w-0 flex-col overflow-hidden rounded-[14px] border border-solid border-[#d5e3e5] bg-white pb-5 shadow-[0px_12px_30px_0px_rgba(0,0,0,0.22),0px_3px_8px_0px_rgba(0,0,0,0.12)]"
            >
              <div
                className="relative h-[140px] w-full shrink-0 overflow-hidden"
                style={{ backgroundImage: "linear-gradient(135deg, #000000 0%, #247780 100%)" }}
              >
                <Image src={c.img} alt="" fill sizes="(min-width: 1280px) 280px, 22vw" className="object-cover" />
              </div>
              <div className="flex flex-col gap-[5.7px] px-5 pt-[10.3px]">
                <h3 className="font-sora text-[16.8px] font-bold leading-[19.32px] text-[#0a1416]">{c.title}</h3>
                <p className="font-inter text-[15.2px] leading-[24.32px] text-[#4d6468]">{c.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
