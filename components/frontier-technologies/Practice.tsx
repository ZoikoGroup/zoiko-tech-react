import Image from "next/image";
import { WRAP } from "./layout";

const PANELS = [
  { t: "Problem", d: "Actual approved exploratory question.", cls: "" },
  { t: "Method", d: "Supported experiment conditions.", cls: "" },
  { t: "Result", d: "Scoped evidence and limitations.", cls: "lg:pb-[68px] lg:self-start" },
  { t: "Pending", d: "No invented trials, patents, benchmarks or commercial outcomes.", cls: "lg:self-start" },
];

export default function Practice() {
  return (
    <section
      id="practice"
      className="w-full bg-[linear-gradient(129.99deg,#000000_0%,#0a2528_48%,#247780_100%)] py-14 lg:pb-[86px] lg:pt-[70px]"
    >
      <div className={`${WRAP} flex flex-col gap-10 lg:gap-[34.99px]`}>
        <div className="flex flex-col gap-[15.1px] lg:pb-[30px] lg:pt-[51.2px]">
          <h2 className="font-poppins text-[32px] font-bold leading-[1.15] tracking-[-1px] text-white md:text-[41px] md:leading-[47.15px]">
            Exploration in practice
          </h2>
          <p className="pt-[4.91px] font-poppins text-[16px] leading-[25.6px] text-[#c4d7d9]">
            No public experiment records were supplied.
          </p>
        </div>
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-[42px]">
          <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:w-[686px] lg:shrink-0">
            {PANELS.map((p) => (
              <article
                key={p.t}
                className={`flex flex-col gap-3 border-b border-t-2 border-solid border-[rgba(129,180,191,0.27)] bg-[rgba(255,255,255,0.02)] px-[26px] pb-[41px] pt-[31px] ${p.cls}`}
              >
                <h3 className="pb-[0.59px] pt-[9.6px] font-poppins text-[22px] font-bold leading-[28.6px] text-white">{p.t}</h3>
                <p className="font-poppins text-[15px] leading-[27px] text-[#c4d7d9]">{p.d}</p>
              </article>
            ))}
          </div>
          <figure className="flex w-full items-start lg:min-w-px lg:flex-1 lg:pt-[30px]">
            <Image
              src="/frontier-technologies/illustrative-evidence-source-review-archive.webp"
              alt="Illustrative evidence and source review archive"
              width={1000}
              height={667}
              className="h-auto w-full rounded-[16px]"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
