import Image from "next/image";

const CARDS: {
  title: string;
  img: string;
  lines: string[];
}[] = [
  {
    title: "Service state",
    img: "/technology-saas-industry/tablet-laptop-analytics-dashboard.webp",
    lines: [
      "Operational, degraded, incident,",
      "unavailable or maintenance, only from",
      "the authoritative Status or product",
      "source.",
    ],
  },
  {
    title: "Integration health",
    img: "/technology-saas-industry/tablet-glowing-circuit-board.webp",
    lines: [
      "Source to target state, last success,",
      "error and retry context. No sensitive",
      "payloads in public specimens.",
    ],
  },
  {
    title: "Change / release",
    img: "/technology-saas-industry/tablet-code-editor-screen.webp",
    lines: [
      "Changelog and release evidence only",
      "where maintained. No invented release",
      "cadence.",
    ],
  },
  {
    title: "Observability",
    img: "/technology-saas-industry/tablet-circuit-board-chip.webp",
    lines: [
      "Metrics, logs, traces or health evidence",
      "only where the platform actually",
      "supports them.",
    ],
  },
  {
    title: "Incident communication",
    img: "/technology-saas-industry/tablet-analytics-dashboard-screen.webp",
    lines: [
      "Platform-wide incident state belongs to",
      "Status and Support, not duplicated",
      "marketing copy.",
    ],
  },
  {
    title: "Reliability claim",
    img: "/technology-saas-industry/tablet-earth-night-lights.webp",
    lines: [
      "No uptime percentage, SLA or global",
      "availability claim without approved",
      "evidence or contract context.",
    ],
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

export default function Reliability() {
  return (
    <section className="w-full overflow-hidden bg-white px-[5%] pb-[61.45px] pt-[60.43px]">
      <div className="mx-auto flex w-full max-w-[960px] flex-col gap-[12px]">
        <h2 className="font-sora text-[clamp(21px,5vw,25.6px)] font-bold leading-[29.44px] text-[#0a1416]">
          Reliability, status and observability
        </h2>
        <ul className="mt-[10px] grid grid-cols-1 gap-[18px] sm:grid-cols-2">
          {CARDS.map((card) => (
            <li
              key={card.title}
              className="flex flex-col overflow-hidden rounded-[14px] border border-[#d5e3e5] bg-white shadow-[0px_12px_30px_0px_rgba(0,0,0,0.22),0px_3px_8px_0px_rgba(0,0,0,0.12)]"
            >
              <div
                className="relative h-[140px] w-full shrink-0 overflow-hidden"
                style={{
                  backgroundImage:
                    "linear-gradient(134.99999880589337deg, rgb(0, 0, 0) 0%, rgb(36, 119, 128) 100%)",
                }}
              >
                <Image
                  src={card.img}
                  alt=""
                  fill
                  sizes="(min-width: 640px) 340px, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-[6px] px-[20px] pb-[20px] pt-[10px]">
                <h3 className="font-sora text-[16.8px] font-bold leading-[19.32px] text-[#0a1416]">
                  {card.title}
                </h3>
                <p className="font-inter text-[15.2px] leading-[24.32px] text-[#4d6468]">
                  <Lines lines={card.lines} />
                </p>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-x-[12px] pb-[12px]">
          <a
            href="#"
            className="flex min-h-[48px] w-full items-center justify-center rounded-[10px] border-2 border-[#247780] bg-[#247780] px-[24px] font-inter text-[16px] font-semibold text-white sm:w-auto"
          >
            System Status
          </a>
          <a
            href="#"
            className="mt-3 flex min-h-[48px] w-full items-center justify-center rounded-[10px] border-2 border-[#247780] px-[24px] font-inter text-[16px] font-semibold text-[#247780] sm:mt-0 sm:w-auto"
          >
            Support
          </a>
        </div>
      </div>
    </section>
  );
}
