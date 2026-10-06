import Image from "next/image";

const cards = [
  {
    title: "Platform modernization",
    img: "/technology-saas-industry/tablet-matrix-code-rain.webp",
    body: ["Fragmented technical and operating", "stack, architecture, deployment,", "measurable approved result, evidence."],
  },
  {
    title: "Developer ecosystem",
    img: "/technology-saas-industry/tablet-laptop-analytics-dashboard.webp",
    body: ["API and developer-operating problem,", "developer, identity and observability", "architecture, approved outcome."],
  },
  {
    title: "AI governance",
    img: "/technology-saas-industry/tablet-circuit-board-chip.webp",
    body: ["AI or agent use case, governance,", "evaluation and human oversight,", "approved deployment and limitations."],
  },
  {
    title: "Business operations",
    img: "/technology-saas-industry/tablet-code-editor-screen.webp",
    body: ["HR, payroll, billing, workforce or", "communications fragmentation,", "integrated pattern, approved result."],
  },
];

export default function Practice() {
  return (
    <section className="w-full overflow-hidden bg-white px-[5%] pb-[85px] pt-[60px]">
      <div className="mx-auto flex w-full max-w-[960px] flex-col gap-[14.4px]">
        <h2 className="font-sora text-[clamp(22px,5vw,25.6px)] font-bold leading-[29.44px] text-[#0a1416]">
          Technology in practice
        </h2>
        <p className="font-inter text-[16px] font-normal leading-[25.6px] text-[#4d6468]">
          Proof appears only when it is evidence-backed and customer-approved.
        </p>
        <div className="grid grid-cols-1 gap-[18px] pt-[7.6px] sm:grid-cols-2">
          {cards.map((c) => (
            <div
              key={c.title}
              className="flex flex-col overflow-hidden rounded-[14px] border border-[#d5e3e5] bg-white shadow-[0px_12px_30px_0px_rgba(0,0,0,0.22),0px_3px_8px_0px_rgba(0,0,0,0.12)]"
            >
              <div
                className="relative h-[140px] w-full shrink-0 overflow-hidden"
                style={{ backgroundImage: "linear-gradient(135deg, rgb(0, 0, 0) 0%, rgb(36, 119, 128) 100%)" }}
              >
                <Image src={c.img} alt="" fill sizes="(min-width: 640px) 340px, 100vw" className="object-cover" />
              </div>
              <div className="flex flex-1 flex-col items-start px-[20px] pb-[22px] pt-[16px]">
                <h3 className="font-sora text-[16.8px] font-bold leading-[19.32px] text-[#0a1416]">{c.title}</h3>
                <p className="mb-[10px] mt-[6px] font-inter text-[15.2px] font-normal leading-[24.32px] text-[#4d6468]">
                  {c.body.map((line, i) => (
                    <span key={line}>
                      {i > 0 && " "}
                      {i > 0 && <br className="hidden md:block" />}
                      {line}
                    </span>
                  ))}
                </p>
                <span className="mt-auto inline-block rounded-full border border-[#247780] px-[10px] pb-[2.47px] pt-px font-inter text-[12.8px] font-semibold leading-[20.48px] text-[#247780]">
                  Evidence pending
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full rounded-br-[10px] rounded-tr-[10px] border-l-4 border-[#247780] bg-[#e6f2f4] px-[16px] pb-[12px] pt-[20.4px]">
          <p className="font-inter text-[14.7px] leading-[23.55px] text-[#4d6468]">
            <strong className="font-bold">Evidence rule.</strong> No placeholder customer logos, invented adoption counts, unsupported{" "}
            <br className="hidden md:block" />
            uptime or latency, fabricated cost savings, fake revenue lift, fake developer counts or{" "}
            <br className="hidden md:block" />
            anonymous “trusted by thousands” claims. Metrics come from the Evidence Registry, with{" "}
            <br className="hidden md:block" />
            customer permission.
          </p>
        </div>
      </div>
    </section>
  );
}
