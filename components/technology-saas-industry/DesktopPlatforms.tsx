import Image from "next/image";

const cards = [
  {
    title: "Zoiko AI",
    img: "/technology-saas-industry/desktop-matrix-code-rain.webp",
    span: "col-span-3",
    text: (
      <>
        Governed agentic intelligence <br className="hidden xl:block" />
        infrastructure.
      </>
    ),
  },
  {
    title: "Developer Platform",
    img: "/technology-saas-industry/desktop-laptop-analytics.webp",
    span: "col-span-3",
    text: (
      <>
        APIs, SDKs, tooling and <br className="hidden xl:block" />
        ecosystem services.
      </>
    ),
  },
  {
    title: "Zoiko Cloud",
    img: "/technology-saas-industry/desktop-neon-circuit-board.webp",
    span: "col-span-3",
    text: (
      <>
        Infrastructure for Zoiko platforms <br className="hidden xl:block" />
        and regulated workloads.
      </>
    ),
  },
  {
    title: "CoreX",
    img: "/technology-saas-industry/desktop-code-editor-closeup.webp",
    span: "col-span-3",
    text: (
      <>
        Shared control, evidence and <br className="hidden xl:block" />
        transaction infrastructure where <br className="hidden xl:block" />
        customer-facing.
      </>
    ),
  },
  {
    title: "ZoikoSuite",
    img: "/technology-saas-industry/desktop-circuit-board-chip.webp",
    span: "col-span-4",
    text: (
      <>
        Governed business-operations <br className="hidden xl:block" />
        evidence candidate for broad <br className="hidden xl:block" />
        enterprise context.
      </>
    ),
  },
  {
    title: "Zoiko One",
    img: "/technology-saas-industry/desktop-analytics-dashboard-screen.webp",
    span: "col-span-4",
    text: (
      <>
        Enterprise and unified operating <br className="hidden xl:block" />
        evidence candidate.
      </>
    ),
  },
  {
    title: "Live operations platforms",
    img: "/technology-saas-industry/desktop-earth-night-lights.webp",
    span: "col-span-4",
    text: (
      <>
        ZoikoTime, Zoiko HR, Zoiko Payroll, Zoiko Billing, Zoiko Sema, ZoikoVertex and other{" "}
        <br className="hidden xl:block" />
        relevant live platforms.
      </>
    ),
    note: (
      <>
        Approved descriptors only. No <br className="hidden xl:block" />
        universal stack adoption implied.
      </>
    ),
  },
];

export default function Platforms() {
  return (
    <section className="w-full bg-white px-[130px] pb-[120px] pt-[96px]">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-[19.9px]">
        <h2 className="font-sora text-[35.2px] font-bold leading-[40.48px] text-[#0a1416]">Platform evidence</h2>
        <p className="font-inter text-[16px] leading-[25.6px] text-[#4d6468]">
          A relevant platform is not automatically a public-ready platform. Each card shows its{" "}
          <br className="hidden xl:block" />
          publication gate.
        </p>
        <ul className="grid grid-cols-12 gap-[18px] pt-[2px]">
          {cards.map((c) => (
            <li
              key={c.title}
              className={`${c.span} flex min-w-0 flex-col overflow-hidden rounded-[14px] border border-solid border-[#d5e3e5] bg-white pb-5 shadow-[0px_12px_30px_0px_rgba(0,0,0,0.22),0px_3px_8px_0px_rgba(0,0,0,0.12)]`}
            >
              <div
                className="relative h-[140px] w-full shrink-0 overflow-hidden"
                style={{ backgroundImage: "linear-gradient(135deg, #000000 0%, #247780 100%)" }}
              >
                <Image src={c.img} alt="" fill sizes="(min-width: 1280px) 380px, 30vw" className="object-cover" />
              </div>
              <div className="flex flex-col gap-[6px] px-5 pt-4">
                <h3 className="font-sora text-[16.8px] font-bold leading-[19.32px] text-[#0a1416]">{c.title}</h3>
                <p className="font-inter text-[15.2px] leading-[24.32px] text-[#4d6468]">{c.text}</p>
                {c.note && (
                  <small className="block pt-[4.3px] font-inter text-[13.1px] font-semibold leading-[20.99px] text-[#247780]">
                    {c.note}
                  </small>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
