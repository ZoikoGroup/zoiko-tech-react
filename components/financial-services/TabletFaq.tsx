import TabletLines from "./TabletLines";

const questions = [
  "What does Zoiko Tech provide for Financial Services?",
  "Which organizations is this page for?",
  "Does Zoiko Tech itself provide regulated financial services?",
  "Which platforms are relevant?",
  "Is Zoiko Remit available globally?",
  "Does Zoiko replace a bank core, ERP or payment stack?",
  "How should we start?",
];

export default function TabletFaq() {
  return (
    <section id="questions-t" className="w-full overflow-hidden bg-white px-[5%] pb-[94px] pt-[93px] font-poppins">
      <div className="mx-auto flex w-full max-w-[960px] flex-col gap-9">
        <div className="flex w-full max-w-[820px] flex-col gap-[15.2px]">
          <span className="text-[12px] font-bold leading-[19.2px] tracking-[2px] text-[#247780]">17 / BUYER QUESTIONS</span>
          <h2 className="pb-[0.5px] text-[clamp(24px,5vw,29px)] font-bold leading-[1.15] tracking-[-1.3px] text-[#102d2f]">
            <TabletLines lines={["Clear answers before", "the next conversation."]} />
          </h2>
        </div>
        <ul className="flex w-full max-w-[950px] flex-col">
          {questions.map((q) => (
            <li
              key={q}
              className="flex min-h-12 items-center justify-between gap-6 border-b border-[rgba(121,153,157,0.33)] pb-[23.7px] pt-[23.5px] text-[17px] font-bold leading-[27.2px] text-[#102d2f]"
            >
              <span>{q}</span>
              <span aria-hidden="true">+</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
