import Image from "next/image";
import Lines from "./DesktopLines";

const cards = [
  {
    title: "Zoiko AI",
    body: [
      "Governed agentic intelligence",
      "infrastructure. Public treatment",
      "follows the controlled portfolio",
      "state, with no invented set of",
      "generic chatbot products.",
    ],
  },
  {
    title: "Agentic automation",
    body: [
      "Controlled agents and repeatable",
      "workflows, with evidence and",
      "human accountability.",
    ],
  },
  {
    title: "Domain intelligence",
    body: [
      "Only approved domain-specific",
      "surfaces and public product",
      "evidence.",
    ],
  },
  {
    title: "Model / agent authority",
    body: [
      "Assist, recommend, prepare and",
      "bounded execute modes, kept",
      "separate.",
    ],
  },
  {
    title: "Evaluation",
    body: [
      "Evidence, evaluation and review",
      "state where supported. No",
      "promise of universal",
      "correctness.",
    ],
  },
  {
    title: "Responsible AI",
    body: [
      "Governance, human oversight,",
      "evaluation and accountable",
      "deployment, linked.",
    ],
  },
];

export default function AiSystems() {
  return (
    <section className="w-full bg-white px-[130px] py-24">
      <div className="mx-auto w-full max-w-[1180px]">
        <h2 className="font-sora text-[35.2px] font-bold leading-[40.48px] text-[#0d3632]">
          AI and agentic systems
        </h2>

        <div className="mt-[22.5px] flex items-start">
          <ul className="grid w-[49.24%] shrink-0 grid-cols-2 gap-[18px] xl:grid-rows-[189px_187px_166px]">
            {cards.map((c) => (
              <li
                key={c.title}
                className="flex min-w-0 flex-col gap-[6px] overflow-hidden rounded-[14px] border border-[#7fd0d9]/50 bg-[#d7e9ec] p-5"
              >
                <h3 className="font-sora text-[16.8px] font-bold leading-[19.32px] text-[#0d3632]">
                  {c.title}
                </h3>
                <p className="font-inter text-[15.2px] leading-[24.32px] text-[#4d6468]">
                  <Lines lines={c.body} />
                </p>
              </li>
            ))}
          </ul>

          <div className="relative -mt-[33px] ml-[0.34%] aspect-square w-[50.42%] shrink-0">
            <Image
              src="/technology-saas-industry/desktop-ai-systems-illustration.webp"
              alt="Isometric diagram of governed AI and agentic systems"
              fill
              sizes="(min-width: 1440px) 595px, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
