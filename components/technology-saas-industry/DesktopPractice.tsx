import Image from "next/image";

const cards = [
  {
    title: "Platform modernization",
    img: "/technology-saas-industry/desktop-matrix-code-rain.webp",
    text: (
      <>
        Fragmented technical and <br className="hidden xl:block" />
        operating stack, architecture, <br className="hidden xl:block" />
        deployment, measurable <br className="hidden xl:block" />
        approved result, evidence.
      </>
    ),
  },
  {
    title: "Developer ecosystem",
    img: "/technology-saas-industry/desktop-laptop-analytics.webp",
    text: (
      <>
        API and developer-operating <br className="hidden xl:block" />
        problem, developer, identity and <br className="hidden xl:block" />
        observability architecture, <br className="hidden xl:block" />
        approved outcome.
      </>
    ),
  },
  {
    title: "AI governance",
    img: "/technology-saas-industry/desktop-neon-circuit-board.webp",
    text: (
      <>
        AI or agent use case, <br className="hidden xl:block" />
        governance, evaluation and <br className="hidden xl:block" />
        human oversight, approved <br className="hidden xl:block" />
        deployment and limitations.
      </>
    ),
  },
  {
    title: "Business operations",
    img: "/technology-saas-industry/desktop-code-editor-closeup.webp",
    text: (
      <>
        HR, payroll, billing, workforce or <br className="hidden xl:block" />
        communications fragmentation, <br className="hidden xl:block" />
        integrated pattern, approved <br className="hidden xl:block" />
        result.
      </>
    ),
  },
];

export default function Practice() {
  return (
    <section className="w-full bg-white px-[130px] pb-[120px] pt-px">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-[20.1px]">
        <h2 className="font-sora text-[35.2px] font-bold leading-[40.48px] text-[#0a1416]">Technology in practice</h2>
        <p className="font-inter text-[16px] leading-[25.6px] text-[#4d6468]">
          Proof appears only when it is evidence-backed and customer-approved.
        </p>
        <ul className="grid grid-cols-4 gap-[18px] pt-[1.9px]">
          {cards.map((c) => (
            <li
              key={c.title}
              className="flex min-w-0 flex-col overflow-hidden rounded-[14px] border border-solid border-[#d5e3e5] bg-white pb-[22px] shadow-[0px_12px_30px_0px_rgba(0,0,0,0.22),0px_3px_8px_0px_rgba(0,0,0,0.12)]"
            >
              <div
                className="relative h-[140px] w-full shrink-0 overflow-hidden"
                style={{ backgroundImage: "linear-gradient(135deg, #000000 0%, #247780 100%)" }}
              >
                <Image src={c.img} alt="" fill sizes="(min-width: 1280px) 280px, 22vw" className="object-cover" />
              </div>
              <div className="flex flex-1 flex-col px-5 pt-4">
                <h3 className="font-sora text-[16.8px] font-bold leading-[19.32px] text-[#0a1416]">{c.title}</h3>
                <p className="mb-[11px] mt-[5.7px] font-inter text-[15.2px] leading-[24.32px] text-[#4d6468]">{c.text}</p>
                <span className="mt-auto inline-flex w-fit self-start rounded-full border border-solid border-[#247780] px-[10px] pb-[2.47px] pt-px font-inter text-[12.8px] font-semibold leading-[20.48px] text-[#247780]">
                  Evidence pending
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
