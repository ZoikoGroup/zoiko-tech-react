import Image from "next/image";
import { WRAP } from "./layout";
import Lines from "./Lines";

const QUESTIONS = [
  "What does Zoiko Tech provide for Retail & Commerce?",
  "Does Zoiko provide a complete ecommerce or POS platform?",
  "Which Zoiko platforms are relevant?",
  "How is payment state handled?",
  "How is customer data governed?",
  "Does Zoiko support local retail discovery or listings?",
  "How do we start?",
];

export default function Faq() {
  return (
    <section id="questions" className="w-full bg-white py-14 md:pt-[93px] md:pb-[94px]">
      <div className={`${WRAP} flex flex-col gap-9`}>
        <div className="flex max-w-[820px] flex-col gap-[15.165px] lg:gap-0">
          <p className="font-poppins text-[12px] font-bold leading-[19.2px] tracking-[2px] text-[#247780] lg:hidden">
            17 / ANSWER-FIRST BUYER QUESTIONS
          </p>
          <h2 className="pb-[0.515px] font-poppins text-[26px] font-bold leading-[30px] tracking-[-1.3px] text-[#102d2f] md:text-[29px] md:leading-[33.35px] lg:pb-0 xl:text-[44px] xl:leading-[50.6px]">
            <Lines
              desktop={["Clear scope.", "A practical starting point."]}
              tablet={["Clear scope.", "A practical starting point."]}
            />
          </h2>
        </div>

        <div className="flex flex-col items-start gap-9 lg:flex-row">
          <ul className="flex w-full max-w-[950px] flex-col lg:min-w-0 lg:flex-1 lg:max-w-none xl:w-[581px] xl:flex-none xl:shrink-0">
            {QUESTIONS.map((q) => (
              <li
                key={q}
                className="flex min-h-[48px] items-center justify-between gap-4 border-b border-[#79999d]/[0.33] py-[23.5px] font-poppins text-[17px] font-bold leading-[27.2px] text-[#102d2f] lg:gap-3 lg:border-[#102d2f]/10 lg:last:border-b-0"
              >
                <span className="min-w-px flex-1">{q}</span>
                <span aria-hidden="true" className="shrink-0">
                  +
                </span>
              </li>
            ))}
          </ul>
          <div className="relative hidden h-[531px] overflow-hidden rounded-[24px] lg:block lg:min-w-0 lg:flex-1 xl:w-[581px] xl:flex-none xl:shrink-0">
            <Image
              src="/retail-commerce/desktop-faq-warehouse-team.webp"
              alt="Retail team reviewing stock on a tablet in a warehouse aisle"
              fill
              sizes="581px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
