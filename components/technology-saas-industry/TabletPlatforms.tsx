import Image from "next/image";

const CARDS: {
  title: string;
  img: string;
  lines: string[];
  tag: string;
}[] = [
  {
    title: "Zoiko AI",
    img: "/technology-saas-industry/tablet-matrix-code-rain.webp",
    lines: ["Governed agentic intelligence", "infrastructure."],
    tag: "Finish · domain-stack landing page",
  },
  {
    title: "Developer Platform",
    img: "/technology-saas-industry/tablet-laptop-analytics-dashboard.webp",
    lines: ["APIs, SDKs, tooling and ecosystem", "services."],
    tag: "Build · when ready",
  },
  {
    title: "Zoiko Cloud",
    img: "/technology-saas-industry/tablet-glowing-circuit-board.webp",
    lines: ["Infrastructure for Zoiko platforms and", "regulated workloads."],
    tag: "Finish · directory only when approved",
  },
  {
    title: "CoreX",
    img: "/technology-saas-industry/tablet-code-editor-screen.webp",
    lines: [
      "Shared control, evidence and",
      "transaction infrastructure where",
      "customer-facing.",
    ],
    tag: "Build · public only if approved",
  },
  {
    title: "ZoikoSuite",
    img: "/technology-saas-industry/tablet-circuit-board-chip.webp",
    lines: [
      "Governed business-operations evidence",
      "candidate for broad enterprise context.",
    ],
    tag: "Finish · directory only when approved",
  },
  {
    title: "Zoiko One",
    img: "/technology-saas-industry/tablet-analytics-dashboard-screen.webp",
    lines: ["Enterprise and unified operating", "evidence candidate."],
    tag: "Finish · directory only when approved",
  },
];

function Lines({ lines }: { lines: string[] }) {
  return (
    <>
      {lines.map((line, i) => (
        <span key={i}>
          {line}
          {i < lines.length - 1 && (
            <>
              {" "}
              <br className="hidden md:block" />
            </>
          )}
        </span>
      ))}
    </>
  );
}

const cardClass =
  "flex flex-col overflow-hidden rounded-[14px] border border-[#d5e3e5] bg-white shadow-[0px_12px_30px_0px_rgba(0,0,0,0.22),0px_3px_8px_0px_rgba(0,0,0,0.12)]";
const bodyClass = "flex flex-1 flex-col gap-[6px] px-[20px] pb-[20px] pt-[16px]";

function CardImage({ src }: { src: string }) {
  return (
    <div
      className="relative h-[140px] w-full shrink-0 overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(134.99999880589337deg, rgb(0, 0, 0) 0%, rgb(36, 119, 128) 100%)",
      }}
    >
      <Image
        src={src}
        alt=""
        fill
        sizes="(min-width: 640px) 340px, 100vw"
        className="object-cover"
      />
    </div>
  );
}

export default function Platforms() {
  return (
    <section className="w-full overflow-hidden bg-white px-[5%] pb-[85.43px] pt-[60.44px]">
      <div className="mx-auto flex w-full max-w-[960px] flex-col gap-[14.2px]">
        <h2 className="font-sora text-[clamp(21px,5vw,25.6px)] font-bold leading-[29.44px] text-[#0a1416]">
          Platform evidence
        </h2>
        <p className="font-inter text-[16px] leading-[25.6px] text-[#4d6468]">
          A relevant platform is not automatically a public-ready platform. Each
          card shows its <br className="hidden md:block" />
          publication gate.
        </p>
        <ul className="mt-[7.8px] grid grid-cols-1 gap-[18px] sm:grid-cols-2">
          {CARDS.map((card) => (
            <li key={card.title} className={cardClass}>
              <CardImage src={card.img} />
              <div className={bodyClass}>
                <h3 className="font-sora text-[16.8px] font-bold leading-[19.32px] text-[#0a1416]">
                  {card.title}
                </h3>
                <p className="font-inter text-[15.2px] leading-[24.32px] text-[#4d6468]">
                  <Lines lines={card.lines} />
                </p>
                <span className="mt-[4.8px] w-fit max-w-full rounded-full border border-[#247780] px-[10px] pb-[2.47px] pt-px font-inter text-[12.8px] font-semibold leading-[20.48px] text-[#247780]">
                  {card.tag}
                </span>
              </div>
            </li>
          ))}
          <li className={cardClass}>
            <CardImage src="/technology-saas-industry/tablet-earth-night-lights.webp" />
            <div className={bodyClass}>
              <h3 className="font-sora text-[16.8px] font-bold leading-[19.32px] text-[#0a1416]">
                Live operations platforms
              </h3>
              <p className="font-inter text-[15.2px] leading-[24.32px] text-[#4d6468]">
                ZoikoTime, Zoiko HR, Zoiko Payroll,{" "}
                <br className="hidden md:block" />
                Zoiko Billing, Zoiko Sema, ZoikoVertex{" "}
                <br className="hidden md:block" />
                and other relevant live platforms.
              </p>
              <small className="block pt-[3.99px] font-inter text-[13.1px] font-semibold leading-[20.99px] text-[#247780]">
                Approved descriptors only. No universal stack{" "}
                <br className="hidden md:block" />
                adoption implied.
              </small>
            </div>
          </li>
        </ul>
        <div className="max-w-[742.84px] rounded-br-[10px] rounded-tr-[10px] border-l-4 border-[#247780] bg-[#e6f2f4] px-[16px] pb-[12px] pt-[11.05px]">
          <p className="font-inter text-[14.7px] leading-[23.55px] text-[#4d6468]">
            <strong className="font-bold">Evidence-card contract.</strong>{" "}
            Canonical name, approved descriptor, maturity, operator where{" "}
            <br className="hidden md:block" />
            material, technology-company role, availability or market where
            material, evidence or <br className="hidden md:block" />
            documentation, CTA.
          </p>
        </div>
      </div>
    </section>
  );
}
