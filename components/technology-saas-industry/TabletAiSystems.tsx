const BR = <br className="hidden md:block" />;

const cards: { title: string; body: React.ReactNode }[] = [
  {
    title: "Zoiko AI",
    body: (
      <>
        Governed agentic intelligence {BR}infrastructure. Public treatment follows {BR}the controlled portfolio state, with no {BR}invented set of generic chatbot {BR}products.
      </>
    ),
  },
  {
    title: "Agentic automation",
    body: (
      <>
        Controlled agents and repeatable {BR}workflows, with evidence and human {BR}accountability.
      </>
    ),
  },
  {
    title: "Domain intelligence",
    body: (
      <>
        Only approved domain-specific surfaces {BR}and public product evidence.
      </>
    ),
  },
  {
    title: "Model / agent authority",
    body: (
      <>
        Assist, recommend, prepare and {BR}bounded execute modes, kept separate.
      </>
    ),
  },
  {
    title: "Evaluation",
    body: (
      <>
        Evidence, evaluation and review state {BR}where supported. No promise of {BR}universal correctness.
      </>
    ),
  },
  {
    title: "Responsible AI",
    body: (
      <>
        Governance, human oversight, {BR}evaluation and accountable deployment, {BR}linked.
      </>
    ),
  },
];

export default function AiSystems() {
  return (
    <section
      className="w-full overflow-hidden px-[5%] pb-[61.44px] pt-[60.44px]"
      style={{
        backgroundImage:
          "linear-gradient(135.01399287347652deg, rgb(0, 0, 0) 0%, rgb(28, 92, 98) 100%)",
      }}
    >
      <div className="mx-auto flex w-full max-w-[960px] flex-col gap-[22px]">
        <h2 className="font-sora text-[clamp(22px,3.33vw,25.6px)] font-bold leading-[29.44px] text-white">
          AI and agentic systems
        </h2>

        <ul className="grid grid-cols-1 gap-[18px] sm:grid-cols-2">
          {cards.map((c) => (
            <li
              key={c.title}
              className="flex flex-col gap-[6px] overflow-hidden rounded-[14px] border border-[rgba(127,208,217,0.35)] bg-[rgba(255,255,255,0.06)] p-5"
            >
              <h3 className="font-sora text-[16.8px] font-bold leading-[19.32px] text-white">
                {c.title}
              </h3>
              <p className="font-inter text-[15.2px] font-normal leading-[24.32px] text-[#dcecee]">
                {c.body}
              </p>
            </li>
          ))}
        </ul>

        <div className="rounded-br-[10px] rounded-tr-[10px] border-l-4 border-[#7fd0d9] bg-[rgba(0,0,0,0.35)] px-4 pb-3 pt-[13px]">
          <p className="font-inter text-[14.7px] leading-[23.55px] text-[#dcecee]">
            <strong className="font-bold">AI claim boundary.</strong> No implication that Zoiko AI or an agent can autonomously take material {BR}business, financial, security, legal, employment or customer actions outside approved tool, {BR}policy and human-authority boundaries.
          </p>
        </div>

        <div className="flex flex-col gap-3 pt-[2px] sm:flex-row sm:flex-wrap">
          <a
            href="/ai-governance-assurance"
            className="flex min-h-[48px] items-center justify-center rounded-[10px] border-2 border-white bg-white px-6 text-center font-inter text-base font-semibold text-black"
          >
            Explore AI Governance &amp; Assurance
          </a>
          <a
            href="#"
            className="flex min-h-[48px] items-center justify-center rounded-[10px] border-2 border-[#7fd0d9] px-6 text-center font-inter text-base font-semibold text-white"
          >
            Responsible AI
          </a>
        </div>
      </div>
    </section>
  );
}
