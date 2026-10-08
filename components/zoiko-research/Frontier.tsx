import Image from "next/image";
import { WRAP } from "./layout";

const panels = [
  { n: "01", title: "Exploratory", text: "Early hypothesis, prototype and portfolio state." },
  { n: "02", title: "Published research", text: "Approved artifact with exact review/method limitations." },
  { n: "03", title: "Commercial product", text: "Separate maturity, operator and capability governance." },
  { n: "04", title: "No inference", text: "Visibility never means validated research or generally available product." },
];

export default function Frontier() {
  return (
    <section id="frontier" className="w-full bg-white py-14 lg:pb-[70px] lg:pt-[69px]">
      <div className={WRAP}>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-0">
          <div className="flex w-full flex-col lg:max-w-[715px] lg:flex-1">
            <div className="flex flex-col gap-[15.1px]">
              <h2 className="font-poppins text-[32px] font-bold leading-[1.15] tracking-[-1px] text-[#102d2f] md:text-[41px] md:leading-[47.15px]">
                Frontier boundary
              </h2>
              <p className="pt-[4.195px] font-poppins text-[16px] leading-[25.6px] text-[#587176]">
                Exploration, publication and product readiness are different.
              </p>
            </div>
            <div className="mt-[15.1px] grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-rows-[210.19px_210.19px]">
              {panels.map((p, i) => (
                <article
                  key={p.n}
                  className={`flex flex-col gap-3 border-b border-t-2 border-solid border-[rgba(129,180,191,0.27)] bg-[#f0f7f8] px-[26px] pt-[31px] ${
                    i === 0 ? "pb-[68px] lg:self-stretch" : "pb-[41px] lg:self-start"
                  }`}
                >
                  <span className="font-poppins text-[11px] leading-[17.6px] tracking-[1px] text-[#72aab4]">{p.n}</span>
                  <h3 className="pb-[0.59px] pt-[9.59px] font-poppins text-[22px] font-bold leading-[28.6px] text-[#102d2f]">
                    {p.title}
                  </h3>
                  <p className="font-poppins text-[15px] leading-[27px] text-[#587176]">{p.text}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="relative mx-auto aspect-[351/417] w-full max-w-[351px] shrink-0 lg:ml-auto lg:mr-0 lg:mt-[124.56px] lg:w-[351px]">
            <Image
              src="/zoiko-research/frontier-boundary-isometric-platforms.webp"
              alt=""
              fill
              sizes="351px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
