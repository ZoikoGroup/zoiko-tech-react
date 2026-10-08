import Image from "next/image";
import { WRAP } from "./layout";

const QUESTIONS = [
  "What are Guides & Reports?",
  "Are all resources downloadable?",
  "Must I submit a form?",
  "Are reports research papers?",
  "Does a guide prove a live product feature?",
  "How do I know it is current?",
  "What if the resource has been replaced?",
];

export default function Faq() {
  return (
    <section id="questions" className="w-full bg-white py-14 lg:pb-[75px] lg:pt-[74px]">
      <div className={`${WRAP} flex flex-col gap-[35px]`}>
        <div className="flex max-w-[830px] flex-col gap-4">
          <h2 className="font-poppins text-[30px] font-bold leading-[1.15] tracking-[-1px] text-[#102d2f] md:text-[38px] lg:text-[45px] lg:leading-[51.75px]">
            Clear answers before downloading.
          </h2>
          <p className="pt-[4px] font-poppins text-[16px] leading-[25.6px] text-[#587176]">
            Purpose, currentness, access and format should be understandable.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <ul className="flex flex-col">
            {QUESTIONS.map((q) => (
              <li
                key={q}
                className="relative flex min-h-[48px] items-center border-b border-[rgba(121,153,157,0.33)] pb-[23.69px] pr-[32px] pt-[23.5px]"
              >
                <span className="flex-1 font-poppins text-[17px] font-bold leading-[27.2px] text-[#102d2f]">
                  {q}
                </span>
                <Image
                  src="/guides-reports/icon-plus.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="absolute right-[8px] top-1/2 -translate-y-1/2"
                />
              </li>
            ))}
          </ul>
          <div className="relative h-[320px] w-full overflow-hidden rounded-[12px] md:h-[420px] lg:h-[533px]">
            <Image
              src="/guides-reports/faq-professional-laptop.webp"
              alt=""
              fill
              sizes="(min-width: 1024px) 591px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[rgba(16,45,47,0.08)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
