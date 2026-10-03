import TabletLines from "./TabletLines";

const questions = [
  "What does Zoiko Tech provide for Public Sector & Government?",
  "Does Zoiko provide a complete government-services platform?",
  "Which public-sector products are available?",
  "Can Zoiko AI make government decisions automatically?",
  "Does Zoiko have government certifications or sovereign hosting?",
  "How is accessibility handled?",
  "How do we start?",
];

export default function TabletFaq() {
  return (
    <section
      id="questions-t"
      className="w-full overflow-hidden py-[70px] font-poppins sm:py-[93px] px-6 md:px-12 lg:px-20"
      style={{ backgroundImage: "linear-gradient(120deg, rgb(0, 0, 0) 0%, rgb(10, 37, 40) 48%, rgb(36, 119, 128) 100%)" }}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-9">
        <div className="flex w-full max-w-[820px] flex-col gap-[15.2px]">
          <p className="text-[12px] font-bold leading-[19.2px] tracking-[2px] text-[#86d4d8]">18 / ANSWER-FIRST BUYER QUESTIONS</p>
          <h2 className="text-[clamp(24px,5vw,29px)] font-bold leading-[1.15] tracking-[-1.3px] text-white">
            <TabletLines lines={["Clear answers for", "a focused evaluation."]} />
          </h2>
        </div>
        <ul className="w-full max-w-[950px]">
          {questions.map((q) => (
            <li key={q} className="border-b border-[rgba(121,153,157,0.33)]">
              <div className="flex min-h-12 items-center justify-between gap-6 py-[23.5px]">
                <h3 className="text-[17px] font-bold leading-[27.2px] text-white">{q}</h3>
                <span aria-hidden="true" className="shrink-0 text-[17px] font-bold leading-[27.2px] text-white">+</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
