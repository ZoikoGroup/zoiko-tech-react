import Image from "next/image";
import Lines from "./Lines";
import { WRAP } from "./layout";

const questions = [
  "Is this a product catalog?",
  "What is Domain-Specific AI?",
  "Are agents fully autonomous?",
  "Does tool success mean the task is complete?",
  "Is Zoiko Gesta publicly available?",
  "Which models or benchmarks are used?",
  "How do we start?",
];

export default function Faq() {
  return (
    <section id="questions" className="w-full bg-white py-14 lg:py-[70px]">
      <div className={`${WRAP} flex flex-col gap-[35px]`}>
        <h2 className="font-poppins text-[32px] font-bold leading-[1.15] tracking-[-1px] text-[#102d2f] md:text-[40px] lg:text-[45px] lg:leading-[51.75px]">
          <Lines lines={["Clear answers before moving to action."]} />
        </h2>
        <ul className="flex w-full flex-col">
          {questions.map((q) => (
            <li
              key={q}
              className="relative flex min-h-[48px] items-center border-b border-[rgba(121,153,157,0.33)] py-[23.5px] pr-10"
            >
              <h3 className="font-poppins text-base font-bold leading-[27.2px] text-[#102d2f] lg:text-[17px]">{q}</h3>
              <Image
                src="/artificial-intelligence-agentic-systems/faq-plus-icon.svg"
                alt=""
                width={16}
                height={16}
                className="absolute right-[7px] top-[calc(50%+0.5px)] size-[15.5px] -translate-y-1/2"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
