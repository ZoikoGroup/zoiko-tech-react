import Image from "next/image";
import Lines from "./Lines";
import { WRAP } from "./layout";

const cards = [
  { icon: "practice-domain-icon", title: "Domain pattern", text: "Authorized sources → derived analysis → human review." },
  { icon: "practice-execution-icon", title: "Execution pattern", text: "Plan → policy/approval → bounded action → authoritative result." },
  { icon: "practice-operational-icon", title: "Operational pattern", text: "Detect partial outcomes → escalate → retain evidence." },
  { icon: "practice-proof-icon", title: "Proof requirement", text: "Actual deployment scope, product state and approved outcome." },
  { icon: "practice-evidence-icon", title: "Evidence pending", text: "No fabricated customers, metrics, accuracy or autonomous success claims." },
];

export default function Practice() {
  return (
    <section
      id="practice"
      className="w-full py-14 lg:pb-[70px] lg:pt-[69px]"
      style={{
        backgroundImage:
          "linear-gradient(112.33831146832456deg, rgb(0, 0, 0) 0%, rgb(10, 37, 40) 48%, rgb(36, 119, 128) 100%)",
      }}
    >
      <div className={`${WRAP} flex flex-col gap-[35px]`}>
        <div className="flex max-w-[850px] flex-col gap-4">
          <h2 className="font-poppins text-[32px] font-bold leading-[1.15] tracking-[-1px] text-white md:text-[40px] lg:text-[45px] lg:leading-[51.75px]">
            <Lines lines={["Technology in practice needs proof"]} />
          </h2>
          <p className="pt-1 font-poppins text-base leading-[25.6px] text-[#c4d7d9]">
            No approved deployment records or measured results were supplied.
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <li
              key={c.title}
              className="flex flex-col items-start gap-3 rounded-xl border border-[rgba(141,185,196,0.33)] bg-[rgba(255,255,255,0.03)] px-[26px] pb-[41px] pt-[26px]"
            >
              <span className="flex w-[46px] items-center justify-center rounded-[10px] bg-[rgba(98,198,202,0.1)] py-[10.5px]">
                <Image src={`/artificial-intelligence-agentic-systems/${c.icon}.svg`} alt="" width={25} height={25} />
              </span>
              <h3 className="w-full pt-[9px] font-poppins text-[22px] font-bold leading-[28.6px] text-white">
                {c.title}
              </h3>
              <p className="w-full font-poppins text-[15px] leading-[25.5px] text-[#c4d7d9]">{c.text}</p>
            </li>
          ))}
        </ul>
        <div className="relative h-[200px] w-full overflow-hidden rounded-xl border border-[rgba(141,185,196,0.33)] md:h-[260px] lg:h-[320px]">
          <Image
            src="/artificial-intelligence-agentic-systems/practice-team-collaboration-photo.webp"
            alt="Team collaborating around a laptop in an open office"
            fill
            sizes="(min-width: 1440px) 1280px, 100vw"
            className="rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
