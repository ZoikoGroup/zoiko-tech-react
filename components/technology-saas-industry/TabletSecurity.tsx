const CARDS: { title: string; lines: string[] }[] = [
  {
    title: "Security",
    lines: [
      "Secure engineering, identity, least",
      "privilege, resilience and responsible",
      "disclosure at approved scope.",
    ],
  },
  {
    title: "Privacy",
    lines: [
      "Purpose limitation, data minimization and",
      "privacy-conscious architecture.",
    ],
  },
  {
    title: "Compliance",
    lines: [
      "Evidence and regulatory routes.",
      "“Compliant” only when legally verified.",
    ],
  },
  {
    title: "AI governance",
    lines: ["Human oversight, evaluation and", "accountable deployment."],
  },
  {
    title: "Accessibility",
    lines: ["WCAG 2.2 AA minimum for the public", "experience."],
  },
];

const CHIPS = [
  "Certified / Attested",
  "Compliant, if legally verified",
  "Aligned / Designed to",
  "Roadmap / Target",
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
  "flex flex-col gap-[5.88px] overflow-hidden rounded-[14px] border border-[rgba(127,208,217,0.35)] bg-[rgba(255,255,255,0.06)] p-[20px]";

export default function Security() {
  return (
    <section
      className="w-full overflow-hidden px-[5%] pb-[61.44px] pt-[60.44px]"
      style={{
        backgroundImage:
          "linear-gradient(135.01454070008214deg, rgb(0, 0, 0) 0%, rgb(28, 92, 98) 100%)",
      }}
    >
      <div className="mx-auto flex w-full max-w-[960px] flex-col gap-[20px]">
        <h2 className="font-sora text-[clamp(21px,5vw,25.6px)] font-bold leading-[29.44px] text-white">
          Security, privacy and Responsible AI
        </h2>
        <ul className="mt-[2px] grid grid-cols-1 gap-[18px] sm:grid-cols-2">
          {CARDS.map((card) => (
            <li key={card.title} className={cardClass}>
              <h3 className="font-sora text-[16.8px] font-bold leading-[19.32px] text-white">
                {card.title}
              </h3>
              <p className="font-inter text-[15.2px] leading-[24.32px] text-[#dcecee]">
                <Lines lines={card.lines} />
              </p>
            </li>
          ))}
          <li className={cardClass}>
            <h3 className="font-sora text-[16.8px] font-bold leading-[19.32px] text-white">
              Claims hierarchy
            </h3>
            <p className="font-inter text-[15.2px] leading-[24.32px] text-[#dcecee]">
              From strongest to weakest, each clearly{" "}
              <br className="hidden md:block" />
              distinct.
            </p>
            <ul className="flex flex-col items-start gap-[8px] pt-[6.09px]">
              {CHIPS.map((chip) => (
                <li
                  key={chip}
                  className="rounded-full border border-[#7fd0d9] px-[14px] pb-[4.75px] pt-[3px] font-inter text-[13.6px] font-semibold leading-[21.76px] text-[#7fd0d9]"
                >
                  {chip}
                </li>
              ))}
            </ul>
          </li>
        </ul>
        <div className="flex flex-wrap gap-x-[12px] pb-[12px]">
          <a
            href="#"
            className="flex min-h-[48px] w-full items-center justify-center rounded-[10px] border-2 border-white bg-white px-[24px] font-inter text-[16px] font-semibold text-black sm:w-auto"
          >
            Trust Center
          </a>
          <a
            href="#"
            className="mt-3 flex min-h-[48px] w-full items-center justify-center rounded-[10px] border-2 border-[#7fd0d9] px-[24px] font-inter text-[16px] font-semibold text-white sm:mt-0 sm:w-auto"
          >
            Responsible AI
          </a>
        </div>
      </div>
    </section>
  );
}
