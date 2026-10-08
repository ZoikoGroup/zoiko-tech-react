import Image from "next/image";
import Lines from "./Lines";
import { WRAP } from "./layout";

const CARDS = [
  {
    img: "/guides-reports/reports-purpose-scope.webp",
    title: "Purpose & scope",
    text: "Question, period, domain and applicable audience or geography.",
    pb: "lg:pb-[66px]",
  },
  {
    img: "/guides-reports/reports-method-evidence.webp",
    title: "Method & evidence",
    text: "Sources, population and assumptions for data-led or comparative analysis.",
    pb: "lg:pb-[66px]",
  },
  {
    img: "/guides-reports/reports-findings-limits.webp",
    title: "Findings & limits",
    text: "No invented surveys or analyst conclusions. Charts require accessible equivalents, units, dates and source context.",
    pb: "",
  },
];

export default function Reports() {
  return (
    <section id="reports" className="w-full bg-white py-14 lg:pb-[75px] lg:pt-[74px]">
      <div className={`${WRAP} flex flex-col gap-[35px]`}>
        <div className="flex max-w-[830px] flex-col gap-[15.4px]">
          <h2 className="font-poppins text-[32px] font-bold leading-[1.15] tracking-[-1px] text-[#102d2f] md:text-[38px] lg:text-[45px] lg:leading-[51.75px]">
            <Lines lines={["A report explains its question and", "method."]} />
          </h2>
          <p className="pt-[4.6px] font-poppins text-base leading-[25.6px] text-[#587176]">
            Source-backed findings retain their scope and limitations.
          </p>
        </div>
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((c) => (
            <li
              key={c.title}
              className={`flex flex-col gap-3 rounded-[10px] border border-[rgba(145,191,197,0.33)] bg-[#f2f8f9] px-[27px] pb-[42px] pt-[27px] ${c.pb}`}
            >
              <div className="relative h-[220px] w-full overflow-hidden rounded-[10px]">
                <Image
                  src={c.img}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 354px, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <h3 className="pt-[10px] font-poppins text-[21px] font-bold leading-[27.3px] text-[#102d2f]">
                {c.title}
              </h3>
              <p className="font-poppins text-[15px] leading-6 text-[#587176]">{c.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
