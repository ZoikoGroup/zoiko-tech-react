import Image from "next/image";
import { WRAP } from "./layout";
import Lines from "./Lines";

const CARDS = [
  { icon: "/guides-reports/icon-document-teal.svg", title: "Identity & purpose", text: "Exact approved title, type, meaningful summary, task or decision supported and audience." },
  { icon: "/guides-reports/icon-user-teal.svg", title: "Ownership & currentness", text: "Public-safe owner/reviewer, publication/review date, version and supersession state." },
  { icon: "/guides-reports/icon-lock-teal.svg", title: "Access & artifact", text: "Open, gated, controlled or unavailable. File format, size and page count only when verified." },
];

export default function CardContract() {
  return (
    <section id="card-contract" className="w-full bg-white py-14 lg:pb-[75px] lg:pt-[74px]">
      <div className={`${WRAP} flex flex-col gap-[35px]`}>
        <div className="flex w-full max-w-[830px] flex-col gap-[15.4px]">
          <h2 className="font-poppins text-[32px] font-bold leading-[1.15] tracking-[-1px] text-[#102d2f] md:text-[40px] lg:text-[45px] lg:leading-[51.75px]">
            <Lines lines={["Understand a resource before", "opening it."]} />
          </h2>
          <p className="pt-[4.6px] font-poppins text-[16px] leading-[25.6px] text-[#587176]">
            Discovery cards preserve purpose, scope and access.
          </p>
        </div>
        <ul className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((c) => (
            <li
              key={c.title}
              className="flex flex-col items-center justify-center gap-3 rounded-[10px] border border-solid border-[rgba(145,191,197,0.33)] bg-[#f2f8f9] px-[27px] pb-[42px] pt-[27px]"
            >
              <span className="flex w-[46px] items-center justify-center rounded-[10px] bg-[#deefef] py-[10.5px]">
                <Image src={c.icon} alt="" width={25} height={25} />
              </span>
              <h3 className="w-full pt-[10px] text-center font-poppins text-[21px] font-bold leading-[27.3px] text-[#102d2f]">
                {c.title}
              </h3>
              <p className="w-full text-center font-poppins text-[15px] leading-[24px] text-[#587176]">{c.text}</p>
            </li>
          ))}
        </ul>
        <div className="relative h-[220px] w-full overflow-hidden rounded-[10px] md:h-[320px] lg:h-[431px]">
          <Image
            src="/guides-reports/card-contract-woman-reviewing-report.webp"
            alt="Professional reviewing a report beside a laptop in an office"
            fill
            sizes="(min-width: 1440px) 1280px, 100vw"
            className="object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}
