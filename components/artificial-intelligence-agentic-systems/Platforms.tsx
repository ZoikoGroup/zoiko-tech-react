import Image from "next/image";
import { WRAP } from "./layout";

const cards = [
  { title: "Zoiko AI", text: "Governed agentic intelligence infrastructure. Supplied navigation state: Finish / domain-stack landing page.", icon: "adoption-map-icon" },
  { title: "ZoikoVertex", text: "Governed agentic marketing operating system; exact public claims remain evidence-gated.", icon: "adoption-govern-icon" },
  { title: "Domain evidence", text: "Only current approved platform/solution relationships.", icon: "adoption-pilot-icon" },
  { title: "Naming & operator", text: "Canonical names, ownership and readiness require registry validation.", icon: "adoption-evaluate-icon" },
  { title: "Capability limits", text: "No invented models, benchmarks, autonomy, latency, pricing, hosting or regulated eligibility.", icon: "adoption-expand-icon" },
];

export default function Platforms() {
  return (
    <section id="platforms" className="w-full bg-white py-14 lg:pb-[70px] lg:pt-[69px]">
      <div className={`${WRAP} flex flex-col gap-[35px]`}>
        <div className="flex max-w-[850px] flex-col gap-4">
          <h2 className="font-poppins text-[32px] font-bold leading-[1.15] tracking-[-1px] text-[#102d2f] md:text-[40px] lg:text-[45px] lg:leading-[51.75px]">
            Platform evidence retains maturity
          </h2>
          <p className="pt-1 font-poppins text-base leading-[25.6px] text-[#587176]">
            Architecture is not a product catalog.
          </p>
        </div>
        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <article key={c.title} className="flex flex-col items-center gap-3 overflow-hidden rounded-xl border border-[rgba(141,185,196,0.33)] bg-[#f1f8f9] px-[26px] pb-[41px] pt-[26px] text-center">
              <span className="flex w-[46px] shrink-0 items-center justify-center rounded-[10px] bg-[#deefef] py-[10.5px]">
                <Image src={`/artificial-intelligence-agentic-systems/${c.icon}.svg`} alt="" width={25} height={25} />
              </span>
              <h3 className="w-full pb-[0.59px] pt-[9px] font-poppins text-[22px] font-bold leading-[28.6px] text-[#102d2f]">{c.title}</h3>
              <p className="w-full font-poppins text-[15px] leading-[25.5px] text-[#587176]">{c.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
