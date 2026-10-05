import Lines from "./Lines";
import { WRAP } from "./layout";

const QUESTIONS = [
  "What does Zoiko Tech provide for Real Estate & Property?",
  "What is Zoiko Rooms?",
  "Does Zoiko provide a complete property-management or booking platform?",
  "Does payment mean the property transaction is complete?",
  "How is compliance handled?",
  "How is ownership represented?",
  "How do we start?",
];

export default function Faq() {
  return (
    <section id="questions" className="w-full bg-white flex flex-col items-center justify-center py-14 md:py-16 lg:pb-[94px] lg:pt-[93px] px-6 md:px-12 lg:px-20">
      <div className="flex flex-col items-start gap-9 w-full max-w-[950px]">
        <div className="w-full max-w-[820px]">
          <h2 className="font-poppins text-[32px] font-bold leading-[1.15] tracking-[-1.3px] text-[#102d2f] md:text-[40px] lg:text-[44px] lg:leading-[50.6px]">
            <Lines lines={["Clear scope.", "A focused next conversation."]} />
          </h2>
        </div>
        <div className="w-full">
          {QUESTIONS.map((q) => (
            <details key={q} className="group border-b border-[rgba(121,153,157,0.33)]">
              <summary className="flex min-h-[48px] cursor-pointer list-none items-center justify-between gap-6 pb-[23.69px] pt-[23.5px] font-poppins text-[17px] font-bold leading-[27.2px] text-[#102d2f] [&::-webkit-details-marker]:hidden">
                <span>{q}</span>
                <span aria-hidden className="shrink-0 group-open:hidden">+</span>
                <span aria-hidden className="hidden shrink-0 group-open:inline">&minus;</span>
              </summary>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
