import Image from "next/image";
import { WRAP } from "./layout";

const cards = [
  { title: "Needs information / approval", text: "Missing evidence or authorization keeps action blocked.", icon: "practice-domain-icon" },
  { title: "Denied / failed / timeout", text: "Preserve reason and safe next action.", icon: "practice-execution-icon" },
  { title: "Accepted / pending verification", text: "Acknowledgment remains separate from authoritative result.", icon: "practice-operational-icon" },
  { title: "Partial / mismatch / escalation", text: "Accountable owner resolves inconsistent downstream state.", icon: "practice-proof-icon" },
  { title: "Cancelled / rolled back", text: "Only when supported; preserve reviewable evidence.", icon: "practice-evidence-icon" },
];

export default function Operations() {
  return (
    <section
      id="operations"
      className="w-full py-14 lg:pb-[70px] lg:pt-[69px]"
      style={{ backgroundImage: "linear-gradient(127.05901950000523deg, rgb(0, 0, 0) 0%, rgb(10, 37, 40) 48%, rgb(36, 119, 128) 100%)" }}
    >
      <div className={`${WRAP} flex flex-col gap-[35px]`}>
        <div className="flex max-w-[850px] flex-col gap-4">
          <h2 className="font-poppins text-[32px] font-bold leading-[1.15] tracking-[-1px] text-white md:text-[40px] lg:text-[45px] lg:leading-[51.75px]">
            Observability, failure &amp; recovery
          </h2>
          <p className="pt-1 font-poppins text-base leading-[25.6px] text-[#c4d7d9]">
            Tool success is not automatically business completion.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
          {cards.map((c) => (
            <article key={c.title} className="flex flex-col items-center gap-3 overflow-hidden rounded-xl border border-[rgba(141,185,196,0.33)] bg-[rgba(255,255,255,0.03)] px-[26px] pb-[41px] pt-[26px] text-center lg:min-h-[332px]">
              <span className="flex w-[46px] shrink-0 items-center justify-center rounded-[10px] bg-[rgba(98,198,202,0.1)] py-[10.5px]">
                <Image src={`/artificial-intelligence-agentic-systems/${c.icon}.svg`} alt="" width={25} height={25} />
              </span>
              <h3 className="w-full pb-[0.59px] pt-[9px] font-poppins text-[22px] font-bold leading-[28.6px] text-white">{c.title}</h3>
              <p className="w-full font-poppins text-[15px] leading-[25.5px] text-[#c4d7d9]">{c.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
