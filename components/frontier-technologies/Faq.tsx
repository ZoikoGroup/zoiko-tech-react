import Image from "next/image";
import { WRAP } from "./layout";

const QUESTIONS = [
  "Are these products?",
  "Does a prototype promise launch?",
  "Does a paper mean graduation?",
  "Are specific robots or maps available?",
  "Are partners or pilots listed?",
  "How can we explore collaboration?",
];

export default function Faq() {
  return (
    <section id="questions" className="w-full bg-white py-14 lg:pb-[70px] lg:pt-[69px]">
      <div className={`${WRAP} flex flex-col gap-8 lg:flex-row lg:gap-0`}>
        <div className="flex min-w-0 flex-1 flex-col">
          <h2 className="pb-[0.59px] font-poppins text-[32px] font-bold leading-[1.15] tracking-[-1.3px] text-[#102d2f] md:text-[44px] md:leading-[50.6px]">
            Clear answers about exploration.
          </h2>
          <ul className="mt-5 flex w-full flex-col lg:mt-[21px] lg:max-w-[576px]">
            {QUESTIONS.map((q) => (
              <li key={q} className="border-b border-solid border-[rgba(121,153,157,0.33)]">
                <h3 className="flex min-h-[48px] items-center pb-[23.69px] pt-[23.5px] font-poppins text-[17px] font-bold leading-[27.2px] text-[#102d2f]">
                  {q}
                </h3>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative h-[420px] w-full overflow-hidden rounded-[5px] md:h-[526px] lg:w-[350px] lg:shrink-0 lg:self-start">
          <Image
            src="/frontier-technologies/faq-raised-hand-audience.webp"
            alt=""
            fill
            sizes="(min-width: 1024px) 350px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
