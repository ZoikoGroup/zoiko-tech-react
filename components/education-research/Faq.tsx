import Image from "next/image";
import Lines from "./Lines";
import { WRAP } from "./layout";

const QUESTIONS = [
  "What does Zoiko Tech provide for Education & Research?",
  "What is Zoiko Research?",
  "Does Zoiko provide an LMS or student-information system?",
  "What does Education under Frontier Technologies mean?",
  "Can Zoiko AI grade students or make academic decisions?",
  "How are research sources handled?",
  "How do we start?",
];

export default function Faq() {
  return (
    <section
      id="questions"
      className="w-full bg-[linear-gradient(121deg,rgb(0,0,0)_0%,rgb(10,37,40)_48%,rgb(36,119,128)_100%)] py-14 md:py-20 lg:pb-[94px] lg:pt-[93px]"
    >
      <div className={`${WRAP} flex flex-col gap-9`}>
        <div className="flex max-w-[820px] flex-col gap-[15px]">
          <h2 className="font-poppins text-[30px] font-bold leading-[1.15] tracking-[-1.3px] text-white md:text-[36px] lg:text-[44px] lg:leading-[50.6px]">
            Clear answers before you start.
          </h2>
          <p className="pt-[5px] font-inter text-base leading-[25.6px] text-[#c4d7d9]">
            <Lines lines={["Scope, authority and research maturity guide the conversation."]} />
          </p>
        </div>
        <div className="grid grid-cols-1 items-center gap-9 lg:grid-cols-[minmax(0,1fr)_518px]">
          <ul>
            {QUESTIONS.map((q) => (
              <li key={q} className="border-b border-[rgba(121,153,157,0.33)]">
                <div className="relative flex min-h-[48px] items-center py-[23.6px] pr-9">
                  <h3 className="flex-1 font-poppins text-base font-bold leading-[27.2px] text-white lg:text-[17px]">
                    {q}
                  </h3>
                  <Image
                    src="/education-research/faq-plus-icon.svg"
                    alt=""
                    width={16}
                    height={16}
                    className="absolute right-1 top-1/2 size-4 -translate-y-1/2"
                  />
                </div>
              </li>
            ))}
          </ul>
          <div className="relative h-[320px] w-full overflow-hidden rounded-[24px] md:h-[420px] lg:h-[533.33px]">
            <Image
              src="/education-research/faq-student-researcher.webp"
              alt="Researcher working at a laptop in a library office"
              fill
              sizes="(min-width: 1024px) 518px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/[0.08]" />
          </div>
        </div>
      </div>
    </section>
  );
}
